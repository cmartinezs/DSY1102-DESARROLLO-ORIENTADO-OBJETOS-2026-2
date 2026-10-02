# 01 · Identificar generalización y especialización

Parte desde las clases existentes de Semana 04.

Antes de escribir `extends`, identifica qué características son realmente comunes y cuáles cambian según el tipo de mascota.

## Preguntas

- ¿todos los tipos comparten nombre, edad o tutor?;
- ¿hay comportamiento que realmente cambia por subtipo?;
- ¿una especialización representa una relación **ES UNA**?;
- ¿estoy creando subtipos sólo porque esta semana toca herencia?

## Resultado esperado

Una propuesta simple como:

```text
Mascota
├── Perro
└── Gato
```

sólo si el dominio la justifica.

## Checkpoint

- [ ] existe una clase base con estado común;
- [ ] identifiqué al menos dos especializaciones razonables;
- [ ] identifiqué al menos un comportamiento que puede variar;
- [ ] todavía no dupliqué código en subtipos.
