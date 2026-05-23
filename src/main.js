import {
  announceWordGridFromTarget,
  playCastDrawNumber,
  primeCastDrawNumber,
  primeCastLetterAudio,
} from './cast-sounds.js';
import { MotusGame, AZERTY_ROWS, AZERTY_KEY_COLUMNS } from './game.js';
import {
  isIOSDevice,
  isSafariBrowser,
  primeAudioContext,
  warmVerifyAudio,
  unlockAudioSync,
  clearDecodedSoundCache,
  playErrorBuzz,
  playValidationSample,
  playVerifySequence,
  playWinFanfare,
  playSynthTestBeep,
  primeGridBallSounds,
  playGridBallRevealSound,
  playGridBallHideSound,
  playGridDrawNumberFlipSound,
  playGridBlackBallSound,
  playGridMotusLineSound,
  playHtmlAudioById,
  wirePlateauAudioElementsFromSfx,
  wireVerifyAudioElementsFromSfx,
  GAME_SFX,
} from './sounds.js';

window.__MOTUS__ = null;

/** Logo PNG transparent (`Images/motus-logo.png`). */
function initLogo() {
  const logos = document.querySelectorAll('.logo-img');
  if (!logos.length) return;
  const candidates = ['Images/motus-logo.png', 'public/Images/motus-logo.png'];
  let i = 0;
  const tryNext = () => {
    if (i >= candidates.length) return;
    const url = new URL(candidates[i], document.baseURI).href;
    const probe = new Image();
    probe.onload = () => {
      logos.forEach((logo) => {
        logo.src = url;
      });
    };
    probe.onerror = () => {
      i += 1;
      tryNext();
    };
    probe.src = url;
  };
  tryNext();
}

initLogo();

const $ = (sel) => document.querySelector(sel);

const menu = $('#menu');
const gamePanel = $('#game');
const gridEl = $('#grid');
const ballDrawEl = $('#ball-draw');
const keyboardEl = $('#keyboard');
const messageEl = $('#message');
const attemptsLabel = $('#attempts-label');
const modal = $('#modal');
const modalTitle = $('#modal-title');
const modalWord = $('#modal-word');

const overlayAide = $('#overlay-aide');
const overlaySettings = $('#overlay-settings');
const overlayCredits = $('#overlay-credits');
const overlayDebug = $('#overlay-debug');
const navOverlays = [overlayAide, overlaySettings, overlayCredits, overlayDebug];

let selectedLength = 6;
let motus = null;
/** Au chargement `false` : le panneau #menu (longueurs + Jouer) est masqué. Passe à `true` au premier « Jouer » dans la barre du haut. */
let playMenuRevealed = false;

const MENU_GENERIQUE_VOL = 0.42;

/** Lecture muette démarrée au chargement ; levée au 1er sync (geste ou nav). */
let menuGeneriqueAwaitingGestureUnmute = false;

/** Incrémenté au retour menu depuis une partie : invalide plateau / tirage en cours. */
let gameSessionEpoch = 0;
/** Dernière cible pour laquelle la voix « lettre donnée » a été jouée. */
let lastCastAnnouncedTarget = '';
/** Tirage plateau après victoire en cours (évite les courses avec render). */
let winBallDrawInFlight = false;
function shouldAbortPlateauSession(epochSnap) {
  return epochSnap != null && epochSnap !== gameSessionEpoch;
}

/** Grille de lettres visible et partie mot en cours (pas le plateau chiffres). */
function isLetterGridActive(game) {
  if (!game || !gamePanel || gamePanel.classList.contains('hidden')) return false;
  if (game.loading || game.finished || game.winBallPhase) return false;
  if (gridEl?.classList.contains('hidden')) return false;
  return true;
}

/** Saisie clavier : grille visible (la correction bloque dans typeLetter, pas via touches grisées). */
function isWordPlayInputReady(game) {
  return isLetterGridActive(game);
}

/** Codes touches physiques → lettre AZERTY (si `e.key` est vide ou incorrect). */
const AZERTY_PHYSICAL_CODE = {
  KeyQ: 'a',
  KeyW: 'z',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  KeyA: 'q',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  KeyM: 'm',
  KeySemicolon: 'm',
  KeyN: 'n',
  KeyZ: 'w',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
};

function physicalKeyToLetter(e) {
  if (e.altKey || e.ctrlKey || e.metaKey) return null;
  if (e.key && e.key.length === 1) {
    const k = e.key
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    if (/^[a-z]$/.test(k)) return k;
  }
  const fromCode = AZERTY_PHYSICAL_CODE[e.code];
  return fromCode && /^[a-z]$/.test(fromCode) ? fromCode : null;
}

function focusWordPlaySurface() {
  if (!gamePanel || gamePanel.classList.contains('hidden')) return;
  if (typeof gamePanel.focus === 'function') {
    try {
      gamePanel.focus({ preventScroll: true });
    } catch {
      gamePanel.focus();
    }
  }
}

/** Voix de la 1re lettre — repli si l’annonce auto après l’intro a été bloquée. */
function tryAnnounceCastLetterOnInput() {
  const game = motus;
  if (!game?.target || game.loading || game.winBallPhase) return;
  if (game.target === lastCastAnnouncedTarget) return;
  const target = game.target;
  void announceWordGridFromTarget(target).then((ok) => {
    if (ok && motus?.target === target) lastCastAnnouncedTarget = target;
  });
}

function scheduleCastLetterOnGesture() {
  if (!motus?.target || motus.target === lastCastAnnouncedTarget) return;
  const target = motus.target;
  const onGesture = () => {
    if (motus?.target !== target) return;
    tryAnnounceCastLetterOnInput();
  };
  gamePanel.addEventListener('pointerdown', onGesture, { once: true, passive: true });
}

function pauseMenuGenerique() {
  const el = document.getElementById('motus-snd-generique');
  if (!el || !(el instanceof HTMLAudioElement)) return;
  menuGeneriqueAwaitingGestureUnmute = false;
  try {
    el.pause();
  } catch {
    /* ignore */
  }
}

/**
 * Tente une lecture en sourdine au chargement (politique autoplay : souvent autorisée),
 * puis le son réel au premier {@link syncMenuGenerique} (remise à zéro de la piste seulement à ce passage).
 */
function tryStartMenuGeneriqueMutedAutoplay() {
  if (!gamePanel.classList.contains('hidden')) return;
  const el = document.getElementById('motus-snd-generique');
  if (!el || !(el instanceof HTMLAudioElement)) return;
  if (!el.paused && !el.muted) return;
  if (!el.paused && el.muted && menuGeneriqueAwaitingGestureUnmute) return;
  el.loop = true;
  el.volume = MENU_GENERIQUE_VOL;
  el.muted = true;
  const p = el.play();
  if (p === undefined) {
    el.muted = false;
    return;
  }
  void p
    .then(() => {
      if (!gamePanel.classList.contains('hidden')) {
        try {
          el.pause();
        } catch {
          /* ignore */
        }
        el.muted = false;
        return;
      }
      menuGeneriqueAwaitingGestureUnmute = true;
    })
    .catch(() => {
      el.muted = false;
    });
}

