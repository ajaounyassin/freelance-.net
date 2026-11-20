import { NavMobile } from "./NavMobile";
import { Logo } from "./Logo";
import { navLinks, navCta } from "./nav-links";

export function Navbar() {
  return (
    <>
      {/* Bandeau (non collant) : une seule info, un seul lien */}
      <div className="label-mono flex items-center justify-center gap-x-4 gap-y-1 whitespace-nowrap bg-[#0B0B0C] px-3 py-2.5 text-[11px] sm:text-[12px]">
        <span className="hidden text-[#BDBDBD] sm:inline">Depuis le 10/11/2026 :</span>
        <span className="font-bold text-[#C6F432]">.NET 8 et 9 hors support</span>
        <a href="/#migration" className="inline-flex py-1 text-white underline underline-offset-4 hover:text-[#C6F432]">
          Migrer
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E4E4E1] bg-white">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <a href="/" aria-label="Yassin Ajaoun, accueil" className="rounded py-2">
            <Logo />
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="rounded py-2 text-[15px] font-medium text-[#0B0B0C] transition-colors hover:text-[#5E5E5E]">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={navCta.href}
            className="label-mono hidden rounded-full bg-[#0B0B0C] px-5 py-3 text-[12px] font-bold text-[#C6F432] transition-colors hover:bg-[#2A2A2C] lg:inline-flex"
          >
            {navCta.label}
          </a>

          <NavMobile />
        </div>
      </header>
    </>
  );
}
