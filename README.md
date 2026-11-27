# DSY1102 · Desarrollo Orientado a Objetos · 2026-2

Repositorio docente de apoyo para **DSY1102 Desarrollo Orientado a Objetos**.

## Recursos del curso

- [Ruta de recursos por semana](docs/RUTA-RECURSOS-DSY1102.md): conocimiento, práctica y proyectos en los productos ADÜMÜN.
- [Academy](https://academy.adumun.cl/) · [Academic Labs](https://academic-labs.adumun.cl/).
- [Clase consolidada Unidad 2 · fuentes originales](clases/unidad-02/capsula-tiempo-fx/README.md).

## Estructura canónica

El material de aprendizaje distingue **cinco verticales pedagógicas**, más documentación transversal y datos operativos:

```text
/
├── semanas/             contenido curricular y ampliaciones por semana
├── labs/                laboratorios guiados paso a paso
├── ejemplos/            ejemplos mínimos, concretos e independientes
├── ejercicios/          práctica breve, refuerzo y desafíos
├── proyecto-formativo/  proyecto incremental semana a semana
├── clases/              clases consolidadas y presentaciones web
├── docs/                documentación transversal
└── data/                metadatos auxiliares
```

### 1. `semanas/` — aprender

Cada semana tiene un `README.md` que funciona como índice y resumen. Cada materia se documenta en archivos Markdown separados. Los contenidos de ampliación, cuando exceden el mínimo del programa, se agrupan en subcarpetas con su propio `README.md`.

### 2. `labs/` — practicar guiado

Existe como máximo un laboratorio principal por semana. Debe ser reproducible, explícito y paso a paso. Cada incremento incluye un **checkpoint verificable**. Los laboratorios oficiales son **autónomos entre semanas**: cada uno crea su proyecto, sin reutilizar entregas anteriores. Dentro del mismo laboratorio, el código evoluciona en **tantos incrementos funcionales como requiera el problema**, con pasos guiados y checkpoints.

El [estándar de diseño pedagógico incremental](docs/ESTANDAR-DISENO-PEDAGOGICO-INCREMENTAL.md) y su [matriz de laboratorios](docs/MATRIZ-INCREMENTOS-LABS-DSY1102-2026-2.md) explican cómo graduar las «rueditas» según la novedad del aprendizaje y por qué las etapas **no** tienen un número fijo.

### 3. `ejemplos/` — demostrar

Los ejemplos son ejecuciones individuales, breves e independientes. Cada ejemplo debe demostrar un concepto concreto sin arrastrar accidentalmente la arquitectura del proyecto formativo.

El [estándar de ejemplos](docs/ESTANDAR-EJEMPLOS-DSY1102.md) exige una idea focal, código ejecutable y comprobación observable, sin confundir demostraciones con soluciones integradoras.

### 4. `ejercicios/` — aplicar una habilidad mínima significativa

Cada `ejercicios/semana-XX/README.md` plantea problemas focalizados con restricciones y pruebas reproducibles. La cantidad depende de la cobertura de la semana, **no** de una cuota; no son mini-laboratorios. Véase el [estándar de ejercicios](docs/ESTANDAR-EJERCICIOS-MINIMOS-DSY1102.md).

### 5. `proyecto-formativo/` — integrar incrementalmente

Es un proyecto longitudinal. Cada semana depende de la anterior y contiene checklist de inicio, implementación secuencial por materia y checklist de finalización.

## Prácticas y desafíos

`practica/` y `desafios/` **no son verticales raíz**.

- práctica mínima o demostrativa → `ejemplos/` o material de la semana;
- práctica breve de aplicación → `ejercicios/`;
- desafío de mayor autonomía → material docente o Academic Labs, según alcance, sin duplicar el banco canónico;
- práctica guiada sustancial → `labs/`;
- desafíos destacados → evaluar su adaptación a Academic Labs sin duplicar las fuentes.

## Publicación y mantenimiento

El portal docente independiente se retira del flujo de mantenimiento. `master` conserva el material curricular; la orientación semanal vive en el [índice Markdown](docs/RUTA-RECURSOS-DSY1102.md). Academy y Academic Labs publican mediante sus propios flujos Cloudflare. GitHub Actions se utiliza para validación y pruebas, no para publicar este portal. La rama histórica se conserva sin nuevas entregas; no se requiere reintroducir `page/`.

Consulta [`docs/ESTRUCTURA-CANONICA.md`](docs/ESTRUCTURA-CANONICA.md) para la estructura del material; sus instrucciones históricas de publicación quedan superadas por esta decisión (ADU-231).

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

## Extensión práctica de la clase Cápsula del Tiempo: JDBC

- [Guías R07–R08 · JavaFX + MariaDB + JDBC](clases/unidad-02/capsula-tiempo-fx/jdbc/README.md) — configuración paso a paso, INSERT y validación, SELECT/ResultSet y TableView; enlaces directos a fuentes Java/SQL. Complementan, sin modificar, las slides R00–R06.

## Unidad 3 · Guías complementarias JDBC y DAO
- [Semana 13](semanas/semana-13/README.md) · [Semana 14](semanas/semana-14/README.md) · [Mini referencias](semanas/semana-13/referencias.md).


- [Refuerzo para la evaluación Unidad 3](semanas/semana-14/preparacion-evaluacion/README.md)
