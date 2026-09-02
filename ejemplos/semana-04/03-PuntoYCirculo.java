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
        System.out.println("(" + x + ", " + y + ")");
    }
}

class Circulo {
    private Punto centro;
    private int radio;

    public Circulo(Punto centro, int radio) {
        this.centro = centro;
        this.radio = radio;
    }

    public Punto getCentro() {
        return centro;
    }

    public int getRadio() {
        return radio;
    }

    public double calcularArea() {
        return Math.PI * radio * radio;
    }

    public void mostrarDatos() {
        System.out.print("Centro: ");
        centro.mostrarDatos();
        System.out.println("Radio: " + radio);
        System.out.println("Área: " + calcularArea());
    }
}

class PuntoYCirculo {
    public static void main(String[] args) {
        Punto puntoA = new Punto(0, 0);
        Punto puntoB = new Punto(3, 4);

        System.out.println(
            "Distancia entre los puntos: " + puntoA.calcularDistancia(puntoB)
        );

        Circulo circulo = new Circulo(puntoA, 5);
        circulo.mostrarDatos();
    }
}
