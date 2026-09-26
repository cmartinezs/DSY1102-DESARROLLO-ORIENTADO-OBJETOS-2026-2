# 02 · Clases abstractas y comportamiento obligatorio

## ¿Tiene sentido un Recurso genérico?

Todos los elementos de MediaHub son recursos, pero en la práctica siempre pertenecen a un tipo concreto.

Por eso:

```java
public abstract class Recurso
```

`Recurso` concentra:

- código;
- título;
- creador;
- estado disponible/no disponible;
- comportamiento común para prestar y devolver.

## Método abstracto

La cantidad de días permitidos cambia según el tipo de recurso.

```java
public abstract int obtenerDiasPrestamo();
```

Ejemplo conceptual:

```text
Libro físico → 14 días
Película     → 5 días
Ebook        → 21 días
Audiolibro   → 14 días
```

## Conocimiento que debes adquirir

Debes poder explicar:

- por qué Recurso es abstracta;
- qué comportamiento sí puede implementarse una sola vez;
- qué comportamiento debe quedar obligado para los subtipos;
- cómo `super(...)` inicializa la parte heredada.

## Avance consolidado esperado

Al finalizar:

- existe `Recurso.java`;
- contiene los atributos comunes;
- no puede instanciarse;
- declara `obtenerDiasPrestamo()` como abstracto;
- existen los cuatro subtipos;
- cada subtipo implementa su política de préstamo.

➡️ [Siguiente: interfaces](./03-interfaces.md)
