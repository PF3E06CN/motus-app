# Motus App

Jeu de mots inspiré de [motusJS](https://github.com/difabiolorenzo/motusJS) et de l'émission **Motus** (France Télévisions).

## Jouer en ligne (GitHub Pages)

Une fois le déploiement activé sur le dépôt :

**https://pf3e06cn.github.io/motus-app/**

1. Sur GitHub : **Settings** → **Pages** → **Build and deployment** → source **Deploy from a branch** → branche **`gh-pages`** → dossier **`/ (root)`**.
2. Chaque `git push` sur `main` met à jour `gh-pages` via le workflow *Deploy GitHub Pages*.

**Déploiement manuel** (immédiat) :

```bash
npm install
npm run deploy:pages
```

Le jeu fonctionne **100 % hors ligne** une fois déployé ou servi localement (dictionnaires et sons inclus dans le dépôt).

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

- Première lettre imposée ; autant d’essais que de lettres ; mot complet à chaque validation.
- Rouge = bien placé · jaune = mal placé · bleu = absente · clavier bleu foncé = lettre absente.
- **Solo** ou **équipe** (2–4) : relais à chaque essai ; options après erreur (ligne remplacée / nouvelle ligne, avec ou sans lettre bonus).
- **Chrono** optionnel par tour ; **quota de mots** (8, 10, 12, 15 ou illimité).
- Mot trouvé : **+50 pts** (+100 au dernier mot) puis tirage plateau ; ligne Motus : **+100 pts** ; fin de partie = classement par points.
- Dernier mot (équipe) : tirage seulement si une ligne Motus peut encore faire gagner la partie.

## Dictionnaires (`public/dictionary/`)

Listes **mot à trouver** et **vérification** (5 à 10 lettres), origine [motusJS](https://github.com/difabiolorenzo/motusJS), copiées dans le dépôt pour jeu offline.

Pour les régénérer depuis motusJS :

```bash
./scripts/sync-dictionaries.sh
```

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
