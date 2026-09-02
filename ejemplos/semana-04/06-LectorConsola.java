import java.util.Scanner;

/**
 * Wrapper pedagógico sobre java.util.Scanner.
 *
 * Objetivo:
 * - encapsular la lectura desde consola;
 * - centralizar validaciones de entrada;
 * - evitar repetir hasNextInt()/hasNextDouble() en cada Main;
 * - mantener la lógica de negocio fuera de esta clase.
 *
 * Importante: esta clase valida FORMATO de entrada, no reglas de negocio.
 * Por ejemplo, puede asegurar que se ingrese un entero, pero decidir si un
 * giro es válido sigue siendo responsabilidad de Cuenta.
 */
class LectorConsola {
    private Scanner scanner;

    public LectorConsola() {
        scanner = new Scanner(System.in);
    }

    public String leerTexto(String mensaje) {
        System.out.print(mensaje);
        return scanner.nextLine();
    }

    public int leerEntero(String mensaje) {
        while (true) {
            System.out.print(mensaje);

            if (scanner.hasNextInt()) {
                int valor = scanner.nextInt();
                scanner.nextLine(); // consume el Enter pendiente
                return valor;
            }

            System.out.println("Entrada inválida. Debe ingresar un número entero.");
            scanner.nextLine(); // descarta la entrada incorrecta
        }
    }

    public int leerEntero(String mensaje, int minimo, int maximo) {
        while (true) {
            int valor = leerEntero(mensaje);

            if (valor >= minimo && valor <= maximo) {
                return valor;
            }

            System.out.println("El valor debe estar entre " + minimo + " y " + maximo + ".");
        }
    }

    public double leerDecimal(String mensaje) {
        while (true) {
            System.out.print(mensaje);

            if (scanner.hasNextDouble()) {
                double valor = scanner.nextDouble();
                scanner.nextLine();
                return valor;
            }

            System.out.println("Entrada inválida. Debe ingresar un número.");
            scanner.nextLine();
        }
    }

    public double leerDecimalPositivo(String mensaje) {
        while (true) {
            double valor = leerDecimal(mensaje);

            if (valor >= 0) {
                return valor;
            }

            System.out.println("El valor no puede ser negativo.");
        }
    }

    public void cerrar() {
        scanner.close();
    }
}

class DemoLectorConsola {
    public static void main(String[] args) {
        LectorConsola lector = new LectorConsola();

        String nombre = lector.leerTexto("Nombre: ");
        int edad = lector.leerEntero("Edad: ", 0, 120);
        double monto = lector.leerDecimalPositivo("Monto: ");

        System.out.println("\nDatos ingresados:");
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Monto: $" + monto);

        lector.cerrar();
    }
}
