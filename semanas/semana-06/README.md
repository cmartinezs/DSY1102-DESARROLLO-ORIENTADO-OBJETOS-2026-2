# Semana 06 · Arrays, colecciones y excepciones

## Propósito

Integrar los fundamentos de POO ya trabajados con estructuras que permitan administrar conjuntos de objetos y controlar situaciones inválidas dentro de una solución real.

## Contenidos

- arrays de objetos;
- limitaciones del tamaño fijo;
- `List` y `ArrayList`;
- agregar, recorrer, buscar y eliminar objetos;
- colecciones con herencia y polimorfismo;
- situaciones inválidas del dominio;
- `throw`, `try` y `catch`;
- validaciones y manejo explícito de errores.

## Enfoque de clase

Los contenidos no se trabajan como temas aislados. Se continúa la misma solución de Veterinaria construida en Semana 05 y se introduce una nueva necesidad: administrar múltiples animales y responder de forma controlada cuando una operación no puede completarse.

La progresión didáctica es deliberada:

```text
solución existente
    ↓
Animal[]
    ↓
observar limitaciones
    ↓
List<Animal> / ArrayList<Animal>
    ↓
buscar y eliminar
    ↓
modelar situaciones inválidas
    ↓
throw + try/catch
    ↓
integración y reflexión
```

## Laboratorio principal

**Veterinaria II · Arrays, colecciones y excepciones**

### Prerrequisito obligatorio

Haber completado **Veterinaria I · Herencia y Polimorfismo**.

### Regla de continuidad

Veterinaria II no crea otro proyecto. Evoluciona el mismo artefacto:

```text
labs/lab-veterinaria-herencia-polimorfismo/
```

El código sigue viviendo en `src/`. La nueva fase agrega documentación y evidencias en:

```text
docs/veterinaria-ii/
evidencias/veterinaria-ii/
```

La guía canónica está en [`../../labs/semana-06/`](../../labs/semana-06/).

## Ruta de trabajo

1. recuperar y ejecutar la solución anterior;
2. registrar una línea base;
3. implementar una primera gestión con `Animal[]`;
4. documentar sus limitaciones;
5. migrar a `List<Animal>` / `ArrayList<Animal>`;
6. implementar búsqueda y eliminación;
7. modelar errores del dominio;
8. aplicar excepciones de forma consciente;
9. integrar un flujo completo y reflexionar sobre la evolución.

## Evidencia esperada

Cada etapa produce entregables concretos y commits incrementales. La web guiada refleja la misma ruta con progreso, checkpoint de comprensión, GitHub Desktop/CLI y repaso no destructivo.

## Trabajo autónomo

Aplicar el mismo razonamiento a una jerarquía propia: almacenar múltiples objetos, justificar la colección elegida y controlar al menos una situación inválida.

## Cierre de la experiencia

El estudiante debe ser capaz de decidir qué clases necesita, cómo se relacionan, dónde corresponde aplicar herencia o polimorfismo, cómo administrar múltiples objetos y qué situaciones deben modelarse explícitamente como errores del dominio.
