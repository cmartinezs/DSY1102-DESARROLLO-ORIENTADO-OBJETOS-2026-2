package cl.duoc.dsy1102.mediahub;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        MediaHub mediaHub = new MediaHub();
        int opcion;

        do {
            mostrarMenu();
            opcion = leerEntero(scanner, "Seleccione una opción: ");

            try {
                switch (opcion) {
                    case 1:
                        registrarLibro(scanner, mediaHub);
                        break;
                    case 2:
                        registrarPelicula(scanner, mediaHub);
                        break;
                    case 3:
                        registrarEbook(scanner, mediaHub);
                        break;
                    case 4:
                        registrarAudiolibro(scanner, mediaHub);
                        break;
                    case 5:
                        mediaHub.listarRecursos();
                        break;
                    case 6:
                        buscarRecurso(scanner, mediaHub);
                        break;
                    case 7:
                        mediaHub.mostrarPoliticasPrestamo();
                        break;
                    case 8:
                        mediaHub.prestarRecurso(leerTexto(scanner, "Código: "));
                        System.out.println("Préstamo registrado.");
                        break;
                    case 9:
                        mediaHub.devolverRecurso(leerTexto(scanner, "Código: "));
                        System.out.println("Devolución registrada.");
                        break;
                    case 10:
                        mediaHub.descargarRecurso(leerTexto(scanner, "Código: "));
                        break;
                    case 0:
                        System.out.println("Hasta luego.");
                        break;
                    default:
                        System.out.println("Opción no válida.");
                        break;
                }
            } catch (IllegalArgumentException | IllegalStateException e) {
                System.out.println("Error: " + e.getMessage());
            }

            System.out.println();
        } while (opcion != 0);

        scanner.close();
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

    private static void registrarLibro(Scanner scanner, MediaHub mediaHub) {
        mediaHub.agregarRecurso(new LibroFisico(
                leerTexto(scanner, "Código: "),
                leerTexto(scanner, "Título: "),
                leerTexto(scanner, "Autor: ")
        ));
        System.out.println("Libro registrado.");
    }

    private static void registrarPelicula(Scanner scanner, MediaHub mediaHub) {
        mediaHub.agregarRecurso(new Pelicula(
                leerTexto(scanner, "Código: "),
                leerTexto(scanner, "Título: "),
                leerTexto(scanner, "Director: ")
        ));
        System.out.println("Película registrada.");
    }

    private static void registrarEbook(Scanner scanner, MediaHub mediaHub) {
        mediaHub.agregarRecurso(new Ebook(
                leerTexto(scanner, "Código: "),
                leerTexto(scanner, "Título: "),
                leerTexto(scanner, "Autor: ")
        ));
        System.out.println("Ebook registrado.");
    }

    private static void registrarAudiolibro(Scanner scanner, MediaHub mediaHub) {
        mediaHub.agregarRecurso(new Audiolibro(
                leerTexto(scanner, "Código: "),
                leerTexto(scanner, "Título: "),
                leerTexto(scanner, "Autor o narrador: ")
        ));
        System.out.println("Audiolibro registrado.");
    }

    private static void buscarRecurso(Scanner scanner, MediaHub mediaHub) {
        String codigo = leerTexto(scanner, "Código: ");
        Recurso recurso = mediaHub.buscarPorCodigo(codigo);

        if (recurso == null) {
            System.out.println("No se encontró el recurso.");
            return;
        }

        System.out.println(recurso.obtenerDescripcion());
        System.out.println("Préstamo: " + recurso.obtenerDiasPrestamo() + " días");
    }

    private static String leerTexto(Scanner scanner, String mensaje) {
        while (true) {
            System.out.print(mensaje);
            String valor = scanner.nextLine().trim();

            if (!valor.isEmpty()) {
                return valor;
            }

            System.out.println("El valor no puede estar vacío.");
        }
    }

    private static int leerEntero(Scanner scanner, String mensaje) {
        while (true) {
            try {
                System.out.print(mensaje);
                return Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Debe ingresar un número entero.");
            }
        }
    }
}
