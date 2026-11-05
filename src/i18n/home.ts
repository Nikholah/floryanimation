/**
 * Textes de la page d'accueil, en français et en anglais.
 * Les chaînes des paragraphes peuvent contenir du HTML simple (<strong>, <br>).
 * Traduction anglaise : première version proposée par Claude, à faire relire par une personne anglophone.
 */
export const HOME = {
    fr: {
        title: 'MAGIE – ANIMATION INTERGENERATIONNELLE',
        description: 'Découvrez Flory Animation, spécialiste des spectacles magiques et animations intergénérationnelles. Réservez des moments inoubliables pour toute la famille.',
        keywords: 'magie, animation, spectacles, intergénérationnel, Flory Animation',
        heroAlt: 'Flory Animation : une porte de bibliothèque ouverte sur une forêt enchantée illuminée',
        h1: 'Flory Animation : spectacles de magie et de bulles de savon',
        discover: 'Découvrir nos prestations',
        quote: 'Demander un devis',
        // TEXTE PROVISOIRE : accroches (faits validés par la cliente, formulation à faire relire)
        atoutsLabel: 'Pourquoi choisir Flory Animation',
        atouts: [
            { icon: '🎩', text: 'Née dans une famille de magiciens' },
            { icon: '🎪', text: "Formée auprès d'Annie Fratellini et du Cirque de Pékin" },
            { icon: '👥', text: "Jusqu'à 600 spectateurs, son et lumière fournis" },
            { icon: '🌍', text: "Partout en France et à l'international" },
        ],
        aboutTitle: 'À propos de Flory Animation',
        aboutAlt: 'Décor féerique de Flory Animation',
        about: [
            "<strong>Flory Animation</strong>, c'est avant tout une histoire de passion et de transmission. Fondée par <strong>Flory Anne</strong>, fille de magiciens, l'univers du spectacle a bercé son enfance. Dès l'âge de 6 ans, elle fait ses premiers pas sur scène, tout en débutant des cours de danse classique et de piano.",
            "À 14 ans, elle présente son premier numéro de magie en solo et parcourt la France, affirmant peu à peu son identité artistique. Sa rencontre marquante avec <strong>Annie Fratellini</strong> la plonge dans le monde du cirque, enrichissant sa palette avec l'acrobatie, la jonglerie et l'expression scénique.",
            "Plus tard, une formation auprès des professeurs du <strong>Cirque de Pékin</strong> vient parfaire sa rigueur et sa maîtrise du mouvement. Inspiré par l'imaginaire des dessins animés et l'élégance rétro des années 50, son personnage naît comme une silhouette hors du temps.",
            "Au fil des années, elle le sculpte, le réinvente, l'habille de nuances nouvelles. De scène en scène,<br>il devient le fil rouge d'un univers singulier qu'elle décline avec poésie.",
            // TEXTE MODIFIÉ : années de naissance des enfants retirées (consigne : ne pas dater la carrière). À faire valider par la cliente.
            "Sa plus belle création reste sa propre famille : devenue maman à deux reprises, Flory Anne y puise une inspiration qui enrichit profondément son univers artistique et personnel.",
            "Aujourd'hui, <strong>Flory Animation</strong> est bien plus qu'une compagnie artistique : c'est une aventure familiale, portée par la passion, la transmission et la joie de créer pour émerveiller petits et grands.",
            'Leur plus grand bonheur ? <strong>Partager avec vous la magie de leurs créations.</strong>',
        ],
    },
    en: {
        title: 'Flory Animation – Magic and soap bubble shows',
        description: 'Flory Animation creates magic, juggling and soap bubble shows for children, families, companies and weddings, throughout France and internationally.',
        keywords: 'magic show, soap bubble show, children entertainment, wedding entertainment, Flory Animation',
        heroAlt: 'Flory Animation: a library door opening onto an enchanted, glowing forest',
        h1: 'Flory Animation: magic and soap bubble shows',
        discover: 'Discover our shows',
        quote: 'Request a quote',
        // TEXTE PROVISOIRE (traduction à faire relire)
        atoutsLabel: 'Why choose Flory Animation',
        atouts: [
            { icon: '🎩', text: 'Born into a family of magicians' },
            { icon: '🎪', text: 'Trained with Annie Fratellini and the Beijing Circus' },
            { icon: '👥', text: 'Up to 600 spectators, sound and lighting provided' },
            { icon: '🌍', text: 'Throughout France and internationally' },
        ],
        aboutTitle: 'About Flory Animation',
        aboutAlt: 'Flory Animation’s enchanted stage set',
        about: [
            '<strong>Flory Animation</strong> is, above all, a story of passion and of passing it on. It was founded by <strong>Flory Anne</strong>, the daughter of magicians, who grew up surrounded by the world of the stage. She took her first steps on stage at the age of 6, while starting classical ballet and piano lessons.',
            'At 14, she performed her first solo magic act and toured France, gradually shaping her own artistic identity. A defining encounter with <strong>Annie Fratellini</strong> drew her into the world of the circus, adding acrobatics, juggling and stagecraft to her repertoire.',
            'Later, training with teachers from the <strong>Beijing Circus</strong> sharpened her discipline and mastery of movement. Inspired by the imagination of cartoons and the retro elegance of the 1950s, her character was born: a figure out of time.',
            'Over the years, she has shaped it, reinvented it and dressed it in new colours. From stage to stage,<br>it has become the thread running through a one-of-a-kind world that she brings to life with poetry.',
            'Her finest creation remains her own family: as a mother of two, Flory Anne draws from it an inspiration that deeply enriches her artistic and personal world.',
            'Today, <strong>Flory Animation</strong> is much more than a performing company: it is a family adventure, driven by passion, transmission and the joy of creating wonder for young and old alike.',
            'Their greatest joy? <strong>Sharing the magic of their creations with you.</strong>',
        ],
    },
} as const;
