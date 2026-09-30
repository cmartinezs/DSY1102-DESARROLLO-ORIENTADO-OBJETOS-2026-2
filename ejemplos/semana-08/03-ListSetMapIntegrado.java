import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class ListSetMapIntegrado {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca();

        biblioteca.registrar(new Libro("ISBN-001", "Java Inicial", "Ana Soto"));
        biblioteca.registrar(new Libro("ISBN-002", "POO Aplicada", "Luis Perez"));
        biblioteca.registrar(new Libro("ISBN-003", "Colecciones Java", "Ana Soto"));

        System.out.println("Catalogo:");
        biblioteca.listar();

        System.out.println("\nAutores unicos:");
        biblioteca.listarAutores();

        System.out.println("\nBusqueda por ISBN:");
        biblioteca.buscarPorIsbn("ISBN-002");
    }

    static class Biblioteca {
        private final List<Libro> catalogo = new ArrayList<>();
        private final Set<String> autores = new HashSet<>();
        private final Map<String, Libro> librosPorIsbn = new HashMap<>();

        public void registrar(Libro libro) {
            catalogo.add(libro);
            autores.add(libro.getAutor());
            librosPorIsbn.put(libro.getIsbn(), libro);
        }

        public void listar() {
            for (Libro libro : catalogo) {
                libro.mostrarResumen();
            }
        }

        public void listarAutores() {
            for (String autor : autores) {
                System.out.println("- " + autor);
            }
        }

        public void buscarPorIsbn(String isbn) {
            Libro libro = librosPorIsbn.get(isbn);

            if (libro != null) {
                libro.mostrarResumen();
            } else {
                System.out.println("Libro no encontrado.");
            }
        }
    }

    static class Libro {
        private final String isbn;
        private final String titulo;
        private final String autor;

        public Libro(String isbn, String titulo, String autor) {
            this.isbn = isbn;
            this.titulo = titulo;
            this.autor = autor;
        }

        public String getIsbn() {
            return isbn;
        }

        public String getAutor() {
            return autor;
        }

        public void mostrarResumen() {
            System.out.println(isbn + " | " + titulo + " | " + autor);
        }
    }
}
