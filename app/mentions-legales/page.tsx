import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Yassin Ajaoun, développeur .NET / C# freelance (FTNSolutions).",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="h-wide text-3xl text-[#0B0B0C] mb-10">
          Mentions légales
        </h1>

        <div className="space-y-10 text-sm leading-relaxed text-[#5E5E5E]">

          <div>
            <h2 className="font-display font-bold text-[#0B0B0C] mb-3">Éditeur du site</h2>
            <p>
              Le site <strong className="text-[#0B0B0C]">{SITE_URL.replace("https://", "")}</strong> est édité par :<br />
              <strong className="text-[#0B0B0C]">Yassin Ajaoun (FTNSolutions)</strong>, Entrepreneur individuel<br />
              Adresse : 3 Rue du Kriegacker, 67202 Wolfisheim, Grand Est, France<br />
              Téléphone : <a href="tel:+33637193148" className="text-[#0B0B0C] hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0C] focus-visible:ring-offset-1">06 37 19 31 48</a><br />
              Email : <a href="mailto:contact@ftnsolutions.fr" className="text-[#0B0B0C] hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0C] focus-visible:ring-offset-1">contact@ftnsolutions.fr</a>
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[#0B0B0C] mb-3">Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong className="text-[#0B0B0C]">Vercel Inc.</strong><br />
              340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br />
              Site : <a href="https://vercel.com" className="text-[#0B0B0C] hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0C] focus-visible:ring-offset-1" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[#0B0B0C] mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, code) est la propriété exclusive de FTNSolutions, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation préalable écrite de FTNSolutions.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[#0B0B0C] mb-3">Limitation de responsabilité</h2>
            <p>
              FTNSolutions s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Cependant, FTNSolutions ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition. FTNSolutions décline toute responsabilité pour tout dommage résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des informations mises à disposition sur le site.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[#0B0B0C] mb-3">Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers d&apos;autres sites. FTNSolutions n&apos;est pas responsable du contenu de ces sites tiers ni des pratiques de confidentialité de leurs éditeurs.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[#0B0B0C] mb-3">Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>

        </div>

        <div className="mt-10 pt-8" style={{ borderTop: "1px solid #E4E4E1" }}>
          <a href="/" className="text-sm text-[#0B0B0C] hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0C] focus-visible:ring-offset-1">← Retour à l&apos;accueil</a>
        </div>
      </div>
    </section>
  );
}
