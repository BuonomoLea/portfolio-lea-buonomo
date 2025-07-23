const lightbox = document.getElementById('lightbox-overlay');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('lightbox-close');

document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

// Fermer la lightbox en cliquant sur le fond ou le bouton
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }
});

// Navigation avec aria-current
const navLinks = document.querySelectorAll('.nav-mid a.dot');
const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href').replace('#', ''));
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

function getActiveSection() {
    let activeId = null;
    const offset = window.innerHeight * 0.3;
    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
            activeId = section.id;
            break;
        }
    }
    return activeId;
}

function updateAriaCurrent() {
    const activeId = getActiveSection();
    navLinks.forEach(link => {
        if (link.hasAttribute('aria-current')) {
            link.removeAttribute('aria-current');
        }
        if (activeId && link.getAttribute('href') === `#${activeId}`) {
            link.setAttribute('aria-current', 'page');
        }
    });
}

window.addEventListener('scroll', updateAriaCurrent);
window.addEventListener('resize', updateAriaCurrent);
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(updateAriaCurrent, 100);
    });
});
document.addEventListener('DOMContentLoaded', updateAriaCurrent);


// Formulaire validation
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const fieldIds = ['name', 'email', 'message'];
const errorMessages = {
    name: 'Veuillez saisir un nom valide (lettres, espaces, tirets ou apostrophes uniquement).',
    email: 'Veuillez entrer une adresse email valide.',
    message: 'Le message ne peut pas être vide.'
};
function validateField(id, value) {
    switch (id) {
        case 'name': {
            const nameRegex = /^[\p{L} '-]+$/u;
            return nameRegex.test(value.trim());
        }
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'message':
            return value.trim() !== '';
        default:
            return true;
    }
}
function updateFieldValidation(id) {
    const input = document.getElementById(id);
    const errDiv = document.getElementById(`err-${id}`);
    const valid = validateField(id, input.value);
    if (!valid) {
        input.setAttribute('aria-invalid', 'true');
        errDiv.textContent = errorMessages[id];
    } else {
        input.removeAttribute('aria-invalid');
        errDiv.textContent = '';
    }
    return valid;
}
fieldIds.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => updateFieldValidation(id));
    input.addEventListener('blur', () => updateFieldValidation(id));
});

// Input pour Formspree
if (!form.querySelector('input[name="_next"]')) {
    const nextInput = document.createElement('input');
    nextInput.type = 'hidden';
    nextInput.name = '_next';
    nextInput.value = window.location.pathname + '?sent=1#contact';
    form.appendChild(nextInput);
}

// Success message
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
        const formStatus = document.getElementById('form-status');
        if (formStatus) {
            formStatus.textContent = 'Votre message a bien été envoyé !';
        }
        // Remove ?sent=1 from URL without reloading
        params.delete('sent');
        const newSearch = params.toString();
        const newUrl = window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash;
        window.history.replaceState({}, '', newUrl);
    }
});


// ScrollSpy pour les nav dot
const navDotLinks = document.querySelectorAll('.nav-mid a.dot');
const allSections = Array.from(document.querySelectorAll('section'));
const contactFooter = document.getElementById('contact');
if (contactFooter) {
    allSections.push(contactFooter);
}

function setActiveDotForSection(sectionId) {
    const targetLink = document.querySelector(`.nav-mid a[href="#${sectionId}"]`);
    navDotLinks.forEach(link => link.classList.remove('active'));
    if (targetLink) {
        targetLink.classList.add('active');
    }
}

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navDotLinks.forEach(link => link.classList.remove('active'));
            const sectionId = entry.target.id;
            if (sectionId !== 'contact') {
                const targetLink = document.querySelector(`.nav-mid a[href="#${sectionId}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
            // If sectionId === 'contact', leave all dots inactive
        }
    });
}, {
    root: null,
    threshold: 0.5
});

allSections.forEach(section => spyObserver.observe(section));

// Fonction de partage du portfolio
function sharePortfolio() {
    if (navigator.share) {
      navigator.share({
        title: 'Buonomo Léa Portfolio',
        text: 'Découvre ce profil ici :',
        url: window.location.href
      })
      .then(() => console.log('Partage réussi !'))
      .catch(error => console.log('Erreur de partage :', error));
    } else {
      alert("Le partage n’est pas supporté sur ce navigateur.");
    }
  }

document.getElementById('shareBtn').addEventListener('click', sharePortfolio);