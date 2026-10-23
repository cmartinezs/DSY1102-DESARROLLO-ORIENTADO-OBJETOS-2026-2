#!/usr/bin/env bash
# Verifica que los ejemplos canónicos Java compilen SIN mezclar proyectos de semanas.
# Ejecutar desde la raíz del repositorio:
#   bash scripts/verificar-ejemplos.sh --java-only
#   bash scripts/verificar-ejemplos.sh
set -euo pipefail
cd "$(dirname "$0")/.."
command -v javac >/dev/null || { echo "ERROR: javac no disponible. Usa JDK 21."; exit 1; }
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

echo "== Java: semanas 01,02,03,04,05,06,07,08 =="
for n in 01 02 03 04 05 06 07 08; do
  dir="ejemplos/semana-$n"
  mkdir -p "$tmp/$n"
  mapfile -t sources < <(find "$dir" -maxdepth 1 -name '*.java' | sort)
  if (( ${#sources[@]} == 0 )); then
    echo "FALLA semana $n: no hay clases Java"; exit 1
  fi
  javac -encoding UTF-8 -d "$tmp/$n" "${sources[@]}"
  echo "PASS semana $n (${#sources[@]} fuentes)"
done

if [[ "${1:-}" == "--java-only" ]]; then
  echo "Java compilado; Maven/JavaFX/JSON no fueron revisados (--java-only)."
  exit 0
fi

command -v mvn >/dev/null || {
  echo "INCOMPLETO: Maven no instalado; quedan pendientes semanas 09, 10 y 11."
  exit 2
}
echo "== Maven: semanas 09,10,11 =="
mvn -B -q -f ejemplos/semana-09/proyecto-demo/pom.xml -DskipTests compile
echo "PASS Maven semana 09"
mvn -B -q -f ejemplos/semana-10/pom.xml -DskipTests compile
echo "PASS Maven semana 10"
mvn -B -q -f ejemplos/semana-11/pom.xml -DskipTests compile
echo "PASS Maven semana 11"

echo "Compilación completa. Falta ejecutar las escenas JavaFX y contrastar UI visualmente."
