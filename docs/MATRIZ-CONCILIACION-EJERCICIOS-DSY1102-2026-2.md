# Matriz de conciliación de ejercicios · DSY1102 · Semanas 01–11

**Fecha:** 22 de octubre de 2026.  
**Objeto:** alinear ejercicios mínimos, contenidos semanales, laboratorios independientes, archivo histórico y portal.  
**Norma:** [Estándar de ejercicios mínimos significativos](ESTANDAR-EJERCICIOS-MINIMOS-DSY1102.md).

## Criterio de clasificación

- **Demostración de API/sintaxis:** ejemplo, no ejercicio obligatorio de aplicación.
- **Una decisión/resultado focal y prueba:** ejercicio.
- **Varias capacidades con varias responsabilidades o menú:** taller complementario o laboratorio.
- **Diseño abierto con autonomía mayor:** desafío.
- **Sistema que evoluciona entre semanas:** PetCare, proyecto formativo separado.
- El número de ejercicios **no es cuota pedagógica**: depende de la cantidad de aprendizajes esenciales y su independencia.

## Matriz de cobertura y correcciones

| Semana | Cobertura curricular contrastada | Situación anterior | Banco mínimo canónico (vigente) | Decisión de conciliación |
|---|---|---|---|---|
| 01 | Tipos/operadores, decisiones, ciclos, transición a POO | Cinco consignas mayormente mecánicas y sin prueba definida | **4**: cálculo de compra; control de stock; agotamiento; análisis de tarjeta | Reescritos como necesidad+entrada+salida+caso límite. Original archivado |
| 02 | Métodos/parámetros/retorno, clases/objetos, encapsulación | Ocho ejercicios de fundamentos con poca aplicación OO | **4**: tarifa como método; contador privado; dos estados; responsabilidad de lámpara | Ampliar aplicación OO sin adelantar Scanner. Original archivado |
| 03 | Objetos, constructor, comportamiento y estado válido | Cinco dominios parecidos a minilabs, varios solapan Cuenta/Batería | **3**: clasificación película; termostato; colaboración Punto | Un problema focal por actividad. Original archivado |
| 04 | Constructores/sobrecarga, colaboración, Scanner | Seis ejercicios, desafío, evolución Cuenta y LectorConsola de muchas etapas | **4**: Marcador; Reloj; Credencial-Persona; Scanner y Participante | Separar talleres evolutivos como opcionales sin borrar carpetas/código. Original archivado |
| 05 | Herencia, `super`, `@Override`, polimorfismo | Sin banco en `ejercicios/` | **3**: notificación heredada; entrada especializada; despacho de método | Banco nuevo, no repite caso Despachos urbanos |
| 06 | Arrays, List/ArrayList, listas de objetos, excepciones | Veintidós actividades mezcladas; MarketApp equivale a integrador | **4**: asientos; pendientes; buscar objeto; conversión inválida | Banco original archivado. MarketApp **reclasificado y copiado como taller opcional** a `labs/semana-06/taller-opcional-marketapp/` con alias histórico |
| 07 | Clase/método abstracto, interfaz y polimorfismo | Sin banco en `ejercicios/` | **3**: área abstracta; capacidad Recargable; interfaz Saludador | Banco nuevo, distinto de MediaHub/Soporte Técnico |
| 08 | Set/Map, criterio List/Set/Map, igualdad | Sin banco en `ejercicios/` | **4**: etiquetas únicas; precio por clave; elegir estructura; igualdad en Set de objetos | Banco nuevo; sin imponer las tres estructuras en un solo ejercicio |
| 09 | JavaFX Maven, FXML, Controller, eventos y componentes | Seis tareas breves, varias orientadas a modificar sintaxis | **4**: confirmar evento; validar alias; depurar FXML; ComboBox | Mejores entradas/salidas y contexto de aplicación. Original archivado |
| 10 | MVC, TableView/ObservableList, navegación y validación | Solo matriz de pruebas dentro del laboratorio, sin banco propio | **3**: tareas observables; ida/vuelta de vistas; unicidad de código | Banco independiente de laboratorio ReservaRecintosFX |
| 11 | Persistencia JSON, DAO, errores de archivo | Sin banco propio; guías institucionales solo anunciadas | **3**: guardar JSON; recuperar JSON; separar DAO | Banco nuevo; Jackson como elección didáctica explícita, sin atribuirlo a 2.4.1–2.4.4 no revisados |

**Total editorial:** 39 ejercicios focalizados distribuidos en 11 semanas; los números son resultado de cobertura y se ajustarán cuando cambie el avance real. **No equivale a 39 entregas obligatorias ni a una pauta de calificación.**

## Acciones ejecutadas

1. Se creó el estándar y se conciliaron `docs/ESTRUCTURA-CANONICA.md`, `docs/ESTANDAR-DISENO-PEDAGOGICO-INCREMENTAL.md`, el checklist docente y el índice del repositorio.
2. Se actualizaron los 11 `ejercicios/semana-XX/README.md`. Los bancos anteriores de 01–04, 06 y 09 quedaron en `BANCO-ORIGINAL-2026.md` en cada semana.
3. Las rutas históricas de semana 04 (Cuenta y Scanner) permanecen como talleres de profundización opcionales. MarketApp está ahora indexado y copiado como taller adicional en `labs/semana-06/`, sin reemplazar el laboratorio oficial: el README antiguo funciona como alias y el código inicial anterior permanece preservado.
4. `ejercicios/README.md` enlaza una **sola fuente vigente** por semana y resume la habilidad.
5. Los índices `semanas/semana-01..11/README.md` apuntan al banco canónico.
6. El portal `gh-pages/pages/exercises/class-practice/` funciona como **navegación** hacia Markdown de GitHub; el HTML anterior se preservó como `archivo-2026.html`.
7. El antiguo desafío «Semana 3 · actual» fue marcado **histórico**; `pages/home/` y `pages/weeks/` enlazan los ejercicios vigentes.

## Hallazgos no ocultos y límites

- Los contenidos se contrastaron con los índices curriculares disponibles en el repositorio. **No** se certifica aquí que todas las guías y PPT institucionales originales hayan sido abiertas y conciliadas, especialmente 2.4.1–2.4.4 de semana 11.
- La revisión es **editorial, semántica y de enlaces**: cada enunciado tiene dato de prueba/resultados declarados, pero **no se implementaron ni ejecutaron 39 soluciones modelo** para certificar su reproducibilidad técnica.
- Algunos ejercicios JavaFX/JSON requieren el **soporte técnico básico** ya presentado en clase. El encabezado semanal indica cómo obtenerlo sin depender de otro laboratorio.
- Las condiciones oficiales de evaluación, asistencia, entrega y ponderación **no cambian** por esta homologación.
- El material histórico se conserva para consulta: no se presenta como una segunda fuente activa obligatoria.

## Verificación final requerida

- Comprobar que existen los once README vigentes y su trazabilidad desde semana/índice/portal.
- Auditar enlaces Markdown/HTML internos e identificar URLs externos no comprobables sin navegador.
- Resolver manualmente por lo menos una muestra por concepto (Java, JavaFX, JSON/DAO) y corregir cualquier incoherencia detectada antes de certificar ejecución end-to-end.
- Registrar feedback real de alumnos si el nivel de ayuda es insuficiente o sobredimensionado.

## Definición de calidad

> El alumno debe poder identificar **qué habilidad demuestra**, resolver el caso con los conceptos enseñados, ejecutar una prueba concreta y explicar por qué funcionó. Si solo replica sintaxis, es ejemplo; si necesita un sistema entero, es laboratorio o taller.
