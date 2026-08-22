# Ejemplos · Semana 02

Ejemplos para acompañar **métodos, clases y encapsulamiento** antes de aplicar los conceptos al proyecto formativo PetCare.

## Regla de uso

PetCare no debe ser el único contexto de enseñanza. La secuencia recomendada es:

```text
ejemplo mínimo aislado
        ↓
ejemplo en otro contexto
        ↓
concepto entendido
        ↓
aplicación en PetCare
```

Esto permite comprobar que los conceptos pertenecen a Java/POO y no al dominio veterinario.

## Orden sugerido para la clase del sábado 22

1. [`01-MetodoSimple.java`](01-MetodoSimple.java) — primer método `void`, sin parámetros. Sirve para entender que un método existe y debe ser invocado.
2. [`02-MetodosParametrosRetorno.java`](02-MetodosParametrosRetorno.java) — parámetros, argumentos y retorno usando ejemplos genéricos (`mostrarNombre`, `sumar`, `esMayorDeEdad`).
3. [`03-ProductoBasico.java`](03-ProductoBasico.java) — primera clase y dos objetos en un dominio distinto de PetCare, todavía sin encapsulamiento.
4. [`ProductoDemo.java`](ProductoDemo.java) — evolución opcional de `Producto`: constructor, `private` y comportamiento que protege stock. Usar sólo si el ritmo de la clase lo permite.
5. [`PetCareBasico.java`](PetCareBasico.java) — referencia de cómo los mismos conceptos se aplican al proyecto transversal; **no utilizar como primer ejemplo de métodos**.

## Qué demuestra cada ejemplo

### `01-MetodoSimple.java`

```text
main
→ llamada
→ método
```

Pregunta central:

> ¿El método se ejecuta sólo por existir?

### `02-MetodosParametrosRetorno.java`

```text
parámetro
↔ argumento

void
↔ valor de retorno
```

La intención es usar operaciones familiares y pequeñas antes de introducir un dominio mayor.

### `03-ProductoBasico.java`

```text
Producto → clase
producto1 / producto2 → objetos
```

Permite demostrar que dos objetos del mismo tipo comparten estructura pero mantienen estados distintos.

### `ProductoDemo.java`

Introduce, si corresponde:

```text
constructor
private
comportamiento que protege estado
```

No es obligatorio alcanzarlo hoy.

## PetCare

PetCare se inicia formalmente después de estos ejemplos y funciona como **aplicación integradora**, no como sustituto de los ejemplos aislados.

➡️ [Inicio formal de PetCare](../../proyecto-formativo/semana-02/00-inicio-petcare.md)

## Alcance

Todavía no corresponde introducir:

- `Scanner`;
- arrays o colecciones;
- herencia;
- interfaces;
- excepciones;
- JavaFX;
- persistencia.

> Esta carpeta `examples/semana-02/` es la ubicación canónica de ejemplos reutilizables de la semana.