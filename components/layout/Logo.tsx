/** Symbole : Y géométrique blanc + curseur vert dans un carré encre (même grammaire que le logo FTN). */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <rect width="64" height="64" rx="16" fill="#0B0B0C" />
      <path d="M14 14h9l7 12 7-12h9L34.5 33v17h-9V33Z" fill="#FFFFFF" />
      <rect x="38" y="44" width="13" height="6" rx="1" fill="#C6F432" />
    </svg>
  );
}

/** Logo complet : symbole + « YASSIN_AJAOUN ». Tiret bas vert sur fond sombre uniquement. */
export function Logo({ size = "sm", invert = false }: { size?: "sm" | "md"; invert?: boolean }) {
  const mark = size === "md" ? 40 : 32;
  const text = size === "md" ? "text-[19px]" : "text-[15px] sm:text-[17px]";
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={mark} />
      <span className={`h-wide ${text} tracking-[0.08em] ${invert ? "text-white" : "text-[#0B0B0C]"}`} style={{ lineHeight: 1 }}>
        YASSIN<span className={invert ? "text-[#C6F432]" : undefined}>_</span>AJAOUN
      </span>
    </span>
  );
}
