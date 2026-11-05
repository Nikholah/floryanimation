/**
 * Textes de la page « Laisser un avis » et de l'appel à avis de l'accueil, en français et en anglais.
 * TEXTE PROVISOIRE : formulation à faire relire par la cliente (traduction anglaise à relire aussi).
 */
export const AVIS = {
    fr: {
        title: 'Laisser un avis – Flory Animation',
        description: "Vous avez vu un spectacle de Flory Animation ? Partagez votre avis : il nous touche et aide d'autres organisateurs à nous découvrir.",
        h1: 'Laisser un avis',
        intro: "Vous avez vu l'un de nos spectacles ? Racontez-nous ce moment : votre retour nous touche et aide d'autres organisateurs à nous découvrir.",
        google: 'Laisser un avis sur Google',
        name: 'Votre prénom',
        org: 'Structure ou événement',
        orgPlaceholder: 'Ex. : mariage à Lyon, école, comité d’entreprise…',
        prestation: 'Prestation vue',
        choose: 'Choisir…',
        ratingLegend: 'Votre note',
        ratingStars: ['5 étoiles', '4 étoiles', '3 étoiles', '2 étoiles', '1 étoile'],
        message: 'Votre avis',
        messagePlaceholder: "Ce qui vous a plu, l'ambiance, la réaction du public…",
        email: 'Email (si vous souhaitez une réponse)',
        consent: "J'autorise Flory Animation à publier mon avis sur son site, avec mon prénom.",
        rgpd: "Votre avis nous est transmis par email via le service Web3Forms. Il n'est publié que si vous cochez la case ci-dessus.",
        rgpdLink: 'En savoir plus sur vos données',
        required: 'Champs obligatoires',
        submit: 'Envoyer mon avis',
        msgSending: 'Envoi en cours…',
        msgSuccess: 'Merci beaucoup pour votre avis !',
        msgError: "L'envoi n'a pas abouti. Vous pouvez réessayer, ou nous écrire directement à",
        msgMail: "Votre logiciel de messagerie va s'ouvrir avec votre avis : il ne reste qu'à l'envoyer.",
        mailSubject: 'Avis client',
        // Appel à avis sur l'accueil
        ctaTitle: "Vous avez vu l'un de nos spectacles ?",
        ctaText: 'Votre retour nous touche et aide d’autres organisateurs à nous découvrir.',
        ctaButton: 'Laisser un avis',
        // Section témoignages sur l'accueil (affichée seulement s'il y a de vrais avis)
        temoignagesTitle: 'Ils en parlent',
    },
    en: {
        title: 'Leave a review – Flory Animation',
        description: 'Have you seen a Flory Animation show? Share your review: it means a lot to us and helps other organisers discover our work.',
        h1: 'Leave a review',
        intro: 'Have you seen one of our shows? Tell us about it: your feedback means a lot to us and helps other organisers discover our work.',
        google: 'Leave a review on Google',
        name: 'Your first name',
        org: 'Organisation or event',
        orgPlaceholder: 'E.g. wedding in Geneva, school, company party…',
        prestation: 'Show you saw',
        choose: 'Choose…',
        ratingLegend: 'Your rating',
        ratingStars: ['5 stars', '4 stars', '3 stars', '2 stars', '1 star'],
        message: 'Your review',
        messagePlaceholder: 'What you enjoyed, the atmosphere, how the audience reacted…',
        email: 'Email (if you would like a reply)',
        consent: 'I allow Flory Animation to publish my review on its website, with my first name.',
        rgpd: 'Your review is sent to us by email through the Web3Forms service. It is only published if you tick the box above.',
        rgpdLink: 'Learn more about your data',
        required: 'Required fields',
        submit: 'Send my review',
        msgSending: 'Sending…',
        msgSuccess: 'Thank you so much for your review!',
        msgError: 'Your review could not be sent. Please try again, or email us directly at',
        msgMail: 'Your email app will open with your review: you just need to send it.',
        mailSubject: 'Customer review',
        ctaTitle: 'Have you seen one of our shows?',
        ctaText: 'Your feedback means a lot to us and helps other organisers discover our work.',
        ctaButton: 'Leave a review',
        temoignagesTitle: 'What people say',
    },
} as const;

export interface Temoignage {
    /** Texte de l'avis, tel que rédigé par la personne. */
    texte: string;
    /** Prénom, publié uniquement avec son accord. */
    auteur: string;
    /** Contexte facultatif, par exemple « Mariage, Lyon ». */
    contexte?: string;
}

/**
 * Avis réels à afficher sur l'accueil, dans chaque langue.
 * La section « Ils en parlent » reste masquée tant que la liste est vide.
 * N'ajouter ici que de vrais avis, reçus avec l'autorisation de publication : jamais d'avis inventé.
 */
export const TEMOIGNAGES: Record<'fr' | 'en', Temoignage[]> = {
    fr: [],
    en: [],
};
