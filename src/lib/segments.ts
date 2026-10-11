// Afficheur 7 segments du shot clock, partagé entre le rendu serveur et le script client.

export type Seg = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

export const SEGS: Seg[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export const GLYPHS: Record<string, Seg[]> = {
  '0': ['a', 'b', 'c', 'd', 'e', 'f'],
  '1': ['b', 'c'],
  '2': ['a', 'b', 'g', 'e', 'd'],
  '3': ['a', 'b', 'g', 'c', 'd'],
  '4': ['f', 'g', 'b', 'c'],
  '5': ['a', 'f', 'g', 'c', 'd'],
  '6': ['a', 'f', 'g', 'e', 'd', 'c'],
  '7': ['a', 'b', 'c'],
  '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  '9': ['a', 'b', 'c', 'd', 'f', 'g'],
  '-': ['g'],
  ' ': [],
};

// Géométrie d'un chiffre dans une boîte 60 x 100, segments de 10 d'épaisseur.
const T = 10;
const G = 2;
const h = (y: number, x1: number, x2: number) =>
  [[x1, y], [x1 + T / 2, y - T / 2], [x2 - T / 2, y - T / 2], [x2, y], [x2 - T / 2, y + T / 2], [x1 + T / 2, y + T / 2]];
const v = (x: number, y1: number, y2: number) =>
  [[x, y1], [x + T / 2, y1 + T / 2], [x + T / 2, y2 - T / 2], [x, y2], [x - T / 2, y2 - T / 2], [x - T / 2, y1 + T / 2]];

const L = 5, R = 55, TOP = 5, MID = 50, BOT = 95;

const SHAPES: Record<Seg, number[][]> = {
  a: h(TOP, L + G, R - G),
  b: v(R, TOP + G, MID - G),
  c: v(R, MID + G, BOT - G),
  d: h(BOT, L + G, R - G),
  e: v(L, MID + G, BOT - G),
  f: v(L, TOP + G, MID - G),
  g: h(MID, L + G, R - G),
};

export const segmentPoints = (s: Seg) => SHAPES[s].map((p) => p.join(',')).join(' ');

export const DIGIT_W = 60;
export const DIGIT_H = 100;
export const DIGIT_GAP = 22;

/** "4.9" -> [{ ch: '4', dot: true }, { ch: '9', dot: false }] */
export function parseDisplay(text: string, slots: number) {
  const cells: { ch: string; dot: boolean }[] = [];
  for (const ch of text) {
    if (ch === '.' && cells.length) cells[cells.length - 1].dot = true;
    else cells.push({ ch, dot: false });
  }
  while (cells.length < slots) cells.unshift({ ch: ' ', dot: false });
  return cells.slice(-slots);
}

/** Valeur du chrono : entier au dessus de 5 s, dixièmes en dessous, comme un vrai shot clock. */
export function formatClock(seconds: number): string {
  const s = Math.max(0, Math.min(24, seconds));
  return s >= 5 ? String(Math.ceil(s)) : s.toFixed(1);
}
