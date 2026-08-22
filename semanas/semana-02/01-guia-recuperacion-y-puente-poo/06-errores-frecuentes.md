# Errores frecuentes en el puente hacia POO

## 1. Crear una clase solo para guardar variables

Agrupar datos es un primer paso, pero una clase debería representar un concepto con significado y, cuando corresponda, asumir comportamientos propios.

## 2. Convertir todos los métodos en getters y setters

POO no consiste en generar acceso mecánico a todos los atributos. Pregunta qué operaciones válidas debería ofrecer el objeto.

## 3. Dejar toda la lógica en `main`

Si `main` conoce todos los detalles de todos los conceptos, los objetos terminan siendo contenedores pasivos de datos.

## 4. Confundir clase con objeto

```text
Producto → clase
Teclado  → objeto/instancia
```

## 5. Pensar que `private` por sí solo resuelve el encapsulamiento

`private` limita acceso directo, pero el verdadero objetivo es controlar el estado y preservar reglas válidas.

## 6. Crear métodos sin una responsabilidad clara

Un método debería representar una operación con propósito. Evita fragmentar código arbitrariamente solo para “tener métodos”.

## 7. Saltarse fundamentos para llegar rápido a POO

Si todavía cuesta leer un `if`, un ciclo, parámetros o `return`, agregar clases no elimina esa dificultad: la acumula.

## Señal de progreso

Deberías poder explicar la evolución:

```text
¿Por qué agrupé estos datos?
¿Por qué este comportamiento pertenece a esta clase?
¿Por qué protejo este atributo?
¿Por qué esta regla no debería quedar en main?
```

Si puedes justificar esas decisiones, estás aprendiendo diseño, no solo sintaxis.
