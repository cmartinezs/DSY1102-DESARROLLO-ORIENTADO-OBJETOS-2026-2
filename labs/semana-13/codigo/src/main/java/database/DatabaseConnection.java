package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    public static Connection getConnection() throws SQLException {
        String user = System.getenv("DB_USER");
        String password = System.getenv("DB_PASSWORD");

        if (user == null || password == null) {
            throw new SQLException("Configura DB_USER y DB_PASSWORD");
        }

        return DriverManager.getConnection(
                "jdbc:mariadb://localhost:3306/capsula_db",
                user,
                password
        );
    }
}
