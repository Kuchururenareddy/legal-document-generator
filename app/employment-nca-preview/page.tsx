"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translateText } from "../utils/translator";

function PreviewContent() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // 100% Word-for-word from PDF [cite: 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]
    const template = `NON-COMPETE AGREEMENT (NCA)

This Non-Compete Agreement is made on this day of ______ between: ______ 20 ______
(Company Name) ____________________, having its registered office at ________________________________________________________________ hereinafter referred to as the "Company", AND
Mr/Ms ____________________ residing at ________________________________________________________________ hereinafter referred to as the "Employee".

1. Purpose
The purpose of this Agreement is to protect the legitimate business interests, confidential information, and trade secrets of the Company during the period of employment.

2. Non-Compete Obligation
During the term of employment, the Employee shall not directly or indirectly engage in any business, employment, or activity that competes with the business of the Company.

3. Scope
This restriction applies to competing organizations, clients, or projects that are similar in nature to the work performed for the Company.

4. Duration
This Agreement shall remain valid only during the period of employment with the Company.

5. Limitation
This Agreement shall not restrict the Employee from seeking employment after termination, in accordance with applicable Indian laws.

6. Breach
Any violation of this Agreement may result in disciplinary action or termination as per company policy.

7. Governing Law & Jurisdiction
This Agreement shall be governed by the laws of India. Courts at ____________________ shall have exclusive jurisdiction.

IN WITNESS WHEREOF, the parties hereto have executed this Agreement on the date first written above.

For the Company:
Signature: ________________
Name & Designation: ________________
Company Seal

Employee:
Signature: ________________
Name: ________________
Date: ________________

Witness 1:
Name & Signature: ________________

Witness 2:
Name & Signature: ________________`;

    const load = async () => {
      try {
        const final = lang !== "en" ? await translateText(template, lang) : template;
        setBody(final);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while processing your request. Please try again.");
        setBody(template);
      }
    };
    load();
  }, [lang]);

  return (
    <div className="ld-page p-6 md:p-10">
      <div className="ld-panel mx-auto max-w-[850px] p-8 md:p-12">
        <h2 className="ld-title mb-8 text-center" style={{ fontSize: 24 }}>NCA PREVIEW</h2>
        {error && <p className="mb-4 text-sm text-[#8f2d2d]">{error}</p>}
        <div className="ld-doc">{body || "Loading Template..."}</div>
        <button
          type="button"
          className="ld-btn-primary mt-8 w-full"
          onClick={() => router.push("/employment-nca-form")}
        >
          Proceed to Fill NCA Details →
        </button>
      </div>
    </div>
  );
}

export default function NCAPreview() {
  return (
    <Suspense fallback={<div className="ld-page flex min-h-screen items-center justify-center">Loading…</div>}>
      <PreviewContent />
    </Suspense>
  );
}
