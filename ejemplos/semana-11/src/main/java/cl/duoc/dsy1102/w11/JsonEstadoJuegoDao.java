package cl.duoc.dsy1102.w11;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.file.Path;

public class JsonEstadoJuegoDao implements EstadoJuegoDao {
    private final Path archivo;

    public JsonEstadoJuegoDao(Path archivo) { this.archivo = archivo; }

    @Override public EstadoJuego cargar() throws IOException {
        return new ObjectMapper().readValue(archivo.toFile(), EstadoJuego.class);
    }
}
