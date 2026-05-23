/**
 * Sons : MP3 dans `public/sounds/` (chemins `./public/sounds/…`).
 *
 * 1) Balises `<audio id="motus-snd-*">` dans index.html (déblocage + lecture fiable).
 * 2) Web Audio : fetch + decode (même URL relative).
 * 3) Bips synthétiques si tout échoue.
 */

const EXT_PRIORITY = ['.mp3'];

/**
 * Habillage sonore uniquement (jamais 1–70 ni a–z : voix animateur → cast-sounds.js).
 * Ajuster les valeurs ici ; `null` = effet désactivé en attendant un fichier.
 */
export const GAME_SFX = {
  menuGenerique: 'generique',
  verifyCorrect: 'verify-correct',
  verifyWrong: 'verify-wrong',
  verifyMissing: 'verify-missing',
  wordInvalid: 'word-invalid',
  wordNotFound: 'mot-not-nound',
  wordWin: 'word-win',
  noMoreTry: 'no-more-try',
  timeout: 'Timeout',
  letterBonus: 'Lettre-Bonus',
  /** Intro : dévoilement case par case des 25 numéros. */
  plateauReveal: 'Retournement-Chiffre',
  /** 8 cases repassent face cachée. */
  plateauHideEight: 'Retournement-Chiffre',
  /** Après la voix du numéro tiré : retournement de la case sur la grille. */
  plateauDrawFlip: 'Tirrage-Chiffre',
  plateauMotusLine: 'Motus',
  plateauBlackBall: 'BouleNoire',
};

const ROLE_TO_BASES = {
  correct: [GAME_SFX.verifyCorrect],
  wrong: [GAME_SFX.verifyWrong],
  missing: [GAME_SFX.verifyMissing],
  invalid: [GAME_SFX.wordInvalid, GAME_SFX.wordNotFound],
  win: [GAME_SFX.wordWin],
};

function sfxBases(name) {
  return name ? [name] : [];
}

const ROLE_TO_HTML_ID = {
  correct: 'motus-snd-correct',
  wrong: 'motus-snd-wrong',
  missing: 'motus-snd-missing',
  invalid: 'motus-snd-invalid',
  win: 'motus-snd-win',
};

const ROLES = ['correct', 'wrong', 'missing', 'invalid', 'win'];

/** @type {Map<string, HTMLAudioElement>} */
const htmlByRole = new Map();

/** index URL dynamique (éléments créés sans index.html) */
const htmlSrcIndex = new Map();

let ctxCache = null;

/** @type {Map<string, AudioBuffer>} — seulement des décodages réussis. */
const roleBuffers = new Map();

/**
 * URL absolue des MP3 (`public/sounds/` en dev Python → servi comme `/sounds/` ; build Vite → `dist/sounds/`).
 * @param {string} filename ex. `verify-correct.mp3`
 */
export function soundHref(filename) {
  const baseHref =
    (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || './';
  const path = `sounds/${filename}`;
  try {
    const base = new URL(baseHref, window.location.href);
    return new URL(path, base).href;
  } catch {
    return `${baseHref}${path}`.replace(/([^:]\/)\/+/g, '$1');
  }
}

/**
 * Lecture jetable d’un fichier sous `public/sounds/` (cast, etc.).
 * @param {string} filename ex. `t.mp3`
 * @returns {Promise<boolean>}
 */
export async function playPublicSoundFile(filename) {
  unlockAudioSync();
  return firePlateauEphemeralSingleSrc(soundHref(filename), `public-${filename}`);
}

/**
 * Essaie plusieurs noms de base (sans extension), premier fichier trouvé gagne.
 * @param {string[]} basenames ex. `['m', '283']`
 */
export async function playPublicSoundBasenames(basenames) {
  for (const base of basenames) {
    if (await playPublicSoundFile(`${base}.mp3`)) return true;
  }
  return false;
}

/**
 * Lecture d’une balise &lt;audio&gt; du HTML (src déjà dans index.html).
 * @param {string} domId
 */
export async function playHtmlAudioById(domId, maxWaitMs = 22000) {
  unlockAudioSync();
  const el = document.getElementById(domId);
  if (!(el instanceof HTMLAudioElement) || el.error) return false;
  el.muted = false;
  el.currentTime = 0;
  const cap = Math.min(
    maxWaitMs,
    Number.isFinite(el.duration) && el.duration > 0 ? Math.ceil(el.duration * 1000) + 1200 : maxWaitMs,
  );
  const reasonPromise = waitAudioEndReason(el, cap);
  try {
    const p = el.play();
    if (p !== undefined) await p.catch(() => {});
  } catch {
    return false;
  }
  if (el.error || el.paused) return false;
  const reason = await reasonPromise;
  return reason === 'ended' || reason === 'timeout';
}

const CAST_VOICE_ID = 'motus-snd-cast-voice';

/** @type {Map<string, AudioBuffer>} */
const castVoiceBuffers = new Map();

/** Map debug : fichiers avec balise dédiée dans index.html. */
const CAST_BASE_TO_HTML_ID = {
  t: 'motus-snd-cast-t',
  23: 'motus-snd-cast-23',
  51: 'motus-snd-cast-51',
};

function getCastVoiceEl() {
  const fromDom = document.getElementById(CAST_VOICE_ID);
  if (fromDom instanceof HTMLAudioElement) return fromDom;
  const el = document.createElement('audio');
  el.id = CAST_VOICE_ID;
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.preload = 'auto';
  document.body.appendChild(el);
  return el;
}

async function prepareCastVoiceSrc(href, opts = {}) {
  const { forceReload = false } = opts;
  const el = getCastVoiceEl();
  const current = el.getAttribute('data-motus-cast-href');
  if (
    !forceReload &&
    current === href &&
    el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
    !el.error
  ) {
    return true;
  }
  el.setAttribute('data-motus-cast-href', href);
  el.src = href;
  try {
    el.load();
  } catch {
    /* ignore */
  }
  return waitPlateauCanPlay(el, 6000);
}

async function loadCastVoiceBuffer(basename, opts = {}) {
  const { useCache = false } = opts;
  if (!useCache) castVoiceBuffers.delete(basename);
  else {
    const cached = castVoiceBuffers.get(basename);
    if (isUsableDecodedBuffer(cached)) return cached;
    castVoiceBuffers.delete(basename);
  }
  const ctx = getCtx();
  if (!ctx) return null;
  await ensureRunning(ctx);
  const href = soundHref(`${basename}.mp3`);
  try {
    const buf = await fetchDecodeToBuffer(ctx, href, { cache: 'no-store' });
    if (!isUsableDecodedBuffer(buf)) return null;
    castVoiceBuffers.set(basename, buf);
    return buf;
  } catch {
    return null;
  }
}

/**
 * Précharge voix cast pendant l’intro (après clic « Jouer » : décode Web Audio + &lt;audio&gt; prêt).
 * @param {string[]} basenames
 */
export function primeCastVoiceBasenames(basenames) {
  if (!basenames?.length) return;
  unlockAudioSync();
  const ctx = getCtx();
  if (ctx) void ensureRunning(ctx);
  for (const base of basenames) {
    if (CAST_BASE_TO_HTML_ID[base]) continue;
    void prepareCastVoiceSrc(soundHref(`${base}.mp3`));
    if (ctx) void loadCastVoiceBuffer(base, { useCache: true });
  }
}

/**
 * Voix cast — balise &lt;audio&gt; (fichier disque) puis repli Web Audio.
 * À la lecture, on invalide le buffer décodé pour éviter une ancienne version (ex. 3.mp3 remplacé).
 * @param {string[]} basenames noms sans extension (ex. `['m']`, `['23']`)
 */
export async function playCastVoiceBasenames(basenames) {
  if (!basenames?.length) return false;
  const ctx = getCtx();
  if (ctx) await ensureRunning(ctx);

  for (const base of basenames) {
    castVoiceBuffers.delete(base);

    const dedicatedId = CAST_BASE_TO_HTML_ID[base];
    if (dedicatedId && (await playHtmlAudioById(dedicatedId))) return true;

    const href = soundHref(`${base}.mp3`);
    if (await prepareCastVoiceSrc(href, { forceReload: true })) {
      if (await playHtmlAudioById(CAST_VOICE_ID)) return true;
    }

    if (ctx) {
      const buf = await loadCastVoiceBuffer(base);
      if (isUsableDecodedBuffer(buf)) {
        await playBufferOnce(ctx, buf);
        return true;
      }
    }
  }
  return false;
}

function candidateHrefsForRole(role) {
  const out = [];
  const bases = ROLE_TO_BASES[role];
  if (!bases) return out;
  for (const b of bases) {
    for (const ext of EXT_PRIORITY) {
      out.push(soundHref(b + ext));
    }
  }
  return out;
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/** Safari desktop coupe les MP3 si on relance la même balise en rafale. */
export function isSafariBrowser() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|EdgiOS|FxiOS|OPR\//i.test(ua);
}

/** iPhone / iPad : Web Audio pour les courts SFX est souvent déformé ; privilégier la balise audio HTML. */
export function isIOSDevice() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/i.test(ua)) return true;
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}

