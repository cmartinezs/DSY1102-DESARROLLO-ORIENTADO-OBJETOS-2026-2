# Microdesafíos JDBC y JavaFX

Ocho problemas focalizados, independientes. [Versión web](https://academic-labs.adumun.cl/activities/dsy1102-jdbc-microdesafios/) · [Entorno común](entorno.md). Los archivos .txt son fragmentos para insertar, no unidades compilables.

## 1. Conexión fallida (15 min)

**Foco:** Diagnosticar conexión JDBC. Configura un acceso a la base local de práctica. La URL inicial contiene un puerto incorrecto. Identifica la causa sin imprimir la contraseña.

[Fragmento inicial](starter/01.java.txt)

**Prueba:** Conexión exitosa con la configuración correcta; un puerto incorrecto produce un diagnóstico comprensible.

**Comprensión:** ¿Cómo distingues un fallo de red de un error de credenciales?

## 2. Consulta insegura (15 min)

**Foco:** PreparedStatement. Reemplaza la construcción de SQL con concatenación. Busca por título exacto.

[Fragmento inicial](starter/02.java.txt)

**Prueba:** El título O'Connor se recupera como dato literal; no se concatena la entrada.

**Comprensión:** ¿Qué diferencia existe entre un parámetro y una instrucción SQL?

## 3. De filas a objetos (20 min)

**Foco:** ResultSet y mapeo. Completa el método que devuelve una lista de Libro. El cursor comienza antes de la primera fila.

[Fragmento inicial](starter/03.java.txt)

**Prueba:** Con cero filas devuelve una lista vacía; con dos filas devuelve dos objetos correctos.

**Comprensión:** ¿Por qué no basta con llamar una vez a next()?

## 4. ¿Dónde está mi registro? (20 min)

**Foco:** CRUD por clave primaria. Completa una actualización y eliminación por ID usando parámetros. Verifica filas afectadas.

[Fragmento inicial](starter/04.java.txt)

**Prueba:** Editar ID existente modifica solo su fila; ID inexistente produce cero filas afectadas.

**Comprensión:** ¿Qué significa el resultado de executeUpdate()?

## 5. Un controlador desordenado (25 min)

**Foco:** Separación MVC y DAO. Extrae el acceso SQL de un controlador y define un contrato LibroDao. El controlador debe depender de dicho contrato.

[Fragmento inicial](starter/05.java.txt)

**Prueba:** El controlador no contiene SQL; DAO no importa JavaFX; listado funciona igual.

**Comprensión:** ¿Qué cambiaría si mañana reemplazas MariaDB?

## 6. Mi TableView está vacía (20 min)

**Foco:** FXML, TableView y refresco. Vincula la columna al getter correcto, carga registros desde DAO y refresca después de una modificación.

[Fragmento inicial](starter/06.java.txt)

**Prueba:** Dos registros visibles; después de guardar un tercero la tabla refleja SQL.

**Comprensión:** ¿Por qué agregar a la tabla no implica persistir?

## 7. Formulario defectuoso (20 min)

**Foco:** Validación y excepciones. Rechaza título vacío, mayor de 120 caracteres y selección nula al editar. No pierdas entradas inválidas.

[Fragmento inicial](starter/07.java.txt)

**Prueba:** No se llama al DAO con datos inválidos; aparece un mensaje claro.

**Comprensión:** ¿Qué debe ocurrir si el DAO lanza SQLException?

## 8. Los datos desaparecieron (15 min)

**Foco:** Verificación de persistencia. Guarda un libro único, reinicia la aplicación y compara el listado con SQL. Distingue memoria de base de datos.

[Fragmento inicial](starter/08.sql.txt)

**Prueba:** El mismo ID y título aparecen después de reiniciar.

**Comprensión:** ¿Qué evidencia descarta que solo guardaste en memoria?

## Evidencia de cada microdesafío

Entrega por separado: (1) código Java, SQL o procedimiento realizado, incluyendo los archivos o métodos solicitados; (2) respuesta conceptual con tus palabras; (3) caso ejecutado y resultado real. En la actividad web, los tres campos deben estar completos antes de habilitar la confirmación. Modificar un campo invalida la confirmación anterior. El TXT permite exportar avances parciales, identificados como pendientes. No incluyas credenciales. La comprobación de campos no acredita la corrección ni ejecución del código.
