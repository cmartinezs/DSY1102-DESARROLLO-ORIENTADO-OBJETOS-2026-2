class Producto {
    String nombre;
    int stock;

    Producto(String nombre, int stock) {
        this.nombre = nombre;
        this.stock = stock;
    }
}

public class ObjetoSimple {
    public static void main(String[] args) {
        Producto producto = new Producto("Cuaderno", 12);
        System.out.println(producto.nombre + " · stock: " + producto.stock);
    }
}
