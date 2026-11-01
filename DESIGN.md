---
name: Clinique 13-23
description: Système de design web de la Clinique 13-23 — clarté médicale immédiate, repères d'urgence visibles et prise de rendez-vous guidée.
colors:
  clinique-bleue: "#162E93"
  clinique-bleu-fonce: "#1E3A8A"
  clinique-green: "#2E6B2E"
  clinique-rose: "#F54927"
  navy-heading: "#2C4964"
  slate-ink: "#1E293B"
  slate-body: "#475569"
  slate-muted: "#64748B"
  ice-canvas: "#EDF4F8"
  glacier-tint: "#F0F7FF"
  sky-badge: "#EFF6FF"
  portrait-sky: "#E0F2FE"
  field-surface: "#F9FAFB"
  border-subtle: "#F1F5F9"
  surface-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  xs: "2px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section-y: "96px"
components:
  button-primary:
    backgroundColor: "{colors.clinique-bleue}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.clinique-bleu-fonce}"
    textColor: "{colors.surface-white}"
  button-cta-vitality:
    backgroundColor: "{colors.clinique-green}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    typography: "{typography.label}"
  button-cta-vitality-hover:
    backgroundColor: "{colors.clinique-rose}"
    textColor: "{colors.surface-white}"
  card-service:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.slate-body}"
    rounded: "{rounded.xl}"
    padding: "32px"
  card-triage:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.slate-body}"
    rounded: "{rounded.xs}"
    padding: "32px"
  card-doctor:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
  input-field:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.slate-body}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "56px"
---

# Design System: Clinique 13-23

## Overview

**Creative North Star: "The Reassuring Civic Clinic"**

Le système visuel de la Clinique 13-23 est conçu pour apaiser immédiatement l'anxiété du patient ou du proche qui cherche un soin, un horaire ou un numéro d'urgence. L'architecture privilégie des surfaces blanches lumineuses et des respirations bleu glacier qui évoquent l'hygiène, le calme et l'accessibilité, tout en ponctuant le parcours de repères chromatiques francs issus du monogramme officiel de la clinique.

Chaque écran s'organise autour d'une lecture civique et directe : les informations vitales (téléphones d'urgence, horaires d'ouverture, prise de rendez-vous) émergent par superposition structurelle dès le premier regard, tandis que l'exploration des spécialités et le formulaire de demande de consultation accompagnent l'utilisateur pas à pas avec des contrôles tactiles larges et rassurants. Le système rejette toute surcharge décorative, toute froideur hospitalière austère et tout jargon visuel complexe.

**Key Characteristics:**
- Surfaces aérées alternant blanc pur et bleu glacier apaisant pour rythmer la lecture sans lourdeur.
- Dualité identitaire fidèle au logo officiel : autorité médicale en Cobalt Clinique et passage à l'action en Vert Vitalité.
- Signalétique d'attention en Corail d'Alerte Doux réservée aux amorces de section, icônes de triage et indicateurs d'onglets actifs.
- Composants accueillants, tactiles et guidés : boutons pilules généreux, champs de saisie hauts (56px) et progression étape par étape.
- Élévation hybride combinant voile d'ombre ambiant au repos, halo bleuté au survol et chevauchement franc pour les modules critiques.

## Colors

La palette conjugue la confiance institutionnelle du bleu cobalt, l'énergie bienveillante du vert médical issu du logo « Clinique 13-23 » et une touche corail signalétique sur un fond immaculé et azuré.

### Primary
- **Cobalt Clinique** (`clinique-bleue`, `#162E93`) : Couleur d'autorité médicale primaire. Utilisée pour les grands titres (`h1`, `h2`), les boutons d'action secondaires/navigation d'étape, le bandeau de contact téléphonique du module de rendez-vous et les pictogrammes de spécialités.
- **Cobalt Profond** (`clinique-bleu-fonce`, `#1E3A8A`) : État de survol et d'appui des actions primaires bleues et ancrage des textes d'accentuation foncés.

