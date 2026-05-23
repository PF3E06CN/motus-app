#!/usr/bin/env bash
# Convertit les voix Chiffres/Lettres (.wav) en .mp3 (et .m4a).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIR="$ROOT/public/sounds"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Installe ffmpeg (ex. brew install ffmpeg)" >&2
  exit 1
fi

if [[ ! -d "$DIR" ]]; then
  echo "Dossier introuvable : $DIR" >&2
  exit 1
fi

count=0
for in in "$DIR"/[0-9]*.wav; do
  [[ -f "$in" ]] || continue
  id="${in##*/}"
  id="${id%.wav}"
  [[ "$id" =~ ^[0-9]+$ ]] || continue
  ffmpeg -y -i "$in" -ac 1 -ar 44100 -c:a libmp3lame -q:a 4 "$DIR/${id}.mp3" -nostats -loglevel error
  count=$((count + 1))
done

echo "OK — $count voix cast → $DIR/{id}.mp3"
