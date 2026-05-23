import './intro-generique.css';
import { createGenerique3D } from './intro-generique-3d.js';

const INTRO_DURATION = 29;

/**
 * Timeline calée sur la vidéo YouTube dZjmgGO6xNM (29 s, analyse 8 fps / 0,125 s).
 * Ref. : générique Motus 1989 — Dj Motus.
 */
const INTRO_TIMELINE = [
  // 0,00 — Studio vide, damier seul
  { at: 0, action: 'scene3d', id: 'studio' },

  // 0,50–2,50 — Boules sur le damier (physique studio)
  // 3,00–6,50 — Lettres géantes (analyse 8 fps : M@3,0 · O@3,25 · T@3,625 · U@4,125 · S@4,75)
  { at: 3.0, action: 'scene3d', id: 'letters-fly' },
  { at: 3.0, action: 'motus', phase: 'fly' },
  { at: 3.0, action: 'letter', id: 'm' },
  { at: 3.25, action: 'letter', id: 'o' },
  { at: 3.625, action: 'letter', id: 't' },
  { at: 4.125, action: 'letter', id: 'u' },
  { at: 4.75, action: 'letter', id: 's' },
  { at: 6.5, action: 'motus', phase: 'hide' },

  // 8,50 — « Proposé par Nicole Covillers »
  { at: 8.5, action: 'credit', id: 'nicole' },
  { at: 11.75, action: 'credit', id: 'nicole', hide: true },

  // 12,00 — « Présenté par Thierry Beccaro » + boules orbitantes
  { at: 12.0, action: 'scene3d', id: 'orbit' },
  { at: 12.0, action: 'credit', id: 'beccaro' },
  { at: 14.75, action: 'credit', id: 'beccaro', hide: true },

  // 15,00 — Cascade de boules jaunes sur le damier
  { at: 15.0, action: 'scene3d', id: 'cascade' },

  // 17,00 — Pivot musical : fond rouge pur, boules rapides
  { at: 17.0, action: 'scene3d', id: 'pivot' },

  // 19,00 — « Réalisé par Dominique Masson »
  { at: 19.0, action: 'credit', id: 'masson' },
  { at: 21.5, action: 'credit', id: 'masson', hide: true },

  // 22,00–24,00 — Lettres MOTUS en vrille sur fond rouge
  { at: 22.0, action: 'scene3d', id: 'letters-spin' },
  { at: 22.0, action: 'motus', phase: 'spin' },
  { at: 22.0, action: 'letter', id: 'm' },
  { at: 22.4, action: 'letter', id: 'o' },
  { at: 22.8, action: 'letter', id: 't' },
  { at: 23.2, action: 'letter', id: 'u' },
  { at: 23.6, action: 'letter', id: 's' },
  { at: 24.0, action: 'scene3d', id: 'logo-ball' },
  { at: 24.0, action: 'motus', phase: 'logo' },

  { at: 29.0, action: 'finish' },
];

/**
 * @param {{ pauseMenuGenerique: () => void, syncMenuGenerique: () => void, handoffGeneriqueToMenuMusic?: () => void, menuVolume?: number, force?: boolean }} opts
 * @returns {Promise<{ withAudio?: boolean } | void>}
 */
export function initGeneriqueIntro(opts) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!opts.force && reducedMotion) {
    return playStaticIntro(opts);
  }

  return playIntro(opts);
}

export function replayGeneriqueIntro(opts) {
  return initGeneriqueIntro({ ...opts, force: true });
}

