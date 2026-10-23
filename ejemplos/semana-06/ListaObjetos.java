import java.util.ArrayList;
import java.util.List;

public class ListaObjetos {
    static class Producto {
        private final String nombre;
        private final int precio;

        Producto(String nombre, int precio) {
            this.nombre = nombre;
            this.precio = precio;
        }

        String getNombre() {
            return nombre;
        }

        void mostrar() {
            System.out.println(nombre + " - $" + precio);
        }
    }

    public static void main(String[] args) {
        List<Producto> productos = new ArrayList<>();
        productos.add(new Producto("Mouse", 15000));
        productos.add(new Producto("Teclado", 25000));

        for (Producto producto : productos) {
            producto.mostrar();
        }

        for (Producto producto : productos) {
            if (producto.getNombre().equals("Teclado")) {
                System.out.println("Encontrado: " + producto.getNombre());
            }
        }
    }
}
