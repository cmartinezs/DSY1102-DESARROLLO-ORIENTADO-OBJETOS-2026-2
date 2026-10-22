# 02 · Crear una cuenta que nazca válida

[← 01 · Preparación](01-preparacion.md) · [Índice](README.md) · [03 · Validaciones →](03-proteger-estado.md)

## Paso 1 · Completar Cuenta.java
Abre `src/Cuenta.java`. Selecciona el contenido y pega:

```java
public class Cuenta {
    private final String titular;
    private double saldo;

    public Cuenta(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public String getTitular() { return titular; }
    public double getSaldo() { return saldo; }
}
```

**Checkpoint A:** identifica dos campos privados. `titular` es `final` porque no cambia después de crear la cuenta. Todavía validaremos saldo inicial en la etapa siguiente.

## Paso 2 · Crear dos instancias distintas
Reemplaza `Main.java` por:

```java
public class Main {
    public static void main(String[] args) {
        Cuenta cuentaAna = new Cuenta("Ana", 10000);
        Cuenta cuentaPedro = new Cuenta("Pedro", 5000);

        System.out.println(cuentaAna.getTitular() + ": " + cuentaAna.getSaldo());
        System.out.println(cuentaPedro.getTitular() + ": " + cuentaPedro.getSaldo());
    }
}
```

Pulsa **Run**.

**Checkpoint B:** muestra `Ana: 10000.0` y `Pedro: 5000.0`. Aunque ambos son instancias de la misma clase, poseen estado diferente.

## Paso 3 · Reconocer el riesgo
¿Podría existir `new Cuenta("Ana", -500)`? Por ahora sí; la siguiente etapa impedirá este caso desde el constructor.

[Continuar →](03-proteger-estado.md)
