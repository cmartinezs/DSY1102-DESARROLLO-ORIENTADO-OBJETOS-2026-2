class ContadorDemo {
    private int valor;

    void incrementar() { valor++; }
    int consultar() { return valor; }
}

public class DosInstancias {
    public static void main(String[] args) {
        ContadorDemo a = new ContadorDemo();
        ContadorDemo b = new ContadorDemo();
        a.incrementar();
        a.incrementar();
        b.incrementar();
        System.out.println("A=" + a.consultar());
        System.out.println("B=" + b.consultar());
    }
}
