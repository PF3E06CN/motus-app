import {
  announceWordGridFromTarget,
  playCastDrawNumber,
  primeCastDrawNumber,
  primeCastLetterAudio,
} from './cast-sounds.js';
import {
  getAudioSettings,
  isMusicEnabled,
  loadAudioSettings,
  setAudioSettings,
} from './audio-settings.js';
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
const ballDrawTitleEl = $('#ball-draw-title');
const attemptsLabel = $('#attempts-label');
const wordProgressEl = $('#word-progress');
const turnTimerEl = $('#turn-timer');
const motusScoresEl = $('#motus-scores');
const modal = $('#modal');
const modalTitle = $('#modal-title');
const modalWord = $('#modal-word');

const overlayAide = $('#overlay-aide');
const overlaySettings = $('#overlay-settings');
const overlayCredits = $('#overlay-credits');
const overlayDebug = $('#overlay-debug');
const navOverlays = [overlayAide, overlaySettings, overlayCredits, overlayDebug];

let selectedLength = 6;
/** @type {'solo' | 'team'} */
let playMode = 'solo';
let teamPlayerCount = 2;
/** @type {'replace-bonus' | 'replace' | 'add-bonus' | 'add'} */
let teamErrorBehavior = 'add-bonus';
let turnTimerEnabled = false;
let turnTimerSeconds = 8;
/** 0 = illimité (comportement « mot suivant » sans fin de partie automatique). */
let wordsPerSession = 0;
let sessionWordsCompleted = 0;
let sessionWordsWon = 0;
let sessionWordsLost = 0;
let motus = null;
/** `false` au chargement : #menu masqué jusqu’au clic sur « Jouer ». */
let playMenuRevealed = false;
const MENU_SETUP_STEP_COUNT = 4;
let menuSetupStep = 1;

const MENU_GENERIQUE_VOL = 0.42;

/** Lecture muette démarrée au chargement ; levée au 1er sync (geste ou nav). */
let menuGeneriqueAwaitingGestureUnmute = false;

/** Incrémenté au retour menu depuis une partie : invalide plateau / tirage en cours. */
let gameSessionEpoch = 0;
/** Dernière cible pour laquelle la voix « lettre donnée » a été jouée. */
let lastCastAnnouncedTarget = '';
/** Tirage plateau après victoire en cours (évite les courses avec render). */
let winBallDrawInFlight = false;
/** Équipe dont la grille est présentée au démarrage (-1 = hors séquence d’intro). */
let openingPlateauTeamIndex = -1;
let turnTimerIntervalId = null;
let turnTimerDeadline = 0;
let turnTimerToken = 0;
let turnTimerLastKey = '';
let turnTimerHandling = false;
/** Chrono en pause tant que la voix de la 1ʳᵉ lettre n’a pas fini. */
let turnTimerCastBlocked = false;
let turnTimerCastBlockToken = 0;

function shouldAbortPlateauSession(epochSnap) {
  return epochSnap != null && epochSnap !== gameSessionEpoch;
}

