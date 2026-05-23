#!/usr/bin/env bash
# Convertit tes exports vers des formats lus partout (Safari / iOS) :
#   - MP3 uniquement (le jeu ne charge plus .m4a ni .wav)
#   - MP3 (secours)
#   - WAV PCM mono 44.1 kHz (dernier secours)
# Prérequis : ffmpeg (brew install ffmpeg)
#
# Exemple :
#   ./scripts/convert-motus-sounds.sh \
#     --correct ../Geluiden/71.wav \
#     --wrong ../Geluiden/72.wav \
#     --missing ../Geluiden/73.wav \
#     --invalid ../Geluiden/26.wav \
#     --win ../Geluiden/31.wav

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/sounds"
mkdir -p "$OUT"

CORRECT=""
WRONG=""
MISSING=""
INVALID=""
WIN=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --correct) CORRECT="$2"; shift 2 ;;
    --wrong) WRONG="$2"; shift 2 ;;
    --missing) MISSING="$2"; shift 2 ;;
    --invalid) INVALID="$2"; shift 2 ;;
    --win) WIN="$2"; shift 2 ;;
    *) echo "Option inconnue: $1" >&2; exit 1 ;;
  esac
done

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Installe ffmpeg (ex. brew install ffmpeg)" >&2
  exit 1
fi

conv_all() {
  local in="$1"
  local base="$2"
  if [[ -z "$in" ]]; then
    echo "Fichier manquant pour $base" >&2
    return 1
  fi
  ffmpeg -y -i "$in" -ac 1 -ar 44100 -c:a libmp3lame -q:a 4 "$OUT/${base}.mp3" -nostats -loglevel error
  echo "OK → $OUT/${base}.mp3"
}

conv_all "$CORRECT" "verify-correct"
conv_all "$WRONG" "verify-wrong"
conv_all "$MISSING" "verify-missing"
conv_all "$INVALID" "word-invalid"
conv_all "$WIN" "word-win"
echo "Terminé. Le jeu charge uniquement des .mp3."
