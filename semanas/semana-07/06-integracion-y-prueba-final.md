# 06 · Integración y prueba final

## Mapa completo

```text
requerimiento
→ package dominio
→ Recurso abstracto
→ subtipos
→ interfaz Descargable
→ MediaHub crea y administra
→ List<Recurso>
→ polimorfismo
→ LecturaEntrada
→ Main coordina
→ excepciones
→ prueba
```

## Checklist

- [ ] el proyecto compila;
- [ ] las entidades están en `cl.duoc.dsy1102.mediahub.dominio`;
- [ ] Recurso no puede instanciarse;
- [ ] cada subtipo define sus días de préstamo;
- [ ] Ebook y Audiolibro son Descargables;
- [ ] todos los recursos caben en una misma `List<Recurso>`;
- [ ] MediaHub crea los objetos concretos;
- [ ] Main no utiliza constructores del dominio;
- [ ] LecturaEntrada concentra Scanner;
- [ ] buscar por código funciona;
- [ ] prestar y devolver respetan el estado;
- [ ] descargar funciona solo donde corresponde;
- [ ] los errores no terminan la aplicación.

## Qué deberías poder explicar

- ¿por qué las entidades viven en un package de dominio?
- ¿por qué Recurso es abstracta?
- ¿por qué Descargable es interfaz?
- ¿por qué la lista usa Recurso?
- ¿por qué Main no crea objetos concretos?
- ¿qué responsabilidad tiene MediaHub?
- ¿qué responsabilidad tiene LecturaEntrada?
- ¿qué responsabilidad tiene Main?

## Proyecto completo

➡️ [Biblioteca MediaHub · solución final](../../ejemplos/semana-07/proyecto-integracion-ea1/)
