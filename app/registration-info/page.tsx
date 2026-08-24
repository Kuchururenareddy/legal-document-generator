"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationInfo() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const unavailable = () => {
    setMessage("This document is not part of the current generation workflow. Please use Sale Agreement or return to document selection.");
  };

  return (
    <div className="ld-page flex min-h-screen items-center justify-center px-4 py-10">
      <div className="ld-panel w-[min(1000px,90%)] p-8 md:p-12">
        <button type="button" className="ld-btn-text mb-5" onClick={() => router.push("/welcome")}>
          ← Back to Dashboard
        </button>
        <h1 className="ld-title text-center" style={{ fontSize: 28 }}>
          Required Documents for Registration
        </h1>
        {message && (
          <p className="mb-4 text-sm text-[#8f2d2d]" role="status">{message}</p>
        )}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="ld-card">
            <h3 className="mb-5 border-b border-[#d5dbe6] pb-2 text-[#0b1f3a]">Documents to Generate</h3>
            <div className="mb-5 flex items-center justify-between">
              <span>Sale Agreement</span>
              <button type="button" className="ld-btn-outline" onClick={() => router.push("/house-sale-deed-form")}>
                Generate Now
              </button>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <span>Affidavit of Title</span>
              <button type="button" className="ld-btn-outline" onClick={unavailable}>Generate Now</button>
            </div>
            <div className="flex items-center justify-between">
              <span>No Objection Certificate (NOC)</span>
              <button type="button" className="ld-btn-outline" onClick={unavailable}>Generate Now</button>
            </div>
          </section>
          <section className="ld-card">
            <h3 className="mb-5 border-b border-[#d5dbe6] pb-2 text-[#0b1f3a]">Required Attachments (to be uploaded)</h3>
            <div className="mb-5 text-[15px]">PAN Card Copy</div>
            <div className="mb-5 text-[15px]">Aadhaar Card Copy</div>
            <div className="mb-5 text-[15px]">Latest Property Tax Receipt</div>
            <div className="mb-5 text-[15px]">Passport Size Photographs</div>
          </section>
        </div>
      </div>
    </div>
  );
}
