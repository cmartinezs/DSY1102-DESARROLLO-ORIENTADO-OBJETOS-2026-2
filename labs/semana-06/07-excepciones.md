# Etapa 7 · Aplicar `throw`, `try` y `catch`

## Propósito

Implementar manejo explícito de situaciones inválidas sin esconder errores ni capturar excepciones indiscriminadamente.

## Antes de implementar

Separa dos responsabilidades:

```java
public Animal buscarPorId(int id) {
    // buscar...
    throw new AnimalNoEncontradoException("No existe animal con id " + id);
}
```

Y en un nivel que sí puede informar al usuario:

```java
try {
    Animal animal = veterinaria.buscarPorId(99);
    animal.mostrarInformacion();
} catch (AnimalNoEncontradoException e) {
    System.out.println(e.getMessage());
}
```

La operación responsable detecta y lanza. El coordinador captura porque posee contexto para decidir qué mostrar o qué hacer.

## Excepción específica de referencia

```java
public class AnimalNoEncontradoException extends RuntimeException {
    public AnimalNoEncontradoException(String mensaje) {
        super(mensaje);
    }
}
```

La excepción específica es apropiada cuando el caso inválido tiene significado propio en el dominio. No es obligatorio crear clases de excepción para cualquier validación trivial.

## Qué debes hacer

1. Elige al menos una situación del catálogo de errores que deba provocar una excepción.
2. Crea una excepción específica si corresponde, por ejemplo `AnimalNoEncontradoException`.
3. Lanza la excepción desde la operación responsable usando `throw`.
4. Captúrala con `try/catch` en el nivel donde exista contexto para informar o decidir qué hacer.
5. Evita `catch (Exception)` salvo que puedas justificarlo técnicamente.
6. Ejecuta un caso válido y uno inválido controlado.
7. Comprueba que el programa no usa la excepción como reemplazo de una condición normal de flujo.

## Archivos esperados

```text
src/
├── AnimalNoEncontradoException.java   # si el diseño lo justifica
├── Veterinaria.java                   # detecta y lanza
└── Main.java                          # coordina y captura
```

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

Debes poder explicar quién detecta la condición inválida, quién lanza la excepción, quién tiene el contexto adecuado para capturarla y por qué se captura una excepción específica en vez de `Exception`.
