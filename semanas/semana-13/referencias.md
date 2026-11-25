# Mini referencias · JDBC y JavaFX
Cada tema indica qué aprender y dónde profundizar. Son apoyos complementarios, no nuevos requisitos de evaluación institucional.

## Entorno y conectividad
- Maven: resuelve dependencias y ejecuta el build. [Introducción oficial](https://maven.apache.org/guides/getting-started/index.html).
- Cliente/servidor y URL JDBC: localhost identifica el equipo local; 3306 es el puerto habitual, no obligatorio. [MariaDB Connector/J](https://mariadb.com/kb/en/about-mariadb-connector-j/).
- Variables de entorno: System.getenv lee configuración del proceso; no subir credenciales. [Oracle](https://docs.oracle.com/javase/tutorial/essential/environment/env.html).
- SQL: DDL crea estructuras; DML modifica filas; SELECT consulta. [MySQL manual](https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html).

## Java y JDBC
- Excepciones verificadas: SQLException se captura o declara. [Dev.java](https://dev.java/learn/exceptions/).
- Try-with-resources: cierra Connection, PreparedStatement y ResultSet en orden inverso. [Oracle](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html).
- Genéricos: List<Capsula> limita el tipo de elementos. [Dev.java](https://dev.java/learn/generics/).
- Interfaces: contrato y polimorfismo; una implementación puede sustituirse por otra. [Dev.java](https://dev.java/learn/interfaces/).
- ResultSet: next() avanza el cursor; getters leen la fila actual. [API Java 21](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html).
- PreparedStatement: parámetros desde 1; executeQuery para SELECT, executeUpdate para cambios. [Oracle](https://docs.oracle.com/javase/tutorial/jdbc/basics/prepared.html).
- LocalDate: fecha sin hora; Date.valueOf convierte a SQL DATE. [API Java](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/LocalDate.html).
- Transacciones y autocommit (ampliación): agrupar cambios con commit/rollback. [Oracle](https://docs.oracle.com/javase/tutorial/jdbc/basics/transactions.html).

## JavaFX
- FXML e initialize: FXMLLoader crea controles e inyecta campos antes de initialize. [OpenJFX](https://openjfx.io/javadoc/21/javafx.fxml/javafx/fxml/doc-files/introduction_to_fxml.html).
- ObservableList: cambios de colección notifican a la vista, no a SQL. [OpenJFX](https://openjfx.io/javadoc/21/javafx.base/javafx/collections/ObservableList.html).
- Getters/reflection: PropertyValueFactory busca propiedades/getters; en módulos puede requerir opens model to javafx.base. [OpenJFX](https://openjfx.io/javadoc/21/javafx.controls/javafx/scene/control/cell/PropertyValueFactory.html).
- Lambdas/listeners: reaccionar a la selección de fila. [Dev.java](https://dev.java/learn/lambdas/).
- Módulos: requires declara dependencia; opens permite acceso reflectivo. [Dev.java](https://dev.java/learn/modules/).
- Task (avanzado): ejecutar JDBC lento fuera del hilo de interfaz. [OpenJFX](https://openjfx.io/javadoc/21/javafx.graphics/javafx/concurrent/Task.html).
- Breakpoints: detener ejecución, inspeccionar variables y avanzar paso a paso. [JetBrains](https://www.jetbrains.com/help/idea/debugging-code.html).

## Continuidad
[Guías R07–R08 de Cápsula del Tiempo FX](../../clases/unidad-02/capsula-tiempo-fx/jdbc/README.md). El modelo original MensajeFuturo no se modifica.