function ballDrawTitleForTeam(teamIndex) {
  if (motus?.teamMode && motus.teamSize > 1) {
    return `Grille Motus équipe ${teamIndex + 1}`;
  }
  return 'Grille Motus';
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

/** Bloque le chrono jusqu’à la fin de la promesse (voix 1ʳᵉ lettre). */
function blockTurnTimerForCast(promise) {
  if (!promise) return;
  turnTimerCastBlocked = true;
  stopTurnTimer();
  const token = ++turnTimerCastBlockToken;
  void Promise.resolve(promise).finally(() => {
    if (token !== turnTimerCastBlockToken) return;
    turnTimerCastBlocked = false;
    if (motus) syncTurnTimer(motus);
  });
}

/** Annonce la 1ʳᵉ lettre ; le chrono attend la fin du son. */
function announceCastLetterForTarget(target) {
  if (!target) return Promise.resolve(false);
  const p = announceWordGridFromTarget(target).then((ok) => {
    if (ok && motus?.target === target) lastCastAnnouncedTarget = target;
    return ok;
  });
  blockTurnTimerForCast(p);
  return p;
}

/** Voix de la 1re lettre — repli si l’annonce auto après l’intro a été bloquée. */
function tryAnnounceCastLetterOnInput() {
  const game = motus;
  if (!game?.target || game.loading || game.winBallPhase) return;
  if (game.target === lastCastAnnouncedTarget) return;
  void announceCastLetterForTarget(game.target);
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

function syncAudioSettingsToDom() {
  const s = getAudioSettings();
  const voicesEl = $('#audio-mute-voices');
  const musicEl = $('#audio-mute-music');
  const sfxEl = $('#audio-mute-sfx');
  if (voicesEl) voicesEl.checked = s.voicesMuted;
  if (musicEl) musicEl.checked = s.musicMuted;
  if (sfxEl) sfxEl.checked = s.sfxMuted;
}

function readAudioSettingsFromDom() {
  setAudioSettings({
    voicesMuted: $('#audio-mute-voices')?.checked ?? false,
    musicMuted: $('#audio-mute-music')?.checked ?? false,
    sfxMuted: $('#audio-mute-sfx')?.checked ?? false,
  });
  applyMusicSetting();
}

function applyMusicSetting() {
  const el = document.getElementById('motus-snd-generique');
  if (!isMusicEnabled()) {
    pauseMenuGenerique();
    if (el instanceof HTMLAudioElement) el.muted = true;
    return;
  }
  if (el instanceof HTMLAudioElement) el.muted = false;
  if (gamePanel.classList.contains('hidden')) syncMenuGenerique();
}

/**
 * Tente une lecture en sourdine au chargement (politique autoplay : souvent autorisée),
 * puis le son réel au premier {@link syncMenuGenerique} (remise à zéro de la piste seulement à ce passage).
 */
function tryStartMenuGeneriqueMutedAutoplay() {
  if (!isMusicEnabled()) return;
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
  if (!isMusicEnabled()) {
    pauseMenuGenerique();
    el.muted = true;
    return;
  }
  el.muted = false;
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
  if (!isMusicEnabled()) {
    pauseMenuGenerique();
    el.muted = true;
    return;
  }
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
const SCORE_WORD_FOUND_LAST = 100;
const SCORE_MOTUS_LINE = 100;
/** @type {number[]} */
let teamScores = [0];

function resetSessionMotusScore(teamCount = 1) {
  teamScores = Array.from({ length: teamCount }, () => 0);
  ensureTeamScoreDom(teamCount);
  updateMotusScoreDom();
}

function addSessionMotusScore(delta, teamIndex = 0) {
  if (!teamScores[teamIndex]) teamScores[teamIndex] = 0;
  teamScores[teamIndex] = Math.max(0, teamScores[teamIndex] + delta);
  updateMotusScoreDom();
}

function ensureTeamScoreDom(teamCount) {
  if (!motusScoresEl) return;
  const isTeam = teamCount > 1;
  motusScoresEl.classList.toggle('motus-scores--team', isTeam);
  if (!isTeam) {
    motusScoresEl.innerHTML = `
      <div id="motus-score-group" class="motus-score motus-score--solo" role="group" aria-label="Score plateau : 0 points">
        <span class="motus-score-label">Pts</span>
        <div class="motus-score-cells">
          <span class="motus-score-cell" id="motus-score-d0">0</span>
          <span class="motus-score-cell" id="motus-score-d1">0</span>
          <span class="motus-score-cell" id="motus-score-d2">0</span>
        </div>
      </div>`;
    return;
  }
  motusScoresEl.innerHTML = '';
  motusScoresEl.classList.add('motus-scores--team');
  for (let t = 0; t < teamCount; t++) {
    const group = document.createElement('div');
    group.id = `motus-score-group-${t}`;
    group.className = 'motus-score motus-score--team';
    group.setAttribute('role', 'group');
    group.innerHTML = `
      <span class="motus-score-team-name">Éq. ${t + 1}</span>
      <div class="motus-score-cells">
        <span class="motus-score-cell" id="motus-score-t${t}-d0">0</span>
        <span class="motus-score-cell" id="motus-score-t${t}-d1">0</span>
        <span class="motus-score-cell" id="motus-score-t${t}-d2">0</span>
      </div>`;
    motusScoresEl.appendChild(group);
  }
}

function updateMotusScoreDom() {
  const isTeam = motus?.teamMode && motus.teamSize > 1;
  const count = isTeam ? motus.teamSize : 1;
  if (isTeam && motusScoresEl && !document.getElementById('motus-score-group-0')) {
    ensureTeamScoreDom(count);
  }
  const highlightTeam =
    openingPlateauTeamIndex >= 0
      ? openingPlateauTeamIndex
      : motus?.currentTeamIndex ?? 0;
  for (let t = 0; t < count; t++) {
    const score = teamScores[t] ?? 0;
    const display = Math.min(score, 999);
    const str = String(display).padStart(3, '0');
    for (let i = 0; i < 3; i++) {
      const el = document.getElementById(
        isTeam ? `motus-score-t${t}-d${i}` : `motus-score-d${i}`
      );
      if (el) el.textContent = str[i] ?? '0';
    }
    const group = document.getElementById(isTeam ? `motus-score-group-${t}` : 'motus-score-group');
    if (group) {
      const active = isTeam && t === highlightTeam;
      group.classList.toggle('motus-score--active', active);
      const name = `Équipe ${t + 1}`;
      group.setAttribute(
        'aria-label',
        active ? `${name} — à vous · ${score} points` : `${name} · ${score} points`
      );
    }
  }
}

function syncMenuSetupWizard() {
  if (!menu) return;
  menu.querySelectorAll('[data-setup-step]').forEach((el) => {
    const step = Number(el.dataset.setupStep);
    const show = step === menuSetupStep;
    el.classList.toggle('menu-card--wizard-hidden', !show);
    el.hidden = !show;
  });

  const lead = $('#menu-setup-lead');
  if (lead) lead.textContent = `Étape ${menuSetupStep} sur ${MENU_SETUP_STEP_COUNT}`;

  const progress = menu.querySelector('.menu-setup-progress');
  if (progress) {
    progress.setAttribute('aria-valuenow', String(menuSetupStep));
    progress.setAttribute(
      'aria-label',
      `Étape ${menuSetupStep} sur ${MENU_SETUP_STEP_COUNT}`,
    );
  }
  menu.querySelectorAll('[data-step-dot]').forEach((dot) => {
    const n = Number(dot.dataset.stepDot);
    dot.classList.toggle('is-active', n === menuSetupStep);
    dot.classList.toggle('is-done', n < menuSetupStep);
  });

  const prev = $('#menu-setup-prev');
  const next = $('#menu-setup-next');
  const launch = $('#btn-play');
  const rules = $('#menu-setup-rules');
  prev?.classList.toggle('hidden', menuSetupStep <= 1);
  next?.classList.toggle('hidden', menuSetupStep >= MENU_SETUP_STEP_COUNT);
  launch?.classList.toggle('hidden', menuSetupStep < MENU_SETUP_STEP_COUNT);
  rules?.classList.toggle('hidden', menuSetupStep < MENU_SETUP_STEP_COUNT);
  rules?.classList.toggle('menu-setup-rules--wizard-hidden', menuSetupStep < MENU_SETUP_STEP_COUNT);
}

function resetMenuSetupWizard() {
  menuSetupStep = 1;
  syncMenuSetupWizard();
}

function menuSetupWizardNext() {
  if (menuSetupStep >= MENU_SETUP_STEP_COUNT) return;
  menuSetupStep += 1;
  syncMenuSetupWizard();
}

function menuSetupWizardPrev() {
  if (menuSetupStep <= 1) return;
  menuSetupStep -= 1;
  syncMenuSetupWizard();
}

function syncPlayMenuVisibility() {
  if (!menu) return;
  const showMenu = playMenuRevealed && gamePanel.classList.contains('hidden');
  menu.classList.toggle('hidden', !showMenu);
}

function closeAllOverlays() {
  navOverlays.forEach((el) => {
    el.classList.add('hidden');
    el.setAttribute('aria-hidden', 'true');
  });
  syncPlayMenuVisibility();
}

function openOverlay(overlayEl) {
  closeAllOverlays();
  menu.classList.add('hidden');
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
        btn.dataset.menuLabelBackup = (btn.textContent || '').trim() || 'Lancer la partie';
      }
      btn.textContent = 'Chargement…';
    } else {
      btn.textContent = btn.dataset.menuLabelBackup || 'Lancer la partie';
      delete btn.dataset.menuLabelBackup;
    }
  }
  picker?.querySelectorAll('.length-btn').forEach((b) => {
    b.disabled = !!loading;
  });
  document.querySelectorAll('.mode-btn, .team-size-btn').forEach((b) => {
    b.disabled = !!loading;
  });
  $('#menu-setup-prev')?.toggleAttribute('disabled', !!loading);
  $('#menu-setup-next')?.toggleAttribute('disabled', !!loading);
  const teamErrorSelect = $('#team-error-behavior');
  if (teamErrorSelect) teamErrorSelect.disabled = !!loading;
  const turnTimerCheckbox = $('#turn-timer-enabled');
  const turnTimerSelect = $('#turn-timer-seconds');
  if (turnTimerCheckbox) turnTimerCheckbox.disabled = !!loading;
  if (turnTimerSelect) turnTimerSelect.disabled = !!loading || !turnTimerEnabled;
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
  openingPlateauTeamIndex = -1;
  stopTurnTimer();
  turnTimerCastBlockToken++;
  turnTimerCastBlocked = false;
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
  resetSessionWordStats();
  resetModalCloseButtonLabel();
  modal.classList.add('hidden');
  updateMotusScoreDom();
  updateNavHighlight();
  if (wasInGame) restartMenuGenerique();
  else syncMenuGenerique();
  resetMenuSetupWizard();
  syncPlayMenuVisibility();
}

