"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeathSaleDeedDraft() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('deathSaleData');
    if (savedData) setData(JSON.parse(savedData));
  }, []);

  if (!data) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading Legal Heir Sale Data...</div>;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#525659', padding: '40px 20px' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => router.back()} style={actionBtn}>← Edit Details</button>
        <button onClick={() => window.print()} style={{ ...actionBtn, backgroundColor: '#22c55e' }}>Print Sale Deed</button>
      </div>

      <div id="print-area" style={paperStyle}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '18px' }}>SALE DEED (BY LEGAL HEIR)</h1>

        <div style={contentStyle}>
          <p>THIS SALE DEED is executed by **{data.vName}**, {data.vRel} **{data.vRelName}**, R/o **{data.vAdd}**, being the Legal Heir of Late **{data.deceasedName}** who died on **{data.deathDate}**.</p>
          
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>IN FAVOUR OF</p>
          
          <p>**{data.pName}**, {data.pRel} **{data.pRelName}**, Aged **{data.pAge}**, Occ: **{data.pOcc}**, R/o **{data.pAdd}**.</p>

          <p><strong>WHEREAS</strong> the VENDOR has received the total consideration of Rs.**{data.totalPrice}**/- (Rupees **{data.priceWords}** ONLY).</p>

          <p><strong>NOW THIS SALE DEED WITNESSETH:</strong></p>
          <ol>
            <li>The Vendor conveys absolute ownership to the Vendee.</li>
            <li>The property is free from all encumbrances and court litigations.</li>
            <li>Vacant physical possession has been handed over today.</li>
            <li>Vendor agrees to indemnify the Vendee against any title defects.</li>
          </ol>

          <p><strong>SCHEDULE:</strong> House No.**{data.hNo}**, Area **{data.sqYards}** Sq.Yds, Situated at **{data.situatedAt}**.</p>
          <p><strong>BOUNDARIES:</strong> NORTH: **{data.north}**, SOUTH: **{data.south}**, EAST: **{data.east}**, WEST: **{data.west}**.</p>
        </div>
      </div>
    </div>
  );
}

const paperStyle = { backgroundColor: 'white', width: '210mm', minHeight: '297mm', padding: '25mm', margin: '0 auto', fontFamily: 'serif' };
const contentStyle = { lineHeight: '2.0', textAlign: 'justify' as const, fontSize: '13px' };
const actionBtn = { padding: '10px 20px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' };