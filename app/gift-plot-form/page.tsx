"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function GiftPlotForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    // Execution Info
    day: '', month: '', year: '',
    // Donor Details
    donorName: '', donorRelation: 'S/O', donorRelName: '', donorAge: '', donorOcc: '', donorAddress: '', donorAadhar: '',
    // Donee Details
    doneeName: '', doneeRelation: 'S/O', doneeRelName: '', doneeAge: '', doneeOcc: '', doneeAddress: '', doneeAadhar: '',
    doneeIsDonor: '', // e.g., Daughter, Son, Brother
    // Property Specs
    plotNo: '', syNo: '', areaSqYds: '', areaSqMtrs: '', situation: '',
    saleDeedNo: '', saleDeedYear: '', sroOffice: '',
    // Market Value Table
    valPerSqYd: '', totalMarketValue: '',
    // Boundaries
    north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateDraft = () => {
    // Save data locally for retrieval in the final Draft page
    localStorage.setItem('giftPlotDraftData', JSON.stringify(formData));
    router.push('/gift-plot-draft'); 
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
          {lang === 'te' ? 'బహుమతి పత్రం (ప్లాట్) వివరాలు' : lang === 'hi' ? 'उपहार विलेख (प्लॉट) विवरण' : 'Gift Deed (Plot) - Fill All Blanks'}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* SECTION 1: THE DONOR (Giving the gift) */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '1. దాత వివరాలు' : lang === 'hi' ? '1. दाता विवरण' : '1. Donor Details'}</h2>
            <input name="donorName" placeholder="Donor Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="donorRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="donorRelName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="donorAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="donorOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="donorAadhar" placeholder="Donor Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="donorAddress" placeholder="Donor Residence Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 2: THE DONEE (Receiving the gift) */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '2. గ్రహీత వివరాలు' : lang === 'hi' ? '2. प्राप्तकर्ता विवरण' : '2. Donee Details'}</h2>
            <input name="doneeName" placeholder="Donee Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
               <select name="doneeRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="doneeRelName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="doneeAadhar" placeholder="Donee Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="doneeIsDonor" placeholder="Donee is Donor's (e.g. Daughter/Son)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 3: PLOT & REGISTRATION SPECS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '3. ప్లాట్ మరియు రిజిస్ట్రేషన్' : lang === 'hi' ? '3. प्लॉट और पंजीकरण' : '3. Plot & Registration'}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="plotNo" placeholder="Plot No." style={inputStyle} onChange={handleChange} />
              <input name="syNo" placeholder="Sy No." style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="areaSqYds" placeholder="Area (Sq.Yds)" style={inputStyle} onChange={handleChange} />
              <input name="areaSqMtrs" placeholder="Area (Sq.Mtrs)" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="situation" placeholder="Situated At (Location)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="saleDeedNo" placeholder="Purchase Doct No." style={inputStyle} onChange={handleChange} />
              <input name="saleDeedYear" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="sroOffice" placeholder="S.R.O. Office (e.g. Bhongir)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 4: MARKET VALUE & BOUNDARIES */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '4. విలువ మరియు సరిహద్దులు' : lang === 'hi' ? '4. मूल्य और सीमाएं' : '4. Value & Boundaries'}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
               <input name="valPerSqYd" placeholder="Value per Sq.Yd (Rs)" style={inputStyle} onChange={handleChange} />
               <input name="totalMarketValue" placeholder="Total Market Value" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                <input name="north" placeholder="North" style={inputStyle} onChange={handleChange} />
                <input name="south" placeholder="South" style={inputStyle} onChange={handleChange} />
                <input name="east" placeholder="East" style={inputStyle} onChange={handleChange} />
                <input name="west" placeholder="West" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
               <input name="day" placeholder="Day (e.g. 24th)" style={inputStyle} onChange={handleChange} />
               <input name="month" placeholder="Month" style={inputStyle} onChange={handleChange} />
               <input name="year" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

        </div>

        <button onClick={handleGenerateDraft} style={submitBtnStyle}>
          {lang === 'te' ? 'పూర్తి బహుమతి పత్రం డ్రాఫ్ట్‌ను రూపొందించండి →' : lang === 'hi' ? 'पूरा उपहार विलेख ड्राफ्ट तैयार करें →' : 'Generate Full Gift Deed Draft →'}
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