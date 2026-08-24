"use client";
import React, { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

function BondFormFields() {
  const router = useRouter();
  const [f, setF] = useState({
    day: "", month: "", year: "", compName: "", compAddress: "", 
    empName: "", empAddress: "", bondYears: "", joiningDate: "", 
    bondAmount: "", jurisdiction: "", authSignatory: "", 
    authDesignation: "", empSignName: "", signDate: "", 
    witness1: "", witness2: "" 
  });

  const handleNext = () => {
    localStorage.setItem('bondData', JSON.stringify(f));
    router.push('/employment-bond-final-draft'); 
  };

  return (
    <div style={{ padding: '60px', background: '#f8fafc', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '30px' }}>SERVICE BOND DETAILS</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', maxWidth: '1100px', margin: '0 auto' }}>
        {Object.keys(f).map((key) => (
          <input 
            key={key} 
            placeholder={key.toUpperCase().replace(/([A-Z])/g, ' $1').trim()} 
            style={{ padding: '15px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '14px' }} 
            onChange={e => setF({...f, [key]: e.target.value})} 
          />
        ))}
      </div>
      <button 
        onClick={handleNext} 
        style={{ display: 'block', margin: '40px auto 0', padding: '18px 60px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}
      >
        Generate Final Bond Draft →
      </button>
    </div>
  );
}

export default function BondForm() { return <Suspense fallback={<div>Loading...</div>}><BondFormFields /></Suspense>; }