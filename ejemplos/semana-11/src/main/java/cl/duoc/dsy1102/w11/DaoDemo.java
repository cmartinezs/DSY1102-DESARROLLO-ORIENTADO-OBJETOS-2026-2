package cl.duoc.dsy1102.w11;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class DaoDemo {
    public static void main(String[] args) {
        Path ruta = Path.of("data", "estado.json");
        if (!Files.exists(ruta)) {
            System.out.println("No hay partida guardada");
            return;
        }

        EstadoJuegoDao dao = new JsonEstadoJuegoDao(ruta);
        try {
            EstadoJuego estado = dao.cargar();
            System.out.println(estado.getJugador() + " / nivel " + estado.getNivel());
        } catch (IOException error) {
            System.out.println("No se pudo leer el JSON: " + error.getMessage());
        }
    }
}
