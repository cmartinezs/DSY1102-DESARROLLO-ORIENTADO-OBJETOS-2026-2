# Semana 07 · Laboratorio independiente: Centro de soporte técnico

**DSY1102 · Clase abstracta, interfaz y polimorfismo · Java 21**

## Caso
Un centro de soporte registra equipos electrónicos: computadores e impresoras. Todos son **Equipo** y deben describirse, pero solamente los computadores permiten realizar una **actualización de software** dentro de este ejercicio.

## Autonomía y alcance
Crea un proyecto nuevo `SoporteTecnicoS07`. No uses las clases MediaHub de las materias de esta semana, ni Veterinaria, ni PetCare. Este lab es un caso **distinto** al ejemplo curricular; recupera conceptos previamente aprendidos, no artefactos entregados.

## Ruta paso a paso
1. [01 · Crear proyecto y distinguir tipos/capacidades](01-preparacion.md)
2. [02 · Clase abstracta Equipo y subtipos](02-abstraccion.md)
3. [03 · Interfaz Actualizable](03-interfaz.md)
4. [04 · Integrar y verificar](04-integracion-pruebas.md)

## Archivos finales
`Main.java`, `Equipo.java`, `Computador.java`, `Impresora.java`, `Actualizable.java`.

**Checkpoint global:** `Equipo` no puede instanciarse, ambos subtipos tienen descripción propia y solo `Computador` implementa `Actualizable`. No se necesita una aplicación gráfica.

**Ruta histórica opcional:** [Veterinaria III interactiva](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/labs/veterinary-iii/) conserva su requisito de Veterinaria II, pero no forma parte de este laboratorio oficial.
