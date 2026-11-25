package controller;

import dao.CapsulaDao;
import dao.CapsulaDaoMySql;
import model.Capsula;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;

import java.sql.SQLException;
import java.time.LocalDate;

public class CapsulaController {

    @FXML
    private TextField txtTitulo;
    @FXML
    private TextArea txtMensaje;
    @FXML
    private DatePicker dpFecha;
    @FXML
    private TableView<Capsula> tablaCapsulas;
    @FXML
    private TableColumn<Capsula, Integer> colId;
    @FXML
    private TableColumn<Capsula, String> colTitulo;
    @FXML
    private TableColumn<Capsula, LocalDate> colFecha;

    private final CapsulaDao dao = new CapsulaDaoMySql();

    @FXML
    public void initialize() {
        colId.setCellValueFactory(new PropertyValueFactory<>("id"));
        colTitulo.setCellValueFactory(new PropertyValueFactory<>("titulo"));
        colFecha.setCellValueFactory(new PropertyValueFactory<>("fechaApertura"));

        tablaCapsulas.getSelectionModel().selectedItemProperty().addListener(
                (observable, anterior, capsula) -> {
                    if (capsula != null) {
                        txtTitulo.setText(capsula.getTitulo());
                        txtMensaje.setText(capsula.getMensaje());
                        dpFecha.setValue(capsula.getFechaApertura());
                    }
                }
        );

        cargar();
    }

    private void error(String mensaje) {
        new Alert(Alert.AlertType.ERROR, mensaje).showAndWait();
    }

    private void cargar() {
        try {
            tablaCapsulas.getItems().setAll(dao.listarTodos());
        } catch (SQLException e) {
            error("No se pudo refrescar la tabla: " + e.getMessage());
        }
    }

    private boolean valido() {
        if (txtTitulo.getText().isBlank()
                || txtTitulo.getText().trim().length() > 100
                || txtMensaje.getText().isBlank()
                || dpFecha.getValue() == null) {
            error("Completa los campos y usa un título de hasta 100 caracteres.");
            return false;
        }

        return true;
    }

    private Capsula formulario(int id) {
        return new Capsula(
                id,
                txtTitulo.getText().trim(),
                txtMensaje.getText().trim(),
                dpFecha.getValue()
        );
    }

    @FXML
    private void guardar() {
        if (!valido()) {
            return;
        }

        try {
            if (dao.insertar(formulario(0)) != 1) {
                error("No se insertó la fila");
                return;
            }

            limpiar();
            cargar();
        } catch (SQLException e) {
            error("No se pudo guardar: " + e.getMessage());
        }
    }

    @FXML
    private void actualizar() {
        Capsula capsula = tablaCapsulas.getSelectionModel().getSelectedItem();

        if (capsula == null) {
            error("Selecciona una fila");
            return;
        }

        if (!valido()) {
            return;
        }

        try {
            if (dao.actualizar(formulario(capsula.getId())) == 0) {
                error("No hubo filas afectadas; revisa si el registro existe o no cambió.");
                return;
            }

            limpiar();
            cargar();
        } catch (SQLException e) {
            error("No se pudo actualizar: " + e.getMessage());
        }
    }

    @FXML
    private void eliminar() {
        Capsula capsula = tablaCapsulas.getSelectionModel().getSelectedItem();

        if (capsula == null) {
            error("Selecciona una fila");
            return;
        }

        Alert confirmacion = new Alert(Alert.AlertType.CONFIRMATION, "¿Eliminar?");

        if (confirmacion.showAndWait().orElse(ButtonType.CANCEL) != ButtonType.OK) {
            return;
        }

        try {
            if (dao.eliminar(capsula.getId()) != 1) {
                error("No se eliminó la fila");
                return;
            }

            limpiar();
            cargar();
        } catch (SQLException e) {
            error("No se pudo eliminar: " + e.getMessage());
        }
    }

    @FXML
    private void limpiar() {
        tablaCapsulas.getSelectionModel().clearSelection();
        txtTitulo.clear();
        txtMensaje.clear();
        dpFecha.setValue(null);
    }
}
