public class Ejemplo05WhileDoWhile {

    public static void main(String[] args) {
        int contador = 1;

        while (contador <= 3) {
            System.out.println("while -> " + contador);
            contador++;
        }

        int numero = 1;

        do {
            System.out.println("do-while -> " + numero);
            numero++;
        } while (numero <= 3);
    }
}
