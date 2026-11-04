# DSY1102 · Unidad 2 consolidada · Cápsula del Tiempo FX

## Evolución de entregas (24 octubre 2026)

Presentación HTML/CSS/JavaScript **incremental** para dos bloques de 40 minutos de DSY1102. La presentación publicada incluye R00–R04 con sus capturas originales y R05 con evidencia docente de Service, DAO y JSON. Las pruebas de recuperación robusta y corrupción se reservan para R06.

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

Se incorporaron slides R04 sobre dos vistas FXML y estado compartido en memoria. El código completo ya no depende de pantallazos: [matriz de snapshots R00–R04](CODIGO-POR-INCREMENTO.md), con cada commit histórico y el ZIP de esa versión del proyecto [DSY1102-JFX-TIME-CAPSULE](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE). Las diez capturas **originales** de R04 (archivos 33–42) están restauradas y publicadas en ambas ramas, sin sustituirlas por ilustraciones SVG. Los vínculos al código de R00–R04 siguen apuntando a commits fijos. R05 integra Service, DAO y persistencia JSON.


### Fotografías originales restauradas de R04

Se recuperaron los WebP originales `assets/33-r04-*` a `assets/42-r04-*` desde Entrega 05. La secuencia de diapositivas R04 también se restauró del JavaScript original de esa entrega; las SVG recreadas ya no se usan en la presentación. Las capturas pueden consultarse dentro del portal y en las carpetas `assets/` de `master` y `gh-pages`.


## Entrega 06–07 · R05 Service, DAO y JSON (3 noviembre 2026)

La presentación `slides.js` incluye la secuencia narrativa de R05 original: necesidad de persistencia, responsabilidades, contrato DAO, implementación JSON con Jackson, actualización de Maven, registro en la UI y verificación del JSON con uno y dos mensajes. El material usa once capturas reales del docente, referenciadas como `assets/r05-01.webp` a `assets/r05-11.webp`.

**Estado editorial actual:** fuentes HTML y las 11 capturas reales de R05 están publicadas tanto en `master` como en `gh-pages`, junto con los 10 originales de R04. El código de presentación fue corregido para mostrar saltos de línea auténticos en los snippets. Jackson **2.22.4** está confirmado en el POM remoto de la rama de aplicación. Los enlaces R05 siguen apuntando a la rama de implementación hasta fijar el snapshot de aceptación. La ejecución de tests y la recuperación después de reiniciar aún requieren evidencia.

**Siguiente:** R06 — pruebas de recuperación, corrupción y respaldos, sin rehacer R05.
