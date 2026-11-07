# 04 · Memoria, archivo y recuperación: tres estados diferentes

**Microcápsula · DSY1102 Unidad 2 · 10–15 min**  
**Pregunta:** ¿por qué veo mensajes en pantalla aunque el JSON esté roto?

## Escenario real de la clase
1. La aplicación inicia y lee `data/mensajes.json`.
2. `MensajeService` conserva los mensajes recuperados en una lista de memoria.
3. La `TableView` muestra una representación de esa lista.
4. Una persona cambia el contenido del archivo desde IntelliJ, **sin reiniciar JavaFX**.
5. La pantalla puede seguir mostrando los mensajes antiguos. **No significa que haya leído el archivo corrupto ni que haya cargado `.bak`.**

| Lugar | Qué contiene | Cuándo cambia |
| --- | --- | --- |
| Memoria del Service | Lista de objetos Java | Al inicializar o registrar válidamente |
| Vista JavaFX | Filas de TableView | Cuando se cargan/actualizan datos visuales |
| `mensajes.json` | Texto JSON en disco | Al editarlo o guardarlo desde el DAO |
| `mensajes.json.bak` | Versión anterior del texto | Cuando el DAO hace un nuevo guardado válido |

## Dos experimentos diferentes

**A. Recuperación:** cerrar completamente JavaFX → abrir otra vez → DAO lee el archivo → Service reconstruye la lista → se muestran las filas. Esta es la prueba de «los datos sobreviven al reinicio».

**B. Archivo modificado mientras JavaFX está abierto:** la vista puede seguir mostrando datos antiguos. Al intentar guardar, el DAO R06 **vuelve a leer y validar** el archivo; si cambia o está corrupto, cancela la escritura en vez de reparar silenciosamente desde memoria.

La aplicación no monitorea archivos en tiempo real. No hay `WatchService`, recarga automática, lectura de respaldo por defecto ni sincronización multiusuario.

## ¿Qué significa un respaldo?

`mensajes.json.bak` guarda la versión anterior al último guardado completado. No significa «el archivo más nuevo» ni «restauración automática». Una copia `.corrupt-*.json` es evidencia para investigar un archivo inválido; **no es una versión segura para recuperar**.

## Practica mentalmente
- Cambias el JSON mientras JavaFX está abierto. ¿La tabla tiene que cambiar sola? **No.**
- El archivo tiene `[]`. ¿El DAO debería cargar `.bak`? **No está implementado así.**
- El archivo tiene dos claves `"texto"` dentro de un objeto. ¿Qué hace R06? **El parser estricto lo rechaza.**
- ¿Qué necesitamos para comprobar recuperación después de restaurar? **Reiniciar y observar la tabla.**

**Profundiza:** [Guía NIO.2 de `Path` y `Files`](../../clases/unidad-02/capsula-tiempo-fx/docs/GUIA-NIO2-PATH-FILES-R06.md).  
**Siguiente:** [05 · Errores y excepciones](05-errores-validacion-y-excepciones.md).
