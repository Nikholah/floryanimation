/**
 * Bilinguisme FR / EN : langues, routes et libellés d'interface communs
 * (menu, pied de page, boutons, barre d'action…).
 * Les textes propres à chaque page sont dans src/i18n/<page>.ts.
 */
import { url } from '../lib/url';

export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];
export const DEFAULT_LANG: Lang = 'fr';

/** Pages du site : la même clé désigne la page équivalente dans chaque langue. */
export type PageKey = 'accueil' | 'prestations' | 'devis' | 'avis' | 'mentions' | 'confidentialite';

/** Chemins de chaque page, par langue (relatifs au base, voir src/lib/url.ts). */
export const ROUTES: Record<Lang, Record<PageKey, string>> = {
    fr: {
        accueil: '',
        prestations: 'spectacles.html',
        devis: 'devis.html',
        avis: 'avis.html',
        mentions: 'mentions-legales.html',
        confidentialite: 'confidentialite.html',
    },
    en: {
        accueil: 'en/',
        prestations: 'en/shows.html',
        devis: 'en/quote.html',
        avis: 'en/review.html',
        mentions: 'en/legal-notice.html',
        confidentialite: 'en/privacy.html',
    },
};

/** URL d'une page dans une langue, avec ancre facultative. */
export function pageUrl(page: PageKey, lang: Lang, hash?: string): string {
    return url(ROUTES[lang][page]) + (hash ? `#${hash}` : '');
}

/** Libellés d'interface communs. */
export const UI = {
    fr: {
        htmlLang: 'fr',
        phoneDisplay: '06 67 78 54 19',
        nav: {
            label: 'Menu principal',
            menu: 'Menu',
            home: 'Accueil',
            about: 'À propos',
            prestations: 'Prestations',
            submenuToggle: 'Afficher la liste des prestations',
            contact: 'Contact',
        },
        // Entrées du menu « Prestations » (ancres de la page Prestations)
        prestationsMenu: [
            { anchor: 'bubble-magic-show', label: 'Bubble Magic Show' },
            { anchor: 'la-valise', label: 'La Valise' },
            { anchor: 'spectacles-thematiques', label: 'Spectacles thématiques' },
            { anchor: 'jardin-des-bulles', label: 'Le Jardin des Bulles' },
            { anchor: 'atelier-bulles', label: 'Atelier Bulles de Savon' },
            { anchor: 'mariage', label: 'Mariage' },
            { anchor: 'dans-ma-bulle', label: 'Dans ma bulle' },
            { anchor: 'infos-pratiques', label: 'Informations pratiques' },
        ],
        langSwitch: { label: 'EN', title: 'English version' },
        actionBar: { region: 'Contact rapide', call: 'Appeler', quote: 'Demander un devis' },
        backToTop: 'Revenir en haut de la page',
        prestation: { price: 'Tarif : sur demande', quote: 'Demander un devis', formula: 'Formule' },
        lightbox: { close: "Fermer l'image", alt: 'Image agrandie' },
        contactSection: {
            kicker: 'Parlons de votre événement',
            title: 'Contact',
            intro: 'Contactez-nous pour transformer votre projet en une réalité magique.',
            phone: 'Téléphone',
            email: 'Email',
            videos: 'Nos vidéos',
        },
        footer: {
            tagline: 'Spectacles de magie, de jonglerie et de bulles de savon.',
            zone: "Partout en France et à l'international.",
            contact: 'Contact',
            navigation: 'Navigation',
            home: 'Accueil',
            prestations: 'Nos prestations',
            infos: 'Informations pratiques',
            quote: 'Demander un devis',
            review: 'Laisser un avis',
            mentions: 'Mentions légales',
            privacy: 'Politique de confidentialité',
        },
    },
    en: {
        htmlLang: 'en',
        phoneDisplay: '+33 6 67 78 54 19',
        nav: {
            label: 'Main menu',
            menu: 'Menu',
            home: 'Home',
            about: 'About',
            prestations: 'Shows',
            submenuToggle: 'Show the list of shows',
            contact: 'Contact',
        },
        prestationsMenu: [
            { anchor: 'bubble-magic-show', label: 'Bubble Magic Show' },
            { anchor: 'la-valise', label: 'La Valise (The Suitcase)' },
            { anchor: 'spectacles-thematiques', label: 'Themed shows' },
            { anchor: 'jardin-des-bulles', label: 'The Bubble Garden' },
            { anchor: 'atelier-bulles', label: 'Soap Bubble Workshop' },
            { anchor: 'mariage', label: 'Weddings' },
            { anchor: 'dans-ma-bulle', label: 'Inside My Bubble' },
            { anchor: 'infos-pratiques', label: 'Practical information' },
        ],
        langSwitch: { label: 'FR', title: 'Version française' },
        actionBar: { region: 'Quick contact', call: 'Call', quote: 'Request a quote' },
        backToTop: 'Back to top',
        prestation: { price: 'Price on request', quote: 'Request a quote', formula: 'Package' },
        lightbox: { close: 'Close image', alt: 'Enlarged image' },
        contactSection: {
            kicker: 'Let’s talk about your event',
            title: 'Contact',
            intro: 'Get in touch and let us turn your event into something magical.',
            phone: 'Phone',
            email: 'Email',
            videos: 'Our videos',
        },
        footer: {
            tagline: 'Magic, juggling and soap bubble shows.',
            zone: 'Throughout France and internationally.',
            contact: 'Contact',
            navigation: 'Navigation',
            home: 'Home',
            prestations: 'Our shows',
            infos: 'Practical information',
            quote: 'Request a quote',
            review: 'Leave a review',
            mentions: 'Legal notice',
            privacy: 'Privacy policy',
        },
    },
} as const;

export type UIStrings = (typeof UI)[Lang];
