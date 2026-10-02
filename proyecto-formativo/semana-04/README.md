# PetCare · Semana 04 · Construcción y colaboración

**Periodo:** 31 de agosto al 5 de septiembre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare posee una clase `Mascota` con estado encapsulado y operaciones propias.

## Problema que motiva el incremento

Los objetos deben nacer en un estado coherente y comenzar a colaborar con otras entidades sin mezclar responsabilidades.

## Objetivo

Consolidar construcción válida, uso criterioso de accesores y colaboración simple entre objetos.

## Conceptos nuevos aplicados

- constructores con parámetros;
- `this`;
- inicialización coherente;
- getters/setters con criterio;
- colaboración entre objetos;
- composición/asociación introductoria.

## Secuencia de trabajo

1. [Revisar checkpoint de Semana 03](./01-revisar-checkpoint.md)
2. [Consolidar construcción válida](./02-construccion-valida.md)
3. [Incorporar colaboración entre objetos](./03-colaboracion-objetos.md)
4. [Verificar y cerrar](./04-verificacion-cierre.md)
5. [Consultar implementación de referencia](./IMPLEMENTACION-DE-REFERENCIA.md)
6. [Revisar modelo y checkpoint](./MODELO-Y-CHECKPOINT.md)

## Trabajo esperado

- evitar objetos incompletos construidos mediante cadenas de setters;
- mantener atributos privados;
- revisar qué datos son obligatorios;
- incorporar `Tutor` u otra entidad si corresponde;
- demostrar varias instancias independientes.

## Evidencia esperada

- constructor funcional;
- al menos tres instancias;
- operación que protege estado;
- relación entre objetos si fue incorporada;
- DevLog sobre responsabilidad y colaboración.

## Commits sugeridos

```text
refactor: consolidar constructor de mascota
refactor: limitar acceso al estado
feat: agregar colaboracion con tutor
```

## Fuera de alcance

- herencia;
- polimorfismo;
- listas;
- interfaces;
- excepciones personalizadas;
- persistencia.

## Checkpoint de salida

PetCare posee objetos correctamente construidos y responsabilidades mejor distribuidas.

➡️ [Ver checkpoint esperado](./MODELO-Y-CHECKPOINT.md)
