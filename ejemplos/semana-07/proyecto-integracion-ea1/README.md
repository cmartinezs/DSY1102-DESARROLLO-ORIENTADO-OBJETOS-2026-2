# Proyecto integrador EA1 · Biblioteca MediaHub

Proyecto Java de consola utilizado como referencia completa para la Semana 07.

## Estructura

```text
src/
└── cl/
    └── duoc/
        └── dsy1102/
            └── mediahub/
                ├── dominio/
                │   ├── Recurso.java
                │   ├── Descargable.java
                │   ├── LibroFisico.java
                │   ├── Pelicula.java
                │   ├── Ebook.java
                │   └── Audiolibro.java
                ├── MediaHub.java
                ├── LecturaEntrada.java
                └── Main.java
```

## Responsabilidades principales

```text
dominio        → entidades y contratos
MediaHub       → creación + administración de recursos
LecturaEntrada → Scanner + validación de entrada
Main           → menú + coordinación
```

Main no instancia directamente clases concretas del dominio. Solicita a MediaHub que registre cada tipo de recurso.

## Ejecutar

```text
cl.duoc.dsy1102.mediahub.Main
```

## Qué integra

- separación por responsabilidades;
- package de dominio;
- encapsulamiento;
- herencia;
- clase abstracta;
- interfaz;
- polimorfismo;
- `List<Recurso>`;
- creación de objetos encapsulada en MediaHub;
- entrada protegida mediante LecturaEntrada;
- `switch` clásico;
- validaciones y excepciones.

La guía de Semana 07 explica el orden recomendado de construcción. Esta carpeta contiene la **solución final de referencia**.
