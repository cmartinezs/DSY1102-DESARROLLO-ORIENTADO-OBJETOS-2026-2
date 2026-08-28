# DSY1102 · Desarrollo Orientado a Objetos · 2026-2

Repositorio docente de apoyo para **DSY1102 Desarrollo Orientado a Objetos**.

## Portal del curso

- [Portal web](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/)
- [Semanas](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/semanas.html)
- [Laboratorios](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/laboratorios.html)
- [Proyecto formativo](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/proyecto-formativo.html)
- [Desafíos y ejercicios](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/desafio-semanal.html)

## Estructura canónica

El material de aprendizaje se organiza en **cuatro verticales independientes**:

```text
/
├── semanas/             contenido curricular y ampliaciones por semana
├── labs/                laboratorios guiados paso a paso
├── ejemplos/            ejemplos mínimos, concretos e independientes
├── proyecto-formativo/  proyecto incremental semana a semana
├── docs/                documentación transversal
├── data/                metadatos auxiliares
└── page/                fuente estática del portal web
```

### 1. `semanas/` — aprender

Cada semana tiene un `README.md` que funciona como índice y resumen. Cada materia se documenta en archivos Markdown separados. Los contenidos de ampliación, cuando exceden el mínimo del programa, se agrupan en subcarpetas con su propio `README.md`.

### 2. `labs/` — practicar guiado

Existe como máximo un laboratorio principal por semana. Debe ser reproducible, explícito y paso a paso. Cada paso incluye un **checkpoint verificable**. Los laboratorios son independientes salvo que una dependencia anterior sea técnicamente imprescindible; en ese caso debe declararse de forma explícita.

### 3. `ejemplos/` — demostrar

Los ejemplos son ejecuciones individuales, breves e independientes. Cada ejemplo debe demostrar un concepto concreto sin arrastrar accidentalmente la arquitectura del proyecto formativo.

### 4. `proyecto-formativo/` — integrar incrementalmente

Es un proyecto longitudinal. Cada semana depende de la anterior y contiene checklist de inicio, implementación secuencial por materia y checklist de finalización.

## Prácticas y desafíos

`practica/` y `desafios/` **no son verticales raíz**.

- práctica mínima o demostrativa → `ejemplos/` o material de la semana;
- práctica guiada sustancial → `labs/`;
- desafíos → preferentemente portal web del curso, enlazados desde la semana correspondiente cuando aplique.

## GitHub Pages · bypass financiero

GitHub Actions **no se utiliza para desplegar el portal**. La fuente editable permanece en `page/` sobre `master`; la publicación se realiza mediante la rama estática `gh-pages` usando **Settings → Pages → Deploy from a branch → `gh-pages` / `(root)`**.

Consulta [`docs/ESTRUCTURA-CANONICA.md`](docs/ESTRUCTURA-CANONICA.md) para las reglas completas.

## Repositorio personal del estudiante

Cada estudiante mantiene un único repositorio para toda la asignatura con formato:

```text
DSY1102-012V-nombre-apellido
```

El estándar se encuentra en [`docs/ESTANDAR-REPOSITORIO-ESTUDIANTE.md`](docs/ESTANDAR-REPOSITORIO-ESTUDIANTE.md).

## Clonar y actualizar

```bash
git clone https://github.com/cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2.git
cd DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2
```

```bash
git pull
```

> AVA continúa siendo la plataforma oficial para comunicaciones y recursos institucionales que correspondan.
