import { FALLBACK } from './words-fallback.js';

const TARGET_URL =
  'https://raw.githubusercontent.com/difabiolorenzo/motusJS/master/src/js/dictionary/mot_a_trouver';
const VERIFY_URL =
  'https://raw.githubusercontent.com/difabiolorenzo/motusJS/master/src/js/dictionary/verification';

const cache = { targets: {}, verify: {} };

function parseWordList(jsText) {
  const start = jsText.indexOf('[');
  const end = jsText.lastIndexOf(']');
  if (start === -1 || end === -1) return [];
  return JSON.parse(jsText.slice(start, end + 1));
}

async function fetchDict(url, length) {
  const res = await fetch(`${url}/${length}_lettres.js`);
  if (!res.ok) throw new Error(`Dictionnaire ${length} lettres indisponible`);
  const text = await res.text();
  return parseWordList(text).map((w) => w.toUpperCase());
}

async function loadRemote(length) {
  if (cache.targets[length] && cache.verify[length]) {
    return { targets: cache.targets[length], verify: cache.verify[length] };
  }
  const [targetList, verifyList] = await Promise.all([
    fetchDict(TARGET_URL, length),
    fetchDict(VERIFY_URL, length),
  ]);
  cache.targets[length] = targetList;
  cache.verify[length] = new Set(verifyList);
  return { targets: targetList, verify: cache.verify[length] };
}

export async function loadDictionaries(length) {
  try {
    return await loadRemote(length);
  } catch (err) {
    console.warn('Dictionnaire distant indisponible — mode local', err);
    const fb = FALLBACK[length];
    if (!fb) throw err;
    return { targets: fb.targets, verify: fb.verify };
  }
}

export function pickRandomWord(targets) {
  return targets[Math.floor(Math.random() * targets.length)];
}

export function isValidWord(word, verifySet) {
  return verifySet.has(word.toUpperCase());
}