const VERIFY_SAMPLE_ROLES = new Set(['correct', 'wrong', 'missing']);

/** @type {Map<string, [HTMLAudioElement, HTMLAudioElement]>} */
const safariVerifySlotsByRole = new Map();
/** @type {Record<string, number>} */
const safariVerifySlotFlip = { correct: 0, wrong: 0, missing: 0 };
let safariVerifyWarmed = false;
/** @type {Promise<void> | null} */
let safariVerifyWarmInFlight = null;
/** @type {AudioBufferSourceNode | null} */
let activeSafariVerifySource = null;

function configureSafariVerifyElement(el) {
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.playsInline = true;
  el.preload = 'auto';
  el.volume = 1;
}

/** Deux pistes préchargées par rôle — Safari (iOS + macOS), sans recréer un &lt;audio&gt; par lettre. */
function ensureSafariVerifySlots(role) {
  const cached = safariVerifySlotsByRole.get(role);
  if (cached) return cached;

  const pair = /** @type {[HTMLAudioElement, HTMLAudioElement]} */ ([
    createSafariVerifyAudioElement(role, 0),
    createSafariVerifyAudioElement(role, 1),
  ]);
  safariVerifySlotsByRole.set(role, pair);
  return pair;
}

function createSafariVerifyAudioElement(role, index) {
  const el = document.createElement('audio');
  configureSafariVerifyElement(el);
  el.style.display = 'none';
  el.setAttribute('data-motus-safari-verify-slot', `${role}-${index}`);
  document.body.appendChild(el);
  return el;
}

function borrowSafariVerifyElement(role) {
  const pair = ensureSafariVerifySlots(role);
  const idx = safariVerifySlotFlip[role] % 2;
  safariVerifySlotFlip[role] = idx + 1;
  return pair[idx];
}

function stopActiveSafariVerifyWebSource() {
  if (!activeSafariVerifySource) return;
  try {
    activeSafariVerifySource.stop();
  } catch {
    /* ignore */
  }
  activeSafariVerifySource = null;
}

function hrefForVerifyRole(role) {
  const bases = ROLE_TO_BASES[role];
  if (!bases?.length) return '';
  return soundHref(`${bases[0]}${EXT_PRIORITY[0]}`);
}

function getCtx() {
  try {
    if (!ctxCache) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      ctxCache = new Ctx();
    }
    return ctxCache;
  } catch {
    return null;
  }
}

async function ensureRunning(ctx) {
  if (!ctx || ctx.state === 'running') return;
  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch {
      /* ignore */
    }
  }
  /* Double passe : certains navigateurs ne passent en « running » qu’après une 2e tentative. */
  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch {
      /* ignore */
    }
  }
}

/**
 * @returns {Promise<'ended'|'error'|'timeout'>}
 */
function waitAudioEndReason(el, capMs) {
  return new Promise((resolve) => {
    let done = false;
    function fin(reason) {
      if (done) return;
      done = true;
      clearTimeout(t);
      el.removeEventListener('ended', onEnded);
      el.removeEventListener('error', onError);
      el.removeEventListener('timeupdate', onTime);
      resolve(reason);
    }
    function onEnded() {
      fin('ended');
    }
    function onError() {
      fin('error');
    }
    function onTime() {
      const d = el.duration;
      /* Presque fin de piste : marge minime pour éviter de couper la queue du MP3. */
      if (Number.isFinite(d) && d > 0.02 && el.currentTime >= d - 0.02) {
        fin('ended');
      }
    }
    const t = setTimeout(() => fin('timeout'), capMs);
    el.addEventListener('ended', onEnded, { once: true });
    el.addEventListener('error', onError, { once: true });
    el.addEventListener('timeupdate', onTime);
  });
}

function wireDynamicSrcFallback(el, role) {
  if (el.dataset.motusWired === '1') return;
  el.dataset.motusWired = '1';
  el.addEventListener(
    'error',
    () => {
      const list = candidateHrefsForRole(role);
      let i = (htmlSrcIndex.get(role) ?? 0) + 1;
      if (i < list.length) {
        htmlSrcIndex.set(role, i);
        el.src = list[i];
        try {
          el.load();
        } catch {
          /* ignore */
        }
      }
    },
    false
  );
}

function getOrCreateHtmlAudio(role) {
  const cached = htmlByRole.get(role);
  if (cached) return cached;

  const id = ROLE_TO_HTML_ID[role];
  const fromDom = id ? /** @type {HTMLAudioElement | null} */ (document.getElementById(id)) : null;
  if (fromDom) {
    if (!fromDom.currentSrc && !fromDom.getAttribute('src')) {
      const list = candidateHrefsForRole(role);
      htmlSrcIndex.set(role, 0);
      if (list[0]) {
        fromDom.src = list[0];
        wireDynamicSrcFallback(fromDom, role);
      }
    }
    htmlByRole.set(role, fromDom);
    return fromDom;
  }

  const el = document.createElement('audio');
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.preload = 'auto';
  el.style.display = 'none';
  el.setAttribute('data-motus-snd', role);
  document.body.appendChild(el);
  const list = candidateHrefsForRole(role);
  htmlSrcIndex.set(role, 0);
  if (list[0]) el.src = list[0];
  wireDynamicSrcFallback(el, role);
  htmlByRole.set(role, el);
  return el;
}

/** Élément <audio> dédié au déblocage média — ne doit pas être un rôle joué (ex. « correct ») pour éviter les courses avec playHtmlRole. */
let unlockPingEl = null;

function getUnlockPingAudio() {
  if (unlockPingEl) return unlockPingEl;
  const el = document.createElement('audio');
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.preload = 'auto';
  el.style.display = 'none';
  el.setAttribute('data-motus-snd', 'unlock-ping');
  /* Silence minimal — ne pas réutiliser verify-missing (audible au chargement). */
  el.src =
    'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
  document.body.appendChild(el);
  unlockPingEl = el;
  return el;
}

/**
 * Déblocage : Web Audio + `<audio>` muette (piste du HTML si présente).
 */
export function unlockAudioSync() {
  try {
    const ctx = getCtx();
    if (ctx) {
      if (ctx.state === 'suspended') {
        void ctx.resume();
      }
      const buf = ctx.createBuffer(1, 1, ctx.sampleRate);
      const src = ctx.createBufferSource();
      const g = ctx.createGain();
      g.gain.value = 0;
      src.buffer = buf;
      src.connect(g);
      g.connect(ctx.destination);
      const t = ctx.currentTime;
      src.start(t);
      src.stop(t + 0.001);
    }
  } catch {
    /* ignore */
  }

  try {
    const el = getUnlockPingAudio();
    el.muted = true;
    const p = el.play();
    if (p !== undefined) {
      p.then(() => {
        el.pause();
        el.currentTime = 0;
        el.muted = true;
      }).catch(() => {
        el.muted = true;
      });
    }
  } catch {
    /* ignore */
  }
}

