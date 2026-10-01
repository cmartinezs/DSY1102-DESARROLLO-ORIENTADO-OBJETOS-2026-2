> [!IMPORTANT]
> **Material liberado para práctica.** Este documento correspondía a un diseño original de la EP1 y **no debe interpretarse como la evaluación vigente**. Se publica completo para estudio, práctica e integración de contenidos. Las referencias a AVA, habilitación secuencial y entregas por commit se conservan como parte del enunciado original, pero no implican una entrega actual.

# Evaluación Parcial 1

### Versión A · EventPass · Instrucciones Generales

| **Sigla** | **Evaluación** | **Versión** | **Documento**           |
|-----------|----------------|-------------|-------------------------|
| DSY1102   | Parcial 1      | A           | Instrucciones Generales |

## Descripción

Esta evaluación se desarrolla en seis partes acumulativas. Cada parte presenta un nuevo estado del caso de negocio y agrega requerimientos que hacen evolucionar la solución. No necesitas anticipar desde el comienzo la solución final: trabaja únicamente con los requerimientos habilitados en cada etapa.

Una parte posterior puede exigir reorganizar o corregir código escrito anteriormente. Esto forma parte de la evaluación. Antes de continuar, comprueba que lo ya construido sigue funcionando y realiza las correcciones necesarias.

## Contexto del caso de negocio

EventPass es una solución interna que una productora de eventos quiere desarrollar para dejar de administrar entradas mediante registros dispersos. La productora organiza actividades presenciales y digitales y necesita que su personal pueda registrar, consultar y operar entradas desde una aplicación Java de consola.

Una entrada representa una unidad de acceso a un evento. Un mismo evento puede tener muchas entradas asociadas, por lo que el sistema debe poder distinguir cada entrada individualmente y, al mismo tiempo, mantener la relación con el evento al que pertenece. En la operación diaria interesa conocer el valor que corresponde cobrar, si la entrada aún puede venderse y qué acciones comerciales están permitidas según sus condiciones.

El negocio crecerá durante la evaluación. La productora incorporará distintas modalidades de entrada, con reglas comerciales que pueden variar entre ellas, y algunas operaciones de postventa que no estarán disponibles para todos los casos. También aumentará la cantidad de entradas administradas, por lo que la aplicación deberá evolucionar para organizarlas y consultarlas sin perder consistencia.

El usuario de la aplicación será personal interno de la productora. No se requiere interfaz gráfica: el flujo se realizará por consola y debe permitir ingresar datos, ejecutar operaciones de negocio y recibir mensajes claros cuando una acción no sea válida.

## Alcance general del sistema

- Identificar y administrar entradas individuales asociadas a eventos.

- Calcular valores de venta y aplicar reglas comerciales cuando corresponda.

- Controlar la disponibilidad y evitar operaciones incompatibles con el estado de una entrada.

- Permitir que el modelo crezca hacia distintas modalidades de entrada sin duplicar innecesariamente lo que comparten.

- Administrar una cantidad creciente de entradas y facilitar su consulta dentro del sistema.

- Mantener un flujo comprensible frente a datos u operaciones inválidas.

## Cómo se habilitan los requerimientos

El contexto completo del negocio se presenta en este documento para que comprendas qué problema se está resolviendo. Sin embargo, las reglas exactas, restricciones evaluables y decisiones de implementación se irán habilitando en las Partes 1 a 6. No debes anticipar desde el comienzo la solución final: implementa únicamente lo solicitado en la etapa disponible y evoluciona el mismo proyecto cuando aparezcan nuevos requerimientos.

## Reglas generales de trabajo

- Trabaja siempre sobre el mismo proyecto del repositorio personal del curso.

- El código de EV1 debe mantenerse dentro de evaluaciones/ev1/src.

- El proyecto debe compilar y ejecutarse correctamente al cerrar cada etapa.

