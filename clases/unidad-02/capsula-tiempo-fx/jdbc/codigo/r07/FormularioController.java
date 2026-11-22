package cl.duoc.dsy1102.timecapsule;

import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import java.io.IOException;
import java.sql.SQLException;

public class FormularioController {
    private HelloApplication app;
    @FXML private TextField campoAutor;
    @FXML private TextField campoTexto;
    @FXML private ComboBox<Integer> campoPlazo;
    @FXML private Label estadoRegistro;

    public void configurar(HelloApplication app) { this.app = app; }

    @FXML
    private void initialize() {
        campoPlazo.getItems().setAll(1, 5, 10);
        campoPlazo.setValue(5);
    }

    @FXML
    private void guardarMensaje() throws IOException {
        estadoRegistro.setText("");
        try {
            app.getMensajeService().registrar(
                    campoAutor.getText(), campoTexto.getText(), campoPlazo.getValue());
            app.mostrarListado();
        } catch (IllegalArgumentException e) {
            estadoRegistro.setText(e.getMessage());
        } catch (SQLException e) {
            estadoRegistro.setText("No se guardó. Revisa conexión o permisos de MariaDB.");
            System.err.println("Error SQL al registrar: " + e.getMessage());
        }
    }

    @FXML
    private void volver() throws IOException { app.mostrarListado(); }
}
