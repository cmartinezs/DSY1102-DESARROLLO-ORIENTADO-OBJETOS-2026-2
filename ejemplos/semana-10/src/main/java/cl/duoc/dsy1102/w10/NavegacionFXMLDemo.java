package cl.duoc.dsy1102.w10;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import java.io.IOException;

public class NavegacionFXMLDemo extends Application {
    public static void mostrar(Stage stage, String vista) throws IOException {
        FXMLLoader loader = new FXMLLoader(
            NavegacionFXMLDemo.class.getResource("/cl/duoc/dsy1102/w10/ui/" + vista));
        stage.setScene(new Scene(loader.load(), 400, 230));
        stage.show();
    }

    @Override public void start(Stage stage) throws IOException {
        stage.setTitle("Semana 10 · Navegación FXML");
        mostrar(stage, "inicio.fxml");
    }

    public static void main(String[] args) { launch(args); }
}
