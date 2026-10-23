# DSY1102 · Estándar de diseño pedagógico incremental y acompañamiento adaptativo

**Estado:** criterio vigente para materiales nuevos y revisión progresiva del semestre 2026-2.  
**Ámbito:** semanas, ejemplos, ejercicios, laboratorios, proyecto formativo PetCare y prácticas evaluativas.  
**Autoridad:** especialización de DSY1102; no modifica el canon transversal de repositorios ni instrumentos institucionales.

## 1. Principio rector: homologar la experiencia, no la cantidad de archivos

Cada actividad se diseña a partir del **problema, los requerimientos funcionales y técnicos, las dependencias reales de aprendizaje y los resultados verificables**. No existe un número obligatorio de etapas, archivos, pasos, clases o commits. Cuatro documentos NO es una definición de terminado.

La cantidad de **incrementos** se decide por cambios observables del sistema que merezcan comprobarse por separado. La cantidad de **pasos** depende del trabajo y del acompañamiento necesario para implementar cada incremento. Los pasos no son automáticamente nuevas etapas.

### Tres niveles sin confundirlos
1. **Contrato pedagógico estable:** contexto, objetivos/contenidos, límites, conocimientos previos, autonomía o continuidad, criterio de éxito, evidencia y navegación.
2. **Incrementos funcionales variables:** cada incremento agrega/corrige comportamiento, conserva lo anterior y culmina en un checkpoint reproducible.
3. **Pasos de construcción variables:** clics de IntelliJ, archivos, fragmentos, explicación de decisiones, ejecución, resultado esperado y resolución de fallos. Puede haber pocos o muchos pasos por incremento.

> Una etapa existe porque produce un estado de software o comprensión comprobable, **no** porque falte completar una plantilla.

## 2. Aprendizajes reutilizados del diseño de EP1

La **EP1 replanteada para aplicación progresiva** organiza un solo problema en partes acumulativas:
- contexto completo del dominio, sin exigir anticipar la solución final;
- cada parte distingue **requerimientos funcionales** (qué debe lograrse) y **técnicos** (cómo evidenciar la competencia);
- una parte nueva evoluciona el código anterior **dentro de la misma actividad**;
- checklist **«Antes de avanzar»** y prueba de comportamiento, no solo compilación;
- **claridad constante del requerimiento; apoyo de implementación progresivamente menor** conforme se consolida la competencia.

La EP1 constituye una **referencia metodológica**, no una norma sobre cantidad de partes ni una autorización para alterar formas, rúbricas o condiciones oficiales.

## 3. Autonomía entre actividades y continuidad dentro de la actividad

- **Labs:** un proyecto nuevo y autocontenido por laboratorio semanal; ningún lab oficial exige artefactos o entregas de semanas anteriores. Los pasos e incrementos de **ese mismo lab** sí evolucionan el mismo proyecto.
- **PetCare:** única secuencia longitudinal de producto entre semanas; no reiniciar ni duplicar la solución.
- **Ejemplos:** independientes y breves, muestran una idea puntual; no se exige dividirlos artificialmente.
- **Ejercicios:** unidad mínima de aplicación significativa de una habilidad focal; exige una decisión y prueba observable, **no un minilaboratorio**. Su norma específica es [Estándar de ejercicios mínimos](ESTANDAR-EJERCICIOS-MINIMOS-DSY1102.md).
- **Evaluaciones:** se someten a sus reglas institucionales, instrumentos y condiciones de integridad; una evolución interna del proyecto evaluado no convierte los labs en dependientes.
- **Veterinaria I–IV:** patrimonio histórico opcional con sus dependencias originales internas; no prerrequisito de los labs oficiales.

## 4. Escalera de apoyo: «bicicleta con rueditas»

| Momento de aprendizaje | Ayuda sugerida | Trabajo del alumno |
|---|---|---|
| Concepto nuevo / herramienta desconocida | Secuencia muy guiada; menú exacto, ruta, archivo, código mínimo íntegro, ejecución y resultado | Reproduce, observa y explica |
| Primera aplicación autónoma | Esqueleto o ejemplo focalizado, decisión delimitada, criterios y pruebas conocidas | Completa y adapta |
| Integración de conceptos vistos | Contratos, resultados esperados, pistas y errores frecuentes; sin solución integral regalada | Diseña e implementa |
| Transferencia / práctica evaluativa | Requerimientos claros, evidencias y restricciones; apoyo ajustado al instrumento y condiciones oficiales | Decide, justifica y demuestra |

La disminución del apoyo **no es lineal ni irreversible**: cuando aparece una herramienta o concepto nuevo, vuelven las rueditas para ese contenido. Nunca esconder un requisito, un criterio de éxito o una instrucción operativa imprescindible.

