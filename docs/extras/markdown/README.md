# ✍️ Markdown para documentar ejercicios

Markdown es un lenguaje de marcado ligero utilizado por GitHub para archivos como `README.md`, Issues y Pull Requests.

## Lo mínimo que necesitas

### Títulos

```markdown
# Título
## Sección
### Subsección
```

### Énfasis

```markdown
**negrita**
*cursiva*
`código`
```

### Listas

```markdown
- elemento
- otro elemento

1. primer paso
2. segundo paso
```

### Enlaces

```markdown
[Documentación de Java](https://docs.oracle.com/)
```

### Código

````markdown
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola");
    }
}
```
````

### Tablas

```markdown
| Concepto | Descripción |
|---|---|
| Clase | Define estructura y comportamiento |
| Objeto | Instancia de una clase |
```

### Checklist

```markdown
- [x] Crear clase
- [ ] Agregar constructor
- [ ] Probar comportamiento
```

## README recomendado para una actividad

```markdown
# Nombre de la actividad

Breve descripción del problema.

## Objetivo

Qué se practica en el ejercicio.

## Requisitos

- Java
- IntelliJ IDEA o IDE compatible

## Cómo ejecutar

1. Clonar el repositorio.
2. Abrir el proyecto.
3. Ejecutar la clase `Main`.

## Modelo

Explica brevemente qué clases participan y qué responsabilidad tiene cada una.

## Evidencia

Describe casos que probaste y el resultado esperado.
```

## Buenas prácticas

- un solo `#` como título principal;
- títulos descriptivos;
- bloques de código indicando `java`, `bash`, etc.;
- rutas relativas cuando enlaces archivos del mismo repositorio;
- explicar el proyecto en lugar de escribir sólo "actividad terminada";
- no pegar capturas como sustituto de una explicación que puede escribirse como texto.

## Adaptación desde Fullstack

El documento original mostraba ejemplos de endpoints REST, ejecución de Spring Boot y documentación de APIs. En DSY1102 esos ejemplos se reemplazan por clases, programas Java y descripción del modelo de objetos.

La finalidad sigue siendo la misma: que otra persona pueda abrir un repositorio y comprender **qué es, cómo ejecutarlo y qué se aprendió**.