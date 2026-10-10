# Laboratorio Semana 07 · Veterinaria III — abstracción, interfaz y consolidación EA1

**DSY1102-012V · 21–26 septiembre 2026 · Material de recuperación documental**

> Este laboratorio está publicado ahora como guía de práctica y recuperación. No constituye evidencia de que se haya impartido como laboratorio formal en esa fecha.

## ¿Qué problema resuelve?
En Veterinaria II (semana 6) ya registras múltiples animales con `List<Animal>`, polimorfismo, búsqueda, eliminación y excepciones. Ahora debemos expresar dos reglas: **no existe un paciente "Animal genérico"** y **no todos los animales reciben los mismos servicios**.

## Objetivo de aprendizaje
1. Justificar cuándo conviene declarar `Animal` abstracta y cuándo no.
2. Modelar una capacidad concreta mediante interfaz (ejemplo: `Vacunable` según el alcance de *esta* veterinaria).
3. Mantener la lista, el polimorfismo y el manejo de errores de Veterinaria II.
4. Terminar con una solución de consola ejecutable y defendible, no con una jerarquía de demostración aislada.

## Dependencia explícita: continuidad estricta
**No crees otro proyecto ni dupliques `src/`.** Continúa tu propia solución de Veterinaria II dentro de `labs/lab-veterinaria-herencia-polimorfismo/`, resultado del [lab 6](../semana-06/). Si no la tienes terminada, primero recupera ese checkpoint. Las guías de esta carpeta son documentación **del incremento**, no una segunda implementación.

## Estructura de trabajo en el repositorio del estudiante
```text
labs/lab-veterinaria-herencia-polimorfismo/
├── src/                          # mismo proyecto de Veterinaria I y II
├── docs/
│   ├── veterinaria-ii/           # conservar
│   └── veterinaria-iii/          # crear ahora
└── evidencias/
    ├── veterinaria-ii/           # conservar
    └── veterinaria-iii/          # crear ahora
```

## Ruta de trabajo (etapas con checkpoints)
1. [01 · Verificar la línea base](01-linea-base.md)
2. [02 · Elegir una abstracción justificable](02-abstraccion.md)
3. [03 · Definir una capacidad con interfaz](03-interfaz-capacidad.md)
4. [04 · Reutilizar la lista y el polimorfismo](04-integracion-polimorfica.md)
5. [05 · Controlar errores e invariantes](05-validaciones-errores.md)
6. [06 · Ejecutar pruebas de integración](06-pruebas-integracion.md)
7. [07 · Cierre, entrega y defensa](07-cierre-evidencias.md)

## Secuencia recomendada
Antes de clase: ejecutar Veterinaria II y revisar [clases abstractas](../../semanas/semana-07/02-clases-abstractas.md) e [interfaces](../../semanas/semana-07/03-interfaces.md). En práctica: trabajar etapas 01–05 con checkpoints. En casa: cerrar 06–07 y DevLog.

## Contrato de salida
Proyecto que compila y ejecuta, con abstracción justificada, capacidad implementada sólo por subtipos elegibles, recorrido polimórfico, caso inválido controlado, commits por avance y evidencia. No se exige `Set`, `Map`, FXML ni JavaFX: son contenidos posteriores.

## Separación de verticales
La [materia Semana 7](../../semanas/semana-07/) enseña con **MediaHub**; este laboratorio integra sobre **Veterinaria**; [PetCare Semana 7](../../proyecto-formativo/semana-07/) es el proyecto longitudinal individual, no este lab.

**Portal web:** [Abrir laboratorio guiado](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/labs/veterinary-iii/).
