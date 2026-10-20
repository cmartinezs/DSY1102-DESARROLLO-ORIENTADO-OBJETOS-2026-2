# Etapa 04 · Pruebas y entrega

## Comprobación en IntelliJ
1. Ejecuta el proyecto **ReservaRecintosFX** desde la configuración generada, no desde un laboratorio anterior.
2. Si `Location is not set`, comprueba rutas FXML y `getResource`.
3. Si aparece `LoadException`, revisa `fx:controller`, `fx:id`, métodos `onAction` y `module-info.java`.
4. Si `TableView` permanece sin filas después del alta, comprueba que se comparte **una** instancia de `ReservaRepository`.
5. Si la aplicación no compila, revisa que el package en todos los archivos coincida con el realmente creado en IntelliJ.

## Evidencia
Ejecuta [T01–T09](02-actividades-y-pruebas.md). Captura (a) listado con dos reservas, (b) doble reserva rechazada y (c) error por responsable vacío. Entrega el proyecto JavaFX independiente y una explicación de 5–10 líneas sobre separación de responsabilidades MVC y colecciones observables.

## Trabajo autónomo
Resuelve 2.3.6 institucional como ejercicios de razonamiento sobre **su propio caso de estudiantes**, sin modificar este proyecto. No exige PetCare ni Rent-a-Car.

## Lista de terminado
- [ ] Proyecto nuevo `ReservaRecintosFX` creado y ejecutado.
- [ ] Dos FXML navegables.
- [ ] Listado con `ObservableList`.
- [ ] Rechazo de entradas vacías y reservas duplicadas.
- [ ] Evidencias y decisiones explicadas.

[Volver al laboratorio](README.md)
