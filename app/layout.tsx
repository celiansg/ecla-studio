import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "ECLA | Studio graphique et impression",
  description: "ECLA imagine des identités visuelles, des créations graphiques et des supports imprimés qui donnent de l'éclat aux idées.",
  openGraph: { title: "ECLA | Studio graphique et impression", description: "Des idées qui prennent forme, des créations qui font de l'éclat.", type: "website", url: site.url },
  icons: { icon: "/assets/ecla-a-etoile.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
