# Semana 11 · Persistencia JSON, Repository/DAO y JavaFX MVC
**DSY1102 · EA2 · 19 al 24 de octubre de 2026**


## Ejercicios mínimos significativos · Semana 11

**[Banco canónico de ejercicios de la semana](../../ejercicios/semana-11/README.md)** — aplicación de una habilidad focal mediante un problema con resultados verificables. No es un laboratorio reducido y no requiere usar PetCare. Si existen prácticas anteriores más extensas, son materiales complementarios, no un segundo banco vigente.

## Alcance institucional
El correo de coordinación establece: serialización y deserialización JSON, conservación de datos entre ejecuciones, separación Repository/DAO del controlador JavaFX y verificación de lectura/escritura. Recursos anunciados: **2.4.1_PPT_Persistencia con JSON**, **2.4.2_Capa Repository y DAO**, **2.4.3_Guía_Actividad Persistencia**, **2.4.4_Ejercicios generales**. **Los cuatro archivos originales no están adjuntos en esta conversación**: se consignan como pendientes de incorporación, sin atribuirles contenido específico no verificado.

## Ruta conceptual
1. Comparar `ObservableList` en memoria con datos almacenados en disco.
2. Serializar una colección de objetos Java hacia JSON y deserializar al reiniciar.
3. Usar una interfaz DAO/Repository; controlador no conoce rutas ni bibliotecas JSON.
4. Ejecutar JavaFX con tabla, formulario y manejo visible de errores de I/O.
5. Comprobar persistencia con cierre/reinicio y archivo JSON legible.

## Independencia
**Los laboratorios semanales son autónomos:** Semana 11 propone `InventarioInstrumentosFX`, proyecto nuevo desde cero. **PetCare** es la vertical longitudinal y puede incorporar persistencia sin copiar el laboratorio. La sugerencia de coordinación de continuar proyectos anteriores se respeta como una *opción pedagógica* para ejercicios/proyecto formativo, nunca como dependencia obligatoria del lab.

## Clase consolidada de la Unidad 2 · Cápsula del Tiempo FX

- [**Presentación HTML interactiva · Entrega 01**](https://cmartinezs.github.io/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2/pages/classes/capsula-tiempo-fx/) — el proyecto desde cero, error real de Java 8/Maven, corrección y primera ventana funcional.
- [**Fuentes y hoja de ruta del consolidado**](../../clases/unidad-02/capsula-tiempo-fx/README.md).

Es una clase transversal **distinta** del laboratorio InventarioInstrumentosFX. Por ahora solo R00 tiene evidencia real; modelo, MVC, DAO y JSON se incorporarán cuando estén implementados y comprobados.

## Material del curso
- [Laboratorio independiente: inventario de instrumentos musicales (5 incrementos funcionales)](../../labs/semana-11/README.md)
- [Matriz de trazabilidad y conciliación](CONCILIACION.md)
- [Índice de laboratorios](../../labs/README.md)

## Evaluación y coordinación (no publicar formas)
Coordinación informa que EP2 y su rúbrica están en ajuste, con versiones corregidas esperadas el 19 de octubre para revisión docente y remisión a Krino. **No presupone publicación, aprobación ni fechas definitivas**. No se incluyen formas, rúbricas internas ni observaciones docentes en material público.

## Fuentes
- Orientaciones de semana 11 suministradas en conversación.
- Material institucional 2.4.1–2.4.4: pendiente de recepción y revisión técnica.
