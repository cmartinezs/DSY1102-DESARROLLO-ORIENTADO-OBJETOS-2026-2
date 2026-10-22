# Semana 05 · Laboratorio independiente: Despachos urbanos

**DSY1102 · Herencia, `super()`, `@Override` y polimorfismo · Java 21**

## Antes de empezar
Este laboratorio es **autónomo**: crea un proyecto Java nuevo `DespachosUrbanos` desde cero. No utiliza Veterinaria I, otros laboratorios ni PetCare. Los conceptos pueden recordarte clases previas, pero no debes copiar proyectos anteriores.

## Caso
Una empresa realiza despachos normales y expresos. Ambos comparten código y distancia; cada tipo calcula una tarifa diferente. **Regla:** despacho normal = $1.000 + $500 por kilómetro; expreso = tarifa normal + $2.000.

## Objetivos y resultado
Crear `Envio`, `EnvioExpress` y `Main`; heredar atributos y comportamiento con `extends`, reutilizar constructor con `super()`, redefinir `calcularCosto()` y demostrar dos variables de tipo `Envio` que ejecutan comportamientos distintos. Aún **no** se necesitan arreglos, colecciones ni interfaces.

## Ruta guiada
1. [01 · Crear proyecto en IntelliJ](01-preparacion.md)
2. [02 · Clase base y herencia](02-herencia.md)
3. [03 · Sobrescritura y polimorfismo](03-polimorfismo.md)
4. [04 · Pruebas y entrega](04-pruebas.md)

## Checkpoint global
- [ ] Proyecto nuevo que compila y ejecuta.
- [ ] Una subclase usa `extends` y `super()`.
- [ ] `@Override` modifica el costo solo del envío expreso.
- [ ] Envíos referenciados como `Envio` muestran costos distintos.
- [ ] Capturas de consola y explicación de tres decisiones.

## Patrimonio histórico
La [experiencia interactiva Veterinaria I](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/labs/veterinary-inheritance/) se conserva como **alternativa histórica opcional**; no es prerrequisito de las semanas 06–08.
