# 01 · Crear CuentaSimpleS02 y efectuar un cálculo

[← Índice](README.md) · [02 · Métodos →](02-metodos.md)

## Paso 1 · Nuevo proyecto
1. Abre IntelliJ IDEA.
2. Pulsa **New Project** o selecciona **File → New → Project**.
3. En la izquierda selecciona **Java** (no JavaFX).
4. Nombre: `CuentaSimpleS02`; JDK: **21**; Build system: **IntelliJ**.
5. Pulsa **Create** y espera a que aparezca el panel Project.
6. Sobre `src`, clic derecho → **New → Java Class** → `Main`. Si `src` no existe, crea la carpeta y márcala como Sources Root.

**Checkpoint A:** ves `Main.java` en el directorio de código fuente.

## Paso 2 · Primer cálculo en main
Copia el contenido completo:

```java
public class Main {
    public static void main(String[] args) {
        double saldo = 10000;
        double deposito = 2500;
        double nuevoSaldo = saldo + deposito;

        System.out.println("Saldo inicial: " + saldo);
        System.out.println("Saldo final: " + nuevoSaldo);
    }
}
```

Pulsa Run junto a `main`.

**Checkpoint B:** la consola muestra `10000.0` y `12500.0`. Si falta el botón Run, revisa que `Main` esté dentro de `src` y que el SDK esté configurado.

## Paso 3 · Predicción
Cambia `deposito` a 1000. Antes de ejecutar, escribe el saldo esperado. Ejecuta y compara. Devuelve depósito a 2500 para comenzar la siguiente etapa.

[Continuar →](02-metodos.md)
