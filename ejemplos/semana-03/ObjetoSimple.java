class ProductoSimple {
    String nombre;
    int stock;
}

public class ObjetoSimple {
    public static void main(String[] args) {
        ProductoSimple producto = new ProductoSimple();
        producto.nombre = "Cuaderno";
        producto.stock = 12;
        System.out.println(producto.nombre + " · stock: " + producto.stock);
    }
}
