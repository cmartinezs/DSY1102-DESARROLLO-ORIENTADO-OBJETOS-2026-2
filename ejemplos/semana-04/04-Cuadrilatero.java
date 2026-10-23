// Demo autocontenida: clases auxiliares con nombres propios para compilar toda la semana.
class PuntoCuadrilatero {
    private int x;
    private int y;

    public PuntoCuadrilatero(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public double calcularDistancia(PuntoCuadrilatero otroPunto) {
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
    private PuntoCuadrilatero vertice1;
    private PuntoCuadrilatero vertice2;
    private PuntoCuadrilatero vertice3;
    private PuntoCuadrilatero vertice4;

    public Cuadrilatero(
        PuntoCuadrilatero vertice1,
        PuntoCuadrilatero vertice2,
        PuntoCuadrilatero vertice3,
        PuntoCuadrilatero vertice4
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

class CuadrilateroApp {
    public static void main(String[] args) {
        PuntoCuadrilatero a = new PuntoCuadrilatero(0, 0);
        PuntoCuadrilatero b = new PuntoCuadrilatero(4, 0);
        PuntoCuadrilatero c = new PuntoCuadrilatero(4, 3);
        PuntoCuadrilatero d = new PuntoCuadrilatero(0, 3);

        Cuadrilatero figura = new Cuadrilatero(a, b, c, d);
        figura.mostrarVertices();
        System.out.println("Perímetro: " + figura.calcularPerimetro());
    }
}
