#!/usr/bin/env bash
# Télécharge les listes motusJS (licence / crédits : difabiolorenzo/motusJS) vers public/dictionary/.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE="https://raw.githubusercontent.com/difabiolorenzo/motusJS/master/src/js/dictionary"
mkdir -p "$ROOT/public/dictionary/mot_a_trouver" "$ROOT/public/dictionary/verification"
for n in 5 6 7 8 9 10; do
  curl -sS -o "$ROOT/public/dictionary/mot_a_trouver/${n}_lettres.js" \
    "$BASE/mot_a_trouver/${n}_lettres.js"
  curl -sS -o "$ROOT/public/dictionary/verification/${n}_lettres.js" \
    "$BASE/verification/${n}_lettres.js"
  echo "OK ${n} lettres"
done
echo "Dictionnaires écrits dans public/dictionary/"
