"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function GiftDeedHouseForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    day: '', month: '', year: '', place: '',
    donorName: '', donorRelation: 'S/O', donorFather: '', donorAge: '', donorOcc: '', donorAadhar: '', donorAddress: '',
    doneeName: '', doneeRelation: 'S/O', doneeFather: '', doneeAge: '', doneeOcc: '', doneeAadhar: '', doneeAddress: '',
    relationship: '', saleDeedNo: '', regYear: '', sroOffice: '',
    houseNo: '', consistingOf: '', areaSqYds: '', areaSqMtrs: '', roofSft: '', situation: '', marketValue: '',
    north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateDraft = () => {
    // SAVE DATA LOCALLY TO RETRIEVE IN DRAFT PAGE
    localStorage.setItem('giftDeedData', JSON.stringify(formData));
    router.push('/gift-deed-house-draft'); 
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", // Background Added
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        maxWidth: '1100px', 
        width: '100%',
        margin: '0 auto', 
        backgroundColor: 'rgba(255, 255, 255, 0.96)', // Glass effect for readability
        padding: '50px', 
        borderRadius: '30px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)' 
      }}>
        
        {/* Header with Switcher */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={{ padding: '8px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: 'white', fontWeight: 'bold' }}>
            ← {t.backToSelection || "Back"}
          </button>
          <LanguageSwitcher />
        </div>

        <h1 style={{ textAlign: 'center', fontWeight: '800', fontSize: '28px', color: '#1e293b', marginBottom: '40px' }}>
          {lang === 'te' ? 'బహుమతి పత్రం (ఇల్లు) వివరాలు' : lang === 'hi' ? 'उपहार विलेख (घर) विवरण' : 'Gift Deed (House) All Blanks'}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* SECTION 1: EXECUTION */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '1. అమలు వివరాలు' : lang === 'hi' ? '1. निष्पादन विवरण' : '1. Execution Details'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="day" placeholder="Day (e.g. 23rd)" style={inputStyle} onChange={handleChange} />
              <input name="month" placeholder="Month" style={inputStyle} onChange={handleChange} />
              <input name="year" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="place" placeholder="Executed at (Place)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 2: DONOR */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '2. దాత వివరాలు' : lang === 'hi' ? '2. दाता विवरण' : '2. Donor Details'}
            </h2>
            <input name="donorName" placeholder="Donor Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="donorRelation" style={{...inputStyle, width: '100px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="donorFather" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="donorAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="donorOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="donorAadhar" placeholder="Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="donorAddress" placeholder="Donor Residence Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 3: DONEE */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '3. గ్రహీత వివరాలు' : lang === 'hi' ? '3. प्राप्तकर्ता विवरण' : '3. Donee Details'}
            </h2>
            <input name="doneeName" placeholder="Donee Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="doneeRelation" style={{...inputStyle, width: '100px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="doneeFather" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="doneeAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="doneeOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="doneeAadhar" placeholder="Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="doneeAddress" placeholder="Donee Residence Address" style={inputStyle} onChange={handleChange} />
            <input name="relationship" placeholder="Donor-Donee Relationship" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 4: PROPERTY */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '4. ఇంటి ఆస్తి షెడ్యూల్' : lang === 'hi' ? '4. घर संपत्ति अनुसूची' : '4. House Property Schedule'}
            </h2>
            <input name="houseNo" placeholder="House Bearing No." style={inputStyle} onChange={handleChange} />
            <input name="consistingOf" placeholder="Consisting of (e.g. Ground Floor)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="areaSqYds" placeholder="Area (Sq.Yards)" style={inputStyle} onChange={handleChange} />
              <input name="areaSqMtrs" placeholder="Area (Sq.Meters)" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="roofSft" placeholder="Roof Area (Sft)" style={inputStyle} onChange={handleChange} />
              <input name="situation" placeholder="Situated At" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="saleDeedNo" placeholder="Sale Deed Doct No." style={inputStyle} onChange={handleChange} />
              <input name="regYear" placeholder="Registration Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="sroOffice" placeholder="Registered at S.R.O." style={inputStyle} onChange={handleChange} />
            <input name="marketValue" placeholder="Market Value (Rs.)" style={inputStyle} onChange={handleChange} />
          </section>
          
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '5. సరిహద్దులు' : lang === 'hi' ? '5. सीमाएं' : '5. Boundaries'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input name="north" placeholder="North" style={inputStyle} onChange={handleChange} />
                <input name="south" placeholder="South" style={inputStyle} onChange={handleChange} />
                <input name="east" placeholder="East" style={inputStyle} onChange={handleChange} />
                <input name="west" placeholder="West" style={inputStyle} onChange={handleChange} />
            </div>
          </section>
        </div>

        <button onClick={handleGenerateDraft} style={submitBtnStyle}>
          {lang === 'te' ? 'డ్రాఫ్ట్‌ను రూపొందించండి →' : lang === 'hi' ? 'मसौदा तैयार करें →' : 'Generate Full Gift Deed Draft →'}
        </button>
      </div>
    </div>
  );
}

const sectionStyle = { display: 'flex', flexDirection: 'column' as const, gap: '12px', padding: '20px', border: '1px solid #f1f5f9', borderRadius: '15px', backgroundColor: '#fff' };
const sectionTitle = { fontSize: '13px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase' as const };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none' };
const submitBtnStyle = { width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '15px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', marginTop: '40px', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.5)' };