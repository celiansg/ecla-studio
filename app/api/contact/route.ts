import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const emailRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const services = new Set(["Identité visuelle", "Création graphique", "Impression & supports", "Projet sur mesure"]);
const rateLimitWindow = 10 * 60 * 1000;
const rateLimitMax = 5;
const requests = new Map<string, { count: number; resetAt: number }>();

function safe(value: unknown, length: number) { return typeof value === "string" ? value.trim().slice(0, length) : ""; }
function esc(s: string) { return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] || c); }
function response(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}
function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}
function limited(key: string) {
  const now = Date.now();
  const entry = requests.get(key);
  if (!entry || entry.resetAt <= now) {
    requests.set(key, { count: 1, resetAt: now + rateLimitWindow });
    return false;
  }
  entry.count += 1;
  return entry.count > rateLimitMax;
}

export async function POST(request: Request) {
  const key = clientKey(request);
  if (limited(key)) return response({ error: "Trop de demandes en peu de temps. Réessayez dans quelques minutes." }, 429);
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 16000) return response({ error: "Le message est trop long." }, 413);
  const raw = await request.text();
  if (raw.length > 16000) return response({ error: "Le message est trop long." }, 413);
  let data: Record<string, unknown>;
  try { data = JSON.parse(raw); } catch { return response({ error: "Données invalides." }, 400); }
  if (safe(data.website, 100)) return response({ ok: true }); // honeypot
  const name = safe(data.name, 120), email = safe(data.email, 254), message = safe(data.message, 3000), service = safe(data.service, 120);
  if (!name || !emailRE.test(email) || message.length < 10 || !services.has(service)) return response({ error: "Merci de compléter correctement les champs." }, 400);
  const resendKey = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL || site.email, from = process.env.CONTACT_FROM_EMAIL;
  if (!resendKey || !from) return response({ error: "Le formulaire est momentanément indisponible.", contactEmail: site.email }, 503);
  try {
    const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: email, subject: `[ECLA] ${service} | ${name}`, html: `<h2>Nouvelle demande ECLA</h2><p><b>Nom :</b> ${esc(name)}</p><p><b>E-mail :</b> ${esc(email)}</p><p><b>Prestation :</b> ${esc(service)}</p><p><b>Message :</b></p><p>${esc(message).replace(/\n/g,"<br>")}</p>` }) });
    if (!r.ok) {
      console.error("Resend rejected the contact request", { status: r.status });
      return response({ error: "L'envoi a échoué. Réessayez ultérieurement." }, 502);
    }
    return response({ ok: true });
  } catch {
    return response({ error: "Service temporairement indisponible." }, 502);
  }
}
