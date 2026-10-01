> [!IMPORTANT]
> **Material liberado para práctica.** Este documento correspondía a un diseño original de la EP1 y **no debe interpretarse como la evaluación vigente**. Se publica completo para estudio, práctica e integración de contenidos. Las referencias a AVA, habilitación secuencial y entregas por commit se conservan como parte del enunciado original, pero no implican una entrega actual.

# Evaluación Parcial 1

### Versión B · RepairDesk · Instrucciones Generales

| **Sigla** | **Evaluación** | **Versión** | **Documento**           |
|-----------|----------------|-------------|-------------------------|
| DSY1102   | Parcial 1      | B           | Instrucciones Generales |

## Descripción

Esta evaluación se desarrolla en seis partes acumulativas. Cada parte presenta un nuevo estado del caso de negocio y agrega requerimientos que hacen evolucionar la solución. No necesitas anticipar desde el comienzo la solución final: trabaja únicamente con los requerimientos habilitados en cada etapa.

Una parte posterior puede exigir reorganizar o corregir código escrito anteriormente. Esto forma parte de la evaluación. Antes de continuar, comprueba que lo ya construido sigue funcionando y realiza las correcciones necesarias.

## Contexto del caso de negocio

RepairDesk es una solución interna para un servicio técnico que necesita reemplazar registros manuales y dispersos por una aplicación Java de consola. El negocio recibe trabajos solicitados por clientes y debe poder registrar cada atención, seguir su avance y calcular el valor que corresponde cobrar.

Cada trabajo se representa mediante una orden de servicio. Una misma persona puede tener más de una orden activa o histórica, por lo que cada orden debe poder distinguirse de manera individual. Durante su ciclo de atención, una orden pasa por distintos estados y solo ciertas operaciones tienen sentido según el momento en que se encuentra.

El servicio técnico no realiza un único tipo de trabajo. Algunas atenciones se reciben directamente en taller, otras se realizan en domicilio y otras corresponden a mantenciones planificadas. Estas diferencias afectan reglas de costo y también ciertas capacidades operativas, por lo que el sistema deberá crecer sin duplicar innecesariamente la información común.

El usuario de la aplicación será personal del servicio técnico. Desde consola deberá poder registrar órdenes, consultar su información, avanzar su estado y ejecutar las operaciones habilitadas para cada caso, manteniendo mensajes claros cuando una acción no corresponda.

## Alcance general del sistema

- Identificar y administrar órdenes de servicio asociadas a clientes.

- Calcular costos y aplicar condiciones comerciales cuando corresponda.

- Controlar el ciclo de una orden desde su registro hasta su finalización.

- Permitir que diferentes tipos de atención compartan una base común y mantengan sus reglas particulares.

- Administrar múltiples órdenes y facilitar su consulta dentro del sistema.

- Evitar operaciones inconsistentes y mantener el flujo frente a entradas inválidas.

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

### Versión B · RepairDesk · Parte 1 · Análisis

| **Sigla** | **Evaluación** | **Versión** | **Documento**      |
|-----------|----------------|-------------|--------------------|
| DSY1102   | Parcial 1      | B           | Parte 1 · Análisis |

> **Continuidad:** el proyecto entregado en la parte anterior.

Para esta primera etapa debe existir una clase OrdenServicio que represente la entidad principal del caso. Antes de agregar más componentes al sistema, construye una base clara y explícita a partir de los datos y reglas iniciales.

## Requerimientos

En esta etapa se construirá la primera representación funcional de una orden de servicio. El sistema debe poder registrar una orden individual, conservar sus datos principales y controlar sus primeros cambios de estado.

### Funcionales

- El sistema debe permitir registrar una orden almacenando su número de orden, nombre del cliente y costo base.

- El número de orden es obligatorio, identifica la orden y no puede quedar vacío.

- El nombre del cliente es obligatorio y no puede quedar vacío.

- El costo base debe ser mayor que cero.

- Toda orden nueva debe comenzar en estado PENDIENTE.

- Debe ser posible consultar sus datos, calcular su costo actual, iniciar una orden pendiente y finalizar una orden que se encuentre en proceso.

### Técnicos

- Crea una clase llamada OrdenServicio.

- La clase debe declarar los atributos privados String numeroOrden, String nombreCliente, double costoBase y String estado.

- numeroOrden, nombreCliente y costoBase reciben su valor al construir el objeto. estado no se recibe como parámetro: debe inicializarse internamente con valor PENDIENTE.

- Implementa el constructor OrdenServicio(String numeroOrden, String nombreCliente, double costoBase). En esta etapa se espera que el registro entregue valores válidos; el constructor debe asignarlos y dejar estado en PENDIENTE.

- Implementa los getters getNumeroOrden(), getNombreCliente(), getCostoBase() y getEstado().

