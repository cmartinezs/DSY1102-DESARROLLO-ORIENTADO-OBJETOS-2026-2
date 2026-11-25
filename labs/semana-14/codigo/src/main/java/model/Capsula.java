package model;

import java.time.LocalDate;

public class Capsula {

    private final int id;
    private final String titulo;
    private final String mensaje;
    private final LocalDate fechaApertura;

    public Capsula(int id, String titulo, String mensaje, LocalDate fechaApertura) {
        this.id = id;
        this.titulo = titulo;
        this.mensaje = mensaje;
        this.fechaApertura = fechaApertura;
    }

    public int getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getMensaje() {
        return mensaje;
    }

    public LocalDate getFechaApertura() {
        return fechaApertura;
    }
}
