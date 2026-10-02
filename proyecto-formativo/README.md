# PetCare · Proyecto formativo transversal

PetCare es el proyecto incremental de DSY1102. No es el ejemplo principal de clase ni un laboratorio guiado: cada estudiante mantiene su propia implementación y la hace evolucionar semana a semana.

## Estado actual

**Semana 08 · Set, Map y cierre de EA1**

Checkpoint vigente al **2 de octubre de 2026**: PetCare ya puede integrar los contenidos trabajados durante la Experiencia de Aprendizaje 1:

```text
clases y objetos
→ encapsulamiento y constructores
→ herencia y sobrescritura
→ polimorfismo
→ List / ArrayList
→ excepciones
→ clases abstractas e interfaces
→ Set / HashSet
→ Map / HashMap
```

La regla sigue siendo la misma: **cada estructura o abstracción aparece porque resuelve una necesidad concreta del dominio, no porque “toque usarla”.**

## Incrementos semanales

- [Semana 02 · inicio y primer checkpoint](./semana-02/README.md)
- [Semana 03 · comportamiento y estado protegido](./semana-03/README.md)
- [Semana 04 · constructores y colaboración entre objetos](./semana-04/README.md)
- [Semana 05 · herencia y polimorfismo](./semana-05/README.md)
- [Semana 06 · colecciones y excepciones](./semana-06/README.md)
- [Semana 07 · abstracción, interfaces e integración EA1](./semana-07/README.md)
- [Semana 08 · Set, Map y criterio de colecciones](./semana-08/README.md)

## Regla de continuidad

```text
checkpoint estable de Semana N-1
        ↓
necesidad nueva del dominio
        ↓
concepto aprendido en Semana N
        ↓
incremento pequeño y explicable
        ↓
pruebas / evidencia
        ↓
checkpoint para Semana N+1
```

PetCare **no se reinicia** por semana. Tampoco se copia el laboratorio de turno: los laboratorios enseñan y practican; PetCare integra lo aprendido sobre el mismo dominio.

## Separación pedagógica

- [`semanas/`](../semanas/) enseña contenido.
- [`ejemplos/`](../ejemplos/) demuestra conceptos de forma mínima e independiente.
- [`ejercicios/`](../ejercicios/) entrega práctica breve.
- [`labs/`](../labs/) integra mediante guía paso a paso.
- `proyecto-formativo/` mantiene la evolución individual y acumulativa de PetCare.

## Modelo de referencia al cierre de Semana 08

No existe una única solución obligatoria, pero una evolución coherente puede llegar a algo como:

```text
Mascota (abstracta)
├── Perro
├── Gato
└── otra especialización justificada

Vacunable (interfaz, sólo si existe esa capacidad en el modelo)

Tutor

PetCareService
├── List<Mascota> mascotas
├── Set<String> identificadoresRegistrados
└── Map<String, Mascota> mascotasPorId
```

Las tres colecciones **no son obligatorias simultáneamente**. Deben usarse únicamente cuando el requerimiento justifique recorrido, unicidad o búsqueda por clave.

## Responsabilidades esperadas

### Modelo

Representa estado, reglas y comportamiento propio de las entidades.

### Servicio

Coordina operaciones sobre múltiples objetos: registrar, buscar, retirar, filtrar o validar reglas que involucren al conjunto.

### CLI

Lee opciones, solicita datos, invoca operaciones y presenta resultados. No debe convertirse en el lugar donde viven todas las reglas.

## Fuera de alcance hasta Semana 08

No corresponde exigir todavía:

- JavaFX;
- FXML;
- persistencia JSON;
- JDBC;
- bases de datos;
- frameworks;
- Streams o lambdas como requisito;
- patrones arquitectónicos adicionales.

## Documentación transversal

- [Roadmap semanal](./ROADMAP-SEMANAL.md)
- [Arquitectura y continuidad](./ARQUITECTURA-Y-CONTINUIDAD.md)
- [Modelo y checkpoint Semana 08](./semana-08/MODELO-Y-CHECKPOINT.md)

La documentación pública debe reflejar siempre el **avance real del curso**, no una planificación histórica que haya quedado desfasada.
