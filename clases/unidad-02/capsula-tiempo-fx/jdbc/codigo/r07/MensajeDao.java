package cl.duoc.dsy1102.timecapsule.dao;

import cl.duoc.dsy1102.timecapsule.model.MensajeFuturo;
import java.sql.SQLException;
import java.util.List;

public interface MensajeDao {
    List<MensajeFuturo> listar() throws SQLException;
    void registrar(MensajeFuturo mensaje) throws SQLException;
}
