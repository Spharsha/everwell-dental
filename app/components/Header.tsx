"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "ABOUT", href: "#about" },
    { label: "TREATMENTS", href: "#treatments" },
    { label: "OUR DENTIST", href: "#dentist" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7ece5] bg-[#fbfcf9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-serif tracking-wide">
          EVERWELL<span className="text-[#8ca58c]">.</span>
          <span className="block text-[9px] tracking-[0.35em] text-[#849486]">
            DENTAL STUDIO
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[11px] tracking-[0.15em] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#8ca58c]"
            >
              {link.label}
            </a>
          ))}
          <a href="#appointment" className="bg-[#29483c] px-5 py-3 text-white">
            BOOK A VISIT
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="text-2xl md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#e7ece5] bg-[#fbfcf9] px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[#e7ece5] py-4 text-xs tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block bg-[#29483c] px-5 py-4 text-center text-xs tracking-widest text-white"
          >
            BOOK A VISIT
          </a>
        </nav>
      )}
    </header>
  );
}
