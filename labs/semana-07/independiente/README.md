# Semana 07 · Laboratorio autónomo: Biblioteca multimedia

**DSY1102 · Clases abstractas, interfaces y polimorfismo · Java 21**

## Caso y alcance
Una biblioteca presta libros y audiolibros. Todos poseen título, pero **solo algunos pueden reproducirse**. Crearás un proyecto nuevo `BibliotecaMultimedia` con una clase abstracta `Material`, clases concretas `Libro` y `Audiolibro` e interfaz `Reproducible`.

**Independencia:** no necesitas código de Veterinaria I–III ni de semanas previas. Sí conviene reconocer clases, herencia y arreglos como conceptos del curso. PetCare continúa en su propia vertical.

## Etapas
1. [01 · Proyecto independiente y escenario](01-preparacion.md)
2. [02 · Clase abstracta y subclases](02-abstraccion.md)
3. [03 · Interfaz y capacidades](03-interfaz.md)
4. [04 · Integración y pruebas](04-integracion-pruebas.md)

## Definición de terminado
- [ ] `Material` es abstracta y no se instancia directamente.
- [ ] `Libro` y `Audiolibro` implementan `descripcion()`.
- [ ] Solo `Audiolibro` implementa `Reproducible`.
- [ ] Puedes recorrer tipos distintos como `Material` y verificar la capacidad con `instanceof`.
- [ ] Cuentas con evidencia de consola y explicación de las decisiones.

**Práctica histórica opcional:** [Veterinaria III](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/labs/veterinary-iii/) mantiene continuidad con Veterinaria II, pero **no es una dependencia** de Biblioteca multimedia.
