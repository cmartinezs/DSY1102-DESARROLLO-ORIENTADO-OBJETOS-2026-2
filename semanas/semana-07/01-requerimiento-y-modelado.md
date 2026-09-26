# 01 · Requerimiento y modelado inicial

**Proyecto:** Biblioteca MediaHub

## Requerimiento

MediaHub es una biblioteca multimedia que administra distintos recursos para sus usuarios.

Actualmente trabaja con:

- libros físicos;
- películas;
- ebooks;
- audiolibros.

Todos poseen un código, título y creador. Cada tipo tiene una política de préstamo distinta. Los recursos digitales además pueden descargarse.

La aplicación debe permitir:

1. registrar recursos;
2. listar todos los recursos;
3. buscar por código;
4. consultar los días de préstamo de cada recurso;
5. prestar y devolver recursos;
6. descargar un recurso cuando corresponda;
7. controlar entradas inválidas;
8. continuar funcionando hasta que el usuario decida salir.

## Antes de programar

Responder:

- ¿qué información comparten todos los recursos?
- ¿qué comportamiento cambia según el tipo?
- ¿qué diferencia hay entre un recurso físico y uno digital?
- ¿“Descargable” representa una familia o una capacidad?
- ¿quién debería administrar la lista?
- ¿quién debería crear los objetos de dominio?
- ¿quién debería hacerse responsable de leer y validar la entrada?
- ¿qué debería hacer Main y qué no?

## Modelo inicial

```text
dominio/
├── Recurso
├── Descargable
├── LibroFisico
├── Pelicula
├── Ebook
└── Audiolibro

MediaHub
├── crea objetos de dominio
└── administra List<Recurso>

LecturaEntrada
└── administra Scanner y protege la entrada

Main
└── coordina la interacción
```

## Estructura objetivo

```text
proyecto-integracion-ea1/
└── src/
    └── cl/duoc/dsy1102/mediahub/
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

## Responsabilidades

- `dominio`: contiene las entidades y contratos propios del problema.
- `MediaHub`: crea objetos de dominio y administra el conjunto de recursos.
- `LecturaEntrada`: encapsula `Scanner`, lee datos y repite la solicitud cuando la entrada no es válida.
- `Main`: muestra el menú y coordina las llamadas entre las demás clases.

## Idea de diseño importante

Main no debería conocer cómo se construye un `LibroFisico`, `Pelicula`, `Ebook` o `Audiolibro`.

En lugar de:

```java
new Pelicula(...)
```

Main delega:

```java
mediaHub.registrarPelicula(codigo, titulo, director);
```

## Avance consolidado esperado

Debes poder justificar las entidades, los packages y las responsabilidades. La creación de objetos del dominio queda encapsulada en MediaHub.

➡️ [Siguiente: clases abstractas](./02-clases-abstractas.md)
