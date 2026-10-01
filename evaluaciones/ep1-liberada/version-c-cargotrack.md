> [!IMPORTANT]
> **Material liberado para práctica.** Este documento correspondía a un diseño original de la EP1 y **no debe interpretarse como la evaluación vigente**. Se publica completo para estudio, práctica e integración de contenidos. Las referencias a AVA, habilitación secuencial y entregas por commit se conservan como parte del enunciado original, pero no implican una entrega actual.

# Evaluación Parcial 1

### Versión C · CargoTrack · Instrucciones Generales

| **Sigla** | **Evaluación** | **Versión** | **Documento**           |
|-----------|----------------|-------------|-------------------------|
| DSY1102   | Parcial 1      | C           | Instrucciones Generales |

## Descripción

Esta evaluación se desarrolla en seis partes acumulativas. Cada parte presenta un nuevo estado del caso de negocio y agrega requerimientos que hacen evolucionar la solución. No necesitas anticipar desde el comienzo la solución final: trabaja únicamente con los requerimientos habilitados en cada etapa.

Una parte posterior puede exigir reorganizar o corregir código escrito anteriormente. Esto forma parte de la evaluación. Antes de continuar, comprueba que lo ya construido sigue funcionando y realiza las correcciones necesarias.

## Contexto del caso de negocio

CargoTrack es una solución interna para una empresa de distribución que necesita administrar sus envíos mediante una aplicación Java de consola. La empresa recibe solicitudes de despacho, calcula costos y realiza seguimiento del avance de cada envío desde que es registrado hasta que llega a destino.

Cada envío debe poder identificarse individualmente y asociarse a un destinatario. Un mismo destinatario puede recibir más de un envío, por lo que el sistema debe distinguir cada operación sin perder la relación con la persona que recibe la carga. El costo depende de información propia del envío y de las condiciones comerciales aplicables.

La empresa ofrece distintos niveles de servicio. Algunos envíos requieren mayor rapidez o condiciones adicionales y ciertas capacidades, como servicios complementarios, no aplican de la misma manera a todos los casos. El sistema deberá evolucionar para representar estas diferencias sin duplicar innecesariamente lo que todos los envíos comparten.

El usuario de la aplicación será personal interno de distribución. Desde consola deberá poder registrar envíos, consultar información, avanzar sus estados y ejecutar operaciones permitidas, manteniendo un comportamiento claro cuando los datos ingresados o las acciones solicitadas no sean válidos.

## Alcance general del sistema

- Identificar y administrar envíos individuales asociados a destinatarios.

- Calcular costos según las condiciones del envío y aplicar reglas comerciales cuando corresponda.

- Controlar el avance de un envío desde su registro hasta su entrega.

- Permitir que distintos servicios de envío compartan una base común y mantengan reglas particulares.

- Administrar múltiples envíos y facilitar su consulta dentro del sistema.

- Evitar estados u operaciones inconsistentes y mantener el flujo frente a entradas inválidas.

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

### Versión C · CargoTrack · Parte 1 · Análisis

| **Sigla** | **Evaluación** | **Versión** | **Documento**      |
|-----------|----------------|-------------|--------------------|
| DSY1102   | Parcial 1      | C           | Parte 1 · Análisis |

> **Continuidad:** el proyecto entregado en la parte anterior.

Para esta primera etapa debe existir una clase Envio que represente la entidad principal del caso. Antes de agregar más componentes al sistema, construye una base clara y explícita a partir de los datos y reglas iniciales.

## Requerimientos

En esta etapa se construirá la primera representación funcional de un envío. El sistema debe poder registrar un envío individual, conservar sus datos principales, calcular su costo inicial y controlar sus primeros cambios de estado.

### Funcionales

- El sistema debe permitir registrar un envío almacenando su código, destinatario, peso en kilogramos y tarifa base por kilogramo.

- El código es obligatorio, identifica el envío y no puede quedar vacío.

