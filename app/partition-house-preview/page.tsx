"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function PartitionPlotPreview() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover' }}></div>

      <div style={sheetStyle}>
        <button onClick={() => router.push('/house-details')} style={backBtn}>← Back</button>
        <h1 style={headerStyle}>PARTITION DEED</h1>
        
        <div style={legalBody}>
          <p>THIS DEED OF PARTITION is made and executed on this the ____ day of OCTOBER, 2025 at _________ by and between:-</p>
          <p><strong>Mr/Mrs ______________________</strong> S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (hereinafter called as the FIRST PARTY) of the First Part.</p>
          <p style={{ textAlign: 'center' }}><strong>AND</strong></p>
          <p><strong>Mr/Mrs ______________________</strong> S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (hereinafter called the SECOND PARTY) of the Second Part.</p>
          <p style={{ textAlign: 'center' }}><strong>AND</strong></p>
          <p><strong>Mr/Mrs ______________________</strong> S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (hereinafter called the THIRD PARTY) of the Third Part.</p>
          
          <p><strong>AND WHEREAS</strong> the said Parties No.1, 2 and 3 had jointly purchased Open Plot bearing No._____, in Sy.No.____, admeasuring an extent of ____ Sq.yards., Situated at ________________________________, Vide a Registered Sale Deed Doct.No._____/________, registered at S.R.O.Bhongir.</p>
          
          <p><strong>WHEREAS</strong> differences and disputes have arisen between above said Parties and the Parties to this deed have mutually settled their disputes and differences and agreed to partition their jointly property.</p>

          <p><strong>NOW THIS DEED WITNESSETH AS FOLLOWS:</strong> That in pursuance of the said agreement the parties have made schedule mentioned properties into Three shares. That the Present Market Value of the Properties mentioned in this deed are of the value of Rs.__________/-.</p>

          <p><strong>SCHEDULE A Property (FIRST PARTY):</strong> All that the Open Plot bearing No._____, in Sy.No._____, admeasuring ________ Sq.yards., Situated at __________________________________________.</p>
          <p><strong>BOUNDARIES:</strong> NORTH:: SOUTH:: EAST:: WEST::</p>
          
          <p style={{ fontWeight: 'bold', marginTop: '40px' }}>IN WITNESS WHEREOF the parties 1, 2 and 3 of this PARTITION DEED ... signed this deed on the date, place afore mentioned in the presence of attesting witnesses:</p>
        </div>

        <button onClick={() => router.push('/partition-plot-form')} style={submitBtn}>Proceed to Fill All Blanks →</button>
      </div>
    </div>
  );
}

const sheetStyle = { backgroundColor: 'rgba(255,255,255,0.98)', padding: '60px', maxWidth: '850px', margin: '0 auto', borderRadius: '15px', fontFamily: 'serif' };
const headerStyle = { textAlign: 'center' as const, fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px' };
const legalBody = { lineHeight: '2.0', textAlign: 'justify' as const, fontSize: '15px', marginTop: '30px' };
const submitBtn = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px' };
const backBtn = { marginBottom: '20px', padding: '8px 15px', cursor: 'pointer' };