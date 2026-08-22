# Encapsulamiento con propósito

Encapsular no significa solamente escribir `private`.

La idea importante es que un objeto pueda **proteger su propio estado** y controlar qué cambios son válidos.

## Sin control

Imagina una cuenta simple:

```java
public class Cuenta {
    double saldo;
}
```

Cualquier parte del programa podría hacer:

```java
cuenta.saldo = -500000;
```

El objeto podría quedar en un estado inválido para las reglas del programa.

## Con una operación controlada

```java
public class Cuenta {
    private double saldo;

    public boolean depositar(double monto) {
        if (monto <= 0) {
            return false;
        }

        saldo += monto;
        return true;
    }
}
```

Ahora el cambio pasa por una regla.

## `private` no es el objetivo final

`private` es una herramienta para limitar el acceso directo al estado.

El objetivo real es evitar que cualquier código externo pueda romper las reglas del objeto.

## Getter y setter no significan automáticamente encapsulamiento

Esto:

```java
public void setSaldo(double saldo) {
    this.saldo = saldo;
}
```

puede exponer prácticamente la misma libertad que modificar el atributo directamente.

En cambio, operaciones como:

```java
depositar(monto)
retirar(monto)
```

expresan intención y permiten validar reglas.

## Pregunta de diseño

En vez de preguntar solamente:

> ¿Necesito getter y setter?

pregunta:

> ¿Qué operaciones válidas debería permitir este objeto sobre su estado?

Esa pregunta conduce a un encapsulamiento con propósito.
