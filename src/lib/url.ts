/** Préfixe un chemin interne avec la base du site (GitHub Pages sert sous /portfolio-v2/). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
