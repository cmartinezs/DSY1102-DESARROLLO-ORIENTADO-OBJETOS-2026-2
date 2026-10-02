# PetCare · Estándar documental semanal

Este documento define el estándar de documentación para cada incremento semanal de `proyecto-formativo/`.

El objetivo es que un estudiante pueda abrir cualquier semana y encontrar la misma lógica de navegación, sin convertir el proyecto formativo en una solución completa para copiar.

## Estructura mínima

Cada semana contiene:

```text
semana-XX/
├── README.md
├── IMPLEMENTACION-DE-REFERENCIA.md
└── MODELO-Y-CHECKPOINT.md
```

Pueden existir documentos adicionales cuando una semana necesite una guía más granular.

## 1. README.md

Funciona como índice y contrato del incremento.

Debe contener, en este orden:

1. periodo y sección;
2. punto de entrada desde la semana anterior;
3. problema que motiva el cambio;
4. objetivo;
5. conceptos nuevos;
6. secuencia de trabajo;
7. trabajo esperado;
8. evidencia esperada;
9. commits sugeridos;
10. fuera de alcance;
11. checkpoint de salida.

El README no debe convertirse en una clase teórica ni contener una solución completa.

## 2. IMPLEMENTACION-DE-REFERENCIA.md

Muestra cómo puede evolucionar PetCare usando exclusivamente conceptos ya enseñados.

Debe incluir:

- advertencia explícita de que es una referencia, no una solución oficial;
- estructura de paquetes o archivos esperada;
- fragmentos de código focalizados;
- un ejemplo de uso o ejecución;
- decisiones de diseño que el estudiante debe adaptar;
- errores frecuentes a evitar.

El código debe ser suficiente para conectar teoría con implementación, pero incompleto a propósito cuando la decisión pertenece al estudiante.

## 3. MODELO-Y-CHECKPOINT.md

Representa el estado de salida de la semana.

Debe incluir:

- diagrama Mermaid;
- estructura conceptual o paquetes;
- checklist técnico;
- checklist de evidencia;
- preguntas de defensa;
- relación explícita con el siguiente incremento.

## Principios transversales

### Continuidad

Cada semana modifica el mismo PetCare. No se crea un proyecto nuevo.

### Incrementalidad

El código de referencia muestra únicamente el cambio relevante de la semana.

### Código explicable

Un estudiante debe poder defender cada clase, método, colección o excepción que agrega.

### No adelantar contenido

No se incorporan conceptos futuros sólo para “dejar el proyecto bonito”.

### Separación pedagógica

- `semanas/` enseña conceptos;
- `ejemplos/` los demuestra de forma aislada;
- `ejercicios/` practica habilidades puntuales;
- `labs/` integra con guía;
- `proyecto-formativo/` aplica lo aprendido al mismo producto acumulativo.

### Diagramas antes que arquitectura ceremonial

Los diagramas explican relaciones visibles del checkpoint. No se agregan capas vacías ni patrones que aún no resuelven un problema real.

## Criterio de calidad

Una semana está documentada correctamente cuando un estudiante puede responder, sólo leyendo su carpeta:

1. ¿de dónde parto?;
2. ¿qué problema nuevo aparece?;
3. ¿qué concepto aplico?;
4. ¿cómo se ve en código?;
5. ¿cómo debería quedar el modelo?;
6. ¿qué debo demostrar?;
7. ¿qué todavía no corresponde hacer?;
8. ¿desde dónde continúa la semana siguiente?
