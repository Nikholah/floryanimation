/**
 * sitemap.xml généré au build à partir des routes de src/i18n/ui.ts :
 * chaque page, dans chaque langue, avec ses versions linguistiques (hreflang).
 * Une nouvelle page ajoutée dans ROUTES y apparaît automatiquement.
 */
import type { APIRoute } from 'astro';
import { LANGS, ROUTES, pageUrl, type PageKey } from '../i18n/ui';

const PRIORITE: Record<PageKey, string> = {
    accueil: '1.0',
    prestations: '0.9',
    devis: '0.8',
    avis: '0.3',
    mentions: '0.2',
    confidentialite: '0.2',
};

export const GET: APIRoute = ({ site }) => {
    const abs = (page: PageKey, lang: (typeof LANGS)[number]) => new URL(pageUrl(page, lang), site).href;
    const lastmod = new Date().toISOString().slice(0, 10);
    const pages = Object.keys(ROUTES.fr) as PageKey[];

    const urls = pages.flatMap((page) =>
        LANGS.map((lang) => {
            const alternates = LANGS.map((l) => `        <xhtml:link rel="alternate" hreflang="${l}" href="${abs(page, l)}"/>`).join('\n');
            return `    <url>
        <loc>${abs(page, lang)}</loc>
${alternates}
        <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page, 'fr')}"/>
        <lastmod>${lastmod}</lastmod>
        <priority>${PRIORITE[page]}</priority>
    </url>`;
        }),
    );

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
    return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
