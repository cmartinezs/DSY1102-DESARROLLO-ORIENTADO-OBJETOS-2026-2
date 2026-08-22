# Clase, objeto e instancia

Estos términos suelen confundirse al comenzar POO.

## Clase

Una **clase** describe la estructura y comportamiento de un concepto.

```java
public class Producto {
    private String nombre;
    private double precio;
}
```

La clase no representa todavía un producto concreto. Define qué información y comportamientos tendrán los objetos de ese tipo.

## Objeto

Un **objeto** es una entidad concreta creada a partir de una clase.

Conceptualmente:

```text
Clase Producto
      ↓
Teclado
Mouse
Monitor
```

Cada objeto puede tener su propio estado.

## Instancia

Decir que un objeto es una **instancia de Producto** significa que fue creado utilizando la definición de la clase `Producto`.

En este nivel podemos usar “objeto” e “instancia” casi como equivalentes cuando hablamos de una entidad concreta creada desde una clase.

## Analogía

```text
Plano de una casa → clase
Casa construida   → objeto/instancia
```

La analogía sirve para comenzar, pero no es perfecta: una clase también puede definir comportamientos y reglas, no sólo estructura.

## Una clase puede crear muchos objetos

```text
Producto
├── Teclado
├── Mouse
└── Monitor
```

Todos comparten la misma definición, pero cada uno posee valores propios.

## Error frecuente

> “La clase Producto es el teclado.”

No. `Producto` describe el tipo de concepto. Un teclado concreto sería un objeto de ese tipo.
