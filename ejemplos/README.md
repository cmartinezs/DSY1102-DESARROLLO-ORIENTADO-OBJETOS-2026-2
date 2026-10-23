# Ejemplos demostrativos · DSY1102

**Función de un ejemplo:** observar un concepto nuevo en un programa pequeño, reproducible y con salida/comportamiento esperado. No equivale a un ejercicio resuelto ni al laboratorio semanal. La cantidad de demostraciones responde a necesidades curriculares, **no** a una cuota fija.

| Semana | Demostración | Cómo se verifica |
|---|---|---|
| [01](semana-01/) | Tipos, operadores, decisiones y bucles | Código Java por archivo; recapitulación integrada opcional |
| [02](semana-02/) | Métodos, objetos, encapsulamiento inicial | Cuatro programas Java con nombres canónicos |
| [03](semana-03/) | Estado de instancias y métodos, sin constructores explícitos | Cinco programas acordes al corte real de aula |
| [04](semana-04/) | Constructores, composición y refactor de Scanner | Ejemplos 01–04 más **secuencia evolutiva 05–07** |
| [05](semana-05/) | `extends`, `super`, `@Override`, despacho dinámico | Tres programas independientes |
| [06](semana-06/) | Arrays, listas y excepciones | Siete programas Java con rutas canónicas |
| [07](semana-07/) | Clase abstracta, interfaz y polimorfismo | Tres ejemplos mínimos; **MediaHub** como referencia integradora |
| [08](semana-08/) | Set, Map, igualdad e integridad de índices | Demostraciones Java + integración opcional |
| [09](semana-09/) | Primera aplicación JavaFX con FXML y Controller | Miniaplicación Maven con validación de patente |
| [10](semana-10/) | TableView/ObservableList y navegación entre FXML | Dos demostraciones JavaFX Maven |
| [11](semana-11/) | Serializar, deserializar JSON y separar DAO | Tres comandos Maven que guardan/leen un archivo |

## Reglas de ejecución y calidad

- Para Java puro, abrir la carpeta semanal en un proyecto Java 21; los nombres de archivos canónicos coinciden con las clases `public`.
- Las rutas numéricas `01-...` históricas de semanas 02, 03 y 06 se conservan como versiones `Legacy`, **no** son la ruta principal. Ya no generan una clase pública que entre en conflicto con la fuente canónica.
- Los conceptos se enseñan según el avance real de clase. Los constructores propios pertenecen a semana 04, no al corte real documentado de semana 03.
- Dependencias **dentro** de una demostración evolutiva se declaran; los ejemplos mínimos no requieren PetCare ni códigos de otros labs.
- Para JavaFX/JSON se requiere JDK 21 y Maven; abrir el proyecto indicado en su README, ejecutar y contrastar la interacción o el archivo.
- No confundir **fuente presente** con **código comprobado compilando**. La verificación está automatizada en [script de compilación](../scripts/verificar-ejemplos.sh) y [GitHub Actions](../.github/workflows/verificar-ejemplos.yml). La inspección visual de JavaFX y los casos funcionales de JSON se verifican además manualmente.

## Distinción pedagógica

**Ejemplos muestran → [ejercicios](../ejercicios/) hacen aplicar → [laboratorios](../labs/) integran → [PetCare](../proyecto-formativo/) evoluciona.** Las soluciones de referencia extensas se conservan etiquetadas como integradoras, sin presentarlas como ejemplos atómicos.
