# Semana 07 · Integración y reforzamiento EA1

**Periodo:** 21 al 26 de septiembre de 2026  
**Sección:** DSY1102-012V  
**Proyecto guía:** Biblioteca MediaHub

← [Volver al índice](../README.md)

## Propósito de la semana

Esta semana se utiliza para **integrar y reforzar la Experiencia de Aprendizaje 1** mediante un proyecto de consola completo.

MediaHub administra recursos físicos y digitales de una biblioteca multimedia. El problema nos permite conectar, de forma natural:

```text
requerimiento
→ entidades y responsabilidades
→ clases y objetos
→ encapsulamiento
→ herencia
→ clase abstracta
→ interfaz
→ polimorfismo
→ List / ArrayList
→ excepciones
→ prueba de la solución
```

## Conceptos especiales

### Clase abstracta
`Recurso` representa cualquier material administrado por MediaHub, pero no tiene sentido registrar un “recurso genérico”. Por eso será abstracta.

### Método abstracto
Cada tipo de recurso posee una política de préstamo distinta. La clase base puede exigir el comportamiento sin decidir su implementación:

```java
public abstract int obtenerDiasPrestamo();
```

### Interfaz
Los recursos digitales pueden descargarse, mientras que los físicos no.

```text
Ebook ES UN Recurso.
Ebook PUEDE SER Descargable.
```

## Guía progresiva

1. [Requerimiento y modelado inicial](./01-requerimiento-y-modelado.md)
2. [Clases abstractas](./02-clases-abstractas.md)
3. [Interfaces](./03-interfaces.md)
4. [List y polimorfismo](./04-listas-y-polimorfismo.md)
5. [Main, menú y excepciones](./05-main-menu-y-excepciones.md)
6. [Integración y prueba final](./06-integracion-y-prueba-final.md)

Cada parte termina con el **avance consolidado esperado**.

## Proyecto completo

➡️ [Biblioteca MediaHub · solución final](../../ejemplos/semana-07/proyecto-integracion-ea1/)

La guía muestra cómo construirlo; la carpeta de ejemplos contiene el proyecto terminado.

## Fuera de alcance

No incorporamos todavía `Set`, `Map`, Streams, lambdas, JavaFX, persistencia ni patrones adicionales.
