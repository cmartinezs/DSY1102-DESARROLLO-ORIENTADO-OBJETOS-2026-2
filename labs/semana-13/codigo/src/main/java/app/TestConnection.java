package app;

import database.DatabaseConnection;
import java.sql.Connection;

public class TestConnection {

    public static void main(String[] args) throws Exception {
        try (Connection con = DatabaseConnection.getConnection()) {
            System.out.println("Conexión exitosa");
        }
    }
}
