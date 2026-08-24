"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PlotDetailsPage() {
  const router = useRouter();

  const plotDocuments = [
    { title: "Special Power of Attorney", desc: "Authorize a representative to manage plot legalities.", path: "/spa-plot-preview" },
    { title: "Cancellation Deed for Plot", desc: "Revoke a previously registered plot sale agreement.", path: "/cancellation-plot-preview" },
    { title: "Partition Deed for Plot", desc: "Legal division of plot property among joint owners.", path: "/partition-plot-preview" },
    { title: "Gift Deed for Plot", desc: "Transfer plot ownership as a gift to family members.", path: "/gift-plot-preview" },
    { title: "Agreement of Sale (Plot)", desc: "Foundational contract for plot purchase terms.", path: "/agreement-plot-preview" },
    { title: "Death Sale Deed (Plot)", desc: "Plot transfer specifically involving deceased owners.", path: "/death-sale-deed-preview" },
  ];

  return (
    <div className="ld-page flex min-h-screen items-center justify-center px-4 py-10">
      <div className="ld-panel relative w-[min(1050px,90%)] p-8 md:p-12">
        <Link href="/explore" className="ld-btn-text absolute left-6 top-6">← Back</Link>
        <h1 className="ld-title mt-4 text-center" style={{ fontSize: 32 }}>Plot Documents</h1>
        <p className="ld-subtitle text-center">Select the legal document you wish to generate for your plot property.</p>
        <div className="ld-grid-2">
          {plotDocuments.map((doc) => (
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
