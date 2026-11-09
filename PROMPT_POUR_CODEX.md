# PROMPT COMPLET À COPIER DANS CODEX — ECLA

Tu es directeur artistique digital, designer UI/UX haut de gamme et développeur Next.js senior. Tu interviens sur un **projet existant** situé dans le dossier que je t'ai confié. Ton objectif est de le transformer en site web **remarquable, cohérent, fonctionnel et prêt pour Vercel** pour **ECLA — Studio graphique & impression**. **Ne te contente pas de décrire ou de maquettter : écris et modifie réellement tous les fichiers, lance les vérifications et corrige les erreurs.**

## 1. Sources de vérité / marque
- Commence par inspecter `docs/Presentation_ECLA_source.pdf`, `public/assets/ecla-logo-original.png` et `reference-inspiration/reference-01.png` à `reference-05.png`.
- Identité ECLA : le nom évoque **« éclat »**, la lumière, les étoiles et l'émergence des idées. C'est aussi l'acronyme des prénoms **Eytan, Célian, Lucas, Alex**.
- Palette officielle **violet #6537D3** (créativité et espace) et **jaune #FFCB00** (lumière et éclat), avec blanc cassé #F9F8F4, noir bleuté #17151C et nuances discrètes.
- Le logo fourni est la **référence graphique absolue**. Nom ECLA en lettres épaisses blanches et A jaune évoquant une étoile, avec sous-titre « STUDIO GRAPHIQUE & IMPRESSION ». Ne jamais inventer un nouveau logo, ne jamais remplacer le A étoilé par une étoile générique dans le mot ECLA. `ecla-logo-original.png` est l'original ; `ecla-logo-transparent.png` est une version détourée issue de l'original ; `ecla-a-etoile.png` est une extraction du symbole. Si une découpe n'est pas parfaite, repartir de l'original.
- Amboy Black est la police **du logo** ; elle n'est pas incluse dans le dossier et ne doit pas être distribuée ni supposée licenciée. Pour les textes du site, utiliser une fonte web libre à forte personnalité (p. ex. Space Grotesk, Manrope, Archivo Black, Inter Tight) et des contrastes typographiques audacieux. Le logo lui-même reste une image issue de la source.
- Ton : **français de France**, imaginatif, précis, chaleureux mais professionnel, sans blabla d'agence artificiel.
- Promesse : écouter les besoins, adapter les propositions et accompagner les projets jusqu'à une solution graphique pertinente. Ne pas inventer des machines, ateliers, certifications, chiffres, réalisations client, partenaires, témoignages ou tarifs.

## 2. Références visuelles à analyser — et NON à recopier
Le dossier `reference-inspiration/` contient les 5 captures fournies par le client, pour référence **interne exclusivement** (ne pas les afficher comme portfolio et ne pas en récupérer les logos). Croiser leurs qualités :
1. `reference-01.png` : Axios. Hero photographique contrasté, noir & blanc, slogans XXL, mots dans des capsules fluo, bandeau ticker à défilement, cartes éditoriales et services.
2. `reference-02.png` : agence verte. Alternance sections aérées / sombres, cartes de prestations au hover, disposition magazine.
3. `reference-03.png` : Aurelia. Direction créative très affirmée, typographie condensée monumentale, grandes compositions pop, grilles, touches citron fluo, galerie de travaux, rythme de landing page premium.
4. `reference-04.png` : site Design Class. Minimalisme travaillé, beaucoup d'air, fonds crème, éléments 3D stylisés, pictos et cartes arrondies.
5. `reference-05.png` : agence française violet/lime. Layout de conversion soigné, sections services, portfolio, méthode, FAQ, contact, boutons capsules, composition deux colonnes.

Résultat visé : **70% Aurelia et Axios pour l'impact, 20% agence française pour la clarté de navigation et la conversion, 10% Design Class pour les détails graphiques**. Créer un style vraiment propre à ECLA : violet profond, jaune solaire, typographies puissantes, jeu d'orbites et d'éclats inspiré du A, mix de fonds violet / blanc / noir, composants aux bordures rondes maîtrisées, design plus éditorial que « startup SaaS ».

