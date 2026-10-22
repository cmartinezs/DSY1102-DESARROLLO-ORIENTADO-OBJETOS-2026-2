> **Archivo histórico (opcional):** esta guía se conserva sin actualizar su dependencia de Veterinaria previa. La ruta oficial autónoma se inicia en [Laboratorio independiente](independiente/README.md).

# Laboratorio Semana 08 · Veterinaria IV — elegir List, Set o Map

**DSY1102-012V · 28 septiembre–3 octubre 2026 · Material de recuperación documental**

> Este laboratorio se incorpora como guía de práctica y recuperación; no implica que haya sido impartido como lab formal en esa fecha.

## Punto de entrada
La **misma Veterinaria** de los laboratorios 5, 6 y 7: jerarquía, servicios, `List<Animal>`, excepciones, abstracción e interfaz según decisiones previas. No se copia PetCare ni se inicia un proyecto nuevo.

## Problema a resolver
Una veterinaria debe **evitar duplicar identificadores** y/o **encontrar rápidamente un animal por su identificador**. ¿Conviene `List`, `Set` o `Map`? La respuesta depende de la necesidad. **No es requisito utilizar las tres estructuras.**

## Objetivo
Justificar una estrategia de colecciones e implementarla **sin inconsistencias**. Comprender `HashSet` (`add`, `contains`, `remove`) y `HashMap` (`put`, `get`, `containsKey`, `remove`, `entrySet`), y cuándo `equals/hashCode` importan.

## Dependencia explícita
Se continúa el trabajo en `labs/lab-veterinaria-herencia-polimorfismo/`. Si no completaste Veterinaria III, puedes recuperar los conceptos desde [Semana 7](../semana-07/), pero debes preservar el estado del proyecto que realmente tienes.

## Entrega en el repositorio del estudiante
```text
labs/lab-veterinaria-herencia-polimorfismo/
├── src/                     # mismo código del proyecto anterior
├── docs/veterinaria-iv/
│   ├── 01-necesidad.md
│   ├── 02-decision-colecciones.md
│   └── 03-integridad.md
└── evidencias/veterinaria-iv/
    └── pruebas.txt
```

## Etapas del laboratorio
1. [01 · Inspeccionar la línea base y la necesidad](01-necesidad.md)
2. [02 · Elegir estructura por intención](02-eleccion.md)
3. [03 · Ruta Set para unicidad](03-set-unicidad.md)
4. [04 · Ruta Map para búsqueda por clave](04-map-busqueda.md)
5. [05 · Igualdad lógica cuando corresponde](05-identidad.md)
6. [06 · Integración y pruebas de consistencia](06-integracion-pruebas.md)
7. [07 · Cierre, evidencia y defensa](07-cierre-evidencias.md)

**Rutas 03 y 04:** explora ambas para aprender sus contratos, pero **implementa sólo la que resuelva un requerimiento real**. La combinación `List+Set+Map` es una extensión opcional que exige mantener sus índices consistentes.

## Definición de terminado
Elección documentada, sistema funcionando con registro/búsqueda/eliminación según necesidad, caso duplicado o clave inexistente, explicación de identidad cuando aplica, commits y DevLog. No se usan Streams, lambdas, JavaFX ni persistencia.

## Relación con el resto
- [Conceptos Semana 8](../../semanas/semana-08/).
- [Ejemplos ejecutables breves](../../ejemplos/semana-08/).
- [PetCare Semana 8](../../proyecto-formativo/semana-08/): integración longitudinal separada.
- [Portal guiado del lab](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/labs/veterinary-iv/).
