const lightbox = document.getElementById('lightbox-overlay');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('lightbox-close');

document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

// Ferme en cliquant sur le fond ou le bouton
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }
});

// A FAIRE : ----------------------------------------------------------------
// aria-current="page" : tu injectes/triées dynamiquement ce code (via JS) uniquement sur le lien qui pointe vers la section visible.
// aucun aria-current sur nav-mid tant que l’on n’est pas entré dans #about.
// Une fois que #about devient la section “actuelle” (au scroll ou quand on clique)
// ajoutes dynamiquement aria-current="page" sur <a href="#about"…>
// Et tu veilles à retirer aria-current de l’ancien lien avant de le placer sur le nouveau.

// AJOUTER LA VALIDATION DU FORMULAIRE COMME :
// inputEmail.setAttribute('aria-invalid', 'true');
// errEmailDiv.textContent = 'Veuillez saisir une adresse email valide.';
// mettre à jour aria-invalid / textContent dynamiquement