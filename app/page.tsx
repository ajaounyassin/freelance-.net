import type { Metadata } from "next";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { BUSINESS_ID, MAILTO_MISSION, PERSON_ID, PHONE_DISPLAY, PHONE_HREF, SITE_URL } from "@/lib/site";

// Mots-clés (Ubersuggest FR, nov. 2026) : développeur c# (140), développeur net (140),
// développeur .net (110), consultant .net (70), freelance net (50), freelance .net (40),
// développeur .net freelance (10). Cible principale : « développeur .NET C# freelance ».
export const metadata: Metadata = {
  title: { absolute: "Développeur .NET C# freelance à Strasbourg | Yassin Ajaoun" },
  description:
    "Développeur .NET / C# freelance à Strasbourg : régie ou forfait, API ASP.NET Core, migration vers .NET 10. 10 ans d'expérience, finance et monétique.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Développeur .NET C# freelance à Strasbourg",
    description: "Régie ou forfait, API ASP.NET Core, migration vers .NET 10. 10 ans de C#, dont la finance et la monétique.",
    url: `${SITE_URL}/`,
    type: "website",
    locale: "fr_FR",
  },
};

// ── Données ───────────────────────────────────────────────────────────────────

const features = [
  { label: "C# et .NET 10", icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></> },
  { label: "API ASP.NET Core", icon: <><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></> },
  { label: "Finance et monétique", icon: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></> },
  { label: "Sur site ou remote", icon: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></> },
];

const references = [
  { org: "Blue Soft", detail: "Depuis 2025, applications du secteur financier" },
  { org: "Sogeti, groupe Capgemini", detail: "4 ans, référent technique monétique" },
  { org: "Transactis", detail: "Applications de paiement" },
  { org: "Groupe SII", detail: "Mission à la Cour européenne des droits de l'homme" },
];

const offers = [
  {
    title: "Mission en régie",
    price: "Au TJM",
    delay: "De 1 à 12 mois, démarrage selon disponibilités",
    description:
      "Je rejoins votre équipe comme un développeur interne : rituels, revues de code, mises en production. Vous êtes facturé au jour travaillé, sans marge d'intermédiaire.",
    features: ["Intégration à vos outils (Azure DevOps, GitLab, Jira)", "Revues de code et tests automatisés", "Sur site à Strasbourg, hybride ou remote", "Facture mensuelle, sans frais d'ESN"],
    cta: "Proposer une mission",
    badge: "Renfort d'équipe",
    visual: "regie",
  },
  {
    title: "Projet au forfait",
    price: "Sur devis",
    delay: "Chiffrage écrit après un premier échange",
    description:
      "Une API à exposer, un module à reprendre, une migration à mener : je chiffre un périmètre fermé, avec des livrables et une date. Vous payez un résultat, pas des jours.",
    features: ["Cadrage et spécifications écrites", "Livraison par lots, testée", "Code et documentation qui vous appartiennent", "Correction des anomalies après livraison"],
    cta: "Demander un devis",
    badge: "Périmètre fermé",
    visual: "forfait",
  },
];

const fixes = [
  {
    problem: "Une application en .NET 8 ou 9, hors support depuis le 10 novembre 2026",
    fix: "Migration vers .NET 10, supporté jusqu'en novembre 2028 : dépendances mises à jour, changements cassants corrigés, tests de non-régression",
  },
  {
    problem: "Un vieux .NET Framework 4.x que personne n'ose plus toucher",
    fix: "Une migration progressive, module par module, sans arrêter l'application en production",
  },
  {
    problem: "Une équipe en sous-effectif sur un projet qui ne peut pas glisser",
    fix: "Un renfort autonome dès la première semaine, qui lit le code existant avant de le modifier",
  },
  {
    problem: "Des flux de paiement que seul un ancien développeur comprenait",
    fix: "Une lecture métier des échanges (autorisation, compensation, rapprochement) et une documentation laissée derrière moi",
  },
];

const reasons = [
  { title: "Vous choisissez la personne", body: "Le développeur que vous rencontrez en entretien est celui qui code. Pas de remplacement de profil en cours de route." },
  { title: "Pas de marge intermédiaire", body: "Le budget paie le travail. Il ne finance pas la structure commerciale d'une ESN." },
  { title: "Le métier déjà connu", body: "La finance et le paiement ne s'apprennent pas en une semaine de mission. Je n'ai pas besoin de ce temps-là." },
  { title: "Un engagement souple", body: "Durée ajustable, démarrage rapide, pas de contrat-cadre à négocier pendant trois mois." },
];

