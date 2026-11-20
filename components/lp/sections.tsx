import type { ReactNode } from "react";

// Blocs partagés par les landing pages (même DA que ftnsolutions.fr).

export const btnPrimary =
  "label-mono inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#C6F432] px-7 py-[18px] text-[13px] font-bold text-[#0B0B0C] transition-colors hover:bg-[#D7FF5C]";
export const btnOutline =
  "label-mono inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-[#0B0B0C] px-7 py-4 text-[13px] font-bold text-[#0B0B0C] transition-colors hover:bg-white";
export const sectionTitle = "h-wide text-[clamp(1.75rem,3.8vw,3rem)] [text-wrap:balance]";
export const inlineLink = "font-semibold text-[#0B0B0C] underline underline-offset-4 hover:text-[#3A3A3A]";

export const icons = {
  code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  laptop: <><rect x="4" y="4" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

export const references = [
  { org: "Blue Soft", detail: "Depuis 2025, applications du secteur financier" },
  { org: "Sogeti, groupe Capgemini", detail: "4 ans, référent technique monétique" },
  { org: "Transactis", detail: "Applications de paiement" },
  { org: "Groupe SII", detail: "Mission à la Cour européenne des droits de l'homme" },
];

export type Offer = {
  title: string;
  price: string;
  delay: string;
  description: string;
  features: string[];
  cta: string;
  badge: string;
  visual: "regie" | "forfait";
  href: string;
};

export type Item = { title: string; body: string };
export type Fix = { problem: string; fix: string };

export function ReferencesCard() {
  return (
    <figure className="overflow-hidden rounded-[22px] border border-[#E4E4E1] bg-white">
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
  );
}

export function FeatureStrip({ items }: { items: { label: string; icon: ReactNode }[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <ul className="grid grid-cols-2 gap-6 border-y border-[#E4E4E1] py-7 lg:grid-cols-4">
        {items.map((f) => (
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
  );
}

function OfferVisual({ kind }: { kind: Offer["visual"] }) {
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

export function OfferCards({ offers }: { offers: Offer[] }) {
  return (
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
            <a href={o.href} className={`${btnOutline} mt-8 w-full sm:w-fit`}>
              {o.cta}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PromoBand({ title, text, highlight, href, kicker, label }: { title: string; text: string; highlight: string; href: string; kicker: string; label: string }) {
  return (
    <div className="mt-6 flex flex-col gap-5 rounded-[22px] bg-[#0B0B0C] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
      <div>
        <p className="h-wide text-[1.5rem] tracking-[0.03em]">{title}</p>
        <p className="mt-2 text-[#CFCFCF]">
          {text} <span className="text-[#C6F432]">{highlight}</span>.
        </p>
      </div>
      <a href={href} className="flex flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-[#C6F432] px-8 py-4 transition-colors hover:bg-[#1A1A1C]">
        <span className="label-mono text-[11px] text-[#BDBDBD]">{kicker}</span>
        <span className="label-mono text-[20px] font-bold tracking-[0.1em] text-[#C6F432]">{label}</span>
      </a>
    </div>
  );
}

export function FixList({ items, id }: { items: Fix[]; id?: string }) {
  return (
    <dl id={id} className="flex scroll-mt-24 flex-col gap-3">
      {items.map((f, i) => (
        <div key={f.problem} className="grid gap-2 rounded-[18px] border border-[#E4E4E1] bg-[#F4F4F2] p-5 sm:grid-cols-[auto_1fr_1fr] sm:gap-6">
          <span className="label-mono h-fit w-fit rounded-lg bg-[#0B0B0C] px-2.5 py-1.5 text-[12px] font-bold text-[#C6F432]" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <dt className="font-semibold">{f.problem}</dt>
          <dd className="text-[#4A4A4A]">{f.fix}</dd>
        </div>
      ))}
    </dl>
  );
}

export function NumberedCards({ items }: { items: Item[] }) {
  return (
    <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((r, i) => (
        <li key={r.title} className="flex flex-col gap-3 rounded-[18px] border border-[#E4E4E1] bg-[#F4F4F2] p-6">
          <span className="h-wide text-[2.25rem]" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <span className="h-1 w-10 rounded-full bg-[#C6F432]" aria-hidden="true" />
          <h3 className="text-lg font-semibold">{r.title}</h3>
          <p className="leading-relaxed text-[#4A4A4A]">{r.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function faqSchemaOf(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
