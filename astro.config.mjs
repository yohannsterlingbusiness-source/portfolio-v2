// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages sert le site sous /portfolio-v2/.
// Avec un nom de domaine perso : remplacer `site` et supprimer `base`.
export default defineConfig({
  site: 'https://yohannsterlingbusiness-source.github.io',
  base: '/portfolio-v2',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
