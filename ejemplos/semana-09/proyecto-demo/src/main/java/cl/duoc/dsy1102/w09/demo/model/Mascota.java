package cl.duoc.dsy1102.w09.demo.model;

public final class Mascota {
    private final String nombre;

    public Mascota(String nombre) {
        if (nombre == null || nombre.isBlank()) {
            throw new IllegalArgumentException("El nombre no puede estar vacío");
        }
        this.nombre = nombre.trim();
    }

    public String getNombre() {
        return nombre;
    }
}
