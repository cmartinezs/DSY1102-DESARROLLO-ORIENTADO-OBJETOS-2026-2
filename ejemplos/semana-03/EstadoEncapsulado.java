class BilleteraDemo {
    private int saldo;

    public boolean cargar(int monto) {
        if (monto <= 0) return false;
        saldo += monto;
        return true;
    }

    public int consultarSaldo() { return saldo; }
}

public class EstadoEncapsulado {
    public static void main(String[] args) {
        BilleteraDemo billetera = new BilleteraDemo();
        billetera.cargar(5000);
        billetera.cargar(2000);
        System.out.println("Carga negativa: " + billetera.cargar(-100));
        System.out.println("Saldo: $" + billetera.consultarSaldo());
    }
}
