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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#home" className="text-lg font-bold text-gray-900">
          AI Job Impact
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#jobs"
          className="hidden rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700 md:inline-block"
        >
          Explore Jobs
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#jobs"
              onClick={() => setIsOpen(false)}
              className="mt-1 block rounded-full bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Explore Jobs
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
