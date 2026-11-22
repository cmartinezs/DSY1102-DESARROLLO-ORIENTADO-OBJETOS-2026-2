package cl.duoc.dsy1102.timecapsule;

import cl.duoc.dsy1102.timecapsule.persistence.ConexionBD;
import java.sql.Connection;
import java.sql.SQLException;

public class PruebaConexion {
    public static void main(String[] args) {
        try (Connection c = ConexionBD.abrir()) {
            System.out.println("Conexión correcta a: " + c.getCatalog());
        } catch (SQLException e) {
            System.err.println("Error de conexión: " + e.getMessage());
            System.exit(1);
        }
    }
}
