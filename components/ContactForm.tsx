"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    setStatus("loading"); setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Une erreur est survenue.");
      setStatus("ok"); setMessage("Votre message a bien été envoyé."); form.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Envoi impossible.");
    }
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid"><label>Votre nom<input type="text" name="name" required maxLength={120} autoComplete="name" placeholder="Comment vous appeler ?" /></label>
    <label>Votre e-mail<input type="email" name="email" required maxLength={254} autoComplete="email" placeholder="vous@exemple.fr" /></label></div>
    <label>Votre projet<select name="service" required defaultValue=""><option value="" disabled>Choisir une prestation</option><option>Identité visuelle</option><option>Création graphique</option><option>Impression & supports</option><option>Projet sur mesure</option></select></label>
    <label>Parlez-nous de votre idée<textarea name="message" rows={4} required minLength={10} maxLength={3000} placeholder="Ce que vous imaginez, vos envies, vos délais…" /></label>
    <div className="honeypot" aria-hidden="true"><label>Site internet<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-footer"><p>En envoyant ce formulaire, vous acceptez que vos informations soient utilisées uniquement pour répondre à votre demande. Voir notre <a href="/confidentialite">politique de confidentialité</a>.</p><button className="button-primary" type="submit" disabled={status === "loading"}>{status === "loading" ? <LoaderCircle className="spinner" /> : <>Envoyer ma demande <ArrowUpRight size={18} /></>}</button></div>
    <div role="status" aria-live="polite" className={status === "error" ? "form-response form-error" : "form-response"}>{message}</div>
  </form>;
}
