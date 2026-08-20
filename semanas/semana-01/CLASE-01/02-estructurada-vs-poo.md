# Programación estructurada vs Programación Orientada a Objetos

La programación estructurada y la POO no son enemigas. De hecho, dentro de los métodos de una clase seguiremos usando decisiones, ciclos y secuencias de instrucciones.

La diferencia está principalmente en **cómo organizamos la solución completa**.

## Mirada estructurada

Podemos pensar un problema como una colección de datos y operaciones:

```text
datos
+
funciones que trabajan con esos datos
```

Por ejemplo:

```java
String nombre = "Michi";
double peso = 5.2;

mostrarFicha(nombre, peso);
actualizarPeso(peso, 5.4);
```

## Mirada orientada a objetos

En POO intentamos agrupar estado y comportamiento alrededor de un concepto:

```text
Mascota
├── nombre
├── peso
├── mostrarFicha()
└── actualizarPeso()
```

La pregunta deja de ser solamente:

> ¿qué función debo ejecutar?

Y comienza a aparecer:

> ¿qué objeto debería ser responsable de esta operación?

## Qué permanece

Aunque cambiemos de paradigma, seguimos necesitando:

- variables;
- expresiones;
- `if`;
- ciclos;
- métodos;
- algoritmos.

POO no elimina estos fundamentos: **los organiza dentro de objetos y responsabilidades**.

## Una advertencia

Crear una clase para cada grupo de variables no significa automáticamente que una solución esté bien orientada a objetos. La calidad del diseño depende de que las responsabilidades tengan sentido y que los objetos colaboren de forma coherente.
