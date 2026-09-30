# 02 · Map: clave y valor

## ¿Qué problema resuelve?

Cuando un sistema necesita recuperar información mediante un identificador, un `Map` permite representar directamente:

```text
clave única → valor asociado
```

## Declaración

```java
import java.util.HashMap;
import java.util.Map;

Map<String, String> correos = new HashMap<>();
```

## Registrar y consultar

```java
correos.put("ana", "ana@ejemplo.cl");
correos.put("carlos", "carlos@ejemplo.cl");

String correo = correos.get("carlos");
```

Antes de operar puede verificarse la clave:

```java
if (correos.containsKey("carlos")) {
    System.out.println(correos.get("carlos"));
}
```

## Las claves son únicas

Si se ejecutan dos `put` con la misma clave, el valor anterior es reemplazado.

```java
correos.put("carlos", "antiguo@ejemplo.cl");
correos.put("carlos", "nuevo@ejemplo.cl");
```

## Map de objetos

```java
Map<String, Producto> productosPorCodigo = new HashMap<>();

productosPorCodigo.put(producto.getCodigo(), producto);
Producto encontrado = productosPorCodigo.get("P-100");
```

## Recorrido

```java
for (Map.Entry<String, String> entrada : correos.entrySet()) {
    System.out.println(entrada.getKey() + " -> " + entrada.getValue());
}
```

Use `Map` cuando exista una necesidad real de asociación o recuperación por clave.
