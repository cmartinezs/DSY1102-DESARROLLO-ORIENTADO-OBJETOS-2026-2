# PetCare · Roadmap semanal del semestre

Este roadmap alinea el proyecto formativo con el contenido efectivamente trabajado en DSY1102.

> El avance real de la sección manda. Si una planificación previa contradice el material vigente del curso, se actualiza el roadmap y PetCare continúa desde el último checkpoint real.

---

# Semana 01 · Paradigma OO y fundamentos del lenguaje

## PetCare

Presentación del contexto. Variables, flujo básico y primeras decisiones de modelado según el contenido alcanzado. No se introduce arquitectura formal.

---

# Semana 02 · Fundamentos Java y métodos

## PetCare

Datos simples de una mascota en `main`, condicionales, ciclos y extracción gradual de comportamiento a métodos.

Checkpoint mínimo: aplicación ejecutable y código explicable.

---

# Semana 03 · De métodos a objetos y encapsulamiento

```text
métodos
→ clase Mascota
→ atributos
→ comportamiento
→ encapsulamiento
→ constructor como transición
```

Checkpoint:

```text
cli.App
    ↓
core.model.Mascota
```

---

# Semana 04 · Constructores, estado válido y colaboración simple

- constructor con parámetros;
- `this`;
- estado válido;
- getters/setters con criterio;
- operaciones de dominio;
- colaboración simple entre objetos;
- `Tutor` como extensión posible.

Checkpoint:

```text
cli.App
    ↓
Mascota ───> Tutor
```

---

# Semana 05 · Herencia y polimorfismo

## Necesidad

PetCare comienza a distinguir tipos de mascota que comparten datos, pero poseen comportamiento especializado.

## Evolución

```text
generalización / especialización
→ herencia
→ super(...)
→ @Override
→ referencia del tipo base
→ polimorfismo dinámico
```

Una evolución posible:

```text
Mascota
├── Perro
└── Gato
```

Checkpoint: el estudiante puede justificar la jerarquía, construir subtipos y demostrar comportamiento sobrescrito sin usar `if` por tipo para decidir cada acción.

---

# Semana 06 · Arrays, List / ArrayList y excepciones

## Necesidad

PetCare ya no administra una sola mascota: necesita trabajar con múltiples objetos y controlar operaciones inválidas.

## Evolución

```text
array de objetos
→ limitación de tamaño fijo
→ List<Mascota>
→ ArrayList<Mascota>
→ registrar / recorrer / buscar / eliminar
→ condición inválida
→ throw
→ try/catch
```

Checkpoint: colección dinámica funcional y manejo explícito de errores sin concentrar toda la lógica en `main`.

---

# Semana 07 · Integración EA1, clases abstractas e interfaces

## Necesidad

La jerarquía ya existe y se vuelve necesario expresar dos ideas diferentes:

1. una categoría base que no debería instanciarse directamente;
2. capacidades que sólo algunos tipos poseen.

## Evolución

```text
Mascota concreta
→ Mascota abstracta (si el dominio lo justifica)
→ método abstracto
→ interfaz por capacidad
→ List<Mascota>
→ polimorfismo
→ excepciones
→ integración completa de consola
```

Checkpoint: solución EA1 cohesionada, ejecutable y explicable.

---

# Semana 08 · Set, Map y criterio de elección

## Necesidad

No todas las colecciones resuelven el mismo problema.

```text
recorrer / mantener secuencia → List
evitar duplicados            → Set
recuperar por clave          → Map
```

## Evolución posible en PetCare

- `List<Mascota>` como colección principal;
- `Set<String>` para identificadores, chips, especies/categorías u otro valor que deba ser único;
- `Map<String, Mascota>` para búsqueda directa por un identificador;
- `equals()` y `hashCode()` sólo cuando objetos propios deban participar coherentemente en estructuras basadas en igualdad.

Checkpoint: el estudiante puede **justificar** qué colección usa y por qué. No se obliga a usar las tres si el dominio no lo necesita.

---

# Desde Semana 09

La planificación de las unidades posteriores debe actualizarse cuando se publique o confirme el material vigente.

La dirección arquitectónica esperada se mantiene:

```text
interfaz futura ──> core
persistencia futura ──> contratos / servicios del core
```

pero PetCare no debe adelantar JavaFX, JSON o JDBC antes de que esos contenidos sean trabajados.

---

# Regla de preparación semanal

Antes de escribir el siguiente incremento:

1. revisar `semanas/semana-N/`;
2. revisar el checkpoint PetCare anterior;
3. identificar una necesidad real del dominio;
4. elegir sólo los conceptos ya enseñados;
5. mantener compatibilidad con lo anterior;
6. evitar reescrituras completas;
7. separar interacción de consola y reglas del dominio;
8. definir evidencia y checkpoint de salida.
