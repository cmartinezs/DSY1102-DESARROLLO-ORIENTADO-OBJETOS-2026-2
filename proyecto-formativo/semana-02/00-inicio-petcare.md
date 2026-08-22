# Inicio formal de PetCare · Semana 02 · sábado 22 de agosto

PetCare **se inicia formalmente en esta sesión**.

El martes 18 se utilizó la clase para recuperar fundamentos de Java perdidos por el feriado del sábado 15: variables, tipos primitivos, `String`, `System.out.println`, condicionales, ciclos y ejecución desde IntelliJ. Ese trabajo es prerrequisito técnico, pero **no se considera todavía un checkpoint de PetCare**.

## Por qué PetCare no comienza antes

El proyecto transversal debe comenzar cuando el estudiante ya puede escribir y ejecutar Java básico sin que el dominio del proyecto distraiga del aprendizaje inicial.

La secuencia queda así:

```text
Semana 01 / martes 18
fundamentos Java + IntelliJ
        ↓
Semana 02 / sábado 22
métodos y primeros objetos con ejemplos aislados
        ↓
inicio formal de PetCare
        ↓
aplicar lo recién aprendido
        ↓
checkpoint PetCare 0.1
```

## Regla didáctica

PetCare no reemplaza los ejemplos de clase.

Para cada concepto importante se intentará mantener esta secuencia:

```text
1. ejemplo mínimo y aislado
2. segundo ejemplo en otro contexto
3. explicación del concepto
4. aplicación a PetCare
5. checkpoint acumulativo
```

De esta forma un estudiante puede reconocer que `método`, `clase`, `objeto` o `encapsulamiento` son herramientas generales de Java y no características particulares de PetCare.

## Cómo crear PetCare hoy

Cada estudiante debe trabajar en su propio repositorio de la asignatura.

Dentro de la ubicación destinada a ejercicios/proyecto formativo, crear un proyecto Java llamado:

```text
petcare
```

Por ahora basta una estructura mínima. Si todavía no se han explicado packages, puede comenzar temporalmente con:

```text
petcare/
└── src/
    └── App.java
```

Cuando en la misma clase aparezcan clases y organización básica, evolucionará hacia:

```text
petcare/
└── src/
    └── cl/
        └── duoc/
            └── petcare/
                ├── cli/
                │   └── App.java
                └── core/
                    └── model/
                        └── Mascota.java
```

La estructura se construye cuando el contenido la justifica; no se pide memorizarla antes de entender qué contiene.

## Versión 0 · El programa más pequeño posible

La primera versión de PetCare puede ser deliberadamente simple:

```java
public class App {
    public static void main(String[] args) {
        String nombre = "Michi";
        int edad = 4;
        double peso = 5.2;
        boolean vacunado = true;

        System.out.println("Mascota: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Peso: " + peso);
        System.out.println("Vacunado: " + vacunado);
    }
}
```

Este código reutiliza sólo conocimientos ya trabajados. Su propósito es establecer una base que pueda transformarse durante la clase.

## Primera evolución esperada

Después de aprender métodos con ejemplos sueltos, PetCare puede incorporar:

```java
public static String obtenerEstadoVacunacion(boolean vacunado) {
    if (vacunado) {
        return "AL DÍA";
    }

    return "PENDIENTE";
}
```

Después de aprender clase y objeto con un ejemplo distinto, PetCare evoluciona hacia `Mascota`.

## Checkpoint PetCare 0.1

No existe antes de hoy. El primer checkpoint real del proyecto se obtiene al finalizar la sesión según el avance efectivo.

Mínimo:

```text
PetCare ejecutable
+ al menos un método entendido por el estudiante
+ primera clase Mascota si se alcanzó POO
```

Ideal:

```text
App
+ Mascota
+ dos objetos
+ estado encapsulado
+ una operación que protege una regla
```

## Commit sugerido

Primer commit del proyecto:

```text
feat: iniciar proyecto formativo petcare
```

Luego, si durante la misma clase se modela `Mascota`:

```text
feat: modelar primera mascota
```

La separación de commits permite observar la evolución del software.
