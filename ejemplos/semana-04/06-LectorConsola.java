import java.util.Scanner;

/**
 * Wrapper pedagógico sobre java.util.Scanner.
 *
 * Objetivo:
 * - encapsular la lectura desde consola;
 * - centralizar validaciones de entrada;
 * - evitar repetir hasNextInt()/hasNextDouble() en cada Main;
 * - ofrecer mensajes por defecto que pueden ser reemplazados;
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

    /**
     * Si se entrega un mensaje válido, se utiliza ese texto.
     * Si viene null, vacío o sólo con espacios, se conserva el mensaje por defecto.
     */
    private String resolverMensaje(String mensaje, String mensajePorDefecto) {
        if (mensaje != null && !mensaje.isBlank()) {
            return mensaje;
        }

        return mensajePorDefecto;
    }

    // -------------------------------------------------------------------------
    // TEXTO
    // -------------------------------------------------------------------------

    public String leerTexto() {
        return leerTexto(null);
    }

    public String leerTexto(String mensaje) {
        String texto = resolverMensaje(mensaje, "Ingrese un texto: ");
        System.out.print(texto);
        return scanner.nextLine();
    }

    // -------------------------------------------------------------------------
    // ENTEROS
    // -------------------------------------------------------------------------

    public int leerEntero() {
        return leerEntero(null);
    }

    public int leerEntero(String mensaje) {
        String texto = resolverMensaje(mensaje, "Ingrese un número entero: ");

        while (true) {
            System.out.print(texto);

            if (scanner.hasNextInt()) {
                int valor = scanner.nextInt();
                scanner.nextLine(); // consume el Enter pendiente
                return valor;
            }

            System.out.println("Entrada inválida. Debe ingresar un número entero.");
            scanner.nextLine(); // descarta la entrada incorrecta
        }
    }

    public int leerEntero(int minimo, int maximo) {
        return leerEntero(null, minimo, maximo);
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

    // -------------------------------------------------------------------------
    // DECIMALES
    // -------------------------------------------------------------------------

    public double leerDecimal() {
        return leerDecimal(null);
    }

    public double leerDecimal(String mensaje) {
        String texto = resolverMensaje(mensaje, "Ingrese un número decimal: ");

        while (true) {
            System.out.print(texto);

            if (scanner.hasNextDouble()) {
                double valor = scanner.nextDouble();
                scanner.nextLine();
                return valor;
            }

            System.out.println("Entrada inválida. Debe ingresar un número.");
            scanner.nextLine();
        }
    }

    public double leerDecimalPositivo() {
        return leerDecimalPositivo(null);
    }

    public double leerDecimalPositivo(String mensaje) {
        while (true) {
            double valor = leerDecimal(
                    resolverMensaje(mensaje, "Ingrese un número positivo: ")
            );

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

        // Sin texto: se utiliza el mensaje por defecto.
        String textoLibre = lector.leerTexto();

        // Con texto: el primer parámetro reemplaza el mensaje por defecto.
        String nombre = lector.leerTexto("Nombre del cliente: ");
        int edad = lector.leerEntero("Edad del cliente: ", 0, 120);
        double monto = lector.leerDecimalPositivo("Monto inicial: $");

        // También existen versiones con validación, pero usando texto por defecto.
        int opcion = lector.leerEntero(1, 5);

        System.out.println("\nDatos ingresados:");
        System.out.println("Texto libre: " + textoLibre);
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Monto: $" + monto);
        System.out.println("Opción: " + opcion);

        lector.cerrar();
    }
}
