# Dinámica viva · ¿Herencia o no?

**Duración:** 15–20 minutos.  
**Objetivo:** impedir que `extends` se convierta en una receta sintáctica.

El docente presenta relaciones una a una. Antes de programar, cada estudiante decide: **herencia, composición/asociación, interfaz/capacidad o falta información**.

Casos sugeridos: `Auto–Motor`, `Persona–Estudiante`, `Documento–Factura`, `Usuario–Autenticable`, `Pedido–Cliente`, `Ave–Volador`.

Para cada respuesta se exige una frase de defensa: «X es un Y», «X tiene un Y» o «X puede hacer Y». Luego se discuten contraejemplos: no toda ave vuela; por eso `Volador` puede ser mejor capacidad que comportamiento impuesto por una superclase `Ave`.

## Segunda ronda

Mostrar tres diseños Java con `extends` técnicamente compilables pero conceptualmente dudosos. Los equipos deben corregir el modelo sin tocar todavía el IDE.

## Cierre

Pregunta de salida: **¿qué daño puede producir una herencia que compila pero modela mal el dominio?** La respuesta debe mencionar acoplamiento conceptual, comportamiento heredado que no corresponde o dificultad de evolución.