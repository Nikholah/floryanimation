import { pageUrl, type Lang } from '../i18n/ui';

/** Coordonnées de contact, à réutiliser partout (header, hero, cartes, footer). */
export const PHONE_DISPLAY = '06 67 78 54 19';
export const PHONE_INTL = '+33 6 67 78 54 19';
export const PHONE_HREF = 'tel:+33667785419';
export const EMAIL = 'floryanimation@free.fr';
export const INSTAGRAM_URL = 'https://www.instagram.com/floryanimation/';

/**
 * Clé d'accès Web3Forms (formulaire de devis).
 * À générer sur https://web3forms.com avec l'adresse floryanimation@free.fr, puis à coller ici.
 * Cette clé est publique par conception : elle peut figurer dans le code.
 * Tant qu'elle est vide, le formulaire ouvre un email prérempli à la place (repli).
 */
// TODO : coller la clé Web3Forms
export const WEB3FORMS_ACCESS_KEY = '';

/**
 * Prestations proposées dans la liste du formulaire de devis.
 * - id : identifiant passé dans l'URL (devis.html?prestation=<id>) pour présélectionner la prestation ;
 * - fr : libellé envoyé à la cliente dans l'email (toujours en français) et affiché en français ;
 * - en : libellé affiché sur la version anglaise du formulaire.
 */
export const PRESTATIONS_DEVIS = [
    { id: 'bubble-magic-show', fr: 'Bubble Magic Show', en: 'Bubble Magic Show' },
    { id: 'la-valise', fr: 'La Valise', en: 'La Valise (The Suitcase)' },
    { id: 'carnaval', fr: 'Spectacle Carnaval', en: 'Carnival show' },
    { id: 'noel', fr: 'Spectacle de Noël', en: 'Christmas show' },
    { id: 'jardin-des-bulles', fr: 'Le Jardin des Bulles', en: 'The Bubble Garden' },
    { id: 'atelier-bulles', fr: 'Atelier Bulles de Savon', en: 'Soap Bubble Workshop' },
    { id: 'mariage-instant-precieux', fr: 'Mariage, formule Instant Précieux', en: 'Wedding, Instant Précieux package' },
    { id: 'mariage-eclat-de-bulles', fr: 'Mariage, formule Éclat de Bulles', en: 'Wedding, Éclat de Bulles package' },
    { id: 'mariage-prestige', fr: 'Mariage, formule Prestige', en: 'Wedding, Prestige package' },
    { id: 'dans-ma-bulle', fr: 'Dans ma bulle', en: 'Inside My Bubble' },
] as const;

export type PrestationId = (typeof PRESTATIONS_DEVIS)[number]['id'];

/**
 * Lien « Demander un devis » : page du formulaire (dans la langue demandée),
 * avec la prestation présélectionnée.
 */
export function devisHref(prestation?: PrestationId, lang: Lang = 'fr'): string {
    const base = pageUrl('devis', lang);
    return prestation ? `${base}?prestation=${prestation}` : base;
}
