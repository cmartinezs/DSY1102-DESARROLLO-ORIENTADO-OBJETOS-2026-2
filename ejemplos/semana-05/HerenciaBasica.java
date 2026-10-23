public class HerenciaBasica {
    static class Mensaje {
        private final String destino;
        Mensaje(String destino) { this.destino = destino; }
        String resumen() { return "Destino: " + destino; }
    }

    static class MensajeUrgente extends Mensaje {
        MensajeUrgente(String destino) {
            super(destino); // Reutiliza el constructor de la clase padre
        }
    }

    public static void main(String[] args) {
        MensajeUrgente mensaje = new MensajeUrgente("Biblioteca");
        System.out.println(mensaje.resumen()); // Destino: Biblioteca
    }
}
