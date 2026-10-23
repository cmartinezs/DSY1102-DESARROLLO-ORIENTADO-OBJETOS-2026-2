import java.util.ArrayList;
import java.util.List;

public class ListaBasica {
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
