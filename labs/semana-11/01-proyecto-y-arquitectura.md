# 01 · Crear InventarioInstrumentosFX desde cero

1. IntelliJ IDEA → **New Project → JavaFX** → Java, Maven, JDK 21, nombre `InventarioInstrumentosFX`. Ejecuta primero la ventana Hello original.
2. Si el proyecto es modular, conserva `module-info.java`. En lugar de reemplazar la configuración completa, agrega dependencias y `opens` según las clases/reflexión utilizadas.
3. Propón paquetes bajo el package real de tu proyecto (ejemplo `cl.duoc.inventario`):
```text
src/main/java/cl/duoc/inventario/
  HelloApplication.java
  model/Instrumento.java
  dao/InstrumentoDao.java
  dao/JsonInstrumentoDao.java
  service/InventarioService.java
  controller/ListadoController.java
  controller/FormularioController.java
src/main/resources/cl/duoc/inventario/
  listado.fxml
  formulario.fxml
data/instrumentos.json    # generado en ejecución, NO dentro de resources
```

## Modelo
```java
package cl.duoc.inventario.model;

public class Instrumento {
    private String codigo, nombre, categoria;
    public Instrumento() {}  // necesario para deserializar beans simples
    public Instrumento(String codigo, String nombre, String categoria) {
        this.codigo=codigo; this.nombre=nombre; this.categoria=categoria;
    }
    public String getCodigo(){return codigo;}
    public void setCodigo(String codigo){this.codigo=codigo;}
    public String getNombre(){return nombre;}
    public void setNombre(String nombre){this.nombre=nombre;}
    public String getCategoria(){return categoria;}
    public void setCategoria(String categoria){this.categoria=categoria;}
}
```

**Checkpoint A:** ventana inicial ejecutada, paquetes creados y modelo compila. Explica por qué persistir en `src/main/resources` es mala idea: en una aplicación empaquetada sus recursos pueden no ser escribibles.

**Diseño:** `Application → Controller → InventarioService → InstrumentoDao → JSON`; `Instrumento` viaja como dato entre capas. La interfaz gráfica nunca llama `ObjectMapper` ni abre archivos.

[Continuar a DAO JSON](02-dao-json.md)
