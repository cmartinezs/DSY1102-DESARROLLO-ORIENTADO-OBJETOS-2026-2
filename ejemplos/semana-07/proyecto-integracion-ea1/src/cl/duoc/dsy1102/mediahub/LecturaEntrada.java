package cl.duoc.dsy1102.mediahub;

import java.util.Scanner;

public class LecturaEntrada {

    private final Scanner scanner;

    public LecturaEntrada() {
        scanner = new Scanner(System.in);
    }

    public String leerTextoNoVacio(String mensaje) {
        while (true) {
            System.out.print(mensaje);
            String valor = scanner.nextLine().trim();

            if (!valor.isEmpty()) {
                return valor;
            }

            System.out.println("El valor no puede estar vacío.");
        }
    }

    public int leerEntero(String mensaje) {
        while (true) {
            try {
                System.out.print(mensaje);
                return Integer.parseInt(scanner.nextLine().trim());
            } catch (NumberFormatException e) {
                System.out.println("Debe ingresar un número entero.");
            }
        }
    }

    public int leerEnteroEnRango(String mensaje, int minimo, int maximo) {
        while (true) {
            int valor = leerEntero(mensaje);

            if (valor >= minimo && valor <= maximo) {
                return valor;
            }

            System.out.println(
                    "Debe ingresar un valor entre " + minimo + " y " + maximo + "."
            );
        }
    }

    public void cerrar() {
        scanner.close();
    }
}