- El destinatario es obligatorio y no puede quedar vacío.

- El peso y la tarifa base por kilogramo deben ser mayores que cero.

- Todo envío nuevo debe comenzar en estado PENDIENTE.

- Debe ser posible consultar sus datos, calcular su costo, despachar un envío pendiente y marcarlo como entregado únicamente después de haber sido despachado.

### Técnicos

- Crea una clase llamada Envio.

- La clase debe declarar los atributos privados String codigo, String destinatario, double pesoKg, double tarifaBaseKg y String estado.

- codigo, destinatario, pesoKg y tarifaBaseKg reciben su valor al construir el objeto. estado no se recibe como parámetro: debe inicializarse internamente con valor PENDIENTE.

- Implementa el constructor Envio(String codigo, String destinatario, double pesoKg, double tarifaBaseKg). En esta etapa se espera que el registro entregue valores válidos; el constructor debe asignarlos y dejar estado en PENDIENTE.

- Implementa los getters getCodigo(), getDestinatario(), getPesoKg(), getTarifaBaseKg() y getEstado().

- Implementa setDestinatario(String destinatario), setPesoKg(double pesoKg) y setTarifaBaseKg(double tarifaBaseKg) respetando las reglas de validez. No crees setter público para codigo ni para estado.

- Implementa double calcularCosto() retornando pesoKg \* tarifaBaseKg.

- Implementa boolean despachar(): solo debe cambiar de PENDIENTE a DESPACHADO cuando la transición sea válida.

- Implementa boolean marcarEntregado(): solo debe cambiar de DESPACHADO a ENTREGADO cuando la transición sea válida.

## Trabajo de análisis

- Explica con tus palabras qué representa Envio dentro del negocio.

- Explica por qué los tipos de datos indicados son adecuados para representar la información solicitada; justifica al menos dos de ellos.

- Identifica cuáles son reglas de validez de los datos y cuáles dependen del estado del objeto.

- Distingue qué información debe guardar la entidad y qué comportamientos debería resolver por sí misma.

- Registra este análisis en un comentario al inicio del proyecto o en un archivo de texto incluido dentro de evaluaciones/ev1.

## Al comenzar esta parte

[ ] He leído únicamente los requerimientos habilitados para la Parte 1.

[ ] Todavía no necesito anticipar herencia, colecciones ni la estructura final del sistema.

## Antes de avanzar, verifica

[ ] Existe una representación clara de Envio y puedo explicar qué problema resuelve.

[ ] Implementé los atributos con los nombres, tipos y valores iniciales indicados.

[ ] Identifiqué al menos dos reglas de validez o estado.

[ ] Puedo distinguir datos de comportamientos.

## Pruebas o preguntas sugeridas

- Imagina dos objetos Envio con información parecida: ¿qué dato permite distinguirlos?

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

### Versión C · CargoTrack · Parte 2 · Java elemental

| **Sigla** | **Evaluación** | **Versión** | **Documento**            |
|-----------|----------------|-------------|--------------------------|
| DSY1102   | Parcial 1      | C           | Parte 2 · Java elemental |

> **Continuidad:** el proyecto entregado en la parte anterior.

Con el análisis anterior, ahora se requiere una primera versión ejecutable de CargoTrack. La aplicación debe crear y utilizar objetos Envio, aplicar reglas simples del negocio y permitir que una persona pruebe las operaciones desde consola. En esta etapa importa que el programa funcione y que la lógica comience a quedar dentro de la entidad, aunque todavía no sea la arquitectura definitiva.

## Requerimientos

CargoTrack debe transformarse en una aplicación de consola que permita registrar y operar un envío. Se incorpora interacción repetida y una segunda forma de calcular el costo cuando existe un descuento comercial.

### Funcionales

- La aplicación debe solicitar por consola los datos necesarios para registrar un envío y mostrar posteriormente su información.

- El usuario debe poder consultar el costo normal o calcular un costo aplicando un porcentaje de descuento autorizado.

