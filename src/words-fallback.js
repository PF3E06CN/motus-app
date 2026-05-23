/** Mots de secours si le dictionnaire distant est indisponible. */
export const FALLBACK = {
  5: {
    targets: ['MAISON', 'PLAGE', 'ROUGE', 'VERTE', 'MONDE'],
    verify: new Set([
      'MAISON', 'PLAGE', 'ROUGE', 'VERTE', 'MONDE', 'TABLE', 'CHIEN', 'FLEUR',
      'PORTE', 'LIVRE', 'PARIS', 'GRAND', 'PETIT', 'BLANC', 'NOIRE',
    ]),
  },
  6: {
    targets: ['MAISON', 'BEAUTE', 'GARDER', 'MOMENT', 'SOLEIL', 'GUERRE'],
    verify: new Set([
      'MAISON', 'BEAUTE', 'GARDER', 'MOMENT', 'SOLEIL', 'GUERRE', 'FLEURS',
      'CHAISE', 'MARCHE', 'PARLER', 'COURIR', 'DORMIR', 'JARDIN', 'COULEUR',
    ]),
  },
  7: {
    targets: ['MAISON', 'BONHEUR', 'TRAVAIL', 'MUSIQUE', 'HISTOIRE'],
    verify: new Set([
      'MAISON', 'BONHEUR', 'TRAVAIL', 'MUSIQUE', 'HISTOIRE', 'FAMILLE',
      'CULTURE', 'NATURE', 'LIBERTE', 'JARDINS', 'CHAMBRE',
    ]),
  },
  8: {
    targets: ['MAISON', 'ELEPHANT', 'MUSIQUE', 'HISTOIRE', 'BUREAU'],
    verify: new Set([
      'MAISON', 'ELEPHANT', 'MUSIQUE', 'HISTOIRE', 'BUREAU', 'CHOCOLAT',
      'MONTAGNE', 'PARADIS', 'VOYAGES', 'CULTURE',
    ]),
  },
  9: {
    targets: ['MAISON', 'ELEPHANT', 'AVENTURE', 'PLANETE'],
    verify: new Set(['MAISON', 'ELEPHANT', 'AVENTURE', 'PLANETE', 'MAGNIFIQUE']),
  },
  10: {
    targets: ['MAISON', 'ELEPHANT', 'MAGNIFIQUE'],
    verify: new Set(['MAISON', 'ELEPHANT', 'MAGNIFIQUE', 'ARCHITECTE']),
  },
};
