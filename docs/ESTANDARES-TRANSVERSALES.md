# Estándares transversales consumidos

Este repositorio docente **consume** estándares transversales comunes a todas las asignaturas. No redefine localmente sus reglas normativas.

## Diagramación y representación visual

Fuente normativa canónica:

- `STD-ENG-DIAG-001@0.1.0-draft — Diagramming & Visual Representation Standard`
- repositorio: `adumun/platform-standards`
- ruta: `engineering/STD-ENG-DIAG-001-DIAGRAMMING-AND-VISUAL-REPRESENTATION-STANDARD.md`

### Aplicación en la asignatura

Todo diagrama técnico nuevo o materialmente modificado debe seguir el estándar vigente.

La prioridad normativa es:

1. **Mermaid** como representación predeterminada y preferida.
2. **PlantUML** cuando Mermaid no pueda expresar adecuadamente la semántica necesaria o exista una limitación real de rendering/expresividad.
3. **ASCII** únicamente como último recurso cuando Mermaid y PlantUML no sean viables.

Esta regla aplica transversalmente a:

- material semanal;
- laboratorios;
- ejemplos;
- proyecto formativo;
- documentación técnica;
- arquitectura;
- flujos;
- secuencias;
- estados;
- relaciones entre clases/componentes;
- diagramas incluidos en README y guías docentes.

Los archivos de la asignatura pueden indicar que cumplen el estándar o justificar una desviación puntual, pero **no deben crear una variante local del orden Mermaid → PlantUML → ASCII**.

## Migración incremental

No se exige convertir de forma masiva todo diagrama histórico por el solo hecho de existir. Cuando un diagrama técnico relevante sea creado o modificado, debe migrarse oportunísticamente al formato preferente definido por el estándar, salvo pérdida de semántica o coste desproporcionado debidamente justificado.
