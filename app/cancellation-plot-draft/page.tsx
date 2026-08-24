"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// IMPORT UTILITIES
import { useLanguage } from '../context/LanguageContext';
import { translateText, speakText, SpeechHandle } from '../utils/translator';

interface RevocationData {
  execDay?: string; execMonth?: string; execYear?: string;
  p1Name?: string; p1Father?: string; p1Relation?: string; p1Age?: string; p1Occ?: string; p1Address?: string; p1Aadhar?: string;
  p2Name?: string; p2Father?: string; p2Relation?: string; p2Age?: string; p2Occ?: string; p2Address?: string; p2Aadhar?: string;
  pdDay?: string; pdMonth?: string; pdYear?: string; pdDocNo?: string; pdYearReg?: string;
  plotNo?: string; surveyNo?: string; areaSqYds?: string; areaSqMtrs?: string; situation?: string;
  north?: string; south?: string; east?: string; west?: string;
}

export default function CancellationPlotDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<RevocationData | null>(null);
  const [translatedBody, setTranslatedBody] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<SpeechHandle | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('cancellationPlotData');
    if (saved) {
      const parsed = JSON.parse(saved);
      setData(parsed);
      handleTranslation(parsed);
    }
  }, [lang]);

  const handleTranslation = async (formData: RevocationData) => {
    // REMOVED BLANKS: Every field now defaults to an empty string if missing
    const fullEnglishDraft = `DEED OF REVOCATION
    This deed of REVOCATION is made and executed this ${formData.execDay || ""} day of ${formData.execMonth || ""}, ${formData.execYear || "2026"}, By and between:- 
    
    Mr/Mrs ${formData.p1Name || ""} ${formData.p1Relation || "S/O"} ${formData.p1Father || ""}, AGED ${formData.p1Age || ""} YEARS, OCCUPATION: ${formData.p1Occ || ""}, R/O H.NO.${formData.p1Address || ""}. AADHAR NO.${formData.p1Aadhar || ""}. (Hereinafter Called the First Party) of The First Part.
    
    IN FAVOUR OF
    
    Mr/Mrs ${formData.p2Name || ""} ${formData.p2Relation || "S/O"} ${formData.p2Father || ""}, AGED ${formData.p2Age || ""} YEARS, OCCUPATION: ${formData.p2Occ || ""}, R/O H.NO.${formData.p2Address || ""}. AADHAR NO.${formData.p2Aadhar || ""}. (Hereinafter Called the Second Party) of the Second Part.
    
    WHEREAS by a deed of sale dated ${formData.pdDay || ""} day of ${formData.pdMonth || ""}, ${formData.pdYear || ""} executed between the same parties which was registered Doct.No.${formData.pdDocNo || ""}/${formData.pdYearReg || ""} at S.R.O. Bhongir, (hereinafter called the Principal Deed).
    
    WHEREAS the VENDEE did not actually pay the consideration amount the FIRST PARTY despite repeated request to pay the consideration. Hence as a lost resort the FIRST PARTY hereby decided to cancel the Doct.No.${formData.pdDocNo || ""}/${formData.pdYearReg || ""}, forthwith and the possession of the property was not given to the VENDEE.
    
    WHEREAS the property stands on the name of the FIRST PARTY in the Municipal records. The original document remains in the custody of FIRST PARTY Only.
    
    WHEREAS Under the above mentioned circumstances it is found necessary to cancel the Principal deed since VENDEE did not comply with the provisions of Indian contract Act.
    
    NOW THEREFORE THIS DEED OF REVOCATION WITNESSES AS FOLLOWS:
    
    The FIRST PARTY hereby cancel and null and Void the Principal deed which is hereby declared as null and void and of no effect. The FIRST PARTY has not received any consideration for the registration of this deed of REVOCATION.
    
    SCHEDULE OF THE PROPERTY: ALL THAT THE Open Plot bearing No.${formData.plotNo || ""}, in Sy.No.${formData.surveyNo || ""}, admeasuring an area of ${formData.areaSqYds || ""} Sq.Yards, Situated at ${formData.situation || ""}.
    
    BOUNDARIES AS FOLLOWS: NORTH: ${formData.north || ""}, SOUTH: ${formData.south || ""}, EAST: ${formData.east || ""}, WEST: ${formData.west || ""}.
    
    In witness the FIRST PARTY AND SECOND PARTY has signed this deed of REVOCATION on the date first above mentioned in the presence of the following witnesses.`;

    if (lang === 'en') {
      setTranslatedBody(fullEnglishDraft);
    } else {
      const translated = await translateText(fullEnglishDraft, lang);
      setTranslatedBody(translated);
    }
  };

  const handleListen = async () => {
    if (isSpeaking && currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    // VOICE MAPPING: Ensures Hindi/Telugu play correctly
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    const audio = await speakText(translatedBody, voiceMap[lang] || 'en-IN');
    
    if (audio) {
      setCurrentAudio(audio);
      audio.onended = () => {
        setIsSpeaking(false);
        setCurrentAudio(null);
      };
      audio.onerror = () => setIsSpeaking(false);
    } else {
      setIsSpeaking(false);
    }
  };

  if (!data) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading Document...</div>;

  return (
    <div style={{ minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div className="no-print" style={navWrapper}>
        <button onClick={() => router.back()} style={navBtnStyle}>← Edit Form</button>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleListen} style={{ ...navBtnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1' }}>
            {isSpeaking ? '🛑 Stop' : '🔊 Listen Draft'}
          </button>
          <button onClick={() => window.print()} style={{ ...navBtnStyle, backgroundColor: '#0b1f3a' }}>Print to PDF</button>
        </div>
      </div>

      <div style={documentSheetStyle}>
        <h1 style={headerStyle}>DEED OF REVOCATION</h1>
        <div style={{ ...legalBodyStyle, whiteSpace: 'pre-line' }}>
          {translatedBody || "Processing Content..."}
        </div>

        <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={sigBlock}><div style={sigLine}></div><p><strong>FIRST PARTY</strong></p></div>
          <div style={sigBlock}><div style={sigLine}></div><p><strong>SECOND PARTY</strong></p></div>
        </div>
      </div>

      <style jsx global>{`
        @media print { .no-print { display: none !important; } body { background-color: white !important; } }
      `}</style>
    </div>
  );
}

// STYLES
const navWrapper = { maxWidth: '850px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between' };
const documentSheetStyle: React.CSSProperties = { backgroundColor: 'white', padding: '80px 60px', maxWidth: '850px', margin: '0 auto', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', fontFamily: "'Times New Roman', serif", color: '#000' };
const legalBodyStyle = { lineHeight: '2.2', textAlign: 'justify' as const, fontSize: '18px' };
const navBtnStyle = { padding: '12px 20px', borderRadius: '10px', border: 'none', color: 'white', backgroundColor: '#1e293b', cursor: 'pointer', fontWeight: 'bold' as const };
const sigBlock = { textAlign: 'center' as const };
const sigLine = { borderBottom: '2px solid black', width: '200px', marginBottom: '10px' };
const headerStyle = { textAlign: 'center' as const, textDecoration: 'underline', fontWeight: 'bold', fontSize: '24px', marginBottom: '40px' };