package dao;
import database.DatabaseConnection;
import model.Capsula;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
public class CapsulaDaoMySql implements CapsulaDao {
 public List<Capsula> listarTodos() throws SQLException {
  List<Capsula> lista=new ArrayList<>();
  String sql="SELECT id,titulo,mensaje,fecha_apertura FROM capsula ORDER BY id";
  try(Connection con=DatabaseConnection.getConnection();
      PreparedStatement ps=con.prepareStatement(sql);
      ResultSet rs=ps.executeQuery()){
   while(rs.next()) lista.add(new Capsula(rs.getInt("id"),rs.getString("titulo"),rs.getString("mensaje"),rs.getDate("fecha_apertura").toLocalDate()));
  }
  return lista;
 }
 public int insertar(Capsula c) throws SQLException {
  try(Connection con=DatabaseConnection.getConnection();
      PreparedStatement ps=con.prepareStatement("INSERT INTO capsula(titulo,mensaje,fecha_apertura) VALUES (?,?,?)")){
   ps.setString(1,c.getTitulo()); ps.setString(2,c.getMensaje()); ps.setDate(3,Date.valueOf(c.getFechaApertura()));
   return ps.executeUpdate();
  }
 }
 public int actualizar(Capsula c) throws SQLException {
  try(Connection con=DatabaseConnection.getConnection();
      PreparedStatement ps=con.prepareStatement("UPDATE capsula SET titulo=?,mensaje=?,fecha_apertura=? WHERE id=?")){
   ps.setString(1,c.getTitulo()); ps.setString(2,c.getMensaje()); ps.setDate(3,Date.valueOf(c.getFechaApertura())); ps.setInt(4,c.getId());
   return ps.executeUpdate();
  }
 }
 public int eliminar(int id) throws SQLException {
  try(Connection con=DatabaseConnection.getConnection();
      PreparedStatement ps=con.prepareStatement("DELETE FROM capsula WHERE id=?")){
   ps.setInt(1,id); return ps.executeUpdate();
  }
 }
}
