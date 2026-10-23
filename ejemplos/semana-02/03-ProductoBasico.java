// Variante historica: ver ProductoBasico.java sin prefijo.
class ProductoBasicoLegacy {

    public static void main(String[] args) {
        ProductoBasicoLegacyItem producto1 = new ProductoBasicoLegacyItem();
        producto1.nombre = "Teclado";
        producto1.precio = 19990;

        ProductoBasicoLegacyItem producto2 = new ProductoBasicoLegacyItem();
        producto2.nombre = "Mouse";
        producto2.precio = 12990;

        System.out.println(producto1.nombre + " | $" + producto1.precio);
        System.out.println(producto2.nombre + " | $" + producto2.precio);
    }
}

class ProductoBasicoLegacyItem {
    String nombre;
    double precio;
}
