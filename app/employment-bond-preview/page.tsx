"use client";
import React, { useEffect, useState, Suspense, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { translateText, speakText, SpeechHandle } from '../utils/translator';

function PreviewContent() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [body, setBody] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<SpeechHandle | null>(null);

  useEffect(() => {
    // 100% WORD-FOR-WORD FROM PDF
    const template = `SERVICE BOND AGREEMENT

This Agreement is made on this ______ day of ____________, 20____ between:
(Company Name) ____________________, having its registered office at ________________________________________________________________ hereinafter referred to as the "Company", AND
Mr/Ms ____________________ residing at ________________________________________________________________ hereinafter referred to as the "Employee".

WHEREAS:
The Company has agreed to provide training and employment to the Employee, and the Employee has agreed to serve the Company under the terms and conditions mentioned below.

1. Service Period
The Employee agrees to serve the Company for a minimum period of ______ years from the date of joining.

2. Training
The Company shall provide professional/technical training to the Employee. The cost of training is borne by the Company.

3. Bond Amount
If the Employee leaves the Company before completion of the agreed service period, the Employee agrees to pay a sum of Rs. ____________ as compensation towards training and administrative costs.

4. Confidentiality
The Employee shall not disclose any confidential information, trade secrets, or client data during or after employment with the Company.

5. Termination
Either party may terminate the employment as per company policy. Bond conditions shall apply if the Employee resigns before the completion of the service period.

6. Jurisdiction
This Agreement shall be governed by and construed in accordance with the laws of India. Courts at ____________________ shall have exclusive jurisdiction.

IN WITNESS WHEREOF, the parties hereto have signed this Agreement on the day and year first above written.

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
      const final = lang !== 'en' ? await translateText(template, lang) : template;
      setBody(final);
    };
    load();
  }, [lang]);

  return (
    <div style={{ padding: '40px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto', background: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: 'bold' }}>SERVICE BOND PREVIEW</h2>
        <div style={{ whiteSpace: 'pre-line', lineHeight: '2.0', fontSize: '18px', textAlign: 'justify', border: '1px solid #e2e8f0', padding: '40px', borderRadius: '10px' }}>
          {body || "Loading Template..."}
        </div>
        <button 
          onClick={() => router.push('/employment-bond-form')} 
          style={{ display: 'block', width: '100%', marginTop: '30px', padding: '15px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Proceed to Fill 17 Details →
        </button>
      </div>
    </div>
  );
}

export default function BondPreview() { return <Suspense fallback={<div>Loading...</div>}><PreviewContent /></Suspense>; }