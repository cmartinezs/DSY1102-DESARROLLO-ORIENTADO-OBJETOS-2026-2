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
- ¿qué debería hacer Main y qué no?

## Modelo inicial

```text
Recurso
├── LibroFisico
├── Pelicula
├── Ebook
└── Audiolibro
```

## Estructura objetivo

```text
proyecto-integracion-ea1/
└── src/
    └── cl/duoc/dsy1102/mediahub/
        ├── Recurso.java
        ├── Descargable.java
        ├── LibroFisico.java
        ├── Pelicula.java
        ├── Ebook.java
        ├── Audiolibro.java
        ├── MediaHub.java
        └── Main.java
```

## Avance consolidado esperado

Debes poder justificar las entidades, sus responsabilidades y por qué la aplicación necesita una clase que administre el conjunto de recursos.

➡️ [Siguiente: clases abstractas](./02-clases-abstractas.md)
