public class ThrowBasico {
    static void validarEdad(int edad) {
        if (edad < 0) {
            throw new IllegalArgumentException("La edad no puede ser negativa");
        }
    }

    public static void main(String[] args) {
        try {
            validarEdad(-1);
            System.out.println("Edad válida");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}
