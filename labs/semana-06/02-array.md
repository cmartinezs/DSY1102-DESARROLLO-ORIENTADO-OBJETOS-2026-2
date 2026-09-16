# Etapa 2 · Primera solución con `Animal[]`

## Propósito

Resolver primero la necesidad de almacenar varios animales con la herramienta más simple disponible: un array de objetos.

## Antes de implementar

Recuerda la forma mínima de un array de objetos:

```java
Animal[] animales = new Animal[4];

animales[0] = new Perro(/* datos */);
animales[1] = new Gato(/* datos */);

for (Animal animal : animales) {
    if (animal != null) {
        animal.mostrarInformacion();
    }
}
```

Este fragmento **no es la solución completa**. Sólo recuerda la sintaxis que ya practicaste en `semanas/` y `ejemplos/`. Debes decidir dónde vive el array y qué clase asume la responsabilidad de administrarlo.

## Qué debes hacer

1. Documenta en `docs/veterinaria-ii/01-array.md` qué necesita almacenar la veterinaria.
2. Implementa una primera versión con `Animal[]`.
3. Registra al menos cuatro animales de dos subtipos distintos.
4. Recorre el array invocando comportamiento polimórfico.
5. Mantén `main` como coordinador; no concentres allí toda la lógica.
6. Comprueba qué ocurre con posiciones todavía no ocupadas.

## Archivos esperados

Como referencia de estructura, al terminar esta etapa deberían existir o haberse actualizado archivos equivalentes a:

```text
src/
├── Animal.java
├── Perro.java
├── Gato.java
├── Veterinaria.java
└── Main.java
```

No es obligatorio usar exactamente esos nombres si tu diseño ya posee equivalentes.

## Entregables

- `docs/veterinaria-ii/01-array.md`;
- una primera evolución de `src/Veterinaria.java` o la clase de servicio equivalente;
- ejecución con al menos cuatro objetos.

## Commits sugeridos

```text
LAB-VET2-01: diseña almacenamiento inicial con array
LAB-VET2-02: implementa gestion inicial con Animal array
```

## Checkpoint

Debes poder explicar:

- por qué un `Animal[]` puede contener objetos `Perro`, `Gato`, `Tigre` o `Leon`;
- por qué el comportamiento sobrescrito sigue siendo polimórfico;
- qué limitación introduce el tamaño fijo;
- qué clase es responsable de administrar el conjunto.
