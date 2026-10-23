# Estructura canónica del repositorio docente · DSY1102

Este documento define la organización vigente del repositorio docente y prevalece sobre convenciones anteriores que entren en conflicto con él.

## Verticales principales

El material de aprendizaje se divide en **cinco verticales pedagógicas**:

1. `semanas/`
2. `labs/`
3. `ejemplos/`
4. `ejercicios/`
5. `proyecto-formativo/`

`practica/` y `desafios/` no existen como verticales raíz.

## `semanas/`

- `semanas/README.md` actúa como índice general.
- Se crean carpetas `semana-01` a `semana-18` progresivamente, a medida que avanza el semestre.
- Cada semana posee un `README.md` que resume objetivos, materias, recursos asociados y navegación.
- Cada materia relevante se documenta en un `.md` separado.
- Cuando una materia requiere ampliación más allá del mínimo curricular, se crea una subcarpeta específica con su propio `README.md` e índice.
- El contenido semanal debe poder estudiarse sin depender de haber ejecutado un laboratorio o el proyecto formativo.

## `labs/`

- `labs/README.md` mantiene el índice y resumen de laboratorios.
- Existe un laboratorio principal por semana cuando corresponde.
- Cada `labs/semana-XX/README.md` debe indicar propósito, objetivos, resultado esperado, contenidos relacionados de la semana, conocimientos previos y dependencias.
- Cada laboratorio se divide en **incrementos de resultados observables**, con cantidad variable de `.md` según la complejidad, no por plantilla fija.
- Dentro de cada incremento, usar **tantos pasos explícitos como demande el aprendizaje** y el nivel de ayuda requerido; los pasos no son necesariamente incrementos distintos.
- Cada incremento incluye un **checkpoint ejecutable/verificable** que indique qué debe observar el estudiante antes de continuar.
- El detalle del acompañamiento es adaptativo: más guía ante herramientas/conceptos nuevos y mayor autonomía cuando el alumno ya los domina, conservando requisitos y criterios de aceptación claros.
- Véase [Estándar incremental DSY1102](ESTANDAR-DISENO-PEDAGOGICO-INCREMENTAL.md) como norma local compatible con el canon transversal.
- Los laboratorios semanales oficiales son **autónomos entre semanas**: no exigen proyectos, código ni entregas de otro lab. Las etapas de un mismo laboratorio sí forman una secuencia. La única vertical longitudinal obligatoria es `proyecto-formativo/` (PetCare). Las antiguas Veterinaria I–IV se conservan como prácticas históricas opcionales, separadas de la ruta oficial.
- Se prioriza implementación local, scaffolding reproducible y servicios gratuitos cuando aporten al contenido.

## `ejemplos/`

- `ejemplos/README.md` actúa como índice general.
- Los ejemplos se agrupan por semana.
- Cada ejemplo demuestra una sola idea o una combinación mínima estrictamente necesaria.
- Deben ser cortos, concretos, ejecutables e independientes.
- No se utiliza el proyecto formativo como ejemplo genérico salvo que el objetivo sea explicar explícitamente una parte del proyecto.

## `ejercicios/`

- `ejercicios/semana-XX/README.md` es el **enunciado canónico** del banco mínimo semanal.
- Un ejercicio demuestra **una habilidad focal** en el problema más pequeño que exija decisión, implementación y prueba observable; **mínimo no equivale a trivial**.
- Cada ejercicio comunica contexto, comportamiento, datos de prueba/resultado esperado, límite, restricción curricular y pista proporcional; no exige de forma automática varias clases, evidencias extensas o proyecto nuevo.
- El número de ejercicios semanal es variable y se justifica por la cobertura de conceptos; no existe una cuota.
- Los talleres de varias etapas y el código integrador se conservan claramente reclasificados sin confundirse con el ejercicio mínimo.
- El portal sirve como índice hacia el `README` canónico, no mantiene otra versión editorial activa.
- Véase el [estándar de ejercicios mínimos](ESTANDAR-EJERCICIOS-MINIMOS-DSY1102.md).

## `proyecto-formativo/`

- `proyecto-formativo/README.md` documenta el proyecto longitudinal y su roadmap.
- Cada semana crea una carpeta `semana-XX/`.
- La semana N depende de haber completado N-1.
- Cada semana comienza con checklist de inicio y termina con checklist de finalización.
- La implementación se divide en varios `.md` secuenciales alineados con las materias enseñadas esa semana.
- Aquí se utilizan explícitamente las tecnologías, servicios y plataformas indicadas por la asignatura.

## Práctica y desafíos

La práctica se clasifica por intención pedagógica:

- demostración mínima → `ejemplos/`;
- ejercicio directamente asociado a una materia → `ejercicios/semana-XX/`, con enlace desde la semana curricular;
- actividad guiada sustancial → `labs/` (o taller histórico señalizado como complementario);
- integración acumulativa → `proyecto-formativo/`.

Los desafíos pueden vivir en el portal web del curso. No deben duplicarse mecánicamente en el repositorio. Las semanas pueden enlazarlos como práctica autónoma complementaria.

## GitHub Pages

Por política de bypass financiero, el portal no se despliega mediante GitHub Actions.

Modelo vigente:

```text
master/semanas/, master/labs/, master/ejemplos/, master/ejercicios/, master/proyecto-formativo/  fuentes canónicas didácticas
gh-pages/(root)     superficie estática derivada de lectura/navegación
```

Configuración esperada en GitHub:

```text
Settings
└── Pages
    └── Build and deployment
        ├── Source: Deploy from a branch
        ├── Branch: gh-pages
        └── Folder: / (root)
```

La rama `gh-pages` contiene la superficie estática de navegación y lectura publicada. El contenido didáctico normativo se mantiene en las verticales Markdown de `master` y se **enlaza** desde `gh-pages`. No se crea `master/page/` como fuente paralela ni se duplican en HTML los enunciados canónicos. Antes de publicar, revisar que las páginas correspondan a los contenidos de `master`.

No deben existir workflows de GitHub Actions cuya función sea desplegar Pages.
