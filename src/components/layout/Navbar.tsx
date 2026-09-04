"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang AI", href: "#intro" },
  { label: "Jelajahi Pekerjaan", href: "#jobs" },
  { label: "Skill", href: "#skills" },
  { label: "Human + AI", href: "#human-ai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-slate-200 bg-white/90 px-5 shadow-sm backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-sm font-black leading-none text-slate-950 sm:text-base">
            AI Job Impact
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#jobs"
          className="hidden rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 lg:inline-block"
        >
          Jelajahi Pekerjaan
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-lg lg:hidden">
          <div className="grid gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#jobs"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Jelajahi Pekerjaan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