/**
 * Déblocage média sans laisser les pistes de validation audibles (iOS : pas de play() ici).
 * @param {HTMLAudioElement} el
 * @param {{ keepMuted?: boolean }} [opts]
 */
async function primeHtmlAudioElement(el, opts = {}) {
  const { keepMuted = false } = opts;
  /* Safari : jamais play() au prime — évite une fugue audible (souvent verify-wrong) au chargement / Jouer. */
  if (isIOSDevice() || isSafariBrowser()) {
    el.muted = true;
    if (el.readyState < HTMLMediaElement.HAVE_METADATA) {
      try {
        el.load();
      } catch {
        /* ignore */
      }
    }
    await waitMediaCanPlayThrough(el, 8000).catch(() => false);
    el.muted = true;
    return;
  }
  const wasMuted = el.muted;
  el.muted = true;
  const prevVol = el.volume;
  el.volume = 0;
  try {
    const p = el.play();
    if (p !== undefined) await p.catch(() => {});
  } catch {
    /* ignore */
  }
  try {
    el.pause();
    el.currentTime = 0;
  } catch {
    /* ignore */
  }
  el.volume = prevVol > 0 ? prevVol : 1;
  el.muted = keepMuted ? true : wasMuted;
}

export async function primeAudioContext() {
  try {
    unlockAudioSync();
    for (const role of ROLES) {
      const el = getOrCreateHtmlAudio(role);
      const isVerify = VERIFY_SAMPLE_ROLES.has(role);
      if (isSafariBrowser() && isVerify) continue;
      await primeHtmlAudioElement(el, { keepMuted: isVerify });
      await delay(12);
    }
    await primeGridBallSounds().catch(() => {});
    const ctx = getCtx();
    if (ctx) {
      await ensureRunning(ctx);
      if (isSafariBrowser() && !isIOSDevice()) {
        for (const role of VERIFY_SAMPLE_ROLES) {
          await loadBufferForRole(ctx, role);
        }
      }
    }
  } catch {
    /* ignore */
  }
}

async function warmSafariVerifySlotElement(el, href) {
  configureSafariVerifyElement(el);
  el.muted = true;
  const prev = el.getAttribute('data-motus-verify-href');
  if (prev !== href) {
    el.setAttribute('data-motus-verify-href', href);
    el.src = href;
    try {
      el.load();
    } catch {
      return;
    }
  }
  await waitMediaCanPlayThrough(el, 12000).catch(() => false);
  el.muted = true;
}

async function warmVerifyAudioBody() {
  unlockAudioSync();
  const tasks = [];
  const ctx = getCtx();
  if (ctx) {
    await ensureRunning(ctx);
    for (const role of VERIFY_SAMPLE_ROLES) {
      tasks.push(loadBufferForRole(ctx, role));
    }
  }
  for (const role of VERIFY_SAMPLE_ROLES) {
    const href = hrefForVerifyRole(role);
    if (!href) continue;
    const pair = ensureSafariVerifySlots(role);
    for (const el of pair) {
      tasks.push(warmSafariVerifySlotElement(el, href));
    }
  }
  await Promise.all(tasks);
  safariVerifyWarmed = true;
}

/**
 * Précharge les sons de validation sur Safari (buffers en RAM + pistes HTML iOS).
 * Doit être terminé avant la séquence de validation (réseau lent sur GitHub Pages).
 */
export function warmVerifyAudio() {
  if (!isSafariBrowser()) return Promise.resolve();
  if (safariVerifyWarmed) return Promise.resolve();
  if (safariVerifyWarmInFlight) return safariVerifyWarmInFlight;
  safariVerifyWarmInFlight = warmVerifyAudioBody()
    .catch(() => {})
    .finally(() => {
      safariVerifyWarmInFlight = null;
    });
  return safariVerifyWarmInFlight;
}

/** @deprecated Alias — utiliser {@link warmVerifyAudio}. */
export async function warmIOSVerifyAudio() {
  return warmVerifyAudio();
}

/**
 * @returns {Promise<boolean>} true seulement si l’événement <code>ended</code> a été reçu (pas timeout sans lecture).
 */
async function playHtmlRole(role) {
  const el = getOrCreateHtmlAudio(role);
  if (el.error) return false;
  el.muted = false;
  el.currentTime = 0;

  const cap = Math.min(
    15000,
    Number.isFinite(el.duration) && el.duration > 0 ? Math.ceil(el.duration * 1000) + 1200 : 10000
  );
  const reasonPromise = waitAudioEndReason(el, cap);

  try {
    const p = el.play();
    if (p !== undefined) await p;
    else await delay(80);
  } catch {
    return false;
  }
  if (el.error) return false;

  const reason = await reasonPromise;
  if (el.error) return false;
  return reason === 'ended';
}

async function fetchDecodeToBuffer(ctx, href, opts = {}) {
  await ensureRunning(ctx);
  const ctrl = new AbortController();
  const to = setTimeout(() => ctrl.abort(), 15000);
  const cache = opts.cache ?? 'force-cache';
  try {
    const res = await fetch(href, { mode: 'cors', cache, signal: ctrl.signal });
    if (!res.ok) throw new Error(String(res.status));
    const ab = await res.arrayBuffer();
    const copy = ab.byteLength ? ab.slice(0) : ab;
    return await ctx.decodeAudioData(copy);
  } finally {
    clearTimeout(to);
  }
}

function isUsableDecodedBuffer(buf) {
  return (
    buf &&
    typeof buf.duration === 'number' &&
    Number.isFinite(buf.duration) &&
    buf.duration > 0.001
  );
}

async function loadBufferForRole(ctx, role) {
  if (!ctx) return null;
  await ensureRunning(ctx);
  if (roleBuffers.has(role)) {
    const b = roleBuffers.get(role);
    if (isUsableDecodedBuffer(b)) return b;
    roleBuffers.delete(role);
  }
  const bases = ROLE_TO_BASES[role];
  if (!bases?.length) return null;

  for (const base of bases) {
    for (const ext of EXT_PRIORITY) {
      const href = soundHref(base + ext);
      try {
        const buf = await fetchDecodeToBuffer(ctx, href);
        if (!isUsableDecodedBuffer(buf)) continue;
        roleBuffers.set(role, buf);
        return buf;
      } catch {
        /* suivant */
      }
    }
  }
  return null;
}

async function playBufferOnce(ctx, buf) {
  await ensureRunning(ctx);
  if (!isUsableDecodedBuffer(buf)) return;
  stopActiveSafariVerifyWebSource();
  await new Promise((resolve) => {
    let settled = false;
    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    gain.gain.value = 1;
    src.buffer = buf;
    src.connect(gain);
    gain.connect(ctx.destination);
    const finish = () => {
      if (settled) return;
      settled = true;
      if (activeSafariVerifySource === src) activeSafariVerifySource = null;
      resolve();
    };
    const t0 = ctx.currentTime + 0.012;
    activeSafariVerifySource = src;
    src.onended = finish;
    try {
      src.start(t0);
    } catch {
      finish();
      return;
    }
    /* Secours uniquement si `ended` ne vient pas (évite de couper la piste sur Safari). */
    window.setTimeout(finish, Math.ceil(buf.duration * 1000) + 900);
  });
}

/**
 * Une balise audio jetable, lecture jusqu’à la fin (Safari : pas de réutilisation de #motus-snd-correct).
 * @param {string} href
 * @returns {Promise<boolean>}
 */
async function playEphemeralAudioToEnd(href) {
  if (!href) return false;
  const el = document.createElement('audio');
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.preload = 'auto';
  el.style.display = 'none';
  el.setAttribute('data-motus-verify-ephemeral', '1');
  document.body.appendChild(el);
  el.src = href;
  try {
    el.load();
  } catch {
    detachPlateauAudioEl(el);
    return false;
  }
  const ready = await waitPlateauCanPlay(el, 6000);
  if (!ready || el.error) {
    detachPlateauAudioEl(el);
    return false;
  }
  const cap = Math.min(
    12000,
    Number.isFinite(el.duration) && el.duration > 0 ? Math.ceil(el.duration * 1000) + 400 : 8000,
  );
  const reasonPromise = waitAudioEndReason(el, cap);
  try {
    el.muted = false;
    el.currentTime = 0;
    const p = el.play();
    if (p !== undefined) await p.catch(() => {});
  } catch {
    detachPlateauAudioEl(el);
    return false;
  }
  if (el.error) {
    detachPlateauAudioEl(el);
    return false;
  }
  const reason = await reasonPromise;
  detachPlateauAudioEl(el);
  return reason === 'ended';
}

