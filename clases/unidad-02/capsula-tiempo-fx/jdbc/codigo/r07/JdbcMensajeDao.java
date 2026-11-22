package cl.duoc.dsy1102.timecapsule.dao;

import cl.duoc.dsy1102.timecapsule.model.MensajeFuturo;
import cl.duoc.dsy1102.timecapsule.persistence.ConexionBD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class JdbcMensajeDao implements MensajeDao {
    @Override
    public List<MensajeFuturo> listar() {
        // R07: todavía no hay SELECT; la tabla muestra solo la sesión.
        return List.of();
    }

    @Override
    public void registrar(MensajeFuturo mensaje) throws SQLException {
        String sql = "INSERT INTO mensajes_futuros (autor, texto, plazo_anios) VALUES (?, ?, ?)";
        try (Connection conexion = ConexionBD.abrir();
             PreparedStatement ps = conexion.prepareStatement(sql)) {
            ps.setString(1, mensaje.getAutor());
            ps.setString(2, mensaje.getTexto());
            ps.setInt(3, mensaje.getPlazoAnios());
            if (ps.executeUpdate() != 1) {
                throw new SQLException("No se confirmó una fila insertada.");
            }
        }
    }
}
