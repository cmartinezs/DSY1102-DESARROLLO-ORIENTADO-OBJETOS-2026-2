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

## ¿Cómo sabe HashSet que dos objetos son iguales?

Con tipos como `String`, Java ya tiene definida la comparación lógica.

Con objetos creados por nosotros, como `Libro` o `Alumno`, debemos definir qué significa **“ser el mismo objeto para el negocio”**.

`HashSet` trabaja principalmente con dos métodos:

- `hashCode()` ayuda a ubicar el objeto dentro de la estructura;
- `equals()` confirma si dos objetos deben considerarse iguales.

Por eso, cuando una clase se usará dentro de un `HashSet`, normalmente debemos sobrescribir **ambos métodos** de manera consistente.

### Ejemplo: Libro identificado por ISBN

Si para el negocio dos libros con el mismo ISBN representan el mismo libro, entonces la igualdad debe basarse en `isbn`.

```java
@Override
public boolean equals(Object o) {
    if (this == o) {
        return true;
    }

    if (!(o instanceof Libro)) {
        return false;
    }

    Libro libro = (Libro) o;
    return Objects.equals(isbn, libro.isbn);
}

@Override
public int hashCode() {
    return Objects.hash(isbn);
}
```

Con esa regla:

```java
Set<Libro> libros = new HashSet<>();

libros.add(new Libro("ISBN-001", "Java Inicial"));
libros.add(new Libro("ISBN-001", "Otra copia"));
```

El segundo `add` devolverá `false`, porque ambos objetos tienen el mismo ISBN.

## Regla importante

El atributo utilizado en `equals()` y `hashCode()` debería representar una identidad estable.

Por ejemplo, si `isbn` define la identidad del libro, conviene que no cambie después de insertar el objeto en el `HashSet`.

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

## Ejemplos relacionados

- [`04-SetLibrosEqualsHashCode.java`](../../ejemplos/semana-08/04-SetLibrosEqualsHashCode.java)
- [`05-SetAlumnosEqualsHashCode.java`](../../ejemplos/semana-08/05-SetAlumnosEqualsHashCode.java)
