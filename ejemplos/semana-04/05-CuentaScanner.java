import java.util.Scanner;

class ClienteScanner {
    private String nombre;
    private String rut;

    public ClienteScanner(String nombre, String rut) {
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

class CuentaScanner {
    private ClienteScanner titular;
    private int pin;
    private double saldo;

    public CuentaScanner(ClienteScanner titular, int pin, double saldoInicial) {
        this.titular = titular;
        this.pin = pin;
        this.saldo = saldoInicial;
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
        System.out.println("Titular: " + titular.getNombre());
        System.out.println("RUT: " + titular.getRut());
        System.out.println("Saldo: $" + saldo);
    }
}

class MainCuentaScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Nombre del cliente: ");
        String nombre = scanner.nextLine();

        System.out.print("RUT: ");
        String rut = scanner.nextLine();

        System.out.print("PIN: ");
        int pin = scanner.nextInt();

        System.out.print("Saldo inicial: ");
        double saldoInicial = scanner.nextDouble();

        ClienteScanner cliente = new ClienteScanner(nombre, rut);
        CuentaScanner cuenta = new CuentaScanner(cliente, pin, saldoInicial);

        System.out.print("Monto a depositar: ");
        double deposito = scanner.nextDouble();
        cuenta.depositar(deposito);

        System.out.print("Monto a girar: ");
        double giro = scanner.nextDouble();
        cuenta.girar(giro);

        System.out.println("\n--- Estado final ---");
        cuenta.mostrarDatos();

        scanner.close();
    }
}
