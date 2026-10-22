# 04 · Matriz de pruebas y evidencias

| ID | Procedimiento | Resultado esperado |
|---|---|---|
| P01 | Iniciar sin `data/instrumentos.json` | Tabla vacía sin excepción |
| P02 | Registrar G01, Guitarra eléctrica, guitarra | Registro visible y archivo JSON creado |
| P03 | Registrar B01, Bajo eléctrico, bajo | Dos registros en tabla y JSON |
| P04 | Cerrar completamente y abrir la app | Se recuperan ambos |
| P05 | Registrar g01, Otro, teclado | Duplicado rechazado, JSON sin cambios |
| P06 | Código vacío o nombre en blanco | Error visible, JSON sin cambios |
| P07 | Cerrar, abrir archivo y comprobar estructura JSON | Array válido con campos codigo/nombre/categoria |
| P08 | Sustituir temporalmente por JSON corrupto | Error de lectura, **archivo conservado** (haz copia antes) |
| P09 | Archivo existente, intentar guardar en ruta sin permisos (solo entorno de prueba) | Error de escritura, lista sin alta ficticia |
| P10 | Guardar y volver varias veces | No aparecen duplicados accidentales |

## Evidencia mínima
Captura de listado con dos instrumentos; contenido de JSON legible; captura después de reiniciar; error ante código duplicado; breve explicación de MVC y DAO.

## Trabajo autónomo
Distingue serialización y deserialización. Explica la responsabilidad del controller frente a `IOException`, qué hace el DAO y por qué no es correcto guardar en `resources`. No requiere trabajo de laboratorios anteriores.

## Terminado
- [ ] P01–P08 verificados y documentados (P09 si el entorno permite simular permisos).
- [ ] Guardado y carga resisten reinicio.
- [ ] Los errores no provocan sobrescritura silenciosa.
- [ ] Proyecto autónomo, separado de PetCare.
