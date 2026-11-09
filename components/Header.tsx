"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#projets", label: "Réalisations" },
  { href: "/#studio", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  return <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
    <Link aria-label="ECLA, retour à l'accueil" href="/" className="brand">
      <Image alt="ECLA Studio graphique & impression" src="/assets/ecla-logo-transparent.png" width={155} height={70} priority />
    </Link>
    <nav id="main-navigation" aria-label="Navigation principale" className={open ? "nav-links nav-open" : "nav-links"}>
      {links.map(({ href, label }) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link href="/#contact" className="header-cta" onClick={() => setOpen(false)}>Demander un devis <ArrowUpRight size={17} /></Link>
    </nav>
    <button className="menu-button" aria-controls="main-navigation" aria-expanded={open} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}
