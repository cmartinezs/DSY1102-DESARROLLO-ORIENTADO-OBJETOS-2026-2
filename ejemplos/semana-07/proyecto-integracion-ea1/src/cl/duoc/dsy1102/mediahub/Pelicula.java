package cl.duoc.dsy1102.mediahub;

public class Pelicula extends Recurso {

    public Pelicula(String codigo, String titulo, String creador) {
        super(codigo, titulo, creador);
    }

    @Override
    public int obtenerDiasPrestamo() {
        return 5;
    }
}
