import { evaluateGuess } from './evaluate.js';
import { isValidWord, loadDictionaries, pickRandomWord } from './dictionary.js';
import { writeReponseFile } from './dev-reponse.js';
import {
  isSafariBrowser,
  playErrorBuzz,
  playLetterBonusSound,
  playTimeoutSound,
  playWordNotFoundSound,
  playVerifyLetterSound,
  playVerifySequence,
  playWinFanfare,
  unlockAudioSync,
  warmVerifyAudio,
} from './sounds.js';

/** Durée du clignotement apparition / disparition de la lettre bonus. */
const BONUS_LETTER_BLINK_MS = 1250;
const BONUS_LETTER_BLINK_STEP_MS = 180;

function delayMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AZERTY_ROWS = [
  'AZERTYUIOP',
  'QSDFGHJKLM',
  'WXCVBN',
];

/** Colonnes (grille 10 alignée) — ligne 3 : W–N puis ⌫ (sous L) ↵ (sous M). */
const AZERTY_KEY_COLUMNS = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6],
];

export class MotusGame {
  constructor({ onUpdate, onEnd }) {
    this.onUpdate = onUpdate;
    this.onEnd = onEnd;
    this.length = 6;
    this.maxAttempts = 6;
    this.target = '';
    this.verifySet = null;
    this.targets = null;
    this.rows = [];
    this.currentRow = 0;
    this.cursorIndex = 0;
    /** Prochaine lettre à épeler (0 → fin du mot, comme à la télé). */
    this.nextTypeCol = 0;
    this.placement = [];
    this.absentLetters = new Set();
    /** Lettres déjà révélées bien placées (rouge) — affichées en rouge sur le clavier. */
    this.correctPlaceLetters = new Set();
    /** Lettres déjà révélées mal placées (jaune) — affichées en jaune sur le clavier. */
    this.wrongPlaceLetters = new Set();
    this.finished = false;
    this.loading = false;
    this.inputLocked = false;
    this.winBallPhase = false;
    /** Safari : mise à jour légère de la grille pendant les sons de validation. */
    this.verifyAnimating = false;
    this.teamMode = false;
    this.teamSize = 1;
    this.currentTeamIndex = 0;
    this.teamOnErrorBehavior = 'add-bonus';
    this.turnTimerEnabled = false;
    this.turnTimerSeconds = 8;
    /** Colonne en cours de révélation bonus (-1 = aucune). */
    this.bonusRevealCol = -1;
    this.bonusRevealBlinking = false;
    this.bonusRevealVisible = true;
  }

  configureTeam(
    { teamMode = false, teamSize = 2, teamOnErrorBehavior = 'add-bonus' } = {},
    { resetHand = true } = {}
  ) {
    this.teamMode = !!teamMode;
    this.teamSize = this.teamMode ? Math.min(4, Math.max(2, teamSize)) : 1;
    const legacy = {
      'relay-bonus': 'add-bonus',
      relay: 'add',
      stay: 'replace',
    };
    const normalized = legacy[teamOnErrorBehavior] ?? teamOnErrorBehavior;
    const allowed = new Set(['replace-bonus', 'replace', 'add-bonus', 'add']);
    this.teamOnErrorBehavior = allowed.has(normalized) ? normalized : 'add-bonus';
    if (resetHand) this.currentTeamIndex = 0;
  }

  getCurrentTeamName() {
    return `Équipe ${this.currentTeamIndex + 1}`;
  }

  advanceTeam() {
    if (!this.teamMode) return;
    this.currentTeamIndex = (this.currentTeamIndex + 1) % this.teamSize;
  }

  /** Première lettre encore inconnue (index), sans l’afficher. */
  findFirstBonusLetterIndex() {
    for (let i = 0; i < this.length; i++) {
      if (this.placement[i] !== 'correct') return i;
    }
    return -1;
  }

  /** Alterne affichage / masquage de la lettre bonus pendant {@link BONUS_LETTER_BLINK_MS}. */
  async runBonusLetterBlink() {
    this.bonusRevealBlinking = true;
    this.bonusRevealVisible = true;
    this.emit();

    const steps = Math.ceil(BONUS_LETTER_BLINK_MS / BONUS_LETTER_BLINK_STEP_MS);
    for (let i = 0; i < steps; i++) {
      await delayMs(BONUS_LETTER_BLINK_STEP_MS);
      this.bonusRevealVisible = !this.bonusRevealVisible;
      this.emit();
    }

    this.bonusRevealBlinking = false;
    this.bonusRevealVisible = true;
    this.emit();
  }

