import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Layers3, MessageCircle, PenTool, Printer } from "lucide-react";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/site";

const services = [
  { id: "01", icon: PenTool, name: "Création graphique", info: "Des visuels uniques et percutants pour valoriser votre image." },
  { id: "02", icon: Printer, name: "Impression de qualité", info: "Des supports professionnels et durables, avec un rendu optimal." },
  { id: "03", icon: Layers3, name: "Supports sur mesure", info: "Une large gamme de supports adaptés à tous vos besoins." },
];

const steps = [
  { number: "01", icon: MessageCircle, name: "Écouter", content: "Comprendre vos besoins, vos envies et vos idées." },
  { number: "02", icon: PenTool, name: "Concevoir", content: "Imaginer des solutions créatives et sur mesure." },
  { number: "03", icon: Printer, name: "Produire", content: "Assurer une impression de qualité avec les bons supports." },
  { number: "04", icon: Layers3, name: "Livrer", content: "Un résultat clair, dans les délais et selon vos attentes." },
];

const teamMembers = [
  { firstName: "Eytan", surname: "FONTAINE", role: "Chef de production graphique", initials: "EF", icon: PenTool, description: "Donne forme aux idées graphiques et veille à la cohérence des supports." },
  { firstName: "Célian", surname: "SEGUIN GOSSELIN", role: "Responsable client", initials: "CSG", icon: MessageCircle, description: "Suit les échanges, clarifie les besoins et accompagne chaque projet." },
  { firstName: "Lucas", surname: "TIXIER", role: "Chef de production", initials: "LT", icon: Printer, description: "Organise la fabrication et garantit le suivi de production." },
  { firstName: "Alex", surname: "ERROU", role: "Chef de qualité", initials: "AE", icon: Layers3, description: "Contrôle les détails et veille à la qualité finale des livrables." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export default function Home() {
  return <>
    <ScrollReveal />
    <a className="page-skip" href="#main-content">Aller au contenu</a>
    <div className="site-shell">
      <section className="hero hero-image-reference" id="accueil">
        <div className="hero-image-reference-bg" aria-hidden="true"><Image src="/assets/ecla-hero-client.png" alt="" fill priority sizes="100vw" /></div>
        <div className="hero-image-reference-overlay" aria-hidden="true" />
        <Header />
        <div className="hero-image-reference-content container">
          <div className="hero-image-reference-copy">
            <p className="hero-image-reference-kicker"><span aria-hidden="true" />Studio graphique &amp; impression</p>
            <h1>Des idées<br/>qui prennent<br/><span>vie</span></h1>
            <p className="hero-image-reference-intro">Création graphique, supports de communication et impression sur mesure, pour donner forme à vos projets.</p>
            <div className="hero-reference-actions"><Link className="button-yellow" href="#services">Nos services <ArrowDown size={17}/></Link><Link className="button-outline" href="#projets">Nos réalisations <ArrowUpRight size={17}/></Link></div>
          </div>
        </div>
        <div className="hero-image-reference-scroll" aria-hidden="true"><span /><ArrowDown size={20}/></div>
      </section>

      <main id="main-content">
        <section className="services-reference services-showcase section" id="services"><div className="container"><div className="service-showcase-heading" data-reveal="left"><SectionLabel>Nos services</SectionLabel><h2>Un accompagnement<br/><span>sur mesure</span></h2><p>De la création graphique à l'impression, nous mettons notre savoir-faire au service de votre communication.</p></div><div className="service-showcase-grid" data-reveal="right">{services.map((service) => <article className="service-showcase-card" key={service.id}><div className="service-showcase-card-content"><div className="service-showcase-card-icon"><service.icon size={40} strokeWidth={1.7}/></div><h3>{service.name}</h3><p>{service.info}</p></div><Link className="service-showcase-card-link" href="#contact" aria-label={`Parler de ${service.name}`}><span>→</span></Link></article>)}</div><Link className="service-showcase-cta" href="#contact">Découvrir tous nos services <ArrowUpRight size={20}/></Link></div></section>

        <section className="projects-reference section" id="projets"><Image className="projects-reference-mark" src="/assets/ecla-a-etoile.png" alt="" width={360} height={360} aria-hidden="true"/><div className="container projects-reference-grid"><div className="projects-reference-copy" data-reveal="left"><SectionLabel>Nos réalisations</SectionLabel><h2>Nos réalisations</h2><p>Des projets concrets qui illustrent notre expertise en création, impression et communication.</p></div><div data-reveal="right"><ProjectGrid projects={projects}/></div></div></section>

        <section className="method-reference section" id="methode"><div className="container"><div className="method-reference-heading" data-reveal="left"><div><SectionLabel>Notre méthode</SectionLabel><h2>De l’idée à la<br/><span>réalisation.</span></h2></div><p>Quatre étapes pour donner forme à vos projets, de la <strong>première idée</strong> jusqu’au <strong>support final.</strong></p></div><div className="method-reference-progress" aria-hidden="true" data-reveal="up">{steps.map((step, index) => <div className={`method-reference-progress-step method-reference-progress-step-${index + 1}`} key={step.number}><span>{step.number}</span></div>)}</div><div className="steps-reference" data-reveal="right">{steps.map((step, index) => <article className={`step-reference step-reference-${index + 1}`} key={step.number}><div className="step-reference-icon"><step.icon size={58} strokeWidth={1.45}/></div><div className="step-reference-copy"><span>{step.number}</span><h3>{step.name}</h3><i aria-hidden="true"/><p>{step.content}</p></div>{index < steps.length - 1 && <ArrowUpRight className="step-reference-arrow" size={22}/>}</article>)}</div></div></section>

        <section className="team-reference section" id="studio"><div className="container"><div className="team-reference-heading" data-reveal="left"><div><SectionLabel>Notre équipe</SectionLabel><h2>Des échanges<br/>clairs, des<br/>choix <span>assumés.</span></h2></div><p>Une équipe de 4 passionnés, complémentaires et engagés, pour vous accompagner de l’idée <strong>à la réalisation.</strong></p></div><div className="team-member-grid" data-reveal="right">{teamMembers.map((member) => <article className="team-member-card" key={member.initials}><h3>{member.firstName}</h3><p className="team-member-surname">{member.surname}</p><strong className="team-member-role">{member.role}</strong><div className="team-member-description"><member.icon size={32} strokeWidth={1.55}/><p>{member.description}</p></div></article>)}</div></div></section>

        <section className="trust-reference section"><div className="container trust-reference-grid"><div><SectionLabel>Notre engagement</SectionLabel><h2>Des échanges clairs, des choix <span>assumés.</span></h2></div><p>Les témoignages clients seront ajoutés lorsque les autorisations et les contenus réels seront disponibles. En attendant, ECLA privilégie une promesse simple : écouter, expliquer et livrer un travail cohérent.</p></div></section>

        <section className="contact-reference section" id="contact"><div className="container contact-reference-grid"><div className="contact-reference-copy" data-reveal="left"><SectionLabel>Vous avez un projet ?</SectionLabel><h2>Faisons-le<br/><span>briller.</span></h2><p>Parlons design, impression ou communication.<br/>ECLA vous accompagne de l’idée à la réalisation.</p><Link className="contact-reference-cta" href="#accueil">Découvrir ECLA <ArrowUpRight size={22}/></Link></div><div className="contact-form-panel" data-reveal="right"><h3>Demander un devis <ArrowUpRight size={24}/></h3><ContactForm/></div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-top"><div><Image src="/assets/ecla-logo-transparent.png" width={290} height={135} alt="ECLA Studio graphique et impression"/><p>Des idées qui prennent forme.<br/>Des créations qui font de l'éclat.</p></div><div className="footer-links"><Link href="/#accueil">Accueil</Link><Link href="/#services">Services</Link><Link href="/#projets">Réalisations</Link><Link href="/#studio">À propos</Link><Link href="/#contact">Contact</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ECLA | STUDIO GRAPHIQUE ET IMPRESSION</span><div><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité</Link></div><Link href="#accueil">En haut</Link></div></div></footer>
    </div>
  </>;
}
