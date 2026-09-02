package clase04.cuenta.etapa2;

public class Cuenta {
    private String nombre;
    private String rut;
    private int pin;
    private double saldo;

    public Cuenta(String nombre, String rut, int pin, double saldoInicial) {
        this.nombre = nombre;
        this.rut = rut;
        this.pin = pin;

        if (saldoInicial >= 0) {
            this.saldo = saldoInicial;
        }
    }

    public String getNombre() {
        return nombre;
    }

    public String getRut() {
        return rut;
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
        System.out.println("Titular: " + nombre);
        System.out.println("RUT: " + rut);
        System.out.println("Saldo: $" + saldo);
    }
}
