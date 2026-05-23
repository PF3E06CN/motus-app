/**
 * Voix cast — `public/sounds/{chiffre}.mp3` (1–70) et `{lettre}.mp3` (a–z) uniquement.
 * Les effets plateau (Motus, retournement, boule noire…) ont des noms dédiés dans sounds.js.
 */

import {
  playCastVoiceBasenames,
  primeCastVoiceBasenames,
  unlockAudioSync,
} from './sounds.js';

const LETTER_SET = new Set('abcdefghijklmnopqrstuvwxyz'.split(''));

function numberCastBasenames(n) {
  const num = Math.round(Number(n));
  if (num >= 1 && num <= 70) return [String(num)];
  return [];
}

function letterCastBasenames(ch) {
  const c = String(ch)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .slice(0, 1);
  if (!LETTER_SET.has(c)) return [];
  return [c];
}

/** Précharge la voix de la 1re lettre (clic « Jouer » / pendant l’intro plateau). */
export function primeCastLetterAudio(target) {
  if (!target || typeof target !== 'string') return;
  const basenames = letterCastBasenames(target[0]);
  if (!basenames.length) return;
  primeCastVoiceBasenames(basenames);
}

/** Précharge la voix d’un numéro tiré (pendant l’animation de boule). */
export function primeCastDrawNumber(n) {
  const basenames = numberCastBasenames(n);
  if (!basenames.length) return;
  primeCastVoiceBasenames(basenames);
}

/** Annonce voix du numéro tiré (1–70), lecture jusqu’au bout. */
export function playCastDrawNumber(n) {
  const basenames = numberCastBasenames(n);
  if (!basenames.length) return Promise.resolve(false);
  unlockAudioSync();
  return playCastVoiceBasenames(basenames);
}

/** 1re lettre d’un nouveau mot — promesse résolue quand la piste est terminée (ou échec). */
export function announceCastLetterNow(target) {
  return announceWordGridFromTarget(target);
}

/** Même chose, promesse (après intro plateau, etc.). */
export function announceWordGridFromTarget(target) {
  if (!target || typeof target !== 'string') return Promise.resolve(false);
  const basenames = letterCastBasenames(target[0]);
  if (!basenames.length) return Promise.resolve(false);
  unlockAudioSync();
  return playCastVoiceBasenames(basenames);
}
