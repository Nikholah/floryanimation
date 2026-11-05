/**
 * Envoi d'un formulaire vers Web3Forms, commun aux pages Devis et Avis.
 * Le formulaire porte ses réglages en attributs data- : clé, email de repli et messages traduits.
 * Tant que la clé est vide, un email prérempli s'ouvre à la place de l'envoi (repli).
 */
const CHAMPS_TECHNIQUES = ['access_key', 'subject', 'from_name', 'botcheck'];

export function setupForm(form: HTMLFormElement, status: HTMLElement) {
    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]')!;
    const d = form.dataset;

    function showStatus(type: 'success' | 'error' | 'info', text: string) {
        status.className = `devis-status devis-status--${type}`;
        status.textContent = text;
    }

    function openMailFallback(data: FormData) {
        const lines: string[] = [];
        data.forEach((value, key) => {
            if (CHAMPS_TECHNIQUES.includes(key)) return;
            if (String(value).trim()) lines.push(`${key} : ${value}`);
        });
        const prestation = data.get('Prestation');
        const subject = prestation ? `${d.mailSubject} : ${prestation}` : (d.mailSubject ?? '');
        location.href = `mailto:${d.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
        showStatus('info', d.msgMail ?? '');
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;

        const data = new FormData(form);
        if (!d.accessKey) {
            openMailFallback(data);
            return;
        }

        submit.disabled = true;
        showStatus('info', d.msgSending ?? '');
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            });
            const result = await response.json();
            if (response.ok && result.success) {
                form.reset();
                showStatus('success', d.msgSuccess ?? '');
            } else {
                throw new Error(result.message);
            }
        } catch {
            showStatus('error', `${d.msgError} ${d.email}.`);
        } finally {
            submit.disabled = false;
        }
    });
}