## 5. Contrato mínimo del incremento

Cada incremento debe responder:
1. **Por qué:** problema concreto y resultado observable.
2. **Qué:** requisitos funcionales y técnicos necesarios (separados cuando aporta claridad).
3. **Punto de partida:** estado del proyecto dentro de la actividad.
4. **Cómo:** pasos necesarios, nivel de ayuda adecuado, archivos y dependencias reales.
5. **Comprobación:** ejecutar y verificar con datos/resultado esperado; fallo y recuperación.
6. **Evidencia:** salida, código, prueba o breve defensa conceptual.
7. **Siguiente:** nueva necesidad que justifica el incremento posterior.

No duplicar este texto como siete encabezados vacíos si un incremento pequeño puede comunicarlo con menos estructura.

## 6. Diseño «de atrás hacia adelante»

Antes de escribir archivos numerados:
1. Identificar aprendizajes/RA-IL si están respaldados.
2. Formular un problema acotado y resultado final observable.
3. Separar requisitos funcionales de técnicos y límites.
4. Diseñar **pruebas de aceptación** del resultado final y de cada cambio funcional.
5. Identificar dependencias verdaderas entre cambios: dibujar **mapa de incrementos**.
6. Definir cantidad de incrementos a partir del mapa; **no comenzar por cuatro**.
7. Descomponer cada incremento en tantos pasos como haga falta y graduar el apoyo.
8. Verificar que el alumno pueda ejecutar, entender y diagnosticar, sin adelantar materia.
9. Publicar la ruta canónica en GitHub, enlazar desde semana/portal y conservar historial relevante.

## 7. Estructura documental flexible

```text
labs/semana-XX/
  README.md              # contrato + mapa variable de incrementos
  01-<resultado>.md      # primer incremento, no necesariamente «setup»
  02-<resultado>.md
  ...
  NN-<resultado>.md      # cierre verificable; NN según el caso
```

Las pruebas pueden integrarse a un incremento o tener archivo dedicado si hacen crecer demasiado la guía. Un README **no se obliga a tener cuatro enlaces**. Las rutas históricas se preservan con enlaces de compatibilidad cuando cambian nombres o URLs ya compartidas.

## 8. Reglas de calidad, consistencia y trazabilidad

- Sin dependencia oculta de otro lab ni duplicación de PetCare.
- No inventar recursos institucionales ni fechas/ponderaciones; marcar brechas.
- No aumentar el alcance por cumplir una cantidad de etapas.
- Un incremento demuestra un cambio o aprendizaje distinguible y preserva la funcionalidad anterior.
- Las pruebas describen entradas y resultados concretos; «funciona» no es suficiente.
- Explicar dónde crear/editar archivos, ejecutar, ver el resultado y depurar cuando el alumno lo necesite.
- Diferenciar **guía de referencia** de **código verificado compilando**.
- El portal `gh-pages` presenta la ruta sin convertirse en copia normativa del Markdown en `master`.

## 9. Aplicación retroactiva

Auditar labs 02–11 **por razón pedagógica de cada incremento**, no por conteo de ficheros; registrar decisión **mantener / unir / dividir**. No renumerar una actividad solo para que tenga más o menos etapas. Evitar borrar enlaces históricos. Para nuevas semanas, aplicar el diseño variable **desde el principio**.

## 10. Definition of Done por laboratorio

- [ ] Caso acotado y autónomo, con contenidos/criterios respaldados.
- [ ] Requisitos y pruebas definidos antes de construir la ruta.
- [ ] Incrementos escogidos por resultados distintos; cantidad justificada.
- [ ] Cada incremento contiene los pasos necesarios y un checkpoint observable.
- [ ] Apoyo ajustado a novedad, autonomía e integración.
- [ ] Enlaces índice/semana/portal vigentes y sin contradicciones.
- [ ] Ejecución práctica comprobada o limitación declarada explícitamente.

## 11. Fuentes internas

- [Estándar de ejercicios mínimos DSY1102](ESTANDAR-EJERCICIOS-MINIMOS-DSY1102.md) — delimita ejercicios frente a ejemplos, laboratorios, talleres y desafíos; propone entradas/salidas y pruebas concretas.

- Diseño de EP1 con partes progresivas: `evaluaciones/ep1-liberada/version-a-eventpass.md` y formas docentes de EP1 consultadas como **referencia de método**, sin republicarlas ni alterar condiciones institucionales.
- `docs/ESTRUCTURA-CANONICA.md` — responsabilidades de verticales.
- `proyecto-formativo/ESTANDAR-DOCUMENTACION-SEMANAL.md` — continuidad de PetCare.
- `docs/CHECKLIST-OPERACION-SEMANAL.md` — verificación operativa de publicación.
