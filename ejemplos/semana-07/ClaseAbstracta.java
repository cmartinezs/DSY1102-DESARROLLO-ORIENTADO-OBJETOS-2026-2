public class ClaseAbstracta {
    static abstract class Figura {
        abstract int area();
    }
    static class Cuadrado extends Figura {
        private final int lado;
        Cuadrado(int lado) { this.lado = lado; }
        @Override int area() { return lado * lado; }
    }
    public static void main(String[] args) {
        Figura figura = new Cuadrado(4);
        System.out.println("Área: " + figura.area()); // 16
    }
}
