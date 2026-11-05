import { url } from './url';

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
 * Les libellés doivent correspondre à ceux passés à devisHref() pour être présélectionnés.
 */
export const PRESTATIONS_DEVIS = [
    'Bubble Magic Show',
    'La Valise',
    'Spectacle Carnaval',
    'Spectacle de Noël',
    'Le Jardin des Bulles',
    'Atelier Bulles de Savon',
    'Mariage, formule Instant Précieux',
    'Mariage, formule Éclat de Bulles',
    'Mariage, formule Prestige',
    'Dans ma bulle',
] as const;

/**
 * Lien « Demander un devis » : page du formulaire, avec la prestation présélectionnée.
 * @param prestation libellé de la prestation (voir PRESTATIONS_DEVIS)
 */
export function devisHref(prestation?: string): string {
    const base = url('devis.html');
    return prestation ? `${base}?prestation=${encodeURIComponent(prestation)}` : base;
}
