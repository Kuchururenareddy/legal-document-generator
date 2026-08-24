"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PartitionHouseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Shared Details
    execPlace: '', hNo: '', consistOf: '', situatedAt: '', marketValueTotal: '',
    // Party 1 (First Party)
    p1Name: '', p1RelType: 'S/O', p1RelName: '', p1Age: '', p1Occ: '', p1Add: '', p1Aadhar: '',
    // Party 2 (Second Party)
    p2Name: '', p2RelType: 'S/O', p2RelName: '', p2Age: '', p2Occ: '', p2Add: '', p2Aadhar: '',
    // Party 3 (Third Party)
    p3Name: '', p3RelType: 'S/O', p3RelName: '', p3Age: '', p3Occ: '', p3Add: '', p3Aadhar: '',
    // Schedule A (Party 1)
    schAMarketValue: '', schANorth: '', schASouth: '',
    // Schedule B (Party 2)
    schBMarketValue: '', schBNorth: '', schBSouth: '',
    // Schedule C (Party 3)
    schCMarketValue: '', schCNorth: '', schCSouth: ''
  });

  const handleChange = (e: any) => setFormData({...formData, [e.target.name]: e.target.value});

  const sectionStyle = { padding: '25px', border: '1px solid #e2e8f0', borderRadius: '18px', backgroundColor: '#ffffff', marginBottom: '20px' };
  const inputStyle = { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px' };
  const selectStyle = { padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', marginBottom: '12px', backgroundColor: '#f8fafc', fontWeight: 'bold' };
  const labelStyle = { color: '#3b82f6', fontWeight: 'bold', marginBottom: '15px', display: 'block' };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 25px rgba(0,0,0,0.1)' }}>
        <button onClick={() => router.back()} style={{ marginBottom: '25px', padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #cbd5e1' }}>← Back</button>
        <h2 style={{ textAlign: 'center', marginBottom: '35px', fontWeight: '800' }}>Partition Deed Details</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          {/* PARTY 1 */}
          <div style={sectionStyle}>
            <span style={labelStyle}>1. First Party Details</span>
            <input name="p1Name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '5px' }}>
              <select name="p1RelType" onChange={handleChange} style={selectStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option></select>
              <input name="p1RelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            </div>
            <input name="p1Age" placeholder="Age" onChange={handleChange} style={inputStyle} />
            <input name="p1Occ" placeholder="Occupation" onChange={handleChange} style={inputStyle} />
            <input name="p1Add" placeholder="Residence (R/O)" onChange={handleChange} style={inputStyle} />
          </div>

          {/* PARTY 2 */}
          <div style={sectionStyle}>
            <span style={labelStyle}>2. Second Party Details</span>
            <input name="p2Name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '5px' }}>
              <select name="p2RelType" onChange={handleChange} style={selectStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option></select>
              <input name="p2RelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            </div>
            <input name="p2Age" placeholder="Age" onChange={handleChange} style={inputStyle} />
            <input name="p2Occ" placeholder="Occupation" onChange={handleChange} style={inputStyle} />
            <input name="p2Add" placeholder="Residence (R/O)" onChange={handleChange} style={inputStyle} />
          </div>

          {/* PARTY 3 */}
          <div style={sectionStyle}>
            <span style={labelStyle}>3. Third Party Details</span>
            <input name="p3Name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '5px' }}>
              <select name="p3RelType" onChange={handleChange} style={selectStyle}><option value="S/O">S/O</option><option value="W/O">W/O</option><option value="D/O">D/O</option></select>
              <input name="p3RelName" placeholder="Father/Husband Name" onChange={handleChange} style={inputStyle} />
            </div>
            <input name="p3Age" placeholder="Age" onChange={handleChange} style={inputStyle} />
            <input name="p3Occ" placeholder="Occupation" onChange={handleChange} style={inputStyle} />
            <input name="p3Add" placeholder="Residence (R/O)" onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        {/* PROPERTY SCHEDULES */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '10px' }}>
           <div style={sectionStyle}>
              <span style={labelStyle}>4. Common Property Details</span>
              <input name="hNo" placeholder="Joint House Bearing No." onChange={handleChange} style={inputStyle} />
              <input name="situatedAt" placeholder="Situated At" onChange={handleChange} style={inputStyle} />
              <input name="marketValueTotal" placeholder="Total Market Value (Rs.)" onChange={handleChange} style={inputStyle} />
           </div>
           <div style={sectionStyle}>
              <span style={labelStyle}>5. Schedule A, B, C Owners</span>
              <input name="schAOwner" placeholder="Schedule A Allotted To" onChange={handleChange} style={inputStyle} />
              <input name="schBOwner" placeholder="Schedule B Allotted To" onChange={handleChange} style={inputStyle} />
              <input name="schCOwner" placeholder="Schedule C Allotted To" onChange={handleChange} style={inputStyle} />
           </div>
        </div>

        <button onClick={() => {
          localStorage.setItem('partitionHouseData', JSON.stringify(formData));
          router.push('/partition-house-draft');
        }} style={{ width: '100%', padding: '20px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '15px', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '18px' }}>
          Generate Final Partition Deed
        </button>
      </div>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '14px' };