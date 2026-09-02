# 01 · Constructores: objetos que nacen bien

## Idea central

Un constructor define cómo nace una instancia. No reemplaza los métodos operacionales: establece el estado inicial necesario para que el objeto pueda existir correctamente.

```java
public class Cuenta {
    private String titular;
    private double saldo;

    public Cuenta(String titular, double saldoInicial) {
        this.titular = titular;
        if (saldoInicial >= 0) {
            this.saldo = saldoInicial;
        }
    }

    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }
}
```

## Conceptos que deben quedar claros

- el constructor tiene el mismo nombre que la clase;
- no declara tipo de retorno;
- sus parámetros reciben datos necesarios para inicializar la instancia;
- `this.atributo` permite distinguir el atributo del parámetro cuando tienen el mismo nombre;
- una instancia debería nacer en un estado coherente;
- no todo atributo necesita setter.

## Preguntas de control

1. ¿Qué diferencia hay entre `new Cuenta(...)` y `cuenta.depositar(...)`?
2. ¿Por qué el constructor no tiene `void`?
3. ¿Qué datos deberían ser obligatorios al crear un objeto?
4. ¿Qué pasa si permitimos crear una cuenta sin titular?
5. ¿Conviene tener `setSaldo()` si existe `depositar()` y `girar()`?

## Mini ejercicio

Crear una clase `Producto` con:

- `codigo`;
- `nombre`;
- `precio`;
- constructor que reciba los tres datos;
- método `aplicarDescuento(double porcentaje)` que solo permita porcentajes entre 0 y 100;
- getters para consultar los datos.

Crear al menos tres productos desde `main` y demostrar que cada instancia mantiene su propio estado.
