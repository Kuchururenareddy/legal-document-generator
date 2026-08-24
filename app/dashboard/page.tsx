"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function PremiumDashboard() {
  const router = useRouter();

  const features = [
    { title: "Property Selection", desc: "Select House or Plot documents", link: "/explore" },
    { title: "Drafting Vault", desc: "Access your saved legal drafts", link: "/vault" },
    { title: "Step-by-Step Guide", desc: "Registration process walkthrough", link: "/guides" },
  ];

  return (
    <div className="ld-page">
      <nav className="ld-topbar">
        <div className="ld-brand">LegalDoc<span>Assist</span></div>
        <button type="button" className="ld-btn-danger" onClick={() => router.push("/")}>
          Logout
        </button>
      </nav>
      <main className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
        <h1 className="ld-title" style={{ fontSize: 40 }}>Welcome, Counsel.</h1>
        <p className="ld-subtitle">Precision-driven legal document generation.</p>
        <div className="ld-grid-3">
          {features.map((item) => (
            <button type="button" key={item.title} className="ld-card text-left" onClick={() => router.push(item.link)}>
              <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">{item.title}</h3>
              <p className="m-0 text-sm leading-6 text-[#5c6776]">{item.desc}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
