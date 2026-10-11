import { getCollection } from 'astro:content';

/** Projets triés : ordre défini dans chaque fichier, l'étude de cas du site épinglée en dernier. */
export async function getProjects() {
  return (await getCollection('projets')).sort(
    (a, b) => Number(a.data.pinned) - Number(b.data.pinned) || a.data.order - b.data.order,
  );
}

export const isPlaceholder = (v: string) => v.startsWith('[');
