package cl.duoc.dsy1102.w11;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.file.Files;
import java.nio.file.Path;

public class LeerJsonDemo {
    public static void main(String[] args) throws Exception {
        Path archivo = Path.of("data", "estado.json");
        if (!Files.exists(archivo)) {
            System.out.println("No hay partida guardada");
            return;
        }
        EstadoJuego estado = new ObjectMapper().readValue(
                archivo.toFile(), EstadoJuego.class);
        System.out.println(estado.getJugador() + " / nivel " + estado.getNivel());
    }
}
