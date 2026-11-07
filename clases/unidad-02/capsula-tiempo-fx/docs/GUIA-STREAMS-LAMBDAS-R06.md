# Guía complementaria · Streams, lambdas y referencias a métodos

**DSY1102 · Cápsula del Tiempo FX · R06**  
**Propósito:** comprender el código nuevo sin adelantarlo como prerrequisito de las clases anteriores. Este material es una cápsula opcional de lectura y práctica; las slides centrales siguen la narrativa de persistencia y recuperación.

## 1. Problema que resuelve el código R06

Al cargar un archivo JSON, Jackson devuelve una `List<MensajeFuturo>`. No basta con que el texto sea JSON válido: un mensaje puede contener autor vacío, texto ausente o plazo no positivo. Queremos responder **sí o no** a la pregunta: *¿existe algún mensaje inválido?*

En [`JsonMensajeDao.java` de R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/main/java/cl/duoc/dsy1102/timecapsule/dao/JsonMensajeDao.java) aparece:

```java
if (recuperados == null || recuperados.stream().anyMatch(this::esInvalido)) {
    throw preservarArchivoDanado(new IOException("Estructura JSON inválida."));
}
```

Este bloque **no registra, modifica ni elimina** mensajes. Solo verifica si la estructura recuperada debe rechazarse.

## 2. Primero, la misma idea con un for tradicional

```java
boolean hayInvalido = false;
for (MensajeFuturo mensaje : recuperados) {
    if (esInvalido(mensaje)) {
        hayInvalido = true;
        break; // ya encontramos el primer inválido
    }
}
```

El método que decide si un mensaje es inválido es el mismo:

```java
private boolean esInvalido(MensajeFuturo mensaje) {
    return mensaje == null
            || mensaje.getAutor() == null || mensaje.getAutor().isBlank()
            || mensaje.getTexto() == null || mensaje.getTexto().isBlank()
            || mensaje.getPlazoAnios() <= 0;
}
```

El método `esInvalido` no es una lambda: es un método de instancia normal. Lo nuevo es **cómo lo utilizamos**.

## 3. Streams: una secuencia de operaciones sobre datos

Un `Stream<T>` representa una secuencia de elementos que se puede recorrer mediante operaciones. La lista sigue siendo una lista; `stream()` **no crea otra lista ni guarda datos**.

```java
List<MensajeFuturo> recuperados = ...;
boolean hayInvalido = recuperados.stream()
        .anyMatch(this::esInvalido);
```

- `recuperados.stream()`: crea un flujo de lectura desde los elementos de la lista.
- `anyMatch(...)`: responde `true` si **al menos uno** cumple la condición. Termina tan pronto encuentra uno.
- `this::esInvalido`: indica **qué método aplicar** a cada mensaje. No lo ejecuta en el instante de escribir la referencia; `anyMatch` lo invoca mientras recorre el flujo.
- `boolean`: el resultado es una respuesta lógica, no una colección nueva.

**Ojo:** un Stream puede consumirse una sola vez; para repetir una operación, se obtiene otro con `recuperados.stream()`.

## 4. Lambda y referencia a método son dos maneras de expresar la misma condición

Versión explícita con lambda:

```java
boolean hayInvalido = recuperados.stream()
        .anyMatch(mensaje -> esInvalido(mensaje));
```

Versión con referencia al método:

```java
boolean hayInvalido = recuperados.stream()
        .anyMatch(this::esInvalido);
```

`mensaje -> esInvalido(mensaje)` significa: «recibe un mensaje y devuelve el resultado de llamar a `esInvalido`». `this::esInvalido` evita repetir esa llamada cuando el método ya tiene la firma adecuada.

Una **referencia a método** no es una llamada: `this::esInvalido` es distinta de `esInvalido()`, que además no compilaría aquí porque falta el argumento.

Técnicamente, `anyMatch` recibe un `Predicate<MensajeFuturo>`: una función que recibe un mensaje y devuelve `boolean`.

## 5. ¿Por qué comprobamos primero `recuperados == null`?

```java
recuperados == null || recuperados.stream().anyMatch(this::esInvalido)
```

El operador `||` evalúa el lado derecho **solo si el izquierdo es falso** (*cortocircuito*). Si Jackson devolvió `null`, no intentamos invocar `stream()` sobre una referencia nula. Para cada elemento, `esInvalido` también comprueba `mensaje == null` antes de acceder a sus propiedades.

## 6. Tres métodos frecuentes para contrastar

| Operación | Qué devuelve | Para qué sirve |
| --- | --- | --- |
| `anyMatch(condición)` | `boolean` | ¿Alguno cumple? |
| `allMatch(condición)` | `boolean` | ¿Todos cumplen? |
| `filter(condición)` | `Stream<T>` | Conservar elementos que cumplen |
| `map(transformación)` | `Stream<R>` | Transformar cada elemento |
| `toList()` | `List<T>` | Materializar un resultado del Stream |

Para R06 basta con **`stream()` y `anyMatch()`**. Los demás métodos son referencias para explorar; no hay que añadirlos al proyecto por obligación.

## 7. Ejercicio breve (Java 21)

```java
List<Integer> plazos = List.of(1, 5, 10, -3);
boolean hayPlazoInvalido = plazos.stream()
        .anyMatch(plazo -> plazo <= 0);
System.out.println(hayPlazoInvalido); // true
```

1. Reescribe el ejemplo con un `for`.
2. Cambia `-3` por `3`. ¿Qué imprime?
3. ¿Qué ocurre si la lista está vacía? `anyMatch` devuelve `false`, porque no hay un elemento que cumpla.

**Para debatir:** ¿qué versión explica mejor la intención del negocio, el `for` o `anyMatch`? Ambas pueden ser correctas; preferimos claridad, no sintaxis más sofisticada.

## 8. El detalle que NO es una lambda

```java
new TypeReference<List<MensajeFuturo>>() {}
```

Esa expresión de Jackson utiliza una **clase anónima** para conservar información del tipo genérico al deserializar. No es un Stream ni una lambda. La separamos conceptualmente para que no se mezclen tres conceptos nuevos en una sola línea.

## Referencias oficiales (Java 21)

- [Stream](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html)
- [Predicate](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html)
- [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)

**Regla para la clase:** no ocultar la sintaxis real de R06, pero tampoco evaluarla como si ya se hubiera enseñado. En las slides, enlazar a esta guía desde el uso de `this::esInvalido`.
