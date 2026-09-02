class Punto {
    private int x;
    private int y;

    public Punto(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public double calcularDistancia(Punto otroPunto) {
        int diferenciaX = otroPunto.getX() - x;
        int diferenciaY = otroPunto.getY() - y;

        return Math.sqrt(
            diferenciaX * diferenciaX + diferenciaY * diferenciaY
        );
    }

    public void mostrarDatos() {
        System.out.print("(" + x + ", " + y + ")");
    }
}

class Cuadrilatero {
    private Punto vertice1;
    private Punto vertice2;
    private Punto vertice3;
    private Punto vertice4;

    public Cuadrilatero(
        Punto vertice1,
        Punto vertice2,
        Punto vertice3,
        Punto vertice4
    ) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
        this.vertice4 = vertice4;
    }

    public double calcularPerimetro() {
        return vertice1.calcularDistancia(vertice2)
            + vertice2.calcularDistancia(vertice3)
            + vertice3.calcularDistancia(vertice4)
            + vertice4.calcularDistancia(vertice1);
    }

    public void mostrarVertices() {
        System.out.print("V1: ");
        vertice1.mostrarDatos();
        System.out.print(" V2: ");
        vertice2.mostrarDatos();
        System.out.print(" V3: ");
        vertice3.mostrarDatos();
        System.out.print(" V4: ");
        vertice4.mostrarDatos();
        System.out.println();
    }
}

public class CuadrilateroApp {
    public static void main(String[] args) {
        Punto a = new Punto(0, 0);
        Punto b = new Punto(4, 0);
        Punto c = new Punto(4, 3);
        Punto d = new Punto(0, 3);

        Cuadrilatero figura = new Cuadrilatero(a, b, c, d);
        figura.mostrarVertices();
        System.out.println("Perímetro: " + figura.calcularPerimetro());
    }
}
