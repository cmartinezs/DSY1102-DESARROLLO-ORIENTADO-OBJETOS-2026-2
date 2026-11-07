# Evidencias reales R06 · Cápsula del Tiempo FX

**Entrega HTML 09 · 7 de noviembre de 2026**  
Esta matriz vincula los archivos originales proporcionados por el docente con la narrativa pedagógica publicada. **Ninguna imagen se generó ni se reconstruyó mediante IA.** Los 15 recursos permanecen en las carpetas `assets/` de `master` y `gh-pages`.

| Archivo publicado | Etapa | Qué acredita | Precisión |
| --- | --- | --- | --- |
| `r06-01.png` | Antes de reiniciar | JSON con dos registros de Carlos | Cierre/recuperación: contexto |
| `r06-02.png` | Reinicio | TableView con dos registros recuperados | Reinicio confirmado por docente |
| `r06-03.png` | Validar al leer | Código listar + anyMatch | Código fotografiado |
| `r06-04.png` | Guardar seguro | Temporal, .bak, Files.move | Código fotografiado |
| `r06-05.png` | Tercer registro | Formulario con texto '3er registro' | Alta ingresada |
| `r06-06.png` | Tercer registro en UI | Tres mensajes en TableView | Alta en interfaz |
| `r06-07.png` | JSON actual | Tres mensajes en archivo | Archivo actual |
| `r06-08.png` | Respaldo previo | mensajes.json.bak con dos mensajes | Respaldo previo |
| `r06-09-mapper-estricto.png` | Configuración estricta | JsonMapper.builder + STRICT_DUPLICATE_DETECTION | Código real |
| `r06-10-alerta-duplicados.png` | Rechazo al iniciar | JSON con claves duplicadas y alerta de error | Error en arranque |
| `r06-11-copias-corruptas.png` | Diagnóstico | Archivo .corrupt junto a principal y .bak | Archivos creados |
| `r06-12-json-restaurado.png` | Restauración manual del archivo | JSON válido con dos mensajes; copias conservadas | No muestra reinicio posterior |
| `r06-13-intento-registrar.png` | Modificación externa durante ejecución | Formulario con texto Intento | Intento; no prueba guardado |
| `r06-14-error-guardado.png` | Guardar bloqueado | Alerta de error ante JSON dañado | Error mostrado |
| `r06-15-tests-maven.png` | Pruebas automatizadas | 13 tests de R06RecuperacionTest, 0 fallos, BUILD SUCCESS | Verificado por captura |

## Secuencia narrativa

1. **Problema:** el contenido debe persistir y volver al reiniciar JavaFX (R06-01 y 02).
2. **Responsabilidades:** lectura validada con `Stream.anyMatch`, escritura temporal y respaldo `.bak` (R06-03 y 04).
3. **Verificación:** tercera alta en formulario/tabla, JSON actualizado y copia anterior (R06-05 a 08).
4. **Hallazgo real:** claves repetidas dentro del mismo objeto; `JsonMapper` adopta `STRICT_DUPLICATE_DETECTION` (R06-09).
5. **Fallo controlado:** se rechaza al iniciar el JSON ambiguo y se conserva la copia diagnóstica (R06-10 y 11).
6. **Recuperación explícita:** el JSON principal vuelve a contener dos mensajes válidos, conservando las copias del error (R06-12).
7. **Protección en ejecución:** intento de registro seguido de una alerta que impide guardar sobre un archivo dañado (R06-13 y 14).
8. **Verificación automatizada:** 13 pruebas JUnit de R06 sin fallos, salida Maven `BUILD SUCCESS` (R06-15).

## Aceptación y límites

Quedó verificada visualmente la recuperación tras reiniciar en el escenario inicial, la creación de respaldo, el rechazo de claves duplicadas y el bloqueo del guardado con archivo corrupto. Las **13 pruebas de `R06RecuperacionTest`** aparecen aprobadas en la captura original.

**No afirmar:** que el programa recupera automáticamente `.bak` (no lo hace), que las capturas muestran el contenido del archivo corrupto completo, que existe atomicidad garantizada en todos los sistemas de archivos o que hay evidencia de un reinicio *posterior* a la restauración R06-12. El PR de R06 permanece sujeto a revisión/merge por separado.

## Código y material complementario

- [Presentación HTML](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/classes/capsula-tiempo-fx/)
- [PR R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/pull/2)
- [JsonMensajeDao.java](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/main/java/cl/duoc/dsy1102/timecapsule/dao/JsonMensajeDao.java)
- [Pruebas R06](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/blob/feat/dsy1102-r06-json-recovery/src/test/java/cl/duoc/dsy1102/timecapsule/dao/R06RecuperacionTest.java)
- [Guía de Streams y lambdas](GUIA-STREAMS-LAMBDAS-R06.md)
- [Guía de Path/Files y NIO.2](GUIA-NIO2-PATH-FILES-R06.md)

**Estado:** materiales HTML y evidencia docente publicables; validar despliegue efectivo de GitHub Pages tras la actualización de `gh-pages`.
