# PetCare · Semana 08 · Set, Map y cierre de EA1

**Periodo:** 28 de septiembre al 3 de octubre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare llega con un core de consola capaz de trabajar con una jerarquía de mascotas, una colección dinámica, polimorfismo, abstracción, interfaces cuando corresponda y manejo explícito de errores.

## Objetivo

Extender el proyecto con `Set` y/o `Map` cuando exista una necesidad real de **unicidad** o **búsqueda por clave**, y cerrar el checkpoint de EA1 con decisiones de colección justificadas.

## Regla central

```text
List → mantener y recorrer múltiples elementos
Set  → evitar duplicados / representar valores únicos
Map  → asociar una clave con un valor
```

No existe obligación de agregar las tres estructuras.

## Paso 1 · Identificar una regla de unicidad

Buscar una necesidad que realmente diga “no repetir”.

Ejemplos posibles:

- número de chip único;
- identificador interno único;
- categorías o especies distintas registradas;
- prestaciones únicas asociadas a una configuración.

Si la regla sólo necesita valores simples:

```java
Set<String> chipsRegistrados = new HashSet<>();
```

Si se decide almacenar objetos propios en un `HashSet`, antes debe definirse con precisión qué significa que dos objetos sean iguales.

## Paso 2 · Incorporar Map sólo si existe búsqueda por clave

Ejemplo conceptual:

```java
Map<String, Mascota> mascotasPorId = new HashMap<>();
```

Esto tiene sentido si el sistema consulta reiteradamente una mascota mediante un identificador.

No tiene sentido crear un `Map` sólo para marcar el contenido semanal como completado.

## Paso 3 · Revisar consistencia

Si el mismo objeto se mantiene simultáneamente en una `List` y un `Map`, aparece una responsabilidad nueva:

> ambas estructuras deben permanecer sincronizadas.

Antes de hacerlo, preguntar si realmente necesitamos ambas.

Una alternativa puede ser elegir una sola estructura como fuente principal según la necesidad predominante.

## Paso 4 · equals() y hashCode()

Sólo si objetos propios participan en un `HashSet` o se usan como claves, definir igualdad lógica coherente.

Preguntas previas:

- ¿qué atributo identifica realmente al objeto?;
- ¿es estable?;
- ¿dos instancias con el mismo identificador representan la misma entidad?;
- ¿podría cambiar ese atributo después de insertar el objeto?

## Trabajo esperado

El estudiante debe implementar al menos **una necesidad nueva** de Semana 08:

### Opción A · Unicidad con Set

- definir qué valor no debe repetirse;
- registrar valores;
- detectar duplicados mediante el resultado de `add`;
- consultar y eliminar cuando corresponda.

### Opción B · Búsqueda por clave con Map

- definir clave y valor;
- registrar pares;
- buscar mediante clave;
- manejar clave inexistente;
- actualizar o eliminar cuando corresponda.

### Opción C · Integración justificada

Utilizar `List + Set`, `List + Map` o las tres estructuras sólo si cada una responde a una pregunta de negocio distinta.

## Checkpoint final de Semana 08

PetCare debe ser:

- compilable;
- ejecutable;
- incremental respecto de Semana 07;
- coherente en responsabilidades;
- capaz de justificar cada colección;
- libre de estructuras agregadas artificialmente.

Ver también: [Modelo y checkpoint](./MODELO-Y-CHECKPOINT.md).

## Evidencia esperada

- requerimiento que motive la nueva colección;
- implementación funcional;
- caso válido;
- caso duplicado o clave inexistente según corresponda;
- explicación de por qué `List`, `Set` o `Map` fue elegida;
- si existe `equals/hashCode`, explicación de la identidad utilizada;
- DevLog con la decisión tomada y alternativa descartada.

## Fuera de alcance

- Streams y lambdas como requisito;
- JavaFX;
- FXML;
- JSON;
- JDBC;
- bases de datos;
- frameworks.
