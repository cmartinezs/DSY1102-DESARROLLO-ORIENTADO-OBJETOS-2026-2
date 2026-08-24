# Semana 3 · Herencia, clases abstractas, interfaces y polimorfismo

**Periodo:** 24 al 29 de agosto de 2026  
**Sección:** DSY1102-012V  
**Foco curricular:** herencia, abstracción mediante tipos y polimorfismo

← [Volver al índice](../README.md)

## Propósito

Esta semana pasamos de diseñar objetos aislados a diseñar **familias de objetos relacionados**. El objetivo no es memorizar `extends`, `abstract` o `interface`, sino comprender cuándo existe una relación `es-un`, qué comportamiento conviene compartir y cómo una referencia de un tipo general puede trabajar con implementaciones diferentes.

## Punto de entrada real

Semana 2 dejó disponible el recorrido métodos → clases → objetos → encapsulamiento, pero el inicio de esta semana incluye un **checkpoint diagnóstico de 10–15 minutos**. Si la sección no puede explicar con seguridad clase, objeto, constructor, `private` y métodos que protegen estado, se recuperan esos conceptos antes de introducir herencia.

La disponibilidad de este material **no significa que todo haya sido visto en aula**.

## Ruta de aprendizaje

```text
checkpoint POO básica
→ relación es-un
→ superclase y subclase
→ extends / super
→ sobrescritura
→ clase abstracta
→ interfaz
→ polimorfismo
→ selección de diseño
→ práctica integrada
```

## Contenidos

1. [Herencia y relación es-un](./01-herencia.md)
2. [Clases abstractas e interfaces](./02-abstractas-interfaces.md)
3. [Polimorfismo](./03-polimorfismo.md)
4. [Práctica incremental](./04-practica.md)
5. [Dinámica viva · ¿Herencia o no?](./dinamica-viva-herencia-o-no.md)

## Resultados esperados

Al finalizar, el estudiante debería poder:

- reconocer una relación de herencia válida y distinguirla de composición o simple asociación;
- crear una superclase y subclases en Java;
- reutilizar estado/comportamiento sin romper encapsulamiento;
- sobrescribir comportamiento con `@Override`;
- explicar para qué sirve una clase abstracta;
- explicar para qué sirve una interfaz y por qué no es simplemente «una clase con menos cosas»;
- utilizar una referencia del tipo padre/interfaz con objetos concretos distintos;
- observar polimorfismo en ejecución;
- justificar una decisión simple entre herencia, clase abstracta e interfaz.

## Regla pedagógica

Primero se trabaja con ejemplos pequeños y neutrales. **PetCare continúa por separado como proyecto transversal** y solo se evoluciona después de comprender los conceptos fuera de ese dominio.

## Checkpoint mínimo

Antes de considerar Semana 3 cerrada, el estudiante debe ser capaz de construir y explicar un ejemplo como:

```java
abstract class Notificacion {
    private String destinatario;

    public Notificacion(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getDestinatario() {
        return destinatario;
    }

    public abstract void enviar();
}

class Email extends Notificacion {
    public Email(String destinatario) {
        super(destinatario);
    }

    @Override
    public void enviar() {
        System.out.println("Email enviado a " + getDestinatario());
    }
}
```

y explicar por qué `Notificacion n = new Email("ana@ejemplo.cl"); n.enviar();` es polimorfismo.

## Fuera de alcance como contenido central

- colecciones y genéricos;
- excepciones;
- JavaFX;
- JDBC;
- persistencia;
- patrones de diseño formales.

Pueden aparecer arreglos mínimos solo si fueran imprescindibles para demostrar varias instancias, pero no se evalúan como contenido nuevo de esta semana.

## Evidencia semanal

Cada estudiante debe conservar código ejecutable, responder los checkpoints conceptuales y registrar en su DevLog: qué entendió, qué relación de diseño le costó distinguir, un error real encontrado y cómo lo resolvió.

## Cierre docente obligatorio

Al terminar la última sesión registrar por separado: **último concepto efectivamente alcanzado, práctica realizada, conceptos pendientes, bloqueos y punto exacto de arranque de Semana 4**. Este README expresa disponibilidad curricular, no evidencia de cierre de aula.