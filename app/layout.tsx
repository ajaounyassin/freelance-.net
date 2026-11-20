import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, businessSchema, personSchema } from "@/lib/site";
import "./globals.css";

// Même trio que ftnsolutions.fr : Archivo étiré (titres), Inter (texte), JetBrains Mono (libellés).
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s · Yassin Ajaoun",
    default: "Développeur .NET C# freelance à Strasbourg · Yassin Ajaoun",
  },
  description:
    "Développeur .NET / C# freelance à Strasbourg, 10 ans d'expérience dont la finance et la monétique. Régie ou forfait, migration vers .NET 10, renfort d'équipe.",
  metadataBase: new URL(SITE_URL),
  openGraph: { siteName: "Yassin Ajaoun, développeur .NET freelance", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable} ${mono.variable}`}>
      <body style={{ background: "#F4F4F2", color: "#0B0B0C" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, businessSchema]) }} />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
