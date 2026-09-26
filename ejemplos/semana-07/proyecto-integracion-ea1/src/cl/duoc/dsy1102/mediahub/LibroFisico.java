package cl.duoc.dsy1102.mediahub;

public class LibroFisico extends Recurso {

    public LibroFisico(String codigo, String titulo, String creador) {
        super(codigo, titulo, creador);
    }

    @Override
    public int obtenerDiasPrestamo() {
        return 14;
    }
}
