class Billetera {
    private int saldo;

    Billetera(int saldoInicial) {
        saldo = Math.max(saldoInicial, 0);
    }

    boolean cargar(int monto) {
        if (monto <= 0) return false;
        saldo += monto;
        return true;
    }

    int consultarSaldo() {
        return saldo;
    }
}

public class EstadoEncapsulado {
    public static void main(String[] args) {
        Billetera billetera = new Billetera(5000);
        billetera.cargar(2000);
        billetera.cargar(-100);
        System.out.println("Saldo: $" + billetera.consultarSaldo());
    }
}
