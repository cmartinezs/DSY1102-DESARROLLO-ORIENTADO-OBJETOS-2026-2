import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

class SetLibrosEqualsHashCode {
    public static void main(String[] args) {
        Set<Libro> libros = new HashSet<>();

        agregar(libros, new Libro("ISBN-001", "Java Inicial", "Ana Soto"));
        agregar(libros, new Libro("ISBN-002", "POO Aplicada", "Luis Perez"));

        // Mismo ISBN: para el negocio representa el mismo libro.
        agregar(libros, new Libro("ISBN-001", "Otra copia del mismo libro", "Otro autor"));

        System.out.println("\nLibros almacenados: " + libros.size());

        for (Libro libro : libros) {
            System.out.println(libro);
        }
    }

    private static void agregar(Set<Libro> libros, Libro libro) {
        boolean agregado = libros.add(libro);

        if (agregado) {
            System.out.println("Agregado: " + libro.getIsbn());
        } else {
            System.out.println("Duplicado rechazado: " + libro.getIsbn());
        }
    }

    static class Libro {
        private final String isbn;
        private String titulo;
        private String autor;

        public Libro(String isbn, String titulo, String autor) {
            this.isbn = isbn;
            this.titulo = titulo;
            this.autor = autor;
        }

        public String getIsbn() {
            return isbn;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }

            if (!(o instanceof Libro)) {
                return false;
            }

            Libro libro = (Libro) o;
            return Objects.equals(isbn, libro.isbn);
        }

        @Override
        public int hashCode() {
            return Objects.hash(isbn);
        }

        @Override
        public String toString() {
            return isbn + " | " + titulo + " | " + autor;
        }
    }
}
