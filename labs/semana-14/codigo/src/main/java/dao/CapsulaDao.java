package dao;

import model.Capsula;
import java.sql.SQLException;
import java.util.List;

public interface CapsulaDao {

    List<Capsula> listarTodos() throws SQLException;

    int insertar(Capsula capsula) throws SQLException;

    int actualizar(Capsula capsula) throws SQLException;

    int eliminar(int id) throws SQLException;
}
