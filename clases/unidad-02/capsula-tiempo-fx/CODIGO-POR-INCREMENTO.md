# Cápsula del Tiempo FX · Código completo por incremento

**Fuente de código de la aplicación:** https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE

Esta tabla conserva **un commit exacto por checkpoint**. Usar el enlace del incremento que se esté enseñando, y **no** la rama `master`, que evoluciona con el curso.

| Etapa | Alcance funcional | Código reproducible | Archivos de interés |
|---|---|---|---|
| **R00** | JavaFX y corrección del JDK/Maven | [Proyecto completo](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/f3408276766358884c1c12f4c0b3ed63211bc36f) · [ZIP de código](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/archive/f3408276766358884c1c12f4c0b3ed63211bc36f.zip) | pom.xml; HelloApplication; Launcher; hello-view.fxml |
| **R01** | Clase MensajeFuturo y prueba de consola | [Proyecto completo](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/13a21df0cfc536c0bcc016f2bae8f063058291dc) · [ZIP de código](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/archive/13a21df0cfc536c0bcc016f2bae8f063058291dc.zip) | MensajeFuturo.java; PruebaMensaje.java |
| **R02** | TableView + ObservableList con datos de prueba | [Proyecto completo](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/44511026ba156c4ed863ed45f987e4b7709b9179) · [ZIP de código](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/archive/44511026ba156c4ed863ed45f987e4b7709b9179.zip) | HelloController.java; hello-view.fxml; HelloApplication.java |
| **R03** | Formulario en la misma vista y validación | [Proyecto completo](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/ec77d7341973f21d14d29a437ba00c3adf9bd56c) · [ZIP de código](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/archive/ec77d7341973f21d14d29a437ba00c3adf9bd56c.zip) | HelloController.java; hello-view.fxml |
| **R04** | Segundo FXML, navegación y memoria compartida | [Proyecto completo](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/09e5b99e9dce71998333f6c2718ff29040d9b00e) · [ZIP de código](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/archive/09e5b99e9dce71998333f6c2718ff29040d9b00e.zip) | HelloApplication.java; HelloController.java; FormularioController.java; ambos FXML |

## Cómo usarlo en las slides

1. Leer el requerimiento que aparece al inicio de cada R00–R04.
2. Observar los fragmentos y capturas; contrastarlos con los archivos del commit enlazado.
3. Descargar el ZIP de la **versión exacta** y abrir como proyecto Maven en IntelliJ (JDK 21).
4. Ejecutar el checkpoint. Si un concepto no aparece todavía, no anticiparlo desde `master`.

**Trazabilidad:** cinco commits existentes en el repositorio del docente, comprobados uno por uno. R04 conserva estado solamente en `ObservableList`; aún **no** implementa Service, DAO ni JSON.

**Capturas de R04:** diez capturas facilitadas el 27-10-2026. Están incorporadas al ZIP completo de slides Entrega 05. En la publicación web se priorizaron los enlaces a código exacto mientras se resuelve la subida de las imágenes nuevas.
