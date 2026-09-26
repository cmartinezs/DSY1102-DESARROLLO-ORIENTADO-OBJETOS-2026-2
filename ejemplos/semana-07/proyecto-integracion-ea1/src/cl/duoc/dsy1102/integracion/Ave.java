package cl.duoc.dsy1102.integracion;

public class Ave extends Animal {

    public Ave(String nombre, int edad) {
        super(nombre, edad);
    }

    @Override
    public void emitirSonido() {
        System.out.println(getNombre() + " dice: pío pío");
    }
}
