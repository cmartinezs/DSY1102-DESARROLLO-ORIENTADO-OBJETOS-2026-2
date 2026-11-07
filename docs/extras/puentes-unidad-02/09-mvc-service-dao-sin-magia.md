# 09 · MVC, Service y DAO: cada clase con un motivo para cambiar

**Microcápsula · 15 min · DSY1102 Unidad 2**

## El problema de la «clase que hace todo»
Supongamos que el botón Guardar valida campos, construye objetos, abre archivos, convierte JSON, captura errores y actualiza la tabla. Funciona hasta que queremos **probar, cambiar almacenamiento o reutilizar la lógica**.

Separar responsabilidades no es «poner capas porque sí». Solo vale la pena cuando reduce mezclas concretas.

## El flujo real de la Cápsula

```text
FXML → FormularioController → MensajeService
                                 ↓
                              MensajeDao
                                 ↓
                            JsonMensajeDao → mensajes.json
```

- **Vista:** estructura visual y controles.
- **Controller:** interpreta acciones de la persona, presenta mensajes y navega.
- **Modelo:** representa un `MensajeFuturo` con datos coherentes.
- **Service:** aplica reglas y coordina operaciones.
- **DAO:** define operaciones para almacenar y recuperar, mediante interfaz.
- **JsonMensajeDao:** implementación concreta con Jackson y `java.nio.file`.

## ¿Qué significa una interfaz DAO?

```java
public interface MensajeDao {
    List<MensajeFuturo> listar() throws IOException;
    void guardar(List<MensajeFuturo> mensajes) throws IOException;
}
```

La interfaz es un **contrato**: dice qué se necesita, no cómo se hace. Un servicio que depende de `MensajeDao` puede recibir una implementación JSON o una implementación falsa de prueba, sin cambiar la regla de negocio.

## Una responsabilidad por decisión, no por cantidad de líneas
Si cambiar `messages.json` por una base de datos exige reescribir `FormularioController`, seguramente la separación quedó mal. Si poner un `try/catch` de I/O obliga a construir cinco capas innecesarias, también.

En **la versión R06** el Controller no sabe dónde está el archivo; solo recibe `IOException` y puede mostrar una alerta. El DAO protege el archivo y el Service no añade a memoria si falla la escritura.

## Practica con escenarios
- «No permitir plazos negativos» → **Service**.
- «Poner etiqueta roja al error» → **Controller/Vista**.
- «Conservar una copia `.bak`» → **DAO**.
- «Cambiar de JSON a JDBC» → **Implementación DAO**, con cambios acotados de configuración y contratos cuando correspondan.

**Siguiente:** [10 · Qué demuestra un test](10-pruebas-evidencia-y-junit.md).  
**Conexión curricular:** [Semana 11 · JSON y DAO](../../../semanas/semana-11/README.md).
