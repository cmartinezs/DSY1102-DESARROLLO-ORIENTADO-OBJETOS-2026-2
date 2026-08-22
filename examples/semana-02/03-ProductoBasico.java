public class ProductoBasico {

    public static void main(String[] args) {
        Producto producto1 = new Producto();
        producto1.nombre = "Teclado";
        producto1.precio = 19990;

        Producto producto2 = new Producto();
        producto2.nombre = "Mouse";
        producto2.precio = 12990;

        System.out.println(producto1.nombre + " | $" + producto1.precio);
        System.out.println(producto2.nombre + " | $" + producto2.precio);
    }
}

class Producto {
    String nombre;
    double precio;
}
