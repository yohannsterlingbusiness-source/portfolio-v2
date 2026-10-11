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
  /** Clé Web3Forms (web3forms.com). Vide = le formulaire prépare un email au lieu d'envoyer. */
  formAccessKey: '',
  responseDelay: '[délai de réponse : ex. 48 h]',
};

/**
 * Tranches de budget du formulaire. Effet de compromis : la tranche du milieu est celle visée,
 * la tranche haute sert d'ancrage. Ajuster selon les tarifs réels.
 */
export const budgets = ["Jusqu'à 1 500 €", '1 500 à 3 500 €', 'Plus de 3 500 €'];

export const projectTypes = ['Création de site', 'Refonte de site', 'Maintenance', 'Autre'];

export const timelines = ['Dès que possible', 'Dans 1 à 3 mois', 'Dans plus de 3 mois', 'Pas de date précise'];

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
    delay: '[Délai indicatif : ex. 3 à 5 semaines]',
  },
  {
    n: '02',
    title: 'Refonte de site internet',
    text: 'Votre site existe mais ne convainc plus. On garde ce qui marche, on reconstruit le reste.',
    delay: '[Délai indicatif : ex. 2 à 4 semaines]',
  },
  {
    n: '03',
    title: 'Maintenance',
    text: 'Mises à jour, sauvegardes, sécurité et petites modifications. Votre site reste en forme après la livraison.',
    delay: 'Forfait mensuel ou annuel',
  },
];

/** Conditions reprises dans l'offre et la FAQ. Valeurs entre crochets à fixer. */
export const terms = {
  deposit: '[30 à 50 %]',
  rounds: '[N]',
  bugfixDays: '[15 à 30]',
  maintenanceHours: '[N h]',
};

export const included = [
  'Un site adapté à tous les écrans',
  'Le SEO de base : structure, titres, descriptions, vitesse',
  'Formulaires de contact',
  "Mesure d'audience respectueuse de la vie privée",
  'Une prise en main pour modifier vos contenus',
  `Corrections de bugs pendant ${terms.bugfixDays} jours après la mise en ligne`,
];

export const notIncluded = ['Rédaction des textes', 'Photos', 'SEO avancé'];

export const quarters = [
  { q: 'Q1', title: 'Cadrage', text: 'Questionnaire, appel découverte, devis détaillé, acompte.' },
  { q: 'Q2', title: 'Préparation', text: 'Accès, logo, textes, photos. Une date limite pour les contenus.' },
  { q: 'Q3', title: 'Conception et développement', text: 'Arborescence, maquettes validées par vous, puis le site.' },
  { q: 'Q4', title: 'Livraison', text: 'Recette, validation écrite, mise en ligne, prise en main.' },
  { q: 'OT', title: 'Prolongation', text: 'Maintenance mensuelle ou annuelle, si vous le souhaitez.' },
];

/** Témoignages réels uniquement. La section reste masquée tant que la liste est vide. */
export const testimonials: { quote: string; name: string; company: string }[] = [];
