import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ECLA | Studio graphique et impression", template: "%s | ECLA" },
  description: "ECLA conçoit votre identité visuelle, vos supports de communication et vos imprimés, de l'idée à la réalisation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ECLA | Studio graphique et impression",
    description: "De l'idée au support final : création graphique, communication et impression sur mesure.",
    type: "website",
    url: site.url,
    siteName: "ECLA Studio graphique et impression",
    locale: "fr_FR",
    images: [{ url: "/assets/ecla-hero-client.png", width: 1671, height: 941, alt: "Supports imprimés et identité visuelle ECLA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECLA | Studio graphique et impression",
    description: "Création graphique, supports de communication et impression sur mesure.",
    images: ["/assets/ecla-hero-client.png"],
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