- El porcentaje de descuento debe encontrarse entre 0 y 100.

- El usuario debe poder despachar un envío pendiente y marcar como entregado un envío despachado, recibiendo mensajes claros cuando la transición sea inválida.

- La aplicación debe presentar un menú que se repita hasta que el usuario seleccione salir.

- Las opciones inválidas y los valores simples fuera de rango deben volver a solicitarse sin terminar el flujo normal.

### Técnicos

- Mantén Envio y agrega la sobrecarga double calcularCosto(double porcentajeDescuento) sin eliminar calcularCosto().

- La variante con descuento debe aplicar el porcentaje sobre el costo calculado por peso y tarifa.

- Crea una clase Main con el método main.

- Utiliza una única instancia de Scanner para la lectura por consola.

- Implementa el menú con do-while y resuelve las opciones principales con switch.

- Utiliza if/else para decisiones asociadas a reglas y estados.

- Para valores que ya pudieron leerse correctamente, utiliza ciclos para repetir la solicitud cuando estén fuera del rango permitido.

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

### Versión C · CargoTrack · Parte 3 · Diseño POO y SRP

| **Sigla** | **Evaluación** | **Versión** | **Documento**              |
|-----------|----------------|-------------|----------------------------|
| DSY1102   | Parcial 1      | C           | Parte 3 · Diseño POO y SRP |

> **Continuidad:** el proyecto entregado en la parte anterior.

La primera versión comienza a crecer: Main lee datos, crea envíos, modifica estados y realiza cálculos. La empresa necesita separar la interacción de consola, la administración de los envíos y las reglas propias del dominio.

## Requerimientos

La funcionalidad de CargoTrack debe mantenerse, pero la solución debe separar la interacción de consola, la administración de envíos y las reglas propias de cada objeto.

### Funcionales

- El usuario debe conservar las operaciones disponibles en la Parte 2.

- La lectura y validación básica de datos debe poder reutilizarse desde distintas opciones del menú.

- El registro de un envío debe ser administrado por una clase responsable del caso de negocio y no construirse directamente dentro de Main.

- Los cálculos y transiciones de estado propias del envío deben continuar dentro de la entidad.

### Técnicos

- Crea una clase LecturaEntrada que encapsule el Scanner de la aplicación.

- Como mínimo, implementa leerTextoNoVacio(String mensaje), leerDoublePositivo(String mensaje), leerDoubleEnRango(String mensaje, double minimo, double maximo) y leerEnteroEnRango(String mensaje, int minimo, int maximo).

- Crea una clase CargoTrack responsable de coordinar las operaciones generales del caso de negocio.

- CargoTrack debe incorporar una operación de registro que reciba los datos necesarios y construya Envio, evitando que Main use directamente new Envio(...).

- Main debe mantener una única instancia compartida de LecturaEntrada y una de CargoTrack (por ejemplo, como atributos private static final), mostrar el menú y coordinar las llamadas.

- Mantén Envio como responsable de sus validaciones, cálculos y cambios de estado.

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

### Versión C · CargoTrack · Parte 4 · Herencia, abstracción, interfaces y polimorfismo

| **Sigla** | **Evaluación** | **Versión** | **Documento**                                              |
|-----------|----------------|-------------|------------------------------------------------------------|
| DSY1102   | Parcial 1      | C           | Parte 4 · Herencia, abstracción, interfaces y polimorfismo |

> **Continuidad:** el proyecto entregado en la parte anterior.

El negocio ya no trabaja con un solo tipo de Envio. A partir de ahora existen Envío Nacional, Envío Express y Envío Internacional. Los tres tipos comparten la información y parte del comportamiento construido hasta ahora, pero algunas reglas cambian según el tipo concreto.

## Requerimientos

CargoTrack debe representar distintos tipos de envío que comparten información y estados, pero calculan su costo de forma diferente. Solo algunos tipos permiten calcular un seguro adicional.

