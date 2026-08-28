public class Ejemplo06Integrador {

    public static void main(String[] args) {
        double nota1 = 5.5;
        double nota2 = 4.8;
        double nota3 = 6.1;

        double promedio = (nota1 + nota2 + nota3) / 3;

        System.out.println("Nota 1: " + nota1);
        System.out.println("Nota 2: " + nota2);
        System.out.println("Nota 3: " + nota3);
        System.out.println("Promedio: " + promedio);

        if (promedio >= 4.0) {
            System.out.println("Resultado: aprobado");
        } else {
            System.out.println("Resultado: reprobado");
        }

        int numero = 5;
        System.out.println("\nTabla del " + numero + ":");

        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero * i));
        }
    }
}
