"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function PropertyTypePage() {
  const router = useRouter();

  return (
    <div className="ld-page flex min-h-screen items-center justify-center px-4">
      <div className="ld-panel w-[min(800px,90%)] p-10 text-center">
        <h1 className="ld-title" style={{ fontSize: 32 }}>Select Property Type</h1>
        <p className="ld-subtitle">Choose the category for your legal documentation</p>
        <div className="ld-grid-2">
          <button type="button" className="ld-card" onClick={() => router.push("/house-details")}>
            <h2 className="text-xl font-semibold text-[#0b1f3a]">House</h2>
          </button>
          <button type="button" className="ld-card" onClick={() => router.push("/plot-details")}>
            <h2 className="text-xl font-semibold text-[#0b1f3a]">Plot</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
