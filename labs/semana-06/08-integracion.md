# Etapa 8 · Integrar, probar y cerrar

## Propósito

Comprobar que la solución evolucionó de forma coherente y que las decisiones tomadas pueden explicarse.

## Flujo mínimo a ejecutar

1. registrar varios animales de subtipos distintos;
2. listar la colección;
3. buscar un animal existente;
4. buscar o eliminar un identificador inexistente y controlar la situación;
5. eliminar un animal existente;
6. listar nuevamente para verificar el cambio;
7. provocar al menos una situación inválida y observar el manejo de la excepción.

## Entregables

- `src/Main.java` actualizado con un flujo demostrable;
- `evidencias/veterinaria-ii/03-integracion-final.txt` con una ejecución completa;
- `docs/veterinaria-ii/04-reflexion.md` comparando Veterinaria I y Veterinaria II;
- `README.md` actualizado para reflejar el estado final del laboratorio.

## Reflexión mínima

Explica:

- qué problema resolvía `Animal[]` y por qué dejó de ser suficiente;
- qué aporta `List<Animal>`;
- dónde quedó la responsabilidad de administrar la colección;
- qué errores del dominio se modelaron;
- qué diferencia existe entre `throw` y `catch`;
- qué parte del diseño de Veterinaria I se conservó sin cambios.

## Commits sugeridos

```text
LAB-VET2-11: integra flujo completo de colecciones y excepciones
LAB-VET2-12: cierra veterinaria II y documenta aprendizaje
```

## Checkpoint final

No basta con que compile. Debes poder explicar la evolución de la solución y justificar por qué cada cambio existe.
