# 03 · Ver polimorfismo en acción

[← 02 · Herencia](02-herencia.md) · [Índice](README.md) · [04 · Pruebas →](04-pruebas.md)

## Paso 1 · Cambiar solo Main
1. Abre `src/Main.java`.
2. Reemplaza su contenido:

```java
public class Main {
    public static void main(String[] args) {
        Envio primero = new Envio("N01", 3);
        Envio segundo = new EnvioExpress("E01", 3);

        mostrar(primero);
        mostrar(segundo);
    }

    private static void mostrar(Envio envio) {
        System.out.println(envio.getCodigo() + ": $" + envio.calcularCosto());
    }
}
```

3. Pulsa Run.

**Checkpoint A:** obtienes `N01: $2500` y `E01: $4500`.

## Paso 2 · Explicar sin copiar
El parámetro del método `mostrar` es **`Envio`**; acepta tanto `Envio` como `EnvioExpress`. Java elige el método sobrescrito según el tipo real del objeto.

Responde en tu evidencia:
1. ¿Por qué `mostrar(Envio)` no tiene un `if` que pregunte por el tipo?
2. ¿Qué cambia si quitas `@Override` y escribes mal el nombre del método?
3. ¿En qué se diferencian `super()` y `super.calcularCosto()`?

## Paso 3 · Mini desafío guiado
Cambia la distancia de `E01` de 3 a 5 kilómetros. Calcula **a mano** el resultado antes de ejecutar: $1.000 + $2.500 + $2.000 = $5.500. Ejecuta y compara.

**Checkpoint B:** explicas cómo se reutiliza el código común y por qué una referencia `Envio` llama al cálculo expreso. No necesitamos arreglos ni colecciones para demostrarlo.

[Continuar →](04-pruebas.md)