async function playVerifySampleFromBases(bases) {
  if (!bases?.length) return false;
  for (const base of bases) {
    for (const ext of EXT_PRIORITY) {
      if (await playEphemeralAudioToEnd(soundHref(base + ext))) return true;
    }
  }
  return false;
}

/**
 * @param {HTMLAudioElement} el
 * @param {string} href
 * @returns {Promise<boolean>}
 */
async function playSafariVerifyOnElement(el, href) {
  if (!el || !href) return false;
  configureSafariVerifyElement(el);
  stopActiveSafariVerifyWebSource();

  const slotKey = el.getAttribute('data-motus-safari-verify-slot');
  const roleKey = slotKey?.replace(/-\d+$/, '');
  if (roleKey) {
    const pair = safariVerifySlotsByRole.get(roleKey);
    if (pair) {
      for (const other of pair) {
        if (other === el) continue;
        try {
          other.pause();
          other.currentTime = 0;
          other.muted = true;
        } catch {
          /* ignore */
        }
      }
    }
  }

  try {
    el.pause();
  } catch {
    /* ignore */
  }

  const prevHref = el.getAttribute('data-motus-verify-href');
  if (prevHref !== href) {
    el.setAttribute('data-motus-verify-href', href);
    el.src = href;
    try {
      el.load();
    } catch {
      return false;
    }
    const ready = await waitMediaCanPlayThrough(el, 10000);
    if (!ready || el.error) return false;
  } else if (el.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || el.error) {
    const ready = await waitMediaCanPlayThrough(el, 5000);
    if (!ready || el.error) return false;
  }

  el.muted = false;
  const cap = Math.min(
    15000,
    Number.isFinite(el.duration) && el.duration > 0 ? Math.ceil(el.duration * 1000) + 600 : 10000,
  );
  const reasonPromise = waitAudioEndReason(el, cap);
  try {
    el.currentTime = 0;
    const p = el.play();
    if (p !== undefined) await p.catch(() => {});
  } catch {
    el.muted = true;
    return false;
  }
  if (el.error) {
    el.muted = true;
    return false;
  }

  const reason = await reasonPromise;
  try {
    el.pause();
    el.currentTime = 0;
  } catch {
    /* ignore */
  }
  el.muted = true;
  return reason === 'ended';
}

async function playSafariVerifyRole(role) {
  if (!isSafariBrowser()) return false;
  await warmVerifyAudio();
  /* Safari macOS : buffers décodés en RAM (pas de streaming réseau lettre par lettre). */
  if (!isIOSDevice()) {
    const ctx = getCtx();
    if (ctx) {
      await ensureRunning(ctx);
      const cached = roleBuffers.get(role);
      if (isUsableDecodedBuffer(cached)) {
        await playBufferOnce(ctx, cached);
        return true;
      }
    }
    if (await playRoleSampleWebAudio(role)) return true;
  }
  const href = hrefForVerifyRole(role);
  if (!href) return false;
  const el = borrowSafariVerifyElement(role);
  if (await playSafariVerifyOnElement(el, href)) return true;
  return playRoleSampleWebAudio(role);
}

async function playRoleSampleWebAudio(role) {
  const ctx = getCtx();
  if (!ctx) return false;
  await ensureRunning(ctx);
  const buf = await loadBufferForRole(ctx, role);
  if (!isUsableDecodedBuffer(buf)) return false;
  await playBufferOnce(ctx, buf);
  return true;
}

/**
 * Vide les buffers décodés et permet de retenter fetch/decode (ex. après avoir remplacé des MP3).
 */
export function clearDecodedSoundCache() {
  roleBuffers.clear();
  castVoiceBuffers.clear();
  safariVerifyWarmed = false;
  safariVerifyWarmInFlight = null;
}

/**
 * D’abord <audio> (souvent plus tolérant avec les MP3 perso), puis Web Audio en secours.
 * Le HTML ne compte comme succès que si fin réelle (ended ou quasi-fin via timeupdate).
 */
async function playRoleSample(role) {
  const isVerify = VERIFY_SAMPLE_ROLES.has(role);
  const safariVerify = isSafariBrowser() && isVerify;
  if (!safariVerify) unlockAudioSync();

  if (safariVerify) {
    return playSafariVerifyRole(role);
  }

  if (await playHtmlRole(role)) return true;

  const ctx = getCtx();
  if (ctx) {
    await ensureRunning(ctx);
    const buf = await loadBufferForRole(ctx, role);
    if (isUsableDecodedBuffer(buf)) {
      await playBufferOnce(ctx, buf);
      return true;
    }
  }
  return false;
}

function scheduleBlip(ctx, startTime, freq, durationSec, type, peakGain) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  g.gain.setValueAtTime(0.0001, startTime);
  g.gain.linearRampToValueAtTime(peakGain, startTime + 0.012);
  g.gain.linearRampToValueAtTime(0.0001, startTime + durationSec);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + durationSec + 0.04);
}

function freqVerifyLetter(outcome, index, len, isWin) {
  if (isWin && outcome === 'correct') {
    const semis = (index * 5) / Math.max(len, 1);
    return 523.25 * 2 ** (semis / 12);
  }
  if (outcome === 'correct') return 698.46;
  if (outcome === 'wrong') return 220;
  if (outcome === 'missing') return 311;
  return 196;
}

function typeFor(outcome) {
  return outcome === 'missing' ? 'triangle' : 'sine';
}

const BLIP = 0.09;
/**
 * Pause après le feedback d’une lettre (après la fin du son fichier ou du bip).
 * Les « bien placés » ont un délai plus long : ils arrivent souvent plusieurs fois d’affilée.
 */
function pauseAfterVerifyOutcome(_outcome) {
  return isSafariBrowser() ? 35 : 25;
}

/**
 * Son d’une seule lettre (bien placée / mal placée / absente), puis pause entre lettres.
 * @param {'correct'|'wrong'|'missing'} outcome
 * @param {{ index?: number, wordLen?: number, isWin?: boolean }} [opts]
 */
export async function playVerifyLetterSound(outcome, opts = {}) {
  if (outcome !== 'correct' && outcome !== 'wrong' && outcome !== 'missing') return;
  const { index = 0, wordLen = 1, isWin = false } = opts;
  try {
    const ctx0 = getCtx();
    if (ctx0) await ensureRunning(ctx0);
    const ok = await playRoleSample(outcome);
    if (!ok) {
      const ctx = getCtx();
      if (ctx) {
        await ensureRunning(ctx);
        const t0 = ctx.currentTime + 0.02;
        const f = freqVerifyLetter(outcome, index, wordLen, isWin);
        const typ = typeFor(outcome);
        const gain = outcome === 'missing' ? 0.24 : outcome === 'wrong' ? 0.22 : 0.3;
        scheduleBlip(ctx, t0, f, BLIP, typ, gain);
        await delay(Math.ceil(BLIP * 1000) + 90);
      }
    }
    await delay(pauseAfterVerifyOutcome(outcome));
  } catch {
    /* ignore */
  }
}

const VERIFY_SEQUENCE_GAP_SEC = 0.07;

/**
 * Safari : une seule timeline Web Audio (buffers déjà en RAM) — évite stop/start + jank UI.
 * @param {string[]} results
 * @param {{ isWin?: boolean, onLetter?: (index: number, outcome: string) => void }} [opts]
 */
