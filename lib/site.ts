export const site = {
  name: "ECLA",
  tagline: "Studio graphique & impression",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "ecla.laf@gmail.com",
  telephone: "", // TODO
  address: "21 Bd Robert Schuman, 63000 Clermont-Ferrand",
  social: { instagram: "", behance: "", linkedin: "" },
};

export type Project = {
  id: string;
  category: string;
  filter: "Identité visuelle" | "Édition & print" | "Signalétique" | "Textile & objet" | "Digital";
  title: string;
  description: string;
  illustration: "identity" | "print" | "editorial";
  image?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    category: "Identité visuelle",
    filter: "Identité visuelle",
    title: "Cartes de visite ECLA",
    description: "Déclinaison imprimée de l'identité visuelle ECLA.",
    illustration: "identity",
    image: "/assets/projects/ecla-business-cards.png",
  },
  {
    id: "02",
    category: "Édition & print",
    filter: "Édition & print",
    title: "Brochure Des idées qui prennent vie",
    description: "Composition éditoriale imprimée autour de la marque ECLA.",
    illustration: "editorial",
    image: "/assets/projects/ecla-editorial-ideas.png",
  },
  {
    id: "03",
    category: "Textile & objet",
    filter: "Textile & objet",
    title: "Sac textile ECLA",
    description: "Objet textile marqué aux couleurs et au symbole du studio.",
    illustration: "print",
    image: "/assets/projects/ecla-tote-object.png",
  },
];
