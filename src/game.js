import { evaluateGuess } from './evaluate.js';
import { isValidWord, loadDictionaries, pickRandomWord } from './dictionary.js';
import { writeReponseFile } from './dev-reponse.js';
import {
  isSafariBrowser,
  playErrorBuzz,
  playVerifyLetterSound,
  playVerifySequence,
  playWinFanfare,
  unlockAudioSync,
  warmVerifyAudio,
} from './sounds.js';

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
    this.targets = null;
    this.rows = [];
    this.currentRow = 0;
    this.cursorIndex = 0;
    /** Prochaine lettre à épeler (0 → fin du mot, comme à la télé). */
    this.nextTypeCol = 0;
    this.placement = [];
    this.absentLetters = new Set();
    this.finished = false;
    this.loading = false;
    this.inputLocked = false;
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

    this.message = '';
    const results = evaluateGuess(guess, this.target);
    const won = guess === this.target;

    this.inputLocked = true;
    try {
      await warmVerifyAudio();

      const applyLetterResult = (i) => {
        row.states[i] = results[i];
        if (results[i] === 'correct') {
          this.placement[i] = 'correct';
        }
        if (results[i] === 'missing') {
          this.absentLetters.add(guess[i]);
        }
        this.emit();
      };

      if (isSafariBrowser()) {
        await playVerifySequence(results, {
          isWin: won,
          onLetter: (i) => applyLetterResult(i),
        }).catch(() => {});
      } else {
        for (let i = 0; i < this.length; i++) {
          applyLetterResult(i);
          await playVerifyLetterSound(results[i], {
            index: i,
            wordLen: this.length,
            isWin: won,
          }).catch(() => {});
        }
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

export { AZERTY_ROWS };
