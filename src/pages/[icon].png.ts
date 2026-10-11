import sharp from 'sharp';
import { faviconSvg, ogSvg } from '../lib/brand';

// PNG générés à la compilation : favicon de repli, icône iOS, image Open Graph.
const FILES = {
  'favicon-32': { svg: faviconSvg, width: 32, height: 32 },
  'apple-touch-icon': { svg: faviconSvg, width: 180, height: 180 },
  og: { svg: ogSvg, width: 1200, height: 630 },
} as const;

type Name = keyof typeof FILES;

export function getStaticPaths() {
  return (Object.keys(FILES) as Name[]).map((icon) => ({ params: { icon } }));
}

export async function GET({ params }: { params: { icon: Name } }) {
  const f = FILES[params.icon];
  const png = await sharp(Buffer.from(f.svg()), { density: 300 })
    .resize(f.width, f.height)
    .png({ compressionLevel: 9 })
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
