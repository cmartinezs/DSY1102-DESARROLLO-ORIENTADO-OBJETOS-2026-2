# 02 · JSON desde cero, sin saber JavaScript

**Microcápsula complementaria · DSY1102 Unidad 2 · 12–18 min**  
**Pregunta:** ¿cómo representar los registros como texto que otro programa pueda leer?

## ¿Qué es JSON?
**JSON** (*JavaScript Object Notation*) es un **formato textual para intercambiar datos**. Su origen está relacionado con la sintaxis de JavaScript, pero **no necesitas saber ni ejecutar JavaScript para leer o escribir JSON**. Java, Python y otros lenguajes pueden trabajar con él.

No es un lenguaje de programación, no tiene instrucciones que se ejecuten y no reemplaza una base de datos por sí solo. Su valor es que múltiples programas comprenden las mismas reglas de representación.

## Los seis tipos de valor

```json
{
  "autor": "Ana",
  "plazoAnios": 5,
  "publicado": true,
  "fechaLectura": null,
  "etiquetas": ["personal", "futuro"],
  "metadatos": {"origen": "clase"}
}
```

- **Texto** (`"Ana"`): entre comillas dobles.
- **Número** (`5`, `2.5`): sin comillas.
- **Booleano** (`true` o `false`): sin comillas.
- **Nulo** (`null`): ausencia explícita de valor.
- **Arreglo** (`[...]`): elementos en orden.
- **Objeto** (`{...}`): pares de nombre–valor.

La primera línea del objeto es un **par clave–valor**: `"autor"` es la clave y `"Ana"` su valor.

## ¿Cómo representamos varios mensajes?

```json
[
  {"autor": "Ana", "texto": "Hola", "plazoAnios": 5},
  {"autor": "Luis", "texto": "Nos vemos", "plazoAnios": 10}
]
```

El corchete exterior indica un **arreglo** con **dos objetos**. Cada objeto es un registro distinto. Que dos objetos tengan la misma clave `"autor"` es completamente normal.

## Errores habituales (no son detalles cosméticos)

| Error | Incorrecto | Correcto |
| --- | --- | --- |
| Comillas de texto | `{'autor':'Luis'}` | `{"autor":"Luis"}` |
| Clave sin comillas | `{autor:"Luis"}` | `{"autor":"Luis"}` |
| Coma sobrante | `{"autor":"Luis",}` | `{"autor":"Luis"}` |
| Comentarios | `{"autor":"Luis"} // saludo` | `{"autor":"Luis"}` |
| Cerrar estructuras | `[{"autor":"Luis"}` | `[{"autor":"Luis"}]` |

**Importante:** repetir una clave dentro del **mismo objeto** crea un dato ambiguo:
```json
{"texto": "Primero", "texto": "Segundo"}
```
Algunos procesadores usan el último valor y otros rechazan el documento. En R06 configuramos Jackson para **rechazar duplicados** mediante `STRICT_DUPLICATE_DETECTION`; no enseñamos a depender de un resultado ambiguo.

## Tres preguntas distintas
1. **¿Está bien formado el texto JSON?** Corresponde a sintaxis.
2. **¿Tiene la estructura esperada?** Esperamos un arreglo de mensajes con `autor`, `texto`, `plazoAnios`.
3. **¿Son válidos los datos para el negocio?** Autor no vacío, texto no vacío y plazo positivo.

Un JSON puede cumplir la primera y fallar la segunda o la tercera.

## Ejercicio de autocomprobación
Para cada ejemplo, explica qué ocurre:
```json
[]
```
```json
[{"autor": "Ana", "plazoAnios": -2, "texto": "Hola"}]
```
```json
[{"autor": "Ana", "texto": "Hola", "plazoAnios": 5,}]
```

**Respuestas:** (1) sintaxis y estructura de arreglo válidas, colección vacía; (2) JSON bien formado, pero negocio inválido; (3) JSON malformado por coma final.

**Siguiente:** [03 · De objeto Java a JSON](03-java-a-json-con-jackson.md).  
**Práctica interactiva:** [Detective JSON · abrir actividad interactiva](https://academic-labs.adumun.cl/activities/detective-json/).
