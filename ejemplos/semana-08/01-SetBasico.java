import java.util.HashSet;
import java.util.Set;

class SetBasico {
    public static void main(String[] args) {
        Set<String> categorias = new HashSet<>();

        registrar(categorias, "Libros");
        registrar(categorias, "Videojuegos");
        registrar(categorias, "Musica");
        registrar(categorias, "Libros");

        System.out.println("\nCategorias finales: " + categorias.size());

        for (String categoria : categorias) {
            System.out.println("- " + categoria);
        }
    }

    private static void registrar(Set<String> categorias, String categoria) {
        boolean agregado = categorias.add(categoria);

        if (agregado) {
            System.out.println("Registrada: " + categoria);
        } else {
            System.out.println("Duplicada: " + categoria);
        }
    }
}
