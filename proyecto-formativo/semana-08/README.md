# PetCare · Semana 08 · Set, Map y cierre de EA1

**Periodo:** 28 de septiembre al 3 de octubre de 2026  
**Sección:** DSY1102-012V

## Punto de entrada

PetCare ya posee un modelo OO integrado, colección dinámica, abstracción, polimorfismo y manejo explícito de errores.

## Problema que motiva el incremento

No todas las colecciones expresan la misma intención: algunas reglas exigen unicidad y otras recuperación eficiente mediante una clave.

## Objetivo

Elegir e incorporar `Set` y/o `Map` cuando el requerimiento lo justifique, cerrando EA1 con criterio de diseño de colecciones.

## Conceptos nuevos aplicados

- `Set` / `HashSet`;
- unicidad;
- `Map` / `HashMap`;
- clave → valor;
- `equals()` y `hashCode()` cuando corresponda;
- comparación razonada entre `List`, `Set` y `Map`.

## Secuencia de trabajo

1. [Identificar la necesidad antes de elegir colección](./01-identificar-necesidad-coleccion.md)
2. [Aplicar Set cuando existe unicidad](./02-set-unicidad.md)
3. [Aplicar Map cuando existe búsqueda por clave](./03-map-clave-valor.md)
4. [Definir igualdad lógica cuando corresponda](./04-equals-hashcode.md)
5. [Integrar colecciones sin redundancia](./05-integracion-colecciones.md)
6. [Verificar y cerrar EA1](./06-verificacion-cierre.md)
7. [Consultar implementación de referencia](./IMPLEMENTACION-DE-REFERENCIA.md)
8. [Revisar modelo y checkpoint](./MODELO-Y-CHECKPOINT.md)

## Trabajo esperado

Implementar al menos una de estas necesidades:

- unicidad mediante `Set`;
- búsqueda por clave mediante `Map`;
- combinación justificada de estructuras.

No se exige utilizar las tres colecciones.

## Evidencia esperada

- requerimiento explícito;
- estructura elegida y justificación;
- caso válido;
- duplicado o clave inexistente;
- identidad lógica explicada si existe `equals/hashCode`;
- DevLog con alternativa descartada.

## Commits sugeridos

```text
feat: asegurar unicidad de identificadores
feat: indexar mascotas por identificador
refactor: simplificar estrategia de colecciones
```

## Fuera de alcance

- Streams y lambdas como requisito;
- JavaFX;
- FXML;
- JSON;
- JDBC;
- bases de datos;
- frameworks.

## Checkpoint de salida

PetCare cierra EA1 como una solución acumulativa donde cada técnica incorporada puede justificarse desde una necesidad concreta.

➡️ [Ver checkpoint esperado](./MODELO-Y-CHECKPOINT.md)
