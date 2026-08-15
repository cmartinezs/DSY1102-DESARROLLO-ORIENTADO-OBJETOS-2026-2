# 💡 Tips de programación — aprender a pensar antes de programar

> **Objetivo:** transformar un enunciado en pasos comprensibles antes de escribir Java.

La sintaxis no resuelve el problema por ti. Antes de abrir el IDE, acostúmbrate a responder cuatro preguntas:

1. **¿Qué tengo?** Datos conocidos.
2. **¿Qué necesito obtener?** Resultado esperado.
3. **¿Qué reglas existen?** Condiciones, restricciones y casos límite.
4. **¿Qué pasos transforman lo primero en lo segundo?** Algoritmo.

## Técnica: ejemplo concreto antes del código

Problema: calcular si un estudiante aprueba según su promedio.

Antes de Java:

```text
Tengo: tres notas.
Necesito: promedio y estado final.
Regla: aprueba si promedio >= 4.0.
Pasos:
1. sumar las notas;
2. dividir por 3;
3. comparar con 4.0;
4. informar resultado.
```

Sólo después:

```java
double promedio = (nota1 + nota2 + nota3) / 3.0;

if (promedio >= 4.0) {
    System.out.println("Aprobado");
}
```

## Patrones que conviene reconocer

### Decidir

Pregunta: ¿ocurre A o B?

Herramienta típica: `if` / `else`.

### Repetir

Pregunta: ¿qué acción debe ejecutarse varias veces?

Herramienta típica: `for` o `while`.

### Contar

```java
contador++;
```

### Acumular

```java
total += valor;
```

### Validar

No proceses un dato sin revisar primero las reglas que debe cumplir.

### Dividir un problema

Si un bloque hace demasiadas cosas, identifica acciones con nombre y conviértelas progresivamente en métodos.

## De datos a objetos

Cuando comiences POO, añade otras preguntas:

1. ¿Qué conceptos del problema deberían ser objetos?
2. ¿Qué estado necesita cada uno?
3. ¿Qué comportamiento le corresponde?
4. ¿Quién debería ser responsable de cada regla?
5. ¿Qué objetos necesitan colaborar?

Ejemplo:

```text
Problema: una cuenta recibe depósitos.

Objeto: Cuenta
Estado: saldo
Comportamiento: depositar(monto), consultarSaldo()
Regla: no aceptar depósitos negativos.
```

La regla debería vivir cerca del objeto responsable de mantener el saldo.

## Errores frecuentes al aprender

- escribir código antes de entender el enunciado;
- cambiar muchas cosas a la vez cuando aparece un error;
- copiar una solución que usa conceptos que aún no sabes explicar;
- usar nombres sin significado (`a`, `b`, `x1`) cuando el dominio permite nombres mejores;
- resolver todo dentro de `main` incluso cuando ya existen responsabilidades claras;
- confundir "funciona una vez" con "está correctamente resuelto";
- probar sólo el caso feliz.

## Prueba casos pequeños

Para cualquier solución considera al menos:

- caso normal;
- valor mínimo válido;
- valor máximo válido, si existe;
- valores justo antes y después de un límite;
- dato inválido si el problema lo contempla.

## Explica tu código

Si no puedes explicar con tus palabras por qué existe una línea o un bloque, todavía no lo dominas. El objetivo de una actividad no es producir muchas líneas: es que puedas justificar la solución.

## Qué se retiró de la versión Fullstack

El material original progresaba desde consola hasta Streams y APIs REST con Spring Boot. Esta adaptación conserva únicamente estrategias compatibles con programación inicial y POO. REST, endpoints, configuración backend, Streams y técnicas avanzadas se dejan para cursos posteriores.