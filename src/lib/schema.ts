/**
 * Données structurées (JSON-LD, schema.org) pour les moteurs de recherche.
 * La compagnie est décrite comme un PerformingGroup (troupe de spectacle),
 * avec ses prestations en « offres » sur la page Prestations.
 */
import { EMAIL, INSTAGRAM_URL, PHONE_INTL, YOUTUBE_URL } from './contact';
import { LEGAL } from './legal';
import { pageUrl, type Lang } from '../i18n/ui';
import { PRESTATIONS } from '../i18n/prestations';

const DESCRIPTION = {
    fr: "Compagnie familiale de spectacles de magie, de jonglerie et de bulles de savon, fondée par la magicienne Flory Anne. Spectacles pour enfants et familles, spectacles de Noël et de Carnaval, animations, ateliers et mariages, partout en France et à l'international.",
    en: 'Family-run company creating magic, juggling and soap bubble shows, founded by the magician Flory Anne. Shows for children and families, Christmas and Carnival shows, entertainment, workshops and weddings, throughout France and internationally.',
};

/** Fiche de la compagnie. Avec `withOffers`, ajoute la liste des prestations. */
export function organizationSchema(lang: Lang, site: URL | undefined, imageUrl: string, withOffers = false) {
    const home = new URL(pageUrl('accueil', lang), site).href;
    const homeFr = new URL(pageUrl('accueil', 'fr'), site).href;
    const p = PRESTATIONS[lang];

    const services = [
        p.bubbleMagicShow,
        p.laValise,
        p.carnaval,
        p.noel,
        p.jardin,
        p.atelier,
        p.bulle,
    ].map((s) => ({ name: s.title, description: s.text }));
    const mariage = p.mariage.formules.map((f) => ({
        name: `${p.sections.mariage} – ${f.nom}`,
        description: f.texte,
    }));

    return {
        '@context': 'https://schema.org',
        '@type': 'PerformingGroup',
        '@id': `${homeFr}#organisation`,
        name: LEGAL.denomination,
        url: home,
        image: imageUrl,
        logo: new URL('apple-touch-icon.png', new URL(pageUrl('accueil', 'fr'), site)).href,
        description: DESCRIPTION[lang],
        founder: { '@type': 'Person', name: 'Flory Anne' },
        telephone: PHONE_INTL.replace(/\s/g, ''),
        email: EMAIL,
        sameAs: [INSTAGRAM_URL, YOUTUBE_URL],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Saint-Étienne',
            postalCode: '42000',
            addressCountry: 'FR',
        },
        areaServed: [
            { '@type': 'Country', name: 'France' },
            { '@type': 'Place', name: lang === 'fr' ? 'International' : 'Worldwide' },
        ],
        knowsLanguage: ['fr', 'en'],
        ...(withOffers && {
            makesOffer: [...services, ...mariage].map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.name, description: s.description },
            })),
        }),
    };
}
