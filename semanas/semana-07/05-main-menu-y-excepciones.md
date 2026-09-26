# 05 · Main, menú y manejo de excepciones

## Responsabilidad de Main

Main se encarga de la interacción:

- mostrar opciones;
- leer datos;
- convertir entradas;
- capturar errores;
- invocar operaciones de MediaHub.

## Menú objetivo

```text
=== BIBLIOTECA MEDIAHUB ===
1. Registrar libro físico
2. Registrar película
3. Registrar ebook
4. Registrar audiolibro
5. Listar recursos
6. Buscar recurso
7. Mostrar políticas de préstamo
8. Prestar recurso
9. Devolver recurso
10. Descargar recurso
0. Salir
```

## Errores que debemos controlar

- opción no numérica;
- código vacío;
- código duplicado;
- recurso inexistente;
- intento de prestar un recurso no disponible;
- intento de devolver uno ya disponible;
- intentar descargar un recurso físico.

## Polimorfismo e instanceof

No usamos `instanceof` para decidir los días de préstamo:

```java
recurso.obtenerDiasPrestamo();
```

Sí puede tener sentido consultar una capacidad opcional:

```java
if (recurso instanceof Descargable) {
    // cumple ese contrato
}
```

## Avance consolidado esperado

- existe `Main.java`;
- el menú es funcional;
- las operaciones delegan en MediaHub;
- los errores no terminan abruptamente la aplicación;
- el flujo vuelve al menú.

➡️ [Siguiente: integración final](./06-integracion-y-prueba-final.md)