- Implementa setNombreCliente(String nombreCliente) y setCostoBase(double costoBase) respetando las mismas reglas de validez. No crees setter público para numeroOrden ni para estado.

- Implementa double calcularCosto(). En esta etapa debe retornar el costo base.

- Implementa boolean iniciar(): solo debe cambiar el estado de PENDIENTE a EN_PROCESO y retornar true cuando la transición sea válida.

- Implementa boolean finalizar(): solo debe cambiar el estado de EN_PROCESO a FINALIZADA y retornar true cuando la transición sea válida.

## Trabajo de análisis

- Explica con tus palabras qué representa OrdenServicio dentro del negocio.

- Explica por qué los tipos de datos indicados son adecuados para representar la información solicitada; justifica al menos dos de ellos.

- Identifica cuáles son reglas de validez de los datos y cuáles dependen del estado del objeto.

- Distingue qué información debe guardar la entidad y qué comportamientos debería resolver por sí misma.

- Registra este análisis en un comentario al inicio del proyecto o en un archivo de texto incluido dentro de evaluaciones/ev1.

## Al comenzar esta parte

[ ] He leído únicamente los requerimientos habilitados para la Parte 1.

[ ] Todavía no necesito anticipar herencia, colecciones ni la estructura final del sistema.

## Antes de avanzar, verifica

[ ] Existe una representación clara de OrdenServicio y puedo explicar qué problema resuelve.

[ ] Implementé los atributos con los nombres, tipos y valores iniciales indicados.

[ ] Identifiqué al menos dos reglas de validez o estado.

[ ] Puedo distinguir datos de comportamientos.

## Pruebas o preguntas sugeridas

- Imagina dos objetos OrdenServicio con información parecida: ¿qué dato permite distinguirlos?

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

### Versión B · RepairDesk · Parte 2 · Java elemental

| **Sigla** | **Evaluación** | **Versión** | **Documento**            |
|-----------|----------------|-------------|--------------------------|
| DSY1102   | Parcial 1      | B           | Parte 2 · Java elemental |

> **Continuidad:** el proyecto entregado en la parte anterior.

Con el análisis anterior, ahora se requiere una primera versión ejecutable de RepairDesk. La aplicación debe crear y utilizar objetos OrdenServicio, aplicar reglas simples del negocio y permitir que una persona pruebe las operaciones desde consola. En esta etapa importa que el programa funcione y que la lógica comience a quedar dentro de la entidad, aunque todavía no sea la arquitectura definitiva.

## Requerimientos

RepairDesk debe transformarse en una aplicación de consola que permita registrar y operar una orden de servicio. En esta etapa se incorpora interacción repetida y la posibilidad de calcular el costo normal o aplicar un descuento comercial.

### Funcionales

- La aplicación debe solicitar por consola los datos necesarios para registrar una orden y mostrar posteriormente su información.

- El usuario debe poder consultar el costo normal o calcular un costo aplicando un porcentaje de descuento autorizado.

- El porcentaje de descuento debe encontrarse entre 0 y 100.

- El usuario debe poder iniciar una orden pendiente y finalizar una orden en proceso, recibiendo mensajes claros cuando la transición no sea válida.

- La aplicación debe presentar un menú que se repita hasta que el usuario seleccione salir.

- Las opciones inválidas y los valores simples fuera de rango deben volver a solicitarse sin terminar el flujo normal.

### Técnicos

- Mantén OrdenServicio y agrega la sobrecarga double calcularCosto(double porcentajeDescuento) sin eliminar calcularCosto().

- La variante con descuento debe aplicar el porcentaje sobre el costo base y retornar el resultado.

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

### Versión B · RepairDesk · Parte 3 · Diseño POO y SRP

| **Sigla** | **Evaluación** | **Versión** | **Documento**              |
|-----------|----------------|-------------|----------------------------|
| DSY1102   | Parcial 1      | B           | Parte 3 · Diseño POO y SRP |

> **Continuidad:** el proyecto entregado en la parte anterior.

Con el crecimiento del sistema, Main comienza a leer datos, crear órdenes, cambiar estados y realizar cálculos. El servicio técnico necesita una estructura donde cada clase tenga una responsabilidad principal y los cambios queden localizados.

## Requerimientos

RepairDesk debe mantener su funcionalidad, pero separar la interacción de consola, la coordinación y las reglas propias de cada orden.

### Funcionales

- El usuario debe conservar las operaciones disponibles en la Parte 2.

- La lectura y validación básica de datos debe poder reutilizarse desde distintas opciones del menú.

- El registro debe delegarse a la clase de gestión; Main no debe construir la orden directamente.

- Las transiciones de estado y cálculos propios de una orden deben continuar dentro de la entidad.

### Técnicos

- Crea una clase LecturaEntrada que encapsule el Scanner de la aplicación.

