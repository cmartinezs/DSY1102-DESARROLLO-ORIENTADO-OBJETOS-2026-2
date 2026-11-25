package app;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
public class Main extends Application {
 public void start(Stage stage) throws Exception {
  stage.setScene(new Scene(FXMLLoader.load(getClass().getResource("/view/capsula.fxml"))));
  stage.setTitle("Cápsula del Tiempo"); stage.show();
 }
 public static void main(String[] args){launch(args);}
}
