public class ProductoDemo {

    public static void main(String[] args) {
        Producto producto = new Producto("Teclado", 19990, 5);

        producto.mostrarResumen();
        producto.vender(2);
        producto.mostrarResumen();
        producto.vender(10); // no debería permitir stock negativo
    }
}

class Producto {
    private String nombre;
    private double precio;
    private int stock;

    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public void mostrarResumen() {
        System.out.println(nombre + " | $" + precio + " | stock: " + stock);
    }

    public boolean vender(int cantidad) {
        if (cantidad <= 0 || cantidad > stock) {
            System.out.println("Venta rechazada: cantidad inválida o stock insuficiente");
            return false;
        }

        stock -= cantidad;
        return true;
    }

    public int getStock() {
        return stock;
    }
}
