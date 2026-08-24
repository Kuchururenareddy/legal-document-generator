"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function CancellationHouseForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    // Execution Date
    day: '', month: '', year: '2025', 
    
    // First Party (The one revoking)
    fName: '', fRelation: 'S/O', fRelName: '', fAge: '', fOcc: '', fAddress: '', fAadhar: '',
    
    // Second Party (The one being revoked against)
    sName: '', sRel: 'S/O', sRelName: '', sAge: '', sOcc: '', sAddress: '', sAadhar: '',
    
    // Principal Deed Details (The original document to be cancelled)
    origDeedDate: '', origDay: '', origMonth: '', origYear: '',
    origDoctNo: '', origRegYear: '', sroOffice: 'Bhongir',
    
    // Property Details
    houseNo: '', consistingOf: '', areaSqYds: '', areaSqMtrs: '', roofSft: '', situation: '',
    
    // Boundaries
    north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateDraft = () => {
    // SAVE DATA LOCALLY TO RETRIEVE IN DRAFT PAGE
    localStorage.setItem('cancellationDraftData', JSON.stringify(formData));
    router.push('/cancellation-house-draft'); 
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
          {lang === 'te' ? 'రద్దు పత్రం వివరాలు' : lang === 'hi' ? 'निरस्तीकरण विलेख विवरण' : 'Revocation Deed - Fill All Blanks'}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* SECTION 1: FIRST PARTY DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '1. మొదటి పక్షం వివరాలు' : lang === 'hi' ? '1. प्रथम पक्ष विवरण' : '1. First Party Details (Executant)'}</h2>
            <input name="fName" placeholder="Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="fRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="fRelName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="fAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="fOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="fAadhar" placeholder="Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="fAddress" placeholder="Residence Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 2: SECOND PARTY DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '2. రెండవ పక్షం వివరాలు' : lang === 'hi' ? '2. द्वितीय पक्ष विवरण' : '2. Second Party Details'}</h2>
            <input name="sName" placeholder="Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="sRel" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="sRelName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="sAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="sOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="sAadhar" placeholder="Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="sAddress" placeholder="Residence Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 3: PRINCIPAL DEED (ORIGINAL SALE DEED) */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '3. అసలు విక్రయ పత్రం వివరాలు' : lang === 'hi' ? '3. मूल विक्रय विलेख विवरण' : '3. Original (Principal) Deed Details'}</h2>
            <p style={{fontSize: '11px', color: '#64748b'}}>The Sale Deed being cancelled:</p>
            <div style={{ display: 'flex', gap: '10px' }}>
               <input name="origDay" placeholder="Orig. Day" style={inputStyle} onChange={handleChange} />
               <input name="origMonth" placeholder="Orig. Month" style={inputStyle} onChange={handleChange} />
               <input name="origYear" placeholder="Orig. Year" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="origDoctNo" placeholder="Doct No. (e.g. 1234)" style={inputStyle} onChange={handleChange} />
              <input name="origRegYear" placeholder="Reg Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="sroOffice" placeholder="S.R.O. Office (e.g. Bhongir)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 4: PROPERTY SCHEDULE */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '4. ఆస్తి షెడ్యూల్' : lang === 'hi' ? '4. संपत्ति अनुसूची' : '4. Property Schedule'}</h2>
            <input name="houseNo" placeholder="House Bearing No." style={inputStyle} onChange={handleChange} />
            <input name="consistingOf" placeholder="Consisting of (e.g. G+1)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="areaSqYds" placeholder="Area (Sq.Yds)" style={inputStyle} onChange={handleChange} />
              <input name="roofSft" placeholder="Roof Area (Sft)" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="situation" placeholder="Situated At (Location)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '5px' }}>
                <input name="north" placeholder="North Boundary" style={inputStyle} onChange={handleChange} />
                <input name="south" placeholder="South Boundary" style={inputStyle} onChange={handleChange} />
                <input name="east" placeholder="East Boundary" style={inputStyle} onChange={handleChange} />
                <input name="west" placeholder="West Boundary" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

        </div>

        <button onClick={handleGenerateDraft} style={submitBtnStyle}>
          {lang === 'te' ? 'రద్దు పత్రం డ్రాఫ్ట్‌ను రూపొందించండి →' : lang === 'hi' ? 'निरस्तीकरण ड्राफ्ट तैयार करें →' : 'Generate Full Revocation Draft →'}
        </button>
      </div>
    </div>
  );
}

const sectionStyle = { display: 'flex', flexDirection: 'column' as const, gap: '12px', padding: '20px', border: '1px solid #f1f5f9', borderRadius: '15px', backgroundColor: '#fff' };
const sectionTitle = { fontSize: '12px', fontWeight: '800', color: '#ef4444', textTransform: 'uppercase' as const, letterSpacing: '1px' };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '14px' };
const backBtnStyle = { padding: '8px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: 'white', fontWeight: 'bold' };
const submitBtnStyle = { width: '100%', padding: '20px', backgroundColor: '#ef4444', color: 'white', borderRadius: '15px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', marginTop: '40px', boxShadow: '0 4px 14px 0 rgba(239, 68, 68, 0.4)' };