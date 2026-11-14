"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fallbackEmail, setFallbackEmail] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "ok" || status === "error") statusRef.current?.focus();
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    setStatus("loading"); setMessage(""); setFallbackEmail("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const body = await response.json().catch(() => ({}));
      if (typeof body.contactEmail === "string") setFallbackEmail(body.contactEmail);
      if (!response.ok) throw new Error(body.error || "Une erreur est survenue.");
      setStatus("ok"); setMessage("Votre message a bien été envoyé."); form.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Envoi impossible.");
    }
  }
  return <form className="contact-form" onSubmit={submit} aria-busy={status === "loading"}>
    <div className="form-grid"><label htmlFor="contact-name">Votre nom<input id="contact-name" type="text" name="name" required maxLength={120} autoComplete="name" placeholder="Comment vous appeler ?" /></label>
    <label htmlFor="contact-email">Votre e-mail<input id="contact-email" type="email" name="email" required maxLength={254} autoComplete="email" placeholder="vous@exemple.fr" /></label></div>
    <label htmlFor="contact-service">Votre projet<select id="contact-service" name="service" required defaultValue=""><option value="" disabled>Choisir une prestation</option><option>Identité visuelle</option><option>Création graphique</option><option>Impression & supports</option><option>Projet sur mesure</option></select></label>
    <label htmlFor="contact-message">Parlez-nous de votre idée<textarea id="contact-message" name="message" rows={4} required minLength={10} maxLength={3000} placeholder="Ce que vous imaginez, vos envies, vos délais…" /></label>
    <div className="honeypot" aria-hidden="true"><label>Site internet<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-footer"><p>En envoyant ce formulaire, vous acceptez que vos informations soient utilisées uniquement pour répondre à votre demande. Voir notre <a href="/confidentialite">politique de confidentialité</a>.</p><button className="button-primary" type="submit" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle aria-hidden="true" className="spinner" /> <span>Envoi en cours…</span></> : <>Envoyer ma demande <ArrowUpRight aria-hidden="true" size={18} /></>}</button></div>
    <div ref={statusRef} tabIndex={-1} role={status === "error" ? "alert" : "status"} aria-live="polite" aria-atomic="true" className={status === "error" ? "form-response form-error" : "form-response"}>{message}{fallbackEmail && <><br/><a href={`mailto:${fallbackEmail}?subject=Demande de devis ECLA`}>Écrire directement à {fallbackEmail}</a></>}</div>
  </form>;
}
