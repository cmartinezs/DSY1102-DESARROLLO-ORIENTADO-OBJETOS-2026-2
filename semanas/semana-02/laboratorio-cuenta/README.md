# Laboratorio · Cuenta simple

**Duración sugerida:** 15–20 minutos.  
**Modalidad:** individual.  
**Objetivo:** pasar desde variables y lógica estructurada hacia métodos, clase y encapsulamiento.

## Problema

Se necesita representar una cuenta con:

- titular;
- saldo;
- operación de depósito;
- operación de retiro.

## Parte 1 · versión estructurada

Antes de crear una clase, resuelve una versión mínima dentro de `main` usando valores definidos directamente en código.

Ejemplo de escenario:

```text
titular = "Ana"
saldo inicial = 50000
depósito = 10000
retiro = 25000
```

Debes validar que el retiro no deje saldo negativo.

## Parte 2 · extraer métodos

Refactoriza para crear, como mínimo:

```java
static double depositar(double saldo, double monto)
static double retirar(double saldo, double monto)
```

Piensa qué debería ocurrir si el monto es cero, negativo o superior al saldo disponible.

## Parte 3 · transformar en objeto

Crea una clase `Cuenta` con:

```text
titular
saldo
```

Y comportamientos:

```text
depositar(monto)
retirar(monto)
mostrarSaldo()
```

## Restricciones

- atributos privados;
- no crear un `setSaldo()` público que permita cualquier valor;
- el saldo debe modificarse mediante comportamientos válidos;
- todavía no utilizar `Scanner`;
- el programa debe contener al menos un caso válido y uno rechazado.

## Preguntas de cierre

1. ¿Qué problema resolvió extraer métodos?
2. ¿Qué cambió al crear la clase `Cuenta`?
3. ¿Por qué `saldo` debería ser privado?
4. ¿Por qué `setSaldo(-100000)` sería un mal diseño?
5. ¿Qué regla protege el método `retirar()`?

## Evidencia

- código ejecutable;
- salida de consola;
- respuestas breves a las cinco preguntas;
- explicar oralmente dónde está el encapsulamiento en la solución.
