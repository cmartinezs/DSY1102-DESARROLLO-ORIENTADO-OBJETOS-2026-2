package cl.duoc.dsy1102.w10.ui;

import cl.duoc.dsy1102.w10.NavegacionFXMLDemo;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.stage.Stage;
import java.io.IOException;

public class InicioController {
    @FXML private Button navegarButton;
    @FXML private void irADetalle() throws IOException {
        Stage stage = (Stage) navegarButton.getScene().getWindow();
        NavegacionFXMLDemo.mostrar(stage, "detalle.fxml");
    }
}
