# Estructura canónica del repositorio docente · DSY1102

Este documento define la organización vigente del repositorio docente y prevalece sobre convenciones anteriores que entren en conflicto con él.

## Verticales principales

El material de aprendizaje se divide en cuatro verticales independientes:

1. `semanas/`
2. `labs/`
3. `ejemplos/`
4. `proyecto-formativo/`

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
- Un laboratorio se divide en varios `.md` secuenciales; evitar un único archivo excesivamente largo.
- Cada paso debe ser explícito, incluso si parece obvio.
- Cada paso incluye un **checkpoint** que indica qué debe verificar el estudiante antes de continuar.
- Por defecto los labs son independientes. Una dependencia de un laboratorio previo sólo se acepta cuando sea excluyente y debe declararse explícitamente.
- Se prioriza implementación local, scaffolding reproducible y servicios gratuitos cuando aporten al contenido.

## `ejemplos/`

- `ejemplos/README.md` actúa como índice general.
- Los ejemplos se agrupan por semana.
- Cada ejemplo demuestra una sola idea o una combinación mínima estrictamente necesaria.
- Deben ser cortos, concretos, ejecutables e independientes.
- No se utiliza el proyecto formativo como ejemplo genérico salvo que el objetivo sea explicar explícitamente una parte del proyecto.

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
- ejercicio directamente asociado a una materia → dentro de la semana correspondiente;
- actividad guiada sustancial → `labs/`;
- integración acumulativa → `proyecto-formativo/`.

Los desafíos pueden vivir en el portal web del curso. No deben duplicarse mecánicamente en el repositorio. Las semanas pueden enlazarlos como práctica autónoma complementaria.

## GitHub Pages

Por política de bypass financiero, el portal no se despliega mediante GitHub Actions.

Modelo vigente:

```text
master/page/        fuente editable del portal
gh-pages/(root)     contenido estático publicado
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

La rama `gh-pages` contiene exclusivamente el artefacto estático necesario para publicar el portal. La fuente canónica se modifica en `master/page/` y luego se sincroniza a `gh-pages`.

No deben existir workflows de GitHub Actions cuya función sea desplegar Pages.
