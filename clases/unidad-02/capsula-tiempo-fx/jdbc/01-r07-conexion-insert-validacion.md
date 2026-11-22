# Guía R07 · JavaFX, JDBC y MariaDB: conexión, INSERT y validación

**DSY1102 · Cápsula del Tiempo FX · Extensión práctica de las slides R00–R06**  
**Duración orientativa:** 90–120 minutos · **Java 21** · **JavaFX 21.0.6** · **MariaDB Connector/J 3.5.11**

[← Índice](README.md) · [Continuar a R08 →](02-r08-resultset-modelo-tableview.md) · [Slides anteriores](../index.html)

## Contrato y punto de partida

**Problema:** R04 conservaba mensajes en una ObservableList durante la sesión; R05–R06 introdujeron JSON para persistirlos. Ahora queremos conocer una **segunda forma de persistencia**: guardar cada mensaje como fila en MariaDB.

**Decisión didáctica:** para evitar mezclar simultáneamente dos tecnologías de almacenamiento, esta práctica utiliza **una copia separada del snapshot R04**, que ya trae las dos pantallas FXML, la navegación, el modelo MensajeFuturo y el TableView. Las slides R05–R06 y su rama JSON **se conservan**: este es un camino alternativo de implementación para aprender JDBC, no una migración automática ni un reemplazo de aquellas versiones.

**Resultado R07:** al guardar un mensaje válido se ejecuta INSERT en MariaDB; un mensaje inválido o una conexión fallida no se agrega a la lista. El TableView todavía conserva solo los mensajes de esta sesión. **R08 recuperará todos los registros desde la BD**.

**Requisitos funcionales:** ingresar autor (1–80 caracteres), texto (1–500) y plazo (1, 5 o 10 años); informar errores; insertar solo datos válidos.

**Requisitos técnicos:** FXML (vista) → Controller (evento/feedback) → Service (validación) → DAO (SQL parametrizado) → ConexionBD (Connection) → MariaDB. No incluir SQL en el Controller ni contraseñas en el código.

## Paso 0 · Abrir el proyecto existente sin partir de cero

1. Abre el [proyecto R04 en su commit inmutable](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/09e5b99e9dce71998333f6c2718ff29040d9b00e) y [descarga su ZIP exacto](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/archive/09e5b99e9dce71998333f6c2718ff29040d9b00e.zip).
2. Descomprime en una carpeta NUEVA, por ejemplo CapsulaTiempo-JDBC. No sobrescribas el trabajo JSON R06.
3. IntelliJ IDEA → **File → Open** → selecciona la carpeta con pom.xml → espera que Maven importe.
4. **File → Project Structure → Project → SDK 21**. Después **Settings → Build, Execution, Deployment → Build Tools → Maven → Runner → JRE 21**.
5. En terminal del proyecto ejecuta **java -version**, **mvn -version** (o **mvnw.cmd -version** en Windows) y después **mvn clean javafx:run**. Si no tienes Maven instalado, usa el wrapper R04: en Windows **.\mvnw.cmd clean javafx:run**, en Linux/macOS **./mvnw clean javafx:run**.
6. Debes ver el listado R04 con dos filas de muestra y el botón de formulario.

**Archivos de R04 que NO reemplazamos:** [MensajeFuturo.java](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/09e5b99e9dce71998333f6c2718ff29040d9b00e/src/main/java/cl/duoc/dsy1102/timecapsule/model/MensajeFuturo.java), [hello-view.fxml](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/09e5b99e9dce71998333f6c2718ff29040d9b00e/src/main/resources/cl/duoc/dsy1102/timecapsule/hello-view.fxml) y [formulario-view.fxml](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/09e5b99e9dce71998333f6c2718ff29040d9b00e/src/main/resources/cl/duoc/dsy1102/timecapsule/formulario-view.fxml).

**Checkpoint 0:** JavaFX abre y se navega entre ambas vistas ANTES de conectar la BD.

## Paso 1 · Instalar y arrancar MariaDB (sin capturas)

