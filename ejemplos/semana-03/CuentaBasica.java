class Cuenta {
    private String titular;
    private String numeroCuenta;
    private int saldo;

    // Accesores
    public String getTitular() {
        return titular;
    }

    public String getNumeroCuenta() {
        return numeroCuenta;
    }

    public int getSaldo() {
        return saldo;
    }

    // Mutadores
    public void setTitular(String titular) {
        this.titular = titular;
    }

    public void setNumeroCuenta(String numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    }

    public void setSaldo(int saldo) {
        if (saldo >= 0) {
            this.saldo = saldo;
        }
    }

    // Funciones operacionales
    public boolean depositarMonto(int monto) {
        if (monto <= 0) {
            return false;
        }

        saldo += monto;
        return true;
    }

    public boolean girarMonto(int monto) {
        if (monto <= 0 || monto > saldo) {
            return false;
        }

        saldo -= monto;
        return true;
    }

    public void mostrarDatos() {
        System.out.println("Titular: " + titular);
        System.out.println("Número de cuenta: " + numeroCuenta);
        System.out.println("Saldo: $" + saldo);
    }
}

public class CuentaBasica {
    public static void main(String[] args) {
        Cuenta cuenta = new Cuenta();

        // En este punto del curso todavía no se han visto constructores.
        // El estado inicial se establece mediante mutadores.
        cuenta.setTitular("Ana Pérez");
        cuenta.setNumeroCuenta("CTA-001");
        cuenta.setSaldo(100000);

        cuenta.depositarMonto(25000);
        cuenta.girarMonto(30000);

        cuenta.mostrarDatos();
    }
}
