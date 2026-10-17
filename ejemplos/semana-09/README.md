# Ejemplos · Semana 09

## Proyecto demostrativo ejecutable e independiente
[proyecto-demo](./proyecto-demo/) contiene un único programa pequeño con Maven, JavaFX 21, FXML, Controller y un objeto Java simple. No depende de PetCare ni del laboratorio.

- [pom.xml](./proyecto-demo/pom.xml)
- [MainApp.java](./proyecto-demo/src/main/java/cl/duoc/dsy1102/w09/demo/MainApp.java)
- [MainController.java](./proyecto-demo/src/main/java/cl/duoc/dsy1102/w09/demo/ui/MainController.java)
- [Vehiculo.java](./proyecto-demo/src/main/java/cl/duoc/dsy1102/w09/demo/model/Vehiculo.java)
- [MainView.fxml](./proyecto-demo/src/main/resources/cl/duoc/dsy1102/w09/demo/ui/MainView.fxml)

```bash
cd ejemplos/semana-09/proyecto-demo
mvn clean javafx:run
```

**Prerequisito:** JDK 21, Maven 3.9+ y acceso inicial a repositorios Maven. La primera ejecución necesita descargar dependencias. Modifica el título de la ventana, luego agrega una regla de entrada y verifica la reacción del botón.

La solución completa se conserva únicamente como referencia técnica para aprender; el [laboratorio](../../labs/semana-09/) plantea decisiones que debe resolver cada estudiante.
