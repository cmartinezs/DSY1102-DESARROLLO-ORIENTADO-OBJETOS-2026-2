# Incremento 3 · Formulario CRUD
Completa [controlador](codigo/src/main/java/controller/CapsulaController.java) con guardar, actualizar, eliminar, limpiar, valido y formulario. Flujo: usuario → Controller → DAO → JDBC → MariaDB → lista → TableView. Valida campos vacíos, título máximo 100 y fecha no nula. Actualiza y elimina por ID seleccionado; confirma eliminación; captura SQLException y refresca solo tras escritura exitosa. No confundir índice visual con PK. Ejecuta mvn javafx:run.
## Checkpoints
- Guardar título con apóstrofo: aparece en tabla y SELECT.
- Guardar vacío: alerta, ninguna fila nueva.
- Seleccionar fila y modificar mensaje: persiste.
- Eliminar sin selección: alerta; cancelar confirmación: sin cambios; aceptar: desaparece.
- Reiniciar: mismo estado que SQL.
- Detener servidor: error visible, no éxito falso.
Entrega capturas/salida SQL y explicación de responsabilidades MVC/DAO. El acceso JDBC síncrono es una simplificación docente; Task y transacciones son ampliaciones, no exigencias.
