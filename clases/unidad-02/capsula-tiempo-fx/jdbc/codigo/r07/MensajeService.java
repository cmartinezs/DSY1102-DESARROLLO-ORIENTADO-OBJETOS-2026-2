package cl.duoc.dsy1102.timecapsule.service;

import cl.duoc.dsy1102.timecapsule.dao.MensajeDao;
import cl.duoc.dsy1102.timecapsule.model.MensajeFuturo;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MensajeService {
    private final MensajeDao dao;
    private final List<MensajeFuturo> mensajes;

    public MensajeService(MensajeDao dao) throws SQLException {
        this.dao = dao;
        this.mensajes = new ArrayList<>(dao.listar());
    }

    public void registrar(String autor, String texto, Integer plazoAnios)
            throws SQLException {
        autor = autor == null ? "" : autor.trim();
        texto = texto == null ? "" : texto.trim();
        if (autor.isBlank() || autor.length() > 80)
            throw new IllegalArgumentException("Autor: entre 1 y 80 caracteres.");
        if (texto.isBlank() || texto.length() > 500)
            throw new IllegalArgumentException("Mensaje: entre 1 y 500 caracteres.");
        if (plazoAnios == null || (plazoAnios != 1 &&
                plazoAnios != 5 && plazoAnios != 10))
            throw new IllegalArgumentException("Plazo válido: 1, 5 o 10 años.");

        MensajeFuturo mensaje = new MensajeFuturo(autor, texto, plazoAnios);
        dao.registrar(mensaje); // primero BD; si falla, NO modificar memoria
        mensajes.add(mensaje);
    }

    public List<MensajeFuturo> listar() {
        return List.copyOf(mensajes);
    }
}
