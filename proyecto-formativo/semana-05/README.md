# PetCare · Semana 05 · Herencia y polimorfismo

**Periodo:** 7 al 12 de septiembre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare posee una clase `Mascota` correctamente construida y encapsulada.

## Problema que motiva el incremento

Algunas mascotas comparten estado y comportamiento, pero ciertas operaciones necesitan especializarse según el tipo concreto.

## Objetivo

Introducir una jerarquía simple y demostrar comportamiento polimórfico sin duplicar el modelo común.

## Conceptos nuevos aplicados

- generalización/especialización;
- `extends`;
- `super(...)`;
- `@Override`;
- sobrescritura;
- referencias del tipo base;
- polimorfismo dinámico.

## Secuencia de trabajo

1. identificar qué es realmente común;
2. [revisar implementación de referencia](./IMPLEMENTACION-DE-REFERENCIA.md);
3. crear al menos dos especializaciones justificadas;
4. demostrar sobrescritura y polimorfismo;
5. [verificar modelo y checkpoint](./MODELO-Y-CHECKPOINT.md).

## Trabajo esperado

- conservar `Mascota` como base;
- crear subtipos con diferencias reales;
- reutilizar construcción mediante `super(...)`;
- sobrescribir al menos un comportamiento;
- evitar `if/switch` por tipo para decidir comportamiento especializado.

## Evidencia esperada

- jerarquía ejecutable;
- dos subtipos;
- comportamiento sobrescrito;
- demostración polimórfica;
- DevLog con decisión de herencia.

## Commits sugeridos

```text
refactor: identificar estado comun de mascota
feat: agregar especializaciones de mascota
feat: demostrar comportamiento polimorfico
```

## Fuera de alcance

- arrays como solución principal;
- `List`;
- excepciones propias;
- clases abstractas;
- interfaces;
- persistencia.

## Checkpoint de salida

El sistema trabaja con distintos subtipos mediante el contrato de `Mascota`.

➡️ [Ver checkpoint esperado](./MODELO-Y-CHECKPOINT.md)
