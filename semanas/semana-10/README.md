# Semana 10 · MVC, TableView, navegación y validación
**DSY1102 · EA2 · 12 al 17 de octubre de 2026**

## Objetivo
Evolucionar una aplicación JavaFX creada con IntelliJ IDEA, Java 21 y Maven: organizar responsabilidades según MVC; presentar colecciones con TableView y ObservableList; navegar entre dos vistas FXML; validar datos antes de registrar.

## Continuidad
Semana 09: generador JavaFX de IntelliJ, FXML, controladores y eventos mediante el laboratorio Rent-a-Car. Esta semana amplía el mismo dominio, sin crear de nuevo un proyecto por cada tema. El proyecto formativo longitudinal **PetCare** sigue siendo independiente; no debe confundirse con el laboratorio Rent-a-Car.

## Ruta pedagógica
1. **MVC:** separar Vehiculo (modelo), vistas FXML y controladores. Introducir un repositorio simple **en memoria**; no agregar base de datos.
2. **TableView y ObservableList:** lista de vehículos disponibles, columnas patente y marca, mostrar inmediatamente registros nuevos; explicar por qué observar cambios de la lista no equivale a observar mutaciones de propiedades del objeto.
3. **Navegación:** vista de listado y formulario, FXMLLoader, ruta de recursos, retorno seguro; compartir el estado sin acoplar controladores mediante variables estáticas indiscriminadas.
4. **Validación:** trim, obligatoriedad, duplicados de patente, mensajes claros, manejo de entradas inválidas.
5. **Verificación:** prueba de alta, visualización, navegación, retorno, duplicados y cancelación.

## Material institucional de referencia
- 2.3.1 PPT Patrón MVC en JavaFX.
- 2.3.2 PPT TableView y ObservableList.
- 2.3.3 PPT Navegación entre vistas.
- 2.3.4 PPT Validación de formularios.
- 2.3.5 Guía Actividad MVC: caso GestorEstudiantesFX, paso a paso, 90 minutos.
- 2.3.6 Ejercicios generales: caso de estudiantes, actividades para análisis/propuesta, 90 minutos.

**Nota de conciliación:** las portadas dicen 2.3.5 y 2.3.6, pero dentro de las tablas aparecen 2.2.7 y 2.2.8. Para indexación se conserva la numeración oficial 2.3.5/2.3.6; los archivos fuente permanecen sin modificar. La guía institucional usa estudiantes y el laboratorio propio usa vehículos para dar continuidad a semana 09.

## Material del curso
- [Laboratorio integrador](../../labs/semana-10/README.md)
- [Actividades de aplicación y verificación](../../labs/semana-10/02-actividades-y-pruebas.md)
- [Matriz de conciliación y decisiones](CONCILIACION.md)
- [Semana 09](../semana-09/README.md)

**Fuente canónica para las actividades:** los enunciados publicados por el curso y referenciados desde estos índices. No se incluyen aquí planificación privada, bonos individuales ni formas de EP2 todavía en revisión.
