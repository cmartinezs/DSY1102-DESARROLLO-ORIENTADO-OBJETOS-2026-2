# Laboratorio integrador · Semana 10: Rent-a-Car MVC
**DSY1102 | JavaFX · JDK 21 · Maven · IntelliJ IDEA**

Partimos del laboratorio [semana 09](../semana-09/README.md) que ya registra patentes por FXML y controlador. No reinicies el proyecto ni copies el GestorEstudiantesFX de la guía institucional. Si aún no lo tienes, completa primero semana 09.

## Problema
La empresa necesita registrar **vehículos disponibles** y consultarlos desde una tabla. Habrá dos pantallas: **Listado** y **Registrar**. Debe impedirse crear patentes vacías o duplicadas.

## Ruta guiada por etapas (en este orden)

1. [01 · MVC y modelo: refactorizar Rent-a-Car](01-mvc-y-modelo.md)
2. [02 · TableView y ObservableList: construir el listado](02-tableview-observablelist.md)
3. [03 · Navegación y formulario: conectar ambas vistas](03-navegacion.md)
4. [04 · Verificar, documentar y entregar evidencias](04-verificacion-y-entrega.md)

Cada etapa incluye pasos concretos en IntelliJ, fragmentos de código para adaptar al package generado y checkpoints verificables. El ejemplo de código es orientativo: no reemplaces a ciegas la configuración creada en semana 09.

## Etapas (comprobar cada una antes de continuar)
1. **Modelo y responsabilidades.** Conserva `Vehiculo` en `model`; agrega `marca`. Crea `VehiculoRepository` que mantenga una sola `ObservableList<Vehiculo>`. Define cómo accederá a él cada controlador (inyección explícita desde la aplicación o contexto simple). Evita variables globales sueltas.
2. **Listado.** Agrega `lista-view.fxml` con `TableView<Vehiculo>`, columnas patente y marca, y botón *Nuevo*. Crea `ListaController`. Declara `fx:id` coherentes y usa `PropertyValueFactory` o fábricas de celda explícitas. Asocia **una vez** `tableView.setItems(repository.obtenerTodos())`.
3. **Formulario.** Conserva/adapta el formulario de semana 09 a `form-view.fxml`, con patente, marca, mensaje de error, *Guardar* y *Volver*. Implementa `FormController`.
4. **Navegación.** Carga cada FXML con `FXMLLoader`; conecta los controladores con el mismo repositorio; al guardar vuelve al listado. Comprueba rutas desde `src/main/resources`, `fx:controller`, nombres de `@FXML` y `module-info.java` si el proyecto es modular. No reemplaces `pom.xml` ni `module-info.java` a ciegas: conserva lo generado por tu versión de IntelliJ.
5. **Validación.** Aplica `trim()`; patente y marca obligatorias. Antes de agregar busca patentes repetidas ignorando mayúsculas/minúsculas. Ante error conserva el formulario y explica qué corregir. Ante éxito agrega un **nuevo objeto** a la lista observable y navega al listado.
6. **Comprobación.** Ejecuta los casos de [actividades y pruebas](02-actividades-y-pruebas.md).

## Estructura lógica orientativa
```text
src/main/java/<paquete-base>/
  app/               # Application / navegación
  model/Vehiculo.java
  repository/VehiculoRepository.java
  controller/ListaController.java
  controller/FormController.java
src/main/resources/<ruta-del-paquete>/
  lista-view.fxml
  form-view.fxml
```
La ruta física y paquetes se **adaptan a los generados realmente** en tu proyecto. Los FXML se ubican en resources, no en el paquete Java.

## Contratos mínimos para acordar en clase
```java
public final class VehiculoRepository {
    private final ObservableList<Vehiculo> vehiculos =
            FXCollections.observableArrayList();
    public ObservableList<Vehiculo> obtenerTodos() { return vehiculos; }
    public boolean existePatente(String patente) {
        return vehiculos.stream().anyMatch(v ->
                v.getPatente().equalsIgnoreCase(patente.trim()));
    }
    public void registrar(Vehiculo vehiculo) { vehiculos.add(vehiculo); }
}
```
Importaciones: `javafx.collections.FXCollections` y `javafx.collections.ObservableList`. La clase `Vehiculo` debe disponer de getters `getPatente()` y `getMarca()`. El repositorio simple administra memoria; **no** guarda archivos.

## Evidencia requerida
Captura del listado con dos vehículos; formulario vacío con error; patente duplicada con error; navegación de retorno; árbol de archivos Maven/FXML; breve justificación de por qué las responsabilidades están separadas.

## Definición de terminado
- [ ] Dos vistas navegables, sin errores de `FXMLLoader`.
- [ ] Un repositorio compartido, sin duplicación de listas entre controladores.
- [ ] Tabla actualizada tras registrar sin reconstruir a mano cada fila.
- [ ] Validaciones obligatorias y duplicados.
- [ ] Pruebas ejecutadas y evidencia identificable.

**Extensión opcional:** selección en tabla, edición, `FilteredList` o validación reactiva; no son requisitos mínimos. **Actividad autónoma:** resolver 2.3.6 explicando decisiones propias sin copiar soluciones.