Sites à consulter si accès web autorisé (à utiliser en inspiration ou en composants sous licence, jamais reprendre un template payant sans achat) :
- https://21st.dev/ — composants React / Tailwind, vérifier chaque licence
- https://motionsites.ai/ — inspirations de mouvement, vérifier si code téléchargeable
- https://8b.com/templates/onda/ — inspiration studio au violet, HTML prêt à adapter
- https://8b.com/templates/sillage/ — inspiration grilles éditoriales
- https://21st.dev/@larsen66/templates/mojave — portfolio Next.js
- https://21st.dev/@lyanchouss/templates/zen-customizable-webgl-shader-agency-template — inspiration premium, **ne pas copier le code payant**
- https://21st.dev/@reacthive/templates/morrow-creative-agency-template — référence de fonctionnalités, **ne pas copier sans licence**

## 3. Stack / architecture / état du projet
- Le dossier contient **déjà un site de démarrage Next.js App Router + TypeScript + CSS, responsive et avec formulaire serveur**. Commence par l'ouvrir, l'exécuter, l'évaluer puis l'améliorer. Ne supprime pas ses contenus utiles.
- Tu peux migrer la présentation vers **Tailwind CSS v4 + Motion for React** si cela améliore vraiment qualité et maintenabilité, mais conserve Next.js, React, TypeScript et les fonctionnalités existantes.
- GSAP / ScrollTrigger uniquement s'ils apportent une vraie valeur et sans surcharger le site. Pas de WebGL coûteux sur mobile : prévoir fallback CSS/SVG léger.
- Composants modulaires réutilisables, variables design centralisées, pas de CSS inline répliqué partout.
- Séparer contenus et projets dans un fichier facile à éditer (`lib/site.ts` / data). Images optimisées avec `next/image` quand possible. Aucune dépendance payante.

## 4. Expérience attendue, détaillée
### Navigation
En haut, nav transparente ou translucide sur hero, monogramme/logo détouré, ancres « Projets », « Expertises », « Le studio », « Contact », CTA « Démarrer un projet ». Menu mobile plein écran avec une vraie fermeture, animations sobres et comportement clavier. Header collant une fois le scroll engagé, contraste toujours lisible.

### Hero au-dessus de la ligne de flottaison
- Effet *wow* immédiatement compréhensible. Grande composition typo en 2 ou 3 lignes, p. ex. « ÇA COMMENCE PAR UNE IDÉE. ET ÇA FAIT ÉCLAT. » ; mots capsule jaune ou soulignés, sans forcer tout le texte dans un rectangle.
- Animation d'entrée chorégraphiée (mot par mot ou ligne par ligne, 0,5–1s, entrée décalée), respect `prefers-reduced-motion`.
- Grand A étoilé officiel qui flotte ou pivote lentement ; orbites et scintillements très subtils, éventuellement effet spotlight au pointeur sur ordinateur (sans gêner lecture et interactions).
- Un CTA primaire « Découvrir nos créations » et un secondaire « Parler de votre projet » ; une preuve visuelle de la double expertise graphisme + print.
- Bandeau ticker jaune avec items « IDENTITÉ VISUELLE ✳ CRÉATION GRAPHIQUE ✳ IMPRESSION ✳ COMMUNICATION » ; boucle fluide, arrêter/désactiver l'animation pour reduced motion.
- Attention au mobile : pas de titres coupés ni d'éléments invisibles hors viewport.

### Présentation / manifeste
« Quatre initiales. Une même envie. » et texte sincère inspiré de la charte. Évoquer idées, lumière et fabrication sans faire croire à une histoire commerciale fictive. Exploiter le symbole étoilé comme signature de section.

### Expertise / prestations
Une grille ou un bento interactif de **quatre axes**, descriptions concrètes : (1) Identité & branding ; (2) création graphique & mise en page (affiches, flyers, cartes, brochures, catalogues) ; (3) impression & supports papier (conseils formats, papier, finitions, préparation fichiers) ; (4) communication digitale & contenus visuels. Ne pas inventer de capacité industrielle ni promettre une impression intégralement faite en interne. Cartes généreuses, beaux pictogrammes, hover/focus, micro-transitions.

