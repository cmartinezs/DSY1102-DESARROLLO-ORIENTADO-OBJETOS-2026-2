package dao;

import database.DatabaseConnection;
import model.Capsula;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CapsulaDao {

    public List<Capsula> listarTodos() throws SQLException {
        List<Capsula> lista = new ArrayList<>();
        String sql = "SELECT id, titulo, mensaje, fecha_apertura FROM capsula ORDER BY id";

        try (Connection con = DatabaseConnection.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Capsula capsula = new Capsula(
                        rs.getInt("id"),
                        rs.getString("titulo"),
                        rs.getString("mensaje"),
                        rs.getDate("fecha_apertura").toLocalDate()
                );

                lista.add(capsula);
            }
        }

        return lista;
    }

    public int insertar(Capsula capsula) throws SQLException {
        String sql = "INSERT INTO capsula(titulo, mensaje, fecha_apertura) VALUES (?, ?, ?)";

        try (Connection con = DatabaseConnection.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, capsula.getTitulo());
            ps.setString(2, capsula.getMensaje());
            ps.setDate(3, Date.valueOf(capsula.getFechaApertura()));

            return ps.executeUpdate();
        }
    }

    public int actualizar(Capsula capsula) throws SQLException {
        String sql = "UPDATE capsula SET titulo = ?, mensaje = ?, fecha_apertura = ? WHERE id = ?";

        try (Connection con = DatabaseConnection.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, capsula.getTitulo());
            ps.setString(2, capsula.getMensaje());
            ps.setDate(3, Date.valueOf(capsula.getFechaApertura()));
            ps.setInt(4, capsula.getId());

            return ps.executeUpdate();
        }
    }

    public int eliminar(int id) throws SQLException {
        String sql = "DELETE FROM capsula WHERE id = ?";

        try (Connection con = DatabaseConnection.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, id);

            return ps.executeUpdate();
        }
    }
}
