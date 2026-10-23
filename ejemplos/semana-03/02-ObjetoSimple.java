// Variante previa conservada: usa ObjetoSimple.java como ejemplo canonico de semana 03.
class ProductoLegacy {
    String nombre;
    int stock;

    ProductoLegacy(String nombre, int stock) {
        this.nombre = nombre;
        this.stock = stock;
    }
}

class ObjetoSimpleLegacy {
    public static void main(String[] args) {
        ProductoLegacy producto = new ProductoLegacy("Cuaderno", 12);
        System.out.println(producto.nombre + " · stock: " + producto.stock);
    }
}