function scheduleInitialMenuGenerique() {
  const kick = () => {
    tryStartMenuGeneriqueMutedAutoplay();
  };
  const schedule = () => requestAnimationFrame(() => requestAnimationFrame(kick));
  if (document.readyState === 'complete') {
    schedule();
  } else {
    window.addEventListener('load', schedule, { once: true });
  }
}

/** Musique de fond : menu Jouer + overlays (Aide, etc.) ; arrêtée pendant une partie. */
function syncMenuGenerique() {
  const el = document.getElementById('motus-snd-generique');
  if (!el || !(el instanceof HTMLAudioElement)) return;
  if (!gamePanel.classList.contains('hidden')) {
    pauseMenuGenerique();
    return;
  }
  unlockAudioSync();
  if (menuGeneriqueAwaitingGestureUnmute) {
    menuGeneriqueAwaitingGestureUnmute = false;
    el.muted = false;
    try {
      el.currentTime = 0;
    } catch {
      /* ignore */
    }
  }
  el.loop = true;
  el.volume = MENU_GENERIQUE_VOL;
  el.muted = false;
  if (el.paused) {
    const p = el.play();
    if (p !== undefined) void p.catch(() => {});
  }
}

/** Retour menu depuis une partie : générique repart du début. */
function restartMenuGenerique() {
  const el = document.getElementById('motus-snd-generique');
  if (!el || !(el instanceof HTMLAudioElement)) return;
  unlockAudioSync();
  menuGeneriqueAwaitingGestureUnmute = false;
  el.loop = true;
  el.volume = MENU_GENERIQUE_VOL;
  el.muted = false;
  try {
    el.pause();
    el.currentTime = 0;
  } catch {
    /* ignore */
  }
  const p = el.play();
  if (p !== undefined) void p.catch(() => {});
}

/** Points plateau (mot trouvé / ligne Motus complète). */
const SCORE_WORD_FOUND = 50;
const SCORE_MOTUS_LINE = 100;
let sessionMotusScore = 0;

function resetSessionMotusScore() {
  sessionMotusScore = 0;
  updateMotusScoreDom();
}

function addSessionMotusScore(delta) {
  sessionMotusScore = Math.max(0, sessionMotusScore + delta);
  updateMotusScoreDom();
}

function updateMotusScoreDom() {
  const display = Math.min(sessionMotusScore, 999);
  const str = String(display).padStart(3, '0');
  for (let i = 0; i < 3; i++) {
    const el = document.getElementById(`motus-score-d${i}`);
    if (el) el.textContent = str[i] ?? '0';
  }
  const group = document.getElementById('motus-score-group');
  if (group) group.setAttribute('aria-label', `Score plateau : ${sessionMotusScore} points`);
}

