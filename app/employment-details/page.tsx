"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EmploymentDetails() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const docs = [
    {
      id: "offer",
      title: "Offer Letter",
      desc: "Formal selection document including full terms and conditions.",
      route: "/employment-offer-preview",
    },
    {
      id: "bond",
      title: "Service Bond Agreement",
      desc: "Agreement for minimum service period and training cost recovery.",
      route: "/employment-bond-preview",
    },
    {
      id: "nca",
      title: "Non-Compete Agreement (NCA)",
      desc: "Protects business interests from competitive activities.",
      route: "/employment-nca-preview",
    },
  ];

  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ld-page px-5 py-14 text-center">
      <h1 className="ld-title" style={{ fontSize: 36 }}>Employment Documents</h1>
      <p className="ld-subtitle">Select a document to begin the generation process.</p>
      <div className="mx-auto mb-10 max-w-[600px]">
        <label htmlFor="emp-search" className="sr-only">Search employment documents</label>
        <input
          id="emp-search"
          placeholder="Search for a document (e.g., Bond, Offer)..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ld-input"
        />
      </div>
      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 text-left">
        {filteredDocs.map((doc) => (
          <div key={doc.id} className="ld-card flex items-start justify-between gap-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">{doc.title}</h3>
              <p className="mb-4 text-sm leading-6 text-[#5c6776]">{doc.desc}</p>
              <button type="button" className="ld-btn-primary" onClick={() => router.push(doc.route)}>
                Preview Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
