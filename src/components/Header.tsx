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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{ width: "100%", position: "fixed", top: 0, left: 0, zIndex: 50 }}>

      {/* Top info bar */}
      {!scrolled && (
        <div style={{
          background: "#122d56",
          padding: "6px 32px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "16px",
        }}>
          <span style={{ color: "#93c5fd", fontSize: "12px" }}>Distribuidores: +58 212 555-0100</span>
          <span style={{ color: "#4b6ea8" }}>|</span>
          <span style={{ color: "#93c5fd", fontSize: "12px" }}>info@cerealsunny.com</span>
        </div>
      )}

      {/* Main nav */}
      <div style={{
        background: scrolled ? "#0e2e56" : "#1B4F8A",
        borderBottom: "3px solid #F5A623",
        padding: "0 32px",
        height: scrolled ? "72px" : "88px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.35)" : "none",
        transition: "all 0.3s ease",
      }}>

        {/* LEFT — nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0px" }}>
          {navLinks.map((link, index) => (
            <div key={link.href} style={{ display: "flex", alignItems: "center" }}>
              <Link
                href={link.href}
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "500",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  borderBottom: "2px solid transparent",
                  paddingBottom: "2px",
                  padding: "0 24px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5A623";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#F5A623";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
                }}
              >
                {link.label}
              </Link>
              {index < navLinks.length - 1 && (
                <span style={{
                  color: "rgba(245,166,35,0.4)",
                  fontSize: "18px",
                  fontWeight: "300",
                  userSelect: "none",
                }}>|</span>
              )}
            </div>
          ))}
        </nav>

        {/* CENTER — Logo */}
        <Link href="/" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
          {/*
            Fase 3 — reemplazar SunLogo con imagen real:
            <Image src="/logo-sunny.png" alt="Cereal Sunny" width={120} height={60} priority />
          */}
          <SunLogo size={scrolled ? 36 : 46} />
          <div style={{
            fontFamily: "Georgia, serif",
            fontWeight: "900",
            fontSize: scrolled ? "16px" : "20px",
            color: "#ffffff",
            letterSpacing: "0.06em",
            lineHeight: "1",
            marginTop: "2px",
          }}>
            SUNNY<sup style={{ fontSize: "8px", color: "#F5A623", verticalAlign: "super" }}>®</sup>
          </div>
          {!scrolled && (
            <div style={{
              fontSize: "8px",
              letterSpacing: "0.25em",
              color: "#93c5fd",
              textTransform: "uppercase",
              marginTop: "1px",
            }}>
              Cereal
            </div>
          )}
        </Link>

        {/* RIGHT — search + phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>

          {/* Search icon */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            opacity: "0.85",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <span style={{ fontSize: "10px", color: "#93c5fd", letterSpacing: "0.05em" }}>Búsqueda</span>
          </div>

          {/* Phone */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            opacity: "0.85",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.19 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.34 6.34l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span style={{ fontSize: "10px", color: "#93c5fd", letterSpacing: "0.05em" }}>Contáctanos</span>
          </div>

        </div>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#0e2e56",
          borderBottom: "1px solid #1B4F8A",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#ffffff", fontSize: "15px", fontWeight: "500", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
}
