# 06 · Integración y prueba final

Llegamos al cierre del proyecto.

## Mapa completo

~~~text
requerimiento
→ entidades
→ responsabilidades
→ clase abstracta
→ métodos abstractos
→ interfaz
→ herencia
→ sobrescritura
→ List<Animal>
→ polimorfismo
→ menú
→ excepciones
→ prueba
~~~

## Checklist de integración

Antes de considerar terminado el proyecto:

- [ ] compila;
- [ ] el menú vuelve a mostrarse después de cada operación;
- [ ] se pueden registrar distintos subtipos;
- [ ] todos pueden almacenarse en List<Animal>;
- [ ] emitirSonido() funciona polimórficamente;
- [ ] la búsqueda funciona;
- [ ] la vacunación funciona solo cuando corresponde;
- [ ] una entrada inválida no termina la aplicación;
- [ ] cada clase conserva una responsabilidad clara;
- [ ] Main no concentra la lógica de negocio.

## Qué deberías poder explicar sin mirar código

- ¿por qué Animal es abstracta?
- ¿por qué emitirSonido() es abstracto?
- ¿por qué Vacunable es una interfaz?
- ¿por qué la lista es List<Animal>?
- ¿qué permite que el recorrido sea polimórfico?
- ¿por qué Veterinaria administra la lista?
- ¿qué errores se capturan en Main?
- ¿qué diferencia hay entre comprobar un subtipo y comprobar una capacidad?

## Proyecto completo

➡️ [Proyecto completo de referencia](../../ejemplos/semana-07/proyecto-integracion-ea1/)

La carpeta de ejemplos contiene la solución final.

~~~text
leer
→ comprender
→ modelar
→ implementar
→ integrar
→ probar
~~~

La POO no comienza con class. Comienza entendiendo el problema.
