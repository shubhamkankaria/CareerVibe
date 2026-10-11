"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, Sun, Moon } from "lucide-react";

// A small, self-contained legal page (Privacy / Terms). No auth, no heavy
// theme deps — it must never break, and it should feel on-brand with the
// retro landing. Content is passed in from each route.
export default function LegalPage({ title, updated, intro, sections }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cv_theme");
      if (stored === "light") setIsDark(false);
      else if (stored === "dark") setIsDark(true);
    } catch {}
  }, []);

  const T = isDark
    ? { bg: "#17150F", panel: "#211E16", text: "#F3E7C9", soft: "#C9B98F", faint: "#8A7C5E", ink: "#0B0A07", accent: "#FF7A3D", line: "#3A352A" }
    : { bg: "#F6F7F9", panel: "#FFFFFF", text: "#17150F", soft: "#4A4237", faint: "#7A6A52", ink: "#17150F", accent: "#FF6B2B", line: "#E7DCC0" };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.text, fontFamily: "'Inter','DM Sans',system-ui,sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 10, background: T.panel, borderBottom: `2px solid ${T.ink}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0.9rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, color: T.text, textDecoration: "none", fontSize: "1.05rem" }}>
            <span style={{ display: "grid", placeItems: "center", width: 30, height: 30, borderRadius: 9, background: T.accent, color: "#17150F" }}><Sparkles size={16} strokeWidth={2.5} /></span>
            CareerVibe
          </Link>
          <button onClick={() => setIsDark((d) => { try { localStorage.setItem("cv_theme", d ? "light" : "dark"); } catch {} return !d; })} aria-label="Toggle theme" style={{ display: "grid", placeItems: "center", width: 34, height: 34, borderRadius: 9, border: `2px solid ${T.ink}`, background: T.bg, color: T.text, cursor: "pointer" }}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: T.soft, textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1.5rem" }}>
          <ArrowLeft size={15} /> Back to home
        </Link>

        <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 2.6rem)", fontWeight: 900, letterSpacing: "-0.01em", margin: "0 0 0.6rem" }}>{title}</h1>
        <p style={{ color: T.faint, fontSize: "0.85rem", fontWeight: 600, margin: "0 0 1.5rem" }}>Last updated: {updated}</p>
        {intro && <p style={{ color: T.soft, lineHeight: 1.7, fontSize: "1rem", margin: "0 0 2rem" }}>{intro}</p>}

        <div style={{ display: "flex", flexDirection: "column", gap: "1.9rem" }}>
          {sections.map((s, i) => (
            <section key={i}>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "0 0 0.5rem", color: T.text }}>{s.heading}</h2>
              {Array.isArray(s.body) ? (
                <ul style={{ margin: 0, paddingLeft: "1.15rem", color: T.soft, lineHeight: 1.7 }}>
                  {s.body.map((li, j) => <li key={j} style={{ marginBottom: "0.35rem" }}>{li}</li>)}
                </ul>
              ) : (
                <p style={{ margin: 0, color: T.soft, lineHeight: 1.7 }}>{s.body}</p>
              )}
            </section>
          ))}
        </div>

        <p style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: `1px solid ${T.line}`, color: T.faint, fontSize: "0.85rem", lineHeight: 1.6 }}>
          Questions? Reach us at <a href="mailto:hello@careervibe.app" style={{ color: T.accent, fontWeight: 600 }}>hello@careervibe.app</a>.
        </p>
      </main>
    </div>
  );
}