function getTeamPlayOptions() {
  return {
    teamMode: playMode === 'team',
    teamSize: teamPlayerCount,
    teamOnErrorBehavior: teamErrorBehavior,
  };
}

function getPlayOptions() {
  return {
    ...getTeamPlayOptions(),
    turnTimerEnabled,
    turnTimerSeconds,
  };
}

function syncWordsPerSessionMenuField() {
  const sel = $('#words-per-session');
  if (sel) wordsPerSession = Number(sel.value);
  if (!Number.isFinite(wordsPerSession) || wordsPerSession < 0) wordsPerSession = 0;
}

function resetSessionWordStats() {
  sessionWordsCompleted = 0;
  sessionWordsWon = 0;
  sessionWordsLost = 0;
}

function hasMoreWordsInSession() {
  if (wordsPerSession <= 0) return true;
  return sessionWordsCompleted < wordsPerSession;
}

/** Dernier mot du quota (avant {@link recordSessionWordEnded}). */
function isLastWordOfSession() {
  if (wordsPerSession <= 0) return false;
  return sessionWordsCompleted >= wordsPerSession - 1;
}

function getSessionTeamCount() {
  return motus?.teamMode && motus.teamSize > 1 ? motus.teamSize : 1;
}

function getMaxOpponentScore(excludeTeamIndex) {
  let max = 0;
  const n = getSessionTeamCount();
  for (let t = 0; t < n; t++) {
    if (t === excludeTeamIndex) continue;
    max = Math.max(max, teamScores[t] ?? 0);
  }
  return max;
}

function getWordFoundScoreForSession() {
  return isLastWordOfSession() ? SCORE_WORD_FOUND_LAST : SCORE_WORD_FOUND;
}

function getMotusLineScoreForSession() {
  return SCORE_MOTUS_LINE;
}

/** Encore en course pour la victoire uniquement grâce à une ligne Motus au tirage. */
function needsMotusDrawToWin(teamIndex) {
  if (!motus?.teamMode || motus.teamSize < 2) return false;
  const score = teamScores[teamIndex] ?? 0;
  const maxOther = getMaxOpponentScore(teamIndex);
  if (score > maxOther) return false;
  return score + getMotusLineScoreForSession() > maxOther;
}

/** Une ligne Motus peut encore se compléter avec les boules restantes dans l’urne. */
function couldMotusLineCompleteWithDraws(teamIndex, maxNewHits = 2) {
  const session = plateauSession(teamIndex);
  const hidden = session.hiddenCellIndices;
  const hitSet = session.hitNumbers;
  if (!(hidden instanceof Set) || hidden.size !== 8) return false;
  initUrnRemainingIfNeeded(teamIndex);
  const urn = session.urnRemaining;
  if (!Array.isArray(urn) || urn.length === 0) return false;

  const flat = WIN_MOTUS_GRID.flat();
  const drawableNums = new Set(urn.filter((v) => v !== BALL_BLACK));

  for (const line of allGridLinesAsIndexArrays()) {
    const missing = [];
    for (const cellIdx of line) {
      if (hidden.has(cellIdx)) continue;
      const num = flat[cellIdx];
      if (!hitSetContains(hitSet, num)) missing.push(num);
    }
    if (missing.length === 0 || missing.length > maxNewHits) continue;
    if (missing.every((n) => drawableNums.has(n))) return true;
  }
  return false;
}

/** Dernier mot : tirage plateau seulement si un Motus peut faire gagner la partie. */
function shouldAllowLastWordWinDraw(teamIndex) {
  if (!isLastWordOfSession()) return true;
  if (!motus?.teamMode || motus.teamSize < 2) return true;
  if (!needsMotusDrawToWin(teamIndex)) return false;
  const session = plateauSession(teamIndex);
  if (hasMotusLineFromSet(session.hitNumbers, teamIndex)) return true;
  return couldMotusLineCompleteWithDraws(teamIndex);
}

function computeSessionWinnerResult() {
  const n = getSessionTeamCount();
  const scores = [];
  for (let t = 0; t < n; t++) scores.push(teamScores[t] ?? 0);
  const max = scores.length ? Math.max(...scores) : 0;
  const winners = [];
  for (let t = 0; t < n; t++) {
    if (scores[t] === max) winners.push(t);
  }
  return { scores, max, winners };
}

