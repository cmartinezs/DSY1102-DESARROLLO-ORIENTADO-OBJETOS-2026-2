# PetCare · Semana 07 · Abstracción e integración EA1

**Periodo:** 21 al 26 de septiembre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare integra jerarquía, polimorfismo, `List / ArrayList` y excepciones.

## Problema que motiva el incremento

El diseño necesita distinguir entre una categoría base que quizá no deba instanciarse y capacidades que sólo algunos objetos poseen.

## Objetivo

Consolidar EA1 incorporando abstracción e interfaces donde tengan sentido, sin rehacer el proyecto ni reemplazarlo por el proyecto guía MediaHub.

## Conceptos nuevos aplicados

- clase abstracta;
- método abstracto;
- interfaz;
- implementación de capacidades;
- integración acumulativa;
- defensa de decisiones de diseño.

## Secuencia de trabajo

1. [Revisar el diseño acumulado de EA1](./01-revisar-diseno-ea1.md)
2. [Decidir si Mascota debe ser abstracta](./02-clase-abstracta.md)
3. [Modelar una capacidad mediante interfaz](./03-interfaz-capacidad.md)
4. [Integrar el flujo completo de consola](./04-integracion-consola.md)
5. [Verificar y cerrar la integración](./05-verificacion-cierre.md)
6. [Consultar implementación de referencia](./IMPLEMENTACION-DE-REFERENCIA.md)
7. [Revisar modelo y checkpoint](./MODELO-Y-CHECKPOINT.md)

## Trabajo esperado

- preservar la solución de Semana 06;
- decidir si la clase base debe ser abstracta;
- incorporar al menos una capacidad sólo si el dominio la necesita;
- mantener colección, excepciones y polimorfismo funcionando;
- ejecutar un flujo completo.

## Evidencia esperada

- solución acumulativa compilable;
- abstracción justificada;
- interfaz justificada si aplica;
- polimorfismo visible;
- caso de error manejado;
- DevLog con decisión revisada.

## Commits sugeridos

```text
refactor: revisar abstraccion de mascota
feat: modelar capacidad transversal
test: verificar flujo integrado de petcare
```

## Fuera de alcance

- `Set`;
- `Map`;
- JavaFX;
- persistencia;
- patrones adicionales.

## Checkpoint de salida

PetCare representa una solución EA1 cohesionada y defendible.

➡️ [Ver checkpoint esperado](./MODELO-Y-CHECKPOINT.md)
