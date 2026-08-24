"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReleaseDepositForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Bank Details
    bankName: '', branchLoc: '', managerName: '',
    // Mortgagor Details
    mName: '', mRelType: 'S/O', mRelName: '', mAge: '', mOcc: '', mAdd: '', mAadhar: '',
    // Original Loan/Mortgage
    loanAmt: '', loanAccNo: '', mortDocNo: '', mortYear: '', sroOffice: 'Bhongir',
    // Property Details
    hNo: '', consistOf: '', roofArea: '', situatedAt: '', sqYards: '',
    // Boundaries
    north: '', south: '', east: '', west: ''
  });

  const handleChange = (e: any) => setFormData({...formData, [e.target.name]: e.target.value});

  const sectionStyle = { padding: '25px', border: '1px solid #e2e8f0', borderRadius: '18px', backgroundColor: '#ffffff', marginBottom: '20px' };
  const inputStyle = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px' };
  const selectStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', marginBottom: '10px', fontWeight: 'bold' };
  const labelStyle = { color: '#3b82f6', fontWeight: 'bold', marginBottom: '15px', display: 'block' };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 25px rgba(0,0,0,0.1)' }}>
        
        <button onClick={() => router.back()} style={{ marginBottom: '25px', padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>← Back</button>

        <h2 style={{ textAlign: 'center', marginBottom: '35px', fontWeight: '800' }}>Release of Title Deed Blanks</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          <div style={sectionStyle}>
            <span style={labelStyle}>1. Bank (Releasor) Details</span>
            <input name="bankName" placeholder="Bank Name" onChange={handleChange} style={inputStyle} />
            <input name="branchLoc" placeholder="Branch Address" onChange={handleChange} style={inputStyle} />
            <input name="managerName" placeholder="Branch Manager Name" onChange={handleChange} style={inputStyle} />
          </div>

          <div style={sectionStyle}>
            <span style={labelStyle}>2. Mortgagor (Borrower) Details</span>
            <input name="mName" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="mRelType" onChange={handleChange} style={selectStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option></select>
              <input name="mRelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input name="mAge" placeholder="Age" onChange={handleChange} style={inputStyle} />
              <input name="mAdd" placeholder="Residence (R/O)" onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div style={sectionStyle}>
            <span style={labelStyle}>3. Mortgage & Loan Info</span>
            <input name="loanAmt" placeholder="Loan Amount Paid" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '5px' }}>
              <input name="mortDocNo" placeholder="Mortgage Doc No." onChange={handleChange} style={inputStyle} />
              <input name="mortYear" placeholder="Year" onChange={handleChange} style={inputStyle} />
            </div>
            <input name="sroOffice" placeholder="S.R.O. Office" onChange={handleChange} style={inputStyle} />
          </div>

          <div style={sectionStyle}>
            <span style={labelStyle}>4. Property & Boundaries</span>
            <input name="hNo" placeholder="House No." onChange={handleChange} style={inputStyle} />
            <input name="situatedAt" placeholder="Situated At" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '5px' }}>
              <input name="north" placeholder="North" onChange={handleChange} style={inputStyle} />
              <input name="south" placeholder="South" onChange={handleChange} style={inputStyle} />
            </div>
          </div>
        </div>

        <button onClick={() => {
          localStorage.setItem('releaseDeedData', JSON.stringify(formData));
          router.push('/release-deposit-house-draft');
        }} style={{ width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '15px', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '18px' }}>
          Generate Final Release Deed
        </button>
      </div>
    </div>
  );
}