- Como mínimo, implementa leerTextoNoVacio(String mensaje), leerDoublePositivo(String mensaje), leerDoubleEnRango(String mensaje, double minimo, double maximo) y leerEnteroEnRango(String mensaje, int minimo, int maximo).

- Crea una clase RepairDesk responsable de coordinar las operaciones generales del caso de negocio.

- RepairDesk debe incorporar una operación de registro que reciba los datos necesarios y construya OrdenServicio, evitando que Main use directamente new OrdenServicio(...).

- Main debe mantener una instancia compartida de LecturaEntrada y otra de RepairDesk (por ejemplo, atributos private static final), mostrar el menú y coordinar las llamadas.

- Mantén OrdenServicio como responsable de sus validaciones, cálculos y cambios de estado.

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

### Versión B · RepairDesk · Parte 4 · Herencia, abstracción, interfaces y polimorfismo

| **Sigla** | **Evaluación** | **Versión** | **Documento**                                              |
|-----------|----------------|-------------|------------------------------------------------------------|
| DSY1102   | Parcial 1      | B           | Parte 4 · Herencia, abstracción, interfaces y polimorfismo |

> **Continuidad:** el proyecto entregado en la parte anterior.

El negocio ya no trabaja con un solo tipo de OrdenServicio. A partir de ahora existen Reparación de Equipo, Instalación a Domicilio y Mantención Preventiva. Los tres tipos comparten la información y parte del comportamiento construido hasta ahora, pero algunas reglas cambian según el tipo concreto.

## Requerimientos

RepairDesk debe representar distintos tipos de servicio que comparten información y estados, pero calculan su costo de forma diferente. Además, solo algunos tipos pueden ser programados para una fecha o bloque de atención.

### Funcionales

- El sistema debe permitir trabajar con Reparación de Equipo, Instalación a Domicilio y Mantención Preventiva.

- La Reparación de Equipo aplica un recargo de 15% sobre el costo base.

- La Instalación a Domicilio aplica un recargo de 20% sobre el costo base.

- La Mantención Preventiva aplica un recargo de 10% sobre el costo base.

- Las instalaciones a domicilio y las mantenciones preventivas pueden registrar una programación de atención.

- Las reparaciones recibidas directamente en taller no utilizan programación.

- El sistema debe poder operar con todos los tipos mediante una referencia común y obtener el cálculo correspondiente al objeto real.

### Técnicos

- Convierte OrdenServicio en una clase abstracta conservando sus atributos, estado y comportamientos comunes.

- Declara calcularCosto() como comportamiento abstracto.

- Crea ReparacionEquipo, InstalacionDomicilio y MantencionPreventiva heredando de OrdenServicio. Cada clase debe tener un constructor que reciba los datos comunes y los envíe a la clase base mediante super(...); además debe sobrescribir el cálculo de costo según las reglas funcionales.

- Mantén la sobrecarga con descuento de forma compatible con el cálculo especializado; el descuento debe aplicarse sobre el costo calculado para el subtipo.

- Crea una interfaz Programable que declare void programar(String programacion).

- InstalacionDomicilio y MantencionPreventiva deben implementar Programable, incorporar un atributo String programacion inicialmente vacío o null y almacenar allí la programación recibida; ReparacionEquipo no debe implementar la interfaz.

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

### Versión B · RepairDesk · Parte 5 · List, Set y Map

| **Sigla** | **Evaluación** | **Versión** | **Documento**             |
|-----------|----------------|-------------|---------------------------|
| DSY1102   | Parcial 1      | B           | Parte 5 · List, Set y Map |

> **Continuidad:** el proyecto entregado en la parte anterior.

El sistema ya trabaja con distintos tipos de OrdenServicio y ahora debe administrar una cantidad variable de elementos. Además, el negocio necesita resolver tres necesidades diferentes: mantener el conjunto principal, obtener información sin repeticiones y localizar rápidamente un elemento por su identificador.

## Requerimientos

RepairDesk debe administrar una cantidad variable de órdenes y resolver por separado el almacenamiento principal, la obtención de clientes sin repetición y la búsqueda directa por número de orden.

### Funcionales

- El sistema debe poder registrar una cantidad variable de órdenes de distintos subtipos y recorrerlas como elementos del tipo común.

- Debe ser posible listar las órdenes mostrando el cálculo especializado de cada una.

- Debe existir una consulta que permita obtener las órdenes que se encuentren PENDIENTE o EN_PROCESO.

- El sistema debe obtener los nombres de clientes con órdenes registradas sin repetir a una persona que tenga varias órdenes.

- Debe ser posible buscar directamente una orden mediante su número de orden.

- No debe aceptarse un número de orden ya registrado.

- Como contraste previo, debe probarse un arreglo de tres posiciones y documentarse una limitación frente a la cantidad variable.

### Técnicos

