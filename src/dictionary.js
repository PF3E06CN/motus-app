import { FALLBACK } from './words-fallback.js';

const cache = { targets: {}, verify: {} };

/**
 * URL d’un fichier dictionnaire sous `public/dictionary/` (offline, servi avec l’app).
 * @param {string} relative ex. `mot_a_trouver/6_lettres.js`
 */
function dictHref(relative) {
  const baseHref =
    (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || './';
  const path = `dictionary/${relative}`;
  try {
    const base = new URL(baseHref, window.location.href);
    return new URL(path, base).href;
  } catch {
    return `${baseHref}${path}`.replace(/([^:]\/)\/+/g, '$1');
  }
}

function parseWordList(jsText) {
  const start = jsText.indexOf('[');
  const end = jsText.lastIndexOf(']');
  if (start === -1 || end === -1) return [];
  return JSON.parse(jsText.slice(start, end + 1));
}

async function loadDictFile(folder, length) {
  const url = dictHref(`${folder}/${length}_lettres.js`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fichier dictionnaire introuvable (${length} lettres)`);
  const text = await res.text();
  return parseWordList(text).map((w) => w.toUpperCase());
}

export async function loadDictionaries(length) {
  if (cache.targets[length] && cache.verify[length]) {
    return { targets: cache.targets[length], verify: cache.verify[length] };
  }
  try {
    const [targetList, verifyList] = await Promise.all([
      loadDictFile('mot_a_trouver', length),
      loadDictFile('verification', length),
    ]);
    cache.targets[length] = targetList;
    cache.verify[length] = new Set(verifyList);
    return { targets: targetList, verify: cache.verify[length] };
  } catch (err) {
    console.warn('Dictionnaire embarqué indisponible — jeu de secours', err);
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
