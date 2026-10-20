# Semana 10 · Laboratorio independiente: reservas de recintos deportivos

**DSY1102 · JavaFX · Java 21 · Maven · IntelliJ IDEA**

## Regla de independencia
Este laboratorio comienza **desde cero** con un proyecto nuevo llamado `ReservaRecintosFX`. No requiere ni reutiliza Rent-a-Car (semana 09), PetCare ni otros laboratorios. **PetCare** es el proyecto formativo longitudinal; no debemos duplicar ese propósito en los labs.

## Caso
Un centro deportivo requiere registrar reservas para tres recintos: Cancha fútbol 1, Cancha fútbol 2 y Gimnasio. Cada reserva tiene responsable, recinto y horario (08:00 a 21:00, bloques de una hora). Un recinto no puede reservarse dos veces a la misma hora. La aplicación utiliza **datos en memoria**, sin persistencia en archivos ni bases de datos.

## Objetivos verificables
1. Crear un proyecto JavaFX desde el generador de IntelliJ, elegir Java 21 y Maven y ejecutar su ejemplo inicial.
2. Separar `Reserva`, repositorio en memoria, archivos FXML y controladores.
3. Mostrar las reservas en `TableView` alimentada por `ObservableList`.
4. Navegar entre listado y formulario usando `FXMLLoader` y una sola instancia del repositorio.
5. Rechazar responsable vacío, recinto/horario sin seleccionar y duplicidad recinto-hora.

## Ruta paso a paso
1. [01 · Creación desde cero y MVC](01-mvc-y-modelo.md)
2. [02 · Tabla y ObservableList](02-tableview-observablelist.md)
3. [03 · Formulario, validaciones y navegación](03-navegacion.md)
4. [04 · Verificación y evidencia](04-verificacion-y-entrega.md)
5. [Pruebas y actividades](02-actividades-y-pruebas.md)

**Institucional:** recursos 2.3.1 a 2.3.6 disponibles en [Drive semana 10](https://drive.google.com/drive/folders/1wH867aYEBITf8xpVf9kSTZOFSuWTajeq). Las guías institucionales usan estudiantes; esta práctica es una adaptación didáctica independiente.

## Terminado
- [ ] Proyecto nuevo ejecutable, sin reutilizar artefactos de otro laboratorio.
- [ ] Dos vistas FXML y navegación funcional.
- [ ] Alta y listado de reservas en memoria.
- [ ] Validación y bloqueo de dobles reservas.
- [ ] Pruebas y capturas documentadas.
