# Arquitectura del sitio DSY1102

## Objetivo

Separar publicación, presentación, interacción y reglas funcionales. Ningún HTML debe contener lógica de negocio ni estilos de página significativos.

## Estructura canónica

```text
/
├── index.html                       # compatibility entrypoint solamente
├── assets/
│   ├── img/
│   │   └── .gitkeep
│   ├── css/
│   │   ├── global.css
│   │   └── pages/
│   │       └── <feature>.css
│   └── js/
│       ├── global.js
│       ├── business/
│       │   └── <domain>/
│       │       └── *.js
│       └── pages/
│           └── <feature>.js
└── pages/
    ├── home/
    ├── weeks/
    ├── labs/
    │   ├── index/
    │   ├── veterinary-inheritance/
    │   └── veterinary-collections/
    ├── exercises/
    │   ├── class-practice/
    │   └── challenge-150/
    ├── challenges/
    │   ├── weekly/
    │   ├── oop-100/
    │   ├── javafx-25/
    │   └── database-25/
    ├── project/
    │   └── petcare/
    ├── progress/
    └── student-repository/
```

## Responsabilidades por capa

### `pages/**/index.html`

Sólo estructura semántica y composición de la vista:

- contenido estático;
- landmarks HTML;
- referencias a `assets/css/global.css`;
- referencia a un CSS específico de feature cuando exista;
- referencia al controlador JS de página cuando exista.

No debe contener:

- bloques `<style>` salvo una excepción documentada;
- lógica de dominio;
- persistencia `localStorage`;
- reglas de desbloqueo/progreso;
- bancos de ejercicios/hints;
- fetch a `raw.githubusercontent.com`.

### `assets/css/global.css`

Design tokens y componentes reutilizables: tipografía, layout, navegación, tarjetas, botones, badges, mensajes, estados y responsive base.

### `assets/css/pages/*.css`

Sólo estilos propios de una feature o página. No replica reglas globales.

### `assets/js/global.js`

Utilidades de presentación compartidas y sin reglas de negocio: DOM helpers, navegación, clipboard y utilidades de URL.

### `assets/js/pages/*.js`

Controladores/adapters de UI:

- listeners DOM;
- renderizado;
- traducción de eventos UI a operaciones del dominio;
- importación de módulos `business`.

No debe contener reglas de negocio persistentes.

### `assets/js/business/**`

Lógica independiente de la página:

- modelos de estado;
- validaciones;
- cálculo de progreso;
- desbloqueos;
- serialización/import/export;
- bancos de datos e hints;
- reglas de dominio.

No debe depender del DOM.

## Compatibilidad

Las URLs históricas de raíz se mantendrán temporalmente como redirects mínimos hacia `pages/**`. Esos archivos no son implementación ni pueden contener lógica.

## Reglas de publicación

1. `master/page/` no existe y no debe recrearse.
2. Los recursos del sitio se resuelven localmente dentro de `gh-pages`.
3. No se permite depender de `raw.githubusercontent.com` para recursos de runtime propios del sitio.
4. Dependencias CDN externas deben ser explícitas y versionadas.
5. Un feature nuevo se publica bajo `pages/<feature>/` y sus assets bajo `assets/`.
6. Cada HTML de feature debe poder identificar inequívocamente su CSS y controlador de página.
