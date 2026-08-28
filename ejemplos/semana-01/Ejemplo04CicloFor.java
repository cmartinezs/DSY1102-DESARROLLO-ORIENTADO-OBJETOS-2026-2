public class Ejemplo04CicloFor {

    public static void main(String[] args) {
        int suma = 0;

        for (int i = 1; i <= 5; i++) {
            suma += i;
            System.out.println("i = " + i + " | suma acumulada = " + suma);
        }

        System.out.println("Resultado final: " + suma);
    }
}
