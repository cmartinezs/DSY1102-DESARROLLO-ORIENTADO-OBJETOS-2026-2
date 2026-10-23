# Auditoría y corrección de ejemplos · DSY1102 · 23 octubre 2026

**Estado:** conciliación editorial y técnica de fuentes aplicada; validación de compilación y ejecución **pendiente de resultado verificable**.

## Alcance

Se revisaron los índices y programas en `ejemplos/semana-01..09`, los recursos pedagógicos semanales y las dependencias de demos. Se completaron ejemplos donde existía brecha efectiva: semanas 05, 07 (mínimos), 10 y 11.

## Hallazgos y tratamiento

| Hallazgo | Acción ejecutada |
|---|---|
| 15 fuentes con clase `public` cuyo nombre no coincidía con el archivo (03 de semana 02, 05 de semana 03 y 07 de semana 06) | Nuevos archivos canónicos con nombre correcto; rutas numeradas preservadas con clases `Legacy` distintas, sin colisión con las canónicas. |
| Clases auxiliares duplicadas: `Producto` semana 02, `Cuenta` y `Punto` semana 04 | Nombres propios en cada demostración, manteniendo su contenido y objetivo. |
| Semana 03 adelantaba constructores pese a corte real del 29-08-2026 | Nuevos ejemplos canónicos de objetos/estado con constructor implícito; variantes originales permanecen marcadas históricas. |
| Semana 04 mezclaba demostración mínima y refactorización intencional | README explicita dependencia `LectorConsola` y las clases `Main` que se ejecutan; conservar secuencia 05–07. |
| Semana 07 solo tenía MediaHub, proyecto integrador | 3 ejemplos focales nuevos y MediaHub conservado como referencia de integración, no ejemplo atómico. |
| Brecha semanas 05, 10 y 11 | Herencia; dos microdemos JavaFX Maven (Tabla y FXML); serialización, deserialización y DAO con Jackson en proyecto Maven autónomo. |
| Semana 08 `List+Set+Map` podía desincronizarse con ISBN repetido | Rechazo previo a mutaciones; se presenta como ejemplo integrador opcional, con nota sobre orden indeterminado de HashSet/HashMap. |
| Semana 09 botón decía «Registrar» sin almacenamiento | Renombrado a «Verificar» y aclarado que solo valida una patente. |
| Índice de ejemplos solo cubría semanas existentes hasta 09 | `ejemplos/README.md`, `pages/examples/`, home y navegación semanal apuntan a 01–11. |

## Norma resultante

[Estándar de ejemplos DSY1102](ESTANDAR-EJEMPLOS-DSY1102.md): concepto focal, configuración explícita, código Java válido, salida observable, pregunta de observación, sin resolver el ejercicio ni disfrazar integración como ejemplo mínimo.

## Verificación técnica y límites

- Los nombres canónicos y clases públicas de las semanas 02, 03 y 06 fueron inspeccionados tras la modificación.
- Se creó [script verificable](../scripts/verificar-ejemplos.sh) para compilar **Java puro semanas 01–08 por separado** y compilar con Maven los proyectos de semanas 09–11.
- Se incorporó [workflow de GitHub Actions](../.github/workflows/verificar-ejemplos.yml) que ejecuta el script con JDK 21 al modificar los ejemplos.
- En este entorno se verificó que está instalado JDK 21, **pero no Maven ni resolución de red hacia GitHub**, por lo que no se ejecutó aquí el repositorio completo. No se obtuvo un resultado comprobado del workflow automático desde las herramientas disponibles.
- Ejecutar visualmente JavaFX (abrir, navegar, añadir fila) y funcionalmente JSON (guardar, cerrar/leer, caso ausente/corrupto) sigue siendo un criterio de aceptación pendiente. Un `mvn compile` verde no certifica esas pruebas.
- Las fuentes institucionales adicionales de semana 11 no se declaran conciliadas si no se han revisado sus originales.

## Próximo cierre técnico

1. Abrir [GitHub Actions · Verificar ejemplos DSY1102](https://github.com/cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/actions/workflows/verificar-ejemplos.yml) y confirmar resultado concreto. Corregir cualquier fallo antes de declarar compilación verde.
2. Probar interacciones JavaFX de semanas 09–10 y guardar/leer JSON semana 11.
3. Hacer recorrido del portal con navegación real, no solo existencia de archivos.
4. Registrar evidencia técnica por semana en checklist docente.

**No se alteraron entregas de estudiantes ni el proyecto formativo PetCare.**
