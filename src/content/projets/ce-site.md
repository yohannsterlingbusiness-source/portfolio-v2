---
order: 99
number: "24"
title: "Ce site"
client: "Yohann Sterling"
type: "Portfolio"
year: "2026"
pinned: true
role:
  - "Concept et direction artistique"
  - "Design system"
  - "Développement"
stats:
  - { label: "Délai", value: "[XX j]" }
  - { label: "Performance", value: "[à mesurer]" }
  - { label: "Poids JS", value: "[à mesurer]" }
  - { label: "Pages", value: "[X]" }
problem: "Montrer ce que je sais faire sans encore avoir de projet client à présenter."
approach:
  - "Trois concepts, un seul retenu : le shot clock"
  - "Design system : couleurs, typos, grille, mouvement"
  - "Une variante réduite pour chaque animation"
  - "Développement statique, mesure des Core Web Vitals"
solution: "Un portfolio où le chrono des 24 secondes suit votre lecture, du premier écran jusqu'au contact."
result:
  value: "[à mesurer]"
  label: "Score Lighthouse performance mobile"
  source: "Mesure à la mise en ligne"
visual: { angle: 0, zone: "arc" }
---

### Le concept

Trois pistes étudiées : le shot clock, le tableau tactique du coach, le menu de sélection de joueur. J'ai retenu le shot clock parce qu'il se reconnaît en trois secondes et qu'il sert à quelque chose : il vous dit où vous en êtes dans la page.

### Le design system

- Deux familles typographiques : Big Shoulders Display pour les titres, Instrument Sans pour le texte.
- Une palette courte, contrastes AA vérifiés : nuit `#0B0B0C`, craie `#F1ECE2`, rouge LED `#FF4D2E`, gris parquet `#8A857C`.
- Une grille de 4, 8 ou 12 colonnes selon l'écran, des espacements sur une base de 8 px.

### Le mouvement

- Le chrono suit le scroll, la balle part en cloche entre les pages, le filet ondule sur le bouton Contact, une balle dribble sur les quart-temps, et le buzzer passe en impact frame.
- Chaque animation a une variante pour les personnes qui réduisent les animations dans leur système.
- Les animations s'appuient en priorité sur `transform` et `opacity`, les propriétés les moins coûteuses pour le navigateur.

### La technique

- Astro en sortie statique : pas de framework JavaScript envoyé au navigateur.
- Polices hébergées sur le site, aucun cookie.
- Hébergé sur GitHub Pages, redéployé automatiquement à chaque modification.
