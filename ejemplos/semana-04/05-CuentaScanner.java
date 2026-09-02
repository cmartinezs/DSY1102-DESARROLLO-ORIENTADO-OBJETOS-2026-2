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

/**
 * ETAPA INTENCIONALMENTE VERBOSA.
 *
 * Antes de crear LectorConsola queremos experimentar el problema real:
 * cada dato que se solicita obliga al Main a repetir lectura, validación,
 * mensajes de error y descarte de entradas inválidas.
 *
 * No simplificar todavía este código: la repetición es parte del ejercicio.
 */
class MainCuentaScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. Texto: lectura directa.
        System.out.print("Nombre del cliente: ");
        String nombre = scanner.nextLine();

        System.out.print("RUT: ");
        String rut = scanner.nextLine();

        // 2. Entero: ya aparece validación repetitiva.
        int pin;
        while (true) {
            System.out.print("PIN de 4 dígitos: ");

            if (scanner.hasNextInt()) {
                pin = scanner.nextInt();
                scanner.nextLine(); // consume Enter pendiente

                if (pin >= 1000 && pin <= 9999) {
                    break;
                }

                System.out.println("El PIN debe tener 4 dígitos.");
            } else {
                System.out.println("Entrada inválida. Debe ingresar un número entero.");
                scanner.nextLine(); // descarta la entrada incorrecta
            }
        }

        // 3. Decimal: volvemos a repetir casi la misma estructura.
        double saldoInicial;
        while (true) {
            System.out.print("Saldo inicial: ");

            if (scanner.hasNextDouble()) {
                saldoInicial = scanner.nextDouble();
                scanner.nextLine();

                if (saldoInicial >= 0) {
                    break;
                }

                System.out.println("El saldo inicial no puede ser negativo.");
            } else {
                System.out.println("Entrada inválida. Debe ingresar un número.");
                scanner.nextLine();
            }
        }

        ClienteScanner cliente = new ClienteScanner(nombre, rut);
        CuentaScanner cuenta = new CuentaScanner(cliente, pin, saldoInicial);

        // 4. Otra vez un decimal positivo.
        double deposito;
        while (true) {
            System.out.print("Monto a depositar: ");

            if (scanner.hasNextDouble()) {
                deposito = scanner.nextDouble();
                scanner.nextLine();

                if (deposito >= 0) {
                    break;
                }

                System.out.println("El monto no puede ser negativo.");
            } else {
                System.out.println("Entrada inválida. Debe ingresar un número.");
                scanner.nextLine();
            }
        }

        cuenta.depositar(deposito);

        // 5. Y por tercera vez repetimos la lectura de un decimal positivo.
        double giro;
        while (true) {
            System.out.print("Monto a girar: ");

            if (scanner.hasNextDouble()) {
                giro = scanner.nextDouble();
                scanner.nextLine();

                if (giro >= 0) {
                    break;
                }

                System.out.println("El monto no puede ser negativo.");
            } else {
                System.out.println("Entrada inválida. Debe ingresar un número.");
                scanner.nextLine();
            }
        }

        boolean giroRealizado = cuenta.girar(giro);

        if (!giroRealizado) {
            System.out.println("No fue posible realizar el giro.");
        }

        System.out.println("\n--- Estado final ---");
        cuenta.mostrarDatos();

        scanner.close();
    }
}
