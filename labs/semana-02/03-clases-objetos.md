# 03 · Convertir la solución en objetos Cuenta

[← 02 · Métodos](02-metodos.md) · [Índice](README.md) · [04 · Pruebas →](04-verificacion.md)

## Paso 1 · Crear Cuenta.java
1. En Project, clic derecho en `src` → **New → Java Class** → `Cuenta`.
2. Pega este archivo:

```java
public class Cuenta {
    private final String titular;
    private double saldo;

    public Cuenta(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public void depositar(double monto) {
        saldo = saldo + monto;
    }

    public double getSaldo() {
        return saldo;
    }

    public String getTitular() {
        return titular;
    }
}
```

**Checkpoint A:** distingues atributos `titular` y `saldo`, constructor y métodos. Para mantener este ejercicio introductorio simple, la validación avanzada de depósitos se trabaja después, en semana 03.

## Paso 2 · Usar dos objetos distintos
Reemplaza `Main.java`:

```java
public class Main {
    public static void main(String[] args) {
        Cuenta ana = new Cuenta("Ana", 10000);
        Cuenta pedro = new Cuenta("Pedro", 4000);

        ana.depositar(2500);
        pedro.depositar(500);

        System.out.println(ana.getTitular() + ": " + ana.getSaldo());
        System.out.println(pedro.getTitular() + ": " + pedro.getSaldo());
    }
}
```

Ejecuta con Run.

**Checkpoint B:** ves `Ana: 12500.0` y `Pedro: 4500.0`. Ninguna cuenta comparte su campo `saldo` con la otra.

## Paso 3 · ¿Qué mejoró?
Ahora `Main` coordina objetos y cada objeto conserva su propio estado. Compara `calcularSaldo` de la etapa 02 con `ana.depositar`: ¿cuál guarda el resultado para la siguiente operación?

[Continuar →](04-verificacion.md)
