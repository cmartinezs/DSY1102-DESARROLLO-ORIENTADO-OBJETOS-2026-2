# 04 · Pruebas y decisión de diseño

[← 03 · Registro](03-registro.md) · [Índice](README.md)

## Paso 1 · Probar casos uno a uno
| ID | Acción | Resultado |
|---|---|---|
| T01 | Registrar F001 / Ana | true |
| T02 | Registrar F002 / Pedro | true |
| T03 | Registrar f001 / Otra | false; Ana se conserva |
| T04 | Buscar f001 | F001 - Ana |
| T05 | Eliminar F002 | true |
| T06 | Consultar cantidad final | 1 |
| T07 | Registrar código vacío | Se rechaza con excepción |

Para T07, añade temporalmente al final de `main`:

```java
try {
    feria.registrar("", "Luis");
} catch (IllegalArgumentException e) {
    System.out.println("Error esperado: " + e.getMessage());
}
```

Ejecuta; comprueba que se captura el error y el total final sigue siendo 1. Puedes quitar el bloque después de documentar la prueba.

## Paso 2 · Reflexión de identidad
1. ¿Cómo se evita `F001` vs `f001`?
2. ¿Por qué `putIfAbsent` preserva el registro original?
3. ¿En qué caso elegirías `Set<String>` en vez de `Map<String, Asistente>`?
4. ¿Cuándo tendrías que implementar `equals/hashCode` en `Asistente`?

## Paso 3 · Entrega
Incluye tres archivos Java, una captura de la consola y una decisión escrita de 5–8 líneas comparando List, Set y Map. Se revisa calidad del criterio, no cantidad de estructuras incluidas.

**Checkpoint final:** no quedan duplicados, las búsquedas funcionan con código normalizado y el registro original no fue sobrescrito.
