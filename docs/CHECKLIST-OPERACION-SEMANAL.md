# Checklist operativo semanal · DSY1102

Este documento define el ciclo mínimo para preparar, ejecutar y cerrar cada semana de **DSY1102 · Desarrollo Orientado a Objetos**.

No reemplaza la planificación institucional. Su objetivo es evitar desalineaciones entre cronograma, repo, portal web, Drive y avance real de la sección.

## 1. Antes de liberar la semana

- [ ] Confirmar semana curricular, fechas y feriados.
- [ ] Revisar cronograma institucional, material AVA y evaluaciones próximas.
- [ ] Revisar el avance real de la sección y las deudas de la semana anterior.
- [ ] Crear o reconciliar `semanas/semana-XX/`.
- [ ] Liberar el contenido que corresponde por semana curricular, aunque aún no se haya alcanzado completamente en clase.
- [ ] Preparar ejemplos en `examples/semana-XX/` cuando corresponda.
- [ ] Preparar práctica corta en `practica/semana-XX/` cuando corresponda.
- [ ] Preparar laboratorio en `labs/semana-XX/` cuando exista una actividad integradora.
- [ ] Definir el incremento/checkpoint de PetCare sin adelantar contenidos futuros.
- [ ] Actualizar desafío semanal y desbloqueos de grandes desafíos si corresponde.
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
- [ ] Reconciliar `semanas/`, `practica/`, `labs/`, `examples/`, `proyecto-formativo/` y `page/`.
- [ ] Comprobar que no existan dos fuentes activas del mismo artefacto.
- [ ] Revisar que todos los enlaces públicos funcionen.
- [ ] Registrar deuda pedagógica o técnica que deba retomarse la semana siguiente.
- [ ] Actualizar `data/weekly/semana-XX.yml` con plan vs avance real, evidencias, DevLog agregado, PetCare, bloqueos y foco siguiente.
- [ ] Mantener en `null` cualquier métrica sin evidencia confiable; no estimar ni completar datos personales.

## 5. Estadísticas semanales

El dataset se rige por [`ESTANDAR-ESTADISTICAS-SEMANALES.md`](./ESTANDAR-ESTADISTICAS-SEMANALES.md).

Al cerrar la semana, verificar que el YAML permita derivar al menos:

- cobertura curricular;
- sesiones/bloques planificados vs realizados;
- participación agregada en DevLog cuando ya exista medición;
- evidencia formativa disponible;
- estado de PetCare;
- avance de prácticas/labs/desafíos;
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