function closeAllOverlays() {
  navOverlays.forEach((el) => {
    el.classList.add('hidden');
    el.setAttribute('aria-hidden', 'true');
  });
  if (!playMenuRevealed && gamePanel.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

function openOverlay(overlayEl) {
  closeAllOverlays();
  overlayEl.classList.remove('hidden');
  overlayEl.setAttribute('aria-hidden', 'false');
  updateNavHighlight();
  syncMenuGenerique();
}

function updateNavHighlight() {
  document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
  if (!overlayAide.classList.contains('hidden')) {
    $('#nav-aide').classList.add('active');
    return;
  }
  if (!overlaySettings.classList.contains('hidden')) {
    $('#nav-settings').classList.add('active');
    return;
  }
  if (!overlayCredits.classList.contains('hidden')) {
    $('#nav-credits').classList.add('active');
    return;
  }
  if (!overlayDebug.classList.contains('hidden')) {
    $('#nav-debug').classList.add('active');
    return;
  }
  if (!menu.classList.contains('hidden')) {
    $('#nav-play').classList.add('active');
    return;
  }
  if (gamePanel.classList.contains('hidden')) {
    $('#nav-play')?.classList.add('active');
  }
}

function setMenuLoading(loading) {
  const btn = document.getElementById('btn-play');
  const status = document.getElementById('menu-loading-status');
  const picker = document.getElementById('length-picker');
  if (btn) {
    btn.disabled = !!loading;
    if (loading) {
      if (btn.dataset.menuLabelBackup == null) {
        btn.dataset.menuLabelBackup = (btn.textContent || '').trim() || 'Jouer';
      }
      btn.textContent = 'Chargement…';
    } else {
      btn.textContent = btn.dataset.menuLabelBackup || 'Jouer';
      delete btn.dataset.menuLabelBackup;
    }
  }
  picker?.querySelectorAll('.length-btn').forEach((b) => {
    b.disabled = !!loading;
  });
  if (status) {
    if (loading) {
      status.textContent = 'Chargement du dictionnaire…';
      status.classList.remove('hidden');
    } else {
      status.textContent = '';
      status.classList.add('hidden');
    }
  }
}

/** Retour au menu principal (écran Jouer), comme « Menu » dans motusJS. */
function goToPlayMenu() {
  playMenuRevealed = true;
  const wasInGame = !gamePanel.classList.contains('hidden');
  const loadOnMenu = !!(motus && gamePanel.classList.contains('hidden') && motus.loading);
  if (wasInGame || loadOnMenu) gameSessionEpoch++;
  winBallDrawInFlight = false;
  lastCastAnnouncedTarget = '';
  setMenuLoading(false);
  motus = null;
  window.__MOTUS__ = null;
  closeAllOverlays();
  modal.classList.add('hidden');
  gamePanel.classList.add('hidden');
  menu.classList.remove('hidden');
  syncBodyPlayMode();
  ballDrawEl?.classList.add('hidden');
  gridEl.classList.remove('grid--ball-pending');
  gamePanel.classList.remove('game--win-ball');
  resetBallPlateauSession();
  resetWinBallDrawSlots();
  resetSessionMotusScore();
  updateNavHighlight();
  if (wasInGame) restartMenuGenerique();
  else syncMenuGenerique();
}

function refreshDebugPanel() {
  const stateEl = $('#debug-state-line');
  const wordEl = $('#debug-target-word');
  const inGame = !gamePanel.classList.contains('hidden');
  if (!inGame && motus?.loading) {
    stateEl.textContent = 'Chargement du dictionnaire depuis le menu…';
    wordEl.textContent = '—';
    return;
  }
  if (!inGame || !motus) {
    stateEl.textContent = 'Aucune partie en cours. Utilisez l’onglet « Jouer » puis le bouton orange pour lancer une partie.';
    wordEl.textContent = '—';
    return;
  }
  if (motus.loading) {
    stateEl.textContent = 'Chargement du dictionnaire…';
    wordEl.textContent = '—';
    return;
  }
  const vSize = motus.verifySet instanceof Set ? motus.verifySet.size : '?';
  stateEl.textContent = `Longueur ${motus.length} · Essai ${motus.currentRow + 1} / ${motus.maxAttempts} · Terminé : ${motus.finished ? 'oui' : 'non'} · Score : ${sessionMotusScore} · Mots vérif. (Set) : ${vSize}`;
  wordEl.textContent = motus.target || '—';
}

function initMenu() {
  wirePlateauAudioElementsFromSfx();
  wireVerifyAudioElementsFromSfx();
  const hideSfxBtn = $('#debug-snd-grid-hide');
  if (hideSfxBtn && GAME_SFX.plateauHideEight) {
    hideSfxBtn.disabled = false;
    hideSfxBtn.textContent = `Masquer 8 — ${GAME_SFX.plateauHideEight}`;
  }

  const picker = $('#length-picker');
  for (let n = 5; n <= 10; n++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'length-btn' + (n === selectedLength ? ' active' : '');
    btn.textContent = n;
    btn.dataset.length = n;
    btn.addEventListener('click', () => {
      selectedLength = n;
      picker.querySelectorAll('.length-btn').forEach((b) => {
        b.classList.toggle('active', Number(b.dataset.length) === n);
      });
    });
    picker.appendChild(btn);
  }

  $('#btn-play').addEventListener('click', async () => {
    closeAllOverlays();
    unlockAudioSync();
    /* Safari : pas de prime avec play() au Jouer (fugue verify-wrong + intro plateau). */
    if (!isIOSDevice() && !isSafariBrowser()) {
      void primeAudioContext().catch(() => {});
    }
    await startGame();
    if (motus?.target) primeCastLetterAudio(motus.target);
  });

  $('#nav-play').addEventListener('click', () => {
    goToPlayMenu();
  });
  $('#nav-aide').addEventListener('click', () => {
    openOverlay(overlayAide);
  });
  $('#nav-settings').addEventListener('click', () => {
    openOverlay(overlaySettings);
  });
  $('#nav-credits').addEventListener('click', () => {
    openOverlay(overlayCredits);
  });
  $('#nav-debug').addEventListener('click', () => {
    openOverlay(overlayDebug);
    refreshDebugPanel();
  });

  document.querySelectorAll('[data-close-overlay]').forEach((el) => {
    el.addEventListener('click', () => {
      closeAllOverlays();
      updateNavHighlight();
      syncMenuGenerique();
    });
  });

  $('#debug-refresh-state').addEventListener('click', () => refreshDebugPanel());
  $('#debug-new-word').addEventListener('click', () => {
    void motus?.start(selectedLength).then(() => refreshDebugPanel());
  });
  $('#debug-copy-target').addEventListener('click', async () => {
    const w = $('#debug-target-word').textContent?.trim();
    if (!w || w === '—') return;
    try {
      await navigator.clipboard.writeText(w);
    } catch {
      /* ignore */
    }
  });
  const debugSampleButtons = [
    ['debug-snd-sample-correct', 'correct'],
    ['debug-snd-sample-wrong', 'wrong'],
    ['debug-snd-sample-missing', 'missing'],
    ['debug-snd-sample-invalid', 'invalid'],
    ['debug-snd-sample-win', 'win'],
  ];
  for (const [id, role] of debugSampleButtons) {
    const el = document.getElementById(id);
    if (!el) continue;
    el.addEventListener('click', () => {
      unlockAudioSync();
      void playValidationSample(role).catch(() => {});
    });
  }

  $('#debug-snd-synth').addEventListener('click', () => {
    unlockAudioSync();
    void playSynthTestBeep().catch(() => {});
  });
  $('#debug-snd-prime').addEventListener('click', () => {
    unlockAudioSync();
    clearDecodedSoundCache();
    void primeAudioContext().catch(() => {});
  });
  $('#debug-snd-buzz').addEventListener('click', () => {
    unlockAudioSync();
    void playErrorBuzz().catch(() => {});
  });
  $('#debug-snd-verify').addEventListener('click', () => {
    unlockAudioSync();
    void playVerifySequence(['correct', 'wrong', 'missing'], { isWin: false }).catch(() => {});
  });
  $('#debug-snd-win').addEventListener('click', () => {
    unlockAudioSync();
    void playWinFanfare().catch(() => {});
  });

  $('#debug-snd-grid-prime').addEventListener('click', () => {
    unlockAudioSync();
    void primeGridBallSounds().catch(() => {});
  });
  $('#debug-snd-grid-reveal')?.addEventListener('click', () => {
    unlockAudioSync();
    void playGridBallRevealSound().catch(() => {});
  });
  $('#debug-snd-grid-hide')?.addEventListener('click', () => {
    unlockAudioSync();
    void playGridBallHideSound().catch(() => {});
  });
  $('#debug-snd-grid-flip')?.addEventListener('click', () => {
    unlockAudioSync();
    void playGridDrawNumberFlipSound().catch(() => {});
  });
  $('#debug-snd-grid-motus')?.addEventListener('click', () => {
    unlockAudioSync();
    void playGridMotusLineSound().catch(() => {});
  });
  $('#debug-snd-grid-black')?.addEventListener('click', () => {
    unlockAudioSync();
    void playGridBlackBallSound().catch(() => {});
  });
  $('#debug-snd-cast-letter')?.addEventListener('click', () => {
    unlockAudioSync();
    void primeAudioContext().catch(() => {});
    void playHtmlAudioById('motus-snd-cast-t');
  });
  $('#debug-snd-cast-number')?.addEventListener('click', () => {
    unlockAudioSync();
    void primeAudioContext().catch(() => {});
    void playHtmlAudioById('motus-snd-cast-23');
  });
  $('#debug-snd-cast-3')?.addEventListener('click', () => {
    unlockAudioSync();
    void primeAudioContext().catch(() => {});
    void playCastDrawNumber(3).catch(() => {});
  });
  $('#debug-snd-cast-51')?.addEventListener('click', () => {
    unlockAudioSync();
    void primeAudioContext().catch(() => {});
    void playHtmlAudioById('motus-snd-cast-51');
  });

  $('#btn-win-continue').addEventListener('click', () => {
    if (!motus || winBallDrawInFlight) return;
    unlockAudioSync();
    motus.winBallPhase = false;
    gridEl.classList.remove('grid--ball-pending');
    gamePanel.classList.remove('game--win-ball');
    resetWinBallDrawSlots();
    motus.startNextWordAfterWin();
    if (motus.target) {
      primeCastLetterAudio(motus.target);
      const target = motus.target;
      void announceWordGridFromTarget(target).then((ok) => {
        if (ok && motus?.target === target) lastCastAnnouncedTarget = target;
      });
    } else {
      lastCastAnnouncedTarget = '';
      scheduleCastLetterOnGesture();
    }
    gridEl?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });

  updateNavHighlight();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/** Grille 5×5 numérique (exemple proche des grilles diffusées à l’émission, France 2). */
const WIN_MOTUS_GRID = [
  [7, 17, 35, 49, 57],
  [11, 25, 29, 51, 59],
  [3, 19, 41, 43, 69],
  [5, 21, 33, 53, 63],
  [9, 23, 37, 45, 61],
];

function buildWinBallGridDom(el) {
  if (!el) return;
  el.innerHTML = '';
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const n = WIN_MOTUS_GRID[r][c];
      const wrap = document.createElement('div');
      wrap.className = 'ball-flip-wrap';
      wrap.dataset.num = String(n);
      wrap.dataset.cellIdx = String(r * 5 + c);
      wrap.setAttribute('role', 'gridcell');
      const inner = document.createElement('div');
      inner.className = 'ball-flip-inner';
      const hemi = document.createElement('div');
      hemi.className = 'ball-flip-face ball-flip-face--hemi';
      hemi.setAttribute('aria-hidden', 'true');
      const flat = document.createElement('div');
      flat.className = 'ball-flip-face ball-flip-face--flat';
      flat.textContent = String(n);
      inner.appendChild(hemi);
      inner.appendChild(flat);
      wrap.appendChild(inner);
      el.appendChild(wrap);
    }
  }
}

/** Lignes de la grille 5×5 (indices 0–24, ordre lecture : gauche → droite, haut → bas). */
function allGridLinesAsIndexArrays() {
  const lines = [];
  for (let r = 0; r < 5; r++) {
    lines.push([0, 1, 2, 3, 4].map((c) => r * 5 + c));
  }
  for (let c = 0; c < 5; c++) {
    lines.push([0, 1, 2, 3, 4].map((r) => r * 5 + c));
  }
  lines.push([0, 6, 12, 18, 24]);
  lines.push([4, 8, 12, 16, 20]);
  return lines;
}

/** Masque valide : 8 cases, chaque ligne / colonne / diagonale contient 1 ou 2 cases face cachée (jamais 0 ni 3+). */
function isValidHidden8Pattern(hiddenSet) {
  if (!(hiddenSet instanceof Set) || hiddenSet.size !== 8) return false;
  for (const line of allGridLinesAsIndexArrays()) {
    const n = line.filter((i) => hiddenSet.has(i)).length;
    if (n < 1 || n > 2) return false;
  }
  return true;
}

/** 8 cases tirées au sort sous contraintes type plateau TV. */
function pickHiddenCellIndices8Set() {
  for (let attempt = 0; attempt < 48000; attempt++) {
    const idx = Array.from({ length: 25 }, (_, i) => i);
    shuffleInPlace(idx);
    const hidden = new Set(idx.slice(0, 8));
    if (isValidHidden8Pattern(hidden)) return hidden;
  }
  return greedyHidden8Fallback();
}

function greedyHidden8Fallback() {
  const found = bruteForceHidden8();
  if (found) return found;
  return new Set([0, 1, 5, 7, 11, 12, 19, 23]);
}

/** Première combinaison de 8 cases valide (recherche exhaustive). */
function bruteForceHidden8() {
  let found = null;
  function search(start, acc) {
    if (found) return;
    if (acc.length === 8) {
      if (isValidHidden8Pattern(new Set(acc))) found = new Set(acc);
      return;
    }
    for (let i = start; i < 25; i++) {
      acc.push(i);
      search(i + 1, acc);
      acc.pop();
    }
  }
  search(0, []);
  return found;
}

/** Durée du retournement CSS d’une case tirée (transition `ball-flip-inner`). */
const GRID_BALL_FLIP_TURN_MS = 680;
/** Pause entre deux déclenchements du son 7 (séquence des 8 cases). */
const GRID_FLIP_AFTER_HIDE_EIGHT_MS = 180;
/** Pause entre deux déclenchements du son 6 (révélation des 25 cases). */
const GRID_FLIP_AFTER_REVEAL_SIX_MS = 100;

/** Révélation case par case (demi-sphère → face numérotée), ordre lecture TV. */
async function revealMotusGridCellsStaggered(epochSnap = null) {
  const inners = Array.from(document.querySelectorAll('#ball-motus-grid .ball-flip-inner'));
  if (!inners.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    inners.forEach((node) => node.classList.add('ball-flip-inner--revealed'));
    await playGridBallRevealSound({ awaitCompletion: true });
    if (shouldAbortPlateauSession(epochSnap)) return;
    await sleep(140);
    return;
  }
  const stepMs = 26;
  for (let i = 0; i < inners.length; i++) {
    if (shouldAbortPlateauSession(epochSnap)) return;
    await sleep(stepMs);
    inners[i].classList.add('ball-flip-inner--revealed');
    await playGridBallRevealSound();
    await sleep(GRID_FLIP_AFTER_REVEAL_SIX_MS);
  }
  if (shouldAbortPlateauSession(epochSnap)) return;
  await sleep(220);
}

/** Les 8 cases « d’office » repassent face cachée (aide candidats + contrainte type plateau TV). */
async function flipEightDesignatedCellsToHidden(epochSnap = null) {
  ensureHidden8AndUrnNumbers();
  const hidden = ballPlateauSession.hiddenCellIndices;
  if (!hidden || hidden.size !== 8) return;
  const order = [...hidden].sort((a, b) => a - b);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    await sleep(120);
  } else {
    await sleep(200);
  }
  if (shouldAbortPlateauSession(epochSnap)) return;
  for (const ci of order) {
    if (shouldAbortPlateauSession(epochSnap)) return;
    document
      .querySelector(`#ball-motus-grid .ball-flip-wrap[data-cell-idx="${ci}"]`)
      ?.querySelector('.ball-flip-inner')
      ?.classList.remove('ball-flip-inner--revealed');
    await playGridBallHideSound();
    await sleep(GRID_FLIP_AFTER_HIDE_EIGHT_MS);
  }
  if (shouldAbortPlateauSession(epochSnap)) return;
  await sleep(220);
}

