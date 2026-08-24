"use client";
import React, { useEffect, useState, Suspense, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext'; 
import { translateText } from '../utils/translator';

interface BondData {
  day: string; month: string; year: string; compName: string; compAddress: string; 
  empName: string; empAddress: string; bondYears: string; joiningDate: string; 
  bondAmount: string; jurisdiction: string; authSignatory: string; 
  authDesignation: string; empSignName: string; signDate: string; 
  witness1: string; witness2: string;
}

function FinalContent() {
  const router = useRouter();
  const { lang } = useLanguage(); // Resolves 'Cannot find name lang'
  const [finalBody, setFinalBody] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  const generate = useCallback(async (f: BondData) => {
    // 100% WORD-FOR-WORD - NO BLANKS
    const text = `SERVICE BOND AGREEMENT

This Agreement is made on this ${f.day || "N/A"} day of ${f.month || "N/A"}, 20${f.year || "N/A"} between:
${f.compName || "N/A"}, having its registered office at ${f.compAddress || "N/A"} hereinafter referred to as the "Company", AND
Mr/Ms ${f.empName || "N/A"} residing at ${f.empAddress || "N/A"} hereinafter referred to as the "Employee".

WHEREAS:
The Company has agreed to provide training and employment to the Employee, and the Employee has agreed to serve the Company under the terms and conditions mentioned below.

1. Service Period
The Employee agrees to serve the Company for a minimum period of ${f.bondYears || "N/A"} years from the date of joining, being ${f.joiningDate || "N/A"}.

2. Training
The Company shall provide professional/technical training to the Employee. The cost of training is borne by the Company.

3. Bond Amount
If the Employee leaves the Company before completion of the agreed service period, the Employee agrees to pay a sum of Rs. ${f.bondAmount || "N/A"} as compensation towards training and administrative costs.

4. Confidentiality
The Employee shall not disclose any confidential information, trade secrets, or client data during or after employment with the Company.

5. Termination
Either party may terminate the employment as per company policy. Bond conditions shall apply if the Employee resigns before the completion of the service period.

6. Jurisdiction
This Agreement shall be governed by and construed in accordance with the laws of India. Courts at ${f.jurisdiction || "N/A"} shall have exclusive jurisdiction.

IN WITNESS WHEREOF, the parties hereto have signed this Agreement on the day and year first above written.

For the Company:
Signature: ________________
Name & Designation: ${f.authSignatory || "N/A"}, ${f.authDesignation || "N/A"}
Company Seal

Employee:
Signature: ________________
Name: ${f.empSignName || "N/A"}
Date: ${f.signDate || "N/A"}

Witness 1:
Name & Signature: ${f.witness1 || "N/A"}

Witness 2:
Name & Signature: ${f.witness2 || "N/A"}`;

    const final = lang !== 'en' ? await translateText(text, lang) : text;
    setFinalBody(final);
  }, [lang]);

  useEffect(() => {
    const saved = localStorage.getItem('bondData');
    if (saved) {
      const parsed = JSON.parse(saved);
      generate(parsed);
      setDataLoaded(true);
    }
  }, [generate]);

  if (!dataLoaded) return <div style={{padding: '50px', textAlign: 'center'}}>Loading data from form...</div>;

  return (
    <div style={{ padding: '60px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div className="no-print" style={{ maxWidth: '850px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => router.back()} style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #ccc' }}>← Back to Form</button>
        <button onClick={() => window.print()} style={{ padding: '10px 30px', backgroundColor: '#10b981', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>🖨️ Print Final Bond</button>
      </div>
      
      <div style={{ backgroundColor: 'white', padding: '80px 60px', maxWidth: '850px', margin: '0 auto', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', fontFamily: "'Times New Roman', serif" }}>
        <div style={{ whiteSpace: 'pre-line', lineHeight: '2.2', fontSize: '18px', textAlign: 'justify' }}>
          {finalBody || "Finalizing document text..."}
        </div>
      </div>
    </div>
  );
}

export default function BondDraft() {
  return <Suspense fallback={<div>Generating Document...</div>}><FinalContent /></Suspense>;
}