function formatSessionPointsAndWinner() {
  const { scores, max, winners } = computeSessionWinnerResult();
  if (scores.length <= 1) {
    return `Score final : ${scores[0] ?? 0} points.`;
  }
  const recap = scores
    .map((s, i) => `Éq. ${i + 1} : ${s} pt${s !== 1 ? 's' : ''}`)
    .join(' · ');
  if (winners.length === 1) {
    return `${recap} — Victoire de l’équipe ${winners[0] + 1} (${max} points) !`;
  }
  return `${recap} — Égalité entre les équipes ${winners.map((i) => i + 1).join(' et ')} (${max} points).`;
}

function finishSessionAfterLastWordWithoutDraw() {
  if (motus) {
    motus.winBallPhase = false;
    motus.emit();
  }
  winBallDrawInFlight = false;
  gamePanel?.classList.remove('game--win-ball');
  showSessionCompleteModal();
}

function recordSessionWordEnded(won) {
  sessionWordsCompleted++;
  if (won) sessionWordsWon++;
  else sessionWordsLost++;
}

function resetModalCloseButtonLabel() {
  const btn = $('#btn-modal-close');
  if (btn) btn.textContent = 'Continuer';
}

function showSessionCompleteModal(lastWord = '') {
  modal.dataset.action = 'session-end';
  modal.classList.remove('hidden');
  const total = wordsPerSession > 0 ? wordsPerSession : sessionWordsCompleted;
  modalTitle.textContent = 'Partie terminée';
  const w = sessionWordsWon;
  const l = sessionWordsLost;
  let text = `${w} mot${w !== 1 ? 's' : ''} trouvé${w !== 1 ? 's' : ''}, ${l} non trouvé${l !== 1 ? 's' : ''} — ${total} joué${total !== 1 ? 's' : ''}.`;
  if (lastWord) text = `Le mot était : ${lastWord}. ${text}`;
  text = `${text} ${formatSessionPointsAndWinner()}`;
  modalWord.textContent = text;
  const btn = $('#btn-modal-close');
  if (btn) btn.textContent = 'Retour au menu';
}

function updateWordProgressDom() {
  if (!wordProgressEl) return;
  if (wordsPerSession <= 0) {
    wordProgressEl.classList.add('hidden');
    wordProgressEl.textContent = '';
    return;
  }
  const current = Math.min(sessionWordsCompleted + 1, wordsPerSession);
  wordProgressEl.textContent = `Mot ${current} / ${wordsPerSession}`;
  wordProgressEl.classList.remove('hidden');
}