const audiences = [
  "DSI et CTO de PME",
  "fintechs et éditeurs de logiciels financiers",
  "banques, assurances et mutuelles",
  "ESN et cabinets qui cherchent un sous-traitant .NET pour un client final",
];

const cities = ["Strasbourg", "Schiltigheim", "Illkirch-Graffenstaden", "Colmar", "Mulhouse"];

const faqItems = [
  {
    question: "Quel est votre TJM de développeur .NET freelance ?",
    answer:
      "Il dépend de la durée de la mission, de la part de remote et du niveau d'expertise métier attendu : une mission longue en remote ne se facture pas comme trois semaines d'urgence sur site. Je l'annonce par écrit dès le premier échange, et il ne bouge plus une fois la mission lancée.",
  },
  {
    question: "Pouvez-vous migrer notre application de .NET 8 vers .NET 10 ?",
    answer:
      "Oui. .NET 8 et .NET 9 ne reçoivent plus de correctifs de sécurité depuis le 10 novembre 2026, et .NET 10 est la version LTS supportée jusqu'en novembre 2028. Je commence par l'inventaire des packages NuGet et des API concernées par les changements cassants, puis je change la cible, je corrige et je fais tourner les tests avant un déploiement par étapes. Comptez quelques jours pour une API simple, plusieurs semaines pour une solution avec beaucoup de dépendances.",
  },
  {
    question: "Intervenez-vous sur du .NET Framework 4.x ?",
    answer:
      "Oui, et c'est souvent là que se trouvent les règles métier les plus importantes. Je peux maintenir l'existant, ou préparer une migration progressive vers .NET 10 en isolant d'abord ce qui peut l'être (bibliothèques, services) avant de toucher au cœur de l'application.",
  },
  {
    question: "Travaillez-vous en remote ?",
    answer:
      "Oui, en remote complet partout en France, ou en hybride. Pour une mission dans l'Eurométropole de Strasbourg, je peux être sur site plusieurs jours par semaine, ce qui aide beaucoup pendant les premières semaines d'intégration.",
  },
  {
    question: "Acceptez-vous la sous-traitance pour une ESN ?",
    answer:
      "Oui. Je travaille en direct avec le client final ou en sous-traitance pour une ESN ou un cabinet, et je peux passer par une plateforme de mise en relation ou une société de portage si votre service achats l'impose.",
  },
  {
    question: "Comment se passe le démarrage d'une mission ?",
    answer:
      "Un premier échange de 30 minutes pour comprendre le contexte, puis une proposition écrite (TJM ou devis au forfait). Une fois le contrat signé, il me faut vos accès et une personne référente côté métier. La première semaine sert à lire le code et à livrer un premier correctif, pas à remplir des slides.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développeur .NET / C# freelance",
  serviceType: "Développement logiciel .NET",
  provider: { "@id": BUSINESS_ID },
  author: { "@id": PERSON_ID },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "Country", name: "France" },
  ],
  offers: [
    { "@type": "Offer", name: "Mission .NET en régie", priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "EUR", unitText: "DAY", description: "TJM communiqué sur demande" } },
    { "@type": "Offer", name: "Projet .NET au forfait", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", description: "Sur devis" } },
    { "@type": "Offer", name: "Migration vers .NET 10", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", description: "Sur devis" } },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

// ── Styles partagés (identiques à ftnsolutions.fr) ────────────────────────────

const btnPrimary =
  "label-mono inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#C6F432] px-7 py-[18px] text-[13px] font-bold text-[#0B0B0C] transition-colors hover:bg-[#D7FF5C]";
const btnOutline =
  "label-mono inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-[#0B0B0C] px-7 py-4 text-[13px] font-bold text-[#0B0B0C] transition-colors hover:bg-white";
const sectionTitle = "h-wide text-[clamp(1.75rem,3.8vw,3rem)] [text-wrap:balance]";
const inlineLink = "font-semibold text-[#0B0B0C] underline underline-offset-4 hover:text-[#3A3A3A]";

function OfferVisual({ kind }: { kind: string }) {
  if (kind === "forfait") {
    return (
      <div className="flex h-full items-center justify-center bg-[#0B0B0C]" aria-hidden="true">
        <div className="flex h-32 w-32 items-center justify-center rounded-full border-[12px] border-[#3A3A3A] border-r-[#C6F432] border-t-[#C6F432]">
          <span className="h-wide text-xl text-white">.NET</span>
        </div>
      </div>
    );
  }
  // Régie : fenêtre d'éditeur stylisée (barres de code, une ligne en vert)
  return (
    <div className="flex h-full items-center justify-center bg-[#ECECEA]" aria-hidden="true">
      <div className="w-[62%] overflow-hidden rounded-lg bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
        <div className="flex h-4 items-center gap-1 bg-[#0B0B0C] px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C6F432]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#555]" />
        </div>
        <div className="flex flex-col gap-1.5 p-3">
          <span className="h-1.5 w-[45%] rounded-sm bg-[#0B0B0C]" />
          <span className="ml-3 h-1.5 w-[70%] rounded-sm bg-[#D6D6D2]" />
          <span className="ml-3 h-1.5 w-[55%] rounded-sm bg-[#C6F432]" />
          <span className="ml-3 h-1.5 w-[62%] rounded-sm bg-[#D6D6D2]" />
          <span className="h-1.5 w-[20%] rounded-sm bg-[#0B0B0C]" />
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero : promesse à gauche, références réelles à droite */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:pb-20">
          <div>
            <p className="label-mono text-[#6B6B6B]">Freelance / .NET / Strasbourg</p>
            <h1 className="h-wide mt-5 text-[clamp(2.1rem,5vw,4rem)] text-[#0B0B0C] [text-wrap:balance]">
              Développeur .NET C# freelance à Strasbourg, sans ESN.
            </h1>
            <p className="mt-7 max-w-[34rem] text-[1.125rem] leading-[1.6] text-[#4A4A4A]">
              Je rejoins votre équipe en régie ou je prends un projet au forfait : API ASP.NET Core, applications métier, migration vers .NET 10. Dix ans de C#, dont une grande partie dans la banque et le paiement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={btnPrimary}>
                Parler de ma mission →
              </a>
              <a href="#offres" className={btnOutline}>
                Voir les deux formules
              </a>
            </div>
            <p className="mt-7 text-[15px] leading-relaxed text-[#5E5E5E]">
              <strong className="font-semibold text-[#0B0B0C]">Yassin Ajaoun, développeur .NET freelance.</strong>{" "}Réponse sous 24 h, TJM annoncé par écrit dès le premier échange.
            </p>
          </div>

          <figure id="references" className="overflow-hidden rounded-[22px] border border-[#E4E4E1] bg-white">
            <div className="relative bg-[#0B0B0C] px-6 pb-7 pt-14 text-white sm:px-8">
              <span className="label-mono absolute left-4 top-4 rounded-full bg-[#C6F432] px-3.5 py-1.5 text-[11px] font-bold text-[#0B0B0C]">
                Références
              </span>
              <p className="h-wide text-[clamp(2.5rem,6vw,3.75rem)] leading-none">10 ans</p>
              <p className="mt-2 text-[15px] text-[#CFCFCF]">
                de développement C#, dont <span className="text-[#C6F432]">la monétique et la finance</span>
              </p>
            </div>
            <ul className="divide-y divide-[#E4E4E1]">
              {references.map((r) => (
                <li key={r.org} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-8">
                  <span className="h-wide text-[13px] tracking-[0.04em] sm:text-[15px]">{r.org}</span>
                  <span className="text-[14px] text-[#5E5E5E] sm:text-right">{r.detail}</span>
                </li>
              ))}
            </ul>
            <a href="#parcours" className="label-mono flex justify-end border-t border-[#E4E4E1] px-6 py-4 text-[11px] font-bold text-[#0B0B0C] hover:underline sm:px-8">
              Voir le parcours →
            </a>
          </figure>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="grid grid-cols-2 gap-6 border-y border-[#E4E4E1] py-7 lg:grid-cols-4">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B0B0C]">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6F432" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </span>
                <span className="text-[15px] font-medium">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="label-mono flex justify-between text-[#6B6B6B]">
            <span>2 formules</span>
            <span>Régie ou forfait</span>
          </div>
          <h2 className={`${sectionTitle} mt-5`}>Deux façons de travailler ensemble</h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-[#4A4A4A]">
            En régie si vous avez besoin d&apos;un développeur de plus dans l&apos;équipe, au forfait si vous avez un périmètre clair à livrer.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offers.map((o) => (
              <article key={o.title} className="flex flex-col overflow-hidden rounded-[22px] border border-[#E4E4E1] bg-white">
                <div className="relative h-56">
                  <span className="label-mono absolute left-4 top-4 z-10 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold text-[#0B0B0C]">
                    {o.badge}
                  </span>
                  <OfferVisual kind={o.visual} />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="h-wide text-[1.375rem] tracking-[0.03em]">{o.title}</h3>
                  <p className="mt-4 text-[1.75rem] font-semibold tracking-[-0.02em]">{o.price}</p>
                  <p className="mt-1 text-sm text-[#5E5E5E]">{o.delay}</p>
                  <p className="mt-5 leading-relaxed text-[#4A4A4A]">{o.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-[#E4E4E1] pt-6">
                    {o.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px]">
                        <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0B0B0C]" aria-hidden="true">
                          <svg width="10" height="10" fill="none" stroke="#C6F432" strokeWidth={3.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={MAILTO_MISSION} className={`${btnOutline} mt-8 w-full sm:w-fit`}>
                    {o.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Bandeau premier échange, façon code promo */}
          <div className="mt-6 flex flex-col gap-5 rounded-[22px] bg-[#0B0B0C] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <p className="h-wide text-[1.5rem] tracking-[0.03em]">Premier échange offert</p>
              <p className="mt-2 text-[#CFCFCF]">
                30 minutes pour cadrer le besoin, <span className="text-[#C6F432]">réponse sous 24 h</span>.
              </p>
            </div>
            <a
              href={MAILTO_MISSION}
              className="flex flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-[#C6F432] px-8 py-4 transition-colors hover:bg-[#1A1A1C]"
            >
              <span className="label-mono text-[11px] text-[#BDBDBD]">Réserver</span>
              <span className="label-mono text-[20px] font-bold tracking-[0.1em] text-[#C6F432]">Mon créneau</span>
            </a>
          </div>
        </div>
      </section>

      {/* Problèmes fréquents */}
      <section id="expertises" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label-mono text-[#6B6B6B]">Problèmes fréquents</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className={sectionTitle}>Ce que je règle le plus souvent</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#4A4A4A]">
                Une ESN vous envoie le profil disponible, pas forcément celui qui connaît votre métier. Sur une application financière, la moitié du travail consiste à comprendre les règles de gestion avant d&apos;écrire une ligne de code.
              </p>
            </div>
            <dl id="migration" className="flex scroll-mt-24 flex-col gap-3">
              {fixes.map((f, i) => (
                <div key={f.problem} className="grid gap-2 rounded-[18px] border border-[#E4E4E1] bg-[#F4F4F2] p-5 sm:grid-cols-[auto_1fr_1fr] sm:gap-6">
                  <span className="label-mono h-fit w-fit rounded-lg bg-[#0B0B0C] px-2.5 py-1.5 text-[12px] font-bold text-[#C6F432]" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="font-semibold">{f.problem}</dt>
                  <dd className="text-[#4A4A4A]">{f.fix}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Texte de fond : parcours et stack */}
      <section id="parcours" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-[44rem]">
            <p className="label-mono text-[#6B6B6B]">Parcours / Finance</p>
            <h2 className={`${sectionTitle} mt-5`}>Consultant .NET freelance à Strasbourg, spécialisé finance et monétique</h2>
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.75] text-[#4A4A4A]">
              <p>
                Je suis <strong className="font-semibold text-[#0B0B0C]">développeur .NET / C# freelance</strong> et j&apos;écris du C# depuis plus de dix ans. J&apos;ai passé quatre ans chez Sogeti, dans le groupe Capgemini, comme référent technique sur des applications monétiques. J&apos;ai ensuite travaillé chez Transactis, sur des applications de paiement, et en mission pour Groupe SII à la Cour européenne des droits de l&apos;homme. Depuis 2025, je développe chez Blue Soft sur des applications du secteur financier.
              </p>
              <p>
                Le paiement change la façon de coder. Une transaction ne se rejoue pas à la main, un arrondi faux finit dans un rapprochement comptable, un log mal placé peut exposer une donnée de carte. Je travaille avec ces contraintes par défaut, sans qu&apos;on ait à me les rappeler en revue de code.
              </p>
              <p>
                Côté technique : <strong className="font-semibold text-[#0B0B0C]">C#, ASP.NET Core</strong> pour les API REST, <strong className="font-semibold text-[#0B0B0C]">Entity Framework Core et SQL Server</strong> pour les données, tests automatisés et pipelines CI/CD. Je reprends aussi volontiers du code ancien en .NET Framework : c&apos;est souvent là que se trouvent les règles métier qui comptent.
              </p>
              <p>
                J&apos;exerce sous l&apos;enseigne FTNSolutions, qui porte aussi mon activité de{" "}
                <a href="https://ftnsolutions.fr" className={inlineLink}>création de sites et de référencement à Strasbourg</a>. Pour une mission .NET, vous avez un seul interlocuteur et une seule facture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi / pour qui / zone */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label-mono text-[#6B6B6B]">Freelance vs ESN</p>
          <h2 className={`${sectionTitle} mt-5`}>Pourquoi un freelance .NET plutôt qu&apos;une ESN</h2>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <li key={r.title} className="flex flex-col gap-3 rounded-[18px] border border-[#E4E4E1] bg-[#F4F4F2] p-6">
                <span className="h-wide text-[2.25rem]" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-1 w-10 rounded-full bg-[#C6F432]" aria-hidden="true" />
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="leading-relaxed text-[#4A4A4A]">{r.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[18px] border border-[#E4E4E1] p-7">
              <h2 className="h-wide text-[1.375rem] tracking-[0.03em]">Pour qui</h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Des équipes qui ont une application .NET en production et pas le temps de former un nouveau venu : {audiences.join(", ")}.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E4E4E1] p-7">
              <h2 className="h-wide text-[1.375rem] tracking-[0.03em]">Où j&apos;interviens</h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Sur site dans l&apos;Eurométropole et en Alsace, en particulier à {cities.slice(0, -1).join(", ")} et {cities[cities.length - 1]}. En remote ou en hybride partout en France.
              </p>
              <a href="#contact" className="label-mono mt-5 inline-flex py-2 text-[12px] font-bold text-[#0B0B0C] underline underline-offset-4">
                Me parler de votre mission →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TJM et modalités */}
      <section id="tarifs" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label-mono text-[#6B6B6B]">TJM / Modalités</p>
          <h2 className={`${sectionTitle} mt-5`}>Un TJM annoncé par écrit, sans surprise</h2>
          <div className="mt-7 max-w-[44rem] space-y-5 text-[1.0625rem] leading-[1.75] text-[#4A4A4A]">
            <p>
              Mon taux journalier dépend de la durée de la mission, de la part de remote et du niveau d&apos;expertise métier attendu. Je l&apos;annonce dès le premier échange, par écrit, et il ne change plus une fois la mission lancée. Les projets au forfait font l&apos;objet d&apos;un devis détaillé, payable par étapes de livraison.
            </p>
            <p>
              Facturation par <strong className="font-semibold text-[#0B0B0C]">FTNSolutions</strong>, entrepreneur individuel. Si votre service achats l&apos;exige, je passe par une plateforme de mise en relation ou une société de portage.
            </p>
          </div>
          <a href={MAILTO_MISSION} className={`${btnPrimary} mt-8`}>
            Recevoir mon TJM
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="label-mono text-[#6B6B6B]">Questions fréquentes</p>
          <h2 className={`${sectionTitle} mb-10 mt-5`}>Développeur .NET freelance : vos questions</h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <div id="contact" className="scroll-mt-16">
        <CtaSection
          heading={<>Votre backlog .NET ne va pas <span className="text-[#C6F432]">se vider seul.</span></>}
          subtext="Décrivez la mission en quelques lignes : stack, durée, date de démarrage, sur site ou remote. Je réponds sous 24 h avec mes disponibilités et mon TJM."
          primaryCta={{ text: "Décrire ma mission", href: MAILTO_MISSION }}
          secondaryCta={{ text: `Appeler le ${PHONE_DISPLAY}`, href: PHONE_HREF, ariaLabel: `Appeler Yassin Ajaoun au ${PHONE_DISPLAY}` }}
        />
      </div>
    </>
  );
}
