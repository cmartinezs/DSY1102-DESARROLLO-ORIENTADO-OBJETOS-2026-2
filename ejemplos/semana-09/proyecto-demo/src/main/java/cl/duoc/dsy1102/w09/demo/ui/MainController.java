package cl.duoc.dsy1102.w09.demo.ui;

import cl.duoc.dsy1102.w09.demo.model.Vehiculo;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class MainController {
    @FXML private TextField patenteField;
    @FXML private Label resultadoLabel;

    @FXML
    private void registrar() {
        try {
            Vehiculo vehiculo = new Vehiculo(patenteField.getText());
            resultadoLabel.setText("Patente válida: " + vehiculo.getPatente());
        } catch (IllegalArgumentException exception) {
            resultadoLabel.setText(exception.getMessage());
        }
    }
}
