class ClienteEntrada {
    private String nombre;
    private String rut;

    public ClienteEntrada(String nombre, String rut) {
        this.nombre = nombre;
        this.rut = rut;
    }

    public String getNombre() {
        return nombre;
    }

    public String getRut() {
        return rut;
    }
}

class CuentaEntrada {
    private ClienteEntrada titular;
    private int pin;
    private double saldo;

    public CuentaEntrada(ClienteEntrada titular, int pin, double saldoInicial) {
        this.titular = titular;
        this.pin = pin;
        this.saldo = saldoInicial;
    }

    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }

    public boolean girar(double monto) {
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
            return true;
        }

        return false;
    }

    public void mostrarDatos() {
        System.out.println("Titular: " + titular.getNombre());
        System.out.println("RUT: " + titular.getRut());
        System.out.println("Saldo: $" + saldo);
    }
}

class MainCuentaConLector {
    public static void main(String[] args) {
        LectorConsola lector = new LectorConsola();

        String nombre = lector.leerTexto("Nombre del cliente: ");
        String rut = lector.leerTexto("RUT: ");
        int pin = lector.leerEntero("PIN de 4 dígitos: ", 1000, 9999);
        double saldoInicial = lector.leerDecimalPositivo("Saldo inicial: ");

        ClienteEntrada cliente = new ClienteEntrada(nombre, rut);
        CuentaEntrada cuenta = new CuentaEntrada(cliente, pin, saldoInicial);

        double deposito = lector.leerDecimalPositivo("Monto a depositar: ");
        cuenta.depositar(deposito);

        double giro = lector.leerDecimalPositivo("Monto a girar: ");
        boolean giroRealizado = cuenta.girar(giro);

        if (!giroRealizado) {
            System.out.println("No fue posible realizar el giro.");
        }

        System.out.println("\n--- Estado final ---");
        cuenta.mostrarDatos();

        lector.cerrar();
    }
}
