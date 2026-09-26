# 05 · Main, menú, LecturaEntrada y manejo de excepciones

## Responsabilidad de LecturaEntrada

`LecturaEntrada` encapsula `Scanner` y protege la interacción frente a entradas inválidas.

Esta clase se hace responsable de:

- leer texto;
- impedir valores vacíos;
- leer enteros;
- volver a solicitar cuando el usuario escribe texto donde se espera un número;
- validar rangos simples;
- cerrar Scanner al terminar.

## Responsabilidad de Main

Main mantiene una única instancia compartida de sus colaboradores de consola:

```java
private static final LecturaEntrada entrada = new LecturaEntrada();
private static final MediaHub mediaHub = new MediaHub();
```

Esto evita pasarlos como parámetros entre los métodos auxiliares del menú. No estamos estudiando el patrón Singleton; simplemente utilizamos atributos estáticos compartidos dentro de `Main` para mantener la clase simple y legible.

Main se concentra en:

- mostrar opciones;
- decidir qué operación ejecutar;
- pedir datos mediante `LecturaEntrada`;
- delegar la creación y gestión de recursos a `MediaHub`;
- capturar errores provenientes del dominio.

Main no utiliza `new LibroFisico(...)`, `new Pelicula(...)`, `new Ebook(...)` ni `new Audiolibro(...)`.

Ejemplo:

```java
private static void registrarPelicula() {
    mediaHub.registrarPelicula(
            entrada.leerTextoNoVacio("Código: "),
            entrada.leerTextoNoVacio("Título: "),
            entrada.leerTextoNoVacio("Director: ")
    );
}
```

## Menú objetivo

```text
=== BIBLIOTECA MEDIAHUB ===
1. Registrar libro físico
2. Registrar película
3. Registrar ebook
4. Registrar audiolibro
5. Listar recursos
6. Buscar recurso
7. Mostrar políticas de préstamo
8. Prestar recurso
9. Devolver recurso
10. Descargar recurso
0. Salir
```

## Dos tipos de errores

### Errores de entrada
Los controla `LecturaEntrada`:

- opción no numérica;
- opción fuera de rango;
- texto vacío.

### Errores del dominio
Los detectan las clases responsables y Main los informa:

- código duplicado;
- recurso inexistente;
- prestar un recurso no disponible;
- devolver uno ya disponible;
- descargar un recurso físico.

## Avance consolidado esperado

- existe `LecturaEntrada.java`;
- Scanner queda encapsulado;
- Main usa un `switch` clásico;
- `LecturaEntrada` y `MediaHub` son atributos `static final` de Main;
- los métodos auxiliares no necesitan recibirlos como parámetros;
- Main no instancia clases concretas del dominio;
- las operaciones delegan en MediaHub;
- los errores no terminan abruptamente la aplicación.

➡️ [Siguiente: integración final](./06-integracion-y-prueba-final.md)
