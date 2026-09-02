package clase04.cuenta.etapa3;

public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente(
                "Ana Pérez",
                "12.345.678-9"
        );

        Cuenta cuenta = new Cuenta(
                cliente,
                1234,
                100000
        );

        cuenta.depositar(50000);
        cuenta.girar(30000);
        cuenta.mostrarDatos();
    }
}
