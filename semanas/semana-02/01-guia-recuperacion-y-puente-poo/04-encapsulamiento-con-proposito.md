# Encapsulamiento con propósito

Encapsular no significa solamente escribir `private`.

La idea importante es que un objeto pueda **proteger su propio estado** y controlar qué cambios son válidos.

## Sin control

Imagina que cualquier parte del programa pudiera hacer:

```java
mascota.peso = -5;
```

El objeto quedaría en un estado inválido.

## Con una operación controlada

```java
public void actualizarPeso(double nuevoPeso) {
    if (nuevoPeso > 0) {
        peso = nuevoPeso;
    }
}
```

Ahora el cambio pasa por una regla.

## `private` no es el objetivo final

`private` es una herramienta para limitar el acceso directo al estado.

El objetivo real es evitar que cualquier código externo pueda romper invariantes del objeto.

## Getter y setter no significan automáticamente encapsulamiento

Esto:

```java
public void setPeso(double peso) {
    this.peso = peso;
}
```

expone prácticamente la misma libertad que modificar el atributo directamente.

En cambio:

```java
public void actualizarPeso(double nuevoPeso) {
    if (nuevoPeso <= 0) {
        return;
    }

    peso = nuevoPeso;
}
```

agrega una regla y expresa intención.

## Pregunta de diseño

En vez de preguntar solamente:

> ¿Necesito getter y setter?

pregunta:

> ¿Qué operaciones válidas debería permitir este objeto sobre su estado?

Esa pregunta conduce a un encapsulamiento con propósito.
