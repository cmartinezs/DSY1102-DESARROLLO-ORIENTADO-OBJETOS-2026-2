# 04 · List y polimorfismo

Ahora necesitamos administrar múltiples recursos.

## Clase responsable

```text
MediaHub
└── List<Recurso>
```

La lista usa el tipo padre:

```java
List<Recurso> recursos = new ArrayList<>();
```

y puede contener cualquier subtipo.

## Operación polimórfica

```java
for (Recurso recurso : recursos) {
    System.out.println(recurso.obtenerDiasPrestamo());
}
```

Cada objeto responde con su propia política sin preguntar manualmente su tipo.

## Operaciones esperadas

`MediaHub` debe poder:

- agregar recursos;
- listar;
- buscar por código;
- prestar;
- devolver;
- mostrar políticas de préstamo;
- descargar cuando el recurso cumpla el contrato.

## Conocimiento que debes adquirir

Debes poder explicar:

- por qué usamos `List<Recurso>`;
- cómo se almacenan distintos subtipos juntos;
- cómo aparece el polimorfismo;
- por qué estas operaciones pertenecen a MediaHub y no a Main.

## Avance consolidado esperado

Debe existir `MediaHub.java` con su `List<Recurso>` y operaciones básicas de administración.

➡️ [Siguiente: Main, menú y excepciones](./05-main-menu-y-excepciones.md)
