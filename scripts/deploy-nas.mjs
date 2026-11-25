/**
 * Déploiement sur le NAS Synology (réseau local) : `npm run deploy:nas`.
 *
 * 1. construit le site (astro build) avec le chemin de base du NAS ;
 * 2. copie dist/ dans le dossier du NAS (partage « web », servi par Web Station)
 *    et supprime les fichiers qui n'existent plus dans dist/ (miroir).
 *
 * Réglages : deploy-nas.config.json à la racine (non versionné, voir deploy-nas.config.example.json),
 * ou variables d'environnement NAS_DEST, NAS_BASE_PATH, NAS_SITE_URL.
 *
 * Sécurité : le miroir supprime des fichiers. Il ne s'exécute que si le dossier cible est vide
 * ou contient le fichier témoin .floryanimation-site (déposé au premier déploiement).
 * Une erreur de chemin (par exemple la racine du partage « web ») ne peut donc rien effacer.
 */
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const MARKER = '.floryanimation-site';
const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

// Réglages
const configFile = join(root, 'deploy-nas.config.json');
const config = existsSync(configFile) ? JSON.parse(readFileSync(configFile, 'utf8')) : {};
const dest = process.env.NAS_DEST ?? config.dest;
const basePath = process.env.NAS_BASE_PATH ?? config.basePath ?? '/';
const siteUrl = process.env.NAS_SITE_URL ?? config.siteUrl; // facultatif : sinon, domaine par défaut de astro.config.mjs

const fail = (message) => {
    console.error(`\n✗ ${message}\n`);
    process.exit(1);
};

if (!dest) {
    fail("Dossier du NAS non renseigné. Copiez deploy-nas.config.example.json en deploy-nas.config.json et indiquez « dest » (par exemple \\\\NAS\\web\\floryanimation).");
}

// 1. Le dossier du NAS est-il joignable, et peut-on y écrire en miroir sans risque ?
if (!existsSync(dest) || !statSync(dest).isDirectory()) {
    fail(`Dossier introuvable : ${dest}\nVérifiez que le NAS est allumé, que le partage est accessible depuis ce PC et que le dossier existe.`);
}
const existing = readdirSync(dest);
if (existing.length > 0 && !existing.includes(MARKER)) {
    fail(`Le dossier ${dest} n'est pas vide et ne contient pas ${MARKER}.\nPar sécurité, rien n'est copié ni supprimé. Indiquez un dossier vide, réservé au site.`);
}

// 2. Build
console.log(`→ Build (base « ${basePath} »)…`);
const env = { ...process.env, BASE_PATH: basePath, MSYS_NO_PATHCONV: '1' };
if (siteUrl) env.SITE_URL = siteUrl;
const build = spawnSync('npx', ['astro', 'build'], { cwd: root, env, stdio: 'inherit', shell: true });
if (build.status !== 0) fail('Le build a échoué : rien n’a été copié sur le NAS.');

// 3. Copie, puis suppression de ce qui n'existe plus dans dist/
console.log(`→ Copie vers ${dest}…`);
cpSync(dist, dest, { recursive: true, force: true });

const listFiles = (dir) =>
    readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const path = join(dir, entry.name);
        return entry.isDirectory() ? [path, ...listFiles(path)] : [path];
    });
const wanted = new Set(listFiles(dist).map((p) => relative(dist, p)));
let removed = 0;
// Du plus profond au moins profond, pour vider les dossiers avant de les supprimer
for (const path of listFiles(dest).sort((a, b) => b.length - a.length)) {
    const rel = relative(dest, path);
    if (rel === MARKER || wanted.has(rel)) continue;
    rmSync(path, { recursive: true, force: true });
    removed++;
}
writeFileSync(join(dest, MARKER), `Dossier géré par npm run deploy:nas (site Flory Animation). Dernier déploiement : ${new Date().toISOString()}\n`);

console.log(`✓ Site déployé dans ${dest} (${wanted.size} éléments, ${removed} ancien(s) supprimé(s)).`);
