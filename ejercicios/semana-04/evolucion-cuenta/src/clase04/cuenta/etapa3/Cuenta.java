package clase04.cuenta.etapa3;

public class Cuenta {
    private Cliente cliente;
    private int pin;
    private double saldo;

    public Cuenta(Cliente cliente, int pin, double saldoInicial) {
        this.cliente = cliente;
        this.pin = pin;

        if (saldoInicial >= 0) {
            this.saldo = saldoInicial;
        }
    }

    public Cliente getCliente() {
        return cliente;
    }

    public int getPin() {
        return pin;
    }

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }

    public void girar(double monto) {
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
        }
    }

    public void mostrarDatos() {
        System.out.println("Titular: " + cliente.getNombre());
        System.out.println("RUT: " + cliente.getRut());
        System.out.println("Saldo: $" + saldo);
    }
}
