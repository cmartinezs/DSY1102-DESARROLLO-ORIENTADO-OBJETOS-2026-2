# 02 · Composición introductoria: objetos que colaboran

## Problema

Una clase no debería absorber todas las responsabilidades. Cuando un objeto necesita otro objeto para representar correctamente el problema, podemos comenzar a modelar una relación de composición simple.

Ejemplo:

```java
public class Direccion {
    private String calle;
    private String comuna;

    public Direccion(String calle, String comuna) {
        this.calle = calle;
        this.comuna = comuna;
    }

    public String descripcion() {
        return calle + ", " + comuna;
    }
}
```

```java
public class Cliente {
    private String nombre;
    private Direccion direccion;

    public Cliente(String nombre, Direccion direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    public String mostrarDatos() {
        return nombre + " - " + direccion.descripcion();
    }
}
```

## Qué observar

- `Cliente` no necesita conocer calle y comuna como atributos propios;
- `Direccion` mantiene la responsabilidad de representar una dirección;
- cada clase conserva una responsabilidad comprensible;
- el constructor puede recibir otro objeto;
- todavía no necesitamos herencia para lograr colaboración entre clases.

## Ejercicio guiado

Modelar `Pedido` y `Cliente`:

- `Cliente`: nombre y correo;
- `Pedido`: código, total y cliente;
- ambos con constructor;
- el total no puede quedar negativo;
- `Pedido` debe entregar una descripción usando información del cliente.

## Checkpoint

El estudiante debe poder dibujar esta relación y explicar quién contiene a quién:

```text
Pedido ───> Cliente
```

El objetivo no es memorizar la palabra composición, sino comprender que un problema puede repartirse entre objetos que colaboran.
