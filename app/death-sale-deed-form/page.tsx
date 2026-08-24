"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function DeathSaleDeedForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  
  const [formData, setFormData] = useState({
    // 1. EXECUTION DATE & PLACE
    execDay: '', execMonth: '', execYear: '', execPlace: '',
    
    // 2. VENDOR (LEGAL HEIR) - From Source 34-35
    vendorName: '', vendorRelation: 'S/O', vendorFather: '', vendorAge: '', 
    vendorOcc: '', vendorAddress: '', vendorAadhar: '',
    
    // 3. VENDEE (BUYER) - From Source 36
    vendeeName: '', vendeeRelation: 'S/O', vendeeFather: '', vendeeAge: '', 
    vendeeOcc: '', vendeeAddress: '', vendeeAadhar: '',
    
    // 4. DECEASED OWNER & CERTIFICATE DETAILS - From Source 40-41
    deceasedName: '', deathState: '', deathRegNo: '', deathDate: '', deathCertIssuer: '',
    heirCertLetterDate: '', heirCertIssuer: '',
    
    // 5. PROPERTY DETAILS - From Source 37-39
    plotNo: '', surveyNo: '', areaSqYds: '', areaSqMtrs: '', situation: '',
    saleDeedNo: '', saleDeedYear: '', sroOffice: '',
    
    // 6. CONSIDERATION - From Source 42-43
    totalConsideration: '', considerationWords: '',
    
    // 7. BOUNDARIES - From Source 57
    north: '', south: '', east: '', west: '',
    
    // 8. MARKET VALUE STATEMENT - From Source 58
    valPerSqYd: '', totalMarketValue: '',
    
    // 9. RECEIPT DETAILS - From Source 59-62
    receiptPerson: '', receiptAmount: '', receiptAmountWords: '', receiptDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    localStorage.setItem('deathSaleDeedData', JSON.stringify(formData));
    router.push('/death-sale-deed-draft');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", // Added background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Updated card with semi-transparent background */}
      <div style={{ ...formCardStyle, backgroundColor: 'rgba(255, 255, 255, 0.96)' }}>
        
        {/* Header with Switcher */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.push('/death-sale-deed-preview')} style={backBtnStyle}>
            ← {t.backToSelection || "Back to Preview"}
          </button>
          <LanguageSwitcher />
        </div>

        <h1 style={titleStyle}>
          {lang === 'te' ? 'మరణ విక్రయ పత్రం (ప్లాట్) - ఫారమ్' : lang === 'hi' ? 'मृत्यु बिक्री विलेख (प्लॉट) - फॉर्म' : 'Death Sale Deed (Plot) - Complete Form'}
        </h1>
        <p style={subtitleStyle}>
          {lang === 'te' ? 'చట్టపరమైన డ్రాఫ్ట్ కోసం ప్రతి ఖాళీని నింపండి.' : lang === 'hi' ? 'कानूनी मसौदे के लिए हर खाली जगह भरें।' : 'Fill every blank to ensure a word-for-word legal draft.'}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
          
          {/* SECTION 1: EXECUTION */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '1. అమలు వివరాలు' : lang === 'hi' ? '1. निष्पादन विवरण' : '1. Execution Details'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="execDay" placeholder="Day (e.g. 7th)" style={inputStyle} onChange={handleChange} />
              <input name="execMonth" placeholder="Month" style={inputStyle} onChange={handleChange} />
              <input name="execYear" placeholder="Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="execPlace" placeholder="Place of Execution" style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 2: VENDOR (HEIR) */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '2. విక్రేత (వారసుడు)' : lang === 'hi' ? '2. विक्रेता (वारिस)' : '2. Vendor (Seller/Heir)'}
            </h2>
            <input name="vendorName" placeholder="Vendor Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="vendorRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="vendorFather" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="vendorAge" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="vendorOcc" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="vendorAddress" placeholder="Full Address (H.No, Village, R/O)" style={inputStyle} onChange={handleChange} />
            <input name="vendorAadhar" placeholder="Vendor Aadhar No." style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 3: DECEASED OWNER INFO */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '3. మరణించినవారు & ధృవీకరణ పత్రాలు' : lang === 'hi' ? '3. मृतक और प्रमाण पत्र' : '3. Deceased & Certificates'}
            </h2>
            <input name="deceasedName" placeholder="Late (Deceased Name)" style={inputStyle} onChange={handleChange} />
            <input name="deathState" placeholder="Govt. of (e.g. Telangana)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="deathRegNo" placeholder="Death Reg No." style={inputStyle} onChange={handleChange} />
              <input name="deathDate" placeholder="Date of Death" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="deathCertIssuer" placeholder="Death Certificate Issued By" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="heirCertLetterDate" placeholder="Legal Heir Cert Date" style={inputStyle} onChange={handleChange} />
              <input name="heirCertIssuer" placeholder="Heir Cert Issuer" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

          {/* SECTION 4: VENDEE (BUYER) */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '4. కొనుగోలుదారు' : lang === 'hi' ? '4. खरीदार' : '4. Vendee (Buyer)'}
            </h2>
            <input name="vendeeName" placeholder="Buyer Full Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="vendeeRelation" style={{...inputStyle, width: '90px'}} onChange={handleChange}>
                <option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option>
              </select>
              <input name="vendeeFather" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="vendeeAddress" placeholder="Buyer Full Address" style={inputStyle} onChange={handleChange} />
            <input name="vendeeAadhar" placeholder="Buyer Aadhar No." style={inputStyle} onChange={handleChange} />
          </section>

          {/* SECTION 5: PROPERTY SCHEDULE */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '5. ఆస్తి షెడ్యూల్' : lang === 'hi' ? '5. संपत्ति अनुसूची' : '5. Property & Boundaries'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="plotNo" placeholder="Plot No." style={inputStyle} onChange={handleChange} />
              <input name="surveyNo" placeholder="Sy. No." style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="areaSqYds" placeholder="Area (Sq.Yds)" style={inputStyle} onChange={handleChange} />
              <input name="areaSqMtrs" placeholder="Area (Sq.Mtrs)" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="situation" placeholder="Situated At (Location)" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <input name="north" placeholder="Bound: NORTH" style={inputStyle} onChange={handleChange} />
              <input name="south" placeholder="Bound: SOUTH" style={inputStyle} onChange={handleChange} />
              <input name="east" placeholder="Bound: EAST" style={inputStyle} onChange={handleChange} />
              <input name="west" placeholder="Bound: WEST" style={inputStyle} onChange={handleChange} />
            </div>
          </section>

          {/* SECTION 6: VALUE & RECEIPT */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '6. మార్కెట్ విలువ & చెల్లింపు' : lang === 'hi' ? '6. बाजार मूल्य और भुगतान' : '6. Market Value & Consideration'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="totalConsideration" placeholder="Sale Consideration (Rs)" style={inputStyle} onChange={handleChange} />
              <input name="valPerSqYd" placeholder="Rate per Sq.Yd" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="considerationWords" placeholder="Amount in Words" style={inputStyle} onChange={handleChange} />
            <input name="totalMarketValue" placeholder="Total Market Value (for Stamps)" style={inputStyle} onChange={handleChange} />
            <input name="receiptDate" placeholder="Receipt Date (e.g. 7TH MARCH, 2018)" style={inputStyle} onChange={handleChange} />
          </section>

        </div>

        <button onClick={handleGenerate} style={submitBtnStyle}>
          {lang === 'te' ? 'డ్రాఫ్ట్ రూపొందించండి →' : lang === 'hi' ? 'मसौदा तैयार करें →' : 'Generate Final Word-for-Word Draft →'}
        </button>
      </div>
    </div>
  );
}

// STYLES
const formCardStyle = { maxWidth: '1100px', width: '100%', margin: '0 auto', backgroundColor: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' };
const titleStyle = { textAlign: 'center' as const, fontWeight: '900', fontSize: '28px', color: '#0f172a', marginBottom: '8px' };
const subtitleStyle = { textAlign: 'center' as const, color: '#64748b', marginBottom: '40px' };
const sectionStyle = { display: 'flex', flexDirection: 'column' as const, gap: '12px', padding: '20px', border: '1px solid #f1f5f9', borderRadius: '15px', backgroundColor: '#fff' };
const sectionTitle = { fontSize: '13px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase' as const };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none' };
const backBtnStyle = { padding: '10px 20px', borderRadius: '10px', border: '1px solid #e2e8f0', cursor: 'pointer', marginBottom: '20px', backgroundColor: '#fff', fontWeight: 'bold' };
const submitBtnStyle = { width: '100%', padding: '22px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '18px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', marginTop: '40px', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' };