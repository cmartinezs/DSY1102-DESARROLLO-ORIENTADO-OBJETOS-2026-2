# Semana 2 · Métodos, clases y encapsulamiento

**Periodo:** 17 al 22 de agosto de 2026  
**Sección:** DSY1102-012V  
**Actividad institucional:** 1.2 Métodos, clases y encapsulamiento

← [Volver al índice](../README.md)

## Proyecto formativo transversal · PetCare

Desde esta semana se formaliza **PetCare como proyecto formativo individual de semestre**.

Cada estudiante mantendrá el mismo software y lo hará evolucionar clase a clase durante:

```text
Unidad 1 · Java/POO + CLI
        ↓
Unidad 2 · JavaFX/MVC + JSON
        ↓
Unidad 3 · JDBC/CRUD
```

La Unidad 1 debe dejar el core/dominio reutilizable y una CLI que lo invoque. La intención es que JavaFX y JDBC se incorporen después sin rehacer las reglas del negocio.

Material del proyecto:

- [PetCare · proyecto de semestre](../../proyecto-formativo/README.md)
- [Roadmap hasta fin de curso](../../proyecto-formativo/ROADMAP-SEMANAL.md)
- [Arquitectura y continuidad](../../proyecto-formativo/ARQUITECTURA-Y-CONTINUIDAD.md)
- [PetCare · Semana 02](../../proyecto-formativo/semana-02/README.md)
- [Clase martes 18](../../proyecto-formativo/semana-02/01-clase-martes.md)
- [Clase sábado 22](../../proyecto-formativo/semana-02/02-clase-sabado.md)

El proyecto podrá utilizarse como **evidencia formativa adicional para compensar una calificación baja**, bajo criterio docente y según proceso demostrado. No existe reemplazo automático de evaluaciones.

## Qué corresponde oficialmente esta semana

- **1.2.1** PPT Métodos.
- **1.2.2** PPT Clases y Abstracción.
- **1.2.3** PPT Encapsulamiento.
- **1.2.4** Guía Actividad Clases y Abstracción.
- **1.2.5** Ejercicios generales.

## Ejercicios de práctica

➡️ [4 ejercicios · fundamentos Java](./02-ejercicios-fundamentos-java.md)

Situaciones sencillas para practicar variables primitivas, operadores, `if`, `for`, `while`, `do while` e impresión por consola antes de avanzar con mayor profundidad en POO.

## Qué debemos recuperar de Semana 01

El feriado del sábado 15 eliminó 2 horas pedagógicas. Antes de exigir métodos/clases, todavía debemos reforzar explícitamente:

- tipos primitivos y `String`;
- variables y operadores;
- `if`/`else` y operadores lógicos;
- `switch` cuando sea pertinente;
- `for`, `while`, `do-while`;
- estructura mínima de un programa Java;
- ejercicios con datos definidos directamente en código.

**No se elimina ni se da por sabido este contenido.** Se recupera utilizando la primera versión de PetCare.

# Hoy · martes 18 · 20:31–22:30

Guía principal:

➡️ [PetCare · Clase martes](../../proyecto-formativo/semana-02/01-clase-martes.md)

## Bloque 1 · fundamentos Java sobre PetCare

Partir con:

```java
String nombre = "Michi";
int edad = 4;
double peso = 5.2;
boolean vacunado = true;
```

Reforzar:

- `class` + `main`;
- tipos y variables;
- operadores aritméticos;
- comparaciones;
- operadores lógicos.

## Bloque 2 · decisiones

- `if` / `else`;
- condiciones compuestas;
- clasificación sencilla;
- modificar valores y probar ambos caminos.

## Bloque 3 · ciclos + primer método si el ritmo permite

- `for`;
- `while` / `do-while` donde aporten;
- detectar repetición;
- primer método `mostrarFicha(...)` solo si ya existe comprensión suficiente.

### Últimos 15–30 minutos

Avance individual del proyecto utilizando la guía.

Si no alcanza el tiempo, el checkpoint se completa en casa antes del sábado.

### Checkpoint martes

Programa CLI con:

- datos de mascota;
- operadores;
- condición;
- ciclo;
- salida legible;
- método solo si fue alcanzado en clase.

No se sacrifica comprensión para llegar artificialmente a clases/encapsulamiento hoy.

# Sábado 22 · métodos, clases y encapsulamiento

Guía:

➡️ [PetCare · Clase sábado](../../proyecto-formativo/semana-02/02-clase-sabado.md)

Retomar exactamente el checkpoint del martes:

```text
métodos
→ parámetros y retorno
→ datos relacionados
→ clase Mascota
→ objetos
→ private
→ comportamiento protegido
→ cli / core.model
```

## Checkpoint semanal esperado

```text
src/
└── cl/duoc/petcare/
    ├── cli/
    │   └── App.java
    └── core/model/
        └── Mascota.java
```

Con:

- al menos dos instancias;
- atributos encapsulados;
- actualización de peso protegida por una regla;
- una operación desarrollada por el alumno;
- CLI utilizando `Mascota`.

**No agregar todavía** herencia, `Perro`, `Gato`, listas, excepciones, JavaFX ni persistencia.

## Regla pedagógica

Todavía **no usamos `Scanner`** como prioridad. El objetivo es reducir variables simultáneas mientras consolidan Java y POO.

Encapsulamiento tampoco significa “private + generar getters/setters”. El alumno debe explicar qué estado protege y qué estados inválidos evita.

## Evidencia

El alumno debe mantener:

- repositorio propio;
- commit/checkpoint del martes;
- commit/checkpoint del sábado;
- código ejecutable;
- capacidad de explicar decisiones y evolución.

## Material complementario existente

- [4 ejercicios · fundamentos Java](./02-ejercicios-fundamentos-java.md)
- [Ejemplo ejecutable · PetCare básico](./ejemplos/PetCareBasico.java)
- [Laboratorio incremental anterior · PetCare](./laboratorio-petcare/README.md)
- [Guía · recuperación + puente a POO](./01-guia-recuperacion-y-puente-poo.md)
- [Ejemplo complementario · Producto](./ejemplos/ProductoDemo.java)
- [Laboratorio complementario · Cuenta simple](./laboratorio-cuenta/README.md)

Estos recursos complementan el proyecto semestral; no reemplazan su continuidad.

## Material institucional

- [Biblioteca pública](https://drive.google.com/drive/folders/1FmQqQQ6nslfG1OZ8FFhkqgxpnEOkpHZk?usp=sharing)
- [Semana 02 en Drive](https://drive.google.com/drive/folders/1bDNTBmba5F--fULggNtShZucD9zTnE4F)
