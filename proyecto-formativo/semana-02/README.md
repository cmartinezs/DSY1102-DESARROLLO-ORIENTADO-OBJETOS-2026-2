# PetCare · Semana 02

**Periodo:** 17 al 22 de agosto de 2026  
**Sección:** DSY1102-012V

Esta semana PetCare deja de ser solo una idea y comienza como proyecto individual acumulativo.

## Punto de partida

Por el feriado del sábado 15 todavía debemos recuperar parte de Java básico antes de entrar de lleno en métodos, clases y encapsulamiento.

Por eso PetCare crecerá en dos sesiones reales.

---

# Clase 1 · Martes 18

➡️ [01-clase-martes.md](./01-clase-martes.md)

Ruta:

```text
variables de una mascota
→ operadores
→ decisiones
→ ciclos
→ detectar repetición
→ primer método si el tiempo permite
```

### Salida esperada

Un programa CLI simple que trabaja con datos definidos directamente en código y deja preparada la necesidad de extraer comportamiento.

---

# Clase 2 · Sábado 22

➡️ [02-clase-sabado.md](./02-clase-sabado.md)

Ruta:

```text
checkpoint martes
→ métodos
→ datos relacionados
→ Mascota
→ objetos
→ private
→ comportamiento protegido
→ separación CLI / core
```

### Salida esperada

```text
cl.duoc.petcare.cli.App
        ↓
cl.duoc.petcare.core.model.Mascota
```

No se pretende enseñar arquitectura avanzada. La separación solo hace visible una idea sencilla:

> La mascota no debería depender de cómo el usuario conversa con el programa.

---

# Trabajo individual

Cada estudiante debe mantener su propia versión.

Recomendado:

```text
commit al cerrar martes
commit al cerrar sábado
```

Los mensajes deberían expresar el incremento realizado, por ejemplo:

```text
feat: agregar decisiones y ciclos a petcare
feat: modelar mascota y encapsular peso
```

## Evidencia de Semana 02

El alumno debe poder mostrar:

- código ejecutable;
- historial progresivo;
- evolución desde variables a objeto;
- explicación de una regla encapsulada;
- diferencia entre código de consola y modelo de dominio al cierre de la semana.

## No agregar todavía

- `ArrayList<Mascota>`;
- `Perro` / `Gato` por herencia;
- excepciones propias;
- JavaFX;
- JDBC;
- persistencia.

Esas necesidades aparecerán cuando corresponda en el plan.
