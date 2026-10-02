# PetCare · Semana 05 · Herencia y polimorfismo

**Periodo:** 7 al 12 de septiembre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare llega desde Semana 04 con una clase `Mascota` correctamente construida, encapsulada y capaz de colaborar con otras entidades simples como `Tutor`.

La semana no parte creando un proyecto nuevo.

## Problema que aparece

Hasta ahora todas las mascotas comparten exactamente el mismo tipo. Sin embargo, el dominio puede requerir comportamiento diferente según la especialización.

Ejemplos posibles:

- un perro puede tener una forma particular de emitir sonido;
- un gato puede implementar otra;
- ciertos datos o comportamientos pueden pertenecer sólo a un subtipo.

La herencia sólo se incorpora si esa diferencia es real y justificable.

## Objetivo

Evolucionar el modelo para representar especializaciones de `Mascota` mediante herencia, constructores heredados, sobrescritura y polimorfismo.

## Evolución sugerida

```text
Mascota
├── Perro
└── Gato
```

No es obligatorio utilizar exactamente esos subtipos. El estudiante puede definir otros si pertenecen al dominio y puede justificar qué comparten y qué especializan.

## Trabajo esperado

1. revisar la clase `Mascota` existente;
2. identificar atributos y comportamientos realmente comunes;
3. crear al menos dos subtipos;
4. reutilizar el constructor de la clase base mediante `super(...)`;
5. sobrescribir al menos un comportamiento con `@Override`;
6. demostrar polimorfismo usando referencias del tipo `Mascota`;
7. evitar decisiones del estilo `if (tipo.equals("perro"))` para ejecutar comportamiento especializado.

## Ejemplo conceptual

```java
Mascota mascota1 = new Perro(...);
Mascota mascota2 = new Gato(...);

mascota1.emitirSonido();
mascota2.emitirSonido();
```

La intención del ejemplo es demostrar despacho polimórfico, no entregar una solución para copiar.

## Criterios de diseño

### Sí corresponde

- herencia cuando existe una relación **ES UN**;
- `super(...)` para inicializar estado heredado;
- `@Override` cuando un subtipo especializa comportamiento;
- trabajar con el tipo base cuando el código no necesita conocer el subtipo concreto.

### No corresponde

- crear subclases sin ninguna diferencia relevante;
- duplicar en cada subtipo todos los atributos de `Mascota`;
- usar herencia sólo porque es el contenido de la semana;
- agregar listas, interfaces o persistencia antes de necesitarlas.

## Checkpoint de salida

```text
cli.App
    ↓
Mascota
├── Perro
└── Gato
```

El estudiante debe poder explicar:

- por qué existe la clase base;
- por qué cada subtipo hereda de ella;
- qué ejecuta `super(...)`;
- qué método fue sobrescrito;
- por qué una referencia `Mascota` puede apuntar a distintos subtipos.

## Evidencia esperada

- mismo PetCare de la semana anterior;
- al menos dos subtipos funcionales;
- uso correcto de `super(...)`;
- al menos un `@Override`;
- demostración polimórfica;
- commits incrementales;
- DevLog describiendo una decisión de generalización/especialización.
