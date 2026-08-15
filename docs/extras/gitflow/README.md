# 🌿 GitFlow — introducción a estrategias de ramas

> **Nivel recomendado:** después de dominar `clone`, `status`, `add`, `commit`, `pull`, `push` y ramas básicas.

GitFlow es una **estrategia de organización de ramas**. No es una característica especial de Java ni un requisito para programar orientado a objetos.

## Idea central

En vez de que todo el equipo trabaje directamente sobre una única rama, se separan los cambios según su propósito.

Para DSY1102 basta comprender este modelo simplificado:

```text
main
 └── develop
      ├── feature/clase-persona
      ├── feature/clase-producto
      └── fix/calculo-promedio
```

| Rama | Propósito en el curso |
|---|---|
| `main` | versión estable del trabajo |
| `develop` | integración del trabajo que todavía está avanzando |
| `feature/*` | actividad o mejora concreta |
| `fix/*` | corrección puntual |

## Ejemplo académico

```bash
git switch develop
git pull
git switch -c feature/clase-auto

# trabajar...
git add .
git commit -m "feat: agrega estado y comportamiento de Auto"

git switch develop
git merge feature/clase-auto
```

## Lo importante que debes aprender

- una rama permite aislar cambios;
- una rama debe tener un propósito reconocible;
- antes de crear una rama conviene partir desde una base actualizada;
- los cambios se integran deliberadamente mediante merge o Pull Request;
- una rama temporal puede eliminarse después de integrarla.

## Qué se omite respecto del GitFlow completo

El material original incluía `release/*`, `hotfix/*`, versionado semántico, producción, despliegues y comparación con estrategias de CI/CD. Son conceptos profesionales válidos, pero no son necesarios para aprender POO por primera vez.

Si más adelante el curso realiza un trabajo grupal, este flujo simplificado puede servir para practicar colaboración sin añadir complejidad artificial.

## Regla práctica

**No uses GitFlow sólo porque existe.** Para un ejercicio individual pequeño, `main` y commits claros pueden ser suficientes. La estrategia debe resolver un problema real de colaboración, no crear trabajo adicional.