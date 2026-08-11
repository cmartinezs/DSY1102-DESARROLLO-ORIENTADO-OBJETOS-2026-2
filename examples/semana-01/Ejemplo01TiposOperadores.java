public class Ejemplo01TiposOperadores {

    public static void main(String[] args) {
        String nombre = "Ana";
        int edad = 20;
        double nota1 = 5.5;
        double nota2 = 6.2;
        double promedio = (nota1 + nota2) / 2;

        boolean esMayorDeEdad = edad >= 18;
        boolean aprueba = promedio >= 4.0;

        System.out.println("Estudiante: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Promedio: " + promedio);
        System.out.println("¿Es mayor de edad? " + esMayorDeEdad);
        System.out.println("¿Aprueba? " + aprueba);
    }
}
