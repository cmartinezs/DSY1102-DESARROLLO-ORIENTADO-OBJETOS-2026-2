# Lab · Veterinaria II

## Arrays, colecciones y excepciones sobre la misma solución

Veterinaria II **continúa exactamente la solución construida en Veterinaria I**. No se crea un proyecto nuevo, no se duplica `src/` y no se reemplaza la jerarquía ya construida.

## Prerrequisito

Debes haber terminado Veterinaria I en:

```text
labs/lab-veterinaria-herencia-polimorfismo/
```

Ese mismo directorio sigue siendo la raíz de trabajo.

## Objetivo

Evolucionar la solución para administrar múltiples animales y controlar situaciones inválidas, siguiendo esta progresión:

```text
Herencia + Polimorfismo
        ↓
Animal[]
        ↓
limitaciones del array
        ↓
List<Animal> / ArrayList<Animal>
        ↓
búsqueda y eliminación
        ↓
errores del dominio
        ↓
throw + try/catch
        ↓
integración final
```

## Estructura de continuidad

El código continúa en `src/`. La documentación y evidencias específicas de esta segunda fase se separan por subcarpeta:

```text
labs/lab-veterinaria-herencia-polimorfismo/
├── README.md
├── src/
│   ├── Animal.java
│   ├── Mascota.java
│   ├── Salvaje.java
│   ├── Perro.java
│   ├── Gato.java
│   ├── Tigre.java
│   ├── Leon.java
│   └── ...
├── docs/
│   └── veterinaria-ii/
└── evidencias/
    └── veterinaria-ii/
```

## Ruta pedagógica

La implementación se divide en ocho etapas. Cada una tiene misión, entregable, evidencia Git y checkpoint de comprensión.

1. [Retomar la solución existente](./01-continuidad.md)
2. [Construir una primera versión con `Animal[]`](./02-array.md)
3. [Descubrir las limitaciones del array](./03-limitaciones-array.md)
4. [Evolucionar a `List<Animal>` / `ArrayList<Animal>`](./04-colecciones.md)
5. [Implementar búsqueda y eliminación](./05-busqueda-eliminacion.md)
6. [Modelar errores del dominio](./06-errores.md)
7. [Aplicar `throw`, `try` y `catch`](./07-excepciones.md)
8. [Integrar, probar y cerrar](./08-integracion.md)

## Evidencias obligatorias

- inventario inicial de clases y responsabilidades;
- versión funcional con `Animal[]`;
- justificación escrita de las limitaciones del array;
- migración razonada a `List<Animal>`;
- búsqueda y eliminación con responsabilidad fuera de `main`;
- catálogo de situaciones inválidas;
- ejecución válida y ejecución inválida controlada;
- reflexión final comparando Veterinaria I y II;
- commits incrementales conciliados con cada paso.

## Regla Git

Cada paso de implementación debe registrarse como avance independiente. La web guiada ofrece dos rutas equivalentes:

- GitHub Desktop;
- Terminal / CLI.

La CLI se enseña como secuencia observable `status → add → status → commit → push`, mostrando la salida esperada según el tipo real de cambio producido por la instrucción.

## Web guiada

La experiencia publicada en GitHub Pages debe reflejar este contenido canónico y usar el mismo patrón de Veterinaria I: etapas, progreso, checkpoints, repaso no destructivo y evidencias por paso.
