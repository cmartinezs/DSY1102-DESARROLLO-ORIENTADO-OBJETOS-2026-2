class Cuenta {
    private String nombre;
    private String rut;
    private int saldo;

    // Si declaramos constructores propios, Java ya no crea automáticamente
    // el constructor sin parámetros. Si queremos conservarlo, lo declaramos.
    public Cuenta() {
        saldo = 0;
    }

    // Sobrecarga: mismo nombre, distinta lista de parámetros.
    public Cuenta(String nombre, String rut) {
        this.nombre = nombre;
        this.rut = rut;
        this.saldo = 0;
    }

    public Cuenta(String nombre, String rut, int saldoInicial) {
        this.nombre = nombre;
        this.rut = rut;

        if (saldoInicial >= 0) {
            this.saldo = saldoInicial;
        } else {
            this.saldo = 0;
        }
    }

    // Accesores
    public String getNombre() {
        return nombre;
    }

    public String getRut() {
        return rut;
    }

    public int getSaldo() {
        return saldo;
    }

    // Mutadores
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setRut(String rut) {
        this.rut = rut;
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
        System.out.println("Nombre: " + nombre);
        System.out.println("RUT: " + rut);
        System.out.println("Saldo: $" + saldo);
    }
}

class CuentaConstructores {
    public static void main(String[] args) {
        Cuenta cuenta1 = new Cuenta();
        cuenta1.setNombre("Persona Demo A");
        cuenta1.setRut("RUT-DEMO-001");
        cuenta1.depositarMonto(100000);

        Cuenta cuenta2 = new Cuenta("Persona Demo B", "RUT-DEMO-002");
        cuenta2.depositarMonto(50000);

        Cuenta cuenta3 = new Cuenta("Persona Demo C", "RUT-DEMO-003", 150000);
        cuenta3.girarMonto(25000);

        cuenta1.mostrarDatos();
        System.out.println();
        cuenta2.mostrarDatos();
        System.out.println();
        cuenta3.mostrarDatos();
    }
}