### Portfolio
Le portfolio est central pour un studio graphique. Construire une grille magazine avec **une carte héro + 2–4 projets**, ratio variable, gros visuels / mockups, légendes courtes, catégories et filtres optionnels si suffisants. Les projets fictifs doivent porter clairement « Concept / démonstration — à remplacer » ; surtout **pas de faux clients**, de faux témoignages ou de faux métriques. Créer de beaux visuels de démonstration abstraits avec CSS/SVG originaux, ou placeholders sobres. Prévoir de vrais templates de pages de cas projet quand de vraies créations seront fournies.

### Processus
4 étapes « On échange / On imagine / On crée / On concrétise ». Timeline graphique, interaction au scroll facultative, détails pratiques du flux création puis impression. Pas de promesses chiffrées.

### À propos
Raconter l'étymologie ECLA, ses quatre initiales, l'intention d'écoute et de personnalisation. Facultatif : portraits/équipe uniquement avec images et consentements réels ; ne pas générer de fausses photos de l'équipe.

### FAQ + contact
FAQ accessible via `<details>` ou un composant contrôlé accessible : projets acceptés, première prise de contact, graphisme/impression, demande de devis, délai (réponse : variable selon projet). Contact très visible sur fond jaune, accroche XXL, formulaire nom/e-mail/type de projet/message avec validation, état chargement/succès/erreur. L'API `app/api/contact/route.ts` repose sur **Resend**, activé SEULEMENT après ajout de `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` et validation du domaine. Tant que ce n'est pas configuré, message explicite : **ne jamais faire croire qu'un formulaire a envoyé un e-mail**. Développer une limitation de fréquence / anti-spam plus robuste si mise en production publique. Ne pas publier de coordonnées inventées.

### Footer et pages de confiance
Footer violet/noir avec logo officiel, navigation, réseaux sociaux seulement s'ils sont connus et renseignés, liens « Mentions légales » / « Confidentialité ». Les pages sont provisoires : rendre les informations à compléter manifestes et ne pas laisser de champs faux en production. Prévoir `metadata`, Open Graph, favicon à partir du symbole A, sitemap, robots, données structurées seulement si exactes. Aucun outil analytics/cookie non demandé.

## 5. Niveau d'exigence du rendu
- **Design premium, éditorial et original**, pas un thème SaaS générique : hiérarchie typographique forte, belles compositions, overlays maîtrisés, rythme de sections avec respirations, effets seulement là où ils servent le design.
- Cohérence stricte #6537D3 et #FFCB00, contraste WCAG AA pour le texte, liens et focus visibles, titres sémantiques, navigation clavier, aria et alt utiles.
- Micro-interactions : transitions de cartes, flèche bouton, petites étoiles, entrée au scroll, bandeau de services, survol projets. Respect des personnes sensibles au mouvement.
- Responsive réel de 320 px à écrans larges ; menu mobile impeccable ; pas de scrollbar horizontale ni de superpositions problématiques.
- Code performant : pas de bibliothèques lourdes pour une simple animation ; viser de bons indicateurs Lighthouse, éviter CLS, LCP lourd, images non optimisées et Hydration errors.
- Texte en français, orthographe soignée, CTA visibles, structure UX navigable, HTML sémantique.

## 6. Consignes d'exécution obligatoires
1. Inspecte le projet et les assets. Identifie ce qui existe et ce qui manque.
2. Propose une direction artistique cohérente (très courte synthèse) puis **implémente**, sans attendre mon accord.
3. Améliore l'ensemble du site et tous les breakpoints, pas uniquement le hero.
4. Si des sources externes sont intégrées, ajoute leur nom, URL et licence dans un fichier `SOURCES.md` ; n'intègre aucune ressource non libre sans autorisation.
5. Contrôle et corrige le rendu en desktop (~1440 px), tablette (~768 px) et mobile (~390 px). Si outil navigateur disponible, inspecte des captures ; sinon vérifie structure / CSS.
6. Exécute `npm install`, `npm run build` et, si scripts disponibles, lint/typecheck. Corrige toutes les erreurs avant de terminer.
7. Écris un `README.md` à jour, une checklist pour personnaliser les réalisations, coordonnées et textes juridiques, et les instructions GitHub → Vercel.
8. Résume seulement à la fin ce que tu as **réellement réalisé**, le chemin des fichiers et ce que je dois encore fournir.

**Livrable attendu : un site ECLA complet, cohérent, responsive, animé avec finesse, accessible et qui fonctionne réellement. Pas de maquette, pas de pseudo-code, pas de TODO silencieux.**
