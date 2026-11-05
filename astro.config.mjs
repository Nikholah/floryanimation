// @ts-check
import { defineConfig } from 'astro/config';

// Domaine et chemin de base configurables par variables d'environnement :
// - par défaut : domaine final https://floryanimation.com servi à la racine (Cloudflare) ;
// - GitHub Pages (project page) : SITE_URL=https://nikholah.github.io BASE_PATH=/floryanimation
export default defineConfig({
    site: process.env.SITE_URL ?? 'https://floryanimation.com',
    base: process.env.BASE_PATH ?? '/',
    // 'preserve' : spectacles.astro => spectacles.html (URL actuelles conservées) et en/index.astro => en/index.html
    build: {
        format: 'preserve',
    },
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
