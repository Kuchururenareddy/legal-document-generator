"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT TRANSLATION LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { translateText } from '../utils/translator';

export default function CancellationPlotPreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [translatedBody, setTranslatedBody] = useState("");
  const [translatedTitle, setTranslatedTitle] = useState("DEED OF REVOCATION");

  // 3. FULL ENGLISH CONTENT (PRESERVED)
  const englishBody = `
    This deed of REVOCATION is made and executed this ____ day of __________, 2025, By and between:- 
    
    Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter Called the First Party) of The First Part.
    
    IN FAVOUR OF
    
    Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter Called the Second Party) of the Second Part.
    
    WHEREAS by a deed of sale dated ___ day of __________, ________ executed between the same parties which was registered Doct.No.______/______ at S.R.O.Bhongir, (hereinafter called the Principal Deed).
    
    WHEREAS the VENDEE did not actually pay the consideration amount the FIRST PARTY despite repeated request to pay the consideration and the VENDEE did not comply the request of the FIRST PARTY, hence as a lost resort the FIRST PARTY hereby decided to cancel the Doct.No.______/____________, forthwith and the possession of the said property was not given to the VENDEE.
    
    WHEREAS the property stands on the name of the FIRST PARTY in the Municipal records and it has been paying the taxes ever since. The original document as today in the custody of FIRST PARTY Only.
    
    WHEREAS Under the above mentioned circumstances it is found necessary to cancel the Principal deed since VENDEE did not comply with the provisions of Indian contract Act.
    
    NOW THEREFORE THIS DEED OF REVOCATION WITNESSES AS FOLLOWS:
    
    The FIRST PARTY hereby cancel and null and Void the Principal deed which is hereby declared as null and void and of no effect. The FIRST PARTY has not received any consideration for the registration of this deed of REVOCATION.
    
    SCHEDULE OF THE PROPERTY: ALL THAT THE Open Plot bearing No.____, in Sy.No.____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________.
    
    BOUNDRIES AS FOLLOWS: NORTH: ________, SOUTH: ________, EAST: ________, WEST: ________.
    
    In witness the FIRST PARTY AND SECOND PARTY has signed this deed of REVOCATION on the date first above mentioned in the presence of the following witnesses.
    
    WITNESSES: 1. ____________________ 2. ____________________
  `;

  // 4. TRIGGER TRANSLATION (ONLY IF NOT ENGLISH)
  useEffect(() => {
    async function handleAutoTranslation() {
      if (lang !== 'en') {
        const title = await translateText("DEED OF REVOCATION", lang);
        const body = await translateText(englishBody, lang);
        setTranslatedTitle(title);
        setTranslatedBody(body);
      } else {
        // Default to English instantly
        setTranslatedTitle("DEED OF REVOCATION");
        setTranslatedBody(englishBody);
      }
    }
    handleAutoTranslation();
  }, [lang]);

  const backBtnStyle = { marginBottom: '20px', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', fontWeight: 'bold' };
  const proceedBtnStyle = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px' };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', padding: '40px' }}>
      <div style={{ backgroundColor: 'white', padding: '60px', maxWidth: '900px', margin: '0 auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: 'serif' }}>
        
        {/* 5. ADD THE LANGUAGE SWITCHER */}
        <LanguageSwitcher />

        <button onClick={() => router.push('/plot-details')} style={backBtnStyle}>
          ← {t.backToSelection || "Back to Selection"}
        </button>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '22px', marginBottom: '30px' }}>
          {translatedTitle}
        </h1>
        
        <div style={{ lineHeight: '2.2', color: '#1e293b', textAlign: 'justify', fontSize: '15px', whiteSpace: 'pre-line' }}>
          {/* 6. DYNAMIC CONTENT DISPLAY */}
          {translatedBody}
        </div>

        <button onClick={() => router.push('/cancellation-plot-form')} style={proceedBtnStyle}>
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}