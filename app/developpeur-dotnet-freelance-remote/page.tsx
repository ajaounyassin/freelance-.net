import type { Metadata } from "next";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  FeatureStrip, FixList, NumberedCards, OfferCards, PromoBand, ReferencesCard,
  btnOutline, btnPrimary, faqSchemaOf, icons, inlineLink, sectionTitle, type Offer,
} from "@/components/lp/sections";
import { BUSINESS_ID, MAILTO_MISSION, PERSON_ID, PHONE_DISPLAY, PHONE_HREF, SITE_URL } from "@/lib/site";

// Page nationale : cible « développeur .net freelance », « freelance .net », « consultant .net »
// sans intention locale. Angle distinct de l'accueil (Strasbourg) : le travail à distance.
const PATH = "/developpeur-dotnet-freelance-remote";

export const metadata: Metadata = {
  title: { absolute: "Développeur .NET C# freelance en remote, partout en France" },
  description:
    "Développeur .NET / C# freelance en télétravail pour des équipes partout en France : régie ou forfait, ASP.NET Core, migration vers .NET 10. Finance et monétique.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Développeur .NET C# freelance en remote",
    description: "Régie ou forfait en télétravail, ASP.NET Core, migration vers .NET 10. 10 ans de C#, dont la finance et la monétique.",
    url: `${SITE_URL}${PATH}`,
    type: "website",
    locale: "fr_FR",
  },
};

// ── Données ───────────────────────────────────────────────────────────────────

const features = [
  { label: "100 % remote", icon: icons.laptop },
  { label: "C# et .NET 10", icon: icons.code },
  { label: "Finance et monétique", icon: icons.card },
  { label: "Horaires de bureau", icon: icons.clock },
];

const offers: Offer[] = [
  {
    title: "Régie en remote",
    price: "Au TJM",
    delay: "De 1 à 12 mois, démarrage selon disponibilités",
    description:
      "Je travaille dans votre équipe comme un développeur interne, à distance : mêmes outils, mêmes rituels, mêmes revues de code. Vous êtes facturé au jour travaillé.",
    features: ["Daily et rituels agiles en visio", "Pull requests revues dans la journée", "Poste et VPN fournis par vous, ou mon poste après validation", "Point d'avancement écrit chaque semaine"],
    cta: "Proposer une mission",
    badge: "Télétravail",
    visual: "regie",
    href: MAILTO_MISSION,
  },
  {
    title: "Forfait à distance",
    price: "Sur devis",
    delay: "Chiffrage écrit après un premier échange",
    description:
      "Un périmètre fermé livré à distance : une API, un module repris, une migration vers .NET 10. Des livrables datés, une démo à chaque lot, un prix fixé avant de commencer.",
    features: ["Spécifications validées avant le code", "Démo en visio à chaque livraison", "Dépôt Git et documentation à votre nom", "Correction des anomalies après livraison"],
    cta: "Demander un devis",
    badge: "Prix fixe",
    visual: "forfait",
    href: MAILTO_MISSION,
  },
];

const fixes = [
  {
    problem: "Aucun développeur .NET disponible près de vos bureaux",
    fix: "Un profil senior qui démarre à distance, sans attendre un recrutement de plusieurs mois",
  },
  {
    problem: "Une application en .NET 8 ou 9, sans correctifs de sécurité depuis le 10 novembre 2026",
    fix: "Une migration vers .NET 10, menée par pull requests que votre équipe relit et valide",
  },
  {
    problem: "Un prestataire offshore qui livre du code que personne ne relit",
    fix: "Un développeur francophone, aux mêmes horaires que vous, qui explique ses choix en revue de code",
  },
  {
    problem: "Un projet financier qui demande de connaître le métier, pas seulement C#",
    fix: "Dix ans de C# dont la monétique et la banque : les règles de gestion sont comprises avant d'être codées",
  },
];

const steps = [
  { title: "Échange de cadrage", body: "30 minutes en visio pour comprendre le contexte, la stack et les délais. Je vous envoie ensuite ma proposition par écrit." },
  { title: "Accès et lecture du code", body: "Vous ouvrez les accès (Git, VPN, outils). Les premiers jours servent à lire le code, lancer la solution en local et poser les bonnes questions." },
  { title: "Premier livrable", body: "Une première pull request dès la première semaine, sur un ticket réel, pour valider la façon de travailler ensemble." },
  { title: "Rythme de croisière", body: "Rituels de l'équipe, revues de code, point écrit hebdomadaire. Déplacement sur site ponctuel si vous le souhaitez, à convenir." },
];

const cities = ["Paris", "Lyon", "Lille", "Nantes", "Toulouse", "Bordeaux"];

