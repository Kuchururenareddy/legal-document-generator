"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeathSaleDeedForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    vName: '', vRelType: 'S/O', vRelName: '', vAge: '', vOcc: '', vAdd: '', vAadhar: '',
    deceasedName: '', deathDate: '',
    pName: '', pRelType: 'S/O', pRelName: '', pAge: '', pOcc: '', pAdd: '', pAadhar: '',
    hNo: '', consistOf: '', roofArea: '', situatedAt: '', sqYards: '',
    totalPrice: '', priceWords: '',
    north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: any) => setFormData({...formData, [e.target.name]: e.target.value});

  const sectionStyle = { padding: '25px', border: '1px solid #e2e8f0', borderRadius: '18px', backgroundColor: '#ffffff', marginBottom: '20px' };
  const inputStyle = { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px' };
  const selectStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', marginBottom: '12px', fontWeight: 'bold' };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 25px rgba(0,0,0,0.1)' }}>
        
        <button onClick={() => router.back()} style={{ marginBottom: '25px', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #cbd5e1' }}>← Back</button>

        <h2 style={{ textAlign: 'center', marginBottom: '35px', fontWeight: '800' }}>Full Legal Heir Sale Deed Details</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={sectionStyle}>
            <span style={{color: '#3b82f6', fontWeight: 'bold', display: 'block', marginBottom: '10px'}}>1. Vendor (Legal Heir) & Deceased Info</span>
            <input name="vName" placeholder="Legal Heir Full Name" onChange={handleChange} style={inputStyle} />
            <input name="deceasedName" placeholder="Name of Deceased Owner" onChange={handleChange} style={inputStyle} />
            <input name="deathDate" placeholder="Date of Death" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="vRelType" onChange={handleChange} style={selectStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option></select>
              <input name="vRelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            </div>
            <input name="vAdd" placeholder="Residence (R/O)" onChange={handleChange} style={inputStyle} />
            <input name="vAge" placeholder="Vendor Age" onChange={handleChange} style={inputStyle} />
          </div>

          <div style={sectionStyle}>
            <span style={{color: '#3b82f6', fontWeight: 'bold', display: 'block', marginBottom: '10px'}}>2. Vendee (Buyer) Details</span>
            <input name="pName" placeholder="Buyer Full Name" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="pRelType" onChange={handleChange} style={selectStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option></select>
              <input name="pRelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            </div>
            <input name="pAdd" placeholder="Residence (R/O)" onChange={handleChange} style={inputStyle} />
            <input name="pAadhar" placeholder="Buyer Aadhar No." onChange={handleChange} style={inputStyle} />
          </div>

          <div style={sectionStyle}>
            <span style={{color: '#3b82f6', fontWeight: 'bold', display: 'block', marginBottom: '10px'}}>3. Property & Financials</span>
            <input name="hNo" placeholder="House Bearing No." onChange={handleChange} style={inputStyle} />
            <input name="roofArea" placeholder="R.C.C. Roof Area (Sft)" onChange={handleChange} style={inputStyle} />
            <input name="totalPrice" placeholder="Total Sale Price (Numbers)" onChange={handleChange} style={inputStyle} />
            <input name="priceWords" placeholder="Price in Words" onChange={handleChange} style={inputStyle} />
            <input name="situatedAt" placeholder="Situated At" onChange={handleChange} style={inputStyle} />
          </div>

          <div style={sectionStyle}>
            <span style={{color: '#3b82f6', fontWeight: 'bold', display: 'block', marginBottom: '10px'}}>4. Detailed Boundaries</span>
            <input name="north" placeholder="North Boundary" onChange={handleChange} style={inputStyle} />
            <input name="south" placeholder="South Boundary" onChange={handleChange} style={inputStyle} />
            <input name="east" placeholder="East Boundary" onChange={handleChange} style={inputStyle} />
            <input name="west" placeholder="West Boundary" onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        <button onClick={() => {
          localStorage.setItem('deathSaleData', JSON.stringify(formData));
          router.push('/death-sale-deed-house-draft');
        }} style={{ width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '15px', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '18px' }}>
          Generate Final Document
        </button>
      </div>
    </div>
  );
}