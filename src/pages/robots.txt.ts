/**
 * robots.txt généré au build : l'adresse du sitemap suit automatiquement le domaine (SITE_URL)
 * et le chemin de base (BASE_PATH). Attention : les moteurs ne lisent robots.txt qu'à la racine
 * d'un domaine ; il ne sera donc réellement pris en compte qu'avec floryanimation.com.
 */
import type { APIRoute } from 'astro';
import { url } from '../lib/url';

export const GET: APIRoute = ({ site }) => {
    const sitemap = new URL(url('sitemap.xml'), site).href;
    return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
};
