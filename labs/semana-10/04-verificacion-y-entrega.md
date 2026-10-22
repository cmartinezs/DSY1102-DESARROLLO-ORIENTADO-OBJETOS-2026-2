# Etapa 04 · Pruebas y entrega

[← Etapa 03](03-navegacion.md) · [Índice](README.md)

## Prueba guiada de principio a fin
1. Inicia `ReservaRecintosFX` desde IntelliJ.
2. Comprueba que ves una tabla vacía con columnas Responsable, Recinto y Hora.
3. Haz clic en **Nueva reserva**.
4. Escribe `Ana`, selecciona `Cancha fútbol 1` y `09:00`; pulsa **Guardar**.
5. Verifica que regresa al listado y aparece exactamente una fila.
6. Entra otra vez al formulario y escribe `Pedro`, `Cancha fútbol 1`, `09:00`.
7. Al pulsar **Guardar**, debe mostrar que el horario está ocupado, **sin abandonar el formulario**.
8. Cambia el recinto a `Cancha fútbol 2` y pulsa Guardar. Ahora deben aparecer dos filas.
9. Abre el formulario, deja responsable vacío y confirma que **no** registra otra reserva.
10. Cierra y vuelve a ejecutar. **La tabla volverá a estar vacía**: semana 10 trabaja solo en memoria. Persistencia JSON se enseña en semana 11, con otro proyecto autónomo.

**Checkpoint final:** dos altas válidas, duplicado rechazado, campo vacío rechazado, navegación funcional y comportamiento en memoria comprendido. Si difiere, revisa la [matriz T01–T09](02-actividades-y-pruebas.md).


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
