package cl.duoc.dsy1102.mediahub;

import cl.duoc.dsy1102.mediahub.dominio.Recurso;

public class Main {

    private static final LecturaEntrada entrada = new LecturaEntrada();
    private static final MediaHub mediaHub = new MediaHub();

    public static void main(String[] args) {
        int opcion;

        do {
            mostrarMenu();
            opcion = entrada.leerEnteroEnRango(
                    "Seleccione una opción: ",
                    0,
                    10
            );

            try {
                switch (opcion) {
                    case 1:
                        registrarLibro();
                        break;
                    case 2:
                        registrarPelicula();
                        break;
                    case 3:
                        registrarEbook();
                        break;
                    case 4:
                        registrarAudiolibro();
                        break;
                    case 5:
                        mediaHub.listarRecursos();
                        break;
                    case 6:
                        buscarRecurso();
                        break;
                    case 7:
                        mediaHub.mostrarPoliticasPrestamo();
                        break;
                    case 8:
                        mediaHub.prestarRecurso(
                                entrada.leerTextoNoVacio("Código: ")
                        );
                        System.out.println("Préstamo registrado.");
                        break;
                    case 9:
                        mediaHub.devolverRecurso(
                                entrada.leerTextoNoVacio("Código: ")
                        );
                        System.out.println("Devolución registrada.");
                        break;
                    case 10:
                        mediaHub.descargarRecurso(
                                entrada.leerTextoNoVacio("Código: ")
                        );
                        break;
                    case 0:
                        System.out.println("Hasta luego.");
                        break;
                    default:
                        break;
                }
            } catch (IllegalArgumentException | IllegalStateException e) {
                System.out.println("Error: " + e.getMessage());
            }

            System.out.println();
        } while (opcion != 0);

        entrada.cerrar();
    }

    private static void mostrarMenu() {
        System.out.println("=== BIBLIOTECA MEDIAHUB ===");
        System.out.println("1. Registrar libro físico");
        System.out.println("2. Registrar película");
        System.out.println("3. Registrar ebook");
        System.out.println("4. Registrar audiolibro");
        System.out.println("5. Listar recursos");
        System.out.println("6. Buscar recurso");
        System.out.println("7. Mostrar políticas de préstamo");
        System.out.println("8. Prestar recurso");
        System.out.println("9. Devolver recurso");
        System.out.println("10. Descargar recurso");
        System.out.println("0. Salir");
    }

    private static void registrarLibro() {
        mediaHub.registrarLibroFisico(
                entrada.leerTextoNoVacio("Código: "),
                entrada.leerTextoNoVacio("Título: "),
                entrada.leerTextoNoVacio("Autor: ")
        );
        System.out.println("Libro registrado.");
    }

    private static void registrarPelicula() {
        mediaHub.registrarPelicula(
                entrada.leerTextoNoVacio("Código: "),
                entrada.leerTextoNoVacio("Título: "),
                entrada.leerTextoNoVacio("Director: ")
        );
        System.out.println("Película registrada.");
    }

    private static void registrarEbook() {
        mediaHub.registrarEbook(
                entrada.leerTextoNoVacio("Código: "),
                entrada.leerTextoNoVacio("Título: "),
                entrada.leerTextoNoVacio("Autor: ")
        );
        System.out.println("Ebook registrado.");
    }

    private static void registrarAudiolibro() {
        mediaHub.registrarAudiolibro(
                entrada.leerTextoNoVacio("Código: "),
                entrada.leerTextoNoVacio("Título: "),
                entrada.leerTextoNoVacio("Autor o narrador: ")
        );
        System.out.println("Audiolibro registrado.");
    }

    private static void buscarRecurso() {
        String codigo = entrada.leerTextoNoVacio("Código: ");
        Recurso recurso = mediaHub.buscarPorCodigo(codigo);

        if (recurso == null) {
            System.out.println("No se encontró el recurso.");
            return;
        }

        System.out.println(recurso.obtenerDescripcion());
        System.out.println(
                "Préstamo: " + recurso.obtenerDiasPrestamo() + " días"
        );
    }
}
