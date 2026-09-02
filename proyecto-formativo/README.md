# PetCare · Proyecto formativo transversal

PetCare es el proyecto incremental de DSY1102. No es el ejemplo principal de clase ni un laboratorio guiado: cada estudiante mantiene su propia implementación y la hace evolucionar semana a semana.

## Estado actual

**Semana 04 · constructores, responsabilidades y colaboración simple entre objetos**

Checkpoint real al **1 de septiembre de 2026**: la sección trabajó **constructores, sobrecarga de constructores, separación de responsabilidades y composición/asociación introductoria**. El polimorfismo se mencionó como introducción conceptual, pero todavía no se ha desarrollado mediante herencia y sobrescritura.

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

La relación entre `Mascota` y `Tutor` puede utilizarse para practicar colaboración entre objetos y separación de responsabilidades, sin introducir todavía una jerarquía de herencia.

## Fuera de alcance actual

Mientras no se hayan trabajado efectivamente en aula, no corresponde exigir:

- herencia;
- sobrescritura;
- polimorfismo dinámico;
- clases abstractas;
- interfaces;
- colecciones;
- excepciones propias;
- JavaFX;
- persistencia;
- JDBC.

## Próximo paso

La siguiente clase profundizará en **herencia y polimorfismo**, manteniendo el principio de que estos mecanismos deben aparecer como respuesta a necesidades concretas del modelo de dominio.

## Documentación transversal

- [Roadmap semanal](./ROADMAP-SEMANAL.md)
- [Arquitectura y continuidad](./ARQUITECTURA-Y-CONTINUIDAD.md)

La página pública debe reflejar siempre el checkpoint vigente y no el contenido futuro disponible curricularmente.
