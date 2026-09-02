# Semana 4 · Consolidación de objetos, constructores y colaboración entre clases

**Periodo:** 31 de agosto al 5 de septiembre de 2026  
**Sección:** DSY1102-012V  
**Checkpoint de entrada real:** la sección llegó a **constructores** el martes 1 de septiembre.

← [Volver al índice](../README.md)

## Objetivo

Consolidar la base de Programación Orientada a Objetos antes de avanzar a herencia y polimorfismo.

La semana parte desde:

```text
clase
→ atributos
→ métodos operacionales
→ accesores / mutadores
→ constructor
```

y avanza hacia:

```text
instancias bien inicializadas
→ encapsulamiento
→ estado válido
→ responsabilidades
→ colaboración simple entre objetos
→ composición introductoria
```

## Contenidos centrales

- constructores y parámetros;
- creación de objetos con `new`;
- diferencia entre inicializar y modificar estado;
- `this` cuando aporte claridad;
- getters y setters con criterio;
- métodos que protegen reglas del objeto;
- responsabilidad de una clase;
- composición simple: un objeto contiene o utiliza otro objeto;
- práctica integrada con dos o más clases.

## No adelantar todavía

- herencia como mecanismo principal;
- clases abstractas;
- interfaces;
- polimorfismo;
- colecciones;
- excepciones;
- persistencia.

Estos contenidos se incorporan solo después de comprobar que el grupo puede construir y explicar objetos correctamente.

## Ruta sugerida de clases

### Clase 1 · consolidación

1. repaso de clase, atributo y método;
2. constructor por defecto vs constructor declarado;
3. parámetros del constructor;
4. creación de múltiples instancias;
5. invariantes simples y validación dentro de métodos.

### Clase 2 · objetos que colaboran

1. detectar responsabilidades;
2. separar datos de comportamiento;
3. introducir composición con un caso sencillo;
4. resolver un problema usando dos clases;
5. checkpoint integrado.

## Checkpoint de salida

El estudiante debe poder construir sin copiar una solución completa:

```text
App
 ├─ crea objetos mediante constructores
 ├─ solicita operaciones
 └─ muestra resultados

Objeto de dominio
 ├─ mantiene atributos privados
 ├─ nace en un estado válido
 ├─ expone operaciones
 └─ protege sus propias reglas
```

Debe además distinguir claramente:

- constructor vs método;
- parámetro vs atributo;
- getter/setter vs operación de negocio;
- cambiar estado directamente vs pedirle al objeto que ejecute una operación.

## Proyecto formativo

PetCare se actualiza esta semana hasta una versión con objetos correctamente construidos y encapsulados. No se exige herencia todavía.

## Evidencia mínima

- dos ejercicios independientes;
- Lab 04 completo;
- avance PetCare Semana 04;
- código ejecutable;
- DevLog con al menos un error real y su corrección.
