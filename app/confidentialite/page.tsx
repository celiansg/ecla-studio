import Link from "next/link";

export default function Page(){
  return <main className="legal">
    <Link href="/">← Retour à ECLA</Link>
    <h1>Confidentialité</h1>

    <p><strong>Dernière mise à jour : 15 novembre 2026.</strong></p>

    <p><strong>Responsable du traitement :</strong> Célian Seguin Gosselin, pour le projet fictif ECLA, situé à Clermont-Ferrand, France. Pour toute question relative à vos données : <a href="mailto:ecla.laf@gmail.com">ecla.laf@gmail.com</a>.</p>

    <p><strong>Données collectées :</strong> le formulaire de contact demande votre nom, votre adresse e-mail, le type de prestation souhaitée et le contenu de votre message. Des données techniques strictement nécessaires à la sécurité du formulaire peuvent également être traitées afin de limiter les envois abusifs.</p>

    <p><strong>Finalité :</strong> les informations sont utilisées uniquement pour répondre à votre demande, échanger au sujet de votre projet et, le cas échéant, préparer un devis. Elles ne sont pas utilisées pour envoyer de la prospection non sollicitée.</p>

    <p><strong>Base légale :</strong> les demandes de devis sont traitées sur la base des mesures précontractuelles prises à votre demande. Les autres demandes entrantes peuvent être traitées sur la base de l’intérêt légitime consistant à répondre aux messages reçus. Cette qualification doit être confirmée selon le fonctionnement réel de l’activité.</p>

    <p><strong>Destinataires :</strong> les données sont accessibles à Célian Seguin Gosselin pour répondre à votre demande. Le site est hébergé par Vercel Inc. et l’envoi d’e-mails peut être assuré par Resend lorsque ce prestataire est activé dans la configuration du site. Les données ne sont pas vendues ni transmises à des fins publicitaires.</p>

    <p><strong>Durée de conservation :</strong> les données sont conservées pendant le temps nécessaire au traitement de la demande, puis supprimées au plus tard trois ans après le dernier contact lorsqu’il s’agit d’un prospect, sauf obligation légale ou nécessité de conserver la preuve d’un échange.</p>

    <p><strong>Cookies et mesure d’audience :</strong> la version actuelle du projet n’installe aucun cookie publicitaire et n’intègre aucun outil de mesure d’audience. Cette information devra être mise à jour si un service d’analyse ou un autre outil tiers est ajouté.</p>

    <p><strong>Vos droits :</strong> vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement de vos données. Vous pouvez également vous opposer à un traitement fondé sur l’intérêt légitime et exercer votre droit à la portabilité lorsque celui-ci s’applique. Pour exercer vos droits, écrivez à <a href="mailto:ecla.laf@gmail.com">ecla.laf@gmail.com</a>.</p>

    <p>Vous pouvez également adresser une réclamation à la <a href="https://www.cnil.fr/fr/contacter-la-cnil" target="_blank" rel="noreferrer">CNIL</a>. Cette page doit être relue et validée avant une utilisation commerciale réelle, notamment si l’organisation, les prestataires ou les outils utilisés évoluent.</p>
  </main>
}
