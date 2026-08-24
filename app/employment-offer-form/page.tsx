"use client";
import React, { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

function FormFields() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    offerDate: "",      // 1
    empName: "",        // 2
    empAddress: "",     // 3
    position: "",       // 4
    compName: "",       // 5
    joiningDate: "",    // 6
    workLocation: "",   // 7
    salary: "",         // 8
    probation: "",      // 9
    authSignatory: "",  // 10
    authDesignation: "",// 11
    acceptanceName: "", // 12
    acceptanceDate: ""  // 13
  });

  const handleNext = () => {
    localStorage.setItem('employmentData', JSON.stringify(formData));
    // ROUTE TO THE CORRECT OFFER DRAFT FOLDER
    router.push('/employment-offer-final-draft');
  };

  return (
    <div style={formContainerS}>
      <button onClick={() => router.back()} style={backBtnS}>← Back</button>
      <h2 style={formTitleS}>Offer Letter Details</h2>
      <p style={{ textAlign: 'center', color: '#64748b' }}>Please fill all 13 fields for the legal document.</p>

      <div style={formGridS}>
        <input placeholder="Offer Date" style={inputS} onChange={e => setFormData({...formData, offerDate: e.target.value})} />
        <input placeholder="Candidate Name" style={inputS} onChange={e => setFormData({...formData, empName: e.target.value})} />
        <input placeholder="Candidate Address" style={inputS} onChange={e => setFormData({...formData, empAddress: e.target.value})} />
        <input placeholder="Position" style={inputS} onChange={e => setFormData({...formData, position: e.target.value})} />
        <input placeholder="Company Name" style={inputS} onChange={e => setFormData({...formData, compName: e.target.value})} />
        <input placeholder="Joining Date" style={inputS} onChange={e => setFormData({...formData, joiningDate: e.target.value})} />
        <input placeholder="Work Location" style={inputS} onChange={e => setFormData({...formData, workLocation: e.target.value})} />
        <input placeholder="Salary" style={inputS} onChange={e => setFormData({...formData, salary: e.target.value})} />
        <input placeholder="Probation (Months)" style={inputS} onChange={e => setFormData({...formData, probation: e.target.value})} />
        <input placeholder="Signatory Name" style={inputS} onChange={e => setFormData({...formData, authSignatory: e.target.value})} />
        <input placeholder="Signatory Designation" style={inputS} onChange={e => setFormData({...formData, authDesignation: e.target.value})} />
        <input placeholder="Acceptance Name" style={inputS} onChange={e => setFormData({...formData, acceptanceName: e.target.value})} />
        <input placeholder="Acceptance Date" style={inputS} onChange={e => setFormData({...formData, acceptanceDate: e.target.value})} />
      </div>
      <button onClick={handleNext} style={submitBtnS}>Generate Final Offer Letter →</button>
    </div>
  );
}

export default function OfferForm() { return <Suspense fallback={<div>Loading...</div>}><FormFields /></Suspense>; }

const formContainerS: React.CSSProperties = { padding: '60px', minHeight: '100vh', background: '#f8fafc' };
const formTitleS: React.CSSProperties = { textAlign: 'center', fontSize: '32px', marginBottom: '10px', color: '#1e293b' };
const backBtnS: React.CSSProperties = { padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: 'white', fontWeight: 'bold' };
const formGridS: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '900px', margin: '40px auto' };
const inputS: React.CSSProperties = { padding: '15px 20px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '16px' };
const submitBtnS: React.CSSProperties = { display: 'block', margin: '40px auto 0', padding: '18px 50px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' };