# Proyecto integrador EA1 · Biblioteca MediaHub

Proyecto Java de consola utilizado como referencia completa para la Semana 07.

## Contexto

MediaHub administra recursos físicos y digitales de una biblioteca multimedia.

El proyecto integra una jerarquía de recursos, políticas de préstamo diferentes, una capacidad de descarga para recursos digitales, administración mediante `List<Recurso>`, entrada segura por consola y manejo de errores.

## Estructura

```text
src/
└── cl/
    └── duoc/
        └── dsy1102/
            └── mediahub/
                ├── Recurso.java
                ├── Descargable.java
                ├── LibroFisico.java
                ├── Pelicula.java
                ├── Ebook.java
                ├── Audiolibro.java
                ├── MediaHub.java
                ├── LecturaEntrada.java
                └── Main.java
```

## Responsabilidades principales

```text
Recurso / subtipos → dominio
MediaHub           → administración de recursos
LecturaEntrada     → Scanner + validación de entrada
Main               → menú y coordinación
```

## Ejecutar

```text
cl.duoc.dsy1102.mediahub.Main
```

## Qué integra

- clases y responsabilidades;
- encapsulamiento;
- constructores;
- herencia;
- clase abstracta;
- método abstracto;
- interfaz;
- `implements`;
- sobrescritura;
- polimorfismo;
- `List<Recurso>` / `ArrayList`;
- búsqueda por código;
- préstamo y devolución;
- clase especializada para entrada de consola;
- `switch` clásico;
- validaciones;
- `try/catch`;
- flujo controlado ante errores.

La guía de Semana 07 explica el orden recomendado de construcción. Esta carpeta contiene la **solución final de referencia**.
