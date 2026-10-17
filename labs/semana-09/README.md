# Laboratorio · Semana 09 — Mi primera interfaz JavaFX con FXML

**Asignatura:** DSY1102 · Desarrollo Orientado a Objetos  
**Modalidad:** práctica guiada en clase (2 HP) + ampliación autónoma  
**Contexto:** empresa de arriendo de autos; aplicación pequeña e independiente para practicar una primera interfaz. **No reemplaza ni modifica PetCare.**  
**Nivel:** inicial. Sigue las etapas en orden, sin saltarte comprobaciones.

> **¡Puedes hacerlo!** No necesitas saber construir pantallas todavía. Cada sección te indica **qué vas a hacer, dónde debes hacerlo, por qué lo haces, qué deberías ver y cómo recuperarte si algo falla**. Ejecuta un paso, verifica y recién entonces continúa.

## 1. La historia: ¿qué problema vamos a resolver?

En una pequeña empresa Rent-a-Car se registran vehículos disponibles mediante su patente. Hasta ahora conoces clases, objetos y constructores, pero has usado principalmente la consola. Queremos una ventana donde la persona encargada escriba la patente de un vehículo, presione **Registrar** y vea una confirmación. Si deja la patente vacía, recibirá un aviso entendible en la propia ventana.

Construiremos tres piezas que colaboran: **vista FXML** (lo que se ve), **controlador** (qué ocurre al hacer clic) y **modelo Vehiculo** (regla de negocio: un vehículo debe tener una patente). No necesitas implementar MVC formal, bases de datos, login ni persistencia.

## 2. Al finalizar podrás

- Crear desde cero un proyecto Java + Maven en **IntelliJ IDEA** con JDK 21, y ejecutar una aplicación JavaFX desde su panel Maven.
- Distinguir **Stage** (ventana), **Scene** (contenido) y **Application** (punto de inicio).
- Crear una vista con Scene Builder y guardar un archivo **FXML** en recursos.
- Conectar `fx:id`, `fx:controller` y `onAction` a una clase Java.
- Construir un vehículo mediante su constructor y mostrar errores de entrada sin cerrar la aplicación.
- Probar entradas correctas e incorrectas, guardar evidencia y registrar tu aprendizaje.

## 3. Lo que necesitas antes de comenzar

1. **IntelliJ IDEA** instalado; partiremos desde la ventana **New Project**, sin proyecto previo.
2. **IntelliJ IDEA** instalado y abierto (utilizaremos su integración con Maven; no necesitas instalar Maven externamente).
3. **JDK 21** seleccionable o descargable desde la pantalla de creación de proyectos de IntelliJ (puedes instalarlo desde el propio IDE).
4. **Scene Builder** instalado para diseñar el formulario visualmente.
5. Internet para la primera descarga de dependencias de Maven.
6. Tu repositorio del curso, donde guardarás el trabajo y los commits.

**¿Nunca has creado un proyecto Maven?** Perfecto: [01 · Crear el proyecto desde cero en IntelliJ IDEA](01-entorno-y-arranque.md) incluye los clics desde **New Project**, elección de JDK, dependencias y ejecución.

**Conocimientos previos:** clases, constructores, atributos privados, getters y excepciones. Se explica también cómo crear paquetes y archivos dentro de IntelliJ IDEA. Si alguno te cuesta, sigue los fragmentos explicados y consulta [material de la semana](../../semanas/semana-09/).

## 4. Qué construiremos (resultado observable)

Al abrir el programa verás aproximadamente:

```text
┌──────────────────────────────────────────────┐
│          Registro de vehículo disponible         │
│  [ Patente del vehículo                   ]     │
│                 [ Registrar ]                 │
│  Completa el formulario                       │
└──────────────────────────────────────────────┘
```

**Caso correcto:** escribes `ABCD12`, haces clic y aparece `Vehículo disponible: ABCD12`.  
**Caso incorrecto:** dejas el campo vacío, haces clic y aparece `La patente no puede estar vacía`.  
La aplicación **no se cierra** cuando el dato es inválido.

### Archivos que vas a tocar

**No reutilices otro proyecto:** en el paso 01 crearás **RentACarJavaFX** en IntelliJ IDEA. Utiliza exactamente las rutas y nombres indicados para poder seguir el tutorial sin adaptar nada.

```text
RentACarJavaFX/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── cl/duoc/dsy1102/w09/demo/
        │       ├── MainApp.java
        │       ├── model/Vehiculo.java
        │       └── ui/MainController.java
        └── resources/
            └── cl/duoc/dsy1102/w09/demo/ui/MainView.fxml
```

> **Referencia técnica completa:** [proyecto-demo de la semana](../../ejemplos/semana-09/proyecto-demo/). Es una ayuda para comparar rutas y resolver bloqueos; el trabajo y la evidencia deben quedar en **tu propio repositorio**. Para evitar duplicación, cada etapa enlaza los archivos completos de esa referencia.

## 5. Ruta recomendada — no saltes etapas

| Orden | Etapa | Lo que comprobarás |
|---|---|---|
| 1 | [Entorno y primera ventana](01-entorno-y-arranque.md) | El proyecto nuevo se crea y la ventana abre desde el panel Maven de IntelliJ |
| 2 | [Diseñar el formulario FXML](02-vista-fxml.md) | Aparecen campo, botón y mensaje |
| 3 | [Conectar el clic al objeto](03-controller-eventos.md) | Se registra un vehículo y se valida la patente |
| 4 | [Probar, entregar y ampliar](04-verificacion-y-tarea.md) | Casos comprobados, evidencia y DevLog |

**Cómo estudiar:** completa todos los pasos de una etapa, haz su **checkpoint** y guarda el commit indicado. Si algo falla, lee **Si algo no funciona** de esa etapa antes de avanzar.

## 6. Criterios para considerar terminado el trabajo

- [ ] El objetivo **javafx:run** se ejecuta desde el panel Maven de IntelliJ y abre una ventana sin error.
- [ ] La interfaz se carga desde `MainView.fxml`.
- [ ] El botón lee el `TextField`, crea un `Vehiculo` y actualiza el `Label`.
- [ ] El constructor rechaza la patente vacía, incluso si se usa fuera de JavaFX.
- [ ] Hay evidencia de un caso válido y un caso inválido.
- [ ] Tu repositorio contiene los commits y el DevLog.
- [ ] Puedes explicar con tus palabras qué hace cada archivo.

**Importante:** la segunda entrada y el botón Limpiar son una **ampliación autónoma posterior**, no un bloqueo para completar el funcionamiento mínimo de clase.

## 7. Si te quedas atrás

No borres archivos ni crees proyectos nuevos para ocultar un error. **Identifica el último checkpoint que sí pasó** y vuelve a ese paso. Compara tus carpetas, rutas e imports con la [referencia ejecutable](../../ejemplos/semana-09/proyecto-demo/), anota el mensaje de error completo y pide ayuda indicando: «Estoy en la etapa X, paso Y; esperaba Z, pero obtuve W».

**Material complementario:** [conceptos semana 09](../../semanas/semana-09/), [ejercicios semana 09](../../ejercicios/semana-09/) y [guía general de laboratorios](../README.md).
