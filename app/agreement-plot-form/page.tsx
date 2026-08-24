"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function AgreementPlotForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    // Execution Info
    day: '', month: '', year: '',
    // Vendor Details
    vName: '', vRelation: 'S/O', vRelName: '', vAge: '', vOcc: '', vAddress: '', vAadhar: '',
    // Vendee Details
    veName: '', veRelation: 'S/O', veRelName: '', veAge: '', veOcc: '', veAddress: '', veAadhar: '',
    // Property Specs
    plotNo: '', syNo: '', areaSqYds: '', areaSqMtrs: '', situation: '',
    saleDeedNo: '', sroOffice: '',
    // Financials
    totalConsideration: '', considerationWords: '',
    pricePerYard: '', paidAmount: '', paidAmountWords: '',
    paidDate: '', balanceAmount: '', balanceAmountWords: '',
    balanceTimeLimit: '', // e.g. (3) months
    // Boundaries
    north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateDraft = () => {
    // Save data locally for retrieval in the final Draft page
    localStorage.setItem('agreementPlotDraftData', JSON.stringify(formData));
    router.push('/agreement-plot-draft'); 
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
          {lang === 'te' ? 'విక్రయ ఒప్పందం (ప్లాట్) వివరాలు' : lang === 'hi' ? 'विक्रय अनुबंध (प्लॉट) विवरण' : 'Agreement of Sale - Plot Form'}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* SECTION 1: VENDOR DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '1. విక్రేత వివరాలు (Vendor)' : lang === 'hi' ? '1. विक्रेता विवरण' : '1. Vendor Details'}</h2>
            <input name="vName" placeholder="Vendor Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="vRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="vRelName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="vAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="vOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="vAadhar" placeholder="Vendor Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="vAddress" placeholder="Vendor Full Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 2: VENDEE DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '2. కొనుగోలుదారు వివరాలు (Vendee)' : lang === 'hi' ? '2. क्रेता विवरण' : '2. Vendee Details'}</h2>
            <input name="veName" placeholder="Vendee Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
               <select name="veRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="veRelName" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="veAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="veOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="veAadhar" placeholder="Vendee Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="veAddress" placeholder="Vendee Full Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 3: PROPERTY DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '3. ఆస్తి వివరాలు' : lang === 'hi' ? '3. संपत्ति विवरण' : '3. Plot Specifications'}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="plotNo" placeholder="Plot No." style={inputStyle} onChange={handleChange} />
              <input name="syNo" placeholder="Sy No." style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="areaSqYds" placeholder="Area (Sq.Yds)" style={inputStyle} onChange={handleChange} />
              <input name="areaSqMtrs" placeholder="Area (Sq.Mtrs)" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="situation" placeholder="Situated At (Location)" style={inputStyle} onChange={handleChange} />
            <input name="sroOffice" placeholder="S.R.O. Office (e.g. Bhongir)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input name="north" placeholder="North Boundary" style={inputStyle} onChange={handleChange} />
                <input name="south" placeholder="South Boundary" style={inputStyle} onChange={handleChange} />
                <input name="east" placeholder="East Boundary" style={inputStyle} onChange={handleChange} />
                <input name="west" placeholder="West Boundary" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

          {/* SECTION 4: FINANCIAL AGREEMENT */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>{lang === 'te' ? '4. ఆర్థిక ఒప్పందం' : lang === 'hi' ? '4. वित्तीय समझौता' : '4. Payment & Financials'}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="totalConsideration" placeholder="Total Sale Price (Rs)" style={inputStyle} onChange={handleChange} />
              <input name="pricePerYard" placeholder="Rate Per Sq.Yard" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="considerationWords" placeholder="Total Price in Words" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="paidAmount" placeholder="Paid Advance (Rs)" style={inputStyle} onChange={handleChange} />
              <input name="paidDate" placeholder="Date of Payment" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="balanceAmount" placeholder="Balance Amount (Rs)" style={inputStyle} onChange={handleChange} />
            <input name="balanceTimeLimit" placeholder="Time for balance (e.g. 3 Months)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
               <input name="day" placeholder="Execution Day" style={inputStyle} onChange={handleChange} />
               <input name="month" placeholder="Month" style={inputStyle} onChange={handleChange} />
               <input name="year" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

        </div>

        <button onClick={handleGenerateDraft} style={submitBtnStyle}>
          {lang === 'te' ? 'పూర్తి విక్రయ ఒప్పందం డ్రాఫ్ట్‌ను రూపొందించండి →' : lang === 'hi' ? 'पूरा विक्रय अनुबंध ड्राफ्ट तैयार करें →' : 'Generate Full Agreement Draft →'}
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