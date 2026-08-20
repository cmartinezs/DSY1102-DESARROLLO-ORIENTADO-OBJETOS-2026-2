# Banco de dinámicas vivas · DSY1102

Este documento reúne dinámicas reutilizables para mantener la asignatura activa sin convertir cada semana en una nueva carga de material. La regla es **usar pocas, con intención y rotarlas**.

## Regla operativa

Por semana se recomienda escoger **1 dinámica principal** y, como máximo, una segunda dinámica breve si el tiempo lo permite. No es obligatorio usar una nueva cada clase.

Cada dinámica debe cumplir al menos una de estas funciones:

- recuperar conocimientos;
- hacer visible un error frecuente;
- obligar a explicar una decisión;
- practicar lectura de código;
- mejorar documentación o uso de Git;
- conectar conceptos con PetCare;
- desafiar a quienes avanzan más rápido sin adelantar contenidos.

## Dinámicas disponibles

### Bug de la semana · 5–10 min
Se presenta un fragmento pequeño que compila mal, produce una salida incorrecta o viola una regla del dominio. El estudiante debe identificar qué esperaba, qué ocurrió y por qué.

Ejemplos adecuados durante el semestre: comparación incorrecta de `String`, condición mal construida, ciclo fuera de rango, estado expuesto mediante setters innecesarios, atributo que debería protegerse, método con responsabilidad confusa.

### Predice antes de ejecutar · 3–8 min
Antes de ejecutar un programa, cada estudiante escribe o comenta qué cree que ocurrirá. Luego se ejecuta y se explica cualquier diferencia.

Especialmente útil para operadores, condicionales, ciclos, scope, métodos, arrays, referencias y polimorfismo cuando corresponda.

### Refactor challenge · 10–20 min
Se entrega código funcional pero incómodo. El objetivo no es agregar funcionalidad, sino mejorar estructura usando solo contenido ya visto.

### Mini defensa · 2 min por estudiante/grupo
Sin PPT. Deben responder una pregunta concreta sobre su código: por qué eligieron una condición, qué responsabilidad tiene un método, qué protege el encapsulamiento, qué cambiarían.

### PR misterioso · 10–15 min
Se muestra una modificación de código como si fuera un Pull Request. Los estudiantes deciden si la aceptarían y justifican la respuesta.

No requiere usar GitHub PR reales al principio; primero se aprende la lógica de revisión.

### README destacado
Periódicamente se selecciona documentación particularmente clara. El reconocimiento puede asociarse a compensación/bonificación cuando el docente lo determine.

Se valora: claridad, estructura, instrucciones reproducibles, coherencia con el código, Markdown bien utilizado y explicación propia.

### Anti-pattern de la semana · 5–10 min
Se muestra una solución que funciona pero presenta un problema de diseño. El estudiante debe distinguir **funciona** de **está bien diseñado para este contexto**.

### Feature sorpresa PetCare · 15–30 min
Se introduce una necesidad pequeña que obligue a evolucionar PetCare con las herramientas ya aprendidas. La necesidad debe justificar el concepto, no adelantar contenido futuro.

### Boss fight · 30–60 min, cada varias semanas
Actividad integradora menos guiada que combina varios contenidos recientes. No debe reemplazar evaluaciones ni introducir materia nueva.

### Commit arqueológico · 10–15 min
Comparar dos estados de PetCare o de un ejemplo del curso. Identificar qué cambió, por qué y qué deuda resolvió.

### Pregunta que una IA podría responder mal · 5–15 min
Se presenta una respuesta plausible pero con un error conceptual. Los alumnos deben verificarla con código, documentación o razonamiento.

El objetivo es desarrollar criterio, no competir contra herramientas de IA.

## Rotación sugerida

Una secuencia posible durante el semestre:

```text
Semana A → Bug de la semana
Semana B → Predice antes de ejecutar
Semana C → Mini defensa
Semana D → Refactor challenge
Semana E → README destacado
Semana F → Boss fight
→ repetir con variantes
```

## Criterio de éxito

Una dinámica funciona si deja una conversación o evidencia útil en pocos minutos. Si requiere demasiada explicación administrativa, preparación o corrección, debe simplificarse.

## Registro mínimo docente

Al cerrar cada semana basta registrar:

```text
Dinámica usada:
Qué concepto reforzó:
Qué error/duda apareció:
¿Conviene repetirla?: sí / no / con ajustes
```

No se exige una pauta extensa.
