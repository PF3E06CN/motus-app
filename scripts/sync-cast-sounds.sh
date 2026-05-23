#!/usr/bin/env bash
# Copie / convertit les voix cast depuis Geluiden vers public/sounds/
# Chiffres → {Name}.mp3 uniquement (1.mp3 … 70.mp3), lettres → {lettre}.mp3
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/sounds"
GELUIDEN="${GELUIDEN_DIR:-$HOME/Library/Mobile Documents/com~apple~CloudDocs/Motus/DirectorCastRipper_D10/Exports/Geluiden}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Installe ffmpeg (brew install ffmpeg)" >&2
  exit 1
fi
if [[ ! -d "$GELUIDEN" ]]; then
  echo "Dossier Geluiden introuvable : $GELUIDEN" >&2
  exit 1
fi

to_mp3() {
  local in="$1" out="$2"
  [[ -f "$in" ]] || return 1
  ffmpeg -y -i "$in" -ac 1 -ar 44100 -c:a libmp3lame -q:a 4 "$out" -nostats -loglevel error
}

count=0
for pair in \
  "189:1" "190:10" "191:11" "192:12" "193:13" "194:14" "195:15" "196:16" "197:17" \
  "198:18" "199:19" "200:2" "201:20" "202:21" "203:22" "204:23" "205:24" "206:25" \
  "207:26" "208:27" "209:28" "210:29" "211:3" "212:30" "213:31" "214:32" "215:33" \
  "216:34" "217:35" "218:36" "219:37" "220:38" "221:39" "222:4" "223:40" "224:41" \
  "225:42" "226:43" "227:44" "228:45" "229:46" "230:47" "231:48" "232:49" "233:5" \
  "234:50" "235:51" "236:52" "237:53" "238:54" "239:55" "240:56" "241:57" "242:58" \
  "243:59" "244:6" "245:60" "246:61" "247:62" "248:63" "249:64" "250:65" "251:66" \
  "252:67" "253:68" "254:69" "255:7" "256:70" "257:8" "258:9"
do
  member="${pair%%:*}"
  name="${pair#*:}"
  src="$GELUIDEN/${name}.wav"
  [[ -f "$src" ]] || src="$GELUIDEN/${member}.wav"
  if to_mp3 "$src" "$OUT/${name}.mp3"; then
    count=$((count + 1))
  else
    echo "Manquant : $name (membre $member)" >&2
  fi
done

i=0
for c in {a..z}; do
  member=$((271 + i))
  src="$GELUIDEN/${member}.wav"
  if to_mp3 "$src" "$OUT/${c}.mp3"; then
    count=$((count + 1))
  else
    echo "Manquant : lettre $c (membre $member)" >&2
  fi
  i=$((i + 1))
done

echo "OK — $count voix cast → $OUT (ex. 23.mp3, t.mp3 ; effets plateau = noms dédiés Motus.mp3, etc.)"
