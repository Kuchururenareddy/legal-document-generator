"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const houseDocuments = [
  { title: "House Sale Deed", desc: "Primary legal instrument for the absolute transfer of house ownership.", path: "/house-sale-deed-info" },
  { title: "Agreement of Sale", desc: "The foundational contract outlining terms before the final registration.", path: "/agreement-of-sale-house-preview" },
  { title: "Gift Sale Deed", desc: "Legal document for the transfer of house property as a gift to family or others.", path: "/gift-deed-house-preview" },
  { title: "Special Power of Attorney", desc: "Authorizes a specific person to act on your behalf for house-related legalities.", path: "/spa-house-preview" },
  { title: "Cancellation House Deed", desc: "A legal document used to nullify or cancel a previously registered house deed.", path: "/cancellation-house-preview" },
];

export default function HouseDocumentsPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const documents = houseDocuments;

  const filtered = useMemo(
    () => documents.filter((d) => `${d.title} ${d.desc}`.toLowerCase().includes(query.toLowerCase())),
    [documents, query]
  );

  return (
    <div className="ld-page flex min-h-screen items-center justify-center px-4 py-10">
      <div className="ld-panel relative w-[min(1050px,90%)] p-8 md:p-12">
        <Link href="/explore" className="ld-btn-text absolute left-6 top-6">
          ← Back
        </Link>
        <h1 className="ld-title mt-4 text-center" style={{ fontSize: 32 }}>House Documents</h1>
        <p className="ld-subtitle text-center">Select the legal document you wish to generate or review.</p>
        <div className="mx-auto mb-10 max-w-[750px]">
          <label htmlFor="house-search" className="sr-only">Search House Documents</label>
          <input
            id="house-search"
            type="search"
            className="ld-input"
            placeholder="Search House Documents (e.g., Sale Deed, Agreement of Sale)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="ld-grid-2">
          {filtered.map((doc) => (
            <button type="button" key={doc.path} className="ld-card text-left" onClick={() => router.push(doc.path)}>
              <h3 className="m-0 mb-1 text-lg font-semibold text-[#0b1f3a]">{doc.title}</h3>
              <p className="m-0 text-[13px] leading-6 text-[#5c6776]">{doc.desc}</p>
              <span className="mt-3 inline-block text-xs font-bold text-[#123056]">Preview Now →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
