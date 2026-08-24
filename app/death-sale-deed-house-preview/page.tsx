"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function DeathSaleDeedPreview() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', padding: '40px' }}>
      <div style={{ backgroundColor: 'white', padding: '60px', maxWidth: '900px', margin: '0 auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: 'serif' }}>
        
        <button onClick={() => router.push('/house-details')} style={{ marginBottom: '20px', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer' }}>
          ← Back to Selection
        </button>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '30px' }}>SALE DEED (BY LEGAL HEIRS)</h1>
        
        <div style={{ lineHeight: '2.2', color: '#1e293b', textAlign: 'justify', fontSize: '16px' }}>
          <p>THIS SALE DEED is made and executed on this ___ day of ____________, ____________, BY AND BETWEEN:-</p>
          <p>___________________________ S/O, W/O, D/O __________________________, AGED ABOUT ____ YEARS, OCCUPATION: ________________, R/O ____________________________________________. AADHAR NO.__________________. (Hereinafter called the VENDOR/LEGAL HEIR) [cite: 1, 2]</p>
          
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>IN FAVOUR OF</p>
          <p>___________________________ S/O, W/O, D/O __________________________, AGED ABOUT ____ YEARS, OCCUPATION: ________________, R/O ____________________________________________. AADHAR NO.__________________. (Hereinafter called the VENDEE) [cite: 3, 4]</p>
          
          <p><strong>WHEREAS</strong> the Late __________________________ was the absolute owner of House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________[cite: 4].</p>
          
          <p><strong>AND WHEREAS</strong> the owner died on ___________, and the VENDOR being the legal heir has succeeded to the property[cite: 5].</p>

          <p><strong>NOW THIS SALE DEED WITNESSETH AS FOLLOWS:</strong></p>
          <ol>
            <li>The VENDOR has received total consideration of Rs.___________/- (Rupees ________________________________ ONLY)[cite: 6].</li>
            <li>The VENDOR hereby conveys and transfers absolute ownership[cite: 7].</li>
            <li>The property is free from all encumbrances and mortgages[cite: 8].</li>
            <li>The VENDOR has handed over vacant physical possession[cite: 9].</li>
            <li>The VENDOR agrees to indemnify the VENDEE against any losses or title defects[cite: 8, 20].</li>
            <li>All taxes and levies have been cleared up to the date of registration[cite: 18].</li>
            <li>The VENDOR will sign all necessary mutation documents[cite: 21].</li>
            <li>The VENDEE shall enjoy the property without any interruption from the VENDOR or heirs[cite: 15].</li>
            <li>The VENDOR confirms no previous sale agreement exists for this property[cite: 17].</li>
            <li>The VENDOR has handed over all original link documents[cite: 19].</li>
          </ol>

          <p><strong>SCHEDULE OF THE PROPERTY:</strong> House No.____________, Situated at ____________________________________. BOUNDARIES: NORTH:____, SOUTH:____, EAST:____, WEST:____[cite: 9, 10].</p>
          
          <p><strong>WITNESSES:</strong> 1.________________ 2.________________. SIGNATURE OF VENDOR[cite: 11].</p>
        </div>

        <button onClick={() => router.push('/death-sale-deed-house-form')} style={{ width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px' }}>
          Proceed to Fill All Blanks →
        </button>
      </div>
    </div>
  );
}