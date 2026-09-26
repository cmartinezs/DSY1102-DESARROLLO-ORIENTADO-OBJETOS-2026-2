package cl.duoc.dsy1102.integracion;

public class Gato extends Animal implements Vacunable {

    public Gato(String nombre, int edad) {
        super(nombre, edad);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: miau");
    }

    @Override
    public void vacunar() {
        System.out.println(getNombre() + " fue vacunado correctamente.");
    }
}
