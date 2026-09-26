import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

abstract class Animal {
    private final String nombre;

    public Animal(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public abstract void emitirSonido();
}

interface Vacunable {
    void vacunar();
}

class Perro extends Animal implements Vacunable {

    public Perro(String nombre) {
        super(nombre);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: guau");
    }

    @Override
    public void vacunar() {
        System.out.println(getNombre() + " fue vacunado");
    }
}

class Gato extends Animal {

    public Gato(String nombre) {
        super(nombre);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: miau");
    }
}

public class IntegracionEA1 {

    public static void main(String[] args) {
        List<Animal> animales = new ArrayList<>();

        animales.add(new Perro("Firulais"));
        animales.add(new Gato("Michi"));

        System.out.println("=== Comportamiento polimórfico ===");

        for (Animal animal : animales) {
            animal.emitirSonido();
        }

        System.out.println("\n=== Contrato de interfaz ===");

        Vacunable paciente = new Perro("Rex");
        paciente.vacunar();

        System.out.println("\n=== Manejo de entrada inválida ===");

        Scanner scanner = new Scanner(System.in);
        boolean datoValido = false;

        while (!datoValido) {
            try {
                System.out.print("Ingrese edad del animal: ");
                int edad = Integer.parseInt(scanner.nextLine());

                if (edad < 0) {
                    throw new IllegalArgumentException(
                            "La edad no puede ser negativa."
                    );
                }

                System.out.println("Edad registrada: " + edad);
                datoValido = true;

            } catch (NumberFormatException e) {
                System.out.println("Debe ingresar un número entero.");

            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }

        scanner.close();
    }
}
