# PetCare · Proyecto formativo transversal

PetCare es el proyecto incremental de DSY1102. No es el ejemplo principal de clase ni un laboratorio guiado: cada estudiante mantiene su propia implementación y la hace evolucionar semana a semana.

## Estado actual

**Semana 04 · constructores, estado válido y colaboración simple entre objetos**

Checkpoint real al **1 de septiembre de 2026**: la sección llegó a **constructores**.

- [Semana 02 · inicio y primer checkpoint](./semana-02/README.md)
- [Semana 03 · comportamiento y estado protegido](./semana-03/README.md)
- [Semana 04 · constructores y composición introductoria](./semana-04/README.md)

## Regla de continuidad

```text
Semana N-1 estable
      ↓
checkpoint real de aula
      ↓
implementación incremental
      ↓
pruebas y evidencia
      ↓
checkpoint para Semana N+1
```

Cada semana depende de la anterior. PetCare no se reinicia y tampoco se adelanta artificialmente para seguir una planificación teórica.

## Separación pedagógica

- [`semanas/`](../semanas/) enseña contenido.
- [`ejemplos/`](../ejemplos/) demuestra conceptos de forma mínima e independiente.
- [`ejercicios/`](../ejercicios/) entrega práctica breve por semana.
- [`labs/`](../labs/) practica mediante una guía paso a paso.
- `proyecto-formativo/` integra acumulativamente lo ya aprendido.

## Dominio actual

```text
Mascota
- nombre
- especie
- edad
- peso
+ constructor
+ operaciones que protegen estado

Mascota ───> Tutor   (extensión opcional al consolidar)
```

La composición aparece solo como introducción a colaboración entre objetos. No obliga a modelar una jerarquía.

## Fuera de alcance actual

Mientras no se hayan trabajado efectivamente en aula, no corresponde exigir:

- herencia;
- clases abstractas;
- interfaces;
- polimorfismo;
- colecciones;
- excepciones propias;
- JavaFX;
- persistencia;
- JDBC.

## Documentación transversal

- [Roadmap semanal](./ROADMAP-SEMANAL.md)
- [Arquitectura y continuidad](./ARQUITECTURA-Y-CONTINUIDAD.md)

La página pública debe reflejar siempre el checkpoint vigente y no el contenido futuro disponible curricularmente.
