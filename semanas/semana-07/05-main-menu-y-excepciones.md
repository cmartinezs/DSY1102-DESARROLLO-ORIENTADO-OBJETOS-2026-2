# 05 · Main, menú, LecturaEntrada y manejo de excepciones

## Una responsabilidad nueva: LecturaEntrada

Hasta ahora Main estaba leyendo directamente desde `Scanner`.

Eso mezcla dos responsabilidades:

```text
Main
├── coordinar el menú
└── preocuparse de cómo leer y validar cada dato
```

Lo mejoramos creando:

```text
LecturaEntrada
└── Scanner
```

Esta clase se hace responsable de:

- leer texto;
- impedir valores vacíos;
- leer enteros;
- volver a solicitar cuando el usuario escribe texto donde se espera un número;
- validar rangos simples;
- cerrar Scanner al terminar.

Ejemplos de uso:

```java
int opcion = entrada.leerEnteroEnRango(
        "Seleccione una opción: ",
        0,
        10
);
```

```java
String codigo = entrada.leerTextoNoVacio("Código: ");
```

## Responsabilidad de Main

Con esta separación, Main se concentra en:

- mostrar opciones;
- decidir qué operación ejecutar;
- capturar errores provenientes del dominio;
- coordinar `LecturaEntrada` y `MediaHub`.

Main ya no necesita conocer los detalles de Scanner.

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

## Dos tipos de errores

### Errores de entrada

Los controla `LecturaEntrada`:

- opción no numérica;
- opción fuera de rango;
- texto vacío.

### Errores del dominio

Los detectan las clases responsables y Main los informa:

- código duplicado;
- recurso inexistente;
- prestar un recurso no disponible;
- devolver uno ya disponible;
- descargar un recurso físico.

Esto permite separar:

```text
problema al LEER
→ LecturaEntrada

problema en la REGLA DE NEGOCIO
→ dominio / MediaHub
```

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

- existe `LecturaEntrada.java`;
- Scanner queda encapsulado dentro de esa clase;
- existe `Main.java`;
- el menú utiliza un `switch` clásico;
- una entrada no numérica vuelve a solicitarse;
- una opción fuera de 0 a 10 vuelve a solicitarse;
- las operaciones delegan en MediaHub;
- los errores de negocio no terminan abruptamente la aplicación.

➡️ [Siguiente: integración final](./06-integracion-y-prueba-final.md)