function playIntro(opts) {
  const overlay = document.getElementById('generique-overlay');
  const app = document.getElementById('app');
  const canvas = document.getElementById('generique-canvas');
  const audio = document.getElementById('motus-snd-generique');
  const skipBtn = document.getElementById('generique-skip');

  if (!(overlay instanceof HTMLElement) || !(canvas instanceof HTMLCanvasElement)) {
    return Promise.resolve({ withAudio: false });
  }

  const creditEls = {
    nicole: overlay.querySelector('[data-credit="nicole"]'),
    beccaro: overlay.querySelector('[data-credit="beccaro"]'),
    masson: overlay.querySelector('[data-credit="masson"]'),
  };
  const motusEl = overlay.querySelector('[data-overlay="motus"]');

  function hideMotus() {
    if (!motusEl) return;
    motusEl.classList.remove('is-visible', 'generique__motus--fly', 'generique__motus--spin', 'generique__motus--logo');
    resetMotusParts();
  }

  function resetMotusParts() {
    motusEl?.querySelectorAll('[data-part]').forEach((part) => {
      part.classList.remove('is-revealed');
    });
  }

  function revealMotusPart(id) {
    const el = motusEl?.querySelector(`[data-part="${id}"]`);
    if (!el) return;
    el.classList.remove('is-revealed');
    void el.offsetWidth;
    el.classList.add('is-revealed');
  }

  function setMotusPhase(phase) {
    if (!(motusEl instanceof HTMLElement)) return;

    if (phase === 'hide') {
      hideMotus();
      return;
    }

    if (phase === 'logo') {
      const wasSpin = motusEl.classList.contains('generique__motus--spin');
      motusEl.classList.remove('generique__motus--fly', 'generique__motus--spin', 'generique__motus--logo');
      motusEl.classList.add('is-visible');

      const revealAll = () => {
        motusEl.classList.add('generique__motus--logo');
        motusEl.querySelectorAll('[data-part]').forEach((part) => {
          part.classList.add('is-revealed');
        });
      };

      if (wasSpin) {
        motusEl.classList.add('generique__motus--spin');
        requestAnimationFrame(() => {
          motusEl.classList.remove('generique__motus--spin');
          revealAll();
        });
      } else {
        revealAll();
      }
      return;
    }

    resetMotusParts();
    motusEl.classList.remove('generique__motus--fly', 'generique__motus--spin', 'generique__motus--logo');
    motusEl.classList.add(`generique__motus--${phase}`, 'is-visible');
  }

  let finished = false;
  let resolveIntro = null;
  let introSyncedAudio = false;
  let rafId = 0;
  let lastTs = 0;
  let firedIndex = 0;
  let fallbackClock = 0;
  const vol = opts.menuVolume ?? 0.42;

  opts.pauseMenuGenerique();

  if (app) app.style.visibility = 'hidden';
  overlay.hidden = false;
  overlay.classList.remove('generique--fade-out', 'generique--static');

  let generique3d = createGenerique3D(canvas);
  if (!generique3d) {
    overlay.classList.add('generique--static');
    setMotusPhase('logo');
  } else {
    generique3d.resize();
  }

  const onResize = () => generique3d?.resize();
  window.addEventListener('resize', onResize);

  function hideAllCredits() {
    for (const el of Object.values(creditEls)) {
      el?.classList.remove('is-visible');
    }
  }

  function showCredit(id, show) {
    hideAllCredits();
    if (show) creditEls[id]?.classList.add('is-visible');
  }

  function applyEvent(ev) {
    if (ev.action === 'scene3d' && generique3d) generique3d.setScene(ev.id);
    if (ev.action === 'credit') showCredit(ev.id, !ev.hide);
    if (ev.action === 'letter') revealMotusPart(ev.id);
    if (ev.action === 'motus') setMotusPhase(ev.phase);
    if (ev.action === 'finish') void finishIntro();
  }

  function applyTimeline(t) {
    while (firedIndex < INTRO_TIMELINE.length && INTRO_TIMELINE[firedIndex].at <= t) {
      applyEvent(INTRO_TIMELINE[firedIndex]);
      firedIndex += 1;
    }
  }

  function handoffAudio() {
    if (typeof opts.handoffGeneriqueToMenuMusic === 'function') {
      opts.handoffGeneriqueToMenuMusic();
      return;
    }
    if (audio instanceof HTMLAudioElement) {
      audio.loop = true;
      audio.volume = vol;
      audio.muted = false;
      void audio.play().catch(() => {});
    }
    opts.syncMenuGenerique();
  }

  function finishIntro() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', onResize);
    skipBtn?.removeEventListener('click', onSkip);

    overlay.classList.add('generique--fade-out');

    if (generique3d) {
      generique3d.dispose();
      generique3d = null;
    }

    handoffAudio();

    setTimeout(() => {
      overlay.hidden = true;
      overlay.classList.remove('generique--fade-out', 'generique--static');
      hideAllCredits();
      hideMotus();
      if (app) app.style.visibility = '';
      handoffAudio();
      resolveIntro?.({ withAudio: introSyncedAudio });
      resolveIntro = null;
    }, 520);
  }

  function onSkip() {
    finishIntro();
  }

  skipBtn?.addEventListener('click', onSkip);

  if (!generique3d) {
    return new Promise((resolve) => {
      resolveIntro = resolve;
      setTimeout(() => finishIntro(), 2200);
    });
  }

  if (audio instanceof HTMLAudioElement) {
    introSyncedAudio = true;
    audio.loop = false;
    audio.currentTime = 0;
    audio.volume = vol;
    audio.muted = false;
    void audio.play().catch(() => {});
  }

  return new Promise((resolve) => {
    resolveIntro = resolve;

    function tick(ts) {
      if (finished) return;
      const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 1 / 60;
      lastTs = ts;

      let t;
      if (audio instanceof HTMLAudioElement && !audio.paused && audio.currentTime > 0) {
        t = audio.currentTime;
        fallbackClock = t;
      } else {
        fallbackClock += dt;
        t = fallbackClock;
      }

      applyTimeline(t);
      generique3d.update(dt, t);

      if (audio instanceof HTMLAudioElement && t >= 28 && !audio.loop) {
        audio.loop = true;
        void audio.play().catch(() => {});
      }

      if (t >= INTRO_DURATION) {
        finishIntro();
        return;
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
  });
}

function playStaticIntro(opts) {
  const overlay = document.getElementById('generique-overlay');
  const app = document.getElementById('app');
  const motusEl = overlay?.querySelector('[data-overlay="motus"]');

  if (!(overlay instanceof HTMLElement)) return Promise.resolve({ withAudio: false });

  opts.pauseMenuGenerique();
  if (app) app.style.visibility = 'hidden';
  overlay.hidden = false;
  overlay.classList.add('generique--static');
  if (motusEl instanceof HTMLElement) {
    motusEl.classList.add('is-visible', 'generique__motus--logo');
    motusEl.querySelectorAll('[data-part]').forEach((part) => {
      part.classList.add('is-revealed');
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      overlay.hidden = true;
      overlay.classList.remove('generique--static');
      if (motusEl instanceof HTMLElement) {
        motusEl.classList.remove('is-visible', 'generique__motus--logo');
        motusEl.querySelectorAll('[data-part]').forEach((part) => {
          part.classList.remove('is-revealed');
        });
      }
      if (app) app.style.visibility = '';
      opts.syncMenuGenerique();
      resolve({ withAudio: false });
    }, 2200);
  });
}
