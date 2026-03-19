"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SunLogo = ({ size = 44 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <defs>
      <radialGradient id="sunGradHeader" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF176" />
        <stop offset="55%" stopColor="#F9D423" />
        <stop offset="100%" stopColor="#F5A623" />
      </radialGradient>
    </defs>
    <g stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round">
      <line x1="22" y1="3" x2="22" y2="8" /><line x1="22" y1="36" x2="22" y2="41" />
      <line x1="3" y1="22" x2="8" y2="22" /><line x1="36" y1="22" x2="41" y2="22" />
      <line x1="7.5" y1="7.5" x2="11" y2="11" /><line x1="33" y1="33" x2="36.5" y2="36.5" />
      <line x1="36.5" y1="7.5" x2="33" y2="11" /><line x1="11" y1="33" x2="7.5" y2="36.5" />
    </g>
    <circle cx="22" cy="22" r="12" fill="url(#sunGradHeader)" />
  </svg>
);

const navLinks = [
  { label: "Recetas", href: "/#recetas" },
  { label: "Productos", href: "/productos" },
  { label: "Sobre Sunny", href: "/nosotros" },
  { label: "Salud y Nutrición", href: "/#nutricion" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header style={{ width: "100%", position: "fixed", top: 0, left: 0, zIndex: 50 }}>

      {/* Top info bar — desktop only */}
      {!scrolled && !isMobile && (
        <div style={{ background: "#122d56", padding: "6px 32px", display: "flex", justifyContent: "flex-end", gap: "16px" }}>
          <span style={{ color: "#93c5fd", fontSize: "12px" }}>Distribuidores: +58 212 555-0100</span>
          <span style={{ color: "#4b6ea8" }}>|</span>
          <span style={{ color: "#93c5fd", fontSize: "12px" }}>info@cerealsunny.com</span>
        </div>
      )}

      {/* Main nav */}
      <div style={{
        background: scrolled ? "#0e2e56" : "#1B4F8A",
        borderBottom: "3px solid #F5A623",
        padding: isMobile ? "0 16px" : "0 32px",
        height: isMobile ? "64px" : scrolled ? "72px" : "88px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.35)" : "none",
        transition: "all 0.3s ease",
        position: "relative",
      }}>

        {/* MOBILE: hamburger left */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: menuOpen ? "#F5A623" : "#fff", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#fff", opacity: menuOpen ? 0 : 1, transition: "all 0.2s" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: menuOpen ? "#F5A623" : "#fff", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}

        {/* DESKTOP: nav left */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center" }}>
            {navLinks.map((link, index) => (
              <div key={link.href} style={{ display: "flex", alignItems: "center" }}>
                <Link href={link.href} style={{
                  color: "#ffffff", fontSize: "18px", fontWeight: "500", textDecoration: "none",
                  letterSpacing: "0.02em", borderBottom: "2px solid transparent", paddingBottom: "2px",
                  padding: "0 24px", transition: "color 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F5A623"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#F5A623"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent"; }}
                >{link.label}</Link>
                {index < navLinks.length - 1 && (
                  <span style={{ color: "rgba(245,166,35,0.4)", fontSize: "18px", fontWeight: "300" }}>|</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* CENTER: Logo */}
        <Link href="/" style={{
          display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none",
          position: isMobile ? "absolute" : "absolute",
          left: "50%", transform: "translateX(-50%)",
        }}>
          <SunLogo size={isMobile ? 32 : scrolled ? 36 : 46} />
          <div style={{
            fontFamily: "Georgia, serif", fontWeight: "900",
            fontSize: isMobile ? "14px" : scrolled ? "16px" : "20px",
            color: "#ffffff", letterSpacing: "0.06em", lineHeight: "1", marginTop: "2px",
          }}>
            SUNNY<sup style={{ fontSize: "7px", color: "#F5A623", verticalAlign: "super" }}>®</sup>
          </div>
          {!scrolled && !isMobile && (
            <div style={{ fontSize: "8px", letterSpacing: "0.25em", color: "#93c5fd", textTransform: "uppercase", marginTop: "1px" }}>Cereal</div>
          )}
        </Link>

        {/* DESKTOP: right icons */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", cursor: "pointer", opacity: 0.85 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
              <span style={{ fontSize: "10px", color: "#93c5fd", letterSpacing: "0.05em" }}>Búsqueda</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", cursor: "pointer", opacity: 0.85 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.19 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.34 6.34l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span style={{ fontSize: "10px", color: "#93c5fd", letterSpacing: "0.05em" }}>Contáctanos</span>
            </div>
          </div>
        )}

        {/* MOBILE: phone icon right */}
        {isMobile && (
          <a href="tel:+582125550100" style={{ color: "#F5A623", textDecoration: "none" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.19 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.34 6.34l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{ background: "#0e2e56", borderBottom: "1px solid rgba(245,166,35,0.3)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "0" }}>
          {navLinks.map((link, index) => (
            <div key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)} style={{
                color: "#ffffff", fontSize: "16px", fontWeight: "500", textDecoration: "none",
                display: "block", padding: "14px 0",
              }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")}
              >{link.label}</Link>
              {index < navLinks.length - 1 && (
                <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
              )}
            </div>
          ))}
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(245,166,35,0.2)" }}>
            <a href="tel:+582125550100" style={{ color: "#93c5fd", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
              📞 +58 212 555-0100
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
