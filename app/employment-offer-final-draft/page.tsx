"use client";
import React, { useEffect, useState, Suspense, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
// ADD THESE MISSING IMPORTS
import { useLanguage } from '../context/LanguageContext'; 
import { translateText, speakText, SpeechHandle } from '../utils/translator';

interface OfferData {
  offerDate?: string;    empName?: string;         empAddress?: string;
  position?: string;     compName?: string;        joiningDate?: string;
  workLocation?: string; salary?: string;          probation?: string;
  authSignatory?: string; authDesignation?: string; acceptanceName?: string;
  acceptanceDate?: string;
}

function FinalDraftContent() {
  const router = useRouter();
  // INITIALIZE MISSING lang HOOK
  const { lang } = useLanguage(); 
  const [data, setData] = useState<OfferData | null>(null);
  const [finalBody, setFinalBody] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<SpeechHandle | null>(null);

  const generateFinalDocument = useCallback(async (f: OfferData) => {
    // WORD-TO-WORD WITH ALL 13 BLANKS
    const text = `OFFER LETTER
Date: ${f.offerDate || "___________"}

To,
Mr/Ms ${f.empName || "______________________"}
Address: ${f.empAddress || "________________________________________________"}

Dear Candidate,
We are pleased to inform you that you have been selected for the position of ${f.position || "______________________"} with ${f.compName || "______________________"} based on your performance in the selection process.

1. Position: ${f.position || "______________________"}
2. Date of Joining: ${f.joiningDate || "___________"}
3. Work Location: ${f.workLocation || "______________________"}
4. Employment Type: Full Time / Probationary
5. Salary / Stipend: Rs. ${f.salary || "___________"} per month

Terms and Conditions:
• You will be on probation for a period of ${f.probation || "___________"} months.
• You shall abide by all company rules, policies, and code of conduct.
• You may be required to sign a Service Agreement / NDA if applicable.
• Your employment may be terminated by either party with prior notice as per company policy.

Please sign and return a copy of this letter as a token of acceptance.
We welcome you to our organization and look forward to a successful association.

Sincerely,
${f.authSignatory || "________________"}
${f.authDesignation || "________________"}
Company Seal

ACCEPTANCE
I, ${f.acceptanceName || "______________________"}, hereby accept the above offer and agree to the terms and conditions mentioned herein.

Signature of Candidate: ________________
Date: ${f.acceptanceDate || "________________"}`;

    try {
      const final = lang !== 'en' ? await translateText(text, lang) : text;
      setFinalBody(final); 
    } catch (error) {
      console.error("Generation error:", error);
      setFinalBody(text); 
    }
  }, [lang]); // Removed setFinalBody from deps as it's stable

  useEffect(() => {
    const saved = localStorage.getItem('employmentData');
    if (saved) {
      const parsed = JSON.parse(saved);
      setData(parsed);
      generateFinalDocument(parsed);
    }
  }, [generateFinalDocument]);

  // ADD TTS HANDLERS TO MATCH UI
  const handleListen = async () => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    const audio = await speakText(finalBody.replace(/_/g, ""), lang === 'hi' ? 'hi-IN' : 'en-IN');
    if (audio) {
      audioRef.current = audio;
      audio.onended = () => setIsSpeaking(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsSpeaking(false);
    }
  };

  if (!data) return <div style={{textAlign: 'center', padding: '50px'}}>Loading Final Draft...</div>;

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#f1f5f9' }}>
      <div className="no-print" style={navWrapper}>
        <button onClick={() => router.back()} style={navBtn}>← Back</button>
        <div style={{ display: 'flex', gap: '10px' }}>
          {!isSpeaking ? (
            <button onClick={handleListen} style={listenBtn}>🔊 Listen Draft</button>
          ) : (
            <button onClick={handleStop} style={stopBtn}>🛑 Stop Speaking</button>
          )}
          <button onClick={() => window.print()} style={printBtn}>🖨️ Print Document</button>
        </div>
      </div>
      <div style={documentSheet}>
        <div style={{ whiteSpace: 'pre-line', lineHeight: '2.0', fontSize: '18px', textAlign: 'justify' }}>
          {finalBody || "Preparing Final Document..."}
        </div>
      </div>
    </div>
  );
}

export default function OfferFinalDraft() {
  return <Suspense fallback={<div>Loading...</div>}><FinalDraftContent /></Suspense>;
}

// CSS OBJECTS
const navWrapper: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', maxWidth: '850px', margin: '0 auto 20px auto' };
const navBtn = { padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', fontWeight: 'bold' };
const listenBtn = { ...navBtn, backgroundColor: '#6366f1', color: 'white', border: 'none' };
const stopBtn = { ...navBtn, backgroundColor: '#ef4444', color: 'white', border: 'none' };
const printBtn = { ...navBtn, backgroundColor: '#10b981', color: 'white', border: 'none' };
const documentSheet: React.CSSProperties = { backgroundColor: 'white', padding: '80px 60px', maxWidth: '850px', margin: '0 auto', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', fontFamily: "'Times New Roman', serif" };