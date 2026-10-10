# PetCare · Semana 09 · Primera interfaz JavaFX

**Periodo:** 5–10 octubre 2026 · **Sección:** DSY1102-012V

## Punto de entrada
Retomar **el mismo PetCare de semana 08** (core Java, `PetCareService` y colecciones según necesidades reales). No copiar el demo de ejemplos, que usa otra implementación mínima.

## Necesidad del dominio
Además de consola, una persona quiere registrar/consultar mascotas mediante una ventana gráfica. La nueva interfaz deberá reutilizar reglas ya implementadas.

## Objetivo
Construir un **adaptador gráfico mínimo** con Maven, JavaFX, FXML y Controller. Mantener CLI y core desacoplados de JavaFX. El avance formativo es **posterior** al laboratorio y puede completarse autónomamente.

## Conceptos nuevos
Maven, aplicación JavaFX, Stage/Scene, FXML, Scene Builder, Controller, controles y eventos.

## Secuencia de trabajo
1. [Preparar proyecto sin romper el core](./01-preparar-proyecto.md)
2. [Construir una vista para una necesidad real](./02-disenar-vista.md)
3. [Conectar Controller y servicio](./03-conectar-servicio.md)
4. [Validar y cerrar el incremento](./04-verificacion-cierre.md)
5. [Consultar implementación de referencia](./IMPLEMENTACION-DE-REFERENCIA.md)
6. [Modelo y checkpoint](./MODELO-Y-CHECKPOINT.md)

## Trabajo esperado
Una ventana con una operación simple (registro o búsqueda) que delegue en PetCareService. Si el servicio de cada estudiante difiere, adaptar la interacción sin rehacer el modelo.

## Evidencia
Captura, operación válida e inválida, justificación de dependencias y DevLog. Commits sugeridos: `build: configurar adaptador JavaFX`; `feat: interfaz mínima PetCare`; `test: verificar flujo UI y negocio`.

## Fuera de alcance
No exigir TableView, FXML múltiple, navegación compleja, JSON, JDBC ni refactor completo hacia MVC.

## Checkpoint
La UI es reemplazable y la lógica del dominio sigue funcionando desde CLI.
