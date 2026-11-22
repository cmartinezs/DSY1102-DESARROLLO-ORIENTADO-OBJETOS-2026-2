# Cápsula del Tiempo FX · Extensión JDBC (R07–R08)

**Asignatura:** DSY1102 · Desarrollo Orientado a Objetos · 2026-2  
**Relación con la clase consolidada:** extensión práctica de la [presentación R00–R06](../index.html). **No** altera las slides, sus capturas ni el recorrido JSON.

## Recorrido de aprendizaje

1. [Guía R07 — Configuración completa MariaDB, JDBC, INSERT y validación](01-r07-conexion-insert-validacion.md). Checkpoint: una fila guardada y comprobada por SQL, todavía no recuperada al reiniciar la UI.
2. [Guía R08 — SELECT, PreparedStatement, ResultSet, mapeo a Modelo y TableView](02-r08-resultset-modelo-tableview.md). Checkpoint: cerrar y abrir JavaFX recupera todas las filas desde MariaDB.

Ambas guías son **autocontenidas en su configuración**: instalación, arranque del servidor, esquema, usuario con mínimos permisos, Maven, module-info.java, entorno de ejecución, archivos Java, rutas y fallos habituales; no requieren capturas.

## Punto de partida y continuidad

El caso es el mismo **MensajeFuturo(autor, texto, plazoAnios)**, con las mismas dos pantallas FXML. Para no sobrescribir el trabajo de archivos JSON enseñado en R05–R06, esta rama de práctica arranca de una **copia aislada del commit R04**:

- [Código original R04, commit fijo](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/tree/09e5b99e9dce71998333f6c2718ff29040d9b00e)
- [Descargar proyecto inicial R04, ZIP fijo](https://github.com/cmartinezs/DSY1102-JFX-TIME-CAPSULE/archive/09e5b99e9dce71998333f6c2718ff29040d9b00e.zip)
- [Fuentes de presentación R00–R06](../README.md) y [matriz histórica de snapshots R00–R04](../CODIGO-POR-INCREMENTO.md)

Esta decisión es **pedagógica**: estudiar otra implementación de persistencia conservando modelo y MVC. No equivale a que JSON desaparezca ni a que el repo de aplicación ya tenga una rama SQL integrada.

## Archivos directos de referencia

Se publican como **archivos sueltos de reemplazo**, no como un segundo proyecto completo ni un ZIP que esconda la estructura. Debes mantener del snapshot R04 el modelo, dos FXML, Launcher y el Maven Wrapper. En cada guía se explica **qué archivo copiar, dónde y por qué**.

**Configuración:** [esquema MariaDB](codigo/01-esquema.sql) · [usuario SQL local](codigo/02-usuario-local.sql) · [pom.xml R07](codigo/r07/pom.xml) · [module-info.java R07](codigo/r07/module-info.java)

**R07:** [ConexionBD.java](codigo/r07/ConexionBD.java) · [PruebaConexion.java](codigo/r07/PruebaConexion.java) · [MensajeDao.java](codigo/r07/MensajeDao.java) · [JdbcMensajeDao.java](codigo/r07/JdbcMensajeDao.java) · [MensajeService.java](codigo/r07/MensajeService.java) · [HelloApplication.java](codigo/r07/HelloApplication.java) · [HelloController.java](codigo/r07/HelloController.java) · [FormularioController.java](codigo/r07/FormularioController.java)

**R08:** [JdbcMensajeDao.java con SELECT y ResultSet](codigo/r08/JdbcMensajeDao.java). Es el **único archivo que cambia** respecto del final de R07.

## Criterios de aceptación editorial

- R07 y R08 tienen resultados distintos y observables.
- Instrucciones secuenciales, rutas y checkpoints; ningún paso depende de capturas.
- La contraseña se configura localmente, sin secretos en GitHub.
- Las fuentes de los fragmentos están enlazadas directamente a GitHub desde las guías.
- El código de referencia es didáctico; **no se afirma integración ejecutada con MariaDB** en el equipo del docente. Probar en el laboratorio con servicio real antes de certificarlo.
