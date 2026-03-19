"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SunLogo = ({ size = 44 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunGradHeader" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF176" />
        <stop offset="55%" stopColor="#F9D423" />
        <stop offset="100%" stopColor="#F5A623" />
      </radialGradient>
    </defs>
    <g stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round">
      <line x1="22" y1="3" x2="22" y2="8" />
      <line x1="22" y1="36" x2="22" y2="41" />
      <line x1="3" y1="22" x2="8" y2="22" />
      <line x1="36" y1="22" x2="41" y2="22" />
      <line x1="7.5" y1="7.5" x2="11" y2="11" />
      <line x1="33" y1="33" x2="36.5" y2="36.5" />
      <line x1="36.5" y1="7.5" x2="33" y2="11" />
      <line x1="11" y1="33" x2="7.5" y2="36.5" />
    </g>
    <circle cx="22" cy="22" r="12" fill="url(#sunGradHeader)" />
    <circle cx="22" cy="22" r="12" fill="none" stroke="#F5A623" strokeWidth="1" />
  </svg>
);

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Ingredientes", href: "/#ingredientes" },
  { label: "Recetas", href: "/#recetas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top info bar — hidden when scrolled */}
      {!scrolled && (
        <div className="bg-[#122d56] px-6 py-1.5 flex justify-end items-center gap-4">
          <span className="text-[#93c5fd] text-xs font-medium">
            Distribuidores: +58 212 555-0100
          </span>
          <span className="text-[#4b6ea8]">|</span>
          <span className="text-[#93c5fd] text-xs">info@cerealsunny.com</span>
        </div>
      )}

      {/* Main nav */}
      <nav
        className={`
          bg-[#1B4F8A] border-b-[3px] border-[#F5A623] px-6 lg:px-8
          flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "h-[62px] shadow-[0_2px_16px_rgba(0,0,0,0.35)] bg-[#0e2e56]" : "h-[70px]"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <SunLogo size={scrolled ? 36 : 44} />
          <div className="leading-none">
            <div
              className="font-serif font-black text-white tracking-wide"
              style={{ fontSize: scrolled ? "19px" : "22px", fontFamily: "Georgia, serif" }}
            >
              SUNNY
              <sup className="text-[#F5A623]" style={{ fontSize: "8px", verticalAlign: "super" }}>
                ®
              </sup>
            </div>
            {!scrolled && (
              <div className="text-[9px] tracking-[0.2em] text-[#93c5fd] font-medium uppercase mt-0.5">
                Cereal
              </div>
            )}
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium tracking-wide
                border-b-2 border-transparent pb-0.5
                hover:border-[#F5A623] hover:text-[#F5A623]
                transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: phone + CTA */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <div className="text-right">
            <div className="text-[11px] text-[#93c5fd] font-medium">Distribuidores</div>
            <div className="text-[13px] text-white font-semibold flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              +58 212 555-0100
            </div>
          </div>
          <Link
            href="/contacto"
            className="bg-[#F5A623] text-[#1B4F8A] font-bold text-xs uppercase
              tracking-widest px-5 py-2.5 rounded
              hover:bg-[#F9D423] transition-colors duration-200"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0e2e56] border-b border-[#1B4F8A] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-sm font-medium hover:text-[#F5A623] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-[#F5A623] text-[#1B4F8A] font-bold text-xs uppercase
              tracking-widest px-5 py-2.5 rounded text-center
              hover:bg-[#F9D423] transition-colors"
          >
            Cotizar
          </Link>
        </div>
      )}
    </header>
  );
}
