"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang AI", href: "#intro" },
  { label: "Jelajahi Pekerjaan", href: "#jobs" },
  { label: "Skill", href: "#skills" },
  { label: "Human + AI", href: "#human-ai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border px-5 shadow-sm backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-slate-200/80 bg-white/90 text-slate-950 shadow-lg"
            : "border-white/15 bg-white/10 text-white"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
              isScrolled ? "bg-[var(--color-primary)]" : "bg-white/15"
            }`}
          >
            <Sparkles size={16} className="text-[var(--color-accent)]" />
          </span>

          <span className="text-sm font-black leading-none sm:text-base">
            AI Job Impact
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition ${
                isScrolled
                  ? "text-slate-700 hover:text-[var(--color-violet)]"
                  : "text-white/80 hover:text-[var(--color-accent)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#jobs"
          className="hidden rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90 lg:inline-block"
        >
          Explore Jobs
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          className={`inline-flex items-center justify-center rounded-full border p-2 lg:hidden ${
            isScrolled
              ? "border-slate-200 text-slate-700"
              : "border-white/20 text-white"
          }`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/15 bg-[var(--color-primary)]/95 px-5 py-5 text-white shadow-lg backdrop-blur-2xl lg:hidden">
          <div className="grid gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-white/80 transition hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#jobs"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-black text-white"
            >
              Explore Jobs
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
