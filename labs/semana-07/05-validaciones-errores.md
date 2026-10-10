# Etapa 05 · Mantener errores y estado válido

## Objetivo
Conservar las validaciones de Veterinaria II al introducir la nueva capacidad.

## Casos a trabajar
1. Registrar un animal válido y listarlo.
2. Intentar registrar un identificador repetido; controlar el error según tu regla actual.
3. Intentar registrar vacuna vacía a un animal que cumple `Vacunable`.
4. Intentar vacunar un animal de un tipo que **no** ofrece el servicio en este escenario.
5. Solicitar un identificador que no existe.

## Ubicación de responsabilidades
- El **modelo** rechaza estados o parámetros inválidos que le corresponden.
- El **servicio** coordina colección y valida operaciones entre objetos.
- La **CLI** captura el error cuando puede ofrecer feedback útil.
- No uses `catch (Exception e) {}` para ocultar defectos.

## Ejemplo de frontera
```java
try {
    // invocar una operación del servicio o modelo
} catch (IllegalArgumentException ex) {
    System.out.println("No se pudo completar: " + ex.getMessage());
}
```

## Evidencia
Crea `evidencias/veterinaria-iii/02-casos-invalidos.txt`: entrada, resultado esperado, resultado observado y corrección si hubo fallo.

## Checkpoint
- [ ] El programa continúa ejecutándose tras un error controlado.
- [ ] El error no deja un registro parcial incompatible con reglas previas.
- [ ] No duplicaste validaciones de negocio entre CLI y modelo.

**Commit sugerido:** `test: verificar errores en capacidades`.
