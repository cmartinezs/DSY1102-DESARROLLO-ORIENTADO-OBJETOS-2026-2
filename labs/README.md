# Laboratorios · DSY1102

Laboratorios guiados e integradores, organizados por semana curricular y alineados al avance real de aula.

## Disponibilidad actual

| Semana | Laboratorio | Estado |
|---|---|---|
| Semana 01 | Sin laboratorio formal | Referencia histórica |
| [Semana 02](./semana-02/) | Cuenta simple · de lógica a objeto | ✅ Disponible |
| [Semana 03](./semana-03/) | Batería de un dron · objetos y encapsulamiento (autónomo) | ✅ Guía completa |
| [Semana 04](./semana-04/) | Pedidos de cafetería · constructores y colaboración (autónomo) | ✅ Guía disponible |
| [Semana 05](./semana-05/) | Despachos urbanos · herencia y polimorfismo (autónomo) | ✅ Guía completa |
| [Semana 06](./semana-06/) | Inscripciones a talleres · arrays, List y excepciones (autónomo) | ✅ Guía completa |
| [Semana 07](./semana-07/) | Centro de soporte técnico · clase abstracta e interfaz (autónomo) | ✅ Guía completa |
| [Semana 08](./semana-08/) | Control de acceso a feria · List, Set y Map (autónomo) | ✅ Guía completa |
| [Semana 09](./semana-09/) | Primera interfaz funcional JavaFX / FXML | ✅ Disponible |
| [Semana 10](./semana-10/) | Reservas de recintos deportivos · MVC, tabla, navegación y validación (desde cero) | ✅ Disponible |
| [Semana 11](./semana-11/) | Inventario de instrumentos musicales · JSON y DAO (desde cero) | ✅ Guía disponible |

## Estándar de diseño pedagógico incremental

La [norma didáctica específica de DSY1102](../docs/ESTANDAR-DISENO-PEDAGOGICO-INCREMENTAL.md) define cómo se diseñan los laboratorios desde ahora.

**La estructura se estandariza; la cantidad de incrementos no.** Se usa la experiencia de EP1: contexto y requisitos claros; cambios funcionales progresivos; comprobación antes de avanzar; ayuda técnica abundante al introducir un concepto, luego decreciente según lo aprendido y recuperable ante dificultades.

- **README:** problema, límites, requisitos funcionales/técnicos, independencia, mapa de incrementos **variable** y pruebas de aceptación.
- **Incrementos:** un archivo o unidad didáctica por resultado de aprendizaje diferenciable, con tantos pasos como requiera el caso. No existe un mínimo/máximo fijo de cuatro partes.
- **Cada paso:** indica exactamente qué hacer cuando el alumno aún no sabe cómo; archivo, lugar, ejecución, salida esperada, diagnóstico. En contenidos ya dominados puede ofrecer mayor autonomía, sin ocultar el resultado exigido.
- **Cada incremento:** conserva el proyecto dentro del mismo lab, agrega capacidad nueva, comprueba su resultado y marca el siguiente desafío.
- **Evidencia y cierre:** pruebas positivas/negativas pertinentes, explicaciones y formato de entrega. Pueden estar en el último incremento o en documento dedicado.

La autonomía es **entre laboratorios**. Dentro de un mismo laboratorio, los incrementos comparten su propio proyecto. **PetCare** es la continuidad longitudinal entre semanas. Las experiencias históricas Veterinaria I–IV no condicionan los labs oficiales.

No crear cuatro ficheros por comodidad de plantilla; tampoco fusionar cambios diferentes si eso dificulta encontrar el error. La [matriz de revisión retroactiva](../docs/MATRIZ-INCREMENTOS-LABS-DSY1102-2026-2.md) distingue estructura actual y posibles ajustes pedagógicos.

## Regla canónica

Cada laboratorio guiado debe:

- tener `README.md` propio con propósito, objetivos, resultado esperado, contenidos relacionados, conocimientos previos y dependencias;
- separar incrementos por cambios o aprendizajes verificables, en tantos `.md` como el caso justifique;
- indicar cada paso de forma explícita;
- incluir un checkpoint verificable en cada etapa;
- declarar de forma explícita cualquier dependencia con un laboratorio anterior;
- priorizar ejecución local y reproducible;
- evitar exigir conceptos que aún no han sido trabajados en aula;
- mantener correspondencia entre contenido canónico del repositorio y experiencia guiada publicada en GitHub Pages.

## Política de independencia

**Cada laboratorio semanal se inicia como proyecto autónomo.** No se exige reutilizar código ni archivos de laboratorios anteriores. La implementación incremental longitudinal corresponde a **PetCare**, en `proyecto-formativo/`.

## Archivo histórico opcional: Veterinaria I–IV

Las experiencias interactivas de Veterinaria I–IV (semanas 05–08) se conservan como **archivo de práctica opcional**, con su continuidad histórica interna. **No son prerrequisitos de los laboratorios oficiales autónomos**. Los README de las semanas 06–08 apuntan primero a `independiente/` y después al material histórico.

Las etapas del laboratorio autónomo se encuentran en el índice correspondiente y su cantidad responde al diseño del caso, **no** al número cuatro. No se debe exigir al alumno crear otra solución por arrastre de una actividad anterior.

Los labs no reemplazan ejercicios ni PetCare. Los ejercicios viven en [`../ejercicios/`](../ejercicios/) y el proyecto longitudinal en [`../proyecto-formativo/`](../proyecto-formativo/).