### Secondary
- **Vert Vitalité / Monogramme** (`clinique-green`, `#2E6B2E`) : Directement extrait du grand « C » et du mot « CLINIQUE » du logo officiel. Réservé aux appels à l'action de conversion majeurs (bouton principal du Hero, bouton de confirmation finale du rendez-vous) et aux segments validés de la barre de progression en 3 étapes.

### Tertiary
- **Corail d'Alerte Doux** (`clinique-rose`, `#F54927`) : Accent signalétique d'éveil et d'urgence. Utilisé pour le filet horizontal d'amorce (`48px × 2px`), les surtitres en capitales, les icônes des cartes de triage (Service 24h/24, Horaires, Urgences), la bordure active des onglets de départements et l'état de survol énergique des grands boutons de conversion.

### Neutral
- **Blanc Pur** (`surface-white`, `#FFFFFF`) : Surface principale des pages, des cartes de services, de l'intérieur du formulaire et de la barre de navigation translucide (`90%` d'opacité avec flou d'arrière-plan).
- **Bleu Glacier Apaisant** (`ice-canvas` `#EDF4F8` / `glacier-tint` `#F0F7FF`) : Arrière-plan des sections mises en scène (section de prise de rendez-vous, bannières d'en-tête) pour créer une séparation tonale douce sans ligne de bordure.
- **Ciel Médical & Badges** (`sky-badge` `#EFF6FF` / `portrait-sky` `#E0F2FE`) : Fonds des médaillons d'icônes de services (`64px × 64px`) et arrière-plan des portraits de l'équipe médicale.
- **Marine Ardoise & Encre** (`navy-heading` `#2C4964` / `slate-ink` `#1E293B`) : Titres de cartes, noms des médecins, sous-titres de départements et intitulés de colonnes.
- **Ardoise de Lecture & Secondaire** (`slate-body` `#475569` / `slate-muted` `#64748B`) : Corps de texte descriptif, liens de navigation au repos et métadonnées secondaires.
- **Gris Champ Tactile & Bordure** (`field-surface` `#F9FAFB` / `border-subtle` `#F1F5F9`) : Fond doux et contour discret des champs de saisie et des cartes au repos.

### Named Rules
**The Civic Triage Rule.** Le Corail d'Alerte Doux (`clinique-rose`) agit comme un repère d'orientation rapide (filets de surtitre, icônes d'urgence, onglet actif) et ne doit jamais recouvrir de larges surfaces de fond.
**The Monogram Conversion Rule.** Le Vert Vitalité (`clinique-green`) signale le début et l'aboutissement du parcours patient (lancer une demande de rendez-vous, progresser d'une étape, confirmer la demande).

## Typography

**Display Font:** Inter (avec repli système `sans-serif`)
**Body Font:** Inter (avec repli système `sans-serif`)

**Character:** Une typographie néo-grotesque humaniste unique (`Inter`), choisie pour sa clarté clinique irréprochable à toutes les tailles. Le contraste s'opère par la graisse (`400` vs `600`/`700`), l'échelle franche des titres en Cobalt Clinique et les surtitres en capitales espacées.

### Hierarchy
- **Display** (`700`, `3.75rem` / `60px` sur desktop, `2.25rem` / `36px` sur mobile, `line-height: 1.25`) : Titre d'accroche principal du Hero (« Votre Partenaire de Santé le Plus Fiable »).
- **Headline** (`700`, `2.25rem` / `36px`, `line-height: 1.25`) : Titres des grandes sections de la page (`Nos Services`, `Rencontrez Nos Médecins Expérimentés`, `Visiter Nos Departements`, `Prendre un rendez-vous`).
- **Title** (`700`, `1.25rem` / `20px` à `1.5rem` / `24px`, `line-height: 1.4`) : Titres des cartes de triage, spécialités médicales, numéros d'urgence mis en avant et noms des praticiens.
- **Body** (`400`, `0.875rem` / `14px` à `1rem` / `16px`, `line-height: 1.625`, longueur de ligne max `55–68ch`) : Paragraphes explicatifs des services, descriptions des départements et consignes du formulaire.
- **Label** (`600`–`700`, `0.75rem` / `12px` à `0.875rem` / `14px`, `letter-spacing: 0.08em`, `uppercase`) : Surtitres de section précédés d'un filet corail et libellés des boutons pilules d'action.

### Named Rules
**The Eyebrow Anchor Rule.** Chaque titre de section majeur (`Headline`) est introduit par un surtitre en capitales Corail d'Alerte Doux précédé d'un filet horizontal (`48px × 2px`), offrant un point d'ancrage visuel constant lors du défilement.

## Layout

Le système repose sur un conteneur centré de largeur maximale `1280px` (`max-w-7xl`) avec des gouttières latérales adaptatives (`16px` sur mobile, `24px` sur tablette, `32px` sur desktop) et une barre de navigation fixe de `80px` (`h-20`) compensée par un décalage supérieur (`pt-20`).

- **Rythme vertical des sections** : Les sections respirent généreusement avec un espacement vertical de `64px` à `96px` (`py-16 md:py-24`) et un écart de `48px` à `64px` (`mb-12` à `mb-16`) entre l'en-tête de section et sa grille de contenu.
- **Grilles adaptatives** :
  - **Bandeau de triage (Hero2)** : Grille à 3 colonnes (`grid-cols-1 md:grid-cols-3`, `gap-6` / `24px`) remontant de `40px` (`-mt-10`) sur le visuel d'accueil.
  - **Grille des services** : 1 colonne sur mobile, 2 sur tablette, 3 sur desktop (`md:grid-cols-2 lg:grid-cols-3`, `gap-8` / `32px`).
  - **Grille des médecins** : 1 colonne sur mobile, 2 sur tablette, 4 sur grand écran (`md:grid-cols-2 xl:grid-cols-4`, `gap-6` / `24px`).
  - **Explorateur de départements** : Disposition asymétrique `1/4` (navigation verticale par onglets à bordure droite) + `3/4` (fiche détaillée `2/3` texte + `1/3` photo).
  - **Conteneur de rendez-vous** : Carte fendue en deux colonnes (`5/12` photo + bandeau de contact téléphonique superposé, `7/12` formulaire interactif à 3 étapes avec grille interne à 2 colonnes `gap-4` / `16px`).

## Elevation & Depth

La profondeur suit une philosophie **hybride et progressive ("Layered & Ambient")**. Au repos, les cartes de contenu reposent sur un voile d'ombre ambiant quasi imperceptible qui préserve la sérénité de la page, puis s'élèvent d'un halo bleuté subtil au survol pour confirmer l'interactivité. À l'inverse, les blocs d'action critique (navigation fixe, cartes de triage en surplomb du Hero, grand conteneur de prise de rendez-vous) utilisent une élévation structurelle franche qui hiérarchise immédiatement les priorités du patient.

### Shadow Vocabulary
- **Navigation Flottante** (`box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)` + `backdrop-filter: blur(12px)`) : Barre d'en-tête fixe `bg-white/90` maintenant les repères de navigation accessibles.
- **Repos Ambiant** (`box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03)`) : État par défaut des cartes de services, complété par un filet de bordure très clair (`#F8FAFC`).
- **Halo Clinique au Survol** (`box-shadow: 0 10px 40px rgba(59, 130, 246, 0.10)`) : Élévation douce teintée de bleu au survol des cartes de services.
- **Surplomb de Triage** (`box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`) : Cartes d'accès rapide chevauchant le bas de la bannière Hero, passant à `0 20px 25px -5px rgba(0, 0, 0, 0.1)` au survol.
- **Scène de Réservation** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)`) : Conteneur fendu du formulaire de rendez-vous se détachant sur le fond Bleu Glacier Apaisant (`#EDF4F8`).