- RepairDesk debe declarar List\<OrdenServicio\> ordenes como colección principal e inicializarla con new ArrayList\<\>().

- Declara Set\<String\> clientes para obtener nombres de clientes sin repetición e inicialízalo con new HashSet\<\>().

- Declara Map\<String, OrdenServicio\> ordenesPorNumero para la búsqueda directa e inicialízalo con new HashMap\<\>(); la clave debe ser el número de orden.

- Al registrar una orden, mantén consistentes la List y el Map y utiliza el índice para detectar números duplicados.

- El Set debe obtener o mantener los nombres de clientes a partir de las órdenes registradas.

- Recorre la colección principal mediante referencias OrdenServicio para conservar el comportamiento polimórfico.

- Antes de la solución final, crea temporalmente un OrdenServicio\[\] de tamaño 3, recórrelo con for y documenta una limitación frente a List.

## Al comenzar esta parte

[ ] La jerarquía y el polimorfismo de la Parte 4 funcionan.

[ ] Puedo crear varios subtipos concretos y tratarlos mediante el tipo común.

## Antes de avanzar, verifica

[ ] Probé un arreglo del tipo común y puedo explicar por qué una capacidad fija no resuelve el escenario final.

[ ] La solución final utiliza una List parametrizada con el tipo común.

[ ] Puedo almacenar subtipos distintos en la misma List y recorrerlos polimórficamente.

[ ] Existe un Set que permite obtener nombres de clientes sin repeticiones.

[ ] Existe un Map que permite recuperar un OrdenServicio mediante su número de orden.

[ ] Registrar un nuevo elemento mantiene consistentes las estructuras utilizadas.

[ ] Existe al menos una consulta o filtro sobre la colección principal.

## Pruebas sugeridas

- Ejecutar con la colección principal vacía.

- Registrar un elemento y luego varios de tipos diferentes.

- Buscar un número de orden existente y otro inexistente mediante el índice.

- registrar más de una orden para el mismo cliente y comprobar que su nombre aparece una sola vez en el conjunto sin repeticiones.

- Intentar registrar un OrdenServicio con un número de orden ya utilizado y comprobar que no se duplique.

- Recorrer la List y verificar que cada subtipo ejecute su comportamiento especializado.

## Entrega de esta parte

- Actualiza el proyecto dentro de evaluaciones/ev1/src.

- Crea un commit identificable, por ejemplo: EV1 - Parte 5.

- Realiza push a GitHub.

- En AVA pega únicamente la URL del commit exacto correspondiente a esta entrega.

La parte siguiente será habilitada después de registrar esta entrega.


---

# Evaluación Parcial 1

### Versión B · RepairDesk · Parte 6 · Excepciones e integración

| **Sigla** | **Evaluación** | **Versión** | **Documento**                       |
|-----------|----------------|-------------|-------------------------------------|
| DSY1102   | Parcial 1      | B           | Parte 6 · Excepciones e integración |

> **Continuidad:** el proyecto entregado en la parte anterior.

La aplicación de RepairDesk ya integra el modelo orientado a objetos y las estructuras necesarias para administrar múltiples elementos. En la etapa final debe comportarse de forma controlada frente a entradas inesperadas y operaciones que contradicen las reglas del negocio. En esta parte la orientación es menor: analiza dónde nace cada problema y decide qué componente debe detectarlo sin desordenar las responsabilidades construidas.

## Requerimientos

La solución completa de RepairDesk debe mantenerse operativa frente a entradas incorrectas y solicitudes incompatibles con el estado o el tipo de servicio. La ubicación exacta de cada control debe respetar las responsabilidades ya construidas.

### Funcionales

- Si el usuario ingresa texto cuando se espera un número, la aplicación debe informar el error y volver a solicitar el dato.

- Los costos y porcentajes fuera de rango deben rechazarse antes de ser procesados.

- No debe ser posible finalizar una orden que no se encuentre EN_PROCESO.

- No debe intentarse programar una orden cuyo tipo no ofrece esa capacidad.

- Los números de orden duplicados deben rechazarse y una búsqueda inexistente debe informar claramente el problema.

- Después de un error controlado, el menú debe continuar funcionando.

### Técnicos

- Centraliza el control de errores de lectura en la responsabilidad encargada de la entrada por consola y utiliza try/catch para errores de conversión.

- Mantén las validaciones de rango cerca del ingreso o modificación de datos y las reglas de estado dentro de las clases de dominio.

- Utiliza excepciones específicas cuando representen adecuadamente una condición inválida y evita capturar Exception de manera general.

- RepairDesk debe seguir controlando las reglas de registro y búsqueda, como números duplicados o inexistentes.

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

- Camino feliz: registrar una orden de cada tipo → listar → consultar clientes sin repetir → buscar por número → iniciar → calcular costo → programar cuando corresponda → finalizar.

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
