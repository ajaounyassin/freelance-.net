"use client";

import { useEffect, useState } from "react";
import { navLinks, navCta } from "./nav-links";

export function NavMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg lg:hidden"
      >
        <span className={`block h-[1.5px] w-5 bg-[#0B0B0C] transition-transform duration-200 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
        <span className={`block h-[1.5px] w-5 bg-[#0B0B0C] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-[1.5px] w-5 bg-[#0B0B0C] transition-transform duration-200 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <div id="menu-mobile" className="absolute left-0 right-0 top-full border-b border-[#E4E4E1] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Menu mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-[#0B0B0C] hover:bg-[#F4F4F2]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={navCta.href}
              onClick={() => setOpen(false)}
              className="label-mono mb-2 mt-3 rounded-full bg-[#C6F432] px-4 py-4 text-center text-[13px] font-bold text-[#0B0B0C]"
            >
              {navCta.label}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
