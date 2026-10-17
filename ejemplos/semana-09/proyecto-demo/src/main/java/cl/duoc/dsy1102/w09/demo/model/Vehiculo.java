package cl.duoc.dsy1102.w09.demo.model;

public final class Vehiculo {
    private final String patente;

    public Vehiculo(String patente) {
        if (patente == null || patente.isBlank()) {
            throw new IllegalArgumentException("La patente no puede estar vacía");
        }
        this.patente = patente.trim().toUpperCase();
    }

    public String getPatente() {
        return patente;
    }
}
