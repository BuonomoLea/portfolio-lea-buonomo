# Portfolio de Léa Buonomo

Un site vitrine accessible et responsive, conçu pour présenter mes projets, mes compétences et mon parcours.

## Table des matières

- [Live demo](#live-demo)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Design & Style](#design--style)
- [Layout & Sections](#layout--sections)
- [Accessibilité](#accessibilité)
- [A venir](#a-venir)
- [Organisation du projet](#organisation-du-projet)
- [Installation & démarrage](#installation--démarrage)
- [Contact](#contact)

---

## Live demo

Visitez la version en ligne via ce lien :  
[![Live Demo](https://img.shields.io/badge/Live_Demo-Open-2E0EF1)](https://buonomolea.github.io/portfolio-lea-buonomo/)

---

## Fonctionnalités

- Navigation accessible (skip-link, focus styles)  
- Sidebar fixe et mobile-first  
- Section Hero 3D interactive  
- Sommaire en grid  
- Section “À propos” illustrée par objectifs  
- Section “Compétences” épurée  
- Galerie de 5 projets avec lightbox  
- Section “Formations” avec PDF viewer  
- Section “Mon équipe” en grille adaptative  
- Formulaire de contact  
- Responsive et Media Queries  

---

## Technologies utilisées

- HTML5 sémantique  
- CSS3 (Custom Properties, Flexbox, Grid, animations, media queries)  
- JavaScript ES6+  
- Anciennement `<model-viewer>` pour rendu 3D  
- FontAwesome pour les icônes sociales  

---

## Design & Style

- Variables CSS (`:root`) pour couleurs, espacements et typographie  

Palette de couleurs :  
- `--primary`: violet `#2E0EF1`  
- `--bg-color`: crème `#f8f4e3`  
- `--text-color`: noir `#000000`  

Scrollbar : styles WebKit + fallback avec `scrollbar-color: var(--primary) var(--bg-color)`  

---

## Layout & Sections

- Hero Section  
- Sommaire (TOC)  
- À propos (#about)  
- Compétences (#skills)  
- Projets (.project)  
- Formations (#formations)  
- Mon équipe (#team)  
- Contact (#contact)  

---

## Accessibilité

- Skip-link pour navigation clavier  
- Roles & labels ARIA sur lightbox, nav & images  
- Contraste conforme WCAG AA  
- Respect de `prefers-reduced-motion`  

---

## A venir

- Optimisation continue
- Modification ou ajout de projet
- Ajustement pour le format Ipad

---

## Organisation du projet

```portfolio-lea/
├─ assets/ # ico, obj, team, images
├─ styles.css # variables, layout, sections, media queries
├─ scripts.js # lightbox, nav active, validation…
├─ index.html
├─ robots.txt
└─ README.md
```
---

## Installation & démarrage

Pour installer et lancer ce projet localement, suivez ces étapes :

```bash
git clone https://github.com/BuonomoLea/BUONOMO_Lea_Portfolio_2025_FR.git
cd BUONOMO_Lea_Portfolio_2025_FR
```

Aucune compilation ni dépendance n’est nécessaire.
Il suffit d’ouvrir le fichier index.html dans votre navigateur pour visualiser le portfolio.
Cependant je vous recommande la version live démo

---

## Contact

- Portfolio : https://buonomolea.github.io/BUONOMO_Lea_Portfolio_2025_FR/  
- LinkedIn :  https://www.linkedin.com/in/l%C3%A9a-b-179849208/
- Email : leabuonomo@hotmail.fr
  
Merci pour votre visite !
Buonomo Léa