const URN_BLACK_COUNT = 3;
const URN_NUMBERED_COUNT = 17;
const BALL_BLACK = 'BLACK';

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Plateau tirage Motus : inchangé entre deux mots trouvés jusqu’à un Motus (ligne / colonne / diagonale). */
const ballPlateauSession = {
  hitNumbers: new Set(),
  urnNumbers: null,
  /** Indices 0–24 des 8 cases repassées face boule après la présentation des 25 numéros. */
  hiddenCellIndices: null,
  /** Après intro : 25 numéros montrés puis 8 repassés face cachée ; tirages sur l’urne (17 + 3 noires). */
  introSequenceComplete: false,
  urnRemaining: null,
};

/**
 * @param {{ full?: boolean }} [opts] — `full: false` garde la grille déjà présentée (nouveau mot).
 */
function resetBallPlateauSession(opts = {}) {
  const full = opts.full !== false;
  ballPlateauSession.hitNumbers.clear();
  ballPlateauSession.urnRemaining = null;
  if (!full) return;
  ballPlateauSession.urnNumbers = null;
  ballPlateauSession.hiddenCellIndices = null;
  ballPlateauSession.introSequenceComplete = false;
  const host = $('#ball-motus-grid');
  if (host) host.innerHTML = '';
}

/** Remet les deux emplacements de boules tirées à l’état initial (?). */
function resetWinBallDrawSlots() {
  for (let i = 0; i < 2; i++) {
    document
      .getElementById(`win-ball-mini-${i}`)
      ?.classList.remove('win-ball-mini--shake', 'win-ball-mini--pop', 'win-ball-mini--black');
    const ch = document.getElementById(`win-ball-char-${i}`);
    if (ch) {
      ch.textContent = '?';
      ch.removeAttribute('aria-label');
    }
  }
}

