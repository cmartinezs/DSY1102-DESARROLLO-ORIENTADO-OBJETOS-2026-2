package app;
import database.DatabaseConnection;
public class TestConnection {
 public static void main(String[] args) throws Exception {
  try(var con=DatabaseConnection.getConnection()){System.out.println("Conexión exitosa");}
 }
}
