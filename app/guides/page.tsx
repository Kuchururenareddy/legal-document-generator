"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function RegistrationGuides() {
  const router = useRouter();

  const requirements = [
    { id: "01", category: "Identity Proofs", items: ["Aadhar Card of all parties", "PAN Card (Mandatory)", "Passport size photographs"] },
    { id: "02", category: "Property Documents", items: ["Original Title Deed", "Encumbrance Certificate (EC)", "Latest Tax Receipts", "Property Sketch / Map & Boundaries"] },
    { id: "03", category: "Stamp Duty & Fees", items: ["Stamp Duty Receipt", "Registration Fee Receipt", "Challan / Online Payment Proof"] },
    { id: "04", category: "Ownership Proof", items: ["Previous Sale Deed", "Chain of Ownership (Possession Link)", "Survey / CTS Number Verification"] },
    { id: "05", category: "Approvals & NOC", items: ["Building Plan Approval (for Houses)", "Layout Approval (for Plots)", "No Objection Certificate (NOC)"] },
    { id: "06", category: "Witness Requirements", items: ["Two witnesses with ID proofs", "Physical presence during registration"] },
    { id: "07", category: "AI Legal Check", items: ["Missing Document Verification", "AI Risk Flagging for EC/Tax", "Automatic Required Doc Suggestions"] },
  ];

  return (
    <div className="ld-page">
      <nav className="ld-topbar">
        <div className="flex items-center gap-5">
          <button type="button" className="ld-btn-outline" onClick={() => router.back()}>
            ← Back
          </button>
          <span className="ld-brand">LegalDoc <span>Assist</span></span>
        </div>
      </nav>
      <main className="mx-auto max-w-[1200px] px-5 py-14">
        <header className="mb-12 text-center">
          <h1 className="ld-title" style={{ fontSize: 40 }}>Registration Checklist</h1>
          <p className="ld-subtitle">Ensure you have these documents ready before visiting the Sub-Registrar office.</p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {requirements.map((req) => (
            <article key={req.id} className="ld-card">
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-[#0b1f3a] px-2.5 py-1 text-xs font-bold text-white">{req.id}</span>
                <h3 className="m-0 text-lg font-semibold text-[#0b1f3a]">{req.category}</h3>
              </div>
              <ul className="m-0 list-disc pl-5 leading-8 text-[#5c6776]">
                {req.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
