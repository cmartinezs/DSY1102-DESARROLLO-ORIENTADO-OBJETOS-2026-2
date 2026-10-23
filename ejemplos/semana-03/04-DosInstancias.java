// Variante historica preservada; ver DosInstancias.java para el ejemplo canonico.
class ContadorLegacy {
    private int valor;

    ContadorLegacy(int valorInicial) {
        valor = valorInicial;
    }

    void incrementar() {
        valor++;
    }

    int consultar() {
        return valor;
    }
}

class DosInstanciasLegacy {
    public static void main(String[] args) {
        ContadorLegacy a = new ContadorLegacy(0);
        ContadorLegacy b = new ContadorLegacy(10);
        a.incrementar();
        a.incrementar();
        b.incrementar();
        System.out.println("A=" + a.consultar());
        System.out.println("B=" + b.consultar());
    }
}
