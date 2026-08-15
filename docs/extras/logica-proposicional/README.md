# 🧩 Lógica proposicional para programar

> **Objetivo:** aprender a construir y leer condiciones booleanas antes de preocuparse por escribirlas en Java.

## Proposición

Una proposición es una afirmación que puede evaluarse como **verdadera** o **falsa**.

Ejemplos:

- `edad >= 18`
- `nota >= 4.0`
- `velocidad == 0`
- `encendido == true`

En Java el resultado de estas expresiones es un `boolean`: `true` o `false`.

## Operadores relacionales

| Operador | Significado |
|---|---|
| `==` | igual a |
| `!=` | distinto de |
| `>` | mayor que |
| `<` | menor que |
| `>=` | mayor o igual que |
| `<=` | menor o igual que |

Ejemplo:

```java
int edad = 20;
boolean esMayorDeEdad = edad >= 18;
```

## Operadores lógicos

### AND — `&&`

Ambas condiciones deben ser verdaderas.

```java
if (edad >= 18 && tieneLicencia) {
    System.out.println("Puede conducir");
}
```

### OR — `||`

Basta con que una condición sea verdadera.

```java
if (esSabado || esDomingo) {
    System.out.println("Fin de semana");
}
```

### NOT — `!`

Invierte el valor lógico.

```java
if (!encendido) {
    System.out.println("El auto está apagado");
}
```

## Tablas de verdad esenciales

### AND

| A | B | A && B |
|---|---|---|
| false | false | false |
| false | true | false |
| true | false | false |
| true | true | true |

### OR

| A | B | A \|\| B |
|---|---|---|
| false | false | false |
| false | true | true |
| true | false | true |
| true | true | true |

## Agrupar condiciones

Los paréntesis ayudan a expresar la intención:

```java
boolean puedeIngresar = edad >= 18 && (tieneEntrada || esInvitado);
```

No intentes resolver condiciones largas sólo mirando símbolos. Tradúcelas primero a una frase.

## Negar correctamente

Si una condición dice:

```text
edad >= 18 Y tieneLicencia
```

su negación no es simplemente cambiar un operador al azar. Según las leyes de De Morgan:

```text
NO (A Y B) = NO A O NO B
NO (A O B) = NO A Y NO B
```

En Java:

```java
!(edad >= 18 && tieneLicencia)
```

equivale conceptualmente a:

```java
edad < 18 || !tieneLicencia
```

## Errores frecuentes

### Confundir `=` con `==`

`=` asigna. `==` compara valores primitivos.

### Escribir rangos como en matemáticas

Esto no es Java válido:

```java
18 <= edad <= 65
```

Se escribe:

```java
edad >= 18 && edad <= 65
```

### Condiciones imposibles

```java
nota < 1 && nota > 7
```

Un mismo valor no puede cumplir ambas condiciones simultáneamente.

## Método recomendado

Antes del `if`:

1. escribe la regla en lenguaje natural;
2. identifica cada proposición simple;
3. decide si deben cumplirse todas (`&&`) o basta alguna (`||`);
4. revisa negaciones;
5. prueba casos límite.

La lógica proposicional no es un tema separado de programar: es la base de cualquier decisión que tome tu código.