- Conserva las funcionalidades ya solicitadas salvo que un nuevo requerimiento indique explícitamente que deben evolucionar.

- Lee primero la situación y las reglas de la parte habilitada; luego decide cómo incorporarlas al diseño existente.

## Entrega de cada parte

- Guarda o actualiza el código correspondiente dentro de evaluaciones/ev1/src.

- Crea un commit que identifique claramente la parte entregada, por ejemplo: EV1 - Parte 3.

- Realiza push a tu repositorio en GitHub.

- Abre en GitHub el commit exacto de esa entrega y copia su URL.

- En AVA entrega únicamente el enlace directo al commit exacto. No entregues el enlace general del repositorio, de la rama ni de la carpeta.

La siguiente parte será habilitada una vez realizada la entrega anterior.

**Guía de apoyo Git/GitHub:** [Abrir guía](https://cmartinezs.github.io/FPY1101-FUNDAMENTOS-PROGRAMACION/guide/git-github.html)

## Antes de entregar

- Ejecuta el proyecto y prueba al menos un caso correcto y un caso límite o incorrecto relacionado con la etapa.

- No te limites a verificar que el código compile: confirma que el comportamiento responde a los requerimientos habilitados hasta ese momento.


---

# Evaluación Parcial 1

### Versión A · EventPass · Parte 1 · Análisis

| **Sigla** | **Evaluación** | **Versión** | **Documento**      |
|-----------|----------------|-------------|--------------------|
| DSY1102   | Parcial 1      | A           | Parte 1 · Análisis |

> **Continuidad:** el proyecto entregado en la parte anterior.

Para esta primera etapa debe existir una clase Entrada que represente la entidad principal del caso. Antes de agregar más componentes al sistema, construye una base clara y explícita a partir de los datos y reglas iniciales.

## Requerimientos

En esta etapa se construirá la primera representación funcional del negocio. El sistema debe poder registrar una entrada individual, conservar sus datos principales y aplicar las reglas básicas de validez y estado definidas para una entrada recién creada.

### Funcionales

- El sistema debe permitir registrar una entrada almacenando su código, nombre del evento y precio base.

- El código es obligatorio y debe identificar la entrada; no puede quedar vacío.

- El nombre del evento es obligatorio y no puede quedar vacío.

- El precio base debe ser mayor que cero.

- Toda entrada nueva debe comenzar disponible.

- Debe ser posible consultar los datos de la entrada, conocer si continúa disponible, calcular su precio actual y venderla solo mientras se encuentre disponible.

### Técnicos

- Crea una clase llamada Entrada.

- La clase debe declarar los atributos privados String codigo, String nombreEvento, double precioBase y boolean disponible.

- codigo, nombreEvento y precioBase reciben su valor al construir el objeto. disponible no se recibe como parámetro: debe inicializarse internamente con valor true.

- Implementa el constructor Entrada(String codigo, String nombreEvento, double precioBase). En esta etapa se espera que el registro entregue valores válidos; el constructor debe asignarlos y dejar disponible en true.

- Implementa los getters getCodigo(), getNombreEvento(), getPrecioBase() e isDisponible().

- Implementa setNombreEvento(String nombreEvento) y setPrecioBase(double precioBase) respetando las mismas reglas de validez. No crees setter público para codigo ni para disponible.

- Implementa double calcularPrecioFinal(). En esta etapa debe retornar el precio base de la entrada.

- Implementa boolean vender(). Si la entrada está disponible debe cambiar su estado a no disponible y retornar true; si ya no está disponible, no debe modificar el estado y debe retornar false.

## Trabajo de análisis

- Explica con tus palabras qué representa Entrada dentro del negocio.

- Explica por qué los tipos de datos indicados son adecuados para representar la información solicitada; justifica al menos dos de ellos.

- Identifica cuáles son reglas de validez de los datos y cuáles dependen del estado del objeto.

- Distingue qué información debe guardar la entidad y qué comportamientos debería resolver por sí misma.

- Registra este análisis en un comentario al inicio del proyecto o en un archivo de texto incluido dentro de evaluaciones/ev1.

## Al comenzar esta parte

[ ] He leído únicamente los requerimientos habilitados para la Parte 1.

[ ] Todavía no necesito anticipar herencia, colecciones ni la estructura final del sistema.

## Antes de avanzar, verifica

[ ] Existe una representación clara de Entrada y puedo explicar qué problema resuelve.

[ ] Implementé los atributos con los nombres, tipos y valores iniciales indicados.

[ ] Identifiqué al menos dos reglas de validez o estado.

[ ] Puedo distinguir datos de comportamientos.

## Pruebas o preguntas sugeridas

- Imagina dos objetos Entrada con información parecida: ¿qué dato permite distinguirlos?

- ¿Qué debería ocurrir si uno de los valores obligatorios queda vacío o recibe un valor numérico no válido?

- ¿Qué acciones deberían modificar el estado del objeto y cuáles solo deberían consultar información?

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 1.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

La parte siguiente será habilitada después de registrar esta entrega.


---

# Evaluación Parcial 1

### Versión A · EventPass · Parte 2 · Java elemental

| **Sigla** | **Evaluación** | **Versión** | **Documento**            |
|-----------|----------------|-------------|--------------------------|
| DSY1102   | Parcial 1      | A           | Parte 2 · Java elemental |

> **Continuidad:** el proyecto entregado en la parte anterior.

Con el análisis anterior, ahora se requiere una primera versión ejecutable de EventPass. La aplicación debe crear y utilizar objetos Entrada, aplicar reglas simples del negocio y permitir que una persona pruebe las operaciones desde consola. En esta etapa importa que el programa funcione y que la lógica comience a quedar dentro de la entidad, aunque todavía no sea la arquitectura definitiva.

## Requerimientos

A partir de la entidad construida en la Parte 1, EventPass debe transformarse en una aplicación de consola que permita registrar y operar una entrada. En esta etapa se incorpora interacción repetida con el usuario y una segunda forma de calcular el precio cuando existe un descuento comercial.

### Funcionales

- La aplicación debe solicitar por consola los datos necesarios para registrar una entrada y mostrar posteriormente su información.

- El usuario debe poder consultar el precio normal o calcular un precio aplicando un porcentaje de descuento autorizado.

- El porcentaje de descuento debe encontrarse entre 0 y 100.

- El usuario debe poder vender la entrada y recibir un mensaje que indique si la operación fue realizada o rechazada por su estado.

- La aplicación debe presentar un menú que se repita hasta que el usuario seleccione la opción de salida.

- Las opciones inválidas del menú y los valores simples fuera de rango deben volver a solicitarse sin terminar el flujo normal de la aplicación.

### Técnicos

- Mantén la clase Entrada y agrega una sobrecarga double calcularPrecioFinal(double porcentajeDescuento) sin eliminar calcularPrecioFinal().

- La variante con descuento debe calcular el porcentaje sobre el precio base y retornar el precio resultante.

- Crea una clase Main con el método main como punto de entrada de la aplicación.

- Utiliza una única instancia de Scanner para la lectura por consola.

- Implementa el menú con un ciclo do-while y resuelve sus opciones principales mediante switch.

- Utiliza if/else para las decisiones que dependan de reglas o estados del negocio.

- Para valores que ya pudieron ser leídos correctamente, utiliza ciclos para repetir la solicitud cuando estén fuera del rango permitido.

## Al comenzar esta parte

[ ] Conservo el análisis de la Parte 1.

[ ] Tengo definidos los datos y reglas iniciales de la entidad.

## Antes de avanzar, verifica

[ ] El proyecto compila y ejecuta.

[ ] Puedo instanciar un objeto válido mediante su constructor.

[ ] Los atributos no están expuestos directamente.

[ ] Existen métodos con parámetros y retorno cuando la lógica lo requiere.

[ ] Existe una sobrecarga válida y ambas variantes funcionan.

[ ] El menú puede ejecutar varias opciones antes de salir.

## Pruebas sugeridas

- Crear un objeto válido y mostrar su información.

- Ejecutar las dos variantes del cálculo sobrecargado.

- Probar una opción válida y otra inexistente del menú.

- Ejecutar una acción permitida y luego repetirla cuando el estado ya no lo permita.

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 2.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

La parte siguiente será habilitada después de registrar esta entrega.


---

# Evaluación Parcial 1

### Versión A · EventPass · Parte 3 · Diseño POO y SRP

| **Sigla** | **Evaluación** | **Versión** | **Documento**              |
|-----------|----------------|-------------|----------------------------|
| DSY1102   | Parcial 1      | A           | Parte 3 · Diseño POO y SRP |

> **Continuidad:** el proyecto entregado en la parte anterior.

La primera versión funciona, pero Main ya está leyendo datos, creando entradas, mostrando el menú y aplicando parte de las reglas. La productora quiere seguir agregando funciones sin convertir Main en una clase difícil de mantener.

## Requerimientos

La aplicación ya funciona, pero ahora debe reorganizarse para que la lectura de consola, la coordinación del programa y las reglas del negocio no queden mezcladas en Main. La funcionalidad existente debe mantenerse mientras se distribuyen mejor las responsabilidades.

### Funcionales

- El usuario debe conservar las operaciones disponibles en la Parte 2.

- La lectura y validación básica de datos debe poder reutilizarse desde distintas opciones del menú.

- El registro de una entrada debe ser administrado por una clase responsable del caso de negocio, en lugar de construirse directamente dentro de Main.

- Las reglas que dependen del estado de una entrada deben continuar siendo responsabilidad de la propia entidad.

### Técnicos

- Crea una clase LecturaEntrada que encapsule el Scanner utilizado por la aplicación.

- Como mínimo, implementa leerTextoNoVacio(String mensaje), leerDoublePositivo(String mensaje), leerDoubleEnRango(String mensaje, double minimo, double maximo) y leerEnteroEnRango(String mensaje, int minimo, int maximo).

- Crea una clase EventPass como responsable de coordinar las operaciones generales del caso de negocio.

- EventPass debe incorporar una operación de registro que reciba los datos necesarios y construya el objeto Entrada, evitando que Main use directamente new Entrada(...).

- Main debe mantener las instancias compartidas de LecturaEntrada y EventPass, mostrar el menú y coordinar las llamadas entre estas clases.

- Mantén Entrada como responsable de sus validaciones y cambios de estado.

## Al comenzar esta parte

[ ] La Parte 2 funciona y puedo operar desde el menú.

[ ] Puedo identificar qué tareas realiza actualmente Main.

## Antes de avanzar, verifica

[ ] Main coordina y no concentra toda la lógica.

[ ] La lectura de consola está separada y puede reutilizarse.

[ ] Existe una clase responsable de administrar las operaciones generales.

[ ] La entidad conserva sus reglas propias.

[ ] Puedo explicar en una frase la responsabilidad principal de cada clase.

## Pruebas sugeridas

- Registrar un elemento desde Main sin construir directamente el objeto concreto del dominio.

- Ingresar datos desde distintas opciones y comprobar que la lectura reutiliza la misma responsabilidad.

- Modificar una regla de negocio y verificar que el cambio queda localizado en la clase adecuada.

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 3.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

La parte siguiente será habilitada después de registrar esta entrega.


---

# Evaluación Parcial 1

### Versión A · EventPass · Parte 4 · Herencia, abstracción, interfaces y polimorfismo

| **Sigla** | **Evaluación** | **Versión** | **Documento**                                              |
|-----------|----------------|-------------|------------------------------------------------------------|
| DSY1102   | Parcial 1      | A           | Parte 4 · Herencia, abstracción, interfaces y polimorfismo |

> **Continuidad:** el proyecto entregado en la parte anterior.

El negocio ya no trabaja con un solo tipo de Entrada. A partir de ahora existen Entrada General, Entrada VIP y Entrada Streaming. Los tres tipos comparten la información y parte del comportamiento construido hasta ahora, pero algunas reglas cambian según el tipo concreto.

## Requerimientos

EventPass debe evolucionar para representar tres tipos de entrada que comparten datos y operaciones, pero calculan su precio de forma diferente. Además, solo algunos tipos pueden ofrecer reembolso. El modelo debe representar estas diferencias sin duplicar lo que todos los tipos tienen en común.

### Funcionales

- El sistema debe permitir trabajar con Entrada General, Entrada VIP y Entrada Streaming.

- La Entrada General mantiene el precio base como precio final.

- La Entrada VIP aplica un recargo de 30% sobre el precio base.

- La Entrada Streaming aplica un recargo de 10% sobre el precio base.

- Las entradas VIP permiten calcular un reembolso equivalente al 80% de su precio final.

- Las entradas Streaming permiten calcular un reembolso equivalente al 90% de su precio final.

- Las entradas General no admiten reembolso.

- El sistema debe poder operar con los distintos tipos mediante una referencia común y obtener el cálculo correspondiente al objeto real.

### Técnicos

- Convierte Entrada en una clase abstracta y conserva en ella los atributos y comportamientos comunes.

- Declara calcularPrecioFinal() como comportamiento abstracto que cada subtipo debe implementar.

- Crea las clases EntradaGeneral, EntradaVip y EntradaStreaming heredando de Entrada. Cada clase debe tener un constructor que reciba los datos comunes y los envíe al constructor de la clase base mediante super(...); además debe sobrescribir el cálculo de precio según las reglas funcionales.

- Mantén la sobrecarga de cálculo con descuento de forma compatible con el nuevo cálculo especializado; el descuento debe aplicarse sobre el precio final calculado para el subtipo.

- Crea una interfaz Reembolsable con una operación double calcularMontoReembolso().

- EntradaVip y EntradaStreaming deben implementar Reembolsable; EntradaGeneral no debe implementarla.

- Utiliza super y @Override donde corresponda.

- No utilices cadenas de if/else ni comprobaciones explícitas del tipo concreto para decidir qué cálculo de precio debe ejecutarse.

## Al comenzar esta parte

[ ] Las responsabilidades de la Parte 3 están separadas.

[ ] El comportamiento inicial del objeto continúa funcionando.

## Antes de avanzar, verifica

[ ] Existe una generalización común para los tipos nuevos.

[ ] Lo compartido no está duplicado innecesariamente.

[ ] El comportamiento variable queda obligado y especializado en los tipos concretos.

[ ] La capacidad opcional se representa mediante un contrato y solo la implementan los tipos correspondientes.

[ ] Una referencia del tipo común ejecuta el comportamiento particular del objeto real.

## Pruebas sugeridas

- Crear al menos dos tipos concretos y ejecutar el mismo cálculo desde referencias del tipo común.

- Comprobar que el resultado cambia según el objeto real sin preguntar explícitamente por su clase concreta.

- Probar la capacidad adicional con un objeto que la posee y otro que no.

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 4.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

La parte siguiente será habilitada después de registrar esta entrega.


---

# Evaluación Parcial 1

### Versión A · EventPass · Parte 5 · List, Set y Map

| **Sigla** | **Evaluación** | **Versión** | **Documento**             |
|-----------|----------------|-------------|---------------------------|
| DSY1102   | Parcial 1      | A           | Parte 5 · List, Set y Map |

> **Continuidad:** el proyecto entregado en la parte anterior.

El sistema ya trabaja con distintos tipos de Entrada y ahora debe administrar una cantidad variable de elementos. Además, el negocio necesita resolver tres necesidades diferentes: mantener el conjunto principal, obtener información sin repeticiones y localizar rápidamente un elemento por su identificador.

## Requerimientos

EventPass ahora debe administrar una cantidad variable de entradas y resolver tres necesidades distintas de organización: mantener la colección principal, obtener nombres de eventos sin repetición y localizar una entrada directamente por su código.

### Funcionales

- El sistema debe poder registrar una cantidad variable de entradas de distintos subtipos y recorrerlas como elementos del tipo común.

- Debe ser posible listar todas las entradas y mostrar el cálculo especializado de cada una.

- Debe existir una consulta que muestre únicamente las entradas que continúan disponibles.

- El sistema debe obtener los nombres de los eventos con entradas registradas sin repetir un mismo nombre.

- Debe ser posible buscar directamente una entrada por su código.

- No debe aceptarse el registro de un código que ya se encuentre utilizado.

- Como contraste previo, debe comprobarse mediante un arreglo de tres posiciones una limitación concreta frente a una cantidad de elementos que puede crecer.

### Técnicos

- EventPass debe declarar List\<Entrada\> entradas como colección principal e inicializarla con new ArrayList\<\>().

- Declara Set\<String\> eventos para los nombres de eventos sin repetición e inicialízalo con new HashSet\<\>().

- Declara Map\<String, Entrada\> entradasPorCodigo para la búsqueda por código e inicialízalo con new HashMap\<\>().

- Al registrar una entrada, mantén consistentes la List y el Map; utiliza el índice por código para detectar duplicados antes de incorporar el nuevo objeto.

- El Set debe construirse o mantenerse a partir de los nombres de evento de las entradas registradas, de modo que la unicidad dependa de la estructura y no de comparaciones manuales.

- La colección principal debe recorrerse utilizando referencias Entrada, permitiendo que el polimorfismo resuelva el comportamiento especializado.

- Antes de la solución final, crea temporalmente un Entrada\[\] de tamaño 3, recórrelo con for y documenta en un comentario una limitación observada frente a List.

## Al comenzar esta parte

[ ] La jerarquía y el polimorfismo de la Parte 4 funcionan.

[ ] Puedo crear varios subtipos concretos y tratarlos mediante el tipo común.

## Antes de avanzar, verifica

[ ] Probé un arreglo del tipo común y puedo explicar por qué una capacidad fija no resuelve el escenario final.

[ ] La solución final utiliza una List parametrizada con el tipo común.

[ ] Puedo almacenar subtipos distintos en la misma List y recorrerlos polimórficamente.

[ ] Existe un Set que permite obtener nombres de eventos sin repeticiones.

[ ] Existe un Map que permite recuperar un Entrada mediante su código.

[ ] Registrar un nuevo elemento mantiene consistentes las estructuras utilizadas.

[ ] Existe al menos una consulta o filtro sobre la colección principal.

## Pruebas sugeridas

- Ejecutar con la colección principal vacía.

- Registrar un elemento y luego varios de tipos diferentes.

- Buscar un código existente y otro inexistente mediante el índice.

- registrar varias entradas para un mismo evento y comprobar que el nombre del evento aparece una sola vez en el conjunto sin repeticiones.

- Intentar registrar un Entrada con un código ya utilizado y comprobar que no se duplique.

- Recorrer la List y verificar que cada subtipo ejecute su comportamiento especializado.

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 5.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

La parte siguiente será habilitada después de registrar esta entrega.


---

# Evaluación Parcial 1

### Versión A · EventPass · Parte 6 · Excepciones e integración

| **Sigla** | **Evaluación** | **Versión** | **Documento**                       |
|-----------|----------------|-------------|-------------------------------------|
| DSY1102   | Parcial 1      | A           | Parte 6 · Excepciones e integración |

> **Continuidad:** el proyecto entregado en la parte anterior.

La aplicación de EventPass ya integra el modelo orientado a objetos y las estructuras necesarias para administrar múltiples elementos. En la etapa final debe comportarse de forma controlada frente a entradas inesperadas y operaciones que contradicen las reglas del negocio. En esta parte la orientación es menor: analiza dónde nace cada problema y decide qué componente debe detectarlo sin desordenar las responsabilidades construidas.

## Requerimientos

La solución completa debe mantenerse operativa frente a datos incorrectos y operaciones incompatibles con las reglas del negocio. En esta etapa final se espera que decidas dónde corresponde detectar cada problema sin romper la separación de responsabilidades lograda en las partes anteriores.

### Funcionales

- Si el usuario ingresa texto cuando se espera un número, la aplicación debe informar el error y volver a solicitar el dato.

- Los precios y porcentajes fuera del rango permitido deben rechazarse antes de ser procesados.

- No debe ser posible vender una entrada que ya fue vendida.

- No debe ejecutarse un reembolso sobre un tipo de entrada que no admite esa capacidad.

- Los códigos duplicados deben ser rechazados y una búsqueda por código inexistente debe informar claramente que no se encontró la entrada.

- Después de un error controlado, el menú debe continuar funcionando hasta que el usuario decida salir.

### Técnicos

- Centraliza el control de errores de lectura en la responsabilidad encargada de la entrada por consola y utiliza try/catch para los errores de conversión que puedan producirse.

- Mantén las validaciones de rango cerca del punto donde se leen o modifican los datos y las reglas de estado dentro de las clases de dominio correspondientes.

- Utiliza excepciones de forma específica cuando ayuden a representar una condición inválida; evita capturar Exception de manera general para ocultar errores.

- La clase de gestión debe continuar controlando reglas de registro y búsqueda, como códigos duplicados o inexistentes.

- No reemplaces el polimorfismo, las interfaces ni las colecciones por lógica condicional durante el manejo de errores.

- Todos los requerimientos acumulados de las Partes 1 a 5 deben continuar funcionando en la solución final.

## Control final antes de entregar

[ ] El proyecto compila desde cero y ejecuta sin modificaciones manuales.

[ ] Una entrada no numérica no cierra el programa.

[ ] Los valores fuera de rango se rechazan antes de procesarse.

[ ] Las operaciones incompatibles con el estado del objeto muestran un mensaje claro.

[ ] Después de un error, el menú continúa funcionando.

[ ] Puedo registrar y operar con distintos subtipos.

[ ] La capacidad definida por interfaz solo funciona donde corresponde.

[ ] List, Set y Map siguen cumpliendo sus propósitos sin inconsistencias.

[ ] Los requerimientos acumulados de las seis partes siguen funcionando.

## Batería mínima de pruebas antes de la entrega final

- Camino feliz: registrar una entrada de cada tipo → listar → consultar eventos sin repetir → buscar por código → calcular precio → vender → probar reembolso cuando corresponda.

- Entrada inválida: escribe texto cuando se espera un número y verifica que se vuelva a solicitar.

- Límite de negocio: prueba cero, un valor negativo o un estado no permitido según corresponda.

- Polimorfismo: opera al menos dos subtipos mediante una referencia del tipo común.

- Interfaz: prueba un objeto que posee la capacidad y otro que no.

- Colecciones: registra al menos tres objetos, recorre la List, verifica el resultado único del Set y realiza una búsqueda mediante el Map.

- Reinicio: cierra la aplicación, vuelve a ejecutarla y confirma que el proyecto compila y parte limpio.

## Última orientación

No agregues try/catch en todos lados. Distingue entre errores de lectura, validaciones de rango y reglas propias del dominio. El objetivo es que cada problema sea controlado por el componente que corresponde y que la aplicación pueda continuar de forma comprensible.

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 6.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

Este commit corresponde a la entrega final de EV1.
