# Semana 08 · Laboratorio independiente: Control de acceso a feria

**DSY1102 · List, Set, Map y consistencia de identidad · Java 21**

## Problema
Una feria tecnológica controla sus acreditaciones mediante códigos como `F001`. No puede registrar dos veces el mismo código. Necesita localizar rápidamente a la persona asociada. En este caso, un `Map<String, Asistente>` es una alternativa directa para mantener una única fuente de verdad; contrastarás esta decisión con `List` y `Set`.

## Independencia
Crea **desde cero** el proyecto `ControlFeria`. No reutiliza Veterinaria IV, Biblioteca multimedia, otros laboratorios ni PetCare. No tienes que implementar las tres estructuras en producción.

## Ruta por etapas
1. [01 · Proyecto nuevo e identidad](01-preparacion.md)
2. [02 · Comparar List, Set y Map](02-comparacion.md)
3. [03 · Registro consistente con Map](03-registro.md)
4. [04 · Probar y justificar](04-pruebas.md)

**Resultado:** alta única, rechazo de códigos repetidos, consulta y eliminación por código, explicación de cuándo se necesita `equals/hashCode`.

**Ruta anterior conservada:** [Veterinaria IV interactiva](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/labs/veterinary-iv/), opcional e históricamente dependiente de Veterinaria III.
