# De variables sueltas a un concepto

Podemos comenzar representando un producto con variables independientes:

```java
String nombre = "Teclado";
double precio = 19990;
int stock = 5;
```

Esto funciona, pero aparece una pregunta de diseño:

> ¿Estos datos son realmente independientes?

No. Todos describen al mismo producto.

## Señal de agrupación

Cuando varias variables:

- viajan juntas;
- se imprimen juntas;
- se validan juntas;
- se pasan repetidamente a los mismos métodos;
- representan un mismo concepto del problema;

es razonable preguntarse si pertenecen a una clase.

Antes:

```text
nombre
precio
stock
```

Después:

```text
Producto
├── nombre
├── precio
└── stock
```

## El beneficio no es sólo escribir menos

Agrupar datos permite expresar significado.

```java
Producto producto;
```

transmite más intención que mantener valores desconectados.

La clase comienza a representar una idea del problema.

## Pregunta útil

Cuando veas muchas variables relacionadas, pregunta:

> ¿Qué concepto describen en conjunto?

Esa pregunta suele ser una buena puerta de entrada a POO.
