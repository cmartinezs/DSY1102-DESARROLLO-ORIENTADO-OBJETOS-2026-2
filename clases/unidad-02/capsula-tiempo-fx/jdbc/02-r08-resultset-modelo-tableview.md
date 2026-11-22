# Guía R08 · SELECT, ResultSet, mapeo a MensajeFuturo y TableView

**DSY1102 · Cápsula del Tiempo FX · Continuación directa de R07 (MariaDB)**  
**Duración orientativa:** 90–120 minutos · **Java 21** · **JDBC** · **MVC** · **PreparedStatement** · **ResultSet**

[← Volver a R07](01-r07-conexion-insert-validacion.md) · [Índice](README.md) · [Slides anteriores](../index.html)

## Problema y resultado esperado

En R07 logramos registrar mensajes reales en **capsula_tiempo.mensajes_futuros**. Sin embargo, **listar() devolvía List.of()**: tras cerrar JavaFX y volver a abrir, TableView aparecía vacío, aunque MariaDB conservaba los datos. El incremento R08 resuelve esa separación mediante SELECT.

**Resultado observable:** al iniciar la aplicación, se consulta MariaDB, cada fila de ResultSet se convierte en un objeto MensajeFuturo, Service conserva la lista y HelloController muestra todos los mensajes en TableView. Tras cerrar y reiniciar, el listado debe seguir mostrando los registros previamente insertados.

**Requisitos funcionales:** listar filas guardadas; mantener alta de nuevos mensajes; mostrar resultado correcto tras navegación, cierre y reinicio; informar errores de consulta sin presentar un listado falsamente vacío.

**Requisitos técnicos:** usar Connection, PreparedStatement.executeQuery, ResultSet.next, getString/getInt, List<MensajeFuturo>, FXCollections.observableArrayList y TableView. No escribir SQL en Controller.

## Paso 0 · Confirmar que completaste R07

Abre el proyecto **CapsulaTiempo-JDBC** del final de [R07](01-r07-conexion-insert-validacion.md), no el proyecto JSON R06 ni una nueva plantilla IntelliJ. Confirma:

- MariaDB encendido y DB_USER/DB_PASSWORD/DB_URL configurados en la ejecución.
- Existe la tabla **capsula_tiempo.mensajes_futuros**.
- [JdbcMensajeDao R07](codigo/r07/JdbcMensajeDao.java) ya tiene INSERT con PreparedStatement y un listar() temporal que devuelve List.of().
- [HelloController R07](codigo/r07/HelloController.java) ya tiene las tres TableColumn y la vinculación mediante ReadOnlyStringWrapper.
- La clase [MensajeFuturo original R04](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/09e5b99e9dce71998333f6c2718ff29040d9b00e/src/main/java/cl/duoc/dsy1102/timecapsule/model/MensajeFuturo.java) expone el constructor (autor, texto, plazoAnios) y los tres getters.

**Checkpoint 0:** ejecuta en MariaDB:

~~~sql
SELECT id, autor, texto, plazo_anios FROM capsula_tiempo.mensajes_futuros ORDER BY id ASC;
~~~

Deben aparecer las filas que guardaste en R07. Si no hay ninguna, inserta una desde JavaFX antes de seguir.

## Paso 1 · Comprender el recorrido completo

~~~text
MariaDB / tabla mensajes_futuros
            |
    SELECT con PreparedStatement
            |
     ResultSet (filas SQL)
            |
    while (rs.next()) + getters
            |
   new MensajeFuturo(autor, texto, plazo)
            |
    List<MensajeFuturo> (Service)
            |
    FXCollections.observableArrayList(...)
            |
       TableView JavaFX
~~~

**Distinciones:** executeUpdate se usa para INSERT y devuelve filas afectadas; executeQuery se usa para SELECT y devuelve un ResultSet. ResultSet **no es** una List; es un cursor JDBC que avanza por filas mediante next(). El mapeo toma los datos de cada fila y construye **un objeto nuevo** del modelo. TableView no entiende una consulta SQL ni debe abrir conexiones.

## Paso 2 · Implementar SELECT en JdbcMensajeDao

En IntelliJ abre **src/main/java/cl/duoc/dsy1102/timecapsule/dao/JdbcMensajeDao.java**. Compara el original [R07](codigo/r07/JdbcMensajeDao.java) con la **versión completa R08**:

[**Abrir JdbcMensajeDao.java R08 — código directamente en GitHub**](codigo/r08/JdbcMensajeDao.java)

Reemplaza solamente esa clase por la versión R08. **No crees dos clases JdbcMensajeDao con el mismo paquete y nombre.** La versión R08 conserva el INSERT y agrega SELECT.

El nuevo método listar() usa:

~~~java
String sql = "SELECT autor, texto, plazo_anios FROM mensajes_futuros ORDER BY id ASC";
List<MensajeFuturo> mensajes = new ArrayList<>();

try (Connection c = ConexionBD.abrir();
     PreparedStatement ps = c.prepareStatement(sql);
     ResultSet rs = ps.executeQuery()) {
    while (rs.next()) {
        MensajeFuturo m = new MensajeFuturo(
            rs.getString("autor"),
            rs.getString("texto"),
            rs.getInt("plazo_anios")
        );
        mensajes.add(m);
    }
}
return mensajes;
~~~

**Explicación paso a paso:**

