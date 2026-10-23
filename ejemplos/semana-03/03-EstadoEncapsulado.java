// Variante previa conservada: usa EstadoEncapsulado.java como ejemplo canonico de semana 03.
class BilleteraLegacy {
    private int saldo;

    BilleteraLegacy(int saldoInicial) {
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

class EstadoEncapsuladoLegacy {
    public static void main(String[] args) {
        BilleteraLegacy billetera = new BilleteraLegacy(5000);
        billetera.cargar(2000);
        billetera.cargar(-100);
        System.out.println("Saldo: $" + billetera.consultarSaldo());
    }
}
