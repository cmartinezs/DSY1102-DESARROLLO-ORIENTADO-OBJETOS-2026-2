# 02 · Extraer un método con parámetros y retorno

[← 01 · Main](01-entorno-y-main.md) · [Índice](README.md) · [03 · Objetos →](03-clases-objetos.md)

## Paso 1 · Reemplazar Main
Abre `Main.java` y usa este código:

```java
public class Main {
    public static void main(String[] args) {
        double saldo = 10000;
        double nuevoSaldo = calcularSaldo(saldo, 2500);
        System.out.println("Saldo final: " + nuevoSaldo);
    }

    public static double calcularSaldo(double saldo, double deposito) {
        return saldo + deposito;
    }
}
```

**Checkpoint A:** al ejecutar imprime `Saldo final: 12500.0`. `saldo` y `deposito` son **parámetros** del método; `10000` y `2500` son valores que se utilizan al llamarlo.

## Paso 2 · Comprobar reutilización
Agrega debajo del primer `System.out.println`:
```java
System.out.println("Otro saldo: " + calcularSaldo(4000, 500));
```
Ejecuta: ahora también aparece `Otro saldo: 4500.0`.

**Checkpoint B:** el método puede usarse con valores distintos sin copiar su fórmula.

## Paso 3 · Encontrar el límite
Un método `static` calcula, pero todavía no representa una cuenta con identidad y saldo propios. En la siguiente etapa aparecerá un objeto que **guarda** esa información.

[Continuar →](03-clases-objetos.md)
