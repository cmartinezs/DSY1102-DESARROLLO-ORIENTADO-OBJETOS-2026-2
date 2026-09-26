# 06 · Integración y prueba final

## Mapa completo

```text
requerimiento
→ Recurso abstracto
→ subtipos
→ método abstracto
→ interfaz Descargable
→ List<Recurso>
→ polimorfismo
→ menú
→ excepciones
→ prueba
```

## Checklist

- [ ] el proyecto compila;
- [ ] todos los archivos usan el package correcto;
- [ ] Recurso no puede instanciarse;
- [ ] cada subtipo define sus días de préstamo;
- [ ] Ebook y Audiolibro son Descargables;
- [ ] todos los recursos caben en una misma List<Recurso>;
- [ ] buscar por código funciona;
- [ ] prestar y devolver respetan el estado;
- [ ] descargar funciona solo donde corresponde;
- [ ] los errores no terminan la aplicación;
- [ ] Main no concentra la lógica del dominio.

## Qué deberías poder explicar

- ¿por qué Recurso es abstracta?
- ¿por qué obtenerDiasPrestamo() es abstracto?
- ¿por qué Descargable es interfaz?
- ¿por qué la lista usa Recurso?
- ¿dónde aparece el polimorfismo?
- ¿qué responsabilidad tiene MediaHub?
- ¿qué responsabilidad tiene Main?

## Proyecto completo

➡️ [Biblioteca MediaHub · solución final](../../ejemplos/semana-07/proyecto-integracion-ea1/)
