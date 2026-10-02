# PetCare · Semana 07 · Abstracción, interfaces e integración EA1

**Periodo:** 21 al 26 de septiembre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare ya posee:

- clases y objetos;
- encapsulamiento;
- constructores;
- herencia;
- sobrescritura;
- polimorfismo;
- `List / ArrayList`;
- manejo básico de excepciones.

Semana 07 no reemplaza PetCare por MediaHub. MediaHub es el proyecto guía de integración; PetCare utiliza los mismos conceptos para consolidar su propio dominio.

## Objetivo

Revisar el diseño acumulado e incorporar clases abstractas e interfaces **sólo donde expresen una necesidad real**, cerrando una solución de consola cohesionada y explicable.

## Parte 1 · ¿Debe Mascota ser abstracta?

Pregunta de diseño:

> ¿Tiene sentido crear una instancia de “Mascota” genérica dentro de nuestro sistema?

Si la respuesta es no, y toda mascota real pertenece a una especialización concreta, puede declararse:

```java
public abstract class Mascota {
    public abstract String obtenerDescripcionCuidados();
}
```

No se vuelve abstracta sólo para usar la palabra `abstract`.

## Parte 2 · Identificar una capacidad transversal

Una interfaz describe una capacidad que no tiene por qué coincidir con la jerarquía de herencia.

Ejemplos conceptuales:

```text
Vacunable
Identificable
RequiereControlEspecial
```

Sólo debe incorporarse una si el caso PetCare realmente necesita esa capacidad.

## Parte 3 · Mantener polimorfismo

La colección principal continúa expresándose preferentemente mediante el tipo base:

```java
List<Mascota> mascotas = new ArrayList<>();
```

Esto permite registrar y recorrer distintos subtipos sin acoplar el servicio a cada clase concreta.

## Parte 4 · Consolidar flujo de consola

El proyecto debe poder demostrar un flujo mínimo completo:

1. registrar datos;
2. crear un subtipo válido;
3. almacenarlo;
4. listar objetos;
5. buscar;
6. ejecutar comportamiento polimórfico;
7. manejar al menos una situación inválida.

Un menú es válido, pero no debe contener las reglas de negocio.

## Checkpoint de salida

Una forma posible:

```text
cli.App
    ↓
PetCareService
    ↓
List<Mascota>
    ↓
Mascota (abstracta)
├── Perro
└── Gato

Capacidad opcional expresada mediante interfaz
```

## Preguntas de defensa

El estudiante debe poder responder:

- ¿por qué `Mascota` es o no es abstracta?;
- ¿qué obliga a implementar un método abstracto?;
- ¿por qué la interfaz elegida representa una capacidad?;
- ¿qué diferencia hay entre heredar de una clase e implementar una interfaz?;
- ¿por qué la lista usa `Mascota` como tipo?;
- ¿qué reglas viven fuera de `main`?;
- ¿qué excepción puede producir una operación y por qué?

## Evidencia esperada

- solución anterior preservada y refactorizada, no rehecha;
- abstracción justificada;
- interfaz justificada si aplica;
- polimorfismo visible;
- colección funcional;
- manejo de excepciones;
- aplicación ejecutable;
- DevLog con al menos una decisión de diseño revisada durante la integración.

## Fuera de alcance

- `Set`;
- `Map`;
- JavaFX;
- persistencia;
- patrones adicionales.
