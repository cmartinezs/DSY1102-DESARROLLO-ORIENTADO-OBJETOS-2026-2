public class MetodosParametrosRetorno {

    public static void main(String[] args) {
        mostrarNombre("Ana");

        int resultado = sumar(7, 5);
        System.out.println("Resultado: " + resultado);

        boolean mayor = esMayorDeEdad(20);
        System.out.println("¿Es mayor de edad?: " + mayor);
    }

    public static void mostrarNombre(String nombre) {
        System.out.println("Nombre: " + nombre);
    }

    public static int sumar(int a, int b) {
        return a + b;
    }

    public static boolean esMayorDeEdad(int edad) {
        return edad >= 18;
    }
}
