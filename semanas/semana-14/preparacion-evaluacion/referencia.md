# Referencia rápida · JavaFX y JDBC

Fragmentos ilustrativos, no una aplicación completa. Consulta durante la preparación; uso en evaluación sujeto a autorización docente.

## Conexión

DriverManager; try-with-resources; credenciales fuera del código.

```java
try (Connection con = DriverManager.getConnection(url, user, password)) {
    System.out.println("Conexión disponible");
}
```

## SQL y parámetros

executeQuery devuelve ResultSet; executeUpdate devuelve filas afectadas. Los parámetros comienzan en 1.

```java
String sql = "DELETE FROM libro WHERE id = ?";
try (PreparedStatement ps = con.prepareStatement(sql)) {
    ps.setInt(1, id);
    int filas = ps.executeUpdate();
}
```

## Mapeo

Avanza el cursor y construye objetos independientes de JDBC.

```java
while (rs.next()) {
    Libro libro = new Libro(
            rs.getInt("id"),
            rs.getString("titulo")
    );

    libros.add(libro);
}
```

## DAO y MVC

El contrato declara operaciones; el DAO accede a datos y el controlador coordina la vista.

```java
public interface LibroDao {
    List<Libro> listarTodos() throws SQLException;
    int insertar(Libro libro) throws SQLException;
}
```

## FXML y TableView

fx:id coincide con @FXML; el nombre de propiedad coincide con el getter.

```java
colTitulo.setCellValueFactory(new PropertyValueFactory<>("titulo"));
tablaLibros.getItems().setAll(dao.listarTodos());
```

## Validación y errores

Valida antes de persistir; refresca tras una escritura exitosa.

```java
if (titulo.isBlank() || titulo.length() > 120) {
    mostrarError("Título inválido");
    return;
}
```

## Diagnóstico

Connection refused: servidor/puerto; access denied: permisos; unknown column: esquema; NPE FXML: identificador; tabla desactualizada: refresco. No ocultar excepciones.

```sql
SELECT id, titulo FROM libro ORDER BY id;
```

## Documentación
- [JDBC (Oracle)](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html)
- [PreparedStatement](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html)
- [ResultSet](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html)
- [JavaFX](https://openjfx.io/openjfx-docs/)
- [MariaDB Connector/J](https://mariadb.com/kb/en/about-mariadb-connector-j/)
- [Maven](https://maven.apache.org/guides/getting-started/index.html)
