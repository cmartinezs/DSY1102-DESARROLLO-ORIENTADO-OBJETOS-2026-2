package cl.duoc.dsy1102.w10.ui;

import cl.duoc.dsy1102.w10.NavegacionFXMLDemo;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.stage.Stage;
import java.io.IOException;

public class DetalleController {
    @FXML private Button volverButton;
    @FXML private void volver() throws IOException {
        Stage stage = (Stage) volverButton.getScene().getWindow();
        NavegacionFXMLDemo.mostrar(stage, "inicio.fxml");
    }
}
