// Ejemplo legado: utilizar TryCatchBasico.java (sin prefijo) como fuente canonica.
class TryCatchBasicoLegacy {
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
