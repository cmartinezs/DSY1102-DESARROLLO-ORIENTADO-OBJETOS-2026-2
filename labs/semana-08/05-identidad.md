# Etapa 05 · Identidad lógica, equals y hashCode

## ¿Qué representa igualdad en tu dominio?
Dos instancias pueden ser objetos diferentes en memoria, pero representar el mismo paciente si **comparten el chip**. Eso debe definirse antes de generar `equals`/`hashCode`.

## Caso que NO los requiere
`Set<String>` y `Map<String, Animal>` usan la igualdad de `String`; no necesitas modificar `Animal.equals()` ni `hashCode()` para esos casos.

## Caso que SÍ puede requerirlos
Si guardas directamente `Set<Animal>` y pretendes que dos objetos con igual chip no se dupliquen, tu clase debe definir igualdad lógica coherente.

## Fragmento orientativo para clase concreta
```java
@Override
public boolean equals(Object otro) {
    if (this == otro) return true;
    if (!(otro instanceof Animal)) return false;
    Animal animal = (Animal) otro;
    return getIdentificador().equals(animal.getIdentificador());
}

@Override
public int hashCode() {
    return getIdentificador().hashCode();
}
```

**Ojo:** aplicar igualdad por chip a toda una jerarquía requiere que ese criterio sea consistente entre subtipos. Si tu modelo no garantiza una identidad común, no copies el fragmento.

## Pasos
1. Declara en `docs/veterinaria-iv/03-integridad.md` qué es un identificador estable.
2. Decide si tus colecciones requieren igualdad personalizada.
3. Usa `Code → Generate...` solo para escribir una implementación **después de elegir** la identidad.
4. Nunca cambies el chip que participa en `hashCode` mientras el objeto esté en un `HashSet`.

## Checkpoint
- [ ] Distingues igualdad por referencia de igualdad de dominio.
- [ ] Puedes explicar por qué `Set<String>` no exige `Animal.equals()`.
- [ ] No agregaste métodos generados innecesarios.

**Commit:** `docs: justificar identidad de pacientes`.