  /** Révèle la lettre bonus (clignote 1,25 s + son), puis reprend la saisie. */
  async grantBonusLetterWithReveal() {
    const idx = this.findFirstBonusLetterIndex();
    if (idx < 0) return;

    this.placement[idx] = 'correct';
    this.correctPlaceLetters.add(this.target[idx]);
    this.wrongPlaceLetters.delete(this.target[idx]);
    const row = this.getActiveRow();
    if (row) {
      row.letters[idx] = this.target[idx];
      row.states[idx] = 'given';
    }
    this.bonusRevealCol = idx;
    this.inputLocked = true;
    this.emit();

    await Promise.all([
      this.runBonusLetterBlink(),
      playLetterBonusSound().catch(() => {}),
    ]);

    this.bonusRevealCol = -1;
    if (this.nextTypeCol <= idx) {
      this.nextTypeCol = Math.min(idx + 1, this.length);
      this.initCursor();
    }
    this.inputLocked = false;
    this.emit();
  }

  async start(length, options = {}) {
    this.loading = true;
    this.emit();
    this.length = length;
    this.maxAttempts = length;
    const preserveHand = options.preserveTeamHand === true;
    this.configureTeam(options, { resetHand: !preserveHand });
    this.turnTimerEnabled = !!options.turnTimerEnabled;
    const tSec = Number(options.turnTimerSeconds) || 8;
    this.turnTimerSeconds = Math.max(8, Math.min(30, tSec));
    const { targets, verify } = await loadDictionaries(length);
    this.targets = targets;
    this.verifySet = verify;
    this.target = pickRandomWord(targets);
    writeReponseFile(this.target);
    this.resetState();
    this.loading = false;
    this.emit();
  }

  startNextWordAfterWin() {
    if (!Array.isArray(this.targets) || this.targets.length === 0 || !this.verifySet) {
      void this.start(this.length);
      return;
    }
    this.target = pickRandomWord(this.targets);
    writeReponseFile(this.target);
    this.resetState();
    this.message = '';
    this.emit();
  }

  resetState() {
    this.rows = [];
    this.currentRow = 0;
    this.placement = Array(this.length).fill(null);
    this.placement[0] = 'correct';
    this.absentLetters = new Set();
    this.correctPlaceLetters = new Set();
    this.wrongPlaceLetters = new Set();
    if (this.target?.[0]) this.correctPlaceLetters.add(this.target[0]);
    this.finished = false;
    this.inputLocked = false;
    this.winBallPhase = false;
    this.bonusRevealCol = -1;
    this.bonusRevealBlinking = false;
    this.bonusRevealVisible = true;
    this.newRow();
  }

  getActiveRow() {
    return this.rows[this.currentRow];
  }

  /** Case de la ligne en cours : on peut toujours réécrire (préremplie ou vide). */
  isLetterEditable(index) {
    const row = this.getActiveRow();
    if (!row || index < 0 || index >= this.length) return false;
    const s = row.states[index];
    return s === 'empty' || s === 'typed' || s === 'given';
  }

  initCursor() {
    this.cursorIndex = Math.min(this.nextTypeCol, this.length - 1);
  }

  /** Remet la préremplique d’une colonne bien placée. */
  restorePrefill(row, index) {
    if (index === 0 || this.placement[index] === 'correct') {
      row.letters[index] = this.target[index];
      row.states[index] = 'given';
      return;
    }
    row.letters[index] = '';
    row.states[index] = 'empty';
  }

  isPrefilledCol(index) {
    return index === 0 || this.placement[index] === 'correct';
  }

  setCursor(index) {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return;
    if (!this.isLetterEditable(index)) return;
    this.cursorIndex = index;
    this.nextTypeCol = index;
    this.message = '';
    this.emit();
  }

  moveCursor(delta) {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return;
    const next = Math.max(0, Math.min(this.length - 1, this.cursorIndex + delta));
    this.setCursor(next);
  }

  newRow() {
    if (this.currentRow >= this.maxAttempts) return;
    this.rows.push({
      letters: Array(this.length).fill(''),
      states: Array(this.length).fill('empty'),
    });
    const row = this.rows[this.currentRow];
    row.teamIndex = this.teamMode ? this.currentTeamIndex : 0;

    for (let i = 0; i < this.length; i++) {
      if (this.isPrefilledCol(i)) {
        row.letters[i] = this.target[i];
        row.states[i] = 'given';
      }
    }

    this.nextTypeCol = 0;
    this.cursorIndex = 0;
  }

  typeLetter(letter) {
    if (this.finished || this.loading || this.winBallPhase) return;
    if (this.inputLocked) {
      this.message = 'Correction en cours…';
      this.emit();
      return;
    }
    const ch = letter.toUpperCase();
    if (!/^[A-Z]$/.test(ch)) return;

    const row = this.getActiveRow();
    if (!row) return;

    const idx = this.nextTypeCol;
    if (idx >= this.length) return;

    row.letters[idx] = ch;
    if (row.states[idx] === 'empty') {
      row.states[idx] = 'typed';
    } else if (row.states[idx] === 'given' && ch !== this.target[idx]) {
      row.states[idx] = 'typed';
    }

    this.nextTypeCol = idx + 1;
    this.initCursor();
    this.message = '';
    this.emit();
  }

