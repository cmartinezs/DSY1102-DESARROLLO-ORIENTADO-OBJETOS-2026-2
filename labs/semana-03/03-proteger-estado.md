# 03 · Proteger el estado: depósitos y retiros

[← 02 · Modelo](02-modelar-cuenta.md) · [Índice](README.md) · [04 · Pruebas →](04-pruebas-checkpoints.md)

## Paso 1 · Reemplazar Cuenta.java por la versión validada
Abre `src/Cuenta.java`. Pega el archivo completo:

```java
public class Cuenta {
    private final String titular;
    private double saldo;

    public Cuenta(String titular, double saldoInicial) {
        if (titular == null || titular.isBlank() || saldoInicial < 0) {
            throw new IllegalArgumentException("Datos iniciales incorrectos");
        }
        this.titular = titular.trim();
        this.saldo = saldoInicial;
    }

    public String getTitular() { return titular; }
    public double getSaldo() { return saldo; }

    public boolean depositar(double monto) {
        if (monto <= 0) return false;
        saldo += monto;
        return true;
    }

    public boolean retirar(double monto) {
        if (monto <= 0 || monto > saldo) return false;
        saldo -= monto;
        return true;
    }
}
```

**Checkpoint A:** el constructor protege el estado inicial; `depositar` y `retirar` devuelven `boolean` para que `Main` sepa si la operación funcionó. La excepción del constructor se muestra como mecanismo mínimo de rechazo, **sin exigir manejo de `try/catch`** en esta etapa.

## Paso 2 · Ensayar desde Main
Conserva los dos objetos existentes en `Main` y añade **antes del cierre del método**:

```java
System.out.println("Depósito Ana: " + cuentaAna.depositar(2000));
System.out.println("Retiro Pedro excesivo: " + cuentaPedro.retirar(9000));
System.out.println("Saldo Ana: " + cuentaAna.getSaldo());
System.out.println("Saldo Pedro: " + cuentaPedro.getSaldo());
```

Pulsa Run.

**Checkpoint B:** depósito true, retiro false, saldo Ana **12000** y Pedro **5000**. Si Pedro cambió, revisa que el `if` de retirar aparezca **antes** de restar.

## Paso 3 · Encapsulamiento
No escribas `cuentaAna.saldo = ...` desde `Main`: la palabra `private` protege el campo. La responsabilidad de cambiar el saldo pertenece al propio objeto `Cuenta`.

[Continuar →](04-pruebas-checkpoints.md)
