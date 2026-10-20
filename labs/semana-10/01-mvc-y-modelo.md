# 01 · Reorganizar Rent-a-Car con MVC

> **Punto de partida obligatorio:** completa [semana 09](../semana-09/README.md). Trabaja sobre **ese proyecto** en IntelliJ IDEA, no sobre otro ejemplo. Conserva el `pom.xml`, paquete base y `module-info.java` (si existe) que generó tu asistente JavaFX.

## Paso 1. Comprobar la versión funcional
1. En IntelliJ, abre el proyecto Rent-a-Car de la semana anterior.
2. Desde la ventana **Project**, localiza `src/main/java` y `src/main/resources`.
3. Ejecuta la aplicación con el botón Run, igual que en semana 09.
4. Prueba `ABCD12` y la patente vacía: registra qué sucede.
5. Haz un commit de checkpoint antes de reestructurar: `git add . && git commit -m "checkpoint: semana 09 funcional"`.

**Checkpoint:** la aplicación abre y ejecuta antes de editar. Si falla, termina primero las pruebas de semana 09.

## Paso 2. Identificar piezas MVC
En el explorador del proyecto, señala:
- **Modelo:** `Vehiculo`, que representa patente (y luego marca), sin usar controles JavaFX.
- **Vista:** archivo FXML con etiquetas, campos y botones.
- **Controlador:** la clase con los métodos `@FXML`, responsable de reaccionar a eventos de usuario.
- **Repositorio:** objeto único que administra la colección en memoria. No se trata de una base de datos.

En tu cuaderno, justifica por qué `Vehiculo` no debe abrir ventanas ni mostrar `Alert`.

## Paso 3. Completar el modelo
Abre la clase `Vehiculo` existente (o créala si el ejercicio anterior no la tenía) y agrega `marca`. Mantén el mismo package que ya estás usando; el ejemplo siguiente omite `package`:

```java
public class Vehiculo {
    private final String patente;
    private final String marca;

    public Vehiculo(String patente, String marca) {
        this.patente = patente;
        this.marca = marca;
    }
    public String getPatente() { return patente; }
    public String getMarca() { return marca; }
}
```

Ajusta referencias anteriores al constructor: ahora recibe dos parámetros.

**Checkpoint:** IntelliJ resuelve `Vehiculo` y sus getters sin errores. No borres importaciones ni clases generadas automáticamente si todavía son necesarias.

## Paso 4. Crear repositorio compartido
1. Haz clic derecho sobre tu package base > **New > Package** > `repository` (si ya existe, reutilízalo).
2. Crea la clase `VehiculoRepository` dentro de él.
3. Copia el contrato mostrado a continuación y añade el `import` de tu clase `Vehiculo` según el paquete real:

```java
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public final class VehiculoRepository {
    private final ObservableList<Vehiculo> vehiculos =
            FXCollections.observableArrayList();

    public ObservableList<Vehiculo> obtenerTodos() { return vehiculos; }

    public boolean existePatente(String patente) {
        String buscada = patente.trim();
        return vehiculos.stream().anyMatch(
                v -> v.getPatente().equalsIgnoreCase(buscada));
    }

    public void registrar(Vehiculo vehiculo) { vehiculos.add(vehiculo); }
}
```

**Checkpoint:** compila y puedes razonar por qué `new VehiculoRepository()` en **ambos** controladores crearía dos listas distintas.

## Paso 5. Dibujar el flujo antes de implementar
```text
Formulario FXML -> FormController -> valida -> VehiculoRepository
                                                |
Listado FXML    <- ListaController <- ObservableList<Vehiculo>
```

Responde: ¿Dónde ocurre la interacción? ¿Quién es dueño de la lista? ¿Quién comprueba duplicados?

[Continuar: TableView](02-tableview-observablelist.md)
