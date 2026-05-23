#!/usr/bin/env bash
# Convertit les effets plateau (fichiers sources .wav nommés) en .mp3.
# Noms attendus (habillage, pas 1–70 voix) : Tirrage-Chiffre, Retournement-Chiffre, Motus, BouleNoire
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/sounds"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Installe ffmpeg (brew install ffmpeg)" >&2
  exit 1
fi

convert() {
  local base="$1"
  local in="$OUT/${base}.wav"
  [[ -f "$in" ]] || return 0
  ffmpeg -y -i "$in" -ac 1 -ar 44100 -c:a libmp3lame -q:a 4 "$OUT/${base}.mp3" -nostats -loglevel error
  echo "OK → $OUT/${base}.mp3"
}

for base in Tirrage-Chiffre Retournement-Chiffre Motus BouleNoire; do
  convert "$base"
done

echo "Terminé. Le jeu charge uniquement des .mp3 pour les effets plateau."
