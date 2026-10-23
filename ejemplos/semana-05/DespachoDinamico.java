public class DespachoDinamico {
    static class Alerta {
        String mensaje() { return "Aviso general"; }
    }
    static class AlertaCritica extends Alerta {
        @Override String mensaje() { return "Alerta crítica"; }
    }
    static void presentar(Alerta alerta) {
        System.out.println(alerta.mensaje());
    }
    public static void main(String[] args) {
        Alerta comun = new Alerta();
        Alerta urgente = new AlertaCritica();
        presentar(comun);
        presentar(urgente);
    }
}
