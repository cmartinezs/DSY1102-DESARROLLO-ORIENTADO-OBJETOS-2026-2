# Convención transversal de contenido didáctico

Esta asignatura organiza el material con **lectura por capas**. El objetivo es que cada tema tenga un **archivo Markdown base suficiente para la asignatura** y, cuando el estudiante quiera profundizar, pueda acceder a una carpeta asociada con material extendido.

## Regla principal

> **La carpeta no reemplaza al `.md` base: lo expande.**

El archivo individual del tema debe contener todo lo necesario para comprender los conceptos, vocabulario, relaciones y flujo exigidos por la asignatura. Un estudiante que estudie solamente ese `.md` debe disponer de la base académica requerida.

La carpeta asociada es una segunda capa opcional: explica con más detalle partes del tema, responde dudas frecuentes, desarrolla procesos paso a paso, incorpora ejemplos adicionales o profundiza aspectos técnicos.

## Modelo canónico

### Tema pequeño

```text
01-tema.md
```

### Tema con profundización

```text
01-tema.md                 ← BASE: suficiente para la asignatura
01-tema/                   ← PROFUNDIZACIÓN: opcional
├── README.md              ← mapa de la profundización
├── 01-subtema.md
├── 02-subtema.md
└── 03-errores-frecuentes.md
```

### Subtema complejo dentro de la profundización

```text
01-tema.md
01-tema/
├── README.md
├── 01-concepto.md
└── 02-subtema-complejo/
    ├── README.md
    ├── 01-parte.md
    └── 02-parte.md
```

## Responsabilidad del `.md` base

El archivo individual es el material principal y debe poder leerse por sí solo. Debe incluir, cuando corresponda:

1. objetivo de aprendizaje;
2. problema o contexto;
3. conceptos fundamentales;
4. sintaxis o reglas esenciales;
5. ejemplo sencillo;
6. relaciones importantes entre conceptos;
7. errores o confusiones fundamentales;
8. conceptos que el estudiante debe recordar;
9. vínculo hacia la profundización, si existe;
10. siguiente paso práctico.

El `.md` base puede ser resumido respecto de la carpeta, pero **no puede ser incompleto respecto de lo que la asignatura espera que el estudiante aprenda**.

## Responsabilidad de la carpeta de profundización

La carpeta existe para desarrollar con más detalle:

- por qué funciona una construcción;
- qué ocurre paso a paso;
- más ejemplos y contraejemplos;
- errores frecuentes;
- comparaciones con conceptos anteriores;
- variantes de implementación;
- detalles que ayudan a un estudiante interesado sin aumentar innecesariamente la carga base.

Su `README.md` actúa como mapa de profundización, no como reemplazo del material principal.

## Regla de navegación

```text
.md base
   │
   ├── suficiente para aprender lo requerido
   │
   └── "Si quieres profundizar..."
             ↓
        carpeta asociada
             ↓
        detalles específicos
```

Nunca obligar al estudiante a abrir la carpeta para entender la base exigida.

## Etiqueta de profundización

```markdown
> **Si quieres profundizar:** este tema cuenta con material extendido en [Profundización: Nombre del tema](./01-tema/README.md).
```

## Correspondencia de nombres

Siempre que sea razonable, el archivo y la carpeta comparten el mismo nombre base:

```text
01-clases-y-objetos.md
01-clases-y-objetos/
```

En material histórico que ya existe con nombres como `CLASE-01.md`, se conserva el nombre original y la carpeta homónima se utiliza como expansión opcional:

```text
CLASE-01.md
CLASE-01/
```

## Relación entre material

```text
APRENDER LA BASE → archivo .md del tema
PROFUNDIZAR      → carpeta homónima
OBSERVAR         → ejemplos
APLICAR          → ejercicios / laboratorios / desafíos / proyecto formativo
```

## Cuándo crear una carpeta de profundización

Agregarla cuando:

- un concepto necesita explicación paso a paso;
- aparecen dudas recurrentes;
- existen detalles útiles pero no indispensables;
- hacen falta comparaciones o ejemplos adicionales;
- desarrollar todo en el `.md` sobrecargaría innecesariamente la lectura obligatoria.

El tamaño del documento por sí solo no obliga a crear una carpeta.

## Aplicación retroactiva

Esta convención se aplica también al material ya publicado. Al revisar semanas anteriores:

- se conserva el `.md` base existente;
- no se elimina ni se traslada fuera de él contenido necesario para la asignatura;
- se agrega una carpeta homónima cuando exista profundidad real que justifique una segunda capa;
- se incorporan enlaces de profundización desde los índices y, cuando corresponda, desde el propio documento base.

La retroactividad aplica a **material didáctico/conceptual**. No se crean carpetas homónimas de forma mecánica para:

- planificaciones;
- resúmenes de clase;
- actividades o bancos de ejercicios;
- dinámicas;
- laboratorios;
- documentos operativos.

Estos artefactos mantienen su estructura propia salvo que contengan un tema didáctico que, por sí mismo, necesite expansión.

## Principio editorial

El repositorio debe funcionar como **documentación técnica educativa de profundidad progresiva**:

```text
base obligatoria → profundización voluntaria → observación → aplicación
```

La profundidad puede crecer tanto como resulte útil, pero nunca a costa de vaciar el archivo principal.
