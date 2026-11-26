/**
 * Préfixe un chemin interne avec le `base` configuré (GitHub Pages : /floryanimation/).
 * url('spectacles.html#spectacle-noel') -> '/floryanimation/spectacles.html#spectacle-noel'
 */
export function url(path = ''): string {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const clean = path.replace(/^\//, '');
    return clean ? `${base}/${clean}` : `${base}/`;
}
