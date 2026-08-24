"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function CancellationPlotForm() {
  const router = useRouter();
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    // Execution Date
    execDay: '', execMonth: '', execYear: '2025',
    // First Party
    p1Name: '', p1RelType: 'S/O', p1RelName: '', p1Age: '', p1Occ: '', p1Add: '', p1Aadhar: '',
    // Second Party
    p2Name: '', p2RelType: 'S/O', p2RelName: '', p2Age: '', p2Occ: '', p2Add: '', p2Aadhar: '',
    // Original Deed Details
    pdDay: '', pdMonth: '', pdYear: '', pdDocNo: '', pdYearReg: '', sroOffice: 'Bhongir',
    // Plot Details
    plotNo: '', surveyNo: '', areaSqYds: '', areaSqMtrs: '', situation: '',
    north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: any) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleGenerate = () => {
    localStorage.setItem('cancellationPlotData', JSON.stringify(formData));
    router.push('/cancellation-plot-draft');
  };

  const sectionStyle = { padding: '20px', border: '1px solid #e2e8f0', borderRadius: '15px', backgroundColor: '#ffffff', marginBottom: '20px' };
  const inputStyle = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' };
  const labelStyle = { color: '#3b82f6', fontWeight: 'bold', marginBottom: '10px', display: 'block', fontSize: '13px' };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.98)', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', fontWeight: 'bold' }}>
            ← Back
          </button>
          <LanguageSwitcher />
        </div>

        <h2 style={{ textAlign: 'center', fontWeight: '800', marginBottom: '30px' }}>Cancellation Plot Details</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <section style={sectionStyle}>
            <span style={labelStyle}>1. First Party (Executing Party)</span>
            <input name="p1Name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
            <select name="p1RelType" onChange={handleChange} style={inputStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option></select>
            <input name="p1RelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            <input name="p1Age" placeholder="Age" onChange={handleChange} style={inputStyle} />
            <input name="p1Occ" placeholder="Occupation" onChange={handleChange} style={inputStyle} />
            <input name="p1Add" placeholder="Full Address" onChange={handleChange} style={inputStyle} />
            <input name="p1Aadhar" placeholder="Aadhar Number" onChange={handleChange} style={inputStyle} />
          </section>

          <section style={sectionStyle}>
            <span style={labelStyle}>2. Second Party (Vendee)</span>
            <input name="p2Name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
            <select name="p2RelType" onChange={handleChange} style={inputStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option></select>
            <input name="p2RelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            <input name="p2Age" placeholder="Age" onChange={handleChange} style={inputStyle} />
            <input name="p2Occ" placeholder="Occupation" onChange={handleChange} style={inputStyle} />
            <input name="p2Add" placeholder="Full Address" onChange={handleChange} style={inputStyle} />
            <input name="p2Aadhar" placeholder="Aadhar Number" onChange={handleChange} style={inputStyle} />
          </section>

          <section style={sectionStyle}>
            <span style={labelStyle}>3. Original Deed Info (To be Cancelled)</span>
            <input name="pdDay" placeholder="Original Deed Day" onChange={handleChange} style={inputStyle} />
            <input name="pdMonth" placeholder="Original Deed Month" onChange={handleChange} style={inputStyle} />
            <input name="pdYear" placeholder="Original Deed Year" onChange={handleChange} style={inputStyle} />
            <input name="pdDocNo" placeholder="Sale Deed No." onChange={handleChange} style={inputStyle} />
            <input name="pdYearReg" placeholder="Registration Year" onChange={handleChange} style={inputStyle} />
          </section>

          <section style={sectionStyle}>
            <span style={labelStyle}>4. Plot Boundaries</span>
            <input name="north" placeholder="North" onChange={handleChange} style={inputStyle} />
            <input name="south" placeholder="South" onChange={handleChange} style={inputStyle} />
            <input name="east" placeholder="East" onChange={handleChange} style={inputStyle} />
            <input name="west" placeholder="West" onChange={handleChange} style={inputStyle} />
          </section>
        </div>

        <button onClick={handleGenerate} style={{ width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '15px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          Generate Final Draft →
        </button>
      </div>
    </div>
  );
}