### Named Rules
**The Blue-Tinted Lift Rule.** Lorsqu'une carte de service s'élève au survol, son ombre adopte une lueur bleutée diffuse (`rgba(59, 130, 246, 0.10)`) plutôt qu'un gris neutre lourd, préservant la fraîcheur lumineuse de l'interface.

## Shapes

Le langage de formes est **accueillant, tactile et guidé** : il associe des silhouettes pilules rassurantes pour l'action humaine à des conteneurs géométriques doux et structurés pour l'information médicale.

- **Pilules d'action et de progression** (`9999px` / `rounded-full`) : Tous les boutons d'appel à l'action, boutons d'étape (« Retour », « Suivant », « Confirmer »), icônes sociales et barres de progression par étape utilisent un arrondi complet.
- **Cartes de services généreuses** (`16px` / `rounded-2xl`) : Courbure accueillante associée à des badges d'icônes internes arrondis à `12px` (`rounded-xl`).
- **Cartes praticiens** (`12px` / `rounded-xl`) : Cadre extérieur doux abritant un portrait carré aux angles arrondis à `8px` (`rounded-lg`) sur fond bleu ciel (`#E0F2FE`).
- **Champs de formulaire tactiles** (`6px` / `rounded-md`) : Coins légèrement adoucis sur des champs de `56px` de hauteur (`h-14`), offrant une cible confortable au doigt comme à la souris.
- **Séparateurs directionnels** : Bordure verticale active de `3px` en Corail d'Alerte Doux (`border-r-[3px]`) sur le menu latéral des départements et filets horizontaux pointillés ou continus très légers (`#F3F4F6`) dans les tableaux d'horaires.

