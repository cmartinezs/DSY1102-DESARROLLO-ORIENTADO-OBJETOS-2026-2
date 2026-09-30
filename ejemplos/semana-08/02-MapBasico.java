import java.util.HashMap;
import java.util.Map;

class MapBasico {
    public static void main(String[] args) {
        Map<String, String> correos = new HashMap<>();

        correos.put("ana", "ana@ejemplo.cl");
        correos.put("carlos", "carlos@ejemplo.cl");

        String usuario = "carlos";

        if (correos.containsKey(usuario)) {
            System.out.println("Correo: " + correos.get(usuario));
        } else {
            System.out.println("Usuario no encontrado.");
        }

        System.out.println("\nContenido del Map:");

        for (Map.Entry<String, String> entrada : correos.entrySet()) {
            System.out.println(entrada.getKey() + " -> " + entrada.getValue());
        }
    }
}