async function playSafariVerifySequenceScheduled(results, opts = {}) {
  const { onLetter } = opts;
  if (!results.length) return;
  await warmVerifyAudio();
  const ctx = getCtx();
  if (!ctx) return;
  await ensureRunning(ctx);
  stopActiveSafariVerifyWebSource();

  let t = ctx.currentTime + 0.04;
  let endT = t;
  const cues = [];

  for (let i = 0; i < results.length; i++) {
    const outcome = results[i];
    if (outcome !== 'correct' && outcome !== 'wrong' && outcome !== 'missing') continue;
    const buf = roleBuffers.get(outcome);
    if (!isUsableDecodedBuffer(buf)) continue;

    const startAt = t;
    cues.push({ i, outcome, startAt, buf });

    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    gain.gain.value = 1;
    src.buffer = buf;
    src.connect(gain);
    gain.connect(ctx.destination);
    src.start(startAt);

    t += buf.duration + VERIFY_SEQUENCE_GAP_SEC;
    endT = startAt + buf.duration;
  }

  const base = ctx.currentTime;
  for (const { i, outcome, startAt } of cues) {
    if (onLetter) {
      const ms = Math.max(0, (startAt - base) * 1000);
      window.setTimeout(() => onLetter(i, outcome), ms);
    }
  }

  const waitMs = Math.max(0, (endT - ctx.currentTime) * 1000) + 120;
  await delay(waitMs);
}

/**
 * Enchaîne les sons de validation dans l’ordre des cases (gauche → droite).
 * @param {string[]} results
 * @param {{ isWin?: boolean, onLetter?: (index: number, outcome: string) => void }} [opts]
 */
export async function playVerifySequence(results, opts = {}) {
  const { isWin = false, onLetter } = opts;
  if (!results.length) return;
  unlockAudioSync();

  if (isSafariBrowser()) {
    await playSafariVerifySequenceScheduled(results, { isWin, onLetter });
    return;
  }

  const ctx = getCtx();
  if (ctx) await ensureRunning(ctx);
  for (let i = 0; i < results.length; i++) {
    const o = results[i];
    if (o !== 'correct' && o !== 'wrong' && o !== 'missing') continue;
    if (onLetter) onLetter(i, o);
    await playVerifyLetterSound(o, { index: i, wordLen: results.length, isWin });
  }
}

export async function playErrorBuzz() {
  try {
    unlockAudioSync();
    const ok = await playRoleSample('invalid');
    if (ok) return;
    const ctx = getCtx();
    if (!ctx) return;
    await ensureRunning(ctx);
    const t0 = ctx.currentTime + 0.02;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(185, t0);
    osc.frequency.linearRampToValueAtTime(95, t0 + 0.18);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.24, t0 + 0.02);
    g.gain.linearRampToValueAtTime(0.0001, t0 + 0.24);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + 0.28);
    await delay(320);
  } catch {
    /* ignore */
  }
}

export async function playWinFanfare() {
  try {
    unlockAudioSync();
    const ok = await playRoleSample('win');
    if (ok) return;
    const ctx = getCtx();
    if (!ctx) return;
    await ensureRunning(ctx);
    const t0 = ctx.currentTime + 0.02;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      scheduleBlip(ctx, t0 + i * 0.088, freq, 0.13, 'sine', 0.22);
    });
    await delay(520);
  } catch {
    /* ignore */
  }
}

/**
 * Joue l’échantillon d’un rôle — même chaîne que pendant une partie (fichiers + secours synthétique).
 * @param {'correct'|'wrong'|'missing'|'invalid'|'win'} role
 */
export async function playValidationSample(role) {
  if (!ROLES.includes(role)) return;
  if (role === 'correct' || role === 'wrong' || role === 'missing') {
    await playVerifyLetterSound(role, { index: 0, wordLen: 1, isWin: false });
    return;
  }
  if (role === 'invalid') {
    await playErrorBuzz();
    return;
  }
  if (role === 'win') {
    await playWinFanfare();
    return;
  }
}

/**
 * Bip sinusoïdal court — utile en debug pour vérifier que Web Audio sort bien du son.
 */
export async function playSynthTestBeep() {
  try {
    unlockAudioSync();
    const ctx = getCtx();
    if (!ctx) return;
    await ensureRunning(ctx);
    const t0 = ctx.currentTime + 0.015;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.22, t0 + 0.02);
    g.gain.linearRampToValueAtTime(0.0001, t0 + 0.32);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + 0.34);
    await delay(380);
  } catch {
    /* ignore */
  }
}

/** Effets grille 5×5 — voir {@link GAME_SFX} (pas de fichiers numérotés 1–70). */
const PLATEAU_GRID_EXTS = ['.mp3'];
const PLATEAU_KEYS = {
  revealNumber: {
    cacheKey: 'plateau-reveal',
    bases: sfxBases(GAME_SFX.plateauReveal),
    clipSec: 0.08,
    domId: 'motus-snd-plateau-reveal',
  },
  hideEight: {
    cacheKey: 'plateau-hide',
    bases: sfxBases(GAME_SFX.plateauHideEight),
    clipSec: null,
    domId: GAME_SFX.plateauHideEight ? 'motus-snd-plateau-hide' : null,
  },
  drawFlip: {
    cacheKey: 'plateau-flip',
    bases: sfxBases(GAME_SFX.plateauDrawFlip),
    clipSec: null,
    domId: 'motus-snd-plateau-flip',
  },
  motusLine: {
    cacheKey: 'plateau-motus',
    bases: sfxBases(GAME_SFX.plateauMotusLine),
    clipSec: null,
    domId: 'motus-snd-plateau-motus',
  },
  blackBall: {
    cacheKey: 'plateau-black',
    bases: sfxBases(GAME_SFX.plateauBlackBall),
    clipSec: null,
    domId: 'motus-snd-plateau-black',
  },
};

/** Marge après la fin de lecture forcée du clip (ms). */
const PLATEAU_DOM_CUT_PAD_MS = 34;
/** Silence minimal après un clip court plateau avant le son suivant. */
const PLATEAU_TAIL_SILENCE_MS = 44;

function plateauEffectConfigured(bases, domId) {
  return bases.length > 0 || !!domId;
}

/** Évite le preload Safari des MP3 de validation au chargement de la page. */
export function wireVerifyAudioElementsFromSfx() {
  for (const role of VERIFY_SAMPLE_ROLES) {
    const id = ROLE_TO_HTML_ID[role];
    const el = id ? document.getElementById(id) : null;
    if (!(el instanceof HTMLAudioElement)) continue;
    el.preload = 'none';
    el.muted = true;
    el.removeAttribute('src');
    el.removeAttribute('data-motus-verify-href');
  }
}

/** Aligne les balises &lt;audio&gt; plateau sur {@link GAME_SFX} (jamais 6.mp3 / 7.mp3 voix). */
export function wirePlateauAudioElementsFromSfx() {
  const pairs = [
    ['motus-snd-plateau-reveal', GAME_SFX.plateauReveal],
    ['motus-snd-plateau-hide', GAME_SFX.plateauHideEight],
    ['motus-snd-plateau-flip', GAME_SFX.plateauDrawFlip],
    ['motus-snd-plateau-motus', GAME_SFX.plateauMotusLine],
    ['motus-snd-plateau-black', GAME_SFX.plateauBlackBall],
  ];
  for (const [id, base] of pairs) {
    const el = document.getElementById(id);
    if (!(el instanceof HTMLAudioElement)) continue;
    if (base) {
      el.src = soundHref(`${base}.mp3`);
      try {
        el.load();
      } catch {
        /* ignore */
      }
    } else {
      el.removeAttribute('src');
    }
  }
}

/**
 * Démarre la lecture sur la balise HTML puis coupe après {@code clipSec} s (rythme TV rapide).
 * @param {string} domId
 * @param {number} clipSec
 */
function tryStartPlateauDom(domId, clipSec) {
  const el = document.getElementById(domId);
  if (!el || !(el instanceof HTMLAudioElement) || el.error) return false;
  if (!Number.isFinite(clipSec) || clipSec <= 0) return false;
  try {
    el.muted = false;
    el.currentTime = 0;
  } catch {
    return false;
  }
  try {
    const p = el.play();
    if (p !== undefined) void p.catch(() => {});
  } catch {
    return false;
  }
  window.setTimeout(() => {
    try {
      el.pause();
      el.currentTime = 0;
    } catch {
      /* ignore */
    }
  }, Math.ceil(clipSec * 1000) + PLATEAU_DOM_CUT_PAD_MS);
  return true;
}

