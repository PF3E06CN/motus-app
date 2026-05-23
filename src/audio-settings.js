/** Préférences audio persistées (localStorage). */

const STORAGE_KEY = 'motus-audio-settings';

let voicesMuted = false;
let musicMuted = false;
let sfxMuted = false;

export function loadAudioSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const o = JSON.parse(raw);
    voicesMuted = !!o.voicesMuted;
    musicMuted = !!o.musicMuted;
    sfxMuted = !!o.sfxMuted;
  } catch {
    /* ignore */
  }
}

function persistAudioSettings() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ voicesMuted, musicMuted, sfxMuted }),
    );
  } catch {
    /* ignore */
  }
}

export function getAudioSettings() {
  return { voicesMuted, musicMuted, sfxMuted };
}

export function setAudioSettings({ voicesMuted: v, musicMuted: m, sfxMuted: s } = {}) {
  if (v !== undefined) voicesMuted = !!v;
  if (m !== undefined) musicMuted = !!m;
  if (s !== undefined) sfxMuted = !!s;
  persistAudioSettings();
}

export function isVoicesEnabled() {
  return !voicesMuted;
}

export function isMusicEnabled() {
  return !musicMuted;
}

export function isSfxEnabled() {
  return !sfxMuted;
}
