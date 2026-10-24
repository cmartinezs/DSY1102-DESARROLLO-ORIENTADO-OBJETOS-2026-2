# DSY1102 · Unidad 2 consolidada · Cápsula del Tiempo FX

## Primera entrega (24 octubre 2026)

Presentación HTML/CSS/JavaScript **incremental** para dos bloques de 40 minutos de DSY1102. El contenido publicado hasta ahora cubre **R00: crear y ejecutar JavaFX** y el caso real de diagnóstico del nivel Java 8 vs JDK 21. Los siguientes incrementos aparecen solo como roadmap; se completarán con el proyecto real y nuevas capturas.

## Abrir

Abre `index.html` en un navegador actual; también puedes usar un servidor estático con `python -m http.server 8000`. Navega con flechas, barra espaciadora, botones inferiores o índice con `G`. `N` alterna notas docentes, `F` pantalla completa, clic en una captura la amplía y `Copiar código` lleva los snippets al portapapeles (requiere HTTPS/localhost para portapapeles).

## Estructura

```
index.html        shell accesible y navegación
styles.css        diseño responsive de proyección
slides.js         13 slides, requisitos, explicación y checkpoint
assets/           10 capturas reales de IntelliJ, ordenadas cronológicamente
docs/             decisiones docentes y capturas/checkpoints
```

## Estado técnico

- Confirmado por captura: JavaFX abre la ventana Hello! tras corregir Maven.
- Captura del POM registra el **error original** `<source>8</source>` / `<target>8</target>`; la corrección es `<release>21</release>`.
- El modelo `MensajeFuturo` y la prueba `PruebaMensaje` están ejecutados y validados; todavía no se han implementado TableView, formulario, DAO ni JSON.
- Ruta preparada para publicación en `gh-pages/pages/classes/capsula-tiempo-fx/` y fuente de trabajo en `master/clases/unidad-02/capsula-tiempo-fx/`.

## Capturas originales

Se conservan en esta carpeta diez capturas optimizadas sin cambiar su significado; los archivos originales entregados por el docente permanecen en la conversación.

## Entrega 02 · R01 validado

Once capturas reales ordenadas de 12:26:30 a 12:29:40: creación del paquete y la clase, constructor/getters, prueba por `main` y salida correcta (`exit code 0`). La presentación ahora tiene 23 diapositivas. R02 permanece pendiente de implementación.
