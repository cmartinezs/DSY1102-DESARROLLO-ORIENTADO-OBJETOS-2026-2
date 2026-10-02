# PetCare · Semana 06 · Colecciones y excepciones

**Periodo:** 14 al 19 de septiembre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare posee una jerarquía funcional y comportamiento polimórfico.

## Problema que motiva el incremento

El sistema necesita administrar una cantidad variable de mascotas y comunicar situaciones inválidas de forma explícita.

## Objetivo

Transitar desde arrays hacia `List / ArrayList`, separar operaciones sobre conjuntos de objetos y manejar errores mediante excepciones.

## Conceptos nuevos aplicados

- arrays de objetos;
- tamaño fijo;
- `List` y `ArrayList`;
- alta, recorrido, búsqueda y eliminación;
- `throw`;
- `try/catch`;
- excepción específica cuando corresponda.

## Secuencia de trabajo

1. observar la limitación de un array;
2. [revisar implementación de referencia](./IMPLEMENTACION-DE-REFERENCIA.md);
3. migrar a colección dinámica;
4. extraer coordinación a un servicio si mejora responsabilidades;
5. modelar una condición inválida;
6. [verificar modelo y checkpoint](./MODELO-Y-CHECKPOINT.md).

## Trabajo esperado

- demostrar por qué el array queda corto;
- administrar `List<Mascota>`;
- registrar, recorrer y buscar;
- incorporar eliminación o modificación;
- lanzar una excepción significativa;
- capturarla donde exista una respuesta útil.

## Evidencia esperada

- lista funcional;
- búsqueda exitosa;
- caso fallido controlado;
- separación razonable de `main`;
- DevLog sobre detección, lanzamiento y captura.

## Commits sugeridos

```text
feat: administrar mascotas con lista
refactor: extraer operaciones de petcare
feat: manejar mascota no encontrada
```

## Fuera de alcance

- `Set`;
- `Map`;
- Streams;
- lambdas;
- JavaFX;
- persistencia.

## Checkpoint de salida

PetCare administra múltiples objetos mediante una colección dinámica y comunica errores sin esconderlos.

➡️ [Ver checkpoint esperado](./MODELO-Y-CHECKPOINT.md)
