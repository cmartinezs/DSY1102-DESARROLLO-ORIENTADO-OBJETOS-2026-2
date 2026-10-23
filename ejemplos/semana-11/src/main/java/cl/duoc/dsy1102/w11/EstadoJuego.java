package cl.duoc.dsy1102.w11;

public class EstadoJuego {
    private String jugador;
    private int nivel;

    public EstadoJuego() { } // Jackson puede crear el objeto al leer JSON

    public EstadoJuego(String jugador, int nivel) {
        this.jugador = jugador;
        this.nivel = nivel;
    }

    public String getJugador() { return jugador; }
    public void setJugador(String jugador) { this.jugador = jugador; }
    public int getNivel() { return nivel; }
    public void setNivel(int nivel) { this.nivel = nivel; }
}
