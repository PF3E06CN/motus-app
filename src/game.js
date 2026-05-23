import { evaluateGuess } from './evaluate.js';
import { isValidWord, loadDictionaries, pickRandomWord } from './dictionary.js';
import { writeReponseFile } from './dev-reponse.js';
import { playErrorBuzz, playVerifyLetterSound, playWinFanfare, unlockAudioSync } from './sounds.js';

const AZERTY_ROWS = [
  'AZERTYUIOP',
  'QSDFGHJKLM',
  'WXCVBN',
];

export class MotusGame {
  constructor({ onUpdate, onEnd }) {
    this.onUpdate = onUpdate;
    this.onEnd = onEnd;
    this.length = 6;
    this.maxAttempts = 6;
    this.target = '';
    this.verifySet = null;
    /** Mots possibles pour la longueur en cours (conservé pour enchaîner sans rechargement). */
    this.targets = null;
    this.rows = [];
    this.currentRow = 0;
    this.cursorIndex = 0;
    /** Colonne où la prochaine frappe s’applique (0 → fin, mot entier). */
    this.nextTypeCol = 0;
    /** Positions bien placées (conservées d’un essai à l’autre). */
    this.placement = [];
    this.absentLetters = new Set();
    this.finished = false;
    this.loading = false;
    /** Pendant la correction lettre à lettre : pas de frappe ni curseur. */
    this.inputLocked = false;
    /** Après victoire : phase grille Motus 5×5 + tirage de boules (comme à l’émission). */
    this.winBallPhase = false;
  }

  async start(length) {
    this.loading = true;
    this.emit();
    this.length = length;
    this.maxAttempts = length;
    const { targets, verify } = await loadDictionaries(length);
    this.targets = targets;
    this.verifySet = verify;
    this.target = pickRandomWord(targets);
    writeReponseFile(this.target);
    this.resetState();
    this.loading = false;
    this.emit();
  }

