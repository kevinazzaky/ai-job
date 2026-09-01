"use client";

import { ArrowUp } from "lucide-react";

const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang AI", href: "#intro" },
  { label: "Jelajahi Pekerjaan", href: "#jobs" },
  { label: "Skill", href: "#skills" },
  { label: "Human + AI", href: "#human-ai" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-primary)] text-white/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto grid gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="text-lg font-black text-white">AI Job Impact</p>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
            Landing page interaktif untuk memahami bagaimana AI mengubah cara
            kerja di berbagai profesi — bukan sekadar ancaman, tapi pergeseran
            cara kerja.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-black text-white">Navigasi</p>

          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <p className="text-sm font-black text-white">Tentang Proyek</p>

          <ul className="mt-4 space-y-2.5 text-sm">
            <li>Dibangun dengan Next.js &amp; Tailwind CSS</li>
            <li>Portfolio project, bukan riset ilmiah</li>
            <li>Data pekerjaan bersifat ilustratif</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} AI Job Impact. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-white/70 transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