1. Se construye una consulta SELECT con columnas explícitas. ORDER BY id ASC produce orden reproducible; sin ORDER BY la BD no garantiza orden.
2. Se crea una **lista Java vacía** de MensajeFuturo; no se envía un ResultSet a la UI.
3. ConexionBD.abrir() usa las variables del entorno, como en R07.
4. prepareStatement prepara SQL. executeQuery devuelve ResultSet.
5. rs.next() avanza el cursor: false cuando se acabaron las filas.
6. getString("autor"), getString("texto") y getInt("plazo_anios") obtienen las columnas por sus nombres exactos.
7. new MensajeFuturo(...) transforma los valores de UNA fila en UN objeto del dominio.
8. mensajes.add(...) reúne todos los objetos; al cerrar el try se cierran ResultSet, PreparedStatement y Connection.

**No usemos SELECT * aquí:** seleccionar columnas específicas deja claro qué campos consume el mapper. No necesitamos consultar id ni creado_en mientras el modelo tenga únicamente autor, texto y plazoAnios.

**Checkpoint 2:** el método compila, retorna List<MensajeFuturo> y no devuelve todavía List.of(). Responde qué pasa si la consulta devuelve 0, 1 o 3 filas.

## Paso 3 · Conectar sin cambiar el Controller

La buena separación MVC nos ahorra rehacer el TableView: el [MensajeService](codigo/r07/MensajeService.java) carga datos en su constructor:

~~~java
this.mensajes = new ArrayList<>(dao.listar());
~~~

El [HelloController](codigo/r07/HelloController.java) usa:

~~~java
tablaMensajes.setItems(
    FXCollections.observableArrayList(app.getMensajeService().listar())
);
~~~

Y sus tres columnas convierten cada MensajeFuturo en textos visibles mediante los getters, sin leer columnas SQL. Esta es la conexión entre persistencia y vista:

**MariaDB → JdbcMensajeDao → List<MensajeFuturo> → MensajeService → ObservableList → TableView**.

No agregues SQL a HelloController ni cambies el FXML: el valor pedagógico de R08 está precisamente en **reutilizar la pantalla que ya teníamos**.

## Paso 4 · Ejecutar y comprobar reinicio

1. Con MariaDB ejecutándose, corre **mvn clean javafx:run** desde una configuración que contenga las variables de entorno.
2. El TableView debe mostrar las filas existentes en la base, aunque hayan sido guardadas en R07 antes del cierre.
3. Abre el formulario y guarda **Pedro / Ya aprendí ResultSet / 10**.
4. Comprueba que aparece en la tabla al volver. Ejecuta en MariaDB:

~~~sql
SELECT COUNT(*) AS total FROM capsula_tiempo.mensajes_futuros;
SELECT autor, texto, plazo_anios FROM capsula_tiempo.mensajes_futuros ORDER BY id ASC;
~~~

5. Cierra **completamente** JavaFX y ejecuta otra vez. Los registros deben continuar visibles.
6. Prueba autor vacío y plazo no permitido desde el Service (por ejemplo 3): no debe modificarse la cantidad de filas.
7. Detén MariaDB e intenta reiniciar: HelloApplication debe mostrar un error de carga en lugar de afirmar que «no hay mensajes». Vuelve a iniciar el servidor después de la prueba.

**Checkpoint 4:** [ ] INSERT existente conservado; [ ] SELECT recupera filas; [ ] ResultSet se mapea a modelo; [ ] TableView muestra datos; [ ] reinicio conserva datos; [ ] validación evita altas; [ ] falla de BD produce error visible.

## Diagnóstico por síntomas

| Síntoma | Posible causa y prueba |
| --- | --- |
| SQL devuelve filas, JavaFX está vacío | Verificar que usaste DAO R08, no R07; confirma DB_URL y usuario |
| Unknown column | Compara nombres de columnas contra DESCRIBE mensajes_futuros |
| Tabla muestra objetos raros / columnas vacías | No enlazaste los getters de MensajeFuturo en el cellValueFactory |
| Error al compilar Java | Revisa imports java.sql.ResultSet y java.util.ArrayList, paquete y nombre |
| JavaFX no abre si DB está caída | Comportamiento de error previsto en R08; recuperar servidor, no ocultar SQLException |
| Duplicados en la UI | Revisa que no mantuviste las filas de muestra de R04 o agregaste dos veces el mismo mensaje |

## Reflexión y comprobación final

1. ¿Por qué executeQuery retorna ResultSet mientras executeUpdate retorna int?
2. ¿Por qué el ResultSet se transforma en objetos MensajeFuturo y no se entrega directamente al Controller?
3. ¿Qué responsabilidades cumplen DAO, Service, Model, Controller y FXML?
4. ¿Qué significa que JavaFX muestre cero filas mientras MariaDB contiene dos? ¿En cuál capa empezarías a diagnosticar?
5. ¿Qué cambia en persistencia cuando se pasa de un archivo JSON a registros relacionales? ¿Qué NO cambia de MVC?

**Evidencia sin capturas:** incluye salida SQL antes/después, descripción de la prueba de reinicio, un fragmento breve de tu mapeo y explicación de responsabilidades. No adjuntes contraseñas.

**Alcance:** estos dos incrementos enseñan INSERT y SELECT. UPDATE, DELETE, concurrencia, pools y migraciones de datos son materia posterior; no afirmar CRUD completo. El ejemplo de JDBC no reemplaza el histórico R05–R06 basado en JSON.

[← R07](01-r07-conexion-insert-validacion.md) · [Índice](README.md)
