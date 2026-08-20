# Clase, objeto e instancia

Estos términos suelen confundirse al comenzar POO.

## Clase

Una **clase** describe la estructura y comportamiento de un concepto.

```java
public class Mascota {
    private String nombre;
    private int edad;
}
```

La clase no representa todavía una mascota concreta. Define qué información y comportamientos tendrán las mascotas de ese tipo.

## Objeto

Un **objeto** es una entidad concreta creada a partir de una clase.

Conceptualmente:

```text
Clase Mascota
     ↓
Michi
Luna
Tom
```

Cada objeto puede tener su propio estado.

## Instancia

Decir que `Michi` es una **instancia de Mascota** significa que fue creado utilizando la definición de la clase `Mascota`.

En este nivel podemos usar “objeto” e “instancia” casi como equivalentes cuando hablamos de una entidad concreta creada desde una clase.

## Analogía

```text
Plano de una casa → clase
Casa construida   → objeto/instancia
```

La analogía sirve para comenzar, pero no es perfecta: una clase también puede definir comportamientos y reglas, no solo estructura.

## Una clase puede crear muchos objetos

```text
Mascota
├── Michi
├── Pelusa
└── Luna
```

Todos comparten la misma definición, pero cada uno posee valores propios.

## Error frecuente

> “La clase Mascota es la mascota Michi.”

No. `Mascota` describe el tipo de concepto. `Michi` sería un objeto concreto de ese tipo.
