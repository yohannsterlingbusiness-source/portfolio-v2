// SVG de marque générés à la compilation : favicon et image Open Graph.
import { SEGS, GLYPHS, segmentPoints, DIGIT_W, DIGIT_GAP } from './segments';

const ON = '#ff4d2e';
const OFF = '#2b1410';

export function clockDigits(text: string) {
  return [...text]
    .map((ch, i) => {
      const polys = SEGS.map(
        (s) => `<polygon points="${segmentPoints(s)}" fill="${GLYPHS[ch]?.includes(s) ? ON : OFF}"/>`,
      ).join('');
      return `<g transform="translate(${i * (DIGIT_W + DIGIT_GAP)} 0)">${polys}</g>`;
    })
    .join('');
}

/** Favicon : « 24 » en 7 segments sur fond nuit. Boîte 64 x 64. */
export function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0b0b0c"/><g transform="translate(6.5 14) scale(0.36) skewX(-6) translate(12 0)">${clockDigits('24')}</g></svg>`;
}

/** Image Open Graph 1200 x 630. */
export function ogSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0b0c"/>
  <rect x="80" y="80" width="520" height="340" rx="24" fill="#000" stroke="#2a2a2e" stroke-width="2"/>
  <g transform="translate(140 130) scale(2.4) skewX(-6) translate(12 0)">${clockDigits('24')}</g>
  <text x="80" y="520" font-family="Arial Narrow, DejaVu Sans Condensed, Arial, sans-serif" font-weight="700" font-size="84" fill="#f1ece2">YOHANN STERLING</text>
  <text x="80" y="575" font-family="Arial, DejaVu Sans, sans-serif" font-size="32" fill="#8a857c">Développeur web · Création et refonte de sites</text>
  <rect x="1060" y="80" width="60" height="8" fill="#ff4d2e"/>
</svg>`;
}
