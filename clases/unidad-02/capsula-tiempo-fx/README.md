# DSY1102 · Unidad 2 consolidada · Cápsula del Tiempo FX

## Evolución de entregas (24 octubre 2026)

Presentación HTML/CSS/JavaScript **incremental** para dos bloques de 40 minutos de DSY1102. La versión local actual comprende **R00, R01 y R02 validados** con capturas reales. El roadmap R03–R06 orienta lo que falta por construir; esas fases aún no están implementadas.

## Abrir

Abre `index.html` en un navegador actual; también puedes usar un servidor estático con `python -m http.server 8000`. Navega con flechas, barra espaciadora, botones inferiores o índice con `G`. `N` alterna notas docentes, `F` pantalla completa, clic en una captura la amplía y `Copiar código` lleva los snippets al portapapeles (requiere HTTPS/localhost para portapapeles).

## Estructura

```
index.html        shell accesible y navegación
styles.css        diseño responsive de proyección
slides.js         32 slides, requisitos, explicación y checkpoints
assets/           25 capturas reales de IntelliJ, ordenadas cronológicamente
docs/             decisiones docentes y capturas/checkpoints
```

## Estado técnico

- Confirmado por captura: JavaFX abre la ventana Hello! tras corregir Maven.
- Captura del POM registra el **error original** `<source>8</source>` / `<target>8</target>`; la corrección es `<release>21</release>`.
- `MensajeFuturo` y `TableView` cuentan con pruebas capturadas. El formulario, DAO y JSON aún no están implementados; no presentarlos como validados.
- Ruta preparada para publicación en `gh-pages/pages/classes/capsula-tiempo-fx/` y fuente de trabajo en `master/clases/unidad-02/capsula-tiempo-fx/`.

## Capturas originales

Se conservan en esta carpeta veinticinco capturas optimizadas sin cambiar su significado; los archivos originales entregados por el docente permanecen en la conversación.


## Entrega 02 · R01 validado

Se incorporaron capturas reales del 24-10-2026 (12:26:30–12:29:40): creación de paquete/clase, constructor y getters, clase PruebaMensaje, ejecución de main y resultado exitoso. Se ordenaron cronológicamente sin invertir el contenido de las imágenes. R02 permanece como siguiente incremento por construir.


## Entrega 04 · R03 validado (27-10-2026)

Se incorporaron siete capturas reales (20:51:34–20:53:24), ordenadas por tiempo: FXML del formulario, imports, controles @FXML, método agregarMensaje, formulario completado, registro exitoso y validación de campos vacíos. R03 utiliza un único FXML y el estado continúa en memoria: el texto «Guardar» aún no implica persistencia. R04 es navegación entre vistas, pendiente.


## Entrega 05 · R04 y snapshots del código (27 octubre 2026)

Se incorporaron slides R04 sobre dos vistas FXML y estado compartido en memoria. El código completo ya no depende de pantallazos: [matriz de snapshots R00–R04](CODIGO-POR-INCREMENTO.md), con cada commit histórico y el ZIP de esa versión del proyecto [DSY1102-JFX-TIME-CAPSULE](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE). Las diez capturas **originales** de R04 están preservadas en el ZIP descargable; en GitHub Pages la presentación conserva imágenes didácticas de respaldo (SVG) mientras esas fotografías no estén alojadas allí. Los vínculos al código siguen apuntando a commits fijos. Lo próximo es un Service didáctico (R05), no DAO/JSON ya terminado.


### Respaldo ilustrativo R04

Las slides web mantienen imágenes junto al contenido y enlaces al código de cada etapa. Para R04 se agregaron ilustraciones SVG de respaldo que se muestran cuando la fotografía original no está disponible en la web; no son capturas de IntelliJ. El ZIP completo conserva los archivos WebP originales `assets/33-...` a `assets/42-...`. Los enlaces GitHub a snapshots R00–R04 están activos de forma independiente.
