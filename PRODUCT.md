# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Les visiteurs principaux sont des patients locaux (ainsi que leurs proches) cherchant à prendre rendez-vous en ligne, à vérifier les spécialités médicales disponibles et les horaires d'ouverture avant de se déplacer, ou à joindre rapidement la clinique par téléphone en cas d'urgence.

## Product Purpose

Le site web de la Clinique 13-23 permet aux patients de découvrir l'offre de soins de la clinique, d'accéder immédiatement aux coordonnées d'urgence et aux horaires, et de demander un rendez-vous médical en ligne de manière simple et structurée. Le succès se mesure par la clarté des informations pratiques et la conversion fluide des visiteurs vers une prise de rendez-vous ou un contact direct.

## Positioning

Clinique médicale multidisciplinaire accessible (médecine familiale, consultations spécialisées et urgences) centrée sur une prise en charge rapide, professionnelle et humaine de proximité.

## Operating Context

Les patients consultent le site (souvent sur mobile ou ordinateur) pour :
- Identifier rapidement si la clinique prend en charge leur besoin médical (médecine générale/familiale, spécialités, urgences).
- Vérifier les horaires d'ouverture et les numéros d'urgence avant de se déplacer ou d'appeler.
- Remplir une demande de rendez-vous guidée en plusieurs étapes (informations personnelles, choix du département et du médecin, date et heure souhaitées).

## Capabilities and Constraints

- **Stack technique existante** : Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui, React Hook Form + Zod.
- **Fonctionnalités présentes** :
  - Page d'accueil (`app/page.tsx`) présentant la proposition de valeur, les horaires/urgences, la grille des services, l'équipe médicale, les départements par onglets et le formulaire de rendez-vous.
  - Formulaire de prise de rendez-vous en 3 étapes (`components/RendezVous.tsx`) avec validation par étape (identité/téléphone, département/médecin/antécédents de fréquentation, date/heure/message).
  - Route dédiée `/rendez-vous` (`app/rendez-vous/page.tsx`) et liens de navigation prévus (`/about`, `/service`, `/doctor`, `/department`, `/contact`).
- **Éléments restant à définir / remplacer** :
  - La liste définitive des départements/spécialités réels et les vrais profils des médecins de la Clinique 13-23 (actuellement occupés par des données de démonstration).
  - L'harmonisation des horaires d'ouverture définitifs entre l'accueil et le pied de page.
  - Le branchement backend/notification réel à la soumission du formulaire de rendez-vous (actuellement un `console.log` et `alert`).

## Brand Commitments

- **Nom** : Clinique 13-23 (parfois écrit « Clinique 13/23 » dans l'interface).
- **Logo officiel** : `public/logo.png` (monogramme médical « C » vert et croix/icône bleue avec l'inscription « CLINIQUE 13-23 »).
- **Langue** : Français (les résidus de texte en anglais et en faux-latin doivent être remplacés par du français clair et professionnel).
- **Ton** : Rassurant, professionnel, accessible et humain.

## Evidence on Hand

- **Identité et coordonnées réelles confirmées** :
  - Nom : Clinique 13-23
  - Logo : `public/logo.png`
  - Téléphones : `3450-2653` | `5523-2555`
  - Email : `contact@clinique-13-23.com`
- **Visuels présents dans le dépôt** : `public/hero.jpg`, `public/doctor.jpg`, `public/apointment.jpg`.
- **Contenus fictifs à ne pas traiter comme des faits** :
  - Les noms et photos des médecins actuels (`Dr. Norman Colins`, `Dr. Steven Lee`, `Dr. David Kim`, `Dr. Sarah Lee`, `Dr. Smith`, etc.) sont des placeholders.
  - Les textes en latin (Lorem ipsum) et les intitulés/descriptions en anglais (`Denture Care`, `Total Health Care Solution`, etc.) sont des contenus de gabarit à remplacer.
  - Aucun témoignage patient, chiffre clé ou certification ne doit être inventé sans validation.

## Product Principles

1. **Clarté et réassurance immédiates** : Un patient ou un proche inquiet doit trouver en quelques secondes les numéros d'urgence, les horaires et le bouton de prise de rendez-vous.
2. **Parcours de rendez-vous sans friction** : La demande de consultation doit rester guidée, lisible et rapide à compléter sur mobile comme sur ordinateur.
3. **Authenticité médicale** : Exposer uniquement les vrais services, coordonnées et engagements de la Clinique 13-23, dans un français soigné et compréhensible par tous, sans jargon inutile ni promesses génériques non vérifiées.
