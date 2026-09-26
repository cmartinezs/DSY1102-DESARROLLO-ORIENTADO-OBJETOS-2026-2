package cl.duoc.dsy1102.mediahub.dominio;

public class Ebook extends Recurso implements Descargable {

    public Ebook(String codigo, String titulo, String creador) {
        super(codigo, titulo, creador);
    }

    @Override
    public int obtenerDiasPrestamo() {
        return 21;
    }

    @Override
    public void descargar() {
        System.out.println("Descargando ebook: " + getTitulo());
    }
}
