# Laboratorio · Semana 09 — Mi primera interfaz JavaFX con FXML

**Asignatura:** DSY1102 · Desarrollo Orientado a Objetos  
**Modalidad:** práctica guiada en clase (2 HP) + ampliación autónoma  
**Contexto:** empresa de arriendo de autos; aplicación pequeña e independiente para practicar una primera interfaz. **No reemplaza ni modifica PetCare.**  
**Nivel:** inicial. Sigue las etapas en orden, sin saltarte comprobaciones.

> **¡Puedes hacerlo!** No necesitas saber construir pantallas todavía. Cada sección te indica **qué vas a hacer, dónde debes hacerlo, por qué lo haces, qué deberías ver y cómo recuperarte si algo falla**. Ejecuta un paso, verifica y recién entonces continúa.

## 1. La historia: ¿qué problema vamos a resolver?

En una pequeña empresa de arriendo de autos se registran patentes de vehículos. Hasta ahora conoces clases, objetos y constructores, pero has usado principalmente la consola. Queremos una ventana donde la persona encargada escriba la patente de una vehículo, presione **Registrar** y vea una confirmación. Si deja la patente vacía, recibirá un aviso entendible en la propia ventana.

Construiremos tres piezas que colaboran: **vista FXML** (lo que se ve), **controlador** (qué ocurre al hacer clic) y **modelo Vehiculo** (regla de negocio: una vehículo debe tener patente). No necesitas implementar MVC formal, bases de datos, login ni persistencia.

## 2. Al finalizar podrás

- Comprobar Java 21 y Maven, abrir y ejecutar una aplicación JavaFX.
- Distinguir **Stage** (ventana), **Scene** (contenido) y **Application** (punto de inicio).
- Crear una vista con Scene Builder y guardar un archivo **FXML** en recursos.
- Conectar `fx:id`, `fx:controller` y `onAction` a una clase Java.
- Construir una vehículo mediante su constructor y mostrar errores de entrada sin cerrar la aplicación.
- Probar entradas correctas e incorrectas, guardar evidencia y registrar tu aprendizaje.

## 3. Lo que necesitas antes de comenzar

1. **JDK 21** instalado (no basta con tener únicamente un JRE).
2. **Maven** disponible, o Maven integrado en tu IDE.
3. **IDE** para Java (por ejemplo IntelliJ IDEA, Eclipse o VS Code con extensiones Java).
4. **Scene Builder** instalado para diseñar el formulario visualmente.
5. Internet para la primera descarga de dependencias de Maven.
6. Tu repositorio del curso, donde guardarás el trabajo y los commits.

**¿No tienes listo uno de ellos?** Entra a [01 · Entorno y arranque](01-entorno-y-arranque.md): hay comandos para revisar tu instalación y una alternativa reproducible si todavía no tienes un proyecto JavaFX funcionando.

**Conocimientos previos:** clases, constructores, atributos privados, getters, excepciones y manejo básico del IDE. Si alguno te cuesta, sigue los fragmentos explicados y consulta [material de la semana](../../semanas/semana-09/).

## 4. Qué construiremos (resultado observable)

Al abrir el programa verás aproximadamente:

```text
┌──────────────────────────────────────────────┐
│               Registro de vehículo disponible            │
│  [ Patente de la vehículo                   ]   │
│                 [ Registrar ]                 │
│  Completa el formulario                       │
└──────────────────────────────────────────────┘
```

**Caso correcto:** escribes `ABCD12`, haces clic y aparece `Vehiculo: ABCD12`.  
**Caso incorrecto:** dejas el campo vacío, haces clic y aparece `La patente no puede estar vacía`.  
La aplicación **no se cierra** cuando el dato es inválido.

### Archivos que vas a tocar

Usaremos exactamente estos patentes de ejemplo. Si tu proyecto ya existe, **respeta su paquete y rutas reales**, y adapta todas las referencias en conjunto; no dupliques un proyecto que ya te funciona.

```text
mi-primer-javafx/
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
| 1 | [Entorno y primera ventana](01-entorno-y-arranque.md) | La ventana abre desde Maven |
| 2 | [Diseñar el formulario FXML](02-vista-fxml.md) | Aparecen campo, botón y mensaje |
| 3 | [Conectar el clic al objeto](03-controller-eventos.md) | Se registra una vehículo y se valida la patente |
| 4 | [Probar, entregar y ampliar](04-verificacion-y-tarea.md) | Casos comprobados, evidencia y DevLog |

**Cómo estudiar:** completa todos los pasos de una etapa, haz su **checkpoint** y guarda el commit indicado. Si algo falla, lee **Si algo no funciona** de esa etapa antes de avanzar.

## 6. Criterios para considerar terminado el trabajo

- [ ] El comando `mvn clean javafx:run` abre el proyecto sin error.
- [ ] La interfaz se carga desde `MainView.fxml`.
- [ ] El botón lee el `TextField`, crea una `Vehiculo` y actualiza el `Label`.
- [ ] El constructor rechaza la patente vacía, incluso si se usa fuera de JavaFX.
- [ ] Hay evidencia de un caso válido y un caso inválido.
- [ ] Tu repositorio contiene los commits y el DevLog.
- [ ] Puedes explicar con tus palabras qué hace cada archivo.

**Importante:** la segunda entrada y el botón Limpiar son una **ampliación autónoma posterior**, no un bloqueo para completar el funcionamiento mínimo de clase.

## 7. Si te quedas atrás

No borres archivos ni crees proyectos nuevos para ocultar un error. **Identifica el último checkpoint que sí pasó** y vuelve a ese paso. Compara tus rutas, patentes e imports con la [referencia ejecutable](../../ejemplos/semana-09/proyecto-demo/), anota el mensaje de error completo y pide ayuda indicando: «Estoy en la etapa X, paso Y; esperaba Z, pero obtuve W».

**Material complementario:** [conceptos semana 09](../../semanas/semana-09/), [ejercicios semana 09](../../ejercicios/semana-09/) y [guía general de laboratorios](../README.md).
