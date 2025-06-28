Portfolio de Buonomo Léa

Un site vitrine accessible et responsive, conçu pour présenter mes projets, mes compétences et mon parcours.

Table des matières :

    > Aperçu

    > Fonctionnalités

    > Technologies utilisées

    > Design & Style

    > Layout & Sections

    > Global

    > Hero Section

    > Sommaire (TOC)

    > À propos (#about)

    > Compétences (#skills)

    > Projets (.project)

    > Lightbox

    > Formations (#formations)

    > Mon équipe (#team)

    > Contact (#contact)

    > Media Queries (Mobile)

    > Scripts JS

    > Installation & démarrage

    > Organisation du projet

    > Accessibilité

    <!-- Contact -->

Aperçu :

    Visitez la version en ligne pour découvrir les animations, la navigation fluide et la section 3D interactive.

Fonctionnalités :

    > Navigation accessible (skip-link, focus styles)

    > Sidebar fixe et mobile-first

    > Section Hero 3D interactive

    > Sommaire en grid

    > Section “À propos” illustrée par objectifs

    > Section “Compétences” épurée

    > Galerie de 5 projets avec lightbox

    > Section “Formations” avec PDF viewer

    > Section “Mon équipe” en grille adaptative

    > Formulaire de contact

    > Responsive

Technologies utilisées :

    > HTML5 sémantique

    > CSS3 (Custom Properties, Flexbox, Grid, animations, media queries)

    > JavaScript ES6+

    > <model-viewer> pour rendu 3D

    > FontAwesome pour icônes sociales

Design & Style :

    Variables CSS (:root) pour couleurs, espacements et typographie

    Palette >

        --primary: violet #2E0EF1

        --bg-color: crème #f8f4e3

        --text-color: noir #000000

    Spacing > du micro (--spacing-small) au macro (--spacing-xxl)

    Typographie >

        Police principale Arial, Helvetica, sans-serif

        Titres compressés via --compressed

    Accessibilité > outlines visibles, contraste WCAG AA

    Animations & scroll > smooth par défaut, désactivé si prefers-reduced-motion

    Scrollbar > styles WebKit + fallback scrollbar-color: var(--primary) var(--bg-color)

Layout & Sections :

    Global >

        Chaque section utilise une grille 2-colonnes (10 % sidebar fixe / 90 % contenu principal),
        100 vh pour hero et sommaire,
        auto pour les autres sections.

Hero Section :

    > Grille 50 % / 50 % pour .hero-left et .hero-right

    > Titre “PORTFOLIO” positionné en absolute, responsive (clamp(6rem,10vw,10rem))

    > Modèle 3D centré <model-viewer>, filtré et mis à l’échelle (à optimiser)

Sommaire (TOC) :

    > Flex-col pour .table-of-contents

    > Grille de 2 colonnes pour .toc-grid

    > Titre split .toc-upper & .toc-bold, repères visuels ligne par ligne

À propos (#about) :

    > Grille 50 % / 50 %, grid-areas “about-left about-right”

    > Paragraphe à gauche, trois objectifs (“goals”) à droite

    > Numéros stylés avec décorations verticales

Compétences (#skills) :

    > Section épurée avec padding généreux

Projets (.project) :

    > Grille de 2×2 alternant images & descriptions

    > Effet zoom léger au hover sur vignettes

    > Légendes <figcaption>

    > Lightbox

    > Overlay full-screen ARIA-friendly (role="dialog")

    > Animation fadeIn, close button stylé et accessible

Formations (#formations) :

    > Grille de 50 % / 50 % pour colonnes gauche (titre, paragraphe, PDF) et droite

    > Preview PDF stylée, alignements en flex

Mon équipe (#team) :

    > Grille auto-fit pour cartes adaptatives

    > Cartes avec ombre et “lift” au hover

    > Photos carrées, bord violet, opacité réduite

Contact (#contact) :

    > Formulaire vertical, labels uppercase en violet

    > Inputs et textarea arrondis, ombre légère au focus

    > Bouton submit aligné à droite, change de couleur au hover

Media Queries (Mobile) :

    > Sidebar devient top-bar full-width (10 % height)

    > Nav-mid masquée, nav-top & nav-bottom côte à côte

    > Sections empilées en flex-col, width 100 %, height auto

    > Titres, images et paddings réduits pour mobiles

Scripts JS :

    Lightbox

    À venir >

        Détection dynamique de la section active pour ajouter aria-current="page" sur le lien correspondant

        Validation de formulaire accessible : gestion de aria-invalid et messages d’erreur dynamiques


Organisation du projet :

portfolio-lea/ <br> 
├─ assets/ ico, obj, team, images <br>
├─ styles.css (variables, layout, sections, media queries) <br>
├─ scripts.js (lightbox, nav active, validation…) <br>
├─ index.html <br>
├─ robots.txt <br>
└─ README.md <br>

Accessibilité :

    > Skip-link pour navigation clavier

    > Roles & labels ARIA sur lightbox, nav & images

    > Contraste conforme WCAG AA

    > Respect de prefers-reduced-motion


Merci pour votre visite !