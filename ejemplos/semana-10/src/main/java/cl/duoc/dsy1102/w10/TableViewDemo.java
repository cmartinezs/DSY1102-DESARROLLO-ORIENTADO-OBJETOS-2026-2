package cl.duoc.dsy1102.w10;

import javafx.application.Application;
import javafx.beans.property.ReadOnlyStringWrapper;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class TableViewDemo extends Application {
    record Tarea(String titulo) {}

    @Override public void start(Stage stage) {
        ObservableList<Tarea> tareas = FXCollections.observableArrayList();
        tareas.add(new Tarea("Preparar clase"));

        TableView<Tarea> tabla = new TableView<>();
        TableColumn<Tarea, String> columna = new TableColumn<>("Tarea");
        columna.setCellValueFactory(fila ->
            new ReadOnlyStringWrapper(fila.getValue().titulo()));
        tabla.getColumns().add(columna);
        tabla.setItems(tareas); // Una vez. Cambios posteriores son observados.

        Button boton = new Button("Agregar tarea");
        boton.setOnAction(evento -> tareas.add(new Tarea("Repasar MVC")));

        stage.setScene(new Scene(new VBox(12, tabla, boton), 420, 300));
        stage.setTitle("Semana 10 · ObservableList y TableView");
        stage.show();
    }

    public static void main(String[] args) { launch(args); }
}
