# ECLA — Studio graphique & impression

Site vitrine Next.js App Router, en français, construit à partir du starter ECLA fourni. La direction visuelle est éditoriale : violet profond, jaune solaire, compositions typographiques et symbole A étoilé officiel.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`. Les commandes de contrôle sont `npm run lint` et `npm run build`.

## Structure utile

- `app/page.tsx` : composition de la page et contenus éditoriaux.
- `app/globals.css` : tokens, layout, responsive, états focus et animations.
- `components/Header.tsx` : navigation sticky et menu mobile accessible.
- `components/ProjectGrid.tsx` : galerie de démonstrations et filtres.
- `components/ContactForm.tsx` + `app/api/contact/route.ts` : formulaire et API Resend.
- `lib/site.ts` : coordonnées, URL et données de projets faciles à remplacer.
- `public/assets/` : logo officiel et symbole A étoilé fournis.
- `public/fonts/` : Amboy Black pour les titres et Montserrat pour le texte courant, fournis par le client.

## Avant publication — checklist ECLA

- [ ] Remplacer les trois concepts par de vrais projets, visuels autorisés et textes vérifiés.
- [ ] Confirmer les quatre expertises et les modalités réelles d'impression.
- [ ] Renseigner l'e-mail, le téléphone, l'adresse, les réseaux sociaux et `NEXT_PUBLIC_SITE_URL`.
- [ ] Compléter et faire valider `app/mentions-legales/page.tsx` et `app/confidentialite/page.tsx`.
- [ ] Ajouter les variables Resend dans `.env.local` puis dans Vercel : `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
- [ ] Vérifier le domaine expéditeur Resend et tester l'envoi avant mise en ligne.
- [ ] Ajouter un contrôle anti-spam/rate limiting durable si le formulaire devient public.
- [ ] Faire une revue finale des licences, de l'accessibilité et des navigateurs ciblés.

Sans variables Resend, le formulaire affiche volontairement un message clair et n'affirme jamais qu'un e-mail a été envoyé.

## Déployer sur Vercel

1. Pousser le dossier dans un dépôt GitHub.
2. Importer le dépôt dans Vercel avec Next.js détecté automatiquement.
3. Ajouter les variables d'environnement confirmées.
4. Définir `NEXT_PUBLIC_SITE_URL` avec l'URL réelle du projet, lancer une preview, puis promouvoir après validation.

## Provenance

Les logos, la charte PDF et les captures de référence sont fournis par le client. Deux images de démonstration ont été générées pour donner du volume à la maquette ; elles ne représentent aucun client réel. Voir `SOURCES.md` pour la provenance détaillée et les limites d'usage.
