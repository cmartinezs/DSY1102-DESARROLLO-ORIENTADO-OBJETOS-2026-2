# Semana 05 · Herencia y polimorfismo

## Propósito
Consolidar el modelado orientado a objetos mediante jerarquías de clases, reutilización de atributos y comportamiento, constructores heredados y polimorfismo.

## Contenidos
- Herencia con `extends`.
- Relación clase base / subclase.
- Constructores y uso de `super()`.
- Sobrescritura de métodos con `@Override`.
- Polimorfismo mediante referencias del tipo padre.
- Diseño previo a la codificación.

## Secuencia de trabajo
1. Analizar un problema antes de escribir código.
2. Identificar entidades, atributos, comportamientos y relaciones.
3. Detectar qué características son comunes y cuáles especializadas.
4. Diseñar una jerarquía simple.
5. Implementar y ejecutar incrementalmente.
6. Probar el comportamiento polimórfico.

## Laboratorio principal
**Veterinaria · Herencia y Polimorfismo**

El laboratorio propone una veterinaria que atiende distintos tipos de animales. Los estudiantes construyen progresivamente una jerarquía que permite representar mascotas y animales salvajes, con especializaciones como perro, gato, tigre y león.

La actividad está disponible en GitHub Pages desde la sección **Laboratorios** y registra avance por etapas.

Ruta esperada en el repositorio del estudiante:

```text
labs/lab-veterinaria-herencia-polimorfismo/
```

## Resultado esperado
Al finalizar, el estudiante debe ser capaz de explicar por qué existe la jerarquía propuesta, cómo se ejecutan los constructores, qué aporta `super()` y cómo una referencia del tipo padre puede ejecutar comportamiento especializado de distintas subclases.

## Continuidad
La siguiente etapa extiende el mismo caso para resolver una necesidad natural del sistema: almacenar, recorrer, buscar y administrar múltiples animales, incorporando primero arrays y luego colecciones, junto con manejo de excepciones.
