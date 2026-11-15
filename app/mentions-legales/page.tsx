import Link from "next/link";

export default function Page(){
  return <main className="legal">
    <Link href="/">← Retour à ECLA</Link>
    <h1>Mentions légales</h1>
    <p><strong>Site de démonstration : ECLA est une micro-entreprise fictive présentée dans le cadre d’un projet de démonstration.</strong></p>
    <p><strong>Éditeur :</strong> Célian Seguin Gosselin, micro-entreprise fictive ECLA, située à Clermont-Ferrand, France.</p>
    <p><strong>SIREN/SIRET :</strong> non applicable — projet fictif.</p>
    <p><strong>E-mail de l’éditeur :</strong> <a href="mailto:cseguingosselin@gmail.com">cseguingosselin@gmail.com</a></p>
    <p><strong>Directeur de la publication :</strong> Célian Seguin Gosselin.</p>
    <p><strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
    <p><strong>Propriété intellectuelle :</strong> tous les contenus propres à ECLA sont protégés selon la législation applicable. Les références de maquettes sont des exemples fictifs.</p>
    <p><strong>Pour nous contacter :</strong> <a href="mailto:ecla.laf@gmail.com">ecla.laf@gmail.com</a></p>
  </main>
}