  deleteLetter() {
    if (this.finished || this.loading || this.winBallPhase) return;
    if (this.inputLocked) {
      this.message = 'Correction en cours…';
      this.emit();
      return;
    }
    const row = this.getActiveRow();
    if (!row || this.nextTypeCol <= 0) return;

    const idx = this.nextTypeCol - 1;
    this.restorePrefill(row, idx);
    this.nextTypeCol = idx;
    this.initCursor();
    this.message = '';
    this.emit();
  }

  isRowComplete() {
    const row = this.getActiveRow();
    if (!row) return false;
    for (let i = 0; i < this.length; i++) {
      if (!row.letters[i] || row.states[i] === 'empty') return false;
    }
    return true;
  }

  canSubmit() {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return false;
    return !!this.getActiveRow();
  }

  buildGuess() {
    return this.getActiveRow().letters.join('');
  }

  /** Mot déjà validé sur une ligne précédente (hors essais rejetés « invalid »). */
  wasAlreadyProposed(guess) {
    const word = guess.toUpperCase();
    for (let r = 0; r < this.currentRow; r++) {
      const row = this.rows[r];
      if (!row || row.states.some((s) => s === 'invalid')) continue;
      if (row.letters.join('').toUpperCase() === word) return true;
    }
    return false;
  }

  /** Réinitialise la ligne d’essai en cours (même numéro d’essai). */
  async replaceCurrentAttempt({ grantBonus = false } = {}) {
    const row = this.getActiveRow();
    if (!row) return;
    for (let i = 0; i < this.length; i++) {
      if (this.isPrefilledCol(i)) {
        row.letters[i] = this.target[i];
        row.states[i] = 'given';
      } else {
        row.letters[i] = '';
        row.states[i] = 'empty';
      }
    }
    this.nextTypeCol = 0;
    while (this.nextTypeCol < this.length && this.isPrefilledCol(this.nextTypeCol)) {
      this.nextTypeCol++;
    }
    this.initCursor();
    if (grantBonus) await this.grantBonusLetterWithReveal();
    this.message = '';
    this.emit();
  }

  async handleTeamRelayAttempt(grantBonus) {
    const row = this.getActiveRow();
    if (row) {
      for (let i = 0; i < this.length; i++) {
        row.states[i] = 'invalid';
      }
    }
    this.advanceTeam();
    await this.goToNextAttempt({
      skipTeamAdvance: true,
      grantBonus,
    });
  }

  async handleTeamErrorAttempt() {
    const behavior = this.teamOnErrorBehavior;
    if (behavior === 'replace-bonus') {
      await this.replaceCurrentAttempt({ grantBonus: true });
      return;
    }
    if (behavior === 'replace') {
      await this.replaceCurrentAttempt({ grantBonus: false });
      return;
    }
    await this.handleTeamRelayAttempt(behavior === 'add-bonus');
  }

  /** Temps écoulé en équipe : relais + règle du menu (dont lettre bonus si configurée). */
  async handleTeamTimeoutAttempt() {
    const behavior = this.teamOnErrorBehavior;
    if (behavior === 'replace-bonus') {
      this.advanceTeam();
      await this.replaceCurrentAttempt({ grantBonus: true });
      return;
    }
    if (behavior === 'replace') {
      this.advanceTeam();
      await this.replaceCurrentAttempt({ grantBonus: false });
      return;
    }
    await this.handleTeamRelayAttempt(behavior === 'add-bonus');
  }

  async handleTurnTimeout() {
    if (this.finished || this.loading || this.winBallPhase || this.inputLocked) return;
    unlockAudioSync();
    this.inputLocked = true;
    const playedTimeout = await playTimeoutSound().catch(() => false);
    if (!playedTimeout) await playErrorBuzz().catch(() => {});

    if (this.teamMode) {
      this.message = 'Temps écoulé — à l’équipe suivante.';
      await this.handleTeamTimeoutAttempt();
      this.inputLocked = false;
      this.emit();
      return;
    }
    this.inputLocked = false;
    this.rejectAttempt('Temps écoulé — essai perdu.');
  }

  rejectAttempt(message) {
    this.message = message;
    if (this.teamMode) {
      void this.handleTeamErrorAttempt();
      return;
    }
    const row = this.getActiveRow();
    for (let i = 0; i < this.length; i++) {
      row.states[i] = 'invalid';
    }
    void this.goToNextAttempt();
  }

