import { GLYPHS, parseDisplay } from '../lib/segments';

/** Met à jour un afficheur 7 segments rendu par ShotClock.astro. */
export function setClock(svg: Element, text: string) {
  const digits = svg.querySelectorAll('[data-digit]');
  const cells = parseDisplay(text, digits.length);
  digits.forEach((digit, i) => {
    const on = GLYPHS[cells[i].ch] ?? [];
    digit.querySelectorAll<SVGElement>('[data-s]').forEach((seg) => {
      seg.classList.toggle('on', on.includes(seg.dataset.s as never));
    });
    digit.querySelector('[data-dot]')?.classList.toggle('on', cells[i].dot);
  });
}

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export const lowData = () =>
  (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
