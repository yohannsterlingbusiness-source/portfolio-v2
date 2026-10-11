import { faviconSvg } from '../lib/brand';

export function GET() {
  return new Response(faviconSvg(), { headers: { 'Content-Type': 'image/svg+xml' } });
}
