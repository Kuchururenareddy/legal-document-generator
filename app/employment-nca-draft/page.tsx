"use client";
import React, { useEffect, useState, Suspense, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext'; 
import { translateText } from '../utils/translator';

function FinalContent() {
  const { lang } = useLanguage(); // Resolves 'Cannot find name lang'
  const [finalBody, setFinalBody] = useState("");

  const generate = useCallback(async (f: any) => {
    // 100% Word-for-Word from source [cite: 41-78]
    const text = `NON-COMPETE AGREEMENT (NCA)

This Non-Compete Agreement is made on this ${f.day} day of ${f.month}, 20${f.year} between:
${f.compName}, having its registered office at ${f.compAddress} hereinafter referred to as the "Company", AND
[cite_start]Mr/Ms ${f.empName} residing at ${f.empAddress} hereinafter referred to as the "Employee". [cite: 41-49]

1. Purpose
[cite_start]The purpose of this Agreement is to protect the legitimate business interests, confidential information, and trade secrets of the Company during the period of employment. [cite: 50-51]

2. Non-Compete Obligation
[cite_start]During the term of employment, the Employee shall not directly or indirectly engage in any business, employment, or activity that competes with the business of the Company. [cite: 52-53]

3. Scope
[cite_start]This restriction applies to competing organizations, clients, or projects that are similar in nature to the work performed for the Company. [cite: 54-55]

4. Duration
[cite_start]This Agreement shall remain valid only during the period of employment with the Company. [cite: 56-57]

5. Limitation
[cite_start]This Agreement shall not restrict the Employee from seeking employment after termination, in accordance with applicable Indian laws. [cite: 58-59]

6. Breach
[cite_start]Any violation of this Agreement may result in disciplinary action or termination as per company policy. [cite: 60-61]

7. Governing Law & Jurisdiction
This Agreement shall be governed by the laws of India. [cite_start]Courts at ${f.jurisdiction} shall have exclusive jurisdiction. [cite: 62-65]

[cite_start]IN WITNESS WHEREOF, the parties hereto have executed this Agreement on the date first written above. [cite: 66]

For the Company:
Signature: ________________
Name & Designation: ${f.authSignatory}, ${f.authDesignation}
[cite_start]Company Seal [cite: 67-70]

Employee:
Signature: ________________
Name: ${f.empSignName}
[cite_start]Date: ${f.signDate} [cite: 71-74]

Witness 1:
[cite_start]Name & Signature: ${f.witness1} [cite: 75-76]

Witness 2:
[cite_start]Name & Signature: ${f.witness2} [cite: 77-78]`;

    const final = lang !== 'en' ? await translateText(text, lang) : text;
    setFinalBody(final);
  }, [lang]);

  useEffect(() => {
    const saved = localStorage.getItem('ncaData');
    if (saved) generate(JSON.parse(saved));
  }, [generate]);

  return (
    <div style={{ padding: '60px', background: 'white', minHeight: '100vh' }}>
      <div style={{ whiteSpace: 'pre-line', maxWidth: '850px', margin: '0 auto', fontSize: '18px', lineHeight: '2.2', textAlign: 'justify', fontFamily: 'serif' }}>
        {finalBody || "Generating Final NCA Document..."}
      </div>
      <button onClick={() => window.print()} style={{ display: 'block', margin: '40px auto', padding: '15px 40px', backgroundColor: '#10b981', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>🖨️ Print Final NCA</button>
    </div>
  );
}

export default function NCADraft() { return <Suspense fallback={<div>Loading...</div>}><FinalContent /></Suspense>; }