"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function SPAHouseForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    // Principal Details (I, Mr/Mrs...)
    pName: '', pRelation: 'S/O', pRelativeName: '', pAge: '', pOcc: '', pAddress: '', pAadhar: '', pResidingAt: '',
    
    // Attorney Details (Appoint Mr/Mrs...)
    aName: '', aRelation: 'S/O', aRelativeName: '', aAge: '', aOcc: '', aAddress: '', aAadhar: '',
    
    // Property Details
    plotNo: '', syNo: '', areaSqYds: '', areaSqMtrs: '', situation: '', 
    saleDeedNo: '', regYear: '', sroOffice: '', pPresentlyAt: '',
    
    // Third Party (to be executed by...)
    tpName: '', tpRelation: 'S/O', tpRelativeName: '', tpAge: '', tpOcc: '', tpAddress: '', tpAadhar: '',
    
    // Boundaries & Date
    north: '', south: '', east: '', west: '', 
    day: '', month: '', year: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateDraft = () => {
    // SAVE DATA LOCALLY TO RETRIEVE IN DRAFT PAGE
    localStorage.setItem('spaDraftData', JSON.stringify(formData));
    router.push('/spa-house-draft'); 
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.97)', 
        padding: '50px', 
        borderRadius: '30px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)' 
      }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={backBtnStyle}>← {t.back || "Back"}</button>
          <LanguageSwitcher />
        </div>

        <h1 style={{ textAlign: 'center', fontWeight: '800', fontSize: '28px', color: '#1e293b', marginBottom: '40px' }}>
          {lang === 'te' ? 'స్పెషల్ పవర్ ఆఫ్ అటార్నీ వివరాలు' : lang === 'hi' ? 'विशेष पावर ऑफ अटॉर्नी विवरण' : 'SPA - Fill All Blanks'}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* SECTION 1: THE PRINCIPAL (EXECUTANT) */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '1. ప్రిన్సిపల్ (నేను)' : lang === 'hi' ? '1. प्रधान (मैं)' : '1. The Principal (Executant)'}</h2>
            <input name="pName" placeholder="Your Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="pRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="pRelativeName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="pAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="pOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="pAadhar" placeholder="Your Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="pAddress" placeholder="Permanent Address (R/O)" style={inputStyle} onChange={handleChange} />
            <input name="pPresentlyAt" placeholder="Currently Staying At (City/Country)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 2: THE ATTORNEY */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '2. అటార్నీ ప్రతినిధి' : lang === 'hi' ? '2. अटॉर्नी विवरण' : '2. The Attorney (Representative)'}</h2>
            <input name="aName" placeholder="Attorney's Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="aRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="aRelativeName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="aAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="aOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="aAadhar" placeholder="Attorney Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="aAddress" placeholder="Attorney R/O Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 3: PROPERTY DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '3. ఆస్తి వివరాలు' : lang === 'hi' ? '3. संपत्ति विवरण' : '3. Property Schedule (Plot)'}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="plotNo" placeholder="Plot No." style={inputStyle} onChange={handleChange} />
              <input name="syNo" placeholder="Survey (Sy) No." style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="areaSqYds" placeholder="Area (Sq.Yds)" style={inputStyle} onChange={handleChange} />
              <input name="areaSqMtrs" placeholder="Area (Sq.Mtrs)" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="situation" placeholder="Situated At (Location)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="saleDeedNo" placeholder="Purchase Deed No." style={inputStyle} onChange={handleChange} />
              <input name="regYear" placeholder="Reg. Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="sroOffice" placeholder="S.R.O. Office (e.g. Bhongir)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 4: THIRD PARTY & EXECUTION */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '4. సేల్ డీడ్ అమలు చేసే వ్యక్తి' : lang === 'hi' ? '4. विक्रय विलेख निष्पादक' : '4. Party Executing Sale Deed'}</h2>
            <input name="tpName" placeholder="Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
               <select name="tpRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="tpRelativeName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="tpAadhar" placeholder="Aadhar No." style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
               <input name="day" placeholder="Day (e.g. 24th)" style={inputStyle} onChange={handleChange} />
               <input name="month" placeholder="Month" style={inputStyle} onChange={handleChange} />
               <input name="year" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

          {/* SECTION 5: BOUNDARIES */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '5. సరిహద్దులు' : lang === 'hi' ? '5. सीमाएं' : '5. Boundaries'}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input name="north" placeholder="North" style={inputStyle} onChange={handleChange} />
                <input name="south" placeholder="South" style={inputStyle} onChange={handleChange} />
                <input name="east" placeholder="East" style={inputStyle} onChange={handleChange} />
                <input name="west" placeholder="West" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

        </div>

        <button onClick={handleGenerateDraft} style={submitBtnStyle}>
          {lang === 'te' ? 'పూర్తి SPA డ్రాఫ్ట్‌ను రూపొందించండి →' : lang === 'hi' ? 'पूरा SPA ड्राफ्ट तैयार करें →' : 'Generate Full SPA Draft →'}
        </button>
      </div>
    </div>
  );
}

const sectionStyle = { display: 'flex', flexDirection: 'column' as const, gap: '12px', padding: '20px', border: '1px solid #f1f5f9', borderRadius: '15px', backgroundColor: '#fff' };
const sectionTitle = { fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase' as const, letterSpacing: '1px' };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '14px' };
const backBtnStyle = { padding: '8px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: 'white', fontWeight: 'bold' };
const submitBtnStyle = { width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '15px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', marginTop: '40px', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.5)' };