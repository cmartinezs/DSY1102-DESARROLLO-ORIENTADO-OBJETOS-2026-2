# List y ArrayList · concepto y ejemplos mínimos

Esta página introduce colecciones dinámicas sin depender del laboratorio Veterinaria.

## Crear una lista

```java
import java.util.ArrayList;
import java.util.List;

List<String> nombres = new ArrayList<>();
```

Se declara con la abstracción `List` y se instancia con `ArrayList`.

## Agregar elementos

```java
nombres.add("Ana");
nombres.add("Pedro");
nombres.add("Luis");
```

## Leer y conocer el tamaño

```java
System.out.println(nombres.get(0));
System.out.println(nombres.size());
```

## Recorrer

```java
for (String nombre : nombres) {
    System.out.println(nombre);
}
```

## Buscar y eliminar

```java
if (nombres.contains("Pedro")) {
    nombres.remove("Pedro");
}
```

## Lista de objetos

```java
List<Producto> productos = new ArrayList<>();
productos.add(new Producto("Mouse", 15000));
productos.add(new Producto("Teclado", 25000));
```

Los ejemplos ejecutables están en [`../../ejemplos/semana-06/`](../../ejemplos/semana-06/).

## Qué debes poder explicar

- diferencia entre tamaño fijo de un array y tamaño dinámico de una lista;
- diferencia entre `length` y `size()`;
- para qué sirven `add`, `get`, `contains` y `remove`;
- por qué es razonable declarar `List<T>` e instanciar `ArrayList<T>`.

## Después de aprenderlo

Resuelve ejercicios breves antes de migrar Veterinaria desde `Animal[]` a `List<Animal>`.
