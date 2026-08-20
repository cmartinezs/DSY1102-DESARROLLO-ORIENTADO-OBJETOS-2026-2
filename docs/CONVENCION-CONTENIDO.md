# Convención transversal de contenido didáctico

Esta asignatura organiza el material con **lectura por capas**. El objetivo es que un estudiante pueda comprender un tema leyendo su `README.md` y, cuando necesite mayor profundidad, acceder a documentos especializados sin que el flujo principal dependa de ellos.

## Regla principal

> Un tema relevante se modela como una unidad autocontenida. Su `README.md` debe ser suficiente para comprender el tema; los documentos secundarios existen para profundizar.

No todo concepto debe convertirse en carpeta. La estructura crece de forma orgánica según complejidad pedagógica.

## Niveles de complejidad

### Tema pequeño

```text
tema.md
```

### Tema mediano

```text
tema/
├── README.md
├── 01-subtema.md
├── 02-subtema.md
└── 03-errores-frecuentes.md
```

### Tema complejo

```text
tema/
├── README.md
├── 01-concepto-base.md
└── 02-subtema-complejo/
    ├── README.md
    ├── 01-parte.md
    └── 02-parte.md
```

## Responsabilidad del README

El `README.md` debe poder leerse por sí solo e incluir, cuando corresponda:

1. objetivo de aprendizaje;
2. problema o contexto;
3. conceptos fundamentales;
4. flujo o proceso general;
5. ejemplo contextualizado;
6. conceptos que se deben recordar;
7. errores frecuentes;
8. preguntas de comprobación;
9. enlaces de profundización;
10. siguiente paso práctico.

## Regla de navegación

Nunca obligar al estudiante a abrir varios archivos para comprender el flujo principal.

Los enlaces secundarios deben responder a:

> "Entendí la idea general y quiero profundizar esta parte."

## Etiqueta de profundización

```markdown
> **Si quieres profundizar:** revisa [Nombre del subtema](ruta/al/documento.md).
```

## Numeración

Usar `01-`, `02-`, `03-`, etc. cuando exista un orden pedagógico recomendado.

## Relación entre material

```text
COMPRENDER  → README del tema
PROFUNDIZAR → documentos secundarios
OBSERVAR    → ejemplos
APLICAR     → laboratorios / desafíos / proyecto formativo
```

## Cuándo dividir

Considerar migrar un `.md` a carpeta cuando:

- mezcla varios conceptos consultables por separado;
- contiene secciones extensas con ejemplos propios;
- navegar el documento se vuelve incómodo;
- aparecen dudas recurrentes sobre una sección;
- requiere separar explicación conceptual, sintaxis, ejemplos y errores frecuentes.

El tamaño por sí solo no obliga a dividir: prima la coherencia pedagógica.

## Principio editorial

El repositorio debe funcionar como **documentación técnica educativa** y ofrecer un recorrido progresivo:

```text
orientación → comprensión → profundización → aplicación
```

Esta convención aplica al material nuevo y se adoptará progresivamente en contenido existente cuando sea modificado o cuando su complejidad lo justifique.
