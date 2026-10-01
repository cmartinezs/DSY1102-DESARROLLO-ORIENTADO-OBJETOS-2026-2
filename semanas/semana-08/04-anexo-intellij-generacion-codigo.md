# Anexo · Generación de código en IntelliJ IDEA

IntelliJ IDEA puede generar automáticamente código repetitivo a partir de los atributos de una clase. Esta herramienta ahorra tiempo y reduce errores de escritura, pero **no reemplaza la decisión de diseño**: primero debe estar claro qué atributos existen, cuáles pueden modificarse y qué datos representan la identidad del objeto.

## Abrir el menú Generate

Con el cursor dentro de una clase:

- menú **Code → Generate...**;
- Windows / Linux: `Alt + Insert`;
- macOS: `⌘ + N`.

Las opciones disponibles dependen del contexto y de los atributos existentes en la clase.

## Código que puede generar IntelliJ

Entre otros, IntelliJ puede generar:

- constructor;
- getters;
- setters;
- getter y setter en conjunto;
- `toString()`;
- `equals()`;
- `hashCode()`;
- `equals()` y `hashCode()` en conjunto;
- métodos de sobrescritura o implementación cuando corresponda.

## Ejemplo

Partimos con una clase pequeña:

```java
class Libro {
    private final String isbn;
    private String titulo;
    private String autor;
}
```

### Constructor

Desde **Generate → Constructor**, se seleccionan los atributos que deben recibirse al crear el objeto.

Una posible generación es:

```java
public Libro(String isbn, String titulo, String autor) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
}
```

### Getters y setters

Desde **Generate → Getter**, **Setter** o **Getter and Setter**, IntelliJ permite elegir los atributos.

Por ejemplo:

```java
public String getIsbn() {
    return isbn;
}

public String getTitulo() {
    return titulo;
}

public void setTitulo(String titulo) {
    this.titulo = titulo;
}
```

No todos los atributos necesitan setter. Si `isbn` identifica al libro y no debería cambiar después de construirlo, no corresponde generar `setIsbn(...)`.

## Generar equals() y hashCode()

Para clases que se almacenarán en un `HashSet` o que se usarán como claves de un `HashMap`, IntelliJ también puede generar `equals()` y `hashCode()`.

Use:

**Code → Generate... → equals() and hashCode()**

El IDE solicitará seleccionar los atributos que participan en la comparación.

Si el negocio define que un `Libro` es único por su ISBN, se debe seleccionar **`isbn`** como atributo de identidad, no todos los atributos solo porque IntelliJ los muestra.

Una implementación generada puede quedar conceptualmente así:

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

## Generar toString()

Desde **Generate → toString()**, IntelliJ permite elegir los atributos que serán representados como texto.

Esto es especialmente útil para pruebas rápidas:

```java
@Override
public String toString() {
    return "Libro{" +
            "isbn='" + isbn + '\'' +
            ", titulo='" + titulo + '\'' +
            ", autor='" + autor + '\'' +
            '}';
}
```

## IntelliJ genera código; usted decide el diseño

No utilice **Generate** de forma automática sin revisar el resultado.

Antes de aceptar el código, pregúntese:

- ¿este atributo realmente necesita getter?;
- ¿debería poder modificarse mediante setter?;
- ¿qué atributos necesita el constructor?;
- ¿qué atributo o atributos representan la identidad del objeto?;
- ¿`equals()` y `hashCode()` utilizan exactamente esa misma identidad?;
- ¿el método generado tiene sentido para las reglas del negocio?

### Ejemplo de mala decisión

Seleccionar `isbn`, `titulo` y `autor` para `equals()` solo porque IntelliJ ofrece los tres.

Eso provocaría que dos objetos con el mismo ISBN pudieran considerarse diferentes si cambia el título o el autor.

### Ejemplo de decisión correcta

Si el requisito indica:

> Cada libro se identifica de manera única por su ISBN.

Entonces `isbn` es el dato natural para construir `equals()` y `hashCode()`.

## Regla práctica

```text
primero decido el diseño
        ↓
selecciono los atributos correctos
        ↓
IntelliJ genera el código repetitivo
        ↓
reviso lo generado
        ↓
pruebo el comportamiento
```

El IDE ayuda a escribir código. **La responsabilidad de decidir qué código corresponde sigue siendo del programador.**
