# Etapa 7 · Aplicar `throw`, `try` y `catch`

## Propósito

Implementar manejo explícito de situaciones inválidas sin esconder errores ni capturar excepciones indiscriminadamente.

## Qué debes hacer

1. Elige al menos una situación del catálogo de errores que deba provocar una excepción.
2. Crea una excepción específica si corresponde, por ejemplo `AnimalNoEncontradoException`.
3. Lanza la excepción desde la operación responsable usando `throw`.
4. Captúrala con `try/catch` en el nivel donde exista contexto para informar o decidir qué hacer.
5. Evita `catch (Exception)` salvo que puedas justificarlo técnicamente.
6. Ejecuta un caso válido y uno inválido controlado.

## Entregables

- clase de excepción específica si tu diseño la requiere;
- modificaciones en `Veterinaria.java` o clase equivalente;
- integración desde `Main.java` u otro punto de entrada;
- `evidencias/veterinaria-ii/02-excepciones.txt`.

## Commits sugeridos

```text
LAB-VET2-09: incorpora excepciones de dominio
LAB-VET2-10: registra evidencia de manejo de excepciones
```

## Checkpoint

Debes poder explicar quién detecta la condición inválida, quién lanza la excepción y quién tiene el contexto adecuado para capturarla.
