# DSY1102 · Estándar de ejercicios mínimos de aplicación significativa

**Estado:** criterio docente vigente desde el 22 de octubre de 2026.  
**Aplicación:** `ejercicios/` (semanas 01–11 y siguientes), actividades de práctica autónoma y su navegación en el portal.  
**Marco:** [Estándar pedagógico incremental](ESTANDAR-DISENO-PEDAGOGICO-INCREMENTAL.md), articulado con la experiencia de diseño de EP1.

## 1. Definición fundamental

> Un **ejercicio** es la unidad mínima de aplicación significativa de **un aprendizaje focal**: el problema más pequeño que obliga a comprender, decidir, implementar y verificar la habilidad, sin introducir arquitectura o entregables propios de un laboratorio.

**Mínimo** NO significa trivial o una línea de sintaxis. **Significativo** NO significa un miniproyecto. La cantidad de ejercicios por semana depende de los **resultados imprescindibles de aprendizaje**, no de una cuota fija.

### Diferencias entre materiales

| Recurso | Su función | Enunciado típico | Entrega adecuada |
|---|---|---|---|
| **Ejemplo** (`ejemplos/`) | Mostrar cómo funciona un concepto nuevo | «Observa qué hace `List.add()`» | Código demostrado / explicación |
| **Ejercicio** (`ejercicios/`) | Aplicar y comprobar **una decisión o comportamiento focal** | «Impide sobrecupos de una lista y verifica un límite» | Fragmento/programa mínimo y evidencia concreta |
| **Desafío** (desafíos web/banco) | Transferir con **mayor autonomía** un aprendizaje ya introducido | «Propón solución ante restricciones conocidas» | Solución y justificación, ayuda limitada |
| **Laboratorio** (`labs/`) | **Integrar capacidades** en una solución funcional, incremental y guiada | «Construye una aplicación con entidades, estados, validaciones y UI» | Proyecto autónomo y checkpoints por incremento |
| **PetCare** (`proyecto-formativo/`) | Evolucionar el **mismo producto entre semanas** | «Integra la capacidad nueva sin romper lo anterior» | Incremento longitudinal del proyecto |
| **Taller guiado** (complementario) | Refactorización o exploración de varias etapas, quizá heredada del curso | «Experimenta problema → refactor → compara» | Versiones sucesivas, análisis y verificación; **no contarlo como ejercicio mínimo** |

## 2. Contrato mínimo del ejercicio

Un enunciado completo debe comunicar, proporcionalmente a su dificultad:

1. **Concepto o decisión focal** (uno principal; dos solo si inseparables).
2. **Situación concreta**, evitando instrucciones puramente mecánicas sin necesidad.
3. **Comportamiento observable** y alcance pequeño: qué entradas manejar, qué salida obtener y qué evitar.
4. **Restricciones curriculares** y del ejercicio: no adelantar contenido; sin arquitecturas artificiales.
5. **Prueba reproducible**: datos de entrada y salida esperada, incluyendo límite/rechazo cuando el concepto lo requiera.
6. **Pregunta breve de justificación**: por qué se usa la herramienta o cómo se protege la regla.
7. **Ayuda proporcional**: una pista o punto de partida cuando la API/herramienta sea nueva. No entregar de forma predeterminada toda la solución.
8. **Independencia**: ejercicios de la semana autocontenidos; si usan un ejemplo común, declarar la dependencia local, ofrecer punto de partida y no exigir un lab anterior.

**No** requieren por defecto README individual, diagrama, repositorio nuevo, muchas clases, pantalla, menú, commits por ejercicio ni carpeta de capturas. Una ejecución y comparación del resultado suele bastar. El DevLog tiene su regla global, pero no debe inflar cada ejercicio.

## 3. Unidad de aprendizaje antes que número de ejercicios

Diseñar la secuencia así:

`Contenido verificable → habilidad cognitiva → error probable → enunciado mínimo → prueba de aceptación → ayuda → ubicación`.

- Si el ejercicio se resuelve copiando una API sin decidir nada, probablemente es **ejemplo** o necesita una condición de negocio.
- Si incorpora varios casos de uso, capas, menú, persistencia o secuencia larga, probablemente es **taller** o **laboratorio**.
- Si pide un concepto que se enseña más adelante, **restringir o postergar**, salvo repaso explícito.
- Si dos ejercicios tienen exactamente el mismo aprendizaje y prueba, unirlos o convertir uno en variación optativa.
- No homologar por duración (5, 10 o 15 minutos) ni por una cantidad de actividades: el tiempo es orientativo y depende del nivel del grupo.

## 4. Andamiaje gradual

- **Concepto recién presentado:** pista de API, mini-esqueleto si es necesario, entrada/salida explícita.
- **Concepto aplicado por primera vez:** contexto y prueba, menos código de referencia.
- **Reutilización consolidada:** problema y pruebas; el estudiante elige su implementación y explica la decisión.
- **Dificultad nueva transversal (Maven, FXML, JSON):** devolver las «rueditas» únicamente a la herramienta no conocida; no resolver automáticamente la lógica de negocio.

La claridad de requisitos y pruebas **no disminuye**, aunque sí la ayuda de implementación.

## 5. Reglas de publicación y trazabilidad

- **Fuente docente de enunciados:** `ejercicios/semana-XX/README.md` en `master`.
- **Índice:** `ejercicios/README.md` señala disponible/pending y remite a cada semana.
- **Portal (`gh-pages`):** **navegación** hacia esos enunciados canónicos, no copias divergentes. Los ejercicios antiguos del portal pueden conservarse etiquetados **archivo histórico**, evitando presentarlos como vigentes en paralelo.
- **Currículo (`semanas/`):** referencia al banco semanal y su competencia; no duplicar los enunciados.
- **Material histórico extenso:** preservar archivos y rutas, pero señalizar como taller/práctica complementaria y sacarlos del conteo de ejercicios mínimos.
- **Rutas de ejercicios anteriores:** preservar enlaces existentes con alias o aviso cuando haya migraciones.
- **Institucional:** no equiparar materiales propios con los originales de AVA ni afirmar conciliación de archivos no leídos.

## 6. Definition of Done de un ejercicio

- [ ] Una habilidad focal reconocible y alineada con la semana.
- [ ] Un problema suficientemente real para aplicar esa habilidad.
- [ ] Resultado observable y prueba con dato concreto.
- [ ] Sin complejidad que pertenezca a laboratorio/taller ni conocimientos adelantados.
- [ ] Ayuda proporcional y pregunta que exija razonar.
- [ ] No depende de PetCare, otro lab ni de ejercicios anteriores sin punto de partida explícito.
- [ ] El enlace canónico existe y no compite con una versión distinta del portal.

## 7. Contrato del banco semanal

Cada semana publica los ejercicios **necesarios** para cubrir conceptos efectivamente enseñados. No hay cinco, diez o cuatro ejercicios por obligación. El README abre con foco curricular, límites, requisitos y explicación de cómo verificar; termina con cobertura resumida y separa «refuerzo adicional» de las actividades esenciales.

## 8. Relación con evaluaciones

El enfoque se inspira en la EP1 por la claridad de **qué debe hacer** el sistema y **cómo verificarlo**. **No** exige las mismas partes, documentos, rúbricas o condiciones evaluativas. Los ejercicios no sustituyen EP1/EP2.
