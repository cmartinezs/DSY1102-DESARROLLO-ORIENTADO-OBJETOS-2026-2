public class InterfazCapacidad {
    interface Encendible {
        String encender();
    }
    static class Lampara implements Encendible {
        public String encender() { return "Lámpara encendida"; }
    }
    static class Vela {
        String iluminar() { return "Vela encendida con fósforo"; }
    }
    public static void main(String[] args) {
        Encendible objeto = new Lampara();
        System.out.println(objeto.encender());
        System.out.println(new Vela().iluminar());
    }
}
