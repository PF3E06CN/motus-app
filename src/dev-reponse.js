function shouldWriteReponseFile() {
  if (typeof location === 'undefined') return false;
  const h = location.hostname;
  if (h === 'localhost' || h === '127.0.0.1' || h === '[::1]') return true;
  return import.meta.env?.DEV === true;
}

/** En local : écrit le mot dans le fichier `reponse` (serveur Vite ou `python3 dev_server.py`). */
export function writeReponseFile(word) {
  if (!shouldWriteReponseFile()) return;
  const url = new URL('/__motus__/reponse', location.origin);
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    body: word,
  }).catch((err) => {
    console.warn('[motus-reponse] Impossible d’écrire le fichier (lancez ./start.sh ou npm run dev)', err);
  });
}
