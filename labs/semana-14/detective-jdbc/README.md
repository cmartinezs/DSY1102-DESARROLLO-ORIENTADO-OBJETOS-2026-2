# Detective JDBC

Diagnostica ocho defectos independientes. [Versión web](https://academic-labs.adumun.cl/activities/dsy1102-detective-jdbc/) · [Entorno común](../../../ejercicios/semana-14/microdesafios/entorno.md). Los fragmentos son defectuosos intencionalmente y no forman una aplicación compilable. Inspecciona antes de ejecutar; nunca ejecutes el UPDATE sin WHERE. Registra síntoma, causa, cambio y prueba. No hay pauta de respuestas.

## Caso 01 · Conexión

La aplicación no inicia su lectura. Revisa esta configuración, considerando que tu servidor local escucha en 3306.

[Fragmento defectuoso](casos/01.java.txt)

**Criterio de aceptación:** La conexión se establece con el puerto real.

## Caso 02 · Parámetros

El método falla al modificar un registro. Comprueba correspondencia y tipos de los parámetros.

[Fragmento defectuoso](casos/02.java.txt)

**Criterio de aceptación:** Solo se modifica el registro indicado.

## Caso 03 · Cursor

Una consulta devuelve filas, pero leerlas produce una excepción.

[Fragmento defectuoso](casos/03.java.txt)

**Criterio de aceptación:** Se leen correctamente cero, una o varias filas.

## Caso 04 · Mapeo

El modelo tiene un ID entero y un título String; revisa qué columna recibe cada valor.

[Fragmento defectuoso](casos/04.java.txt)

**Criterio de aceptación:** El objeto conserva el ID y título reales.

## Caso 05 · UPDATE masivo

Inspección estática exclusivamente. NO ejecutes esta consulta: podría modificar todas las filas. Corrige antes de probar en tu esquema desechable.

[Fragmento defectuoso](casos/05.sql.txt)

**Criterio de aceptación:** La consulta corregida afecta únicamente el ID elegido.

## Caso 06 · FXML

La vista declara fx:id=tablaLibros y el controlador recibe una referencia nula.

[Fragmento defectuoso](casos/06.java.txt)

**Criterio de aceptación:** El identificador coincide y la vista carga.

## Caso 07 · Refresco

El guardado en SQL tiene éxito, pero la tabla sigue mostrando datos anteriores.

[Fragmento defectuoso](casos/07.java.txt)

**Criterio de aceptación:** La tabla y SQL coinciden tras guardar.

## Caso 08 · Validación

El formulario permite guardar un título vacío o compuesto solo por espacios.

[Fragmento defectuoso](casos/08.java.txt)

**Criterio de aceptación:** Las entradas inválidas no cambian la base.

## Modalidad web · Contra reloj

La actividad web ofrece 24 preguntas, tres por temática, extraídas de un banco de 72 casos. Incluye selección simple (35 s), múltiple (50 s) y verdadero/falso (20 s), con 8 preguntas de cada tipo y 14 minutos de tiempo máximo acumulado. Se mezclan preguntas y alternativas. El intento y los plazos se conservan localmente; recargar no permite reiniciar y registra una incidencia. No se permite retroceder. La selección múltiple exige todas y solo las opciones correctas. El puntaje y TXT son formativos; no certifican identidad, integridad ni ausencia de asistencia externa. La aleatorización reduce coincidencias, pero no garantiza exclusividad global sin backend. Los fragmentos de este repositorio quedan como material de práctica y diagnóstico, no como el cuestionario activo.
