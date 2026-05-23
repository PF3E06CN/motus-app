# Motus App

Jeu de mots inspiré de [motusJS](https://github.com/difabiolorenzo/motusJS) et de l'émission **Motus** (France Télévisions).

## Jouer en ligne (GitHub Pages)

Une fois le déploiement activé sur le dépôt :

**https://pf3e06cn.github.io/motus-app/**

1. Sur GitHub : **Settings** → **Pages** → **Build and deployment** → source **GitHub Actions** (recommandé).
2. Poussez le dépôt (`git push`) : le workflow *Deploy GitHub Pages* build et publie automatiquement.

**Déploiement manuel** (si le push du workflow est refusé) :

```bash
npm install
npm run deploy:pages
```

Puis **Settings** → **Pages** → source **Deploy from a branch** → branche `gh-pages` → dossier `/ (root)`.

Connexion Internet requise pour charger les dictionnaires (motusJS).

## Lancer

**Sans installation** (Python) :

```bash
cd motus-app
./start.sh
# ou : python3 -m http.server 8765
```

Puis ouvrez http://localhost:8765 (utilisez bien `./start.sh` : le logo et les sons sont dans `Images/` et `public/sounds/`).

**Avec Vite** (si Node.js est installé) :

```bash
npm install
npm run dev
```

## Règles (résumé)

- Première lettre imposée, épeler le mot en entier à chaque essai.
- Rouge = bien placé · jaune = mal placé · bleu = absente.
- **Bleu** sur le clavier : lettre absente du mot.

Les dictionnaires sont chargés depuis le dépôt motusJS (connexion Internet requise au premier chargement). Un jeu de secours local est utilisé si le réseau échoue.

## Sons (`public/sounds/`)

### Voix animateur (chiffres et lettres uniquement)

Fichiers **`1.mp3` … `70.mp3`** et **`a.mp3` … `z.mp3`** : annonces à l’oral. Gérés par `src/cast-sounds.js` uniquement.

Ne pas les utiliser comme effets de jeu (pas de « son 6 » plateau = `6.mp3` voix « six »).

### Habillage sonore (effets de jeu)

Configurés dans `GAME_SFX` (`src/sounds.js`) :

| Constante | Fichier | Rôle |
|-----------|---------|------|
| `plateauReveal` | `Retournement-Chiffre.mp3` | Intro : une case numéro se dévoile |
| `plateauHideEight` | `Retournement-Chiffre.mp3` | 8 cases repassent face cachée |
| `plateauDrawFlip` | `Tirrage-Chiffre.mp3` | Numéro tiré : case qui se retourne (après la voix) |
| `plateauMotusLine` | `Motus.mp3` | Ligne Motus complète |
| `plateauBlackBall` | `BouleNoire.mp3` | Boule noire |
| `verifyCorrect` / `Wrong` / `Missing` | `verify-*.mp3` | Correction lettre (grille mots) |
| `wordInvalid` | `word-invalid.mp3` | Mot refusé |
| `wordWin` | `word-win.mp3` | Mot trouvé |
| `menuGenerique` | `generique.mp3` | Musique menu |

Fichiers présents mais **non branchés** tant que non confirmés : `no-more-try.mp3`.

Pour assigner le masquage des 8 cases : dans `sounds.js`, `GAME_SFX.plateauHideEight = 'NomDuFichier'` (sans `.mp3`).

Synchroniser les voix depuis Geluiden : `./scripts/sync-cast-sounds.sh`

## Crédits

- Logique et listes de mots : [difabiolorenzo/motusJS](https://github.com/difabiolorenzo/motusJS)
- Motus est une marque de France Télévisions.
