# 03 · Interfaces y capacidades

## Nuevo requisito

MediaHub ofrece descarga para sus recursos digitales.

Pregunta:

> ¿Descargable es otro tipo de Recurso?

No. Es una **capacidad**.

```java
public interface Descargable {
    void descargar();
}
```

Los recursos digitales implementan el contrato:

```text
Ebook       extends Recurso implements Descargable
Audiolibro  extends Recurso implements Descargable
```

Los recursos físicos siguen siendo Recursos, pero no son Descargables.

## Diferencia conceptual

```text
Ebook ES UN Recurso.
Ebook PUEDE SER Descargable.

extends     → generalización / especialización
implements  → capacidad / contrato
```

## Conocimiento que debes adquirir

Debes poder decidir si un nuevo requisito representa:

- una nueva especialización;
- una capacidad transversal;
- comportamiento común de la clase base.

## Avance consolidado esperado

- existe `Descargable.java`;
- Ebook y Audiolibro implementan la interfaz;
- LibroFisico y Pelicula no la implementan;
- puedes justificar la decisión sin hablar solamente de sintaxis.

➡️ [Siguiente: List y polimorfismo](./04-listas-y-polimorfismo.md)
