import { Logo } from "./Logo";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const linkCls = "rounded text-sm text-[#CFCFCF] transition-colors hover:text-[#C6F432]";

const services = [
  { href: "/#offres", label: "Mission en régie" },
  { href: "/#offres", label: "Projet au forfait" },
  { href: "/#migration", label: "Migration vers .NET 10" },
  { href: "/#expertises", label: "Finance et monétique" },
];

const pages = [
  { href: "/#parcours", label: "Parcours" },
  { href: "/#tarifs", label: "TJM et modalités" },
  { href: "/#faq", label: "Questions fréquentes" },
  { href: "https://ftnsolutions.fr", label: "Sites web et SEO (FTNSolutions)" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2C] bg-[#0B0B0C] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size="md" invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#BDBDBD]">
              Développeur .NET / C# freelance, spécialisé finance et monétique. Basé près de Strasbourg, en mission sur site en Alsace ou en remote partout en France.
            </p>
          </div>

          <div>
            <p className="label-mono mb-4 text-[12px] font-bold text-[#C6F432]">Prestations</p>
            <ul className="space-y-2.5">
              {services.map((l) => (
                <li key={l.label}><a href={l.href} className={linkCls}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono mb-4 text-[12px] font-bold text-[#C6F432]">Le site</p>
            <ul className="space-y-2.5">
              {pages.map((l) => (
                <li key={l.label}><a href={l.href} className={linkCls}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono mb-4 text-[12px] font-bold text-[#C6F432]">Contact</p>
            <ul className="space-y-2.5">
              <li><a href={PHONE_HREF} className={linkCls}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a></li>
              <li><a href="https://linkedin.com/in/yassin-ajaoun" className={linkCls} rel="noopener">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="label-mono mt-12 flex flex-col gap-3 border-t border-[#2A2A2C] pt-6 text-[11px] text-[#9A9A9A] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yassin Ajaoun · FTNSolutions</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/mentions-legales" className="rounded hover:text-white">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
