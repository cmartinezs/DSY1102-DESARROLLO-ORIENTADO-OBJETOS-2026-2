# Laboratorio Semana 09 · Rent-a-Car con JavaFX, FXML e IntelliJ IDEA

**DSY1102 · Desarrollo Orientado a Objetos** · Laboratorio independiente · Java 21 · Maven · IntelliJ IDEA

> **Comenzamos desde cero.** Abre IntelliJ IDEA: todavía no hay proyecto. No descargues ni copies PetCare ni el proyecto demostrativo. Seguiremos el **generador JavaFX** que ya incluye IntelliJ.

## Contexto del problema

Una empresa Rent-a-Car quiere registrar los vehículos que tiene disponibles para arriendo. En esta primera versión necesita una ventana sencilla donde la persona encargada ingrese una patente, presione **Registrar** y vea la confirmación. Una patente vacía debe mostrar un mensaje de error sin cerrar la ventana.

El objetivo de esta semana **no** es desarrollar todo un sistema de arriendo ni incorporar una base de datos. Es aprender a colaborar entre una **vista FXML**, un **controlador** y un **objeto Java**.

## Qué aprenderás

- Crear un proyecto **JavaFX directamente desde New Project → JavaFX** en IntelliJ.
- Elegir **Java, Maven y JDK 21**, habilitar FXML y ejecutar el ejemplo generado.
- Reconocer la estructura real creada por IntelliJ (incluido `module-info.java` cuando aparece), sin reemplazar su configuración a ciegas.
- Crear un formulario, conectar el botón con su controlador y construir un `Vehiculo`.
- Probar registros correctos e incorrectos, guardar evidencia y realizar un desafío autónomo.

## Requisitos antes de empezar

- IntelliJ IDEA instalado, con el complemento **JavaFX** habilitado (Settings → Plugins → Installed → JavaFX).
- Conexión a internet en la primera ejecución, para descargar Maven y las bibliotecas necesarias.
- **No** necesitas crear manualmente un `pom.xml`, instalar Maven por separado ni preparar un proyecto previo.
- Scene Builder es útil para diseñar visualmente; también puedes editar directamente el archivo FXML en IntelliJ. La [etapa 02](02-vista-fxml.md) explica ambas opciones.

## Ruta de aprendizaje (en este orden)

1. [01 · Crear y ejecutar el proyecto JavaFX desde cero en IntelliJ](01-entorno-y-arranque.md).
2. [02 · Transformar la pantalla generada en el formulario Rent-a-Car](02-vista-fxml.md).
3. [03 · Conectar el controlador y crear el objeto Vehiculo](03-controller-eventos.md).
4. [04 · Probar, documentar y ampliar](04-verificacion-y-tarea.md).

**Regla de las rueditas:** cada etapa dice **dónde hacer clic, qué editar, cómo comprobarlo y qué hacer si falla**. No avances al siguiente checkpoint con errores pendientes.

## Resultado esperado

```text
┌─────────────────────────────────────────────┐
│         Registro de vehículo disponible     │
│                                             │
│   [ Patente del vehículo                ]   │
│               [ Registrar ]                 │
│   Completa el formulario                    │
└─────────────────────────────────────────────┘
```

- Escribes `ABCD12` → **Registrar** → `Vehículo disponible: ABCD12`.
- Dejas el campo vacío → **Registrar** → `La patente no puede estar vacía`.
- Escribes solamente espacios → aparece el mismo mensaje de error.
- El modelo `Vehiculo` no conoce JavaFX.

## Importante: archivos que IntelliJ crea por ti

Según la versión del asistente y las opciones elegidas, encontrarás archivos como `HelloApplication.java`, `HelloController.java`, `hello-view.fxml`, `pom.xml` y posiblemente `module-info.java`. **Utilizaremos esos archivos generados**, no crearemos versiones paralelas con nombres distintos. El paquete exacto se consulta en la primera línea `package ...;` de los Java generados.

**No confundas este laboratorio con** [el proyecto técnico de referencia](../../ejemplos/semana-09/proyecto-demo/), que tiene otros nombres (`MainApp`, `MainController`, `MainView`). La referencia es opcional y **no se copia**: sigue los nombres creados por IntelliJ en esta guía.

## Definición de terminado

- [ ] Creaste el proyecto desde el **generador JavaFX** de IntelliJ, con Maven y JDK 21.
- [ ] Ejecutaste el «Hello!» generado **antes** de modificarlo.
- [ ] La vista FXML contiene patente, botón y mensaje.
- [ ] El botón crea un objeto `Vehiculo` y muestra confirmación o error.
- [ ] Completaste los casos de prueba y las evidencias.
- [ ] Puedes explicar qué hacen FXML, controlador y modelo.

**Ampliación autónoma:** agregar marca y botón **Limpiar** después de terminar el caso mínimo.

[Volver al índice general de laboratorios](../README.md) · [Contenidos semana 09](../../semanas/semana-09/)