/**
 * Après un Motus : nouvelle grille comme au début (nouveau masque de 8 cases, intro 25+8, urne pleine, aucun tir).
 * Le score plateau (`sessionMotusScore`) n’est pas modifié.
 */
async function reinitializePlateauAfterMotus(epochSnap = null) {
  resetBallPlateauSession({ full: true });
  resetWinBallDrawSlots();
  ensureHidden8AndUrnNumbers();
  const gridHost = $('#ball-motus-grid');
  if (!gridHost) {
    ballPlateauSession.introSequenceComplete = false;
    return;
  }
  buildWinBallGridDom(gridHost);
  ballPlateauSession.introSequenceComplete = false;
  motus?.emit();
  await runPlateauIntroSequence(epochSnap);
  if (shouldAbortPlateauSession(epochSnap)) return;
  initUrnRemainingIfNeeded();
  motus?.emit();
}

/** Verrou partagé : intro grille (6/7) une seule fois, y compris si victoire arrive pendant l’anim. */
let plateauIntroLock = false;
async function runPlateauIntroSequence(epochSnap = null) {
  await primeGridBallSounds();
  if (shouldAbortPlateauSession(epochSnap)) return;
  await revealMotusGridCellsStaggered(epochSnap);
  if (shouldAbortPlateauSession(epochSnap)) return;
  await flipEightDesignatedCellsToHidden(epochSnap);
  if (shouldAbortPlateauSession(epochSnap)) return;
  ballPlateauSession.introSequenceComplete = true;
  syncBallGridHitsToDom();
}

/** Attend ou lance la présentation 25 numéros + 8 faces cachées (sans tirage urne). */
async function ensurePlateauIntroDone(epochSnap = null) {
  if (shouldAbortPlateauSession(epochSnap)) return;
  if (ballPlateauSession.introSequenceComplete) return;
  while (plateauIntroLock) {
    if (shouldAbortPlateauSession(epochSnap)) return;
    await sleep(40);
  }
  if (shouldAbortPlateauSession(epochSnap)) return;
  if (ballPlateauSession.introSequenceComplete) return;
  plateauIntroLock = true;
  try {
    await runPlateauIntroSequence(epochSnap);
  } finally {
    plateauIntroLock = false;
    if (!shouldAbortPlateauSession(epochSnap)) {
      ballPlateauSession.introSequenceComplete = true;
    }
  }
}

/** Calcule les 8 cases masquées et les 17 numéros de l’urne (complémentaire). */
function ensureHidden8AndUrnNumbers() {
  if (ballPlateauSession.urnNumbers) return;
  const flat = WIN_MOTUS_GRID.flat();
  const hidden = pickHiddenCellIndices8Set();
  ballPlateauSession.hiddenCellIndices = hidden;
  ballPlateauSession.urnNumbers = flat.filter((_, i) => !hidden.has(i));
}

function syncBallGridHitsToDom() {
  ballPlateauSession.hitNumbers.forEach((n) => {
    const wrap = document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-num="${n}"]`);
    if (!wrap) return;
    wrap.classList.add('ball-flip-wrap--hit');
  });
}

/** Remplit l’urne (17 + 3) une fois par cycle Motus ; les tirages enlèvent des boules sans remise jusqu’au Motus ou le menu. */
function initUrnRemainingIfNeeded() {
  ensureHidden8AndUrnNumbers();
  if (ballPlateauSession.urnRemaining !== null) return;
  ballPlateauSession.urnRemaining = [
    ...ballPlateauSession.urnNumbers,
    ...Array(URN_BLACK_COUNT).fill(BALL_BLACK),
  ];
}

/** Brassage obligatoire puis une boule (sans remise dans l’urne du plateau). */
function drawOneFromPlateauUrn() {
  const urn = ballPlateauSession.urnRemaining;
  if (!urn || urn.length === 0) return BALL_BLACK;
  shuffleInPlace(urn);
  return urn.pop();
}

function hitSetContains(hitSet, num) {
  return hitSet.has(num) || hitSet.has(Number(num));
}

/**
 * Motus : une ligne, colonne ou diagonale est complète lorsque chaque case **visible**
 * (hors les 8 masquées) a déjà été tirée ; les cases face cachée comptent comme « remplies »
 * pour l’alignement (sinon 5 tirages sur une même ligne sont impossibles).
 */
function hasMotusLineFromSet(hitNumSet) {
  const hidden = ballPlateauSession.hiddenCellIndices;
  if (!(hidden instanceof Set) || hidden.size !== 8) return false;
  const flat = WIN_MOTUS_GRID.flat();

  for (const line of allGridLinesAsIndexArrays()) {
    let complete = true;
    for (const cellIdx of line) {
      if (hidden.has(cellIdx)) continue;
      const num = flat[cellIdx];
      if (!hitSetContains(hitNumSet, num)) {
        complete = false;
        break;
      }
    }
    if (complete) return true;
  }
  return false;
}

/** Indices 0–24 de la première ligne / colonne / diagonale complète. */
function findCompletedMotusLineCellIndices(hitNumSet) {
  const hidden = ballPlateauSession.hiddenCellIndices;
  if (!(hidden instanceof Set) || hidden.size !== 8) return null;
  const flat = WIN_MOTUS_GRID.flat();
  for (const line of allGridLinesAsIndexArrays()) {
    let complete = true;
    for (const cellIdx of line) {
      if (hidden.has(cellIdx)) continue;
      if (!hitSetContains(hitNumSet, flat[cellIdx])) {
        complete = false;
        break;
      }
    }
    if (complete) return line;
  }
  return null;
}

function waitFlipInnerTransition(inner) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fallbackMs = reduced ? 120 : GRID_BALL_FLIP_TURN_MS + 80;
  if (!inner) return sleep(fallbackMs);
  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    const timer = window.setTimeout(done, fallbackMs);
    inner.addEventListener(
      'transitionend',
      (ev) => {
        if (ev.target !== inner || ev.propertyName !== 'transform') return;
        window.clearTimeout(timer);
        done();
      },
      { once: true },
    );
  });
}

const MOTUS_LINE_LETTERS = ['M', 'O', 'T', 'U', 'S'];

/** Retourne la ligne Motus case par case en affichant M O T U S (en parallèle du son 51). */
async function playMotusLineLettersFlipSequence(epochSnap) {
  const line = findCompletedMotusLineCellIndices(ballPlateauSession.hitNumbers);
  if (!line?.length) {
    await sleep(200);
    return;
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stepBetween = reduced ? 90 : 220;

  for (let i = 0; i < line.length && i < MOTUS_LINE_LETTERS.length; i++) {
    if (shouldAbortPlateauSession(epochSnap)) return;
    const cellIdx = line[i];
    const letter = MOTUS_LINE_LETTERS[i];
    const wrap = document.querySelector(
      `#ball-motus-grid .ball-flip-wrap[data-cell-idx="${cellIdx}"]`,
    );
    if (!wrap) continue;

    const inner = wrap.querySelector('.ball-flip-inner');
    const flatFace = wrap.querySelector('.ball-flip-face--flat');
    if (!inner || !flatFace) continue;

    flatFace.textContent = letter;
    flatFace.setAttribute('aria-label', `Lettre ${letter}`);
    wrap.classList.add('ball-flip-wrap--motus-letter');

    inner.classList.remove('ball-flip-inner--revealed');
    void inner.offsetWidth;
    inner.classList.add('ball-flip-inner--revealed');
    await waitFlipInnerTransition(inner);
    if (shouldAbortPlateauSession(epochSnap)) return;
    await sleep(stepBetween);
  }
  if (shouldAbortPlateauSession(epochSnap)) return;
  await sleep(reduced ? 100 : 280);
}

