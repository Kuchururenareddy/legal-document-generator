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
    const loadTemplate = async () => {
      // 100% WORD-TO-WORD FROM OFFER LETTER PDF 
      const template = `OFFER LETTER
Date: ___________

To,
Mr/Ms ______________________
Address: ________________________________________________

Dear Candidate, [cite: 6]
We are pleased to inform you that you have been selected for the position of ______________________ with ______________________ based on your performance in the selection process. [cite: 7-9]

1. Position: ______________________ [cite: 10]
2. Date of Joining: ___________ [cite: 11]
3. Work Location: ______________________ [cite: 12]
4. Employment Type: Full Time / Probationary [cite: 13]
5. Salary / Stipend: Rs. ___________ per month [cite: 14, 17]

Terms and Conditions: [cite: 15]
• You will be on probation for a period of ___________ months. [cite: 16, 18]
• You shall abide by all company rules, policies, and code of conduct. [cite: 20]
• You may be required to sign a Service Agreement / NDA if applicable. [cite: 21]
• Your employment may be terminated by either party with prior notice as per company policy. [cite: 22]

Please sign and return a copy of this letter as a token of acceptance. [cite: 23]
We welcome you to our organization and look forward to a successful association. [cite: 24]

Sincerely, [cite: 25]
Authorized Signatory [cite: 26]
Company Seal [cite: 27]

ACCEPTANCE [cite: 28]
I, ______________________, hereby accept the above offer and agree to the terms and conditions mentioned herein. [cite: 29-30, 33]

Signature of Candidate: ________________ [cite: 31]
Date: ________________ [cite: 32]`;
      
      const final = lang !== 'en' ? await translateText(template, lang) : template;
      setBody(final);
    };
    loadTemplate();
  }, [lang]);

  const handleListen = async () => {
    if (isSpeaking || !body) return;
    setIsSpeaking(true);
    // Remove underscores so TTS provides a clean reading
    const voiceCode = lang === 'hi' ? 'hi-IN' : lang === 'te' ? 'te-IN' : 'en-IN';
    const audio = await speakText(body.replace(/_/g, ""), voiceCode);
    if (audio) { 
      audioRef.current = audio; 
      audio.onended = () => setIsSpeaking(false); 
      audio.onerror = () => setIsSpeaking(false);
    } else { 
      setIsSpeaking(false); 
    }
  };

  const handleStop = () => { 
    if (audioRef.current) { 
      audioRef.current.pause(); 
      audioRef.current.currentTime = 0;
      setIsSpeaking(false); 
      audioRef.current = null;
    } 
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', background: '#f1f5f9' }}>
      <div style={boxS}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={navBtn}>← Back</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            {!isSpeaking ? (
              <button onClick={handleListen} style={listenBtn}>🔊 Listen Draft</button>
            ) : (
              <button onClick={handleStop} style={stopBtn}>🛑 Stop Speaking</button>
            )}
          </div>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>OFFER LETTER - PREVIEW</h2>
        <div style={sheetS}>{body || "Loading Template..."}</div>
        <button 
          onClick={() => router.push('/employment-offer-form')} 
          style={nextBtn}
        >
          Proceed to Fill Details →
        </button>
      </div>
    </div>
  );
}

export default function OfferPreview() { return <Suspense fallback={<div>Loading...</div>}><PreviewContent /></Suspense>; }

// Styles with proper TypeScript typing to avoid additional errors
const boxS: React.CSSProperties = { maxWidth: '850px', margin: '0 auto', background: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' };
const sheetS: React.CSSProperties = { whiteSpace: 'pre-line', lineHeight: '2.0', fontSize: '18px', textAlign: 'justify', border: '1px solid #e2e8f0', padding: '40px', borderRadius: '10px' };
const navBtn: React.CSSProperties = { padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: 'white' };
const listenBtn: React.CSSProperties = { padding: '10px 20px', backgroundColor: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const stopBtn: React.CSSProperties = { padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const nextBtn: React.CSSProperties = { display: 'block', width: '100%', marginTop: '30px', padding: '15px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' };