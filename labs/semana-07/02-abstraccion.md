# Etapa 02 · ¿Debe ser abstracta la clase Animal?

## Necesidad
`Animal` expresa características comunes; la veterinaria atiende especímenes concretos. Si **nunca** corresponde un paciente genérico, impedir la instancia directa hace explícita la regla.

## Decide antes de modificar
1. Busca todas las instancias directas de `Animal`.
2. Pregunta: ¿un objeto `Animal` sin especie tiene sentido y posee comportamiento completo?
3. Si la respuesta es no, declara `Animal` abstracta; si ya lo es, **no repitas el cambio** y documenta por qué.
4. Considera declarar abstracto un comportamiento que **cada subtipo** deba definir por sí mismo, pero no inventes uno sin necesidad.
5. Compila y ajusta sólo los puntos que intentaban instanciar la base, usando tipos concretos.

## Recordatorio de sintaxis
```java
public abstract class Animal {
    private final String identificador;

    protected Animal(String identificador) {
        if (identificador == null || identificador.isBlank()) {
            throw new IllegalArgumentException("Identificador obligatorio");
        }
        this.identificador = identificador;
    }

    public String getIdentificador() { return identificador; }

    public abstract String describirAtencion(); // solo si la regla lo justifica
}
```
**Referencia focalizada:** conserva los atributos, constructores y métodos que ya funcionan en tu clase; no reemplaces todo tu `Animal` con este fragmento.

## Prueba
`new Animal(...)` no debe compilar si `Animal` es abstracta; `new Perro(...)` y `new Gato(...)` deben compilar y conservar su comportamiento.

## Checkpoint
- [ ] Decisión argumentada en `docs/veterinaria-iii/02-abstraccion.md`.
- [ ] No se rompió la jerarquía ni el uso polimórfico.
- [ ] Puedes explicar diferencia entre clase abstracta y un objeto concreto.

**Commit sugerido:** `refactor: justificar abstraccion de Animal`.
