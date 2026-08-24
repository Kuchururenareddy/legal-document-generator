"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState("Counsel");
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("userFullName");
    if (saved) setDisplayName(saved);
  }, []);

  return (
    <div className="ld-page overflow-hidden">
      <aside className={`ld-sidebar ${isSidebarOpen ? "open" : ""}`} aria-hidden={!isSidebarOpen}>
        <div className="mb-8 border-b border-white/10 pb-6">
          <p className="m-0 text-xs tracking-[0.14em] text-white/60">VERIFIED COUNSEL</p>
          <p className="m-0 mt-1 text-lg font-semibold">{displayName}</p>
          <p className="m-0 mt-1 text-xs text-white/50">ID: COUNSEL-9921</p>
        </div>
        <nav className="flex flex-col gap-2">
          <button type="button" className="side-link" onClick={() => router.push("/welcome")}>Home Dashboard</button>
          <button type="button" className="side-link" onClick={() => router.push("/explore")}>Create a Document</button>
          <button type="button" className="side-link" onClick={() => router.push("/vault")}>View Saved Documents</button>
          <button type="button" className="side-link mt-4 text-[#f0c7c7]" onClick={() => router.push("/")}>Logout</button>
        </nav>
      </aside>

      <header className="ld-topbar">
        <div className="flex items-center gap-4">
          <button type="button" className="ld-menu" aria-label="Open menu" onClick={() => setIsSidebarOpen(true)}>
            <span /><span /><span />
          </button>
          <div className="ld-brand">
            LegalDoc <span>Assist</span>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center px-6 pt-14 text-center">
        <h1 className="ld-title" style={{ fontSize: 44 }}>Welcome to LegalDoc Assist</h1>
        <p className="ld-subtitle max-w-xl">Efficient, professional, and simplified legal documentation.</p>

        <div className="grid w-[min(900px,100%)] grid-cols-1 gap-6 md:grid-cols-2">
          <button
            type="button"
            className="ld-card text-center"
            onClick={() => router.push("/guides")}
            onMouseEnter={() => setHoveredCard("guides")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ borderColor: hoveredCard === "guides" ? "#123056" : "#d5dbe6" }}
          >
            <h2 className="m-0 text-xl font-semibold text-[#0b1f3a]">Required Documents<br />for Registration</h2>
            <p className="mt-3 text-sm text-[#5c6776]">Checklist for all legal property filings</p>
          </button>
          <button
            type="button"
            className="ld-card text-center"
            onClick={() => router.push("/explore")}
            onMouseEnter={() => setHoveredCard("explore")}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ borderColor: hoveredCard === "explore" ? "#123056" : "#d5dbe6" }}
          >
            <h2 className="m-0 text-xl font-semibold text-[#0b1f3a]">Explore<br />Template Vault</h2>
            <p className="mt-3 text-sm text-[#5c6776]">Professional Deeds, SPAs, and Agreements</p>
          </button>
        </div>
      </main>

      {isSidebarOpen && (
        <div className="ld-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
}
