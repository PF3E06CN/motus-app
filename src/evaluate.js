/** Évalue une proposition Motus (rouge / jaune / bleu). */
export function evaluateGuess(guess, target) {
  const len = target.length;
  const result = Array(len).fill('missing');
  const remaining = {};

  for (const ch of target) {
    remaining[ch] = (remaining[ch] || 0) + 1;
  }

  for (let i = 0; i < len; i++) {
    if (guess[i] === target[i]) {
      result[i] = 'correct';
      remaining[guess[i]]--;
    }
  }

  for (let i = 0; i < len; i++) {
    if (result[i] === 'correct') continue;
    const ch = guess[i];
    if (remaining[ch] > 0) {
      result[i] = 'wrong';
      remaining[ch]--;
    }
  }

  return result;
}
