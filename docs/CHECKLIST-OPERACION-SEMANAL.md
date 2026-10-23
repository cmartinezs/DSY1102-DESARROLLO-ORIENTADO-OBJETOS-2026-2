# Checklist operativo semanal · DSY1102

Este documento define el ciclo mínimo para preparar, ejecutar y cerrar cada semana de **DSY1102 · Desarrollo Orientado a Objetos**.

No reemplaza la planificación institucional. Su objetivo es evitar desalineaciones entre cronograma, repo, portal web, Drive y avance real de la sección.

## 1. Antes de liberar la semana

- [ ] Confirmar semana curricular, fechas y feriados.
- [ ] Revisar cronograma institucional, material AVA y evaluaciones próximas.
- [ ] Revisar el avance real de la sección y las deudas de la semana anterior.
- [ ] Crear o reconciliar `semanas/semana-XX/`.
- [ ] Liberar el contenido que corresponde por semana curricular, aunque aún no se haya alcanzado completamente en clase.
- [ ] Preparar ejemplos en `ejemplos/semana-XX/` conforme al [estándar de ejemplos](ESTANDAR-EJEMPLOS-DSY1102.md): concepto focal, ejecución y resultado verificable. cuando corresponda.
- [ ] Preparar el **banco de ejercicios mínimos significativos** en `ejercicios/semana-XX/README.md`, alineando habilidad focal → problema → comportamiento → datos de prueba → resultado esperado. Referencia: [estándar de ejercicios](ESTANDAR-EJERCICIOS-MINIMOS-DSY1102.md).
- [ ] Comprobar cobertura de **todos los conceptos esenciales efectivamente planificados**, sin imponer una cantidad fija de ejercicios ni adelantar contenidos.
- [ ] Reclasificar en `ejemplos/`, talleres opcionales o `labs/` las actividades que sean demostraciones de API o integración extensa; conservar enlaces/archivo histórico.
- [ ] Diseñar laboratorio en `labs/semana-XX/` a partir de requisitos funcionales/técnicos, pruebas y **mapa de incrementos variables** (no una cantidad predeterminada de etapas), según [estándar pedagógico](ESTANDAR-DISENO-PEDAGOGICO-INCREMENTAL.md).
- [ ] Ajustar los pasos y el andamiaje a la novedad de cada concepto (rueditas donde corresponde), con checkpoint por incremento.
- [ ] Declarar explícitamente el proyecto nuevo y la independencia de otros laboratorios; PetCare mantiene su propia progresión.
- [ ] Definir el incremento/checkpoint de PetCare sin adelantar contenidos futuros.
- [ ] Actualizar desafíos destacados y desbloqueos cuando corresponda, manteniendo su fuente canónica en el repositorio.
- [ ] Verificar enlaces entre repo, portal y Material Público.

## 2. Ruta mínima que debe ver el estudiante

La página principal debe responder, sin necesidad de explorar el repo:

1. **Qué aprender esta semana.**
2. **Qué practicar.**
3. **Qué laboratorio o integración corresponde.**
4. **Qué avanzar en PetCare.**
5. **Qué es obligatorio y qué es opcional.**
6. **Qué debería poder explicar al terminar.**

## 3. Durante las clases

- [ ] Registrar qué se alcanzó realmente.
- [ ] No marcar como visto contenido solo porque estaba planificado.
- [ ] Ajustar ejemplos cuando una explicación real de clase resulte mejor que la preparada.
- [ ] Registrar dudas frecuentes que justifiquen una aclaración posterior.
- [ ] Mantener diferencias de avance de sección cuando existan.
- [ ] Evitar introducir conceptos futuros solo para completar una actividad diseñada previamente.

## 4. Cierre semanal

- [ ] Publicar o actualizar el resumen real de la semana.
- [ ] Actualizar PetCare desde el estado efectivamente alcanzado.
- [ ] Confirmar qué ejercicios/desafíos quedan disponibles para estudio autónomo.
- [ ] Reconciliar `semanas/`, `ejemplos/`, `ejercicios/`, `labs/` y `proyecto-formativo/`.
- [ ] Compilar ejemplos por carpeta/proyecto con `scripts/verificar-ejemplos.sh` y registrar cualquier verificación Maven o visual pendiente.
- [ ] Comprobar que no existan dos fuentes activas del mismo artefacto: ejercicios canónicos en `master/ejercicios/`, portal como índice; prácticas históricas señalizadas.
- [ ] Revisar que todos los enlaces públicos funcionen y que el número/títulos de incrementos coincidan entre índice, Markdown y portal.
- [ ] Comprobar los casos de aceptación de cada incremento; si no se ejecutaron de punta a punta, registrar la limitación.
- [ ] Registrar deuda pedagógica o técnica que deba retomarse la semana siguiente.
- [ ] Actualizar `data/weekly/semana-XX.yml` con plan vs avance real, evidencias, DevLog agregado, PetCare, bloqueos y foco siguiente.
- [ ] Mantener en `null` cualquier métrica sin evidencia confiable; no estimar ni completar datos personales.
- [ ] Confirmar que el portal publicado en `gh-pages` siga siendo un read model derivado de las fuentes de `master`, sin mantener una raíz `page/` paralela.

## 5. Estadísticas semanales

El dataset se rige por [`ESTANDAR-ESTADISTICAS-SEMANALES.md`](./ESTANDAR-ESTADISTICAS-SEMANALES.md).

Al cerrar la semana, verificar que el YAML permita derivar al menos:

- cobertura curricular;
- sesiones/bloques planificados vs realizados;
- participación agregada en DevLog cuando ya exista medición;
- evidencia formativa disponible;
- estado de PetCare;
- avance de ejercicios/labs/desafíos;
- bloqueos y deuda para la semana siguiente.

El archivo estadístico es agregado y operacional: no contiene nombres ni notas individuales.

## 6. Criterio de calidad

Una semana se considera operacionalmente lista cuando un estudiante puede entrar al portal y responder:

- qué debo hacer ahora;
- dónde está el material;
- qué es obligatorio;
- qué puedo hacer si quiero practicar más;
- qué debería saber explicar al terminar.

Y el docente puede responder, desde `data/weekly/`, qué se planificó, qué ocurrió realmente y qué arrastre queda para la semana siguiente.

La meta no es publicar mucho material, sino mantener una ruta clara, coherente y medible.
