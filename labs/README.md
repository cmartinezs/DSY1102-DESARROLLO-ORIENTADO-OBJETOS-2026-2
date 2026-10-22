# Laboratorios · DSY1102

Laboratorios guiados e integradores, organizados por semana curricular y alineados al avance real de aula.

## Disponibilidad actual

| Semana | Laboratorio | Estado |
|---|---|---|
| Semana 01 | Sin laboratorio formal | Referencia histórica |
| [Semana 02](./semana-02/) | Cuenta simple · de lógica a objeto | ✅ Disponible |
| [Semana 03](./semana-03/) | Cuenta segura · objetos y encapsulamiento | ✅ Consolidado |
| [Semana 04](./semana-04/) | Objetos que nacen bien y colaboran | ✅ Consolidado |
| Semana 05 | Veterinaria I · Herencia y Polimorfismo | ✅ Consolidado en web guiada |
| [Semana 06](./semana-06/) | Veterinaria II · Arrays, colecciones y excepciones | ✅ Consolidado |
| [Semana 07](./semana-07/) | Veterinaria III · abstracción, interfaz e integración EA1 | ✅ Guía de recuperación disponible |
| [Semana 08](./semana-08/) | Veterinaria IV · Set, Map, identidad y consistencia | ✅ Guía de recuperación disponible |
| [Semana 09](./semana-09/) | Primera interfaz funcional JavaFX / FXML | ✅ Disponible |
| [Semana 10](./semana-10/) | Reservas de recintos deportivos · MVC, tabla, navegación y validación (desde cero) | ✅ Disponible |
| [Semana 11](./semana-11/) | Inventario de instrumentos musicales · JSON y DAO (desde cero) | ✅ Guía disponible |

## Estándar de acompañamiento: «bicicleta con rueditas»

Usar **semana 09 como referencia de profundidad**: no basta con indicar «crea un FXML» o «configura un DAO». Cada etapa debe ayudar a un alumno que todavía no sabe dónde hacer clic.

**Estructura recomendada, flexible según complejidad:**
- `README.md`: independencia del caso, objetivo, requisitos, mapa de archivos, enlaces a etapas, resultado esperado.
- `01-*.md`: preparación y creación del proyecto, con pasos reales de IntelliJ y primera ejecución correcta.
- `02-*.md`: primera funcionalidad, archivos exactos y código completo/adaptable.
- `03-*.md`: integración, interfaces, eventos, errores y comprobaciones.
- `04-*.md`: pruebas manuales reproducibles, evidencia, diagnóstico y cierre.
- Archivos adicionales (pruebas, ejercicios) sólo cuando aporten claridad; nombres únicos y enlazados.

**Cada documento** abre con navegación, punto de partida, pasos numerados, rutas o archivos concretos, capturas esperadas descritas en texto, fragmentos completos cuando son necesarios, **checkpoint antes de avanzar** y errores frecuentes con acciones concretas. No presupongas comandos, rutas, menús o conocimientos nuevos sin introducirlos. No se exige copiar una solución preconstruida: se acompaña la comprensión y la ejecución.

**Progresión:** cada lab es autónomo entre semanas. Sólo el proyecto formativo **PetCare** requiere continuidad longitudinal. La continuidad *dentro del mismo laboratorio* entre etapas sí es obligatoria. El número de etapas puede variar si la pedagogía lo justifica; consistencia de experiencia es más importante que identidad rígida de nombres.

## Regla canónica

Cada lab debe:

- tener `README.md` propio con propósito, objetivos, resultado esperado, contenidos relacionados, conocimientos previos y dependencias;
- estar dividido en varios `.md` secuenciales;
- indicar cada paso de forma explícita;
- incluir un checkpoint verificable en cada etapa;
- declarar de forma explícita cualquier dependencia con un laboratorio anterior;
- priorizar ejecución local y reproducible;
- evitar exigir conceptos que aún no han sido trabajados en aula;
- mantener correspondencia entre contenido canónico del repositorio y experiencia guiada publicada en GitHub Pages.

## Política de independencia

**Cada laboratorio semanal se inicia como proyecto autónomo.** No se exige reutilizar código ni archivos de laboratorios anteriores. La implementación incremental longitudinal corresponde a **PetCare**, en `proyecto-formativo/`.

## Referencias históricas de laboratorios evolutivos

Cuando un laboratorio extiende uno anterior, no se crea artificialmente un proyecto paralelo. La nueva actividad debe evolucionar el mismo artefacto y separar sólo la documentación/evidencia propia de la nueva fase.

Veterinaria II aplica esta regla sobre:

```text
labs/lab-veterinaria-herencia-polimorfismo/
```

Los labs no reemplazan ejercicios ni PetCare. Los ejercicios viven en [`../ejercicios/`](../ejercicios/) y el proyecto longitudinal en [`../proyecto-formativo/`](../proyecto-formativo/).