/** Attente après un clip court 6 / 7 / 8 : coupure DOM + courte pause avant le suivant. */
function plateauShortClipHoldMs(clipSec) {
  const s = Number.isFinite(clipSec) && clipSec > 0 ? clipSec : 0.08;
  return Math.ceil(s * 1000) + PLATEAU_DOM_CUT_PAD_MS + PLATEAU_TAIL_SILENCE_MS;
}

/**
 * Joue la piste plateau sur la balise &lt;audio&gt; du HTML jusqu’à la fin (aucune troncature).
 * @param {string} domId
 * @param {{ maxWaitMs?: number }} [opts] — pour le 51, passer une limite large (piste longue).
 * @returns {Promise<boolean>}
 */
async function playPlateauDomToEnd(domId, opts = {}) {
  const maxCap = opts.maxWaitMs ?? 20000;
  const el = document.getElementById(domId);
  if (!el || !(el instanceof HTMLAudioElement) || el.error) return false;
  try {
    el.muted = false;
    el.currentTime = 0;
    const p = el.play();
    if (p !== undefined) await p.catch(() => {});
  } catch {
    return false;
  }
  if (el.error) return false;
  const capMs =
    Number.isFinite(el.duration) && el.duration > 0
      ? Math.min(maxCap, Math.ceil(el.duration * 1000) + 2000)
      : maxCap;
  await waitAudioEndReason(el, capMs);
  return true;
}

let plateauAudioChain = Promise.resolve();

/**
 * Enfile les effets plateau : une piste ne démarre pas tant que la précédente n’a pas fini
 * (évite les coupures sur la même balise &lt;audio&gt;).
 */
function enqueuePlateauSound(fn) {
  const next = plateauAudioChain.then(() => fn());
  plateauAudioChain = next.catch(() => {});
  return next;
}

function detachPlateauAudioEl(el) {
  if (!el) return;
  try {
    el.pause();
    el.removeAttribute('src');
    el.load();
  } catch {
    /* ignore */
  }
  try {
    el.remove();
  } catch {
    /* ignore */
  }
}

/**
 * Un tir superposable : une balise &lt;audio&gt; jetable, même URL qu’une piste déjà dans le HTML (souvent déjà en cache).
 * @param {string} srcUrl URL résolue (ex. {@code currentSrc} de {@code #motus-snd-plateau-7})
 * @param {string} debugTag
 * @returns {Promise<boolean>}
 */
async function firePlateauEphemeralSingleSrc(srcUrl, debugTag) {
  if (!srcUrl) return false;
  const el = document.createElement('audio');
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.preload = 'auto';
  el.style.display = 'none';
  el.setAttribute('data-motus-plateau', debugTag);
  document.body.appendChild(el);
  el.src = srcUrl;
  try {
    el.load();
  } catch {
    detachPlateauAudioEl(el);
    return false;
  }
  const ready = await waitPlateauCanPlay(el, 5000);
  if (!ready || el.error) {
    detachPlateauAudioEl(el);
    return false;
  }
  const fin = () => detachPlateauAudioEl(el);
  try {
    el.muted = false;
    el.currentTime = 0;
    const p = el.play();
    if (p !== undefined) await p.catch(() => {});
  } catch {
    detachPlateauAudioEl(el);
    return false;
  }
  if (el.error) {
    detachPlateauAudioEl(el);
    return false;
  }
  el.addEventListener('ended', fin, { once: true });
  el.addEventListener('error', fin, { once: true });
  window.setTimeout(fin, 12000);
  return true;
}

/**
 * Un tir superposable (plusieurs &lt;audio&gt; jetables) — évite la même balise HTML qui coupe la lecture précédente.
 * Attend que la ressource soit lisible avant {@code play()} (sinon la promesse est rejetée et on n’entend rien).
 * @param {string[]} bases
 * @returns {Promise<boolean>}
 */
async function firePlateauEphemeralOverlapFromBases(bases) {
  for (const b of bases) {
    for (const ext of PLATEAU_GRID_EXTS) {
      const href = soundHref(b + ext);
      if (await firePlateauEphemeralSingleSrc(href, `ephemeral-${b}${ext}`)) return true;
    }
  }
  return false;
}

/**
 * @param {string} domId ex. {@code motus-snd-plateau-7}
 * @returns {Promise<boolean>}
 */
async function firePlateauEphemeralFromDomAudioSrc(domId) {
  const ref = document.getElementById(domId);
  if (!ref || !(ref instanceof HTMLAudioElement) || ref.error) return false;
  const url = ref.currentSrc || ref.src;
  if (!url) return false;
  return firePlateauEphemeralSingleSrc(url, `ephemeral-dom-${domId}`);
}

/**
 * Comme {@code firePlateauEphemeralSingleSrc} mais coupe après {@code clipSec} (son 6 court).
 * @param {string} srcUrl
 * @param {number} clipSec
 * @param {string} debugTag
 * @returns {Promise<boolean>}
 */
async function firePlateauEphemeralShortSingleSrc(srcUrl, clipSec, debugTag) {
  if (!srcUrl || !Number.isFinite(clipSec) || clipSec <= 0) return false;
  const el = document.createElement('audio');
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.preload = 'auto';
  el.style.display = 'none';
  el.setAttribute('data-motus-plateau', debugTag);
  document.body.appendChild(el);
  el.src = srcUrl;
  try {
    el.load();
  } catch {
    detachPlateauAudioEl(el);
    return false;
  }
  const ready = await waitPlateauCanPlay(el, 5000);
  if (!ready || el.error) {
    detachPlateauAudioEl(el);
    return false;
  }
  const fin = () => detachPlateauAudioEl(el);
  try {
    el.muted = false;
    el.currentTime = 0;
    const p = el.play();
    if (p !== undefined) await p.catch(() => {});
  } catch {
    detachPlateauAudioEl(el);
    return false;
  }
  if (el.error) {
    detachPlateauAudioEl(el);
    return false;
  }
  window.setTimeout(fin, Math.ceil(clipSec * 1000) + PLATEAU_DOM_CUT_PAD_MS);
  return true;
}

/**
 * @param {string} domId
 * @param {number} clipSec
 * @returns {Promise<boolean>}
 */
async function firePlateauEphemeralShortFromDom(domId, clipSec) {
  const ref = document.getElementById(domId);
  if (!ref || !(ref instanceof HTMLAudioElement) || ref.error) return false;
  const url = ref.currentSrc || ref.src;
  if (!url) return false;
  return firePlateauEphemeralShortSingleSrc(url, clipSec, `ephemeral-short-dom-${domId}`);
}

/**
 * @param {string[]} bases
 * @param {number} clipSec
 * @returns {Promise<boolean>}
 */
async function firePlateauEphemeralShortFromBases(bases, clipSec) {
  for (const b of bases) {
    for (const ext of PLATEAU_GRID_EXTS) {
      const href = soundHref(b + ext);
      if (await firePlateauEphemeralShortSingleSrc(href, clipSec, `ephemeral-short-${b}${ext}`)) return true;
    }
  }
  return false;
}

/**
 * @param {HTMLAudioElement} el
 * @param {number} capMs
 * @returns {Promise<boolean>}
 */
function waitMediaCanPlayThrough(el, capMs) {
  const ready = () =>
    el.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA && !el.error;
  if (ready()) return Promise.resolve(true);
  return new Promise((resolve) => {
    let done = false;
    const t = setTimeout(() => finish(false), capMs);
    function finish(ok) {
      if (done) return;
      done = true;
      clearTimeout(t);
      el.removeEventListener('canplaythrough', onOk);
      el.removeEventListener('canplay', onOk);
      el.removeEventListener('loadeddata', onData);
      el.removeEventListener('error', onErr);
      resolve(ok);
    }
    function onOk() {
      if (ready()) finish(true);
    }
    function onData() {
      if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !el.error) finish(true);
    }
    function onErr() {
      finish(false);
    }
    el.addEventListener('canplaythrough', onOk, { once: true });
    el.addEventListener('canplay', onOk, { once: true });
    el.addEventListener('loadeddata', onData, { once: true });
    el.addEventListener('error', onErr, { once: true });
    queueMicrotask(() => {
      if (ready()) finish(true);
    });
  });
}