## Components

Les composants sont conçus pour être **accueillants, tactiles et guidés** : chaque contrôle privilégie le confort de clic sur mobile et l'accompagnement sans stress du patient.

### Buttons
- **Shape:** Pilule complète (`9999px`), texte en capitales ou semi-gras à interlettrage élargi (`0.08em`), souvent accompagné d'une flèche directionnelle à droite (`16px`).
- **Primary (Conversion / Vitalité):** Fond Vert Vitalité (`#2E6B2E`), texte blanc (`#FFFFFF`), rembourrage généreux (`16px 32px`). Utilisé pour l'action principale du Hero et la validation finale du rendez-vous.
- **Primary Navigation / Step:** Fond Cobalt Clinique (`#162E93`), texte blanc (`#FFFFFF`), rembourrage (`12px 24px` ou `12px 32px`). Utilisé dans les cartes de triage et pour le bouton « Suivant » du formulaire.
- **Hover / Focus:** Transition fluide (`300ms`) basculant vers le Corail d'Alerte Doux (`#F54927`) sur les appels à l'action majeurs ou vers le Cobalt Profond (`#1E3A8A`) sur les boutons de progression.
- **Secondary / Back:** Fond gris doux (`#E5E7EB`), texte gris ardoise foncé (`#1F2937`), survol en `#D1D5DB`, utilisé pour le retour à l'étape précédente.

### Cards / Containers
- **Corner Style:** `16px` (`rounded-2xl`) pour les cartes de services ; `12px` (`rounded-xl`) pour les fiches médecins ; `2px` (`rounded-sm`) pour les 3 cartes de triage en surplomb du Hero ; `8px` (`rounded-lg`) pour le grand conteneur fendu de prise de rendez-vous.
- **Background:** Blanc pur (`#FFFFFF`) avec médaillon d'icône interne en `#EFF6FF` (`64px × 64px`) ou cadre photo en `#E0F2FE`.
- **Shadow Strategy:** Voile ambiant au repos (`0 4px 20px rgba(0,0,0,0.03)`) s'élevant en halo bleuté (`0 10px 40px rgba(59,130,246,0.10)`) au survol, avec transition de couleur du titre vers Cobalt Clinique (`#162E93`).
- **Border:** Bordure fine subtile (`1px solid #F8FAFC` ou `#F1F5F9`).
- **Internal Padding:** `32px` (`p-8`) pour les cartes de services et de triage ; `16px` (`p-4`) pour les cartes de médecins ; `32px` à `64px` (`p-8 md:p-12 lg:p-16`) pour la colonne du formulaire.

