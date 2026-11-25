# Entorno común de práctica

JDK 21, Maven, IntelliJ, MariaDB local, JavaFX cuando corresponda. Usa el [proyecto JDBC](../../../labs/semana-13/codigo/) o el [proyecto JavaFX](../../../labs/semana-14/codigo/) como estructura de arranque; no copies la solución del desafío. Los fragmentos son deliberadamente incompletos y se insertan en una clase o método compatible, no son programas completos. Crea un esquema desechable con cuenta limitada y configura DB_USER/DB_PASSWORD en el entorno. No uses datos reales.

```sql
CREATE DATABASE IF NOT EXISTS preparacion_db;
USE preparacion_db;
CREATE TABLE libro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(120) NOT NULL
);
INSERT INTO libro(titulo) VALUES ('Java esencial'), ('O''Connor');
```

```java
public class Libro {
    private final int id;
    private final String titulo;

    public Libro(int id, String titulo) {
        this.id = id;
        this.titulo = titulo;
    }

    public int getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }
}
```

Ajusta la URL JDBC a preparacion_db. Ejecuta las inserciones una sola vez. Para JavaFX crea los controles de acuerdo al enunciado. No hay solución de los TODO.
