# Arrays · concepto y ejemplos mínimos

Esta página enseña **arrays sin depender del laboratorio Veterinaria**. El objetivo es comprender tamaño fijo, índices, recorrido y arrays de objetos antes de integrar esos conceptos en un dominio mayor.

## Crear y recorrer

```java
int[] notas = {55, 68, 72, 90};

for (int nota : notas) {
    System.out.println(nota);
}
```

## Acceder por índice

```java
String[] nombres = new String[3];
nombres[0] = "Ana";
nombres[1] = "Pedro";
nombres[2] = "Luis";

System.out.println(nombres[1]);
```

Los índices comienzan en `0`. Para un array de largo `3`, los índices válidos son `0`, `1` y `2`.

## Recorrer con índice

```java
for (int i = 0; i < nombres.length; i++) {
    System.out.println(i + ": " + nombres[i]);
}
```

## Array de objetos

```java
Producto[] productos = new Producto[2];
productos[0] = new Producto("Mouse", 15000);
productos[1] = new Producto("Teclado", 25000);
```

La sintaxis completa y ejecutable está en [`../../ejemplos/semana-06/`](../../ejemplos/semana-06/).

## Qué debes poder explicar

- por qué el tamaño de un array queda fijo;
- qué representa un índice;
- diferencia entre `length` y una posición;
- cómo recorrer todos sus elementos;
- que un array puede almacenar referencias a objetos.

## Después de aprenderlo

Practica primero en [`../../ejercicios/semana-06/`](../../ejercicios/semana-06/) y recién después aplica arrays al laboratorio Veterinaria II.
