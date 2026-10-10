# 02 · Construir la vista FXML

1. Abre Scene Builder y diseña un contenedor `VBox`.
2. Agrega encabezado `Label`, `TextField`, botón `Button` y `Label` de resultado.
3. Guarda el FXML bajo `src/main/resources`; respeta rutas.
4. Declara `fx:controller` y los `fx:id` que necesitará el Controller.
5. Carga el recurso desde `Application.start` con `FXMLLoader`.

**Pregunta:** ¿por qué no guardamos el FXML dentro de una clase Java?
**Checkpoint:** la escena carga el FXML y muestra controles, aunque el botón aún no haga nada.
**Commit:** `feat: crear formulario inicial con FXML`.