  async goToNextAttempt({ skipTeamAdvance = false, grantBonus = false } = {}) {
    this.currentRow++;
    if (this.currentRow >= this.maxAttempts) {
      void this.finishWithLoss();
      return;
    }
    if (this.teamMode && !skipTeamAdvance) {
      this.advanceTeam();
    }
    this.newRow();
    if (grantBonus) await this.grantBonusLetterWithReveal();
    this.message = '';
    this.emit();
  }

  async playLossRevealAnimation() {
    const row = this.rows[this.maxAttempts - 1] ?? this.getActiveRow();
    if (!row) return;

    this.inputLocked = true;
    this.finished = true;
    this.message = 'Mot non trouvé…';
    this.emit();

    for (let i = 0; i < this.length; i++) {
      row.letters[i] = '';
      row.states[i] = 'empty';
    }
    this.emit();
    await new Promise((r) => setTimeout(r, 120));

    for (let i = 0; i < this.length; i++) {
      row.letters[i] = this.target[i];
      row.states[i] = 'correct';
      this.emit();
      await playVerifyLetterSound('correct', {
        index: i,
        wordLen: this.length,
        isWin: false,
      }).catch(() => {});
    }

    const playedNotFound = await playWordNotFoundSound().catch(() => false);
    if (!playedNotFound) await playErrorBuzz().catch(() => {});

    this.message = '';
    this.inputLocked = false;
    this.emit();
  }

  async finishWithLoss() {
    try {
      await this.playLossRevealAnimation();
    } catch {
      /* ignore */
    }
    this.onEnd?.({ won: false, word: this.target });
    this.emit();
  }

  async submit() {
    unlockAudioSync();
    if (this.winBallPhase) return;
    if (this.inputLocked) {
      this.message = 'Correction en cours…';
      this.emit();
      return;
    }
    if (!this.canSubmit()) {
      this.message = 'Validation indisponible pour le moment.';
      this.emit();
      return;
    }

    const isLastAttempt = this.currentRow >= this.maxAttempts - 1;
    const row = this.getActiveRow();

    if (!this.isRowComplete()) {
      if (!isLastAttempt) await playErrorBuzz().catch(() => {});
      this.rejectAttempt('Mot incomplet — épeler le mot en entier.');
      return;
    }

    const guess = this.buildGuess();

    if (guess[0] !== this.target[0]) {
      if (!isLastAttempt) await playErrorBuzz().catch(() => {});
      this.rejectAttempt(
        `Le mot doit commencer par ${this.target[0]} — essai perdu.`
      );
      return;
    }

    if (!isValidWord(guess, this.verifySet)) {
      if (!isLastAttempt) await playErrorBuzz().catch(() => {});
      this.rejectAttempt('Mot inconnu — essai perdu.');
      return;
    }

    if (this.wasAlreadyProposed(guess)) {
      if (!isLastAttempt) await playErrorBuzz().catch(() => {});
      this.rejectAttempt('Mot déjà proposé — essai perdu.');
      return;
    }

    this.message = '';
    const results = evaluateGuess(guess, this.target);
    const won = guess === this.target;

    this.inputLocked = true;
    try {
      await warmVerifyAudio();

      const applyLetterResult = (i) => {
        const ch = guess[i];
        row.states[i] = results[i];
        if (results[i] === 'correct') {
          this.placement[i] = 'correct';
          this.correctPlaceLetters.add(ch);
          this.wrongPlaceLetters.delete(ch);
        }
        if (results[i] === 'wrong') {
          this.wrongPlaceLetters.add(ch);
        }
        if (results[i] === 'missing') {
          this.absentLetters.add(ch);
          this.wrongPlaceLetters.delete(ch);
        }
        this.emit();
      };

      this.verifyAnimating = isSafariBrowser();
      try {
        await playVerifySequence(results, {
          isWin: won,
          onLetter: (i) => applyLetterResult(i),
        }).catch(() => {});
      } finally {
        this.verifyAnimating = false;
      }

      if (won) {
        await playWinFanfare().catch(() => {});
        this.finished = true;
        this.winBallPhase = true;
        this.emit();
        this.onEnd?.({ won: true, word: this.target, attempts: this.currentRow + 1 });
        return;
      }

      await this.goToNextAttempt();
    } finally {
      this.inputLocked = false;
      if (!this.finished && !this.winBallPhase && this.getActiveRow()) {
        this.emit();
      }
    }
  }

  getTypingIndicator() {
    const parts = [];
    for (let i = 0; i < this.length; i++) {
      if (this.placement[i] === 'correct') {
        parts.push(this.target[i]);
      } else {
        parts.push('·');
      }
    }
    return parts.join(' ');
  }

  emit() {
    this.onUpdate?.(this);
  }
}

export { AZERTY_ROWS, AZERTY_KEY_COLUMNS };
