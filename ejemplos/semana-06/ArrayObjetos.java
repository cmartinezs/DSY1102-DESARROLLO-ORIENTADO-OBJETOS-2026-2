public class ArrayObjetos {
    static class Producto {
        private final String nombre;
        private final int precio;

        Producto(String nombre, int precio) {
            this.nombre = nombre;
            this.precio = precio;
        }

        void mostrar() {
            System.out.println(nombre + " - $" + precio);
        }
    }

    public static void main(String[] args) {
        Producto[] productos = {
            new Producto("Mouse", 15000),
            new Producto("Teclado", 25000)
        };

        for (Producto producto : productos) {
            producto.mostrar();
        }
    }
}
