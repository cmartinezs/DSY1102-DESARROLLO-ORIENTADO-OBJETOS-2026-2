class Persona {
    private String nombre;
    private String rut;

    public Persona(String nombre, String rut) {
        this.nombre = nombre;
        this.rut = rut;
    }

    public String getNombre() {
        return nombre;
    }

    public String getRut() {
        return rut;
    }

    public void mostrarDatos() {
        System.out.println("Nombre: " + nombre);
        System.out.println("RUT: " + rut);
    }
}

class Cuenta {
    private Persona titular;
    private int saldo;

    public Cuenta(Persona titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    public Cuenta(Persona titular, int saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    public Persona getTitular() {
        return titular;
    }

    public int getSaldo() {
        return saldo;
    }

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
        System.out.println("Titular: " + titular.getNombre());
        System.out.println("RUT: " + titular.getRut());
        System.out.println("Saldo: $" + saldo);
    }
}

public class CuentaPersona {
    public static void main(String[] args) {
        Persona persona = new Persona("Persona Demo", "RUT-DEMO-001");
        Cuenta cuenta = new Cuenta(persona, 100000);

        cuenta.depositarMonto(25000);
        cuenta.girarMonto(30000);
        cuenta.mostrarDatos();
    }
}
