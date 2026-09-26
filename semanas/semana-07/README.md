# Semana 07 · Integración y reforzamiento EA1

**Periodo:** 21 al 26 de septiembre de 2026  
**Sección:** DSY1102-012V  
**Foco real:** integración de contenidos de EA1 y cierre de brechas antes de EP1.

← [Volver al índice](../README.md)

## Propósito de esta semana

Esta semana no inicia JavaFX. Se utiliza para **integrar y reforzar la Experiencia de Aprendizaje 1**, respetando el avance real de la sección.

La ruta de trabajo es:

```text
clases y objetos
→ encapsulamiento
→ colaboración entre objetos
→ herencia
→ clases abstractas
→ interfaces
→ polimorfismo
→ List / ArrayList
→ manejo de excepciones
```

> Regla de la sesión: primero analizamos el problema, luego decidimos el diseño y recién después escribimos código.

## Clase especial · sábado 26 de septiembre

Esta sesión incorpora dos conceptos que faltaban formalizar en la sección:

- clases y métodos abstractos;
- interfaces.

Se introducen como una **evolución natural de herencia y polimorfismo**, no como temas aislados.

➡️ [Clase especial · Abstractas, interfaces e integración EA1](./01-clase-especial-integracion-ea1.md)

## Resultado esperado

Al finalizar la clase, el estudiante debería poder:

- identificar entidades, atributos, comportamientos y responsabilidades;
- decidir cuándo corresponde una relación de herencia;
- reconocer cuándo una clase base no debería instanciarse directamente;
- declarar una clase y métodos abstractos;
- reconocer una capacidad o contrato transversal y modelarlo con una interfaz;
- sobrescribir comportamiento especializado mediante `@Override`;
- almacenar distintos subtipos en una `List` parametrizada con el tipo padre;
- recorrer esa lista de forma polimórfica;
- manejar entradas inválidas mediante `try/catch`;
- explicar su diseño antes de implementarlo.

## Ejemplo ejecutable

➡️ [Ejemplo integrado EA1](../../ejemplos/semana-07/01-IntegracionEA1.java)

El ejemplo está pensado para seguir la clase en orden. No representa una solución de prueba ni debe memorizarse: su objetivo es mostrar cómo los conceptos ya estudiados se conectan dentro de una misma solución.

## Qué NO se incorpora hoy

- `Set`;
- `Map`;
- Streams;
- lambdas;
- JavaFX;
- Maven como contenido evaluable;
- persistencia.

El foco es cerrar correctamente EA1 antes de abrir una nueva etapa del curso.

## Pregunta guía para toda solución

Antes de programar, responder:

1. ¿Qué entidades existen?
2. ¿Qué datos pertenecen a cada entidad?
3. ¿Qué comportamiento debería vivir dentro de cada clase?
4. ¿Qué tienen en común varios tipos?
5. ¿Qué comportamiento debe variar obligatoriamente según el subtipo?
6. ¿Existe alguna capacidad que no represente una relación «es un»?
7. ¿Cómo se almacenarán varios objetos?
8. ¿Qué entradas o situaciones podrían fallar?
9. ¿Quién detecta el problema y quién lo maneja?
10. ¿La solución compila, ejecuta y cumple realmente el requerimiento?
