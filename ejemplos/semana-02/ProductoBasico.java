public class ProductoBasico {

    public static void main(String[] args) {
        ProductoBasicoItem producto1 = new ProductoBasicoItem();
        producto1.nombre = "Teclado";
        producto1.precio = 19990;

        ProductoBasicoItem producto2 = new ProductoBasicoItem();
        producto2.nombre = "Mouse";
        producto2.precio = 12990;

        System.out.println(producto1.nombre + " | $" + producto1.precio);
        System.out.println(producto2.nombre + " | $" + producto2.precio);
    }
}

class ProductoBasicoItem {
    String nombre;
    double precio;
}
