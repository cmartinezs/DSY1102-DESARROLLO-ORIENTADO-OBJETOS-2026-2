public class Ejemplo03Switch {

    public static void main(String[] args) {
        int opcion = 2;

        switch (opcion) {
            case 1:
                System.out.println("Crear registro");
                break;
            case 2:
                System.out.println("Listar registros");
                break;
            case 3:
                System.out.println("Salir");
                break;
            default:
                System.out.println("Opción no válida");
        }
    }
}
