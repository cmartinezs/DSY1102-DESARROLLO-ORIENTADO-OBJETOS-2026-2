# De `main` a objetos con responsabilidades

Al comenzar Java es normal concentrar casi todo dentro de `main`:

```java
public static void main(String[] args) {
    // variables
    // validaciones
    // impresiones
    // cálculos
}
```

Eso sirve para practicar fundamentos, pero comienza a generar problemas cuando el programa crece.

## Señales de que `main` está haciendo demasiado

- muchas variables representan conceptos distintos;
- aparecen bloques repetidos;
- `main` contiene reglas;
- varias validaciones operan sobre el mismo conjunto de datos;
- cuesta explicar qué responsabilidad tiene cada parte.

## Primera mejora: métodos

```text
main
├── mostrarResumen()
├── stockValido()
└── calcularDescuento()
```

Esto mejora legibilidad y reutilización.

## Siguiente mejora: objetos

Cuando identificamos que estado y comportamiento pertenecen a un concepto, parte de esa lógica puede migrar a la clase correspondiente:

```text
main
  ↓ coordina
Producto
├── estado
├── vender()
└── obtenerResumen()
```

## `main` no desaparece

El objetivo no es eliminarlo, sino reducir su responsabilidad.

Una idea útil es:

```text
main → coordina
objetos → conocen y ejecutan responsabilidades propias
```

## Pregunta útil

Si `main` necesita conocer demasiados detalles internos de un concepto, probablemente ese concepto todavía no está asumiendo suficiente responsabilidad.
