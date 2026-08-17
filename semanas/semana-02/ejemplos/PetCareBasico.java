public class PetCareBasico {

    public static void main(String[] args) {
        String nombre = "Michi";
        int edad = 4;
        double peso = 5.2;
        boolean vacunado = true;

        mostrarFicha(nombre, edad, peso, vacunado);

        if (peso <= 0) {
            System.out.println("Peso inválido");
        } else if (peso < 3) {
            System.out.println("Revisar peso con atención");
        } else {
            System.out.println("Peso registrado");
        }

        System.out.println("Edad proyectada:");
        for (int i = 1; i <= 3; i++) {
            System.out.println("En " + i + " año(s): " + (edad + i));
        }
    }

    static void mostrarFicha(String nombre, int edad, double peso, boolean vacunado) {
        System.out.println("=== PetCare ===");
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Peso: " + peso + " kg");
        System.out.println("Vacunado: " + vacunado);
    }
}
