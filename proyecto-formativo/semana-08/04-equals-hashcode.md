# 04 · Definir igualdad lógica cuando corresponda

Este paso sólo aplica si objetos propios se almacenan en `HashSet` o se utilizan como claves.

Antes de generar `equals()` y `hashCode()`, define:

> ¿qué hace que dos instancias representen la misma entidad para PetCare?

Si la identidad es `id`, ambos métodos deben usar ese mismo criterio.

## Regla importante

No modifiques libremente el atributo que define identidad mientras el objeto está dentro de una estructura hash.

## Checkpoint

- [ ] existe una definición explícita de identidad;
- [ ] `equals()` y `hashCode()` son coherentes;
- [ ] el atributo de identidad es estable;
- [ ] no generé estos métodos sólo porque IntelliJ los ofrece.
