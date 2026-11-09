"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { id: "accueil", href: "/#accueil", label: "Accueil" },
  { id: "services", href: "/#services", label: "Services" },
  { id: "projets", href: "/#projets", label: "Réalisations" },
  { id: "studio", href: "/#studio", label: "À propos" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("accueil");

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-32% 0px -54% 0px", threshold: [0, 0.08] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", open);
    return () => document.body.classList.remove("menu-is-open");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return <header className="site-header site-header-fixed">
    <Link aria-label="ECLA, retour à l'accueil" href="/" className="brand">
      <Image alt="ECLA Studio graphique & impression" src="/assets/ecla-logo-transparent.png" width={155} height={70} priority />
    </Link>
    <nav id="main-navigation" aria-label="Navigation principale" className={open ? "nav-links nav-open" : "nav-links"}>
      {links.map(({ id, href, label }) => <Link key={href} className={activeId === id ? "is-active" : undefined} aria-current={activeId === id ? "page" : undefined} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link href="/#contact" className="header-cta" onClick={() => setOpen(false)}>Demander un devis <ArrowUpRight size={17} /></Link>
    </nav>
    <button className="menu-button" aria-controls="main-navigation" aria-expanded={open} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}
