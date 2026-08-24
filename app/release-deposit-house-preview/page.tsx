"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ReleaseDepositPreview() {
  const router = useRouter();

  const proceedBtnStyle = { 
    width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', 
    border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', 
    cursor: 'pointer', marginTop: '30px' 
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', padding: '40px' }}>
      <div style={{ backgroundColor: 'white', padding: '60px', maxWidth: '900px', margin: '0 auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: 'serif' }}>
        
        <button onClick={() => router.push('/house-details')} style={backBtnStyle}>
          ← Back to Selection
        </button>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '30px' }}>RELEASE OF DEPOSIT OF TITLE DEEDS</h1>
        
        <div style={{ lineHeight: '2.2', color: '#1e293b', textAlign: 'justify', fontSize: '16px' }}>
          <p>THIS DEED OF RELEASE is made and executed on this ___ day of ____________, ____________, BY AND BETWEEN:-</p>
          
          <p>___________________________ (Bank/Financier Name), represented by its Branch Manager, situated at ____________________________________________. (Hereinafter called the RELEASOR/MORTGAGEE) of the first part.</p>
          
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>IN FAVOUR OF</p>
          
          <p>___________________________ S/O, W/O, D/O __________________________, AGED ABOUT ____ YEARS, OCCUPATION: ________________, R/O ____________________________________________. AADHAR NO.__________________. (Hereinafter called the RELEASEE/MORTGAGOR) of the second part.</p>
          
          <p><strong>WHEREAS</strong> the MORTGAGOR had borrowed a sum of Rs.___________/- from the MORTGAGEE and deposited the title deeds of the House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________ as security, registered as Doct.No.______/______ at S.R.O. Bhongir.</p>
          
          <p><strong>WHEREAS</strong> the MORTGAGOR has now repaid the entire loan amount along with interest to the MORTGAGEE. The MORTGAGEE hereby acknowledges the receipt of the full amount and decided to release the property and return all original documents.</p>
          
          <p><strong>NOW THIS DEED WITNESSETH AS FOLLOWS:</strong></p>
          <p>The MORTGAGEE hereby releases and reconveys the schedule property to the MORTGAGOR free from the mortgage debt. The MORTGAGEE confirms that they have no further claim or interest in the said property and have returned the original title deeds to the MORTGAGOR this day.</p>

          <p><strong>SCHEDULE OF THE PROPERTY:</strong> All that the House Bearing No.____________, Consisting of _________________________________, Area ______ Sq.Yards, Situated at ____________________________________.</p>
          <p><strong>BOUNDARIES:</strong> NORTH:________, SOUTH:________, EAST:________, WEST:________.</p>
        </div>

        <button onClick={() => router.push('/release-deposit-house-form')} style={proceedBtnStyle}>
          Proceed to Fill All Blanks →
        </button>
      </div>
    </div>
  );
}

const backBtnStyle = { marginBottom: '20px', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' };