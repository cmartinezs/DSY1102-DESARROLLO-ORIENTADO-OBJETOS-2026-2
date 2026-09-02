package clase04.cuenta.etapa2;

public class Main {
    public static void main(String[] args) {
        Cuenta cuenta = new Cuenta(
                "Ana Pérez",
                "12.345.678-9",
                1234,
                100000
        );

        cuenta.depositar(50000);
        cuenta.girar(30000);
        cuenta.mostrarDatos();
    }
}
