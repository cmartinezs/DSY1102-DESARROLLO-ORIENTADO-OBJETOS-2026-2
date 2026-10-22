# 04 · Verificar que JSON sobrevive al reinicio

[← Etapa 03](03-javafx-mvc.md) · [Índice](README.md)

## Paso 1 · Primera ejecución limpia
1. Cierra la aplicación si sigue abierta.
2. Dentro de la carpeta de trabajo identifica `data/instrumentos.json`. Si contiene datos de pruebas anteriores, **haz una copia** y luego elimina solamente el archivo de prueba (no el código).
3. Vuelve a ejecutar `HelloApplication` desde IntelliJ.
4. Comprueba que la tabla inicia vacía y no aparece una excepción.

**Checkpoint A:** la aplicación inicia correctamente sin JSON preexistente.

## Paso 2 · Registrar y comprobar archivo
1. Haz clic en **Nuevo instrumento**.
2. Escribe `G01`, nombre `Guitarra eléctrica`, categoría `Guitarra`.
3. Haz clic en **Guardar**; regresas a una tabla con una fila.
4. Repite con `B01`, `Bajo eléctrico`, categoría `Bajo`.
5. En el panel Project busca `data/instrumentos.json`. Si no aparece, usa la vista de proyecto y sincroniza el directorio; la ruta es relativa al directorio de ejecución.
6. Abre el archivo: deben existir dos objetos con `codigo`, `nombre` y `categoria`.

**Checkpoint B:** tabla y archivo contienen dos instrumentos.

## Paso 3 · Prueba decisiva: reiniciar
1. Cierra totalmente la ventana de JavaFX.
2. Comprueba en IntelliJ que terminó la ejecución anterior.
3. Ejecuta de nuevo `HelloApplication`.
4. **No registres nada** todavía: revisa la tabla inicial.

**Checkpoint C:** las mismas dos filas aparecen automáticamente. Esto demuestra deserialización desde JSON; no basta con que la tabla mostrara datos antes de cerrar.

## Paso 4 · Probar errores sin perder datos
1. Abre Nuevo instrumento.
2. Prueba código `g01` (misma identidad que `G01`) con otro nombre. Pulsa Guardar.
3. Debe mostrar **Código repetido** y mantenerse en el formulario.
4. Prueba código vacío, luego nombre vacío, luego categoría sin selección.
5. Para comprobar JSON corrupto: cierra la aplicación, **respalda el JSON válido**, modifica temporalmente su copia de trabajo para que deje de ser JSON (por ejemplo `{archivo-incompleto`) y ejecuta.
6. Debe mostrarse un error al iniciar **sin reemplazar** automáticamente el archivo corrupto. Restaura la copia válida para continuar.

**Checkpoint D:** entradas rechazadas no crean filas ni registros; el archivo inválido se conserva para poder diagnosticarlo.

## Matriz de evidencia
| Prueba | Qué haces | Resultado |
|---|---|---|
| P01 | Ejecutar sin archivo previo | Tabla vacía |
| P02 | Registrar G01 | Una fila; JSON creado |
| P03 | Registrar B01 | Dos filas; JSON actualizado |
| P04 | Reiniciar JavaFX | Reaparecen ambas filas |
| P05 | Intentar g01 otra vez | Duplicado rechazado |
| P06 | Probar campos sin completar | Error visible; sin alta |
| P07 | Abrir `instrumentos.json` | Arreglo JSON legible |
| P08 | Archivo JSON corrupto (con respaldo) | Error de lectura y archivo conservado |
| P09 | Simular falla de escritura solo si hay entorno de pruebas | Error sin alta ficticia |
| P10 | Navegar entre pantallas repetidas veces | Conserva datos y no duplica filas |

## Paso 5 · Preparar evidencias
En la carpeta semanal de tu **repositorio de estudiante**, incorpora:
- Captura del listado con dos instrumentos.
- Captura o texto del JSON legible, omitiendo rutas personales.
- Captura del listado **después** de reiniciar.
- Captura de un error de código repetido.
- Texto breve (5–10 líneas) explicando Controller, Service, DAO, serialización y deserialización.

**Checklist final**
- [ ] El proyecto se creó desde cero y no depende de otros labs.
- [ ] Compila y arranca con JavaFX.
- [ ] El DAO lee y escribe JSON; los controladores no acceden al archivo.
- [ ] Tras reiniciar, se recuperan registros.
- [ ] Las validaciones bloquean altas incorrectas.
- [ ] Se respetó el respaldo del archivo durante la prueba de corrupción.

**¿Y PetCare?** La incorporación de persistencia a PetCare será una decisión del proyecto formativo, no un requisito oculto de este laboratorio.
