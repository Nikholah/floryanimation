// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

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
    // Polices de la charte (étape 14) : téléchargées au build depuis Fontsource et servies par le site lui-même
    // (aucune requête vers Google ou un CDN chez le visiteur). Utilisées via les variables CSS de global.css.
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Parisienne',
            cssVariable: '--font-parisienne',
            weights: [400],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['cursive'],
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Playfair Display',
            cssVariable: '--font-playfair',
            weights: [500, 700],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['Georgia', 'serif'],
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Lato',
            cssVariable: '--font-lato',
            weights: [400, 700],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['Arial', 'sans-serif'],
        },
    ],
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
