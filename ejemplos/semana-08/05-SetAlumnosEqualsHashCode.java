import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

class SetAlumnosEqualsHashCode {
    public static void main(String[] args) {
        Set<Alumno> alumnos = new HashSet<>();

        agregar(alumnos, new Alumno("12.345.678-9", "Ana Soto", "DSY1102"));
        agregar(alumnos, new Alumno("9.876.543-2", "Luis Perez", "DSY1102"));

        // Mismo RUT: aunque cambien otros datos, representa al mismo alumno.
        agregar(alumnos, new Alumno("12.345.678-9", "Ana Maria Soto", "Otra seccion"));

        System.out.println("\nAlumnos almacenados: " + alumnos.size());

        for (Alumno alumno : alumnos) {
            System.out.println(alumno);
        }
    }

    private static void agregar(Set<Alumno> alumnos, Alumno alumno) {
        if (alumnos.add(alumno)) {
            System.out.println("Alumno agregado: " + alumno.getRut());
        } else {
            System.out.println("Alumno duplicado: " + alumno.getRut());
        }
    }

    static class Alumno {
        private final String rut;
        private String nombre;
        private String seccion;

        public Alumno(String rut, String nombre, String seccion) {
            this.rut = rut;
            this.nombre = nombre;
            this.seccion = seccion;
        }

        public String getRut() {
            return rut;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }

            if (!(o instanceof Alumno)) {
                return false;
            }

            Alumno alumno = (Alumno) o;
            return Objects.equals(rut, alumno.rut);
        }

        @Override
        public int hashCode() {
            return Objects.hash(rut);
        }

        @Override
        public String toString() {
            return rut + " | " + nombre + " | " + seccion;
        }
    }
}
