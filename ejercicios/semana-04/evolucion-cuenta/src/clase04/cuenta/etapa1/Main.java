package clase04.cuenta.etapa1;

public class Main {
    public static void main(String[] args) {
        Cuenta cuenta = new Cuenta();

        cuenta.setNombre("Ana Pérez");
        cuenta.setRut("12.345.678-9");
        cuenta.setPin(1234);
        cuenta.setSaldo(100000);

        cuenta.mostrarDatos();

        cuenta.depositar(50000);
        cuenta.girar(30000);

        System.out.println("\nDespués de las operaciones:");
        cuenta.mostrarDatos();
    }
}