  /**
   * Nouveau mot sans repasser par l’écran « Chargement » (après victoire + tirage plateau).
   * Réutilise les listes déjà chargées ; sinon retombe sur {@code start}.
   */
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
    this.finished = false;
    this.inputLocked = false;
    this.winBallPhase = false;
    this.newRow();
  }

  getActiveRow() {
    return this.rows[this.currentRow];
  }

  isGivenState(state) {
    return state === 'given';
  }

  isDraftState(state) {
    return state === 'typed';
  }

  isFilledState(state) {
    return state === 'starter' || this.isGivenState(state) || this.isDraftState(state);
  }

  /** Première case : lettre affichée, à confirmer au clavier (starter) puis verrouillée (given). */
  isLetterEditable(index) {
    const row = this.getActiveRow();
    if (!row || index < 0 || index >= this.length) return false;
    const s = row.states[index];
    return s === 'starter' || s === 'empty' || s === 'typed' || s === 'given';
  }

  /** Curseur sur la ligne en cours. */
  isCursorCell(index) {
    const row = this.getActiveRow();
    if (!row || index < 0 || index >= this.length) return false;
    return this.isLetterEditable(index);
  }

  initCursor() {
    this.cursorIndex = Math.min(this.nextTypeCol, this.length - 1);
  }

  setCursor(index) {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return;
    if (!this.isCursorCell(index)) return;
    this.cursorIndex = index;
    this.nextTypeCol = index;
    this.message = '';
    this.emit();
  }

  moveCursor(delta) {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return;
    const pool = [];
    for (let i = 0; i < this.length; i++) {
      if (this.isCursorCell(i)) pool.push(i);
    }
    if (pool.length === 0) return;
    const pos = pool.indexOf(this.cursorIndex);
    const next =
      pos === -1
        ? pool[0]
        : pool[(pos + delta + pool.length) % pool.length];
    this.cursorIndex = next;
    this.nextTypeCol = next;
    this.emit();
  }

  newRow() {
    if (this.currentRow >= this.maxAttempts) return;
    this.rows.push({
      letters: Array(this.length).fill(''),
      states: Array(this.length).fill('empty'),
    });
    const row = this.rows[this.currentRow];

    row.letters[0] = this.target[0];
    if (this.currentRow === 0) {
      row.states[0] = 'starter';
    } else if (this.placement[0] === 'correct') {
      row.states[0] = 'given';
    }

    for (let i = 1; i < this.length; i++) {
      if (this.placement[i] === 'correct') {
        row.letters[i] = this.target[i];
        row.states[i] = 'given';
      }
    }

    this.nextTypeCol = 0;
    this.initCursor();
  }

  typeLetter(letter) {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return;
    const ch = letter.toUpperCase();
    if (!/^[A-Z]$/.test(ch)) return;

    const row = this.getActiveRow();
    if (this.nextTypeCol >= this.length) return;

    const idx = this.nextTypeCol;
    const state = row.states[idx];

    if (state === 'starter') {
      if (ch !== row.letters[0]) {
        this.message = `Tapez la lettre affichée (${row.letters[0]}).`;
        this.emit();
        return;
      }
      row.letters[idx] = ch;
      row.states[idx] = 'given';
    } else if (state === 'given') {
      row.letters[idx] = ch;
      row.states[idx] = ch === this.target[idx] ? 'given' : 'typed';
    } else if (state === 'empty') {
      row.letters[idx] = ch;
      row.states[idx] = 'typed';
    } else if (state === 'typed') {
      row.letters[idx] = ch;
    } else {
      return;
    }

    this.nextTypeCol = idx + 1;
    this.initCursor();
    this.message = '';
    this.emit();
  }

  deleteLetter() {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return;
    const row = this.getActiveRow();
    if (!row || this.nextTypeCol <= 0) return;

    let idx = this.nextTypeCol - 1;
    while (idx >= 0 && this.isGivenState(row.states[idx])) {
      idx--;
    }
    if (idx < 0) return;

    if (idx === 0 && row.states[0] === 'given' && this.currentRow > 0) {
      return;
    }

    if (row.states[idx] === 'starter') {
      return;
    }

    row.letters[idx] = '';
    row.states[idx] = 'empty';
    this.nextTypeCol = idx;
    this.initCursor();
    this.message = '';
    this.emit();
  }

  /** Toutes les cases de la ligne courante sont remplies (y compris la 1ʳᵉ lettre confirmée). */
  isRowComplete() {
    const row = this.getActiveRow();
    if (!row) return false;
    for (let i = 0; i < this.length; i++) {
      if (!row.letters[i] || row.states[i] === 'empty' || row.states[i] === 'starter') {
        return false;
      }
    }
    return true;
  }

  canSubmit() {
    if (this.finished || this.loading || this.inputLocked || this.winBallPhase) return false;
    return !!this.getActiveRow();
  }

  buildGuess() {
    const row = this.getActiveRow();
    return row.letters.join('');
  }

  rejectAttempt(message) {
    this.message = message;
    const row = this.getActiveRow();
    for (let i = 0; i < this.length; i++) {
      row.states[i] = 'invalid';
    }
    this.goToNextAttempt();
  }

  goToNextAttempt() {
    this.currentRow++;
    if (this.currentRow >= this.maxAttempts) {
      void this.finishWithLoss();
      return;
    }
    this.newRow();
    this.emit();
  }

  /** Grille perdue : buzz, puis le mot solution lettre par lettre (sons de validation). */
  async playLossRevealAnimation() {
    const row = this.rows[this.maxAttempts - 1] ?? this.getActiveRow();
    if (!row) return;

    this.inputLocked = true;
    this.finished = true;
    this.message = 'Mot non trouvé…';
    this.emit();

    await playErrorBuzz().catch(() => {});
    await new Promise((r) => setTimeout(r, 200));

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
      if (row?.states[0] === 'starter') {
        this.message = `Tapez la lettre affichée (${row.letters[0]}) avant de valider.`;
        this.emit();
        return;
      }
      if (!isLastAttempt) await playErrorBuzz().catch(() => {});
      this.rejectAttempt('Mot incomplet — essai perdu.');
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

    this.message = '';
    const results = evaluateGuess(guess, this.target);
    const won = guess === this.target;

    this.inputLocked = true;
    try {
      for (let i = 0; i < this.length; i++) {
        row.states[i] = results[i];
        if (results[i] === 'correct') {
          this.placement[i] = 'correct';
        }
        if (results[i] === 'missing') {
          this.absentLetters.add(guess[i]);
        }
        this.emit();
        await playVerifyLetterSound(results[i], {
          index: i,
          wordLen: this.length,
          isWin: won,
        }).catch(() => {});
      }

      if (won) {
        await playWinFanfare().catch(() => {});
        this.finished = true;
        this.winBallPhase = true;
        this.emit();
        this.onEnd?.({ won: true, word: this.target, attempts: this.currentRow + 1 });
        return;
      }

      this.goToNextAttempt();
    } finally {
      this.inputLocked = false;
    }
  }

  /** Indices sous la grille (ne remplace pas la saisie). */
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

export { AZERTY_ROWS };
