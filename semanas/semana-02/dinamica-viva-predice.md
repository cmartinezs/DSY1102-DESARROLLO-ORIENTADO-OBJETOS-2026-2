# Dinámica viva · Predice antes de ejecutar

**Duración sugerida:** 5–10 minutos  
**Objetivo:** entrenar lectura de código y razonamiento antes de depender del botón Run.

No se responde mirando la salida primero. Cada estudiante anota su predicción y luego ejecuta.

## Caso 1 · Operadores y condición

```java
int edad = 18;
boolean tienePermiso = false;

if (edad >= 18 && tienePermiso) {
    System.out.println("Puede ingresar");
} else {
    System.out.println("No puede ingresar");
}
```

Antes de ejecutar:

1. ¿qué imprime?;
2. ¿qué parte de la condición decide el resultado?;
3. cambia solo una variable para invertir la salida.

## Caso 2 · Ciclo

```java
int total = 0;

for (int i = 1; i <= 4; i++) {
    total += i;
}

System.out.println(total);
```

Antes de ejecutar:

1. ¿cuál será el valor final de `total`?;
2. escribe el valor de `total` después de cada vuelta;
3. ¿qué cambia si el ciclo parte en `0`?

## Caso 3 · Método

```java
static int calcular(int valor) {
    return valor * 2;
}

public static void main(String[] args) {
    int numero = 5;
    int resultado = calcular(numero + 1);
    System.out.println(resultado);
}
```

Antes de ejecutar:

1. ¿qué valor recibe realmente `calcular`?;
2. ¿qué devuelve?;
3. ¿qué imprime el programa?;

## Cierre rápido

No basta con acertar la salida. Debes poder explicar **cómo recorrió el programa cada instrucción**.

El docente puede tomar uno de los casos y modificar un solo operador, límite o argumento para repetir la dinámica sin agregar contenido nuevo.
