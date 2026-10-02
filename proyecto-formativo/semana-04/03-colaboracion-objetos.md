# 03 · Incorporar colaboración entre objetos

Agrega una segunda entidad sólo si representa una responsabilidad distinta.

Un ejemplo posible es `Tutor`.

```text
Mascota ───> Tutor
```

## Pregunta de diseño

¿Los datos del tutor describen a la mascota o describen a otra entidad?

Si representan otra entidad, evita llenar `Mascota` con atributos como:

```text
nombreTutor
telefonoTutor
correoTutor
direccionTutor
```

Una alternativa más coherente es mantener un objeto `Tutor`.

## Trabajo

1. crea una segunda clase simple;
2. dale su propio estado;
3. crea una relación desde `Mascota` cuando corresponda;
4. demuestra la colaboración desde `App`.

## Checkpoint

- [ ] cada clase tiene una responsabilidad comprensible;
- [ ] no dupliqué datos entre objetos;
- [ ] la relación puede explicarse con lenguaje del dominio;
- [ ] no agregué clases sólo para “tener composición”.
