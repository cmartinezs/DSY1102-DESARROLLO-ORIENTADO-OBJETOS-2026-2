class Contador {
    private int valor;

    Contador(int valorInicial) {
        valor = valorInicial;
    }

    void incrementar() {
        valor++;
    }

    int consultar() {
        return valor;
    }
}

public class DosInstancias {
    public static void main(String[] args) {
        Contador a = new Contador(0);
        Contador b = new Contador(10);
        a.incrementar();
        a.incrementar();
        b.incrementar();
        System.out.println("A=" + a.consultar());
        System.out.println("B=" + b.consultar());
    }
}
