# 01 · Antes del JSON: dato, registro y colección

**Microcápsula complementaria · DSY1102 Unidad 2 · 10–15 min**  
**Pregunta:** ¿qué estamos guardando exactamente cuando guardamos una lista de mensajes?

## El problema, sin código
Una cápsula guarda mensajes para leerlos después. Cada mensaje tiene **autor**, **texto** y **plazo en años**. El mensaje completo es un *registro*: agrupa datos que pertenecen a una misma cosa. Varios mensajes forman una *colección*.

Un **dato** es un valor: `5`, `"Carlos"`, `true`. Un **campo** tiene un nombre y un valor: `plazoAnios = 5`. Un **registro** combina los campos de una entidad. Una **colección** reúne registros o valores; puede haber cero, uno o muchos.

| Concepto | Ejemplo en nuestra cápsula | Java |
| --- | --- | --- |
| Valor numérico | `5` | `int` |
| Valor textual | `Carlos` | `String` |
| Registro | Un mensaje con tres campos | `MensajeFuturo` |
| Colección ordenada | Primer, segundo y tercer mensaje | `List<MensajeFuturo>` |
| Lista mutable | Colección a la que podemos agregar | `ArrayList<MensajeFuturo>` |

## Ejemplo Java 21 (sin JavaFX ni archivos)

```java
import java.util.ArrayList;
import java.util.List;

record Mensaje(String autor, String texto, int plazoAnios) {}

public class Demo {
    public static void main(String[] args) {
        List<Mensaje> mensajes = new ArrayList<>();
        mensajes.add(new Mensaje("Carlos", "Hola, futuro", 5));
        mensajes.add(new Mensaje("Vale", "Aprender haciendo", 10));

        System.out.println(mensajes.size());           // 2
        System.out.println(mensajes.get(0).autor());    // Carlos
    }
}
```

`record` aparece aquí solo para reducir código de ejemplo. En nuestro proyecto de clase usamos `class MensajeFuturo`, constructor y getters; **no necesitas aprender records para continuar R06**.

## Una distinción que evita muchos errores
- `mensajes` es una **variable que referencia una lista en memoria**. Cerrar el proceso elimina ese estado.
- `mensajes.get(0)` obtiene una **posición** de la lista. Los índices comienzan en 0.
- `mensajes.size()` dice cuántos elementos hay; no es el último índice.
- `List` es una interfaz, `ArrayList` una implementación. No es lo mismo que `ObservableList`, que añade notificaciones para la interfaz gráfica.

## Practica y comprueba
1. Si la lista contiene tres mensajes, ¿cuáles son sus índices válidos?
2. ¿Tener dos mensajes significa tener dos archivos?
3. ¿Qué sucede con `mensajes` al cerrar el programa si no se guardó?

**Comprueba:** (1) 0, 1, 2; (2) no, una colección puede guardarse en un solo archivo; (3) se pierde la lista en memoria.

**Siguiente:** [02 · JSON desde cero](02-json-desde-cero.md).  
**En el currículo:** [Semana 06 · arrays y listas](../../../semanas/semana-06/README.md), [Semana 08 · elección de colecciones](../../../semanas/semana-08/README.md).
