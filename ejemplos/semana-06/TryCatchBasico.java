public class TryCatchBasico {
    public static void main(String[] args) {
        String entrada = "abc";

        try {
            int numero = Integer.parseInt(entrada);
            System.out.println("Número: " + numero);
        } catch (NumberFormatException e) {
            System.out.println("El valor no es un entero válido.");
        }
    }
}
