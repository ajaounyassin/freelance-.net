interface CtaSectionProps {
  badge?: string;
  heading: React.ReactNode;
  subtext: string;
  primaryCta: { text: string; href: string; ariaLabel?: string };
  secondaryCta?: { text: string; href: string; ariaLabel?: string };
  contact?: string;
}

/** Bandeau d'appel à l'action de fin de page : fond encre, texte à gauche, actions à droite. */
export function CtaSection({ badge, heading, subtext, primaryCta, secondaryCta, contact }: CtaSectionProps) {
  return (
    <section className="bg-[#0B0B0C] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <h2 className="h-wide text-[clamp(1.75rem,4vw,3.25rem)] [text-wrap:balance]">{heading}</h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#BDBDBD]">{subtext}</p>
          {(badge || contact) && <p className="label-mono mt-4 text-[11px] text-[#9A9A9A]">{[badge, contact].filter(Boolean).join(". ")}</p>}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={primaryCta.href}
            aria-label={primaryCta.ariaLabel}
            className="label-mono inline-flex items-center justify-center rounded-full bg-[#C6F432] px-7 py-4 text-[13px] font-bold text-[#0B0B0C] transition-colors hover:bg-[#D7FF5C]"
          >
            {primaryCta.text}
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              aria-label={secondaryCta.ariaLabel}
              className="label-mono inline-flex items-center justify-center rounded-full border-2 border-[#555] px-7 py-[14px] text-[13px] font-bold text-white transition-colors hover:border-white"
            >
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
