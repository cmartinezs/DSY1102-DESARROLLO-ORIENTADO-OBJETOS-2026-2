// Ruta historica; la clase canonica se encuentra en ListaBasica.java.
import java.util.ArrayList;
import java.util.List;

class ListaBasicaLegacy {
    public static void main(String[] args) {
        List<String> nombres = new ArrayList<>();
        nombres.add("Ana");
        nombres.add("Pedro");
        nombres.add("Luis");

        System.out.println("Cantidad: " + nombres.size());

        for (String nombre : nombres) {
            System.out.println(nombre);
        }

        nombres.remove("Pedro");
        System.out.println("Después de eliminar: " + nombres);
    }
}
