package cl.duoc.dsy1102.integracion;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Veterinaria veterinaria = new Veterinaria();
        int opcion;

        do {
            mostrarMenu();
            opcion = leerEntero(scanner, "Seleccione una opción: ");

            try {
                if (opcion == 1) {
                    registrarPerro(scanner, veterinaria);
                } else if (opcion == 2) {
                    registrarGato(scanner, veterinaria);
                } else if (opcion == 3) {
                    registrarAve(scanner, veterinaria);
                } else if (opcion == 4) {
                    veterinaria.listarAnimales();
                } else if (opcion == 5) {
                    veterinaria.emitirSonidos();
                } else if (opcion == 6) {
                    buscarAnimal(scanner, veterinaria);
                } else if (opcion == 7) {
                    vacunarAnimal(scanner, veterinaria);
                } else if (opcion == 0) {
                    System.out.println("Hasta luego.");
                } else {
                    System.out.println("Opción no válida.");
                }
            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
            }

            System.out.println();
        } while (opcion != 0);

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("=== VETERINARIA CONSOLE ===");
        System.out.println("1. Registrar perro");
        System.out.println("2. Registrar gato");
        System.out.println("3. Registrar ave");
        System.out.println("4. Listar animales");
        System.out.println("5. Emitir sonidos");
        System.out.println("6. Buscar animal");
        System.out.println("7. Vacunar animal");
        System.out.println("0. Salir");
    }

    private static void registrarPerro(Scanner scanner, Veterinaria veterinaria) {
        String nombre = leerTexto(scanner, "Nombre: ");
        int edad = leerEnteroNoNegativo(scanner, "Edad: ");
        veterinaria.agregarAnimal(new Perro(nombre, edad));
        System.out.println("Perro registrado.");
    }

    private static void registrarGato(Scanner scanner, Veterinaria veterinaria) {
        String nombre = leerTexto(scanner, "Nombre: ");
        int edad = leerEnteroNoNegativo(scanner, "Edad: ");
        veterinaria.agregarAnimal(new Gato(nombre, edad));
        System.out.println("Gato registrado.");
    }

    private static void registrarAve(Scanner scanner, Veterinaria veterinaria) {
        String nombre = leerTexto(scanner, "Nombre: ");
        int edad = leerEnteroNoNegativo(scanner, "Edad: ");
        veterinaria.agregarAnimal(new Ave(nombre, edad));
        System.out.println("Ave registrada.");
    }

    private static void buscarAnimal(Scanner scanner, Veterinaria veterinaria) {
        String nombre = leerTexto(scanner, "Nombre a buscar: ");
        Animal animal = veterinaria.buscarPorNombre(nombre);

        if (animal == null) {
            System.out.println("No se encontró el animal.");
            return;
        }

        System.out.println(animal.obtenerDescripcion());
    }

    private static void vacunarAnimal(Scanner scanner, Veterinaria veterinaria) {
        String nombre = leerTexto(scanner, "Nombre del animal: ");
        veterinaria.vacunarAnimal(nombre);
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

    private static int leerEnteroNoNegativo(Scanner scanner, String mensaje) {
        while (true) {
            int valor = leerEntero(scanner, mensaje);

            if (valor >= 0) {
                return valor;
            }

            System.out.println("El valor no puede ser negativo.");
        }
    }
}
