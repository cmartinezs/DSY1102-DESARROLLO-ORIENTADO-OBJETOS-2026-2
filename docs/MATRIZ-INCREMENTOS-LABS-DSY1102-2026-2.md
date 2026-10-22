# Matriz de diseño de incrementos · DSY1102 · 2026-2

**Fecha:** 22 octubre 2026. **Objetivo:** revisar laboratorios oficiales 02–11 según resultados de aprendizaje y pruebas observables, **no** por simetría de archivos. Se aplica [estándar pedagógico incremental](ESTANDAR-DISENO-PEDAGOGICO-INCREMENTAL.md).

> Esta matriz no redefine contenidos del PDA, condiciones de EP1/EP2 ni el cronograma. Es una revisión editorial y didáctica. **La cifra de incrementos no es una cuota:** se revalida si cambian los requisitos. Un archivo puede contener varios pasos; una verificación final puede ser un archivo de soporte y no un incremento nuevo.

| Semana | Caso autónomo oficial | Resultados que ameritan incrementos | Prueba de aceptación principal | Decisión editorial y estado |
|---|---|---|---|---|
| 02 | Cuenta simple | (1) cálculo ejecutable; (2) extracción a método; (3) dos objetos con estado propio | Depósitos independientes y cálculo esperado | **3 incrementos + cierre**; 4 archivos numerados existentes siguen siendo razonables (el 04 es prueba, no incremento) |
| 03 | Batería de un dron | (1) batería creada con estado inicial; (2) carga/consumo que preservan 0–100 | Rechazo sin modificar el porcentaje | **2 incrementos + cierre**; proyecto/archivo base y modelo comparten incremento, otro archivo contiene pruebas |
| 04 | Pedidos de cafetería | (1) cliente inicializado; (2) pedido que colabora y protege totales | Descuento válido e inválido sin alterar estado ilegalmente | **2 incrementos + integración/pruebas**; los 4 archivos se mantienen por legibilidad, no por cuota |
| 05 | Despachos urbanos | (1) jerarquía con `extends/super`; (2) cálculo sobrescrito despachado polimórficamente | Normal $2500 vs expreso $4500 | **2 incrementos + preparación/cierre**; conservar 4 documentos si facilitan lectura |
| 06 | Inscripciones a talleres | (1) array y límite; (2) transición List/ArrayList; (3) registro y rechazo mediante excepciones | Alta cuarta inscripción y duplicado controlado | **3 incrementos + preparación/pruebas**; 4 documentos existentes, análisis del error está en el cierre |
| 07 | Centro de soporte técnico | (1) abstracción de Equipo; (2) capacidad opcional `Actualizable` e integración polimórfica | Solo computador permite actualizar | **2 incrementos + preparación/pruebas**; 4 archivos no obligan a 4 cambios |
| 08 | Control de acceso a feria | (1) elegir entre List/Set/Map con evidencia; (2) registro único y búsqueda por clave | No sobrescribir F001 al registrar f001 | **2 incrementos + prueba de integridad**; 4 documentos actuales son preparación/decisión/código/prueba |
| 09 | Primera interfaz JavaFX | (1) proyecto Maven ejecutable; (2) FXML; (3) evento Controller→modelo | Interacción válida/incorrecta desde GUI | **3 incrementos + validación**; 4 documentos actuales encajan naturalmente |
| 10 | Arriendo de recintos deportivos | (1) modelo y repositorio; (2) tabla observable; (3) formulario, navegación y validaciones | Dos reservas compatibles, duplicado rechazado | **3 incrementos + cierre**; cuatro archivos principales + matriz adicional de pruebas |
| 11 | Inventario de instrumentos | (1) arranque/modelo; (2) DAO JSON comprobado; (3) Service/validaciones probado; (4) interfaz MVC navegable; (5) recuperación desde archivo | Registrar, reiniciar y ver los mismos instrumentos; error controlado | **5 incrementos publicados**: separación de Service y JavaFX aplicada; enlaces anteriores preservados mediante alias |

## Conclusiones de revisión retroactiva

1. **Los laboratorios 02–10 no necesitan renumerarse automáticamente.** Cuatro archivos en disco pueden representar dos o tres incrementos y un cierre; se evita provocar enlaces rotos solo por tener diferente número de archivos.
2. **Semana 11 sí necesitaba una división material:** el archivo 03 mezclaba servicio/reglas con creación de interfaces FXML. Se separó en `03-servicio-y-reglas.md` y `04-interfaz-y-navegacion.md`, con `05-pruebas-persistencia.md` como cierre. Los archivos previos `03-javafx-mvc.md` y `04-pruebas.md` ahora redirigen a los canónicos.
3. El número de **pasos** no tiene cupo. Para una acción nueva se describe la secuencia de IntelliJ; para conceptos dominados, la guía puede indicar un contrato claro, una pista y la prueba sin entregar una solución completa.
4. **No mezclar continuidad:** laboratorios independientes entre semanas; PetCare longitudinal; Veterinaria histórica opcional.
5. La **homologación normativa y mapa pedagógico están aplicados**. No equivale a una validación de compilación de extremo a extremo.

## Criterios para aceptar futuros incrementos

- ¿Puede el estudiante indicar qué cambió en el programa tras completarlo?
- ¿Hay una prueba de aceptación que fallaría si ese incremento no existiese?
- ¿Depende de un resultado anterior **dentro del mismo proyecto**?
- ¿Es una dificultad/decisión nueva o solo un paso técnico pequeño?
- ¿La ayuda es suficiente para ejecutar y aprender sin hacer todo por el estudiante?
- ¿La publicación permite volver al paso previo sin perder el contexto?

**Regla de decisión:** si dos supuestas etapas comparten la misma prueba y producen un único resultado, probablemente deben unirse; si una etapa contiene dos capacidades que deben comprobarse de manera independiente, considerar dividirla.

## Resto pendiente de validación

- Ejecución integral fresca de cada laboratorio en IntelliJ, incluidas rutas FXML/módulos, antes de certificar reproducibilidad.
- Revisión de dificultad real y tiempos con estudiantes: esta matriz se fundamenta en documentos, no en datos de aprendizaje medidos.
- Recepción y conciliación de materiales institucionales faltantes en semana 11.
- Comprobar publicación pública HTTP de GitHub Pages además de validar las fuentes en la rama.
