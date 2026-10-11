import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un projet = un fichier dans src/content/projets/. Ajouter un fichier suffit à l'ajouter au site.
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    order: z.number(),
    number: z.string(),
    title: z.string(),
    client: z.string(),
    type: z.string(),
    year: z.string(),
    placeholder: z.boolean().default(false),
    /** Épinglé en fin de liste (l'étude de cas du site lui-même). */
    pinned: z.boolean().default(false),
    role: z.array(z.string()),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).length(4),
    problem: z.string(),
    approach: z.array(z.string()).min(2).max(6),
    solution: z.string(),
    result: z.object({ value: z.string(), label: z.string(), source: z.string() }),
    /** Paramètres du visuel SVG généré : angle de la composition et zone en rouge. */
    visual: z.object({
      angle: z.number().default(0),
      zone: z.enum(['key', 'corner', 'arc', 'center']).default('key'),
    }),
  }),
});

export const collections = { projets };