async function animateWinBall(slotIndex, value, epochSnap = null) {
  const mini = document.getElementById(`win-ball-mini-${slotIndex}`);
  const char = document.getElementById(`win-ball-char-${slotIndex}`);
  if (!mini || !char) return;
  const isBlack = value === BALL_BLACK;
  if (!isBlack && value != null) primeCastDrawNumber(value);
  mini.classList.remove('win-ball-mini--pop', 'win-ball-mini--black');
  char.textContent = '?';
  char.removeAttribute('aria-label');
  mini.classList.add('win-ball-mini--shake');
  await sleep(720);
  if (shouldAbortPlateauSession(epochSnap)) return;
  mini.classList.remove('win-ball-mini--shake');
  if (isBlack) {
    mini.classList.add('win-ball-mini--black');
    char.textContent = '●';
    char.setAttribute('aria-label', 'Boule noire');
    unlockAudioSync();
    void playGridBlackBallSound().catch(() => {});
    mini.classList.add('win-ball-mini--pop');
    await sleep(450);
    if (shouldAbortPlateauSession(epochSnap)) return;
    mini.classList.remove('win-ball-mini--pop');
  } else {
    unlockAudioSync();
    char.textContent = String(value);
    char.setAttribute('aria-label', `Numéro ${value}`);
    mini.classList.add('win-ball-mini--pop');
    await playCastDrawNumber(value).catch(() => {});
    if (shouldAbortPlateauSession(epochSnap)) return;
    mini.classList.remove('win-ball-mini--pop');

    const wrap = document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-num="${value}"]`);
    const inner = wrap?.querySelector('.ball-flip-inner');
    if (wrap && inner) {
      inner.classList.remove('ball-flip-inner--revealed');
      void inner.offsetWidth;
      await playGridDrawNumberFlipSound({ awaitCompletion: true }).catch(() => {});
      if (shouldAbortPlateauSession(epochSnap)) return;
      await waitFlipInnerTransition(inner);
      if (shouldAbortPlateauSession(epochSnap)) return;
      wrap.classList.add('ball-flip-wrap--hit');
    }
    const n = typeof value === 'number' ? value : Number(value);
    if (Number.isFinite(n)) ballPlateauSession.hitNumbers.add(n);
  }
  await sleep(180);
}

async function runWinBallMotus(epochSnap) {
  await sleep(200);
  if (shouldAbortPlateauSession(epochSnap)) return;

  const gridHost = $('#ball-motus-grid');
  if (gridHost && !gridHost.querySelector('.ball-flip-wrap')) {
    buildWinBallGridDom(gridHost);
    syncBallGridHitsToDom();
  }

  if (!ballPlateauSession.introSequenceComplete) {
    await ensurePlateauIntroDone(epochSnap);
    if (shouldAbortPlateauSession(epochSnap)) return;
    await sleep(280);
    if (shouldAbortPlateauSession(epochSnap)) return;
  }

  initUrnRemainingIfNeeded();
  motus?.emit();

  const draw0 = drawOneFromPlateauUrn();
  await animateWinBall(0, draw0, epochSnap);
  if (shouldAbortPlateauSession(epochSnap)) return;
  motus?.emit();

  let draw1 = null;
  const motusAfterFirst = hasMotusLineFromSet(ballPlateauSession.hitNumbers);
  /** Après une boule noire ou un Motus : pas de second tirage. */
  if (!motusAfterFirst && draw0 !== BALL_BLACK) {
    await sleep(320);
    if (shouldAbortPlateauSession(epochSnap)) return;
    draw1 = drawOneFromPlateauUrn();
    await animateWinBall(1, draw1, epochSnap);
    if (shouldAbortPlateauSession(epochSnap)) return;
    motus?.emit();
  }

  const motusLine = hasMotusLineFromSet(ballPlateauSession.hitNumbers);

  if (motusLine) {
    addSessionMotusScore(SCORE_MOTUS_LINE);
    unlockAudioSync();
    const motusSoundPromise = playGridMotusLineSound().catch(() => {});
    await Promise.all([
      playMotusLineLettersFlipSequence(epochSnap),
      motusSoundPromise,
    ]);
    if (shouldAbortPlateauSession(epochSnap)) return;
    await reinitializePlateauAfterMotus(epochSnap);
    if (shouldAbortPlateauSession(epochSnap)) return;
    motus?.emit();
    return;
  }
}

async function startGame() {
  closeAllOverlays();
  setMenuLoading(true);
  try {
    resetSessionMotusScore();
    resetBallPlateauSession();
    const game = new MotusGame({
      onUpdate: render,
      onEnd: showEndModal,
    });
    motus = game;
    messageEl.textContent = 'Chargement du dictionnaire…';
    try {
      await game.start(selectedLength);
    } catch {
      /* dictionnaire / réseau */
    }
    if (motus !== game) return;
    if (game.target) primeCastLetterAudio(game.target);

    menu.classList.add('hidden');
    gamePanel.classList.remove('hidden');
    updateNavHighlight();
    requestAnimationFrame(() => {
      if (!gamePanel.classList.contains('hidden')) pauseMenuGenerique();
    });
    window.__MOTUS__ = game;
    lastCastAnnouncedTarget = '';

    const epochSnap = gameSessionEpoch;
    game.message = 'Présentation du plateau Motus…';
    game.emit();

    const gridHost = $('#ball-motus-grid');
    if (gridHost) {
      buildWinBallGridDom(gridHost);
      syncBallGridHitsToDom();
    }
    try {
      await ensurePlateauIntroDone(epochSnap);
    } finally {
      if (motus === game) {
        if (!ballPlateauSession.introSequenceComplete) {
          ballPlateauSession.introSequenceComplete = true;
        }
        game.message = '';
        game.emit();
      }
    }

    if (motus !== game) return;

    primeCastLetterAudio(game.target);
    lastCastAnnouncedTarget = '';
    void announceWordGridFromTarget(game.target).then((ok) => {
      if (ok && motus === game) lastCastAnnouncedTarget = game.target;
    });
    scheduleCastLetterOnGesture();
    if (isSafariBrowser()) {
      void warmVerifyAudio();
    }
  } finally {
    setMenuLoading(false);
  }
}

function showEndModal(payload) {
  if (payload.won) {
    addSessionMotusScore(SCORE_WORD_FOUND);
    const epochSnap = gameSessionEpoch;
    const gameRef = motus;
    if (winBallDrawInFlight) return;
    winBallDrawInFlight = true;
    if (motus === gameRef) gameRef.emit();
    void runWinBallMotus(epochSnap)
      .catch(() => {})
      .finally(() => {
        winBallDrawInFlight = false;
        if (motus === gameRef && gameRef?.winBallPhase) gameRef.emit();
      });
    return;
  }
  modal.classList.remove('hidden');
  modalTitle.textContent = 'Motus !';
  modalWord.textContent = `Le mot était : ${payload.word}`;
}

const mobileKeyboardMq = () =>
  window.matchMedia('(max-width: 520px), (hover: none) and (pointer: coarse)');

/** Force le recalcul layout de la zone clavier (iPhone, après rendu / rotation). */
function syncMobileKeyboardLayout() {
  const zone = document.querySelector('.keyboard-zone');
  if (!zone || !document.body.classList.contains('game-in-play') || !mobileKeyboardMq().matches) {
    return;
  }
  if (zone.classList.contains('hidden') || zone.hidden) return;
  if (zone.clientHeight < 48) {
    requestAnimationFrame(syncMobileKeyboardLayout);
  }
}

function syncBodyPlayMode() {
  const inGame = !!(gamePanel && !gamePanel.classList.contains('hidden'));
  document.body.classList.toggle('game-in-play', inGame);
  const compactLogo = document.querySelector('.game-top-logo');
  if (compactLogo) compactLogo.setAttribute('aria-hidden', inGame ? 'false' : 'true');
  requestAnimationFrame(() => {
    requestAnimationFrame(syncMobileKeyboardLayout);
  });
}

let keyboardLayoutObserver;
function ensureKeyboardLayoutObserver() {
  const zone = document.querySelector('.keyboard-zone');
  if (!zone || keyboardLayoutObserver) return;
  keyboardLayoutObserver = new ResizeObserver(() => syncMobileKeyboardLayout());
  keyboardLayoutObserver.observe(zone);
  window.addEventListener('resize', syncMobileKeyboardLayout, { passive: true });
  window.visualViewport?.addEventListener('resize', syncMobileKeyboardLayout, { passive: true });
}

function syncGameLayoutVars(game) {
  if (!gamePanel || !game) return;
  gamePanel.style.setProperty('--word-len', String(game.length));
  gamePanel.style.setProperty('--grid-rows', String(game.maxAttempts));
  gridEl?.style.setProperty('--cols', String(game.length));
  gridEl?.style.setProperty('--rows', String(game.maxAttempts));
}

/** Pendant la validation Safari : ne reconstruit pas toute la grille (évite le son hachuré). */
function patchVerifyRevealRow(game) {
  if (!gridEl || !game?.verifyAnimating) return false;
  const ri = game.currentRow;
  const row = game.rows[ri];
  if (!row) return false;
  const cols = game.length;
  const needed = cols * game.maxAttempts;
  if (gridEl.children.length < needed) return false;

  if (attemptsLabel) {
    attemptsLabel.textContent = `Essai ${Math.min(game.currentRow + 1, game.maxAttempts)} / ${game.maxAttempts}`;
  }

  for (let ci = 0; ci < cols; ci++) {
    const cell = gridEl.children[ri * cols + ci];
    if (!(cell instanceof HTMLElement)) return false;
    const state = row.states[ci];
    const letter = row.letters[ci];
    cell.className = 'cell';
    cell.setAttribute('role', 'gridcell');
    if (state !== 'empty') cell.classList.add(state);
    if (state === 'locked' || state === 'given') cell.classList.add('correct', 'given');
    if (state === 'typed' || state === 'pending') cell.classList.add('pending');
    cell.classList.remove('editable', 'cursor');
    cell.removeAttribute('aria-current');
    let span = cell.querySelector('.cell-char');
    if (!span) {
      span = document.createElement('span');
      span.className = 'cell-char';
      cell.appendChild(span);
    }
    const showDot = ri <= game.currentRow && !letter && state === 'empty';
    span.textContent = letter || (showDot ? '·' : '');
  }
  return true;
}

function render(game) {
  if (motus !== game) return;
  syncBodyPlayMode();
  syncGameLayoutVars(game);
  if (game.loading) {
    messageEl.textContent = 'Chargement du dictionnaire…';
    gridEl.innerHTML = '<p class="loading">Chargement…</p>';
    ballDrawEl?.classList.add('hidden');
    gridEl.classList.add('hidden');
    keyboardEl?.classList.add('hidden');
    document.querySelector('.game-actions')?.classList.add('hidden');
    gridEl.classList.remove('grid--ball-pending');
    gamePanel.classList.remove('game--win-ball');
    return;
  }

  const inDrawPhase = !!(game.winBallPhase && game.finished);
  const inWordPlay = !game.loading && !game.winBallPhase;
  const plateauIntroPending =
    !ballPlateauSession.introSequenceComplete && (inWordPlay || inDrawPhase);
  /** Grille chiffres (intro plateau ou tirage après victoire). */
  const showBallGrid = plateauIntroPending || inDrawPhase;
  /** Grille lettres : uniquement pendant la saisie du mot, jamais en même temps que les chiffres. */
  const showLetterGrid =
    !showBallGrid && inWordPlay && ballPlateauSession.introSequenceComplete;

  if (ballDrawEl) {
    ballDrawEl.classList.toggle('hidden', !showBallGrid);
    const gridHost = $('#ball-motus-grid');
    if (showBallGrid && gridHost && !gridHost.querySelector('.ball-flip-wrap')) {
      buildWinBallGridDom(gridHost);
      syncBallGridHitsToDom();
    }
    const slots = ballDrawEl.querySelector('.win-ball-slots');
    const cont = $('#btn-win-continue');
    slots?.classList.toggle('hidden', !inDrawPhase);
    cont?.classList.toggle('hidden', !inDrawPhase);
    if (cont) {
      cont.disabled = inDrawPhase && winBallDrawInFlight;
      cont.setAttribute('aria-busy', cont.disabled ? 'true' : 'false');
    }
  }

  const hideLetterUi = !showLetterGrid;
  if (gridEl) {
    gridEl.classList.toggle('hidden', hideLetterUi);
    gridEl.hidden = hideLetterUi;
  }
  gridEl?.classList.remove('grid--ball-pending');
  gamePanel.classList.toggle('game--win-ball', inDrawPhase);
  gamePanel.classList.toggle('game--plateau-intro', showBallGrid);
  const keyboardZone = document.querySelector('.keyboard-zone');
  if (keyboardZone) {
    keyboardZone.classList.toggle('hidden', hideLetterUi);
    keyboardZone.hidden = hideLetterUi;
  }
  if (keyboardEl) {
    keyboardEl.classList.toggle('hidden', hideLetterUi);
    keyboardEl.hidden = hideLetterUi;
  }
  const gameActions = document.querySelector('.game-actions');
  if (gameActions) {
    gameActions.classList.toggle('hidden', hideLetterUi);
    gameActions.hidden = hideLetterUi;
  }
  if (attemptsLabel) {
    attemptsLabel.classList.toggle('hidden', hideLetterUi);
    attemptsLabel.hidden = hideLetterUi;
  }

  messageEl.textContent =
    game.winBallPhase && game.finished ? '' : game.message || '';

  if (!showLetterGrid) {
    gridEl.innerHTML = '';
    return;
  }

  focusWordPlaySurface();
  attemptsLabel.textContent = `Essai ${Math.min(game.currentRow + 1, game.maxAttempts)} / ${game.maxAttempts}`;

  if (game.verifyAnimating && patchVerifyRevealRow(game)) {
    return;
  }

  gridEl.innerHTML = '';

  game.rows.forEach((row, ri) => {
    for (let ci = 0; ci < game.length; ci++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.setAttribute('role', 'gridcell');
      const state = row.states[ci];
      const letter = row.letters[ci];
      if (state !== 'empty') cell.classList.add(state);
      if (state === 'locked' || state === 'given') cell.classList.add('correct', 'given');
      if (state === 'typed' || state === 'pending') cell.classList.add('pending');
      const isCurrent = ri === game.currentRow;
      if (isCurrent && game.isLetterEditable(ci)) {
        if (!game.winBallPhase) {
          cell.classList.add('editable');
          cell.addEventListener('click', () => game.setCursor(ci));
        }
        if (ci === game.nextTypeCol) {
          cell.classList.add('cursor');
          cell.setAttribute('aria-current', 'true');
        }
      }
      const showDot = ri <= game.currentRow && !letter && state === 'empty';
      const span = document.createElement('span');
      span.className = 'cell-char';
      span.textContent = letter || (showDot ? '·' : '');
      cell.appendChild(span);
      gridEl.appendChild(cell);
    }
  });

  const letterActive = isLetterGridActive(game);
  const inputReady = isWordPlayInputReady(game);
  renderKeyboard(game, inputReady);
  const sub = $('#btn-submit');
  const del = $('#btn-delete');
  const nb = $('#btn-new');
  if (sub) sub.disabled = !letterActive || game.inputLocked;
  if (del) del.disabled = !inputReady || game.inputLocked;
  if (nb) nb.disabled = !!(game.winBallPhase && game.finished);
  if (overlayDebug && !overlayDebug.classList.contains('hidden')) {
    refreshDebugPanel();
  }
  requestAnimationFrame(syncMobileKeyboardLayout);
}

function renderKeyboard(game, letterUiReady = true) {
  const actionsEl = keyboardEl.querySelector('.game-actions');
  keyboardEl.querySelectorAll('.kb-row').forEach((row) => row.remove());
  AZERTY_ROWS.forEach((row, rowIndex) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';
    const cols = AZERTY_KEY_COLUMNS[rowIndex];
    for (let i = 0; i < row.length; i++) {
      const ch = row[i];
      const key = document.createElement('button');
      key.type = 'button';
      key.className = 'key';
      key.setAttribute('lang', 'fr');
      if (cols?.[i] != null) {
        key.style.gridColumn = String(cols[i]);
        key.style.gridRow = String(rowIndex + 1);
      }
      key.textContent = ch;
      if (game.absentLetters.has(ch)) key.classList.add('absent');
      const canType = letterUiReady;
      if (canType) {
        key.addEventListener('click', () => {
          unlockAudioSync();
          tryAnnounceCastLetterOnInput();
          game.typeLetter(ch);
          focusWordPlaySurface();
        });
      } else {
        key.disabled = true;
      }
      rowEl.appendChild(key);
    }
    if (actionsEl) keyboardEl.insertBefore(rowEl, actionsEl);
    else keyboardEl.appendChild(rowEl);
  });
}

function bindControls() {
  $('#btn-menu').addEventListener('click', () => {
    goToPlayMenu();
  });

  $('#btn-new').addEventListener('click', () => {
    resetSessionMotusScore();
    resetBallPlateauSession({ full: false });
    lastCastAnnouncedTarget = '';
    void motus?.start(selectedLength).then(() => {
      if (motus?.target) {
        primeCastLetterAudio(motus.target);
        scheduleCastLetterOnGesture();
      }
    });
  });
  $('#btn-submit').addEventListener('click', () => {
    if (!motus || !isLetterGridActive(motus)) return;
    unlockAudioSync();
    if (!isSafariBrowser()) {
      void primeAudioContext().catch(() => {});
    }
    void motus.submit().then(() => focusWordPlaySurface());
  });
  $('#btn-delete').addEventListener('click', () => motus?.deleteLetter());
  gamePanel.addEventListener(
    'pointerdown',
    () => {
      unlockAudioSync();
    },
    { passive: true },
  );
  $('#btn-modal-close').addEventListener('click', () => {
    modal.classList.add('hidden');
    void startGame();
  });

  window.addEventListener(
    'keydown',
    (e) => {
      const anyOverlayOpen = navOverlays.some((o) => !o.classList.contains('hidden'));
      if (e.key === 'Escape') {
        if (anyOverlayOpen) {
          e.preventDefault();
          closeAllOverlays();
          updateNavHighlight();
          syncMenuGenerique();
          return;
        }
      }
      if (anyOverlayOpen) return;
      if (!motus || gamePanel.classList.contains('hidden')) return;
      if (motus.winBallPhase) return;
      if (!isLetterGridActive(motus)) return;

      if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        e.preventDefault();
        unlockAudioSync();
        void motus.submit().then(() => focusWordPlaySurface());
        return;
      }

      if (!isLetterGridActive(motus)) return;
      if (motus.inputLocked) return;

      if (e.key === 'Backspace') {
        e.preventDefault();
        motus.deleteLetter();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        motus.moveCursor(-1);
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        motus.moveCursor(1);
        return;
      }

      const letter = physicalKeyToLetter(e);
      if (letter) {
        e.preventDefault();
        unlockAudioSync();
        tryAnnounceCastLetterOnInput();
        motus.typeLetter(letter);
      }
    },
    true,
  );
}

let lastMenuAudioUiAt = 0;

function bindMenuGeneriqueListener() {
  const onUserActivateAudio = () => {
    if (!gamePanel.classList.contains('hidden')) {
      pauseMenuGenerique();
      return;
    }
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    if (now - lastMenuAudioUiAt < 40) return;
    lastMenuAudioUiAt = now;
    unlockAudioSync();
    const gen = document.getElementById('motus-snd-generique');
    if (gen instanceof HTMLAudioElement && gen.paused && !isIOSDevice() && !isSafariBrowser()) {
      void primeAudioContext().catch(() => {});
    }
    syncMenuGenerique();
  };
  for (const type of ['pointerdown', 'touchstart', 'click']) {
    document.addEventListener(type, onUserActivateAudio, { capture: true, passive: true });
  }
}

initMenu();
if (gamePanel && !gamePanel.hasAttribute('tabindex')) {
  gamePanel.setAttribute('tabindex', '-1');
}
bindControls();
bindMenuGeneriqueListener();
scheduleInitialMenuGenerique();
ensureKeyboardLayoutObserver();
