// Variante previa conservada: usa MetodoRetorno.java como ejemplo canonico de semana 03.
class MetodoRetornoLegacy {
    static double calcularTotal(double precio, int cantidad) {
        return precio * cantidad;
    }

    public static void main(String[] args) {
        double total = calcularTotal(1200, 3);
        System.out.println("Total: $" + total);
    }
}
