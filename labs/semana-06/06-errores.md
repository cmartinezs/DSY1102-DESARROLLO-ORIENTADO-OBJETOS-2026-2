# Etapa 6 · Modelar errores del dominio

## Propósito

Distinguir entre un flujo válido, una situación inválida del dominio y un error de programación.

## Qué debes hacer

Crea `docs/veterinaria-ii/03-errores.md` con una tabla como base:

| Situación | ¿Es válida? | Comportamiento esperado |
|---|---:|---|
| buscar un identificador inexistente | No | informar ausencia o lanzar una excepción específica |
| registrar un identificador duplicado | No | impedir el registro |
| registrar un animal válido | Sí | incorporarlo a la colección |

Debes identificar al menos tres situaciones inválidas de tu propia solución y decidir cómo debería responder el sistema.

## Entregable

```text
labs/lab-veterinaria-herencia-polimorfismo/docs/veterinaria-ii/03-errores.md
```

## Commit sugerido

```text
LAB-VET2-08: modela situaciones invalidas del dominio
```

## Checkpoint

Debes poder explicar que una excepción no reemplaza la validación ni sirve para ocultar cualquier error: expresa una condición anormal que el diseño debe manejar conscientemente.
