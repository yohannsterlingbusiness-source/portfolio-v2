// Contenu global du site. Les valeurs entre crochets sont des emplacements à compléter.

export const site = {
  name: 'Yohann Sterling',
  shortName: 'YS',
  role: 'Développeur web',
  location: 'France',
  email: 'yohannsterling.business@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yohann-sterling/',
  availability: '[Disponibilité : ex. « Disponible à partir de novembre »]',
  description:
    "Yohann Sterling, développeur web. Création et refonte de sites internet pour les entreprises et les particuliers qui veulent être vus et choisis.",
  /** Domaine déclaré dans Plausible. Vide = aucun script d'analytics chargé. */
  plausibleDomain: '',
};

export const nav = [
  { label: 'Projets', href: 'projets/' },
  { label: 'Offre', href: 'offre/' },
  { label: 'À propos', href: 'a-propos/' },
];

export const services = [
  {
    n: '01',
    title: 'Création de site internet',
    text: "Votre activité n'a pas encore de site, ou rien qui vous ressemble. On part de zéro, proprement.",
  },
  {
    n: '02',
    title: 'Refonte de site internet',
    text: 'Votre site existe mais ne convainc plus. On garde ce qui marche, on reconstruit le reste.',
  },
  {
    n: '03',
    title: 'Maintenance',
    text: 'Mises à jour, sauvegardes, sécurité et petites modifications. Votre site reste en forme après la livraison.',
  },
];

export const quarters = [
  { q: 'Q1', title: 'Cadrage', text: 'Questionnaire, appel découverte, devis détaillé, acompte.' },
  { q: 'Q2', title: 'Préparation', text: 'Accès, logo, textes, photos. Une date limite pour les contenus.' },
  { q: 'Q3', title: 'Conception et développement', text: 'Arborescence, maquettes validées par vous, puis le site.' },
  { q: 'Q4', title: 'Livraison', text: 'Recette, validation écrite, mise en ligne, prise en main.' },
  { q: 'OT', title: 'Prolongation', text: 'Maintenance mensuelle ou annuelle, si vous le souhaitez.' },
];

/** Témoignages réels uniquement. La section reste masquée tant que la liste est vide. */
export const testimonials: { quote: string; name: string; company: string }[] = [];