/**
 * @param {HTMLAudioElement} el
 * @param {number} capMs
 * @returns {Promise<boolean>}
 */
function waitPlateauCanPlay(el, capMs) {
  const ready = () =>
    el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !el.error;
  if (ready()) return Promise.resolve(true);
  return new Promise((resolve) => {
    let done = false;
    const t = setTimeout(() => finish(false), capMs);
    function finish(ok) {
      if (done) return;
      done = true;
      clearTimeout(t);
      el.removeEventListener('canplay', onOk);
      el.removeEventListener('loadeddata', onData);
      el.removeEventListener('error', onErr);
      resolve(ok);
    }
    function onOk() {
      if (ready()) finish(true);
    }
    function onData() {
      if (ready()) finish(true);
    }
    function onErr() {
      finish(false);
    }
    el.addEventListener('canplay', onOk, { once: true });
    el.addEventListener('loadeddata', onData, { once: true });
    el.addEventListener('error', onErr, { once: true });
    queueMicrotask(() => {
      if (ready()) finish(true);
    });
  });
}

/**
 * Lecture plateau : d’abord <audio> (MP3), puis buffers Web Audio.
 * L’élément reste dans le document le temps de la lecture (sinon certains navigateurs coupent tout de suite).
 * @param {string[]} bases
 * @param {number|null} clipSec durée max en s, ou null = laisser la piste aller au bout
 * @param {boolean} [awaitEnded] attendre la fin (ex. 51 Motus)
 */
async function playPlateauHtml(bases, clipSec, awaitEnded = false) {
  for (const b of bases) {
    for (const ext of PLATEAU_GRID_EXTS) {
      const href = soundHref(b + ext);
      const el = document.createElement('audio');
      el.setAttribute('playsinline', '');
      el.setAttribute('webkit-playsinline', '');
      el.preload = 'auto';
      el.style.display = 'none';
      el.setAttribute('data-motus-plateau', `${b}${ext}`);
      document.body.appendChild(el);
      el.src = href;
      try {
        el.load();
      } catch {
        detachPlateauAudioEl(el);
        continue;
      }
      const ready = await waitPlateauCanPlay(el, 5000);
      if (!ready || el.error) {
        detachPlateauAudioEl(el);
        continue;
      }
      try {
        el.currentTime = 0;
      } catch {
        detachPlateauAudioEl(el);
        continue;
      }
      try {
        const p = el.play();
        if (p !== undefined) await p;
      } catch {
        detachPlateauAudioEl(el);
        continue;
      }
      await delay(45);
      if (el.error) {
        detachPlateauAudioEl(el);
        continue;
      }
      if (clipSec != null && Number.isFinite(clipSec)) {
        window.setTimeout(() => {
          try {
            el.pause();
            el.currentTime = 0;
          } catch {
            /* ignore */
          }
          detachPlateauAudioEl(el);
        }, Math.ceil(clipSec * 1000) + PLATEAU_DOM_CUT_PAD_MS);
      } else if (awaitEnded) {
        const capMs = Math.min(
          120000,
          Number.isFinite(el.duration) && el.duration > 0 ? Math.ceil(el.duration * 1000) + 2000 : 60000,
        );
        await waitAudioEndReason(el, capMs);
        detachPlateauAudioEl(el);
      } else {
        const capMs = Math.min(
          20000,
          Number.isFinite(el.duration) && el.duration > 0 ? Math.ceil(el.duration * 1000) + 1000 : 8000,
        );
        await waitAudioEndReason(el, capMs);
        detachPlateauAudioEl(el);
      }
      return true;
    }
  }
  return false;
}

async function loadFirstPlateauBuffer(ctx, cacheKey, bases) {
  if (roleBuffers.has(cacheKey)) return roleBuffers.get(cacheKey);
  for (const base of bases) {
    for (const ext of PLATEAU_GRID_EXTS) {
      try {
        const buf = await fetchDecodeToBuffer(ctx, soundHref(base + ext));
        if (isUsableDecodedBuffer(buf)) {
          roleBuffers.set(cacheKey, buf);
          return buf;
        }
      } catch {
        /* suivant */
      }
    }
  }
  return null;
}

function plateauClipCapSec(buf, clipSec) {
  if (clipSec == null || !Number.isFinite(clipSec)) return buf.duration;
  return Math.min(Math.max(clipSec, 0.022), buf.duration);
}

/** @returns {number|null} durée lue en secondes, ou null si pas de buffer */
function firePlateauClip(ctx, cacheKey, clipSec) {
  const buf = roleBuffers.get(cacheKey);
  if (!isUsableDecodedBuffer(buf)) return null;
  const cap = plateauClipCapSec(buf, clipSec);
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.connect(ctx.destination);
  const t0 = ctx.currentTime + 0.003;
  src.start(t0);
  src.stop(t0 + cap);
  return cap;
}

function playSynthGridTick(direction) {
  try {
    const ctx = getCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') void ctx.resume();
    const t0 = ctx.currentTime + 0.004;
    const freq = direction === 'down' ? 360 : 920;
    scheduleBlip(ctx, t0, freq, 0.062, 'sine', 0.13);
  } catch {
    /* ignore */
  }
}

/** Précharge les effets plateau (après déblocage audio). */
export async function primeGridBallSounds() {
  try {
    unlockAudioSync();
    const ctx = getCtx();
    if (!ctx) return;
    await ensureRunning(ctx);
    await loadFirstPlateauBuffer(ctx, PLATEAU_KEYS.revealNumber.cacheKey, PLATEAU_KEYS.revealNumber.bases);
    if (PLATEAU_KEYS.hideEight.bases.length) {
      await loadFirstPlateauBuffer(
        ctx,
        PLATEAU_KEYS.hideEight.cacheKey,
        PLATEAU_KEYS.hideEight.bases,
      );
    }
    await loadFirstPlateauBuffer(ctx, PLATEAU_KEYS.drawFlip.cacheKey, PLATEAU_KEYS.drawFlip.bases);
    await loadFirstPlateauBuffer(ctx, PLATEAU_KEYS.blackBall.cacheKey, PLATEAU_KEYS.blackBall.bases);
    await loadFirstPlateauBuffer(ctx, PLATEAU_KEYS.motusLine.cacheKey, PLATEAU_KEYS.motusLine.bases);
  } catch {
    /* ignore */
  }
}

/**
 * 6 — une case affiche son numéro.
 * Sans {@code awaitCompletion} : tir superposable (Web Audio ou &lt;audio&gt; jetables, clip court).
 * Avec {@code awaitCompletion} : attend la fin du tir (ex. mode réduit, une seule lecture).
 * @param {{ awaitCompletion?: boolean }} [opts]
 * @returns {Promise<void>}
 */
export function playGridBallRevealSound(opts = {}) {
  return playGridBallRevealSoundBody(opts);
}

async function playGridBallRevealSoundBody(opts = {}) {
  const { cacheKey, bases, clipSec, domId } = PLATEAU_KEYS.revealNumber;
  try {
    unlockAudioSync();
    const ctx = getCtx();
    if (ctx) {
      await ensureRunning(ctx);
      if (!roleBuffers.get(cacheKey)) await loadFirstPlateauBuffer(ctx, cacheKey, bases);
      const buf = roleBuffers.get(cacheKey);
      if (isUsableDecodedBuffer(buf)) {
        const cap = firePlateauClip(ctx, cacheKey, clipSec);
        if (cap != null) {
          if (opts.awaitCompletion) await delay(Math.ceil(cap * 1000) + PLATEAU_TAIL_SILENCE_MS);
          return;
        }
      }
    }

    if (opts.awaitCompletion) {
      if (domId && tryStartPlateauDom(domId, clipSec)) {
        await delay(plateauShortClipHoldMs(clipSec));
        return;
      }
      if (await playPlateauHtml(bases, clipSec, false)) {
        await delay(plateauShortClipHoldMs(clipSec));
        return;
      }
      const ctx2 = getCtx();
      if (ctx2) await ensureRunning(ctx2);
      playSynthGridTick('up');
      await delay(95);
      return;
    }

    if (
      domId &&
      clipSec != null &&
      Number.isFinite(clipSec) &&
      (await firePlateauEphemeralShortFromDom(domId, clipSec))
    )
      return;
    if (clipSec != null && Number.isFinite(clipSec) && (await firePlateauEphemeralShortFromBases(bases, clipSec)))
      return;
    const ctx2 = getCtx();
    if (ctx2) await ensureRunning(ctx2);
    playSynthGridTick('up');
  } catch {
    /* ignore */
  }
}

