# Semana 10 · Actividades, casos de prueba y análisis

## Práctica breve en clase
Identifica en el proyecto dónde reside: (a) dato Vehiculo, (b) componente gráfico, (c) manejo de eventos, (d) reglas de validación, (e) colección observable. Discute qué cambiaría si la vista pasara de FXML a otro frontend.

## Matriz mínima de pruebas
| ID | Acción | Resultado esperado |
|---|---|---|
| T01 | Abrir listado inicialmente | Tabla vacía sin excepción |
| T02 | Ir a formulario y volver sin guardar | Regreso al listado, sin datos nuevos |
| T03 | Patente ABCD12, marca Toyota | Alta exitosa; fila visible en listado |
| T04 | Patente vacía o espacios | Rechazo y mensaje de patente requerida |
| T05 | Marca vacía | Rechazo y mensaje de marca requerida |
| T06 | Patente abcd12 si ya está ABCD12 | Rechazo por duplicado |
| T07 | Alta de segundo vehículo | Dos filas y conservación del primero |
| T08 | Ir y volver varias veces | La lista mantiene el estado en memoria |
| T09 | FXML o fx:id incongruentes (prueba de diagnóstico) | Identificar problema, corregirlo y volver a ejecutar |

## Trabajo autónomo
Resolver los ejercicios de la **Guía institucional 2.3.6** (caso de estudiantes): razonar MVC, clase modelo, ObservableList, TableView, navegación y validaciones. Comparar semejanzas y diferencias con Rent-a-Car.

## Reto menos guiado
Proponer búsqueda por patente en el listado. Explica si usarías `FilteredList`, otro mecanismo o ninguna extensión, y por qué. Implementar es opcional.

## Reflexión final
¿Por qué no conviene instanciar un nuevo repositorio en cada controlador? ¿Qué actualiza `ObservableList` cuando agregas un vehículo? ¿Qué ocurre si cambias una propiedad interna sin mecanismos observables? ¿Qué diferencia hay entre validar en UI y preservar reglas del dominio?
