// @ts-check
import { defineConfig } from 'astro/config';

// Domaine et chemin de base configurables par variables d'environnement :
// - par défaut : domaine final https://floryanimation.com servi à la racine (Cloudflare) ;
// - GitHub Pages (project page) : SITE_URL=https://nikholah.github.io BASE_PATH=/floryanimation
export default defineConfig({
    site: process.env.SITE_URL ?? 'https://floryanimation.com',
    base: process.env.BASE_PATH ?? '/',
    // Conserve les URL actuelles : /index.html et /spectacles.html
    build: {
        format: 'file',
    },
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