/**
 * 7 — une des 8 cases repasse face cachée.
 * Sans {@code awaitCompletion} : tir superposable (Web Audio ou &lt;audio&gt; jetables).
 * Avec {@code awaitCompletion} : attend la fin du tir (lecture une par une pour la séquence des 8).
 * @param {{ awaitCompletion?: boolean }} [opts]
 * @returns {Promise<void>}
 */
export function playGridBallHideSound(opts = {}) {
  return playGridBallHideSoundBody(opts);
}

async function playGridBallHideSoundBody(opts = {}) {
  const { cacheKey, bases, clipSec, domId } = PLATEAU_KEYS.hideEight;
  if (!plateauEffectConfigured(bases, domId)) {
    if (opts.awaitCompletion) await delay(80);
    return;
  }
  try {
    unlockAudioSync();
    const ctx = getCtx();
    if (ctx) {
      await ensureRunning(ctx);
      if (!roleBuffers.get(cacheKey)) await loadFirstPlateauBuffer(ctx, cacheKey, bases);
      const buf = roleBuffers.get(cacheKey);
      if (isUsableDecodedBuffer(buf)) {
        const cap = firePlateauClip(ctx, cacheKey, clipSec);
        if (cap != null) {
          if (opts.awaitCompletion) await delay(Math.ceil(cap * 1000) + PLATEAU_TAIL_SILENCE_MS);
          return;
        }
      }
    }

    if (opts.awaitCompletion) {
      if (domId && (await playPlateauDomToEnd(domId, { maxWaitMs: 15000 }))) return;
      if (await playPlateauHtml(bases, clipSec, true)) return;
      const ctx2 = getCtx();
      if (ctx2) await ensureRunning(ctx2);
      playSynthGridTick('down');
      await delay(95);
      return;
    }

    if (domId && (await firePlateauEphemeralFromDomAudioSrc(domId))) return;
    if (await firePlateauEphemeralOverlapFromBases(bases)) return;
    const ctx2 = getCtx();
    if (ctx2) await ensureRunning(ctx2);
    playSynthGridTick('down');
  } catch {
    /* ignore */
  }
}

/** Boule noire (hors file plateau : piste entière). */
export function playGridBlackBallSound(opts = {}) {
  return playGridBlackBallSoundBody(opts);
}

async function playGridBlackBallSoundBody(opts = {}) {
  const { cacheKey, bases, clipSec, domId } = PLATEAU_KEYS.blackBall;
  try {
    unlockAudioSync();
    const ctx = getCtx();
    if (ctx) {
      await ensureRunning(ctx);
      if (!roleBuffers.get(cacheKey)) await loadFirstPlateauBuffer(ctx, cacheKey, bases);
      const buf = roleBuffers.get(cacheKey);
      if (isUsableDecodedBuffer(buf)) {
        const cap = firePlateauClip(ctx, cacheKey, clipSec);
        if (cap != null) {
          if (opts.awaitCompletion) await delay(Math.ceil(cap * 1000) + PLATEAU_TAIL_SILENCE_MS);
          return;
        }
      }
    }

    if (opts.awaitCompletion) {
      if (domId && clipSec != null && Number.isFinite(clipSec) && tryStartPlateauDom(domId, clipSec)) {
        await delay(plateauShortClipHoldMs(clipSec));
        return;
      }
      if (domId && (clipSec == null || !Number.isFinite(clipSec)) && (await playPlateauDomToEnd(domId, { maxWaitMs: 15000 })))
        return;
      if (await playPlateauHtml(bases, clipSec, true)) return;
      const ctx2 = getCtx();
      if (ctx2) await ensureRunning(ctx2);
      playSynthGridTick('down');
      await delay(95);
      return;
    }

    if (domId && (await firePlateauEphemeralFromDomAudioSrc(domId))) return;
    if (await firePlateauEphemeralOverlapFromBases(bases)) return;
    const ctx2 = getCtx();
    if (ctx2) await ensureRunning(ctx2);
    playSynthGridTick('down');
  } catch {
    /* ignore */
  }
}

/** Retournement case tirée (hors file plateau : lecture alignée avec l’anim grille). */
export function playGridDrawNumberFlipSound(opts = {}) {
  if (opts.awaitCompletion) {
    return enqueuePlateauSound(() => playGridDrawNumberFlipSoundBody({ awaitCompletion: true }));
  }
  return playGridDrawNumberFlipSoundBody(opts);
}

async function playGridDrawNumberFlipSoundBody(opts = {}) {
  const { cacheKey, bases, clipSec, domId } = PLATEAU_KEYS.drawFlip;
  try {
    unlockAudioSync();
    const ctx = getCtx();
    if (ctx) {
      await ensureRunning(ctx);
      if (!roleBuffers.get(cacheKey)) await loadFirstPlateauBuffer(ctx, cacheKey, bases);
      const buf = roleBuffers.get(cacheKey);
      if (isUsableDecodedBuffer(buf)) {
        const cap = firePlateauClip(ctx, cacheKey, clipSec);
        if (cap != null) {
          if (opts.awaitCompletion) await delay(Math.ceil(cap * 1000) + PLATEAU_TAIL_SILENCE_MS);
          return;
        }
      }
    }

    if (opts.awaitCompletion) {
      if (domId && clipSec != null && Number.isFinite(clipSec) && tryStartPlateauDom(domId, clipSec)) {
        await delay(plateauShortClipHoldMs(clipSec));
        return;
      }
      if (domId && (clipSec == null || !Number.isFinite(clipSec)) && (await playPlateauDomToEnd(domId, { maxWaitMs: 15000 })))
        return;
      if (await playPlateauHtml(bases, clipSec, true)) return;
      const ctx2 = getCtx();
      if (ctx2) await ensureRunning(ctx2);
      playSynthGridTick('up');
      await delay(95);
      return;
    }

    if (domId && (await firePlateauEphemeralFromDomAudioSrc(domId))) return;
    if (await firePlateauEphemeralOverlapFromBases(bases)) return;
    const ctx2 = getCtx();
    if (ctx2) await ensureRunning(ctx2);
    playSynthGridTick('up');
  } catch {
    /* ignore */
  }
}

/** Motus (ligne / colonne / diagonale complète), piste entière. */
export function playGridMotusLineSound() {
  return enqueuePlateauSound(playGridMotusLineSoundBody);
}

async function playGridMotusLineSoundBody() {
  const { cacheKey, bases, domId } = PLATEAU_KEYS.motusLine;
  try {
    unlockAudioSync();
    if (domId && (await playPlateauDomToEnd(domId, { maxWaitMs: 120000 }))) return;
    const ctx = getCtx();
    if (ctx) {
      await ensureRunning(ctx);
      let buf = roleBuffers.get(cacheKey);
      if (!isUsableDecodedBuffer(buf)) buf = await loadFirstPlateauBuffer(ctx, cacheKey, bases);
      if (isUsableDecodedBuffer(buf)) {
        await playBufferOnce(ctx, buf);
        return;
      }
    }
    if (await playPlateauHtml(bases, null, true)) return;
    const ctx2 = getCtx();
    if (ctx2) await ensureRunning(ctx2);
    playSynthGridTick('up');
    await delay(95);
  } catch {
    /* ignore */
  }
}
