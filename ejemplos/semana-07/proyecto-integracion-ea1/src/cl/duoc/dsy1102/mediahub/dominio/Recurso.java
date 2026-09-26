package cl.duoc.dsy1102.mediahub.dominio;

public abstract class Recurso {

    private final String codigo;
    private String titulo;
    private String creador;
    private boolean disponible;

    public Recurso(String codigo, String titulo, String creador) {
        if (codigo == null || codigo.isBlank()) {
            throw new IllegalArgumentException("El código no puede estar vacío.");
        }
        this.codigo = codigo;
        setTitulo(titulo);
        setCreador(creador);
        this.disponible = true;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        if (titulo == null || titulo.isBlank()) {
            throw new IllegalArgumentException("El título no puede estar vacío.");
        }
        this.titulo = titulo;
    }

    public String getCreador() {
        return creador;
    }

    public void setCreador(String creador) {
        if (creador == null || creador.isBlank()) {
            throw new IllegalArgumentException("El creador no puede estar vacío.");
        }
        this.creador = creador;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void prestar() {
        if (!disponible) {
            throw new IllegalStateException("El recurso ya se encuentra prestado.");
        }
        disponible = false;
    }

    public void devolver() {
        if (disponible) {
            throw new IllegalStateException("El recurso ya se encuentra disponible.");
        }
        disponible = true;
    }

    public abstract int obtenerDiasPrestamo();

    public String obtenerDescripcion() {
        String estado = disponible ? "Disponible" : "Prestado";
        return codigo + " · " + titulo + " · " + creador + " · "
                + getClass().getSimpleName() + " · " + estado;
    }
}
