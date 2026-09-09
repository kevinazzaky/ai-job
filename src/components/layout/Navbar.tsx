"use client";

import { useState } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";

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
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[#05070d]/95 backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)]" />

      <div className="relative px-4 pt-4">
        <div className="glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)]">
              <Sparkles size={15} />
            </span>
            <span className="text-sm font-bold leading-none tracking-tight text-white sm:text-base">
              AI Job Impact
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#jobs" className="btn-primary hidden lg:inline-flex">
            Jelajahi Pekerjaan
            <ArrowRight size={15} />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="glass-panel mx-auto mt-3 max-w-6xl rounded-3xl px-5 py-5 shadow-xl lg:hidden">
            <div className="grid gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#jobs"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full"
              >
                Jelajahi Pekerjaan
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
