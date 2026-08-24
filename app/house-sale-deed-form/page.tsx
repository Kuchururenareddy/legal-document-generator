"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function HouseSaleDeedForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    execDay: '', execMonth: '', execYear: '2026',
    vName: '', vRelation: 'S/O', vRelationName: '', vAge: '', vOcc: '', vAddress: '', vAadhar: '',
    pName: '', pRelation: 'S/O', pRelationName: '', pAge: '', pOcc: '', pAddress: '', pAadhar: '',
    hNo: '', assessNo: '', consistOf: '', sqYards: '', sqMtrs: '', roofArea: '', situatedAt: '',
    docNo: '', regYear: '', sroOffice: 'Bhongir', price: '', priceWords: '',
    north: '', south: '', east: '', west: '',
    roofType: 'R.C.C', buildAge: '', municipalTax: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('houseDeedData');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    localStorage.setItem('houseDeedData', JSON.stringify(updated));
  };

  return (
    <div className="ld-page flex min-h-screen items-center justify-center p-5">
      <div className="ld-panel w-full max-w-[1200px] p-7 md:p-8">
        
        {/* NAVIGATION HEADER WITH BACK BUTTON & SWITCHER */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button 
            onClick={() => router.push('/house-sale-deed-info')} 
            className="ld-btn-text"
          >
            ← {t.backToSelection || "Back to Preview"}
          </button>
          
          <h1 className="ld-title m-0 text-center" style={{ fontSize: 24 }}>
            {lang === 'te' ? 'పత్రం ఖాళీలను పూరించండి' : lang === 'hi' ? 'दस्तावेज़ रिक्त स्थान भरें' : 'Complete All Document Blanks'}
          </h1>

          <LanguageSwitcher />
        </div>

        {/* SECTION 1: EXECUTION DATE */}
        <div style={sectionBox}>
          <h3 style={sectionTitle}>
            {lang === 'te' ? '1. అమలు తేదీ' : lang === 'hi' ? '1. निष्पादन तिथि' : '1. Execution Date'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div style={inputGroup}><label style={labelStyle}>Day (e.g. 3rd)</label><input name="execDay" value={formData.execDay} onChange={handleChange} style={inputStyle} /></div>
            <div style={inputGroup}><label style={labelStyle}>Month (Numerical)</label><input name="execMonth" value={formData.execMonth} onChange={handleChange} style={inputStyle} /></div>
            <div style={inputGroup}><label style={labelStyle}>Year</label><input name="execYear" value={formData.execYear} onChange={handleChange} style={inputStyle} /></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
          {/* SECTION 2: VENDOR */}
          <div style={sectionBox}>
            <h3 style={sectionTitle}>
              {lang === 'te' ? '2. విక్రేత వివరాలు' : lang === 'hi' ? '2. विक्रेता विवरण' : '2. Vendor (Seller) Details'}
            </h3>
            <input name="vName" value={formData.vName} onChange={handleChange} placeholder="Full Name" style={inputStyle} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="vRelation" value={formData.vRelation} onChange={handleChange} style={{ ...inputStyle, width: '90px' }}><option>S/O</option><option>D/O</option><option>W/O</option></select>
              <input name="vRelationName" value={formData.vRelationName} onChange={handleChange} placeholder="Relation Name" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="vAge" value={formData.vAge} onChange={handleChange} placeholder="Age" style={inputStyle} />
              <input name="vOcc" value={formData.vOcc} onChange={handleChange} placeholder="Occupation" style={inputStyle} />
            </div>
            <input name="vAddress" value={formData.vAddress} onChange={handleChange} placeholder="Full Address" style={inputStyle} />
            <input name="vAadhar" value={formData.vAadhar} onChange={handleChange} placeholder="AADHAR NO." style={inputStyle} />
          </div>

          {/* SECTION 3: VENDEE */}
          <div style={sectionBox}>
            <h3 style={sectionTitle}>
              {lang === 'te' ? '3. కొనుగోలుదారు వివరాలు' : lang === 'hi' ? '3. खरीदार विवरण' : '3. Vendee (Buyer) Details'}
            </h3>
            <input name="pName" value={formData.pName} onChange={handleChange} placeholder="Full Name" style={inputStyle} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="pRelation" value={formData.pRelation} onChange={handleChange} style={{ ...inputStyle, width: '90px' }}><option>S/O</option><option>D/O</option><option>W/O</option></select>
              <input name="pRelationName" value={formData.pRelationName} onChange={handleChange} placeholder="Relation Name" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="pAge" value={formData.pAge} onChange={handleChange} placeholder="Age" style={inputStyle} />
              <input name="pOcc" value={formData.pOcc} onChange={handleChange} placeholder="Occupation" style={inputStyle} />
            </div>
            <input name="pAddress" value={formData.pAddress} onChange={handleChange} placeholder="Full Address" style={inputStyle} />
            <input name="pAadhar" value={formData.pAadhar} onChange={handleChange} placeholder="AADHAR NO." style={inputStyle} />
          </div>
        </div>

        {/* SECTION 4: PROPERTY DESCRIPTION */}
        <div style={{ ...sectionBox, marginTop: '15px', backgroundColor: '#f0f9ff' }}>
          <h3 style={{ ...sectionTitle, color: '#0369a1' }}>
            {lang === 'te' ? '4. ఆస్తి వివరణ మరియు కొలతలు' : lang === 'hi' ? '4. संपत्ति विवरण और माप' : '4. Property Description & Measurements'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            <input name="hNo" value={formData.hNo} onChange={handleChange} placeholder="House No." style={inputStyle} />
            <input name="assessNo" value={formData.assessNo} onChange={handleChange} placeholder="Assess No." style={inputStyle} />
            <input name="consistOf" value={formData.consistOf} onChange={handleChange} placeholder="Consisting of" style={inputStyle} />
            <input name="sqYards" value={formData.sqYards} onChange={handleChange} placeholder="Sq. Yards" style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '10px' }}>
            <input name="sqMtrs" value={formData.sqMtrs} onChange={handleChange} style={inputStyle} placeholder="Sq. Meters" />
            <input name="roofArea" value={formData.roofArea} onChange={handleChange} placeholder="Roof Area (Sft)" style={inputStyle} />
            <input name="docNo" value={formData.docNo} onChange={handleChange} placeholder="Doc No." style={inputStyle} />
            <input name="regYear" value={formData.regYear} onChange={handleChange} placeholder="Reg. Year" style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '10px' }}>
            <input name="situatedAt" value={formData.situatedAt} onChange={handleChange} placeholder="Situated At (Location)" style={inputStyle} />
            <input name="sroOffice" value={formData.sroOffice} onChange={handleChange} placeholder="S.R.O Office" style={inputStyle} />
            <input name="price" value={formData.price} onChange={handleChange} placeholder="Price (Rs)" style={inputStyle} />
            <input name="priceWords" value={formData.priceWords} onChange={handleChange} placeholder="Price in Words" style={inputStyle} />
          </div>
        </div>

        {/* SECTION 5: BOUNDARIES & ANNEXURE */}
        <div style={{ ...sectionBox, marginTop: '15px', backgroundColor: '#fdf4ff' }}>
          <h3 style={{ ...sectionTitle, color: '#86198f' }}>
            {lang === 'te' ? '5. సరిహద్దులు మరియు అనెక్సర్' : lang === 'hi' ? '5. सीमाएं और एनेक्सचर' : '5. Boundaries & Annexure-IA'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            <input name="north" value={formData.north} onChange={handleChange} placeholder="North Boundary" style={inputStyle} />
            <input name="south" value={formData.south} onChange={handleChange} placeholder="South Boundary" style={inputStyle} />
            <input name="east" value={formData.east} onChange={handleChange} placeholder="East Boundary" style={inputStyle} />
            <input name="west" value={formData.west} onChange={handleChange} placeholder="West Boundary" style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '10px' }}>
            <select name="roofType" value={formData.roofType} onChange={handleChange} style={inputStyle}><option>R.C.C</option><option>Tiles</option><option>Others</option></select>
            <input name="buildAge" value={formData.buildAge} onChange={handleChange} placeholder="Age of Building" style={inputStyle} />
            <input name="municipalTax" value={formData.municipalTax} onChange={handleChange} placeholder="Municipal Tax (Rs)" style={inputStyle} />
          </div>
        </div>

        <button type="button" className="ld-btn-primary w-full mt-4 min-h-12" onClick={() => router.push('/house-sale-deed-draft')}>
          {lang === 'te' ? 'పూర్తి డ్రాఫ్ట్‌ను రూపొందించండి' : lang === 'hi' ? 'अंतिम ड्राफ्ट तैयार करें' : 'Generate Final Complete Draft'}
        </button>
      </div>
    </div>
  );
}

const sectionBox = { padding: '18px', backgroundColor: '#f8f7f4', borderRadius: '6px', border: '1px solid #d5dbe6' };
const sectionTitle = { fontSize: '13px', color: '#0b1f3a', marginBottom: '10px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const };
const labelStyle = { fontSize: '12px', color: '#5c6776', fontWeight: 700, marginBottom: '6px', display: 'block', textTransform: 'uppercase' as const };
const inputGroup = { marginBottom: '8px' };
const inputStyle = { width: '100%', padding: '11px 12px', borderRadius: '4px', border: '1px solid #d5dbe6', outline: 'none', fontSize: '15px', backgroundColor: '#fbfbfd' };