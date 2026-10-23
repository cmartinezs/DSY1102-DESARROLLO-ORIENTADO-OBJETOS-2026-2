public class PolimorfismoInterfaz {
    interface Mensajero {
        String enviar();
    }
    static class Correo implements Mensajero {
        public String enviar() { return "Correo enviado"; }
    }
    static class Pantalla implements Mensajero {
        public String enviar() { return "Aviso mostrado"; }
    }
    static void informar(Mensajero m) { System.out.println(m.enviar()); }
    public static void main(String[] args) {
        informar(new Correo());
        informar(new Pantalla());
    }
}
