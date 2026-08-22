# PetCare · Incremento Semana 02

**Periodo:** 17 al 22 de agosto de 2026  
**Sección:** DSY1102-012V

Esta carpeta pertenece exclusivamente al **proyecto formativo transversal PetCare**.

No contiene la teoría, los ejemplos ni los ejercicios de Semana 02. Ese material vive en `semanas/semana-02/` y en las áreas generales de práctica del curso.

Aquí sólo se define qué debe avanzar individualmente cada estudiante en PetCare a partir de lo aprendido durante la semana.

---

# Objetivo del incremento

Iniciar PetCare y aplicar de forma autónoma los conceptos de Semana 02 que hayan sido efectivamente trabajados.

➡️ [Inicio de PetCare](./00-inicio-petcare.md)

---

# Consigna individual

## 1. Crear el proyecto

Crear un proyecto Java ejecutable llamado `petcare` dentro del repositorio individual de la asignatura.

Debe existir una primera versión mínima, funcional y explicable por el estudiante.

## 2. Incorporar comportamiento mediante métodos

Agregar al menos un método útil al programa.

El estudiante debe poder explicar:

- qué operación representa;
- qué datos necesita recibir;
- qué argumentos utiliza al llamarlo;
- si retorna o no un valor;
- por qué tomó esa decisión.

## 3. Modelar `Mascota`

Cuando clases y objetos ya hayan sido abordados en el contenido semanal:

- crear una clase `Mascota`;
- elegir los atributos que sean relevantes en esta primera versión;
- crear al menos dos objetos con estados distintos.

No se entrega una solución oficial para copiar.

## 4. Proteger una regla de estado

Si encapsulamiento ya fue trabajado:

- identificar un dato que no debería aceptar cualquier valor;
- impedir su modificación irrestricta;
- crear una operación que controle el cambio;
- demostrar al menos un caso válido y uno inválido.

Ejemplo de problema para razonar:

> un peso no debería aceptar valores negativos.

El estudiante puede elegir otra regla si puede justificarla.

---

# Evidencia esperada

El repositorio individual debe mostrar:

- PetCare ejecutable;
- código propio y explicable;
- al menos un método con propósito;
- clase y objetos si ese contenido ya fue alcanzado;
- encapsulamiento si ya fue alcanzado;
- historial Git progresivo;
- ausencia de una solución completa agregada de una sola vez al final.

---

# Commits

No existe una cuota de commits por clase.

Los commits deben representar incrementos reales, por ejemplo:

```text
feat: iniciar petcare
feat: agregar comportamiento inicial
feat: modelar mascota
feat: proteger regla de peso
```

Los mensajes son ejemplos, no una secuencia obligatoria.

---

# No corresponde todavía

No agregar por iniciativa propia:

- colecciones;
- herencia `Perro` / `Gato`;
- interfaces;
- excepciones propias;
- JavaFX;
- JDBC;
- persistencia;
- frameworks.

---

# Checkpoint Semana 02

El checkpoint se determina por el contenido realmente alcanzado durante la semana.

Como mínimo debe existir un PetCare iniciado y ejecutable.

A medida que el estudiante haya aprendido los contenidos correspondientes, el proyecto debe evolucionar hacia:

```text
PetCare
→ métodos
→ Mascota
→ objetos
→ primera regla protegida
```

La siguiente semana continúa desde este checkpoint; PetCare no se reinicia.
