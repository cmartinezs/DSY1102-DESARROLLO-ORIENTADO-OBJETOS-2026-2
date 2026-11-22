package cl.duoc.dsy1102.timecapsule.persistence;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public final class ConexionBD {
    private ConexionBD() {}

    public static Connection abrir() throws SQLException {
        String url = System.getenv().getOrDefault(
                "DB_URL", "jdbc:mariadb://localhost:3306/capsula_tiempo");
        String usuario = System.getenv("DB_USER");
        String clave = System.getenv("DB_PASSWORD");
        if (usuario == null || usuario.isBlank() ||
                clave == null || clave.isBlank()) {
            throw new SQLException("Faltan DB_USER o DB_PASSWORD.");
        }
        return DriverManager.getConnection(url, usuario, clave);
    }
}
