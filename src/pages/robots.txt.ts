import { url } from '../lib/url';

export function GET({ site }: { site: URL }) {
  const sitemap = new URL(url('sitemap-index.xml'), site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
