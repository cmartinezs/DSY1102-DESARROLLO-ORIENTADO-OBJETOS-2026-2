# Semana 06 · Arrays, colecciones y excepciones

## Propósito
Integrar los fundamentos de POO ya trabajados con estructuras que permitan administrar conjuntos de objetos y controlar situaciones de error dentro de una solución real.

## Contenidos
- Arrays de objetos.
- Limitaciones del tamaño fijo.
- Introducción a `List` y `ArrayList`.
- Agregar, obtener, recorrer, buscar y eliminar objetos.
- Integración de colecciones con herencia y polimorfismo.
- Concepto de excepción.
- `try`, `catch` y `throw`.
- Validaciones y errores propios del dominio.

## Enfoque de clase
No se estudian arrays, colecciones y excepciones como temas aislados. Se parte del sistema de Veterinaria desarrollado previamente y se plantea una nueva necesidad: la veterinaria debe administrar más de un animal.

Secuencia sugerida:

1. Representar temporalmente varios animales con un `Animal[]`.
2. Recorrer el array y ejecutar comportamiento polimórfico.
3. Detectar sus limitaciones operativas.
4. Migrar a `List<Animal>` / `ArrayList<Animal>`.
5. Registrar, listar, buscar y eliminar animales.
6. Identificar situaciones que pueden fallar.
7. Incorporar excepciones para controlar esos escenarios.
8. Probar casos válidos e inválidos.

## Laboratorio principal
**Veterinaria II · Gestión de animales, colecciones y excepciones**

### Prerrequisito obligatorio
Haber completado el laboratorio **Veterinaria · Herencia y Polimorfismo**.

El segundo laboratorio reutiliza el código anterior y lo extiende. No se comienza un proyecto nuevo ni se reemplaza la jerarquía existente.

Ruta esperada en el repositorio del estudiante:

```text
labs/lab-veterinaria-colecciones-excepciones/
```

El estudiante debe conservar evidencia de análisis, implementación, pruebas y evolución desde array a colección.

## Trabajo autónomo
Completar un pequeño caso integrador donde se administre una colección de objetos de una jerarquía propia y se controle al menos una situación excepcional.

## Cierre de la experiencia
Esta semana prepara la consolidación de la primera experiencia de aprendizaje: el estudiante debe comenzar a decidir qué clases necesita, cómo se relacionan, dónde corresponde aplicar herencia o polimorfismo, cómo almacenar múltiples objetos y qué errores deben controlarse.
