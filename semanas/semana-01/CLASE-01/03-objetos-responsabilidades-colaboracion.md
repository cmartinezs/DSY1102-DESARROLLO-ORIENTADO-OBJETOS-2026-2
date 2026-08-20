# Objetos, responsabilidades y colaboración

Un objeto representa un concepto relevante del problema. Puede ser tangible o intangible.

Ejemplos tangibles:

```text
Auto
Motor
Mascota
Producto
```

Ejemplos intangibles:

```text
Reserva
Venta
Inscripción
Autorización
```

## Estado y comportamiento

Un objeto suele tener dos dimensiones importantes:

### Estado

Datos que describen su situación actual.

```text
Mascota
- nombre
- edad
- peso
```

### Comportamiento

Operaciones que tienen sentido para ese objeto.

```text
Mascota
- actualizarPeso()
- cumplirAnios()
- mostrarFicha()
```

## Responsabilidad

Una responsabilidad responde a preguntas como:

> ¿qué debería saber este objeto?

> ¿qué debería ser capaz de hacer?

No se trata de poner todo dentro de una clase. Se trata de asignar comportamientos al concepto que tenga más sentido.

## Colaboración

Una aplicación real normalmente necesita varios objetos colaborando.

Por ejemplo:

```text
Cliente
   ↓ solicita
Reserva
   ↓ consulta
Disponibilidad
   ↓ confirma
Agenda
```

Ninguno necesita hacerlo todo.

## El ejemplo del automóvil

Cuando giramos la llave o presionamos el botón de encendido, el automóvil no ejecuta una única instrucción gigante.

Distintos componentes participan:

```text
Sistema de encendido
→ batería
→ motor
→ transmisión
→ ruedas
```

En software ocurre algo parecido: una solución orientada a objetos se construye mediante **objetos con responsabilidades claras que colaboran para producir un resultado**.

## Pregunta de diseño

Cuando un método comienza a crecer demasiado, conviene preguntar:

> ¿Esta responsabilidad realmente pertenece a este objeto o existe otro concepto que debería asumirla?
