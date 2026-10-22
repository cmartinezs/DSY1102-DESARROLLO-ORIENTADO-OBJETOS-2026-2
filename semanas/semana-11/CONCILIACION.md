# Conciliación curricular · Semana 11
**EA2 · 19–24 octubre 2026**

| Fuente | Requisito respaldado | Aplicación |
|---|---|---|
| Correo coordinador | JSON serialización/deserialización | Persistencia al guardar y al iniciar |
| Correo coordinador | Repository/DAO separado del controlador | Contrato Java + implementación Json |
| Correo coordinador | Proyecto MVC completo | JavaFX listado, registro y errores |
| Correo coordinador | Verificar lectura y escritura | Pruebas de cierre y reinicio + JSON válido |
| 2.4.1 Persistencia con JSON | Material anunciado, **no recibido** | Pendiente revisar ejemplos/versiones |
| 2.4.2 Capa Repository y DAO | Material anunciado, **no recibido** | Pendiente reconciliar nomenclatura |
| 2.4.3 Guía Actividad Persistencia | Material anunciado, **no recibido** | Pendiente vincular recurso original |
| 2.4.4 Ejercicios generales | Material anunciado, **no recibido** | Pendiente vincular recurso original |

## Decisiones del curso
- El laboratorio es **nuevo e independiente**, sin código de semanas 9/10. Caso elegido: inventario de instrumentos musicales; no repetir arriendo de recintos.
- PetCare sigue como proyecto formativo longitudinal.
- Persistencia JSON de alcance local: ruta `data/instrumentos.json` relativa al directorio de ejecución; documentar esa ubicación, permisos y comportamiento del archivo ausente/corrupto.
- Usar Jackson como opción didáctica propia del curso (**no atribuida a material institucional**); versión y configuración se inspeccionan en Maven Central/IDE antes de desarrollar. No inventar API oficial de las diapositivas.
- Evitar guardar directamente desde los controladores; coordinar cambios a través de repositorio/DAO.
- EP2: solamente constancia de revisión docente pendiente; no publicar borradores.

## Pendiente externo
Recibir archivos 2.4.1–2.4.4 y conciliar a nivel de guía, ejemplos, terminología y versiones antes de afirmar alineación documental completa.
