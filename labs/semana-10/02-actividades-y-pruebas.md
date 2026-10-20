# Semana 10 · Casos de prueba · Reserva de recintos deportivos

**Caso:** proyecto independiente `ReservaRecintosFX`.

| ID | Acción | Esperado |
|---|---|---|
| T01 | Ejecutar proyecto nuevo | Lista vacía sin errores |
| T02 | Ir al formulario y volver | No se registra reserva |
| T03 | Ana · Cancha fútbol 1 · 09:00 | Fila visible al volver al listado |
| T04 | Responsable vacío o espacios | Rechazo con mensaje claro |
| T05 | No seleccionar recinto | Rechazo |
| T06 | No seleccionar horario | Rechazo |
| T07 | Pedro · Cancha fútbol 1 · 09:00 después de T03 | Rechazo por doble reserva |
| T08 | Pedro · Cancha fútbol 2 · 09:00 | Alta permitida: otro recinto |
| T09 | Abrir y cerrar formulario varias veces | Se conservan las reservas en memoria |

## Reflexión autónoma
¿Por qué `Reserva` no debe conocer JavaFX? ¿Por qué se comparte un único repositorio? ¿Qué observa exactamente `ObservableList`? ¿En qué clase y en qué momento se valida la duplicidad? ¿Cómo cambiaría el diseño si en otro módulo se incorporara persistencia?

**Extensión opcional:** botón para eliminar la reserva seleccionada o filtrado por recinto. No son requisitos mínimos ni una nueva evaluación.
