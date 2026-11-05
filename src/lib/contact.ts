/** Coordonnées de contact, à réutiliser partout (header, hero, cartes, footer). */
export const PHONE_DISPLAY = '06 67 78 54 19';
export const PHONE_INTL = '+33 6 67 78 54 19';
export const PHONE_HREF = 'tel:+33667785419';
export const EMAIL = 'floryanimation@free.fr';
export const INSTAGRAM_URL = 'https://www.instagram.com/floryanimation/';

/**
 * Lien « Demander un devis » : email prérempli en attendant le formulaire (étape 4).
 * @param prestation nom de la prestation, ajouté à l'objet et au corps du message
 */
export function devisHref(prestation?: string): string {
    const subject = prestation ? `Demande de devis : ${prestation}` : 'Demande de devis';
    const body = [
        'Bonjour,',
        '',
        `Prestation souhaitée : ${prestation ?? ''}`,
        'Type d\'événement :',
        'Date :',
        'Lieu (ville, pays) :',
        'Nombre et âge des spectateurs :',
        'Intérieur ou extérieur :',
        'Téléphone :',
        '',
        'Merci !',
    ].join('\n');
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
