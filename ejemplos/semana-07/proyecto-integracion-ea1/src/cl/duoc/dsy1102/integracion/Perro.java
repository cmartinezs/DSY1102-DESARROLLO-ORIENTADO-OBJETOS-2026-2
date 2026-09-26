package cl.duoc.dsy1102.integracion;

public class Perro extends Animal implements Vacunable {

    public Perro(String nombre, int edad) {
        super(nombre, edad);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: guau");
    }

    @Override
    public void vacunar() {
        System.out.println(getNombre() + " fue vacunado correctamente.");
    }
}
