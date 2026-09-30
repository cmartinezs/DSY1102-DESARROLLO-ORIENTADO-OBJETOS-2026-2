# 01 · Set y unicidad

## ¿Qué problema resuelve?

Cuando una regla de negocio dice **“no debe repetirse”**, una lista no expresa esa intención de manera directa. Un `Set` representa un conjunto de valores únicos.

```java
import java.util.HashSet;
import java.util.Set;

Set<String> categorias = new HashSet<>();
```

## Agregar

```java
categorias.add("Libros");
categorias.add("Videojuegos");
categorias.add("Libros");
```

El segundo `"Libros"` no genera otro elemento.

Además, `add` informa si el valor fue incorporado:

```java
boolean agregado = categorias.add("Libros");

if (!agregado) {
    System.out.println("La categoría ya estaba registrada.");
}
```

## Operaciones esenciales

```java
categorias.contains("Libros");
categorias.remove("Videojuegos");
categorias.size();
categorias.isEmpty();
```

## Recorrido

```java
for (String categoria : categorias) {
    System.out.println(categoria);
}
```

## Qué cambia respecto de List

Un `HashSet` no se utiliza por posición. La pregunta ya no es “¿qué hay en el índice 0?”, sino normalmente:

- ¿existe este valor?;
- ¿puedo agregarlo sin duplicarlo?;
- ¿cuántos valores únicos tengo?

Use `Set` cuando la necesidad hable de **unicidad**, no simplemente porque sea una colección nueva.
