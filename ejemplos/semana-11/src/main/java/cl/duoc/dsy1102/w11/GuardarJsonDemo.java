package cl.duoc.dsy1102.w11;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.file.Files;
import java.nio.file.Path;

public class GuardarJsonDemo {
    public static void main(String[] args) throws Exception {
        Path archivo = Path.of("data", "estado.json");
        Files.createDirectories(archivo.getParent());
        new ObjectMapper().writeValue(archivo.toFile(), new EstadoJuego("Ana", 3));
        System.out.println("Guardado: " + archivo);
    }
}
