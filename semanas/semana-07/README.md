# Semana 07 · Integración y reforzamiento EA1

**Periodo:** 21 al 26 de septiembre de 2026  
**Sección:** DSY1102-012V  
**Foco real:** integración de contenidos de EA1 y cierre de brechas antes de EP1.

← [Volver al índice](../README.md)

## Propósito de la semana

Esta semana se utiliza para **integrar y reforzar la Experiencia de Aprendizaje 1**. El objetivo no es memorizar sintaxis aislada, sino aprender a leer un requerimiento y decidir qué elementos de POO necesita la solución.

```text
requerimiento
→ entidades y responsabilidades
→ clases y objetos
→ encapsulamiento
→ colaboración
→ herencia
→ clase abstracta
→ interfaz
→ polimorfismo
→ List / ArrayList
→ excepciones
→ prueba de la solución
```

## Conceptos especiales de esta semana

### Clase abstracta
Representa una generalización válida del dominio que no tiene sentido instanciar directamente. Puede contener atributos, constructores, métodos implementados y métodos abstractos.

### Método abstracto
Declara un comportamiento que debe existir en los subtipos, pero cuya implementación depende del tipo concreto.

### Interfaz
Representa un **contrato o capacidad** que una clase puede cumplir.

```text
extends     → "es un"
implements  → "puede hacer / cumple un contrato"
```

## Clase especial · sábado 26 de septiembre

La sesión se trabaja como **un proyecto guiado e incremental**. Partimos desde un requerimiento y hacemos evolucionar una aplicación de consola completa, con clases separadas, paquetes, lista de objetos, menú y manejo de errores.

➡️ [Guía de clase · Proyecto integrador EA1](./01-clase-especial-integracion-ea1.md)

## Proyecto completo de referencia

La solución final está disponible como un proyecto Java real, con un archivo por clase y estructura desde `src/`.

➡️ [Proyecto completo · Integración EA1](../../ejemplos/semana-07/proyecto-integracion-ea1/)

> Durante la clase avanzamos por checkpoints conceptuales. La carpeta de ejemplos contiene solamente la solución final, para evitar mantener múltiples copias divergentes del mismo proyecto.

## Resultado esperado

Al finalizar la sesión deberías poder:

- analizar un requerimiento antes de programar;
- identificar entidades, atributos, comportamientos y responsabilidades;
- decidir cuándo corresponde herencia;
- reconocer cuándo una clase base debería ser abstracta;
- declarar y sobrescribir métodos abstractos;
- reconocer una capacidad transversal y representarla mediante una interfaz;
- utilizar referencias del tipo padre de forma polimórfica;
- almacenar subtipos en una `List` del tipo padre;
- separar interacción por consola de lógica de dominio;
- manejar entradas inválidas sin terminar abruptamente la aplicación;
- probar la solución antes de considerarla terminada.

## Fuera de alcance

No incorporamos todavía `Set`, `Map`, Streams, lambdas, JavaFX, persistencia ni patrones adicionales.

El objetivo es cerrar correctamente EA1, no abrir nuevos frentes.
