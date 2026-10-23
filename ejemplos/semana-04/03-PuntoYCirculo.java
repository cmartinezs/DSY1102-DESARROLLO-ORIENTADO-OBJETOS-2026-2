// Demo autocontenida: clases auxiliares con nombres propios para compilar toda la semana.
class PuntoCirculo {
    private int x;
    private int y;

    public PuntoCirculo(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public double calcularDistancia(PuntoCirculo otroPunto) {
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
    private PuntoCirculo centro;
    private int radio;

    public Circulo(PuntoCirculo centro, int radio) {
        this.centro = centro;
        this.radio = radio;
    }

    public PuntoCirculo getCentro() {
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
        PuntoCirculo puntoA = new PuntoCirculo(0, 0);
        PuntoCirculo puntoB = new PuntoCirculo(3, 4);

        System.out.println(
            "Distancia entre los puntos: " + puntoA.calcularDistancia(puntoB)
        );

        Circulo circulo = new Circulo(puntoA, 5);
        circulo.mostrarDatos();
    }
}
