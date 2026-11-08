// Comportements communs à toutes les pages.

// Défilement fluide pour les ancres locales
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        const target = href ? document.querySelector(href) : null;
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Ombre de la navbar et bouton « retour en haut » selon le défilement
const navbar = document.querySelector<HTMLElement>('.navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar?.classList.toggle('scrolled', y > 50);
    backToTop?.classList.toggle('show', y > 300);
}, { passive: true });

backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu mobile (burger) et sous-menu « Prestations »
const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const dropdown = document.querySelector<HTMLElement>('.dropdown');
const dropdownToggle = document.querySelector<HTMLButtonElement>('.dropdown-toggle');

function setMenu(open: boolean) {
    navbar?.classList.toggle('menu-open', open);
    navToggle?.setAttribute('aria-expanded', String(open));
    if (!open) setDropdown(false);
}

function setDropdown(open: boolean) {
    dropdown?.classList.toggle('open', open);
    dropdownToggle?.setAttribute('aria-expanded', String(open));
}

navToggle?.addEventListener('click', () => {
    setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

dropdownToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    setDropdown(dropdownToggle.getAttribute('aria-expanded') !== 'true');
});

// Un clic sur un lien du menu le referme (utile pour les ancres de la même page)
document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

// Clic en dehors du menu : on referme
document.addEventListener('click', (e) => {
    if (navbar && !navbar.contains(e.target as Node)) setMenu(false);
});

// Touche Échap : on referme et on rend le focus au bouton concerné
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (dropdown?.classList.contains('open')) {
        setDropdown(false);
        dropdownToggle?.focus();
    } else if (navbar?.classList.contains('menu-open')) {
        setMenu(false);
        navToggle?.focus();
    }
});

// Retour en grand écran : on remet le menu dans son état fermé
window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
    if (e.matches) setMenu(false);
});
