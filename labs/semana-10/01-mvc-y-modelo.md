# Etapa 01 · Proyecto nuevo, modelo y repositorio MVC

[← Índice](README.md) · [02 · Tabla observable →](02-tableview-observablelist.md)

## Antes de comenzar: comprueba el generador
1. Abre **File → Settings → Plugins → Installed** y busca **JavaFX**.
2. Si JavaFX está deshabilitado, actívalo y reinicia IntelliJ cuando lo pida.
3. Vuelve a la pantalla de inicio y elige **New Project → Generators → JavaFX** (no el generador genérico «Java»).
4. Indica **Name = ReservaRecintosFX**, **Language = Java**, **Build system = Maven**, **JDK = 21** y selecciona **Controls** y **FXML** si el asistente muestra los módulos.
5. Pulsa Create, acepta el proyecto de confianza cuando corresponda y espera la carga Maven.
6. En la ventana lateral **Project**, busca `HelloApplication.java`; pulsa el triángulo verde para ejecutar.

**Checkpoint 0:** se abre la ventana de muestra sin errores. Si no ocurre, revisa la ventana **Run**, la versión de JDK y la sincronización Maven; no avances.

## Cómo trabajar con los ejemplos
Usamos como paquete de referencia `cl.duoc.recintos`. Si el IDE genera un paquete distinto, adopta este mediante **Refactor → Rename** o adapta todas las líneas `package`, `import`, `fx:controller` y las rutas de recursos de forma coherente. No crees otro `HelloApplication` ni edites `pom.xml` a ciegas.


## 1. Crear desde cero
1. Abre **IntelliJ IDEA → New Project → JavaFX** (habilita el plugin JavaFX si no aparece).
2. Nombre: **ReservaRecintosFX**; lenguaje **Java**; build system **Maven**; **JDK 21**. No selecciones bibliotecas extra (FormsFX no es FXML).
3. Crea el proyecto, espera Maven y ejecuta **HelloApplication** sin modificar archivos.
4. En el explorador **Project**, identifica `src/main/java`, `src/main/resources`, `pom.xml` y `module-info.java` (si existe).

**Checkpoint A:** la ventana de ejemplo abre. No avances si falla.

## 2. Establecer paquetes
En esta guía se usa `cl.duoc.recintos` como package de ejemplo. El asistente puede crear otro; usa tu package **real** de manera consistente, sin duplicar Application. Dentro de `src/main/java/<paquete-base>` crea los paquetes `model`, `repository` y `controller`. Los archivos FXML quedarán junto al `hello-view.fxml` generado dentro de resources.

## 3. Modelo
Crea `model/Reserva.java`:

```java
package cl.duoc.recintos.model;

public final class Reserva {
    private final String responsable;
    private final String recinto;
    private final String hora;

    public Reserva(String responsable, String recinto, String hora) {
        this.responsable = responsable;
        this.recinto = recinto;
        this.hora = hora;
    }

    public String getResponsable() { return responsable; }
    public String getRecinto() { return recinto; }
    public String getHora() { return hora; }
}
```

## 4. Repositorio en memoria
Crea `repository/ReservaRepository.java`:

```java
package cl.duoc.recintos.repository;

import cl.duoc.recintos.model.Reserva;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public final class ReservaRepository {
    private final ObservableList<Reserva> reservas = FXCollections.observableArrayList();

    public ObservableList<Reserva> obtenerTodas() { return reservas; }

    public boolean estaOcupado(String recinto, String hora) {
        return reservas.stream().anyMatch(r ->
                r.getRecinto().equalsIgnoreCase(recinto.trim())
                && r.getHora().equals(hora));
    }

    public void registrar(Reserva reserva) { reservas.add(reserva); }
}
```

**Checkpoint B:** ambos archivos compilan. Explica: `Reserva` representa datos; `ReservaRepository` administra una colección observable; ninguno debe abrir ventanas. No instancies repositorios distintos por controlador.

[Continuar a etapa 02](02-tableview-observablelist.md)
