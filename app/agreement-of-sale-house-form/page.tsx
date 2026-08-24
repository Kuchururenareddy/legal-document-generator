"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function AgreementOfSaleHouseForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();

  // TRACK ALL FORM INPUTS
  const [formData, setFormData] = useState({
    day: '', month: '', year: '', place: '',
    vendorName: '', vendorRelation: 'S/O', vendorFather: '', vendorAge: '', vendorOcc: '', vendorAddress: '',
    vendeeName: '', vendeeRelation: 'S/O', vendeeFather: '', vendeeAge: '', vendeeOcc: '', vendeeAddress: '',
    houseNo: '', consistingOf: '', saleDeedNo: '', regYear: '', sroOffice: '',
    totalPrice: '', priceWords: '', advanceAmount: '', advanceDate: '', balanceDays: '',
    areaSqYds: '', roofSft: '', north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    // SAVE DATA LOCALLY TO RETRIEVE IN DRAFT PAGE
    localStorage.setItem('agreementDraft', JSON.stringify(formData));
    router.push('/agreement-of-sale-house-draft');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundImage: "url('/legal-bg.jpg')", // Added Background Image
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '40px 20px' 
    }}>
      {/* Semi-transparent container to improve form focus */}
      <div style={{ 
        maxWidth: '1100px', 
        width: '100%',
        margin: '0 auto', 
        backgroundColor: 'rgba(255, 255, 255, 0.96)', // Slight transparency for glass effect
        padding: '50px', 
        borderRadius: '30px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)' 
      }}>
        
        {/* Header with Switcher */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={backBtnStyle}>← {t.backToSelection || "Back"}</button>
          <LanguageSwitcher />
        </div>

        <h1 style={{ textAlign: 'center', fontWeight: '800', fontSize: '28px', color: '#1e293b', marginBottom: '40px' }}>
          {lang === 'te' ? 'విక్రయ ఒప్పందం (ఇల్లు) వివరాలు' : lang === 'hi' ? 'बिक्री समझौता (घर) विवरण' : 'Agreement of Sale (House) All Blanks'}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* 1. EXECUTION DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '1. అమలు వివరాలు' : lang === 'hi' ? '1. निष्पादन विवरण' : '1. Execution Details (First Line)'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="day" placeholder="Day (e.g. 23rd)" style={inputStyle} onChange={handleChange} />
              <input type="text" name="month" placeholder="Month" style={inputStyle} onChange={handleChange} />
              <input type="text" name="year" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input type="text" name="place" placeholder="Executed at (Place/City)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 2. VENDOR DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '2. విక్రేత (అమ్మేవారు) వివరాలు' : lang === 'hi' ? '2. विक्रेता विवरण' : '2. Vendor (Seller) Details'}
            </h2>
            <input type="text" name="vendorName" placeholder="Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="vendorRelation" style={{...inputStyle, width: '80px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input type="text" name="vendorFather" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="vendorAge" placeholder="Age" style={{...inputStyle, width: '100px'}} onChange={handleChange} />
              <input type="text" name="vendorOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input type="text" name="vendorAddress" placeholder="Residence (R/O) Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 3. VENDEE DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '3. కొనుగోలుదారు వివరాలు' : lang === 'hi' ? '3. खरीदार विवरण' : '3. Vendee (Buyer) Details'}
            </h2>
            <input type="text" name="vendeeName" placeholder="Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="vendeeRelation" style={{...inputStyle, width: '80px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input type="text" name="vendeeFather" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="vendeeAge" placeholder="Age" style={{...inputStyle, width: '100px'}} onChange={handleChange} />
              <input type="text" name="vendeeOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input type="text" name="vendeeAddress" placeholder="Residence (R/O) Address" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 4. THEORY PART */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '4. టైటిల్ చరిత్ర' : lang === 'hi' ? '4. शीर्षक इतिहास' : '4. Title History (Whereas Clause)'}
            </h2>
            <input type="text" name="houseNo" placeholder="House Bearing No." style={inputStyle} onChange={handleChange} />
            <input type="text" name="consistingOf" placeholder="Consisting of (e.g. Ground Floor)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="saleDeedNo" placeholder="Sale Deed Doct No." style={inputStyle} onChange={handleChange} />
              <input type="text" name="regYear" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input type="text" name="sroOffice" placeholder="Registered at S.R.O. (Office Name)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 5. SALE CONSIDERATION */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '5. అమ్మకం ధర మరియు చెల్లింపు' : lang === 'hi' ? '5. बिक्री मूल्य और भुगतान' : '5. Sale Consideration (Clause 1)'}
            </h2>
            <input type="text" name="totalPrice" placeholder="Total Sale Consideration (Rs.)" style={inputStyle} onChange={handleChange} />
            <input type="text" name="priceWords" placeholder="Total Consideration in Words" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="advanceAmount" placeholder="Advance Amount (Rs.)" style={inputStyle} onChange={handleChange} />
              <input type="text" name="advanceDate" placeholder="Advance Paid Date" style={inputStyle} onChange={handleChange} />
            </div>
            <input type="text" name="balanceDays" placeholder="Balance Payment Time (Days)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 6. PROPERTY SCHEDULE */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '6. ఆస్తి షెడ్యూల్ మరియు సరిహద్దులు' : lang === 'hi' ? '6. संपत्ति अनुसूची और सीमाएं' : '6. Property Schedule & Boundaries'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="areaSqYds" placeholder="Total Area (Sq.Yards)" style={inputStyle} onChange={handleChange} />
              <input type="text" name="roofSft" placeholder="R.C.C. Roof Area (Sft)" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input type="text" name="north" placeholder="North Boundary" style={inputStyle} onChange={handleChange} />
                <input type="text" name="south" placeholder="South Boundary" style={inputStyle} onChange={handleChange} />
                <input type="text" name="east" placeholder="East Boundary" style={inputStyle} onChange={handleChange} />
                <input type="text" name="west" placeholder="West Boundary" style={inputStyle} onChange={handleChange} />
            </div>
          </section>
        </div>

        <button onClick={handleGenerate} style={submitBtnStyle}>
          {t.proceedToForm || "Generate Full Agreement Preview"} →
        </button>
      </div>
    </div>
  );
}

// STYLES MAINTAINED EXACTLY
const sectionStyle = { display: 'flex', flexDirection: 'column' as const, gap: '12px', padding: '20px', border: '1px solid #f1f5f9', borderRadius: '15px', backgroundColor: '#fff' };
const sectionTitle = { fontSize: '13px', fontWeight: '800', color: '#3b82f6', marginBottom: '8px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none' };
const backBtnStyle = { padding: '8px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: 'white' };
const submitBtnStyle = { width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '15px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', marginTop: '40px' };