### Inputs / Fields
- **Style:** Hauteur tactile fixe de `56px` (`h-14`), rembourrage horizontal `16px` (`px-4`), fond gris très doux (`#F9FAFB`), bordure discrète (`1px solid #F3F4F6`), rayon de `6px` (`rounded-md`), texte `#374151`.
- **Focus:** Suppression du contour natif au profit d'un anneau de focus net de `2px` en Cobalt Clinique (`#162E93`).
- **Error / Disabled:** Message d'erreur concis en rouge (`#EF4444`, `12px`, `mt-1`) sous le champ ; état désactivé à `50%` d'opacité (`disabled:opacity-50`) lorsque le choix d'un médecin attend la sélection préalable d'un département.

### Navigation
- **Barre d'en-tête principale:** Fixe en haut d'écran (`h-20` / `80px`), fond blanc translucide (`rgba(255,255,255,0.9)`) avec `backdrop-filter: blur(12px)` et ombre légère. Logo officiel à gauche (`150px`), liens horizontaux espacés de `32px` (`space-x-8`) en police `Inter` `500` (`#475569`).
- **Navigation par onglets (Départements):** Liste verticale sur colonne `1/4` avec bordure droite `#F3F4F6`. Chaque onglet (`py-4 px-6`, `font-semibold`) passe au Vert Vitalité (`#2E6B2E`) au survol et affiche un texte Corail d'Alerte Doux (`#F54927`) doublé d'une barre verticale droite de `3px` lorsqu'il est actif.

### Multi-Step Appointment Module (Signature Component)
- **Structure:** Conteneur fendu associant à gauche une photographie médicale pleine hauteur surmontée d'un bandeau Cobalt Clinique (`#162E93`) affichant l'icône téléphone encerclée et les numéros d'urgence en grand corps (`24px` à `36px`, `font-bold`), et à droite un assistant de réservation en 3 étapes.
- **Indicateur de progression:** 3 barres pilules horizontales (`h-2 flex-1 rounded-full gap-2`) passant du gris clair (`#E5E7EB`) au Vert Vitalité (`#2E6B2E`) au fil de la validation des étapes (1. Identité & Téléphone, 2. Département & Médecin, 3. Date, Heure & Message).

## Do's and Don'ts

### Do:
- **Do** utiliser le couple **Cobalt Clinique** (`#162E93`) pour les titres/structures et **Vert Vitalité** (`#2E6B2E`) pour les actions principales de conversion afin de refléter fidèlement le logo de la Clinique 13-23.
- **Do** introduire chaque section principale par le motif signature : filet horizontal de `48px × 2px` et surtitre en capitales en **Corail d'Alerte Doux** (`#F54927`).
- **Do** conserver une hauteur minimale de `56px` (`h-14`) sur les champs de saisie et une forme pilule (`rounded-full`) sur les boutons d'action pour garantir une ergonomie tactile irréprochable sur mobile.
- **Do** alterner les sections sur fond **Blanc Pur** (`#FFFFFF`) et **Bleu Glacier Apaisant** (`#EDF4F8` / `#F0F7FF`) pour structurer la page avec calme et clarté.
- **Do** rédiger l'intégralité des libellés, spécialités, messages de validation et descriptions en français clair, rassurant et accessible.

### Don't:
- **Don't** utiliser le **Corail d'Alerte Doux** (`#F54927`) comme couleur d'arrière-plan de section ou de carte ; sa force signalétique repose sur sa rareté (moins de 10 % de la surface visible).
- **Don't** mélanger des classes de couleurs héritées de gabarits externes non définies dans `@theme` (comme `text-novena-navy`, `text-brand-primary` ou `#e12454`) lors de la création ou de la mise à jour de composants : utilisez toujours les tokens officiels de la clinique.
- **Don't** présenter tous les champs du formulaire de rendez-vous d'un seul bloc dense ; préservez le découpage guidé en étapes courtes avec indicateur de progression.
- **Don't** utiliser des ombres noires dures ou des bordures sombres épaisses sur les cartes médicales ; privilégiez les bordures quasi invisibles (`#F1F5F9`) et le halo bleuté léger au survol.
