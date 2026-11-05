# CLAUDE.md — Site Flory Animation

Document de référence pour toutes les sessions de travail sur ce dépôt.
Dernière mise à jour : 2026-11-05 (nouvelles prestations de la cliente, bannière photo, retrait des anciennes prestations).

---

## 0. Contexte projet

- **Client** : Flory Animation, compagnie familiale fondée par **Flory Anne**, magicienne (fille de magiciens, formée au cirque auprès d'Annie Fratellini et des professeurs du Cirque de Pékin).
- **Univers** : magie, jonglerie, bulles de savon. Personnage inspiré des dessins animés et de l'élégance rétro des années 50. Ton poétique et féerique.
- **Prestations actuelles** (liste fournie par la cliente le 2026-11-05, elle remplace toutes les anciennes ; tous les tarifs restent « sur demande », décision ferme). Durées et publics **non communiqués** sauf mention contraire : ne rien inventer.
  | Catégorie | Prestation | Infos connues | Visuel | Ancre (`spectacles.html#…`) |
  |---|---|---|---|---|
  | Spectacles | « Bubble Magic Show » | ambiance Cabaret | `BUBBLE_MAGIC_SHOW.jpg` | `bubble-magic-show` |
  | Spectacles | « La Valise » | ambiance Poétique | `LA_VALISE.png` | `la-valise` |
  | Spectacles thématiques (`#spectacles-thematiques`) | Carnaval (« Le Carnaval de Nani ») | — | `AFFICHE_CARNAVAL_DE_NANI.jpg` | `carnaval` |
  | Spectacles thématiques | Noël (« Nani la Lutine » et « Bulles de Noël ») | — | les 2 affiches `AFFICHE_NOEL_*.png` | `spectacle-noel` |
  | Animation déambulation extérieur | Le Jardin des Bulles | en extérieur | `BULLE_SAVON_TABLE_LUMINEUSE.jpg` (ancienne photo réutilisée) | `jardin-des-bulles` |
  | Atelier | L'Atelier « Bulles de Savon » | à partir de 6 ans | `les_bulles.jpeg` (ancienne photo réutilisée) | `atelier-bulles` |
  | Mariage | « L'art et l'émotion au cœur de votre mariage » : formules **Instant Précieux** (bulles pendant la séance photo), **Éclat de Bulles** (pendant le vin d'honneur), **Prestige** (« Entre Toi et Moi », spectacle féerique de bulles de savon) | cible particuliers | aucune photo (TODO) | `mariage`, `mariage-instant-precieux`, `mariage-eclat-de-bulles`, `mariage-prestige` |
  | Dans ma bulle | Vivre une expérience unique et éphémère : être dans une bulle géante | — | `DANS_MA_BULLE.jpg` | `dans-ma-bulle` |
- **Anciennes prestations supprimées le 2026-11-05** : L'atelier magique, Nani la Lutine Magicienne (ancienne fiche), Cabaret « Étincelle magique », Bar à Bulles, ancien Atelier Bulles (dès 4 ans), ainsi que les mascottes.
- **Textes provisoires** : tous les textes descriptifs de `src/pages/spectacles.astro` sont des **versions de test** rédigées par Claude, en attendant les textes définitifs de la cliente. Chacun est entouré de `<!-- TEXTE PROVISOIRE -->` … `<!-- /TEXTE PROVISOIRE -->` (11 blocs : Bubble Magic Show, La Valise, Carnaval, Noël, Jardin des Bulles, Atelier, introduction Mariage, 3 formules Mariage, Dans ma bulle). Les infos manquantes (durées, publics, nombre de participants, photo Mariage) sont signalées par des commentaires `<!-- TODO … -->`. Chercher `TEXTE PROVISOIRE` et `TODO` pour les retrouver.
- **Cibles** : collectivités (écoles, mairies, centres culturels, centres de loisirs), événementiel (soirées d'entreprise, arbres de Noël des CSE), particuliers (mariages, anniversaires).
- **Zone d'intervention : France entière et international.** Le site doit donc être **bilingue français / anglais** (voir §6, décision D1).
- **Objectif n°1** : générer des **demandes de devis et des réservations**.
- **Action attendue** : appeler le **06 67 78 54 19** (`tel:+33667785419`, à l'international `+33 6 67 78 54 19`), écrire à **floryanimation@free.fr** (adresse de réception vérifiée), ou remplir le formulaire de devis (à créer). Instagram : [@floryanimation](https://www.instagram.com/floryanimation/).
- **Informations pratiques validées** (à afficher sur le site et dans la fiche technique) :
  - temps de montage : **1 h 30** ;
  - jauge : **jusqu'à environ 600 spectateurs** ;
  - **sonorisation, lumière et électricité fournies selon la taille du spectacle** ; détails réglés au moment du devis ;
  - en extérieur : **pas besoin d'électricité** ;
  - facturation : **sur facture** (rester sobre sur l'administratif, ne pas détailler).
- **Mentions légales** : SIRET communiqué : `822 373 395 0018`. ⚠️ Il ne compte que 13 chiffres alors qu'un SIRET en a 14 (9 du SIREN + 5 du NIC) : probablement `822 373 395 00018`. **À vérifier avant publication** (sur annuaire-entreprises.data.gouv.fr).
- **Maintenance** : le site est monté et maintenu par Nicolas (à l'aise avec Git, Node.js et l'outillage front).

---

## 1. Vue d'ensemble technique

### Stack (depuis le 2026-11-05)
- **Astro 7** (site 100 % statique, `output: static`), TypeScript pour les scripts, CSS natif. Seule dépendance : `astro` (avec `sharp` pour les images).
- **Node.js ≥ 22.23.4** (installé en local : Node 26 LTS, dans `C:\Program Files\nodejs`).
- Migration faite **à l'identique** : même rendu, mêmes URL (`/index.html`, `/spectacles.html` grâce à `build.format: 'file'`), mêmes ancres. Seules différences voulues : images optimisées en WebP avec `srcset` et lazy loading, favicon de 64 px, code mort supprimé (modale, `.card`, `.bubble` de l'accueil, bouton Instagram inutilisé), styles inline remplacés par des classes, `onclick` remplacés par des écouteurs, boutons du carrousel et de la lightbox avec `aria-label`, ordre du menu déroulant harmonisé.
- i18n Astro déjà configuré (`fr` par défaut sans préfixe, `en` sous `/en/`), aucune page anglaise encore.

### Structure du dépôt
```
floryanimation/
├── astro.config.mjs        # site/base via SITE_URL et BASE_PATH, build.format 'file', i18n fr/en
├── package.json            # scripts dev / build / preview
├── src/
│   ├── layouts/Base.astro  # <head>, favicon généré, Header, boutons flottants, script commun
│   ├── components/         # Header.astro (prop current, liste du menu Prestations), FloatingButtons.astro,
│   │                       # Prestation.astro (carte de prestation : images, étiquette, texte en slot, tarif, bouton devis)
│   ├── pages/              # index.astro, spectacles.astro (=> index.html, spectacles.html)
│   ├── styles/             # global.css (commun), index.css, spectacles.css
│   ├── scripts/common.ts   # défilement fluide, ombre navbar, retour en haut
│   ├── lib/url.ts          # url('spectacles.html') : préfixe les liens internes avec le base
│   ├── lib/contact.ts      # téléphone, email, Instagram, devisHref(prestation) (lien « Demander un devis »)
│   └── assets/img/         # images sources, optimisées au build
├── public/                 # copié tel quel : robot.txt (À RENOMMER robots.txt), sitemap.xml (à corriger)
├── .github/workflows/deploy.yml   # build + déploiement GitHub Pages
├── .claude/launch.json     # serveurs astro-preview / astro-dev pour l'aperçu dans Claude
├── .gitignore              # node_modules, dist, .astro, .idea, réglages locaux
└── CLAUDE.md
```

### Images (sources dans `src/assets/img/`)
| Fichier | Poids | Dimensions | Usage |
|---|---|---|---|
| `FOND_DECOR_FLORY_ANIMATION.jpg` | 1,6 Mo | 2000×1414 | bannière de l'accueil + section À propos. Le nom « Flory Animation » est écrit dans l'image. Reçue sous le nom `01_DECOR_FEERIQUE_FORET_OUVERTURE_OK.pdf`, mais c'était un JPEG : renommée |
| `BUBBLE_MAGIC_SHOW.jpg` | 2,3 Mo | 2592×2452 | prestation Bubble Magic Show |
| `LA_VALISE.png` | 2,2 Mo | 1086×1448 | prestation La Valise |
| `AFFICHE_CARNAVAL_DE_NANI.jpg` | 550 Ko | 1024×1536 | spectacle thématique Carnaval |
| `AFFICHE_NOEL_NANI_LA_LUTINE.png`, `AFFICHE_NOEL_BULLES_DE_NOEL.png` | 1,8 et 1,7 Mo | 1024×1536, 843×1264 | spectacle thématique Noël (les deux affiches) |
| `DANS_MA_BULLE.jpg` | 490 Ko | 1728×3072 | prestation Dans ma bulle |
| `BULLE_SAVON_TABLE_LUMINEUSE.jpg` | 68 Ko | 2000×900 | Jardin des Bulles (ancienne photo réutilisée en attendant mieux) |
| `les_bulles.jpeg` | 67 Ko | 1010×916 | Atelier Bulles de Savon (ancienne photo réutilisée) |
| `FLORY_ANNE.jpg` | 92 Ko | 1080×1727 | **favicon uniquement** (retirée de la bio). À remplacer par un vrai favicon à l'étape 9 |
| `instagram.png` | 60 Ko | 512×512 | bouton flottant |

Les poids indiqués sont ceux des sources : Astro les convertit en WebP redimensionnés au build.

Fichiers supprimés le 2026-11-05 (récupérables via l'historique Git, par exemple `git checkout a99ee47 -- img/photo_cabaret.jpg`) : anciennes images de prestations et de l'accueil (`SPECTACLE_ENFANTS_AVEC_NOUNOURS1.jpeg`, `noel.jpeg`, `noel2.jpeg`, `CABARET.jpeg`, `famille.jpg`, `theatre-curtain.svg`), photos des mascottes (`LA_LICORNE`, `LA_POULE`, `LE_CLOWN`, `NOUNOURS`, `SAPIN_DE_NOEL`), `theatre.jpg` (4,9 Mo), `IMG_20220204_190840.jpg`, `Magie.jpg`, `FLORY_ANIMATION_L_ATELIER_MAGIQUE_1.jpg`, `LE_LAPIN.jpg`, `duo.jpeg`, `photoNoel.jpg`, `photo_cabaret.jpg`, `description/rideau theatre.webp`. `.idea/` et `.claude/settings.local.json` ne sont plus suivis par Git.

### Lancer le site en local
```bash
npm install
```
```bash
npm run dev
```
Serveur de développement sur http://localhost:4321 (rechargement à chaud).
```bash
npm run build
```
Génère `dist/`. Puis `npm run preview` pour servir ce build.
- Sous **Git Bash**, préfixer les variables de chemin avec `MSYS_NO_PATHCONV=1` (sinon `/floryanimation` est converti en chemin Windows), par exemple : `MSYS_NO_PATHCONV=1 SITE_URL=https://nikholah.github.io BASE_PATH=/floryanimation npm run build`.
- Si `node` est introuvable dans un terminal ouvert avant l'installation, ajouter `C:\Program Files\nodejs` au `PATH` ou rouvrir le terminal.

### Déploiement et domaine
- **Branche de travail : `v2`.** Dépôt GitHub `Nikholah/floryanimation`, actuellement servi par GitHub Pages (`https://nikholah.github.io/floryanimation/`).
- **GitHub Pages via GitHub Actions** (`.github/workflows/deploy.yml`) : à chaque push sur `main`, build avec `SITE_URL=https://nikholah.github.io` et `BASE_PATH=/floryanimation`, puis déploiement.
- ⚠️ **Avant de fusionner `v2` dans `main`** : dans GitHub, Settings > Pages > Source, choisir **« GitHub Actions »**. Sinon GitHub Pages continuera de servir la racine de `main`, qui ne contient plus de `index.html` : le site serait cassé.
- Liens internes : toujours passer par `url()` (`src/lib/url.ts`) ; les images par `astro:assets` ; les `url()` CSS en chemin relatif vers `src/assets`. Le site fonctionne ainsi à la racine (Cloudflare) comme sous `/floryanimation/` (GitHub Pages).
- **Domaine `floryanimation.com`** : en attente de libération. Ensuite, **migration vers Cloudflare** en gardant ce nom de domaine.
  - Si l'hébergement passe sur **Cloudflare Pages** : build Astro natif, déploiement à chaque push, HTTPS, mais **25 Mio maximum par fichier** (à respecter pour les vidéos).
  - Le site reste conçu **100 % statique** pour rester portable (GitHub Pages ou Cloudflare Pages), même si Cloudflare permettrait des fonctions serveur.
- En attendant le domaine : les URL canoniques, Open Graph, `sitemap.xml` et `robots.txt` cibleront `https://floryanimation.com/`. On les écrit dès maintenant pour ce domaine (une seule valeur à changer si besoin, centralisée dans la config Astro).

---

## 2. Points forts

1. **Contenu éditorial de qualité** : textes poétiques et évocateurs (le grenier, la malle, l'étincelle), cohérents avec l'univers.
2. **Parcours artistique très crédible** : famille de magiciens, sur scène dès 6 ans, Annie Fratellini, Cirque de Pékin. C'est la réassurance principale en l'absence d'avis clients, mais elle est enfouie dans un long texte.
3. **Vraies photos** de spectacles (pas de banque d'images).
4. **Les 3 cibles sont déjà nommées** dans le hero (Collectivité / Événementiel / Particulier).
5. **Fiches prestations structurées** : description, contenu, public, durée, format.
6. **Liens `tel:` et `mailto:` fonctionnels.**
7. **Site léger, sans dépendance, hébergement gratuit.**
8. Bases techniques correctes : `lang="fr"`, viewport, meta description sur l'accueil, ancres stables par prestation, lightbox photo.

---

## 3. Points faibles, par priorité

Légende : **CONV** conversion · **CIBLE** cibles · **DESIGN** · **MOBILE** · **PERF** · **SEO** · **A11Y** accessibilité · **CODE** · **I18N** bilinguisme.

### 🔴 Critique

| # | Axe | Problème | Où |
|---|---|---|---|
| C1 | MOBILE | **Aucune navigation sur mobile** : sous 768 px, `.nav-links { display: none }` sans menu burger. Le menu déroulant « Prestations » ne s'ouvre qu'au survol (`:hover`) : inutilisable au doigt et au clavier. | `index.html`, `spectacles.html` (`@media`, `.dropdown:hover`) |
| C2 | CONV | **Le test des 5 secondes échoue** : le titre « …vous invite à découvrir son univers enchanté… » ne dit ni *quoi*, ni *où*, ni *quoi faire*. Le seul bouton renvoie vers les prestations. | `index.html` hero |
| C3 | CONV | **Aucun appel à l'action par prestation** (pas de « Demander un devis » ni « Appeler ») ; téléphone absent du header ; contact uniquement en bas de page. | `spectacles.html` |
| C4 | CONV | **Pas de formulaire de devis.** Le `mailto:` échoue souvent sur ordinateur. | — |
| C5 | I18N | **Site uniquement en français** alors que la zone est nationale et internationale. Un organisateur étranger ne peut ni comprendre l'offre ni la trouver sur Google. | tout |
| C6 | CONV | **Réassurance faible** : ni avis, ni vidéo, ni infos pratiques (montage 1 h 30, 600 spectateurs, son et lumière fournis). Le parcours de Flory Anne n'est pas mis en avant sous forme d'accroches. | — |
| C7 | légal | **Pas de pied de page ni de mentions légales** (éditeur, SIRET, hébergeur) ni de politique de confidentialité (obligatoire avec un formulaire). | — |
| C8 | CONV/SEO | **Zone d'intervention absente** : rien n'indique « partout en France et à l'international ». | — |

### 🟠 Important

| # | Axe | Problème | Où |
|---|---|---|---|
| I1 | CONV | **Saisonnalité ignorée** : on est en pleine période de réservation des arbres de Noël (CSE, écoles, mairies) et le spectacle de Noël n'est pas mis en avant sur l'accueil. | `index.html` |
| I2 | CIBLE | **Pas de parcours par cible** : les 3 blocs du hero ne sont pas cliquables et n'apportent aucun argument propre à chaque public. | `index.html` hero |
| I3 | CONV | **Aucun moyen de laisser un avis** : le site ne sollicite pas de retours après une prestation, et il n'existe pas de fiche Google Business Profile. | — |
| I4 | SEO | `spectacles.html` sans meta description ; titles sans métier ni zone ; aucune balise Open Graph ; pas de JSON-LD ; pas de `hreflang` ni de canonical. | `<head>` |
| I5 | SEO | **Hiérarchie des titres incorrecte** (h1 puis h3 ; prestations découpées en deux h3 ; émojis dans les titres). | les 2 pages |
| I6 | SEO | `robot.txt` mal nommé ; `sitemap.xml` liste des URLs inexistantes. | racine |
| I7 | PERF | **Images non optimisées** (pas de WebP, de `loading="lazy"` ni de `width`/`height` ; `famille.jpg` 406 Ko pour une vignette de 150 px). | `img/` |
| I8 | A11Y | **Contraste insuffisant** du bleu `#4a90e2` (3,3:1 sur blanc, minimum AA 4,5:1), y compris en blanc sur bleu dans la section Contact. | partout |
| I9 | DESIGN | **Univers visuel générique** (bleu « template », Arial, verre dépoli, rouge vif) qui ne traduit ni le rétro des années 50 ni le cabaret. Photos petites ; aucune vidéo pour donner envie de voir Flory Anne sur scène. | CSS |
| I10 | CONV | **Bio qui date la personne** : « devient maman en 1995, puis en 1999 » permet de déduire l'âge. Contraire à la consigne de ne pas mettre l'âge en avant (voir §6, ton). | `index.html` À propos |
| I11 | MOBILE | Boutons flottants de 60 px qui masquent le contenu ; menu en 25 px qui risque de déborder entre 769 et 1 000 px ; header fixe qui masque le haut des ancres (pas de `scroll-margin-top`). | CSS |

### 🟡 Secondaire

| # | Axe | Problème |
|---|---|---|
| S1 | A11Y | Lightbox inaccessible au clavier ; croix de fermeture en `<span>` ; bouton ↑ sans `aria-label`. (Le carrousel disparaît avec les mascottes.) |
| S2 | A11Y | Émojis lus par les lecteurs d'écran ; pas de `prefers-reduced-motion`, de lien d'évitement ni de `:focus-visible`. |
| S3 | CODE | **Duplication** d'environ 70 % du CSS et du JS commun entre les deux pages ; avec le bilinguisme, chaque modification devrait être faite 4 fois. |
| S4 | CODE | **Code mort** : styles et JS de modale (environ 250 lignes), observer `.card`, `.bubble` sur l'accueil, `theatre.jpg` en commentaire. |
| S5 | CODE | Styles inline, `</br>` invalides, ordre du menu déroulant différent selon la page. |
| S6 | DESIGN | Badge « 💰 Tarif : sur demande » en rouge vif (connotation d'alerte). |
| S7 | SEO | Favicon = photo JPG de 92 Ko déclarée `image/png`. |

---

## 4. Recommandation sur la stack

| Option | Avantages | Inconvénients | Effort |
|---|---|---|---|
| A. Rester en HTML/CSS/JS + `css/` et `js/` partagés | Aucun outil | Header et footer dupliqués dans **chaque page et chaque langue** (4 fichiers au minimum, 10 et plus avec une page par prestation) ; images optimisées à la main ; traductions dispersées | 2-3 h, puis coûteux à chaque évolution |
| B. Eleventy | Simple, 100 % statique, i18n possible via plugin | Images et i18n à configurer soi-même | 1-2 j |
| **C. Astro** ⭐ | **Routage i18n intégré** (`/` en français, `/en/` en anglais, `hreflang`) ; composants `Header`, `Footer`, `CtaDevis` uniques ; **optimisation d'images intégrée** (WebP/AVIF, `srcset`, lazy) ; HTML statique, idéal pour le SEO ; **supporté nativement par Cloudflare Pages** et par GitHub Pages ; le HTML actuel se reprend presque tel quel | Build Node.js (sans difficulté pour Nicolas) | 1-2 j |
| D. React / Vue (SPA) | — | **Déconseillé** : SEO dégradé, JS inutile pour un site vitrine | 3-5 j |

**Recommandation mise à jour : Astro, et le faire _au début_ plutôt qu'à l'étape 12.**
Trois éléments nouveaux justifient d'avancer la migration :
1. Le **bilinguisme** double toutes les pages : en HTML pur, chaque correction (menu, footer, boutons) serait à faire en 4 endroits et plus.
2. La **migration prévue vers Cloudflare** est le bon moment pour introduire un build (Cloudflare Pages construit Astro sans configuration).
3. Le mainteneur est à l'aise avec l'outillage.

Proposition : **migration Astro à l'identique d'abord** (étape 0, sans changement visuel), puis tous les chantiers suivants directement dans Astro. La décision finale appartient à Nicolas.

Structure cible envisagée :
```
src/
├── components/   Header.astro, Footer.astro, CtaDevis.astro, PrestationCard.astro, LangSwitch.astro, VideoVertical.astro
├── layouts/      Base.astro (head, SEO, OG, hreflang, JSON-LD)
├── i18n/         fr.json, en.json (libellés d'interface)
├── content/      prestations/{fr,en}/*.md (textes de chaque prestation)
├── pages/        index.astro, spectacles.astro, devis.astro, mentions-legales.astro
│   └── en/       index.astro, shows.astro, quote.astro, legal-notice.astro
└── assets/img/   images sources (optimisées au build)
public/           robots.txt, favicon, vidéos
```

---

## 5. Plan d'action

Ordonné par impact sur les réservations rapporté à l'effort. Effort : S (moins de 2 h), M (une demi-journée à une journée), L (plus d'une journée). Branche : `v2`.

| # | Action | Résout | Effort |
|---|---|---|---|
| 0 | ✅ **Fait le 2026-11-05.** Migration Astro à l'identique : layout, Header, pages FR, images optimisées, workflow de déploiement, code mort supprimé. Rendu comparé élément par élément avec l'ancien site (positions et tailles identiques en desktop, pas de débordement en 375 px). | S3, S4, S5, I7 (en partie) | M/L |
| 1 | ✅ **Fait le 2026-11-05.** Hero : bandeau saisonnier « Noël : réservez Nani, la Lutine Magicienne » (affiché automatiquement de septembre à décembre, côté navigateur) qui renvoie vers `#spectacle-noel` ; accroche « Magie · Jonglerie · Bulles de savon » ; h1 « Spectacles de magie pour enfants, familles et événements » ; « Partout en France et à l'international » ; boutons « Demander un devis » (email prérempli via `devisHref()`, à remplacer par le formulaire à l'étape 4) et « 📞 06 67 78 54 19 » ; lien « Découvrir nos spectacles ». Le hero passe en `min-height` (le contenu n'est plus coupé en mobile), et le bouton devis est visible sans défiler en 375 px. Mascottes retirées (section, menu, CSS, JS, images). **Remplacé le jour même à la demande de la cliente** : la bannière est désormais la photo décor (sans rideaux, sans bandeau de Noël, sans accroche, sans zone ni blocs Collectivité / Événementiel / Particulier), avec « Découvrir nos prestations » au centre et deux boutons discrets « Demander un devis » et téléphone. Le h1 est conservé mais masqué visuellement (`.visually-hidden`). En mobile, la photo s'affiche en entier, avec les boutons dessous. ⚠️ « Partout en France et à l'international » n'apparaît donc plus nulle part (C8 à retraiter, par exemple dans le pied de page à l'étape 7). | C2, I1 | S |
| 2 | **Appels à l'action partout** : ~~« Demander un devis » sur chaque prestation~~ (✅ fait le 2026-11-05 avec les nouvelles prestations : un bouton par carte et par formule Mariage, objet de l'email prérempli) ; téléphone dans le header ; barre fixe « Appeler / Devis » sur mobile à la place des boutons flottants ; badge tarif remplacé par « Devis gratuit sur demande ». | C3, I11, S6 | S |
| 3 | **Navigation mobile** : menu burger accessible, menu déroulant au clic, au toucher et au clavier, `scroll-margin-top`. | C1, I11 | S |
| 4 | **Formulaire de devis Web3Forms** (choix retenu, voir D3) : vous êtes (collectivité / entreprise-CSE / particulier / autre), prestation(s), date, lieu (ville, pays), nombre et âge des spectateurs, intérieur ou extérieur, téléphone, email, message ; honeypot `botcheck`, mention RGPD, message de remerciement, version anglaise. | C4 | M |
| 5 | **Bloc « Informations pratiques »** sur chaque prestation et dans une FAQ : montage 1 h 30, jusqu'à environ 600 spectateurs, son, lumière et électricité fournis selon la taille du spectacle, pas d'électricité nécessaire en extérieur, intervention en France et à l'international, sur facture. Fiche technique PDF ensuite si utile. | C6 | S |
| 6 | **Réassurance sans âge** : bandeau d'accroches (« Née dans une famille de magiciens », « Formée par Annie Fratellini et le Cirque de Pékin », « Jusqu'à 600 spectateurs », « Son et lumière fournis ») ; réécriture de la bio sans dates (I10). | C6, I10 | S |
| 7 | **Pied de page et mentions légales** : contact, zone, Instagram, liens FR/EN, page mentions légales (éditeur, SIRET vérifié, hébergeur) et politique de confidentialité (formulaire Web3Forms). | C7 | S |
| 8 | **Version anglaise** : routes `/en/`, sélecteur FR/EN, `hreflang`, traduction des textes (première traduction proposée par Claude, à faire relire, si possible par une personne anglophone, pour garder la poésie). | C5 | M/L |
| 9 | **SEO de base** : titles et meta descriptions par page et par langue, canonical, Open Graph, hiérarchie Hn, `robots.txt` et `sitemap.xml` corrects pour `floryanimation.com`, favicon dédié, JSON-LD `PerformingGroup`/`EntertainmentBusiness` avec `areaServed` France et international, et un `Service` par prestation. | I4, I5, I6, S7 | S/M |
| 10 | **Vidéo verticale** (assets attendus) : composant `VideoVertical` au format 9:16, `<video controls playsinline preload="none" poster>`, MP4 H.264 environ 720×1280, **moins de 25 Mio par fichier** (limite Cloudflare Pages), sous-titres si texte parlé ; repli possible sur un Short YouTube intégré en mode « façade » (pas d'iframe tant qu'on ne clique pas, `youtube-nocookie`). Emplacements : hero ou haut de l'accueil, et une vidéo par spectacle si disponible. | C6, I9 | M |
| 11 | **Collecte d'avis** : bouton « Vous avez vu le spectacle ? Laissez-nous un avis » (formulaire Web3Forms court, ou lien vers les avis Google une fois la fiche créée) ; section « Ils en parlent » affichée seulement quand il y aura des avis réels. Hors site : **créer la fiche Google Business Profile** (zone desservie, sans adresse publique). | I3 | S |
| 12 | **Bloc « Vous êtes… »** : 3 cartes cliquables (Collectivité, Entreprise/CSE, Particulier) avec arguments et prestations conseillées. | I2 | M |
| 13 | **Images** : WebP/AVIF, `srcset`, `width`/`height`, `loading="lazy"` (automatique avec Astro) ; moins de 500 Ko par page hors vidéo. | I7 | S |
| 14 | **Refonte visuelle rétro et féerique** (maquette à valider) : palette velours bordeaux, or, crème, bleu nuit, touches pastel ; typographies Google Fonts (display rétro + texte lisible) ; photos et vidéo en grand ; puis **passe accessibilité** complète. | I8, I9, S1, S2 | M/L |
| 15 | **Mesure d'audience sans cookie** (Cloudflare Web Analytics, gratuit avec la migration, ou GoatCounter) et suivi des clics sur le téléphone, l'email et le formulaire. | — | S |
| 16 | **Une page par prestation** (FR et EN) pour le référencement, par exemple `/spectacle-noel/`, `/en/christmas-show/`. | I4 | M |

---

## 6. Décisions et conventions

### Décisions prises (2026-11-05)
- **D1 Bilingue FR/EN.** Proposition : pages séparées (`/` en français, `/en/` en anglais) avec un sélecteur de langue, plutôt que les deux langues côte à côte sur la même page. C'est plus lisible et Google indexe chaque langue correctement. **À confirmer par Nicolas.**
- **D2 Domaine** `floryanimation.com` conservé, migration vers Cloudflare à venir ; travail sur la branche **`v2`**.
- **D3 Formulaire : Web3Forms** (gratuit jusqu'à 250 envois par mois, sans backend, compatible GitHub Pages et Cloudflare Pages). Nicolas doit générer la clé d'accès sur web3forms.com avec floryanimation@free.fr ; elle peut figurer dans le code (clé publique par conception). Penser à vérifier le dossier spam de Free au premier test.
- **D4 Tarifs** : toujours « sur demande », jamais de montant ni de fourchette.
- **D5 Mascottes** retirées de l'offre et du site.
- **D6 Administratif** sobre : « Sur facture », pas de détail (pas de GUSO, de bon de commande, etc.).
- **D7 Fichiers inutilisés** supprimés ; `.idea/` et `.claude/settings.local.json` ignorés.

### Code
- HTML5 sémantique, **indentation de 4 espaces**, guillemets doubles, classes en **kebab-case**, pas de styles inline.
- **Conserver les ancres des prestations** (utilisées par le menu Prestations) : `#bubble-magic-show`, `#la-valise`, `#spectacles-thematiques` (`#carnaval`, `#spectacle-noel`), `#jardin-des-bulles`, `#atelier-bulles`, `#mariage` (`#mariage-instant-precieux`, `#mariage-eclat-de-bulles`, `#mariage-prestige`), `#dans-ma-bulle`, ainsi que `#accueil`, `#nous-connaitre`, `#contact`. Les anciennes ancres (`#spectacle-enfants`, `#spectacle-cabaret`, `#animation-bar-bulles`, `#mascottes`) ont disparu avec leurs prestations. Toute ancre (`[id]`) a un `scroll-margin-top` pour ne pas passer sous la navbar.
- Nouvelle prestation : utiliser le composant `Prestation.astro`, ajouter l'entrée dans la liste `prestations` de `Header.astro`, et entourer tout texte non validé par la cliente de `<!-- TEXTE PROVISOIRE -->`.
- Astro : un élément répété sur plusieurs pages devient un **composant** dans `src/components/` ; le `<head>` vit dans `src/layouts/Base.astro`. Styles communs dans `src/styles/global.css`, styles d'une page dans `src/styles/<page>.css` (importés dans le frontmatter de la page, CSS global non scopé, pour rester proche de l'existant). Scripts en TypeScript dans des balises `<script>` (bundlées par Astro), **jamais d'`onclick` inline**.
- Liens internes avec `url()` de `src/lib/url.ts`, jamais de chemin absolu en dur.
- Téléphone, email, Instagram et lien de devis : toujours via `src/lib/contact.ts` (une seule source à modifier).
- Rien qui exige un serveur (`output: static`). Pas de nouvelle dépendance sans validation.
- Images : sources dans `src/assets/img/`, nom en `MAJUSCULES_AVEC_UNDERSCORES`, affichées avec `<Image>` d'`astro:assets` (`width` = largeur affichée, `densities={[1, 2]}`), `alt` descriptif (traduit en anglais pour la version EN). Pas de recadrage au build quand le CSS recadre déjà (`object-fit: cover`).
- Vérifier `npm run build` sans avertissement avant de proposer une modification.
- **Bilingue** : aucun texte en dur dans les composants ; libellés dans `i18n/fr.json` et `i18n/en.json` ; chaque nouvelle page existe dans les deux langues ; `lang` correct sur `<html>` ; `hreflang` réciproques.
- Liens externes : `target="_blank" rel="noopener noreferrer"`.
- Tester en **375 px** et en desktop, dans les deux langues.
- Travailler sur **`v2`**. Ne **jamais commiter ni pousser** sans demande explicite. Mettre à jour ce fichier à chaque décision.

### Ton des textes
- **Poétique, féerique, chaleureux**, mais **clair d'abord** : quoi, pour qui, combien de temps, puis la poésie.
- Vouvoiement en français ; en anglais, ton chaleureux et élégant, sans traduction mot à mot.
- **Ne jamais mettre l'âge en avant ni dater la carrière** : ni « 57 ans », ni « plus de 50 ans de scène », ni années de naissance des enfants. Préférer : « Née dans une famille de magiciens », « Sur scène depuis l'enfance », « Une vie consacrée à la magie », « Formée par Annie Fratellini et les maîtres du Cirque de Pékin ». Mettre l'accent sur la **maîtrise**, la **transmission** et l'**héritage**, pas sur la durée.
- Vocabulaire : émerveiller, malle, grenier, étincelle, magie de l'instant, poésie, enchanter, féerique.
- Prix : « Tarif sur demande » / « Devis gratuit sur demande ».
- Émojis : décoratifs seulement (`aria-hidden="true"`), jamais dans les titres Hn.
- Orthographe soignée, accents sur les majuscules (« À propos »).

### Charte graphique actuelle (relevée dans le code, à revoir à l'étape 14)
| Rôle | Valeur |
|---|---|
| Bleu principal (titres, liens, fond Contact) | `#4a90e2` ⚠️ contraste 3,3:1 sur blanc |
| Bleu clair (dégradés, survols) | `#63b3ed` |
| Bleu texte des détails | `#2e6bb3` |
| Contour du titre du hero | `#252fae` |
| Boutons d'action / badge tarif | dégradé `#ff0000` → `#cf3434` |
| Dégradé secondaire (inutilisé) | `#ff6b6b` → `#feca57` |
| Texte | `#333`, `#555`, `#666` |
| Fond de la page Prestations | dégradé `#f5f7fa` → `#c3cfe2` |
| Bouton Instagram | dégradé `#f09433` → `#bc1888` |
| Typographie | `Arial, sans-serif` ; h1 3,5 rem / 3 rem ; h2 2,5 rem ; menu 25 px |
| Formes | cartes à coins de 15 à 20 px, boutons en pilule de 50 px, ombres douces `rgba(0,0,0,.1)` |
| Animations | `fadeInUp`, `float`, `twinkle` ; transitions de 0,3 s |
| Visuel signature | rideau de théâtre rouge et or (`img/theatre-curtain.svg`) |

---

## 7. Questions encore ouvertes

1. ~~Migration Astro~~ : décidée et faite le 2026-11-05.
2. **Bilingue** : pages séparées `/en/` (recommandé) ou FR et EN sur la même page ?
3. **SIRET** : confirmer les 14 chiffres (`822 373 395 00018` ?).
4. **Mentions légales** : nom de l'éditeur (Flory Anne ou raison sociale) et forme juridique (micro-entreprise, association, SARL…) ? Adresse postale à afficher ou non ?
5. **Cloudflare** : hébergement sur Cloudflare Pages, ou seulement le DNS chez Cloudflare avec GitHub Pages derrière ? Date approximative de libération du domaine ?
6. **Vidéos** : durée et nombre de clips attendus ; texte parlé (sous-titres FR et EN à prévoir) ?
7. **Traduction anglaise** : une personne anglophone peut-elle relire ?
8. **Photos** : de nouvelles photos arrivent-elles avec les vidéos (pour la refonte et l'image de partage Open Graph) ?
9. **Textes définitifs** des prestations (remplacer les 11 blocs `TEXTE PROVISOIRE`), avec durées, publics et nombre de participants de l'Atelier (`TODO`).
10. **Photos manquantes** : Mariage (aucune), Jardin des Bulles et Atelier (anciennes photos réutilisées en attendant).
11. **Logo texte de la navbar** (« ✨ Flory Animation ») : conservé. La demande « remplacer le titre texte du bandeau » a été appliquée à la bannière de l'accueil. À confirmer avec la cliente.