const faqItems = [
  {
    question: "Travaillez-vous en remote complet ?",
    answer:
      "Oui. La plupart des missions .NET se font très bien à distance avec Git, un outil de tickets et la visio. Pour le démarrage ou un atelier important, je peux me déplacer ponctuellement : on le prévoit dans la proposition, avec les frais éventuels annoncés à l'avance.",
  },
  {
    question: "Quels sont vos horaires de travail ?",
    answer:
      "Les horaires de bureau habituels, heure de Paris. Je participe aux daily et aux rituels de l'équipe comme un développeur interne, et je reste joignable sur votre messagerie pendant la journée.",
  },
  {
    question: "Comment suivre l'avancement à distance ?",
    answer:
      "Par le code d'abord : chaque changement passe par une pull request relue par votre équipe. En plus, je vous envoie un point écrit chaque semaine (fait, en cours, points bloquants) et, au forfait, une démo à chaque livraison.",
  },
  {
    question: "Comment gérez-vous la sécurité des accès ?",
    answer:
      "Je travaille avec les accès que vous me donnez et rien de plus : VPN, comptes nominatifs, poste fourni si votre politique l'exige. Je n'ai jamais besoin de données de production réelles sur mon poste ; un jeu de données anonymisé suffit dans la grande majorité des cas.",
  },
  {
    question: "Acceptez-vous la sous-traitance pour une ESN ou un cabinet ?",
    answer:
      "Oui, en direct avec le client final ou en sous-traitance pour une ESN, partout en France. Je peux aussi passer par une plateforme de mise en relation ou une société de portage si votre service achats l'impose.",
  },
  {
    question: "Quel est votre TJM en remote ?",
    answer:
      "Il dépend de la durée de la mission et du niveau d'expertise métier attendu. Je l'annonce par écrit dès le premier échange, et il ne bouge plus une fois la mission lancée.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développeur .NET / C# freelance en remote",
  serviceType: "Développement logiciel .NET",
  provider: { "@id": BUSINESS_ID },
  author: { "@id": PERSON_ID },
  areaServed: { "@type": "Country", name: "France" },
  availableChannel: { "@type": "ServiceChannel", name: "Télétravail" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Développeur .NET freelance en remote", item: `${SITE_URL}${PATH}` },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RemotePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaOf(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="mx-auto max-w-6xl px-4 pt-6 sm:px-6" aria-label="Fil d'Ariane">
        <ol className="label-mono flex flex-wrap items-center gap-2 text-[11px] text-[#6B6B6B]">
          <li><a href="/" className="rounded hover:text-[#0B0B0C]">Accueil</a></li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-[#5E5E5E]">Remote France</li>
        </ol>
      </nav>

      {/* Hero */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:pb-20">
          <div>
            <p className="label-mono text-[#6B6B6B]">Freelance / .NET / Remote France</p>
            <h1 className="h-wide mt-5 text-[clamp(2.1rem,5vw,4rem)] text-[#0B0B0C] [text-wrap:balance]">
              Développeur .NET C# freelance en remote, partout en France.
            </h1>
            <p className="mt-7 max-w-[34rem] text-[1.125rem] leading-[1.6] text-[#4A4A4A]">
              Je travaille à distance avec des équipes de toute la France : API ASP.NET Core, applications métier, migration vers .NET 10. Dix ans de C#, dont une grande partie dans la banque et le paiement.
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
              <strong className="font-semibold text-[#0B0B0C]">Yassin Ajaoun, consultant .NET freelance.</strong>{" "}Réponse sous 24 h, TJM annoncé par écrit dès le premier échange.
            </p>
          </div>
          <ReferencesCard />
        </div>
        <FeatureStrip items={features} />
      </section>

      {/* Offres */}
      <section id="offres" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="label-mono flex justify-between text-[#6B6B6B]">
            <span>2 formules</span>
            <span>À distance</span>
          </div>
          <h2 className={`${sectionTitle} mt-5`}>Régie ou forfait, en télétravail</h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-[#4A4A4A]">
            En régie si votre équipe a besoin d&apos;un développeur de plus, au forfait si vous avez un périmètre clair à faire livrer.
          </p>
          <OfferCards offers={offers} />
          <PromoBand
            title="Premier échange offert"
            text="30 minutes en visio pour cadrer le besoin,"
            highlight="réponse sous 24 h"
            href={MAILTO_MISSION}
            kicker="Réserver"
            label="Ma visio"
          />
        </div>
      </section>

      {/* Problèmes fréquents */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label-mono text-[#6B6B6B]">Problèmes fréquents</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className={sectionTitle}>Pourquoi on me contacte</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#4A4A4A]">
                Le marché des développeurs .NET seniors est tendu, et un recrutement prend des mois. Travailler à distance élargit le choix sans baisser le niveau d&apos;exigence.
              </p>
            </div>
            <FixList items={fixes} />
          </div>
        </div>
      </section>

      {/* Texte de fond : parcours */}
      <section id="parcours" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-[44rem]">
            <p className="label-mono text-[#6B6B6B]">Parcours / Remote</p>
            <h2 className={`${sectionTitle} mt-5`}>Un consultant .NET freelance habitué aux équipes à distance</h2>
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.75] text-[#4A4A4A]">
              <p>
                Je suis <strong className="font-semibold text-[#0B0B0C]">développeur .NET / C# freelance</strong> depuis l&apos;Alsace et j&apos;écris du C# depuis plus de dix ans. J&apos;ai été référent technique monétique pendant quatre ans chez Sogeti (groupe Capgemini), j&apos;ai travaillé chez Transactis sur des applications de paiement et en mission pour Groupe SII à la Cour européenne des droits de l&apos;homme. Depuis 2025, je développe chez Blue Soft sur des applications du secteur financier.
              </p>
              <p>
                Le remote ne marche que si le travail est visible. Je le rends visible par le code : des pull requests courtes, décrites, faciles à relire. Une question bloquante se pose dans la journée sur votre messagerie, pas le vendredi soir dans un mail de trois pages.
              </p>
              <p>
                Côté technique : <strong className="font-semibold text-[#0B0B0C]">C#, ASP.NET Core</strong> pour les API REST, <strong className="font-semibold text-[#0B0B0C]">Entity Framework Core et SQL Server</strong> pour les données, tests automatisés et pipelines CI/CD, et la reprise de code .NET Framework quand il faut faire évoluer l&apos;existant.
              </p>
              <p>
                Vous êtes en Alsace ? Je peux aussi venir travailler dans vos locaux : voir la page{" "}
                <a href="/" className={inlineLink}>développeur .NET freelance à Strasbourg</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulé / pour qui / zone */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label-mono text-[#6B6B6B]">Déroulé</p>
          <h2 className={`${sectionTitle} mt-5`}>Comment démarre une mission .NET à distance</h2>
          <NumberedCards items={steps} />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[18px] border border-[#E4E4E1] p-7">
              <h2 className="h-wide text-[1.375rem] tracking-[0.03em]">Pour qui</h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                DSI et CTO de PME, fintechs et éditeurs de logiciels financiers, banques, assurances et mutuelles, ESN et cabinets qui cherchent un sous-traitant .NET pour un client final.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E4E4E1] p-7">
              <h2 className="h-wide text-[1.375rem] tracking-[0.03em]">Où j&apos;interviens</h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                En remote pour des équipes partout en France, notamment à {cities.slice(0, -1).join(", ")} et {cities[cities.length - 1]}. Sur site à Strasbourg et en Alsace.
              </p>
              <a href="#contact" className="label-mono mt-5 inline-flex py-2 text-[12px] font-bold text-[#0B0B0C] underline underline-offset-4">
                Me parler de votre mission →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TJM */}
      <section id="tarifs" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="label-mono text-[#6B6B6B]">TJM / Modalités</p>
          <h2 className={`${sectionTitle} mt-5`}>Un TJM annoncé par écrit, sans surprise</h2>
          <div className="mt-7 max-w-[44rem] space-y-5 text-[1.0625rem] leading-[1.75] text-[#4A4A4A]">
            <p>
              Le taux journalier dépend de la durée de la mission et du niveau d&apos;expertise métier attendu. Il est fixé par écrit avant le démarrage et ne change plus ensuite. Au forfait, le prix est fixé sur un devis détaillé, payable par étapes de livraison.
            </p>
            <p>
              Facturation par <strong className="font-semibold text-[#0B0B0C]">FTNSolutions</strong>, entrepreneur individuel, ou via une plateforme de mise en relation ou une société de portage si votre service achats l&apos;impose.
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
          <h2 className={`${sectionTitle} mb-10 mt-5`}>Freelance .NET en remote : vos questions</h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <div id="contact" className="scroll-mt-16">
        <CtaSection
          heading={<>Votre prochain développeur .NET n&apos;a pas besoin <span className="text-[#C6F432]">d&apos;un badge d&apos;accès.</span></>}
          subtext="Décrivez la mission en quelques lignes : stack, durée, date de démarrage. Je réponds sous 24 h avec mes disponibilités et mon TJM."
          primaryCta={{ text: "Décrire ma mission", href: MAILTO_MISSION }}
          secondaryCta={{ text: `Appeler le ${PHONE_DISPLAY}`, href: PHONE_HREF, ariaLabel: `Appeler Yassin Ajaoun au ${PHONE_DISPLAY}` }}
        />
      </div>
    </>
  );
}
