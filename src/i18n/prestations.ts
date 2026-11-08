/**
 * Textes de la page Prestations, en français et en anglais.
 *
 * ⚠️ TEXTE PROVISOIRE : tous les textes descriptifs (champ `text`, intro et formules Mariage, encadrés
 * des informations pratiques) sont des versions de test rédigées par Claude, en attendant les textes
 * définitifs de la cliente. La traduction anglaise est à faire relire par une personne anglophone.
 * TODO : durées et publics des prestations (sauf l'Atelier : 1 heure, dès 6 ans, 12 participants maximum, d'après son affiche).
 *
 * Les noms propres des spectacles et des formules Mariage restent en français dans la version anglaise
 * (avec une traduction entre parenthèses quand c'est utile).
 */
export const PRESTATIONS = {
    fr: {
        title: 'Spectacles, Noël, mariage et ateliers – Flory Animation',
        description: 'Bubble Magic Show, La Valise, spectacles de Noël et de Carnaval, Jardin des Bulles, atelier et mariage : toutes les prestations de Flory Animation.',
        heroKicker: 'Magie, jonglerie et bulles de savon',
        heroTitle: 'Nos Prestations Magiques',
        heroText: 'Découvrez notre gamme complète de spectacles et animations pour tous les âges',
        sections: {
            spectacles: 'Nos Spectacles',
            thematiques: 'Spectacles thématiques',
            exterieur: 'Animation déambulation extérieur',
            atelier: "L'Atelier « Bulles de Savon »",
            mariage: 'Mariage',
            bulle: 'Dans ma bulle',
            infos: 'Informations pratiques',
        },
        bubbleMagicShow: {
            title: 'Bubble Magic Show',
            tag: 'Ambiance Cabaret',
            alt: 'Flory Anne en robe rouge sur scène, une bulle de savon au creux de la main, devant un décor de cabaret étoilé',
            text: "Sous les lumières feutrées d'un cabaret aux allures rétro, Flory Anne entre en scène, élégante et malicieuse. Entre tours de magie et bulles de savon qui s'élèvent comme des perles de lumière, chaque numéro devient un instant suspendu. Un spectacle raffiné où l'émerveillement se savoure, entre mystère et poésie.",
        },
        laValise: {
            title: 'La Valise',
            tag: 'Ambiance Poétique',
            alt: 'Illustration de Flory Anne en combinaison étoilée et chapeau rouge, une valise ancienne à ses pieds, entourée de bulles',
            text: "D'une simple valise ancienne s'échappent mille trésors : des souvenirs, des rêves et des bulles par dizaines. Avec tendresse et fantaisie, Flory Anne ouvre les portes d'un voyage poétique où chaque objet raconte une histoire. Un moment doux et lumineux, à partager en famille.",
        },
        carnaval: {
            title: 'Le Carnaval de Nani',
            tag: 'Spectacle thématique Carnaval',
            alt: 'Affiche « Le Carnaval de Nani » : magie, jonglerie et bulles de savon, Flory Animation',
            text: "Confettis, plumes et éclats de couleurs : Nani fait son carnaval ! Magie, jonglerie et bulles de savon s'entremêlent dans une fête joyeuse où les enfants deviennent les complices de chaque tour. Un spectacle pétillant pour célébrer le carnaval à l'école, au centre de loisirs ou en famille.",
        },
        noel: {
            title: 'Noël',
            tag: 'Nani la Lutine · Bulles de Noël',
            altNani: 'Affiche « Spectacle de Noël, Nani la Lutine » : magie, jonglerie, bulles de savon',
            altBulles: 'Affiche « Bulles de Noël » : spectacle de magie et de bulles de savon',
            text: "Quand la neige tombe derrière la fenêtre, la magie de Noël s'invite sur scène. Avec Nani la Lutine ou dans « Bulles de Noël », magie, jonglerie et bulles de savon font briller les yeux des petits comme des grands. Un spectacle féerique pour un arbre de Noël, une fête d'école ou une soirée en famille.",
        },
        jardin: {
            title: 'Le Jardin des Bulles',
            tag: 'Déambulation en extérieur',
            alt: 'Flory Anne accoudée au chariot décoré « Le Jardin des Bulles », dans un champ de fleurs sauvages, entourée de bulles',
            text: "Au détour d'une allée, un jardin éphémère prend vie : des bulles s'envolent, scintillent au soleil et dansent au gré du vent. Petits et grands s'émerveillent, tentent de les attraper… et repartent le sourire aux lèvres. Une animation poétique en déambulation, idéale pour les fêtes de plein air.",
        },
        atelier: {
            title: 'Atelier « Bulles de Savon »',
            tag: 'Atelier participatif',
            alt: 'Affiche de l’Atelier « Bulles de Savon » : des enfants font des bulles dans un jardin ; public à partir de 6 ans, durée 1 heure, 12 participants maximum',
            details: [
                { label: 'Public', value: 'À partir de 6 ans' },
                { label: 'Durée', value: '1 heure' },
                { label: 'Participants', value: '12 au maximum' },
            ],
            text: "Comment naît une bulle ? Pourquoi brille-t-elle de toutes les couleurs ? Dans cet atelier ludique, les enfants découvrent les secrets des bulles de savon et apprennent à créer les leurs, des plus petites aux plus étonnantes. Un moment de découverte et d'émerveillement, où chacun repart avec des étoiles dans les yeux.",
        },
        mariage: {
            accroche: "« L'art et l'émotion au cœur de votre mariage »",
            flyerAlt: 'Flyer « Sublimez votre mariage » présentant les formules Instant Précieux, Éclat de Bulles et Prestige',
            intro: 'Le plus beau jour de votre vie mérite une touche de magie. Des bulles de savon qui s\'envolent autour de vous, la lumière qui les traverse, l\'émotion de vos invités : Flory Animation compose avec vous un moment unique, élégant et poétique.',
            formules: [
                {
                    id: 'mariage-instant-precieux',
                    nom: 'Instant Précieux',
                    moment: 'Pendant la séance photo des mariés',
                    texte: "Des nuées de bulles enveloppent les mariés pendant la séance photo et subliment chaque cliché. Des images lumineuses et pleines de poésie, souvenirs d'un instant suspendu.",
                },
                {
                    id: 'mariage-eclat-de-bulles',
                    nom: 'Éclat de Bulles',
                    moment: "Pendant le vin d'honneur",
                    texte: "Pendant le vin d'honneur, les bulles s'invitent parmi vos convives : elles dansent, scintillent et éclatent en sourires. Une animation joyeuse et raffinée qui crée la surprise et rassemble petits et grands.",
                },
                {
                    id: 'mariage-prestige',
                    nom: 'Prestige',
                    moment: '« Entre Toi et Moi », spectacle féerique de bulles de savon',
                    texte: "« Entre Toi et Moi » est un spectacle féerique de bulles de savon imaginé comme une déclaration. Bulles géantes, jeux de lumière et poésie racontent votre histoire et offrent à vos invités un moment d'émotion inoubliable.",
                },
            ],
        },
        bulle: {
            title: 'Dans ma bulle',
            tag: 'Vivre une expérience unique et éphémère : être dans une bulle géante',
            alt: 'Flory Anne debout à l’intérieur d’une bulle de savon géante, sous une lumière bleue',
            text: "Et si vous entriez dans une bulle ? Le temps d'un instant, une bulle géante s'élève tout autour de vous et vous enveloppe de lumière. Une expérience unique et éphémère, à vivre en famille, entre amis ou lors d'un événement, pour des souvenirs inoubliables.",
        },
        // Faits validés par la cliente (voir CLAUDE.md, « Informations pratiques validées »)
        infos: [
            { icon: '🌍', title: 'Où ?', text: "Partout en France et à l'international : indiquez simplement le lieu dans votre demande de devis." },
            { icon: '⏱️', title: 'Installation', text: 'Environ 1 h 30 de montage avant le spectacle.' },
            { icon: '🎤', title: 'Son et lumière', text: 'Sonorisation, lumière et électricité fournies selon la taille du spectacle. Nous faisons le point ensemble au moment du devis.' },
            { icon: '🌳', title: 'En extérieur', text: 'Aucun branchement électrique nécessaire. Le Jardin des Bulles est pensé pour le plein air.' },
            { icon: '💬', title: 'Tarifs', text: 'Sur demande, devis gratuit.' },
            { icon: '🧾', title: 'Facturation', text: "Chaque prestation fait l'objet d'une facture." },
        ],
        infosCta: 'Demander un devis gratuit',
    },
    en: {
        title: 'Shows, Christmas, weddings and workshops – Flory Animation',
        description: 'Magic and soap bubble shows, Christmas and Carnival shows, outdoor roaming act, workshop and weddings: all of Flory Animation’s shows, in France and abroad.',
        heroKicker: 'Magic, juggling and soap bubbles',
        heroTitle: 'Our Magical Shows',
        heroText: 'Discover our full range of shows and entertainment for all ages',
        sections: {
            spectacles: 'Our Shows',
            thematiques: 'Themed shows',
            exterieur: 'Outdoor roaming entertainment',
            atelier: 'The Soap Bubble Workshop',
            mariage: 'Weddings',
            bulle: 'Inside My Bubble',
            infos: 'Practical information',
        },
        bubbleMagicShow: {
            title: 'Bubble Magic Show',
            tag: 'Cabaret atmosphere',
            alt: 'Flory Anne in a red dress on stage, holding a soap bubble in her palm, in front of a starry cabaret set',
            text: 'Under the soft lights of a retro-style cabaret, Flory Anne takes the stage, elegant and playful. Between magic tricks and soap bubbles rising like pearls of light, every act becomes a moment suspended in time. A refined show to savour, full of mystery and poetry.',
        },
        laValise: {
            title: 'La Valise (The Suitcase)',
            tag: 'Poetic atmosphere',
            alt: 'Illustration of Flory Anne in a starry jumpsuit and red hat, an old suitcase at her feet, surrounded by bubbles',
            text: 'From a simple old suitcase, a thousand treasures escape: memories, dreams and bubbles by the dozen. With tenderness and whimsy, Flory Anne opens the door to a poetic journey where every object tells a story. A gentle, luminous moment to share as a family.',
        },
        carnaval: {
            title: 'Le Carnaval de Nani (Nani’s Carnival)',
            tag: 'Carnival themed show',
            alt: '“Le Carnaval de Nani” poster: magic, juggling and soap bubbles, Flory Animation',
            text: 'Confetti, feathers and bursts of colour: Nani is throwing a carnival! Magic, juggling and soap bubbles come together in a joyful party where children become partners in every trick. A sparkling show to celebrate carnival at school, at holiday clubs or with the family.',
        },
        noel: {
            title: 'Christmas',
            tag: 'Nani la Lutine · Bulles de Noël',
            altNani: '“Christmas show, Nani la Lutine” poster: magic, juggling, soap bubbles',
            altBulles: '“Bulles de Noël” poster: magic and soap bubble show',
            text: 'As the snow falls outside the window, the magic of Christmas comes to the stage. With Nani the elf or in “Bulles de Noël” (Christmas Bubbles), magic, juggling and soap bubbles make the eyes of young and old shine. An enchanting show for a company Christmas party, a school celebration or a family evening.',
        },
        jardin: {
            title: 'Le Jardin des Bulles (The Bubble Garden)',
            tag: 'Outdoor roaming act',
            alt: 'Flory Anne leaning on the decorated “Le Jardin des Bulles” cart in a field of wildflowers, surrounded by bubbles',
            text: 'Around the corner of a path, an ephemeral garden comes to life: bubbles take flight, sparkle in the sun and dance on the breeze. Young and old marvel, try to catch them… and leave with a smile. A poetic roaming act, perfect for outdoor celebrations.',
        },
        atelier: {
            title: 'Soap Bubble Workshop',
            tag: 'Hands-on workshop',
            alt: 'Poster for the Soap Bubble Workshop: children blowing bubbles in a garden; ages 6 and up, 1 hour, up to 12 participants',
            details: [
                { label: 'Audience', value: 'Ages 6 and up' },
                { label: 'Duration', value: '1 hour' },
                { label: 'Participants', value: 'Up to 12' },
            ],
            text: 'How is a bubble born? Why does it shine in every colour? In this playful workshop, children discover the secrets of soap bubbles and learn to make their own, from the tiniest to the most surprising. A moment of discovery and wonder, where everyone leaves with stars in their eyes.',
        },
        mariage: {
            accroche: '“Art and emotion at the heart of your wedding”',
            flyerAlt: '“Sublimez votre mariage” flyer presenting the Instant Précieux, Éclat de Bulles and Prestige packages',
            intro: 'The most beautiful day of your life deserves a touch of magic. Soap bubbles floating all around you, light shining through them, the emotion of your guests: Flory Animation creates a unique, elegant and poetic moment with you.',
            formules: [
                {
                    id: 'mariage-instant-precieux',
                    nom: 'Instant Précieux',
                    moment: 'During the couple’s photo shoot',
                    texte: 'Clouds of bubbles surround the newlyweds during the photo shoot and make every picture shine. Luminous, poetic images, keepsakes of a moment suspended in time.',
                },
                {
                    id: 'mariage-eclat-de-bulles',
                    nom: 'Éclat de Bulles',
                    moment: 'During the drinks reception',
                    texte: 'During the drinks reception, bubbles drift among your guests: they dance, sparkle and burst into smiles. A joyful, elegant entertainment that surprises everyone and brings young and old together.',
                },
                {
                    id: 'mariage-prestige',
                    nom: 'Prestige',
                    moment: '“Entre Toi et Moi” (Between You and Me), an enchanting soap bubble show',
                    texte: '“Entre Toi et Moi” is an enchanting soap bubble show designed like a declaration of love. Giant bubbles, plays of light and poetry tell your story and give your guests an unforgettable, moving moment.',
                },
            ],
        },
        bulle: {
            title: 'Dans ma bulle (Inside My Bubble)',
            tag: 'A unique, fleeting experience: standing inside a giant bubble',
            alt: 'Flory Anne standing inside a giant soap bubble, under blue light',
            text: 'What if you stepped inside a bubble? For a moment, a giant bubble rises all around you and wraps you in light. A unique, fleeting experience to enjoy with family, with friends or at an event, for unforgettable memories.',
        },
        infos: [
            { icon: '🌍', title: 'Where?', text: 'Throughout France and internationally: just tell us where your event takes place in your quote request.' },
            { icon: '⏱️', title: 'Set-up', text: 'About 1 hour 30 minutes of set-up before the show.' },
            { icon: '🎤', title: 'Sound and lighting', text: 'Sound system, lighting and power supplied depending on the size of the show. We go over the details together when preparing your quote.' },
            { icon: '🌳', title: 'Outdoors', text: 'No power supply needed. The Bubble Garden is designed for the open air.' },
            { icon: '💬', title: 'Prices', text: 'On request, with a free quote.' },
            { icon: '🧾', title: 'Invoicing', text: 'Every booking is invoiced.' },
        ],
        infosCta: 'Request a free quote',
    },
} as const;
