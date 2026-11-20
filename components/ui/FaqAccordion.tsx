export interface FaqItem {
  question: string;
  answer: string;
  /** Lien contextuel optionnel affiché sous la réponse. Les deux champs vont ensemble. */
  ctaHref?: string;
  ctaLabel?: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[#E4E4E1] border-y border-[#E4E4E1]">
      {items.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[1.0625rem] font-semibold leading-snug text-[#0B0B0C]">{faq.question}</span>
            <svg
              className="mt-1 h-5 w-5 shrink-0 text-[#5E5E5E] transition-transform duration-200 group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <div className="max-w-[44rem] pb-6">
            <p className="leading-relaxed text-[#5E5E5E]">{faq.answer}</p>
            {faq.ctaHref && faq.ctaLabel && (
              <a href={faq.ctaHref} className="mt-3 inline-flex font-medium text-[#0B0B0C] underline underline-offset-4 hover:text-[#3A3A3A]">
                {faq.ctaLabel}
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
