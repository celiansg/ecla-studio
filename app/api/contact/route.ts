import { NextResponse } from "next/server";

const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function safe(value: unknown, length: number) { return typeof value === "string" ? value.trim().slice(0, length) : ""; }
function esc(s: string) { return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] || c); }

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 16000) return NextResponse.json({ error: "Le message est trop long." }, { status: 413 });
  let data: Record<string, unknown>;
  try { data = await request.json(); } catch { return NextResponse.json({ error: "Données invalides." }, { status: 400 }); }
  if (safe(data.website, 100)) return NextResponse.json({ ok: true }); // honeypot
  const name = safe(data.name, 120), email = safe(data.email, 254), message = safe(data.message, 3000), service = safe(data.service, 120);
  if (!name || !emailRE.test(email) || message.length < 10 || !service) return NextResponse.json({ error: "Merci de compléter correctement les champs." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({ error: "Le formulaire n'est pas encore activé. Merci de nous contacter directement une fois nos coordonnées publiées." }, { status: 503 });
  try {
    const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: email, subject: `[ECLA] ${service} | ${name}`, html: `<h2>Nouvelle demande ECLA</h2><p><b>Nom :</b> ${esc(name)}</p><p><b>E-mail :</b> ${esc(email)}</p><p><b>Prestation :</b> ${esc(service)}</p><p><b>Message :</b></p><p>${esc(message).replace(/\n/g,"<br>")}</p>` }) });
    if (!r.ok) return NextResponse.json({ error: "L'envoi a échoué. Réessayez ultérieurement." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Service temporairement indisponible." }, { status: 502 }); }
}
