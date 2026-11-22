package cl.duoc.dsy1102.timecapsule;

import cl.duoc.dsy1102.timecapsule.dao.JdbcMensajeDao;
import cl.duoc.dsy1102.timecapsule.service.MensajeService;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.stage.Stage;
import java.io.IOException;
import java.sql.SQLException;

public class HelloApplication extends Application {
    private Stage stage;
    private MensajeService mensajeService;

    public MensajeService getMensajeService() { return mensajeService; }

    @Override
    public void start(Stage stage) {
        this.stage = stage;
        stage.setTitle("Cápsula del Tiempo FX · JDBC");
        try {
            mensajeService = new MensajeService(new JdbcMensajeDao());
            mostrarListado();
            stage.show();
        } catch (SQLException | IOException error) {
            Alert alerta = new Alert(Alert.AlertType.ERROR);
            alerta.setTitle("No fue posible abrir la cápsula");
            alerta.setHeaderText("Fallo al cargar mensajes");
            alerta.setContentText(error.getMessage());
            alerta.showAndWait();
            Platform.exit();
        }
    }

    public void mostrarListado() throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("hello-view.fxml"));
        Parent root = loader.load();
        HelloController controller = loader.getController();
        controller.configurar(this);
        stage.setScene(new Scene(root, 860, 480));
    }

    public void mostrarFormulario() throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("formulario-view.fxml"));
        Parent root = loader.load();
        FormularioController controller = loader.getController();
        controller.configurar(this);
        stage.setScene(new Scene(root, 860, 480));
    }

    public static void main(String[] args) { launch(args); }
}
