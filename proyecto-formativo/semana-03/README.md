# PetCare · Semana 03 · Objetos y encapsulamiento

**Periodo:** 24 al 29 de agosto de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare existe y ejecuta desde Semana 02. Puede contener métodos y una primera representación de `Mascota`.

## Problema que motiva el incremento

Parte del comportamiento y del estado todavía puede estar concentrado en `main` o expuesto sin control.

## Objetivo

Consolidar `Mascota` como objeto con constructor, comportamiento propio y estado protegido.

## Conceptos nuevos aplicados

- clase y objeto;
- constructor;
- métodos de instancia;
- encapsulamiento;
- estado válido;
- responsabilidad del objeto.

## Secuencia de trabajo

1. [Revisar checkpoint anterior](./01-revisar-checkpoint.md)
2. [Mover comportamiento a Mascota](./02-comportamiento-mascota.md)
3. [Proteger estado válido](./03-encapsulamiento.md)
4. [Verificar y cerrar](./04-checklist-final.md)
5. [Implementación de referencia](./IMPLEMENTACION-DE-REFERENCIA.md)
6. [Modelo y checkpoint](./MODELO-Y-CHECKPOINT.md)

## Trabajo esperado

- mantener el mismo proyecto;
- consolidar constructor;
- crear al menos dos instancias;
- mover una operación útil a `Mascota`;
- proteger al menos una regla;
- demostrar estado independiente entre objetos.

## Evidencia esperada

- dos objetos con datos distintos;
- caso válido e inválido;
- código sin acceso directo a atributos protegidos;
- commits pequeños;
- DevLog actualizado.

## Commits sugeridos

```text
refactor: mover comportamiento a mascota
feat: agregar constructor de mascota
feat: proteger estado de mascota
```

## Fuera de alcance

- herencia;
- clases abstractas;
- interfaces;
- colecciones;
- excepciones propias;
- JavaFX;
- persistencia.

## Checkpoint de salida

`Mascota` representa estado y comportamiento propio; `App` crea y coordina.

➡️ [Ver checkpoint esperado](./MODELO-Y-CHECKPOINT.md)