### Funcionales

- El sistema debe permitir trabajar con Envío Nacional, Envío Express y Envío Internacional.

- El Envío Nacional calcula su costo mediante peso × tarifa base.

- El Envío Express aplica un recargo de 50% sobre el costo calculado por peso.

- El Envío Internacional aplica un recargo de 100% sobre el costo calculado por peso.

- Los envíos Express permiten calcular un seguro equivalente al 5% de su costo final.

- Los envíos Internacionales permiten calcular un seguro equivalente al 8% de su costo final.

- Los envíos Nacionales no admiten seguro adicional.

- El sistema debe poder operar con todos los tipos mediante una referencia común y obtener el comportamiento correspondiente al objeto real.

### Técnicos

- Convierte Envio en una clase abstracta conservando sus atributos, estado y comportamientos comunes.

- Declara calcularCosto() como comportamiento abstracto.

- Crea EnvioNacional, EnvioExpress y EnvioInternacional heredando de Envio. Cada clase debe tener un constructor que reciba los datos comunes y los envíe a la clase base mediante super(...); además debe sobrescribir el cálculo según las reglas funcionales.

- Mantén la sobrecarga con descuento de forma compatible con el cálculo especializado; el descuento debe aplicarse sobre el costo final del subtipo.

- Crea una interfaz Asegurable con una operación double calcularSeguro().

- EnvioExpress y EnvioInternacional deben implementar Asegurable; EnvioNacional no debe implementarla.

- Utiliza super y @Override donde corresponda.

- No utilices cadenas de if/else ni comprobaciones explícitas del tipo concreto para decidir qué cálculo de costo ejecutar.

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

### Versión C · CargoTrack · Parte 5 · List, Set y Map

| **Sigla** | **Evaluación** | **Versión** | **Documento**             |
|-----------|----------------|-------------|---------------------------|
| DSY1102   | Parcial 1      | C           | Parte 5 · List, Set y Map |

> **Continuidad:** el proyecto entregado en la parte anterior.

El sistema ya trabaja con distintos tipos de Envio y ahora debe administrar una cantidad variable de elementos. Además, el negocio necesita resolver tres necesidades diferentes: mantener el conjunto principal, obtener información sin repeticiones y localizar rápidamente un elemento por su identificador.

## Requerimientos

CargoTrack debe administrar una cantidad variable de envíos y resolver por separado el almacenamiento principal, la obtención de destinatarios sin repetición y la búsqueda directa por código.

### Funcionales

- El sistema debe poder registrar una cantidad variable de envíos de distintos subtipos y recorrerlos como elementos del tipo común.

- Debe ser posible listar los envíos mostrando el cálculo especializado de cada uno.

- Debe existir una consulta de envíos según su estado.

- El sistema debe obtener los nombres de destinatarios con envíos registrados sin repetir a una persona que tenga más de un envío.

- Debe ser posible buscar directamente un envío mediante su código.

- No debe aceptarse un código ya registrado.

- Como contraste previo, debe probarse un arreglo de tres posiciones y documentarse una limitación frente a la cantidad variable.

### Técnicos

- CargoTrack debe declarar List\<Envio\> envios como colección principal e inicializarla con new ArrayList\<\>().

- Declara Set\<String\> destinatarios para obtener nombres de destinatarios sin repetición e inicialízalo con new HashSet\<\>().

- Declara Map\<String, Envio\> enviosPorCodigo para la búsqueda directa e inicialízalo con new HashMap\<\>(); la clave debe ser el código.

- Al registrar un envío, mantén consistentes la List y el Map y utiliza el índice para detectar códigos duplicados.

- El Set debe obtener o mantener los nombres de destinatarios a partir de los envíos registrados.

- Recorre la colección principal mediante referencias Envio para conservar el comportamiento polimórfico.

- Antes de la solución final, crea temporalmente un Envio\[\] de tamaño 3, recórrelo con for y documenta una limitación frente a List.

