import java.util.Scanner;

public class Ejemplo06Integrador {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("¿Cuántas notas desea ingresar? ");
        int cantidad = scanner.nextInt();

        double suma = 0;

        for (int i = 1; i <= cantidad; i++) {
            System.out.print("Ingrese nota " + i + ": ");
            double nota = scanner.nextDouble();
            suma += nota;
        }

        double promedio = suma / cantidad;

        System.out.println("Promedio: " + promedio);

        if (promedio >= 4.0) {
            System.out.println("Resultado: aprobado");
        } else {
            System.out.println("Resultado: reprobado");
        }

        scanner.close();
    }
}