async function continueSessionNextWord() {
  if (!motus) return;
  stopTurnTimer();
  unlockAudioSync();
  motus.winBallPhase = false;
  gridEl?.classList.remove('grid--ball-pending');
  gamePanel.classList.remove('game--win-ball');
  resetWinBallDrawSlots();
  motus.startNextWordAfterWin();
  lastCastAnnouncedTarget = '';
  if (motus.target) {
    primeCastLetterAudio(motus.target);
    void announceCastLetterForTarget(motus.target);
  } else {
    scheduleCastLetterOnGesture();
  }
  updateWordProgressDom();
  motus.emit();
  gridEl?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function syncTurnTimerMenuFields() {
  const enabledInput = $('#turn-timer-enabled');
  const secSelect = $('#turn-timer-seconds');
  if (enabledInput) turnTimerEnabled = enabledInput.checked;
  if (secSelect) {
    secSelect.disabled = !turnTimerEnabled;
    turnTimerSeconds = Number(secSelect.value) || 8;
  }
}

function shouldRunTurnTimer(game) {
  if (!game?.turnTimerEnabled) return false;
  if (turnTimerCastBlocked) return false;
  if (game.bonusRevealCol >= 0 || game.bonusRevealBlinking) return false;
  if (!isLetterGridActive(game) || game.inputLocked || game.verifyAnimating) return false;
  if (openingPlateauTeamIndex >= 0) return false;
  return true;
}

function turnTimerKey(game) {
  return `${gameSessionEpoch}:${game.currentTeamIndex}:${game.currentRow}`;
}

function updateTurnTimerDom(secondsLeft) {
  if (!turnTimerEl) return;
  if (secondsLeft == null || secondsLeft <= 0) {
    turnTimerEl.classList.add('hidden');
    turnTimerEl.textContent = '';
    turnTimerEl.classList.remove('turn-timer--urgent');
    return;
  }
  turnTimerEl.classList.remove('hidden');
  turnTimerEl.textContent = `${secondsLeft}s`;
  turnTimerEl.classList.toggle('turn-timer--urgent', secondsLeft <= 3);
}

function stopTurnTimer() {
  turnTimerToken++;
  turnTimerLastKey = '';
  if (turnTimerIntervalId != null) {
    clearInterval(turnTimerIntervalId);
    turnTimerIntervalId = null;
  }
  turnTimerDeadline = 0;
  updateTurnTimerDom(null);
}

function syncTurnTimer(game) {
  if (!shouldRunTurnTimer(game)) {
    stopTurnTimer();
    return;
  }
  const key = turnTimerKey(game);
  if (key === turnTimerLastKey && turnTimerIntervalId != null) {
    const left = Math.ceil((turnTimerDeadline - Date.now()) / 1000);
    updateTurnTimerDom(Math.max(0, left));
    return;
  }
  turnTimerLastKey = key;
  turnTimerToken++;
  const token = turnTimerToken;
  const sec = Math.max(8, Math.min(30, game.turnTimerSeconds || 8));
  turnTimerDeadline = Date.now() + sec * 1000;
  updateTurnTimerDom(sec);
  if (turnTimerIntervalId != null) clearInterval(turnTimerIntervalId);
  turnTimerIntervalId = setInterval(() => {
    if (token !== turnTimerToken || motus !== game) return;
    const left = Math.ceil((turnTimerDeadline - Date.now()) / 1000);
    if (left <= 0) {
      stopTurnTimer();
      if (motus === game && shouldRunTurnTimer(game) && !turnTimerHandling) {
        turnTimerHandling = true;
        void Promise.resolve(game.handleTurnTimeout()).finally(() => {
          turnTimerHandling = false;
          if (motus === game) syncTurnTimer(game);
        });
      }
      return;
    }
    updateTurnTimerDom(left);
  }, 250);
}

function syncTeamOptionsVisibility() {
  const wrap = $('#team-options');
  const isTeam = playMode === 'team';
  wrap?.classList.toggle('hidden', !isTeam);
  if (wrap) wrap.setAttribute('aria-hidden', isTeam ? 'false' : 'true');
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
  const teamInfo = motus.teamMode ? ` · ${motus.getCurrentTeamName()} / ${motus.teamSize} équipes` : '';
  const scoreTxt = motus.teamMode
    ? teamScores.map((s, i) => `Éq.${i + 1}:${s ?? 0}`).join(' ')
    : String(teamScores[0] ?? 0);
  stateEl.textContent = `Longueur ${motus.length} · Essai ${motus.currentRow + 1} / ${motus.maxAttempts}${teamInfo} · Terminé : ${motus.finished ? 'oui' : 'non'} · Score : ${scoreTxt} · Mots vérif. (Set) : ${vSize}`;
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

  const modePicker = $('#mode-picker');
  modePicker?.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      playMode = btn.dataset.mode === 'team' ? 'team' : 'solo';
      modePicker.querySelectorAll('.mode-btn').forEach((b) => {
        const active = b.dataset.mode === playMode;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      syncTeamOptionsVisibility();
    });
  });
  syncTeamOptionsVisibility();

  const teamPicker = $('#team-size-picker');
  for (let n = 2; n <= 4; n++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'team-size-btn length-btn' + (n === teamPlayerCount ? ' active' : '');
    btn.textContent = String(n);
    btn.dataset.teamSize = String(n);
    btn.setAttribute('aria-pressed', n === teamPlayerCount ? 'true' : 'false');
    btn.addEventListener('click', () => {
      teamPlayerCount = n;
      teamPicker.querySelectorAll('.team-size-btn').forEach((b) => {
        const active = Number(b.dataset.teamSize) === n;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    });
    teamPicker.appendChild(btn);
  }

  const teamErrorSelect = $('#team-error-behavior');
  if (teamErrorSelect) {
    teamErrorSelect.value = teamErrorBehavior;
    teamErrorSelect.addEventListener('change', () => {
      const v = teamErrorSelect.value;
      const legacy = { 'relay-bonus': 'add-bonus', relay: 'add', stay: 'replace' };
      const normalized = legacy[v] ?? v;
      if (
        normalized === 'replace-bonus' ||
        normalized === 'replace' ||
        normalized === 'add-bonus' ||
        normalized === 'add'
      ) {
        teamErrorBehavior = normalized;
        if (normalized !== v) teamErrorSelect.value = normalized;
      }
    });
  }

  const turnTimerCheckbox = $('#turn-timer-enabled');
  const turnTimerSelect = $('#turn-timer-seconds');
  if (turnTimerCheckbox) {
    turnTimerCheckbox.checked = turnTimerEnabled;
    turnTimerCheckbox.addEventListener('change', syncTurnTimerMenuFields);
  }
  if (turnTimerSelect) {
    turnTimerSelect.value = String(turnTimerSeconds);
    turnTimerSelect.addEventListener('change', () => {
      syncTurnTimerMenuFields();
    });
  }
  syncTurnTimerMenuFields();

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
  $('#menu-setup-prev')?.addEventListener('click', menuSetupWizardPrev);
  $('#menu-setup-next')?.addEventListener('click', menuSetupWizardNext);
  const openRulesFromPlay = () => openOverlay(overlayAide);
  $('#menu-setup-rules')?.addEventListener('click', openRulesFromPlay);
  resetMenuSetupWizard();
  $('#nav-aide').addEventListener('click', () => {
    openOverlay(overlayAide);
  });
  $('#nav-settings').addEventListener('click', () => {
    syncAudioSettingsToDom();
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
    void motus?.start(selectedLength, getPlayOptions()).then(() => refreshDebugPanel());
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
    if (!hasMoreWordsInSession()) {
      showSessionCompleteModal();
      return;
    }
    void continueSessionNextWord();
  });

  const wordsPerSessionSelect = $('#words-per-session');
  if (wordsPerSessionSelect) {
    wordsPerSessionSelect.addEventListener('change', syncWordsPerSessionMenuField);
    syncWordsPerSessionMenuField();
  }

  for (const id of ['audio-mute-voices', 'audio-mute-music', 'audio-mute-sfx']) {
    $(`#${id}`)?.addEventListener('change', readAudioSettingsFromDom);
  }

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
async function flipEightDesignatedCellsToHidden(epochSnap = null, teamIndex = activeTeamIndex()) {
  ensureHidden8AndUrnNumbers(teamIndex);
  const hidden = plateauSession(teamIndex).hiddenCellIndices;
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

function createPlateauSession() {
  return {
    hitNumbers: new Set(),
    urnNumbers: null,
    hiddenCellIndices: null,
    introSequenceComplete: false,
    urnRemaining: null,
  };
}

/** Un plateau de chiffres par équipe (solo = une seule entrée). */
let plateauSessions = [createPlateauSession()];

function activeTeamIndex() {
  return motus?.teamMode ? motus.currentTeamIndex : 0;
}

function plateauSession(teamIndex = activeTeamIndex()) {
  if (!plateauSessions[teamIndex]) {
    plateauSessions[teamIndex] = createPlateauSession();
  }
  return plateauSessions[teamIndex];
}

function initPlateauSessionsForGame(teamCount) {
  plateauSessions = Array.from({ length: teamCount }, () => createPlateauSession());
}

/**
 * @param {{ full?: boolean, teamIndex?: number }} [opts]
 * — `full: false` garde la grille déjà présentée (nouveau mot).
 */
function resetBallPlateauSession(opts = {}) {
  const full = opts.full !== false;
  const indices =
    opts.teamIndex != null
      ? [opts.teamIndex]
      : plateauSessions.map((_, i) => i);
  for (const ti of indices) {
    const session = plateauSession(ti);
    session.hitNumbers.clear();
    session.urnRemaining = null;
    if (!full) continue;
    session.urnNumbers = null;
    session.hiddenCellIndices = null;
    session.introSequenceComplete = false;
  }
  if (full && opts.teamIndex == null) {
    const host = $('#ball-motus-grid');
    if (host) host.innerHTML = '';
  }
}

function mountPlateauGridForTeam(teamIndex) {
  const session = plateauSession(teamIndex);
  ensureHidden8AndUrnNumbers(teamIndex);
  const host = $('#ball-motus-grid');
  if (!host) return;
  host.innerHTML = '';
  buildWinBallGridDom(host);
  if (!session.introSequenceComplete) return;
  host.querySelectorAll('.ball-flip-inner').forEach((el) => {
    el.classList.add('ball-flip-inner--revealed');
  });
  const hidden = session.hiddenCellIndices;
  if (hidden) {
    for (const ci of hidden) {
      host
        .querySelector(`[data-cell-idx="${ci}"]`)
        ?.querySelector('.ball-flip-inner')
        ?.classList.remove('ball-flip-inner--revealed');
    }
  }
  syncBallGridHitsToDom(teamIndex);
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
async function reinitializePlateauAfterMotus(epochSnap = null, teamIndex = activeTeamIndex()) {
  resetBallPlateauSession({ full: true, teamIndex });
  resetWinBallDrawSlots();
  ensureHidden8AndUrnNumbers(teamIndex);
  const gridHost = $('#ball-motus-grid');
  if (!gridHost) {
    plateauSession(teamIndex).introSequenceComplete = false;
    return;
  }
  mountPlateauGridForTeam(teamIndex);
  plateauSession(teamIndex).introSequenceComplete = false;
  motus?.emit();
  await runPlateauIntroSequence(epochSnap, teamIndex);
  if (shouldAbortPlateauSession(epochSnap)) return;
  initUrnRemainingIfNeeded(teamIndex);
  motus?.emit();
}

/** Verrou partagé : intro grille (6/7) une seule fois, y compris si victoire arrive pendant l’anim. */
let plateauIntroLock = false;
async function runPlateauIntroSequence(epochSnap = null, teamIndex = activeTeamIndex()) {
  mountPlateauGridForTeam(teamIndex);
  await primeGridBallSounds();
  if (shouldAbortPlateauSession(epochSnap)) return;
  await revealMotusGridCellsStaggered(epochSnap);
  if (shouldAbortPlateauSession(epochSnap)) return;
  await flipEightDesignatedCellsToHidden(epochSnap, teamIndex);
  if (shouldAbortPlateauSession(epochSnap)) return;
  plateauSession(teamIndex).introSequenceComplete = true;
  syncBallGridHitsToDom(teamIndex);
}

/** Attend ou lance la présentation 25 numéros + 8 faces cachées (sans tirage urne). */
/** Présente le plateau 25+8 de chaque équipe à la suite avant la 1ʳᵉ saisie. */
async function ensureOpeningPlateausPresented(epochSnap, teamCount, game) {
  const count = Math.max(1, teamCount);
  for (let t = 0; t < count; t++) {
    if (shouldAbortPlateauSession(epochSnap)) return;
    openingPlateauTeamIndex = t;
    game.emit();
    await ensurePlateauIntroDone(epochSnap, t);
    if (shouldAbortPlateauSession(epochSnap)) return;
    if (t < count - 1) await sleep(400);
  }
}

async function ensurePlateauIntroDone(epochSnap = null, teamIndex = activeTeamIndex()) {
  if (shouldAbortPlateauSession(epochSnap)) return;
  if (plateauSession(teamIndex).introSequenceComplete) return;
  while (plateauIntroLock) {
    if (shouldAbortPlateauSession(epochSnap)) return;
    await sleep(40);
  }
  if (shouldAbortPlateauSession(epochSnap)) return;
  if (plateauSession(teamIndex).introSequenceComplete) return;
  plateauIntroLock = true;
  try {
    await runPlateauIntroSequence(epochSnap, teamIndex);
  } finally {
    plateauIntroLock = false;
    if (!shouldAbortPlateauSession(epochSnap)) {
      plateauSession(teamIndex).introSequenceComplete = true;
    }
  }
}

/** Calcule les 8 cases masquées et les 17 numéros de l’urne (complémentaire). */
function ensureHidden8AndUrnNumbers(teamIndex = activeTeamIndex()) {
  const session = plateauSession(teamIndex);
  if (session.urnNumbers) return;
  const flat = WIN_MOTUS_GRID.flat();
  const hidden = pickHiddenCellIndices8Set();
  session.hiddenCellIndices = hidden;
  session.urnNumbers = flat.filter((_, i) => !hidden.has(i));
}

function syncBallGridHitsToDom(teamIndex = activeTeamIndex()) {
  plateauSession(teamIndex).hitNumbers.forEach((n) => {
    const wrap = document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-num="${n}"]`);
    if (!wrap) return;
    wrap.classList.add('ball-flip-wrap--hit');
  });
}

/** Remplit l’urne (17 + 3) une fois par cycle Motus ; les tirages enlèvent des boules sans remise jusqu’au Motus ou le menu. */
function initUrnRemainingIfNeeded(teamIndex = activeTeamIndex()) {
  ensureHidden8AndUrnNumbers(teamIndex);
  const session = plateauSession(teamIndex);
  if (session.urnRemaining !== null) return;
  session.urnRemaining = [...session.urnNumbers, ...Array(URN_BLACK_COUNT).fill(BALL_BLACK)];
}

/** Brassage obligatoire puis une boule (sans remise dans l’urne du plateau). */
function drawOneFromPlateauUrn(teamIndex = activeTeamIndex()) {
  const urn = plateauSession(teamIndex).urnRemaining;
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
function hasMotusLineFromSet(hitNumSet, teamIndex = activeTeamIndex()) {
  const hidden = plateauSession(teamIndex).hiddenCellIndices;
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
function findCompletedMotusLineCellIndices(hitNumSet, teamIndex = activeTeamIndex()) {
  const hidden = plateauSession(teamIndex).hiddenCellIndices;
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
async function playMotusLineLettersFlipSequence(epochSnap, teamIndex = activeTeamIndex()) {
  const session = plateauSession(teamIndex);
  const line = findCompletedMotusLineCellIndices(session.hitNumbers, teamIndex);
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

async function animateWinBall(slotIndex, value, epochSnap = null, teamIndex = activeTeamIndex()) {
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
    if (Number.isFinite(n)) plateauSession(teamIndex).hitNumbers.add(n);
  }
  await sleep(180);
}

/** Boule noire au tirage : l’équipe suivante prend la main (mode équipe). */
function passHandToNextTeamAfterBlackBall() {
  if (!motus?.teamMode || motus.teamSize < 2) return;
  motus.advanceTeam();
  motus.emit();
}

async function runWinBallMotus(epochSnap, teamIndex = activeTeamIndex()) {
  await sleep(200);
  if (shouldAbortPlateauSession(epochSnap)) return;

  mountPlateauGridForTeam(teamIndex);

  if (!plateauSession(teamIndex).introSequenceComplete) {
    await ensurePlateauIntroDone(epochSnap, teamIndex);
    if (shouldAbortPlateauSession(epochSnap)) return;
    await sleep(280);
    if (shouldAbortPlateauSession(epochSnap)) return;
  }

  initUrnRemainingIfNeeded(teamIndex);
  motus?.emit();

  const session = plateauSession(teamIndex);
  const draw0 = drawOneFromPlateauUrn(teamIndex);
  await animateWinBall(0, draw0, epochSnap, teamIndex);
  if (shouldAbortPlateauSession(epochSnap)) return;
  if (draw0 === BALL_BLACK) passHandToNextTeamAfterBlackBall();
  else motus?.emit();

  let draw1 = null;
  const motusAfterFirst = hasMotusLineFromSet(session.hitNumbers, teamIndex);
  /** Après une boule noire ou un Motus : pas de second tirage. */
  if (!motusAfterFirst && draw0 !== BALL_BLACK) {
    await sleep(320);
    if (shouldAbortPlateauSession(epochSnap)) return;
    draw1 = drawOneFromPlateauUrn(teamIndex);
    await animateWinBall(1, draw1, epochSnap, teamIndex);
    if (shouldAbortPlateauSession(epochSnap)) return;
    if (draw1 === BALL_BLACK) passHandToNextTeamAfterBlackBall();
    else motus?.emit();
  }

  const motusLine = hasMotusLineFromSet(session.hitNumbers, teamIndex);

  if (motusLine) {
    addSessionMotusScore(getMotusLineScoreForSession(), teamIndex);
    unlockAudioSync();
    const motusSoundPromise = playGridMotusLineSound().catch(() => {});
    await Promise.all([
      playMotusLineLettersFlipSequence(epochSnap, teamIndex),
      motusSoundPromise,
    ]);
    if (shouldAbortPlateauSession(epochSnap)) return;
    await reinitializePlateauAfterMotus(epochSnap, teamIndex);
    if (shouldAbortPlateauSession(epochSnap)) return;
    motus?.emit();
    return;
  }
}

async function startGame() {
  closeAllOverlays();
  stopTurnTimer();
  syncTurnTimerMenuFields();
  syncWordsPerSessionMenuField();
  resetSessionWordStats();
  resetModalCloseButtonLabel();
  modal.classList.add('hidden');
  setMenuLoading(true);
  try {
    const teamCount = playMode === 'team' ? teamPlayerCount : 1;
    resetSessionMotusScore(teamCount);
    initPlateauSessionsForGame(teamCount);
    resetBallPlateauSession({ full: true });
    const game = new MotusGame({
      onUpdate: render,
      onEnd: showEndModal,
    });
    motus = game;
    messageEl.textContent = 'Chargement du dictionnaire…';
    try {
      await game.start(selectedLength, getPlayOptions());
    } catch {
      /* dictionnaire embarqué */
    }
    if (motus !== game) return;
    if (game.target) primeCastLetterAudio(game.target);
    updateMotusScoreDom();

    menu.classList.add('hidden');
    gamePanel.classList.remove('hidden');
    updateNavHighlight();
    requestAnimationFrame(() => {
      if (!gamePanel.classList.contains('hidden')) pauseMenuGenerique();
    });
    window.__MOTUS__ = game;
    lastCastAnnouncedTarget = '';

    const epochSnap = gameSessionEpoch;
    for (let t = 0; t < teamCount; t++) {
      ensureHidden8AndUrnNumbers(t);
    }

    try {
      await ensureOpeningPlateausPresented(epochSnap, teamCount, game);
    } finally {
      openingPlateauTeamIndex = -1;
      if (motus === game) {
        game.message = '';
        game.emit();
      }
    }

    if (motus !== game) return;

    primeCastLetterAudio(game.target);
    lastCastAnnouncedTarget = '';
    void announceCastLetterForTarget(game.target);
    scheduleCastLetterOnGesture();
    if (isSafariBrowser()) {
      void warmVerifyAudio();
    }
    updateWordProgressDom();
  } finally {
    setMenuLoading(false);
  }
}

function showEndModal(payload) {
  if (payload.won) {
    const isLast = isLastWordOfSession();
    recordSessionWordEnded(true);
    const teamIdx = motus?.currentTeamIndex ?? 0;
    addSessionMotusScore(getWordFoundScoreForSession(), teamIdx);

    if (isLast && !shouldAllowLastWordWinDraw(teamIdx)) {
      finishSessionAfterLastWordWithoutDraw();
      return;
    }

    const epochSnap = gameSessionEpoch;
    const gameRef = motus;
    if (winBallDrawInFlight) return;
    winBallDrawInFlight = true;
    if (motus === gameRef) gameRef.emit();
    void runWinBallMotus(epochSnap, teamIdx)
      .catch(() => {})
      .finally(() => {
        winBallDrawInFlight = false;
        if (motus === gameRef && gameRef?.winBallPhase) gameRef.emit();
      });
    return;
  }
  recordSessionWordEnded(false);
  if (!hasMoreWordsInSession()) {
    showSessionCompleteModal(payload.word);
    return;
  }
  modal.dataset.action = 'next-word';
  resetModalCloseButtonLabel();
  modal.classList.remove('hidden');
  modalTitle.textContent = 'Motus !';
  const progress =
    wordsPerSession > 0 ? ` — mot ${sessionWordsCompleted} / ${wordsPerSession}` : '';
  modalWord.textContent = `Le mot était : ${payload.word}${progress}`;
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

function isBonusRevealCell(game, ri, ci) {
  return game.bonusRevealCol >= 0 && ri === game.currentRow && ci === game.bonusRevealCol;
}

function applyBonusBlinkClass(cell, game, ri, ci) {
  if (!isBonusRevealCell(game, ri, ci)) return;
  cell.classList.add('cell--bonus-blink');
  if (game.bonusRevealBlinking && !game.bonusRevealVisible) {
    cell.classList.add('cell--bonus-hidden');
  }
}

/** Texte affiché dans une case (masque la lettre bonus pendant le clignotement). */
function cellCharDisplay(game, ri, ci, letter, state) {
  if (
    isBonusRevealCell(game, ri, ci) &&
    game.bonusRevealBlinking &&
    !game.bonusRevealVisible
  ) {
    return '·';
  }
  const showDot = ri <= game.currentRow && !letter && state === 'empty';
  return letter || (showDot ? '·' : '');
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
    span.textContent = cellCharDisplay(game, ri, ci, letter, state);
    applyBonusBlinkClass(cell, game, ri, ci);
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
    stopTurnTimer();
    return;
  }

  const inDrawPhase = !!(game.winBallPhase && game.finished);
  const inWordPlay = !game.loading && !game.winBallPhase;
  const plateauTeam =
    openingPlateauTeamIndex >= 0 ? openingPlateauTeamIndex : activeTeamIndex();
  const activePlateau = plateauSession(plateauTeam);
  const openingPlateau = openingPlateauTeamIndex >= 0 && inWordPlay;
  /** Grille chiffres : tirage après victoire, ou présentation plateau (toutes les équipes au démarrage). */
  const showBallGrid = inDrawPhase || openingPlateau;
  const showLetterGrid = inWordPlay && !showBallGrid;

  if (ballDrawEl) {
    ballDrawEl.classList.toggle('hidden', !showBallGrid);
    const gridHost = $('#ball-motus-grid');
    if (showBallGrid) {
      mountPlateauGridForTeam(plateauTeam);
    }
    const slots = ballDrawEl.querySelector('.win-ball-slots');
    const cont = $('#btn-win-continue');
    slots?.classList.toggle('hidden', !inDrawPhase);
    cont?.classList.toggle('hidden', !inDrawPhase);
    if (cont) {
      cont.disabled = inDrawPhase && winBallDrawInFlight;
      cont.setAttribute('aria-busy', cont.disabled ? 'true' : 'false');
      cont.textContent = hasMoreWordsInSession() ? 'Mot suivant' : 'Terminer la partie';
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
  const gameTopMeta = document.querySelector('.game-top-meta');
  if (gameTopMeta) {
    gameTopMeta.classList.toggle('hidden', hideLetterUi);
    gameTopMeta.hidden = hideLetterUi;
  }
  if (attemptsLabel) {
    attemptsLabel.classList.toggle('hidden', hideLetterUi);
    attemptsLabel.hidden = hideLetterUi;
  }
  if (turnTimerEl) {
    const showTimer = !hideLetterUi && game.turnTimerEnabled;
    turnTimerEl.classList.toggle('hidden', !showTimer);
    turnTimerEl.hidden = !showTimer;
  }
  updateMotusScoreDom();

  if (ballDrawTitleEl && showBallGrid) {
    ballDrawTitleEl.textContent = ballDrawTitleForTeam(plateauTeam);
  }
  if (messageEl) {
    const statusText =
      game.winBallPhase && game.finished && !game.message ? '' : game.message || '';
    messageEl.textContent = showBallGrid ? '' : showLetterGrid ? statusText : '';
  }

  if (!showLetterGrid) {
    gridEl.innerHTML = '';
    stopTurnTimer();
    return;
  }

  focusWordPlaySurface();
  attemptsLabel.textContent = `Essai ${Math.min(game.currentRow + 1, game.maxAttempts)} / ${game.maxAttempts}`;
  updateWordProgressDom();
  updateMotusScoreDom();

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
      applyBonusBlinkClass(cell, game, ri, ci);
      const span = document.createElement('span');
      span.className = 'cell-char';
      span.textContent = cellCharDisplay(game, ri, ci, letter, state);
      cell.appendChild(span);
      gridEl.appendChild(cell);
    }
  });

  const letterActive = isLetterGridActive(game);
  const inputReady = isWordPlayInputReady(game);
  renderKeyboard(game, inputReady);
  const sub = $('#btn-submit');
  const del = $('#btn-delete');
  if (sub) sub.disabled = !letterActive || game.inputLocked;
  if (del) del.disabled = !inputReady || game.inputLocked;
  if (overlayDebug && !overlayDebug.classList.contains('hidden')) {
    refreshDebugPanel();
  }
  requestAnimationFrame(syncMobileKeyboardLayout);
  syncTurnTimer(game);
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
      else if (game.wrongPlaceLetters?.has(ch)) key.classList.add('wrong-place');
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
    const action = modal.dataset.action || 'next-word';
    modal.classList.add('hidden');
    resetModalCloseButtonLabel();
    if (action === 'session-end') {
      goToPlayMenu();
      return;
    }
    if (!hasMoreWordsInSession()) {
      showSessionCompleteModal();
      return;
    }
    void continueSessionNextWord();
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

loadAudioSettings();
syncAudioSettingsToDom();
applyMusicSetting();

initMenu();
syncPlayMenuVisibility();
if (gamePanel && !gamePanel.hasAttribute('tabindex')) {
  gamePanel.setAttribute('tabindex', '-1');
}
bindControls();
bindMenuGeneriqueListener();
scheduleInitialMenuGenerique();
ensureKeyboardLayoutObserver();
