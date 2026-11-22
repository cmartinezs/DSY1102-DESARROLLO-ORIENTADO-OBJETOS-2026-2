package cl.duoc.dsy1102.timecapsule;

import cl.duoc.dsy1102.timecapsule.model.MensajeFuturo;
import javafx.beans.property.ReadOnlyStringWrapper;
import javafx.collections.FXCollections;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import java.io.IOException;

public class HelloController {
    private HelloApplication app;
    @FXML private TableView<MensajeFuturo> tablaMensajes;
    @FXML private TableColumn<MensajeFuturo, String> colAutor;
    @FXML private TableColumn<MensajeFuturo, String> colTexto;
    @FXML private TableColumn<MensajeFuturo, String> colPlazo;

    @FXML
    private void initialize() {
        colAutor.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getAutor()));
        colTexto.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getTexto()));
        colPlazo.setCellValueFactory(c ->
                new ReadOnlyStringWrapper(c.getValue().getPlazoAnios() + " años"));
    }

    public void configurar(HelloApplication app) {
        this.app = app;
        tablaMensajes.setItems(
                FXCollections.observableArrayList(app.getMensajeService().listar()));
    }

    @FXML
    private void abrirFormulario() throws IOException { app.mostrarFormulario(); }
}
