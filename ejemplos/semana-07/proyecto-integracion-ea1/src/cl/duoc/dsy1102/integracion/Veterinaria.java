package cl.duoc.dsy1102.integracion;

import java.util.ArrayList;
import java.util.List;

public class Veterinaria {

    private final List<Animal> animales;

    public Veterinaria() {
        animales = new ArrayList<>();
    }

    public void agregarAnimal(Animal animal) {
        animales.add(animal);
    }

    public void listarAnimales() {
        if (animales.isEmpty()) {
            System.out.println("No hay animales registrados.");
            return;
        }

        for (Animal animal : animales) {
            System.out.println(animal.obtenerDescripcion());
        }
    }

    public void emitirSonidos() {
        if (animales.isEmpty()) {
            System.out.println("No hay animales registrados.");
            return;
        }

        for (Animal animal : animales) {
            animal.emitirSonido();
        }
    }

    public Animal buscarPorNombre(String nombre) {
        for (Animal animal : animales) {
            if (animal.getNombre().equalsIgnoreCase(nombre)) {
                return animal;
            }
        }
        return null;
    }

    public void vacunarAnimal(String nombre) {
        Animal animal = buscarPorNombre(nombre);

        if (animal == null) {
            throw new IllegalArgumentException("No existe un animal con ese nombre.");
        }

        if (!(animal instanceof Vacunable)) {
            throw new IllegalArgumentException(
                    animal.getNombre() + " no cumple el contrato Vacunable."
            );
        }

        Vacunable vacunable = (Vacunable) animal;
        vacunable.vacunar();
    }
}
