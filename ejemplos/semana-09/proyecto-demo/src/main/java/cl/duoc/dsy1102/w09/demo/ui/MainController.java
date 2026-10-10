package cl.duoc.dsy1102.w09.demo.ui;

import cl.duoc.dsy1102.w09.demo.model.Mascota;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class MainController {
    @FXML private TextField nombreField;
    @FXML private Label resultadoLabel;

    @FXML
    private void registrar() {
        try {
            Mascota mascota = new Mascota(nombreField.getText());
            resultadoLabel.setText("Mascota: " + mascota.getNombre());
        } catch (IllegalArgumentException exception) {
            resultadoLabel.setText(exception.getMessage());
        }
    }
}