**Windows:** descarga MariaDB Server de [mariadb.org/download](https://mariadb.org/download/); ejecuta el MSI, instala Server, habilita TCP/IP, registra el puerto (3306 si se usa el predeterminado) y define contraseña de administrador local. Abre **Servicios** de Windows y verifica que el servicio MariaDB esté **En ejecución**. Abre MariaDB Command Prompt desde Inicio; también puedes usar DBeaver o HeidiSQL, crear conexión a MariaDB, host localhost, puerto 3306 y autenticación administrativa.

**Ubuntu/Debian, si la máquina usa esas distribuciones:**

~~~bash
sudo apt update
sudo apt install mariadb-server mariadb-client
sudo systemctl enable --now mariadb
sudo mariadb
~~~

**Consola SQL:** en instalaciones con acceso por contraseña, **mariadb -u root -p**; donde root usa autenticación por socket, **sudo mariadb**. Ejecuta:

~~~sql
SELECT VERSION();
~~~

**Checkpoint 1:** la consulta muestra una versión de MariaDB. Si falla, comprueba el servicio, puerto, usuario y contraseña antes de avanzar.

## Paso 2 · Crear base de datos, tabla y usuario restringido

1. Abre y ejecuta el [script del esquema](codigo/01-esquema.sql) ([archivo directo en GitHub](https://github.com/cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/blob/master/clases/unidad-02/capsula-tiempo-fx/jdbc/codigo/01-esquema.sql)) en tu cliente SQL.
2. El resultado de **DESCRIBE mensajes_futuros** debe contener id (autonumérico), autor, texto, plazo_anios y creado_en.
3. Descarga el [script del usuario local](codigo/02-usuario-local.sql). **Edita una copia local** y reemplaza CAMBIAR_POR_CONTRASENA_LOCAL por tu contraseña de práctica antes de ejecutarlo con permisos administrativos. Nunca publiques ese archivo con una contraseña verdadera.
4. El usuario **capsula_app@localhost** tiene solo SELECT e INSERT sobre capsula_tiempo. Si ya existía, CREATE USER IF NOT EXISTS no restablece su contraseña: revisa el usuario con tu docente.

~~~sql
USE capsula_tiempo;
SELECT * FROM mensajes_futuros ORDER BY id;
~~~

**Checkpoint 2:** base creada y cuenta de aplicación lista. No conectaremos Java usando root.

## Paso 3 · Configurar Maven y módulos Java

En **pom.xml**, conserva las dos dependencias JavaFX y agrega dentro de dependencies:

~~~xml
<dependency>
    <groupId>org.mariadb.jdbc</groupId>
    <artifactId>mariadb-java-client</artifactId>
    <version>3.5.11</version>
</dependency>
~~~

También tienes el [pom.xml de referencia R07](codigo/r07/pom.xml). En IntelliJ → ventana Maven → **Reload All Maven Projects**. Comprueba que las dependencias se descarguen; necesita internet la primera vez. Mantén **maven-compiler-plugin release 21**.

Abre **src/main/java/module-info.java** y compara con el [archivo de referencia](codigo/r07/module-info.java). Además de JavaFX, requiere **java.sql** y **org.mariadb.jdbc**. Conserva opens del paquete base hacia javafx.fxml.

**Checkpoint 3:** **mvn clean compile** termina sin error de dependencias ni módulos.

## Paso 4 · Variables de entorno y clase ConexionBD

En Project → src/main/java → paquete **cl.duoc.dsy1102.timecapsule** → clic derecho **New → Package** → escribe **cl.duoc.dsy1102.timecapsule.persistence**. Dentro crea ConexionBD.java y copia el [código completo de ConexionBD](codigo/r07/ConexionBD.java), que llama a **DriverManager.getConnection(url, usuario, clave)**.

Configura **DB_USER**, **DB_PASSWORD** y **DB_URL**. Para PowerShell, en la MISMA terminal donde ejecutes Maven:

~~~powershell
$env:DB_USER="capsula_app"
$env:DB_PASSWORD="TU_CLAVE_LOCAL"
$env:DB_URL="jdbc:mariadb://localhost:3306/capsula_tiempo"
mvn clean javafx:run
~~~

En Linux/macOS:

~~~bash
export DB_USER='capsula_app'
export DB_PASSWORD='TU_CLAVE_LOCAL'
export DB_URL='jdbc:mariadb://localhost:3306/capsula_tiempo'
mvn clean javafx:run
~~~

Si ejecutas directamente desde IntelliJ: **Run → Edit Configurations → configuración de Application/JavaFX o Maven → Environment variables**, agrega esas tres variables y guarda. Los procesos que ya estaban abiertos no heredan automáticamente variables que agregaste después en otra terminal. La URL puede cambiar si el servidor usa otro puerto.

**Prohibido:** credenciales en clases Java, SQL publicado con contraseña real o archivos versionados de configuración secretos.

## Paso 5 · Comprobar la conexión sin interfaz

Copia [PruebaConexion.java](codigo/r07/PruebaConexion.java) en **src/main/java/cl/duoc/dsy1102/timecapsule**, ejecuta esa clase desde IntelliJ con las variables configuradas.

**Resultado esperado:** Conexión correcta a: capsula_tiempo.

| Error | Qué revisar |
| --- | --- |
| Access denied | Capsula_app@localhost, contraseña, permisos |
| Connection refused | Servicio MariaDB, puerto, DB_URL |
| Unknown database | Volver a ejecutar el esquema |
| No suitable driver / module not found | Dependencia, módulos, recarga Maven |

**Checkpoint 5:** conexión REAL demostrada; compilar no basta.

## Paso 6 · Preparar DAO con PreparedStatement y Service con validaciones

Crea los paquetes **cl.duoc.dsy1102.timecapsule.dao** y **cl.duoc.dsy1102.timecapsule.service**. Crea estos archivos con su contenido completo, cada uno en el paquete indicado:

- [MensajeDao.java (contrato)](codigo/r07/MensajeDao.java)
- [JdbcMensajeDao.java (INSERT parametrizado)](codigo/r07/JdbcMensajeDao.java)
- [MensajeService.java (reglas y lista)](codigo/r07/MensajeService.java)

La sentencia SQL de alta usa marcadores ? y no concatena los datos del usuario:

~~~java
String sql = "INSERT INTO mensajes_futuros (autor, texto, plazo_anios) VALUES (?, ?, ?)";
try (Connection c = ConexionBD.abrir();
     PreparedStatement ps = c.prepareStatement(sql)) {
    ps.setString(1, mensaje.getAutor());
    ps.setString(2, mensaje.getTexto());
    ps.setInt(3, mensaje.getPlazoAnios());
    int filas = ps.executeUpdate(); // esperamos 1
}
~~~

**Qué hace cada pieza:** Connection mantiene la sesión con BD; PreparedStatement parametriza el INSERT; setString y setInt asignan valores en orden (posición 1 → autor, 2 → texto, 3 → plazo); executeUpdate devuelve filas afectadas; try-with-resources cierra recursos automáticamente.

**Qué NO hace:** PreparedStatement no valida reglas de negocio por sí solo. MensajeService valida autor, texto y plazo; luego llama al DAO y **solo incorpora el mensaje en memoria si el INSERT tuvo éxito**. Si falla la BD, la interfaz no informa un éxito falso.

## Paso 7 · Reutilizar ambas pantallas FXML y reemplazar los controladores

No cambies la estructura de las vistas ni crees otro proyecto JavaFX. Reemplaza el contenido de estas tres clases existentes por la referencia correspondiente:

- [HelloApplication.java](codigo/r07/HelloApplication.java) — configura MensajeService con JdbcMensajeDao y navegación.
- [FormularioController.java](codigo/r07/FormularioController.java) — invoca Service, muestra error en estadoRegistro y vuelve al listado solo si se guardó.
- [HelloController.java](codigo/r07/HelloController.java) — alimenta TableView con la lista del Service, sin SQL dentro del Controller.

**Checkpoint 7:** puedes identificar cinco responsabilidades separadas: FXML (campos), Controller (evento/error), MensajeFuturo (modelo), Service (validación) y DAO (SQL).

## Paso 8 · Prueba de aceptación R07

1. Ejecuta JavaFX con MariaDB encendido y variables correctas.
2. Deja autor vacío: **debe mostrar error y no insertar**.
3. Registra **Ana / Nos vemos en el futuro / 5**: vuelve a TableView y se observa la fila.
4. Ejecuta en MariaDB:

~~~sql
SELECT id, autor, texto, plazo_anios, creado_en
FROM capsula_tiempo.mensajes_futuros ORDER BY id;
~~~

5. Ana debe estar en BD. Cierra y vuelve a abrir JavaFX: en R07 **puede verse vacía la tabla**, porque listar() aún no consulta MariaDB. El SQL sí conserva el registro; esa diferencia será el problema de R08.
6. Para probar fallo de conexión, detén temporalmente MariaDB e intenta insertar: **no** debe añadirse el mensaje; vuelve a iniciar el servicio.

**Antes de avanzar:** [ ] conexión comprobada; [ ] INSERT modifica BD; [ ] datos inválidos no modifican BD; [ ] falla SQL se informa; [ ] MVC no mezcla SQL y FXML.

## Diagnóstico, preguntas y evidencia

Si IntelliJ muestra **FXMLLoader.LoadException**, revisa fx:controller, nombres fx:id, nombre de paquetes y que no exista contenido antes de la declaración XML. Si la versión anterior tenía dos mensajes predefinidos, verifica que HelloApplication nuevo **ya no crea** esa lista. No confundas mensajes que ves en TableView con filas realmente persistidas.

Explica: ¿por qué los marcadores ? ayudan a evitar inyección SQL? ¿Qué diferencia hay entre el número devuelto por executeUpdate y el tamaño de una ObservableList? ¿Por qué la validación está en Service y no en DAO?

**Evidencia sin capturas:** entrega sentencia SQL usada, resultado textual (sin secretos) y breve justificación del camino de datos.

[Siguiente: Guía R08 — SELECT y ResultSet →](02-r08-resultset-modelo-tableview.md)
