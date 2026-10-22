# 02 · Comparar tres colecciones sin sobreingeniería

[← 01 · Proyecto](01-preparacion.md) · [Índice](README.md) · [03 · Map →](03-registro.md)

## Paso 1 · Observar List, Set y Map
Abre `src/Main.java` y reemplaza temporalmente su contenido por:

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        List<String> lista = new ArrayList<>();
        lista.add("F001");
        lista.add("F001"); // List permite duplicados
        System.out.println("List: " + lista.size());

        Set<String> conjunto = new HashSet<>();
        conjunto.add("F001");
        conjunto.add("F001"); // Set rechaza código repetido
        System.out.println("Set: " + conjunto.size());

        Map<String, String> indice = new HashMap<>();
        indice.put("F001", "Ana");
        System.out.println("Map F001: " + indice.get("F001"));
    }
}
```

Ejecuta y confirma:
```text
List: 2
Set: 1
Map F001: Ana
```

**Checkpoint A:** identifica que `List` sirve para conservar una secuencia; `Set`, para unicidad; `Map`, para asociar código → objeto.

## Paso 2 · Decidir la estructura del caso
El negocio exige **un código único y búsqueda directa por código**. Adoptaremos **un solo `Map<String, Asistente>`** como fuente de verdad. No añadiremos otro Set «por obligación», porque dos índices separados podrían desincronizarse.

Responde en dos líneas:
1. ¿Por qué `HashMap.put` sin comprobación puede sobrescribir una inscripción?
2. ¿Qué alternativa tiene `Map` para registrar solo si la clave no existe? Respuesta: `putIfAbsent`.

**Checkpoint B:** puedes justificar la decisión **antes de programar** y diferenciarla de la prueba introductoria de tres colecciones.

[Continuar →](03-registro.md)