## Al comenzar esta parte

[ ] La jerarquía y el polimorfismo de la Parte 4 funcionan.

[ ] Puedo crear varios subtipos concretos y tratarlos mediante el tipo común.

## Antes de avanzar, verifica

[ ] Probé un arreglo del tipo común y puedo explicar por qué una capacidad fija no resuelve el escenario final.

[ ] La solución final utiliza una List parametrizada con el tipo común.

[ ] Puedo almacenar subtipos distintos en la misma List y recorrerlos polimórficamente.

[ ] Existe un Set que permite obtener nombres de destinatarios sin repeticiones.

[ ] Existe un Map que permite recuperar un Envio mediante su código.

[ ] Registrar un nuevo elemento mantiene consistentes las estructuras utilizadas.

[ ] Existe al menos una consulta o filtro sobre la colección principal.

## Pruebas sugeridas

- Ejecutar con la colección principal vacía.

- Registrar un elemento y luego varios de tipos diferentes.

- Buscar un código existente y otro inexistente mediante el índice.

- registrar más de un envío para el mismo destinatario y comprobar que su nombre aparece una sola vez en el conjunto sin repeticiones.

- Intentar registrar un Envio con un código ya utilizado y comprobar que no se duplique.

- Recorrer la List y verificar que cada subtipo ejecute su comportamiento especializado.

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 5.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

La parte siguiente será habilitada después de registrar esta entrega.


---

# Evaluación Parcial 1

### Versión C · CargoTrack · Parte 6 · Excepciones e integración

| **Sigla** | **Evaluación** | **Versión** | **Documento**                       |
|-----------|----------------|-------------|-------------------------------------|
| DSY1102   | Parcial 1      | C           | Parte 6 · Excepciones e integración |

> **Continuidad:** el proyecto entregado en la parte anterior.

La aplicación de CargoTrack ya integra el modelo orientado a objetos y las estructuras necesarias para administrar múltiples elementos. En la etapa final debe comportarse de forma controlada frente a entradas inesperadas y operaciones que contradicen las reglas del negocio. En esta parte la orientación es menor: analiza dónde nace cada problema y decide qué componente debe detectarlo sin desordenar las responsabilidades construidas.

## Requerimientos

La solución completa de CargoTrack debe mantenerse operativa frente a entradas incorrectas y solicitudes incompatibles con el estado o el tipo de envío. La ubicación exacta de cada control debe respetar las responsabilidades ya construidas.

### Funcionales

- Si el usuario ingresa texto cuando se espera un número, la aplicación debe informar el error y volver a solicitar el dato.

- El peso, la tarifa y los porcentajes fuera de rango deben rechazarse antes de ser procesados.

- No debe marcarse como entregado un envío que todavía no haya sido despachado.

- No debe intentarse calcular seguro para un tipo de envío que no admite esa capacidad.

- Los códigos duplicados deben rechazarse y una búsqueda inexistente debe informar claramente el problema.

- Después de un error controlado, el menú debe continuar funcionando.

### Técnicos

- Centraliza el control de errores de lectura en la responsabilidad encargada de la entrada por consola y utiliza try/catch para errores de conversión.

- Mantén las validaciones de rango cerca del ingreso o modificación de datos y las reglas de estado dentro de las clases de dominio.

- Utiliza excepciones específicas cuando representen adecuadamente una condición inválida y evita capturar Exception de manera general.

- CargoTrack debe seguir controlando las reglas de registro y búsqueda, como códigos duplicados o inexistentes.

- No reemplaces el polimorfismo, la interfaz ni las colecciones por condicionales para manejar errores.

- Todos los requerimientos acumulados de las Partes 1 a 5 deben continuar funcionando.

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

- Camino feliz: registrar un envío de cada tipo → listar → consultar destinatarios sin repetir → buscar por código → calcular costo → despachar → probar seguro cuando corresponda → entregar.

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
