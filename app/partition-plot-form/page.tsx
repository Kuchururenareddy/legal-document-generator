"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function PartitionPlotForm() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  
  // State to capture every single blank from the legal proof
  const [formData, setFormData] = useState({
    // Execution Info
    execDay: '', execPlace: '',
    // First Party
    p1Name: '', p1Father: '', p1Age: '', p1Occ: '', p1Address: '', p1Aadhar: '',
    // Second Party
    p2Name: '', p2Father: '', p2Age: '', p2Occ: '', p2Address: '', p2Aadhar: '',
    // Third Party
    p3Name: '', p3Father: '', p3Age: '', p3Occ: '', p3Address: '', p3Aadhar: '',
    // Property Details
    plotNo: '', surveyNo: '', areaSqYds: '', areaSqMtrs: '', situation: '',
    docNo: '', docYear: '', sroOffice: '',
    // Market Value Info
    totalMarketValue: '', share1Value: '', share2Value: '', share3Value: '', valuePerSqYd: '',
    // Boundaries Schedule A
    aNorth: '', aSouth: '', aEast: '', aWest: '',
    // Boundaries Schedule B
    bNorth: '', bSouth: '', bEast: '', bWest: '',
    // Boundaries Schedule C
    cNorth: '', cSouth: '', cEast: '', cWest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    // Save data locally for the Draft page
    localStorage.setItem('partitionPlotData', JSON.stringify(formData));
    router.push('/partition-plot-draft');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", // Background Image Added
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Semi-transparent white card for better focus and readability */}
      <div style={{...formCardStyle, backgroundColor: 'rgba(255, 255, 255, 0.96)'}}>
        
        {/* Header with Switcher */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={backBtnStyle}>
            ← {t.backToSelection || "Back to Preview"}
          </button>
          <LanguageSwitcher />
        </div>

        <h1 style={titleStyle}>
          {lang === 'te' ? 'విభజన పత్రం (ప్లాట్) - ఫారమ్' : lang === 'hi' ? 'बंटवारा विलेख (प्लॉट) - फॉर्म' : 'Partition Deed (Plot) - Form'}
        </h1>
        <p style={subtitleStyle}>
          {lang === 'te' ? 'చట్టపరమైన పత్రంలో ఉన్నట్లుగా అన్ని ఖాళీలను నింపండి.' : lang === 'hi' ? 'कानूनी प्रमाण में दिखाई देने वाले सभी रिक्त स्थान भरें।' : 'Fill all blanks exactly as they appear in the legal proof.'}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* 1. EXECUTION & S.R.O INFO */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '1. అమలు మరియు S.R.O సమాచారం' : lang === 'hi' ? '1. निष्पादन और S.R.O जानकारी' : '1. Execution & S.R.O Info'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="execDay" placeholder="Execution Day (e.g. 23rd)" style={inputStyle} onChange={handleChange} />
              <input name="execPlace" placeholder="Place (e.g. Bhongir)" style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="docNo" placeholder="Regd. Doc No." style={inputStyle} onChange={handleChange} />
              <input name="docYear" placeholder="Regd. Year" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="sroOffice" placeholder="S.R.O. Office" style={inputStyle} onChange={handleChange} />
            <input name="situation" placeholder="Property Situated At" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 2. PLOT SPECIFICATIONS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '2. ప్లాట్ వివరాలు మరియు విలువ' : lang === 'hi' ? '2. प्लॉट विनिर्देश और मूल्य' : '2. Plot Specifications & Value'}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="plotNo" placeholder="Plot No." style={inputStyle} onChange={handleChange} />
              <input name="surveyNo" placeholder="Sy. No." style={inputStyle} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="areaSqYds" placeholder="Area (Sq.Yds)" style={inputStyle} onChange={handleChange} />
              <input name="areaSqMtrs" placeholder="Area (Sq.Mtrs)" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="totalMarketValue" placeholder="Total Market Value (Rs.)" style={inputStyle} onChange={handleChange} />
            <input name="valuePerSqYd" placeholder="Value Per Sq.Yard" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 3. FIRST PARTY DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '3. మొదటి పార్టీ వివరాలు' : lang === 'hi' ? '3. प्रथम पक्ष विवरण' : '3. First Party Details'}
            </h2>
            <input name="p1Name" placeholder="Full Name" style={inputStyle} onChange={handleChange} />
            <input name="p1Father" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="p1Age" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="p1Occ" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="p1Address" placeholder="Full Address (H.No, R/O)" style={inputStyle} onChange={handleChange} />
            <input name="p1Aadhar" placeholder="Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="share1Value" placeholder="Separated Share Value (Rs.)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 4. SECOND PARTY DETAILS */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '4. రెండవ పార్టీ వివరాలు' : lang === 'hi' ? '4. द्वितीय पक्ष विवरण' : '4. Second Party Details'}
            </h2>
            <input name="p2Name" placeholder="Full Name" style={inputStyle} onChange={handleChange} />
            <input name="p2Father" placeholder="Father/Husband Name" style={inputStyle} onChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="p2Age" placeholder="Age" style={inputStyle} onChange={handleChange} />
              <input name="p2Occ" placeholder="Occupation" style={inputStyle} onChange={handleChange} />
            </div>
            <input name="p2Address" placeholder="Full Address" style={inputStyle} onChange={handleChange} />
            <input name="p2Aadhar" placeholder="Aadhar No." style={inputStyle} onChange={handleChange} />
            <input name="share2Value" placeholder="Separated Share Value (Rs.)" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 5. BOUNDARIES: SCHEDULE A */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '5. సరిహద్దులు: షెడ్యూల్ A' : lang === 'hi' ? '5. सीमाएं: अनुसूची A' : '5. Boundaries: Schedule A'}
            </h2>
            <input name="aNorth" placeholder="NORTH" style={inputStyle} onChange={handleChange} />
            <input name="aSouth" placeholder="SOUTH" style={inputStyle} onChange={handleChange} />
            <input name="aEast" placeholder="EAST" style={inputStyle} onChange={handleChange} />
            <input name="aWest" placeholder="WEST" style={inputStyle} onChange={handleChange} />
          </section>

          {/* 6. BOUNDARIES: SCHEDULE B */}
          <section style={sectionStyle}>
            <h2 style={sectionTitle}>
              {lang === 'te' ? '6. సరిహద్దులు: షెడ్యూల్ B' : lang === 'hi' ? '6. सीमाएं: अनुसूची B' : '6. Boundaries: Schedule B'}
            </h2>
            <input name="bNorth" placeholder="NORTH" style={inputStyle} onChange={handleChange} />
            <input name="bSouth" placeholder="SOUTH" style={inputStyle} onChange={handleChange} />
            <input name="bEast" placeholder="EAST" style={inputStyle} onChange={handleChange} />
            <input name="bWest" placeholder="WEST" style={inputStyle} onChange={handleChange} />
          </section>

        </div>

        <button onClick={handleGenerate} style={submitBtnStyle}>
          {lang === 'te' ? 'ముసాయిదాను రూపొందించండి →' : lang === 'hi' ? 'ड्राफ्ट तैयार करें →' : 'Generate Final Partition Draft →'}
        </button>
      </div>
    </div>
  );
}

// STYLES MAINTAINED
const formCardStyle = { maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '50px', borderRadius: '25px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' };
const titleStyle = { textAlign: 'center' as const, fontWeight: '900', fontSize: '26px', color: '#1e293b', marginBottom: '8px' };
const subtitleStyle = { textAlign: 'center' as const, color: '#64748b', marginBottom: '40px' };
const sectionStyle = { display: 'flex', flexDirection: 'column' as const, gap: '12px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '15px', backgroundColor: '#fff' };
const sectionTitle = { fontSize: '13px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase' as const, letterSpacing: '0.5px' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none' };
const backBtnStyle = { padding: '10px 18px', borderRadius: '10px', border: '1px solid #e2e8f0', cursor: 'pointer', marginBottom: '20px', backgroundColor: '#fff', fontWeight: 'bold', color: '#64748b' };
const submitBtnStyle = { width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '15px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', marginTop: '40px', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.5)' };