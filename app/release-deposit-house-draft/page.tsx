"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReleaseDeedDraft() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('releaseDeedData');
    if (savedData) setData(JSON.parse(savedData));
  }, []);

  const actionBtn = { padding: '10px 20px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
  const paperStyle: React.CSSProperties = { backgroundColor: 'white', width: '210mm', minHeight: '297mm', padding: '25mm', margin: '0 auto', boxShadow: '0 0 10px rgba(0,0,0,0.5)', fontFamily: 'serif' };
  const contentStyle: React.CSSProperties = { lineHeight: '2.2', textAlign: 'justify', fontSize: '15px', marginTop: '40px' };

  if (!data) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading Release Data...</div>;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#525659', padding: '40px 20px' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => router.back()} style={actionBtn}>← Edit Details</button>
        <button onClick={() => window.print()} style={{ ...actionBtn, backgroundColor: '#22c55e' }}>Print Release Deed</button>
      </div>

      <div id="print-area" style={paperStyle}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '18px' }}>RELEASE OF DEPOSIT OF TITLE DEEDS</h1>
        <div style={contentStyle}>
          <p>**{data.bankName}**, represented by Branch Manager **{data.managerName}**, situated at **{data.branchLoc}** (MORTGAGEE).</p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px 0' }}>IN FAVOUR OF</p>
          <p>**{data.mName}**, {data.mRelType} **{data.mRelName}**, Aged **{data.mAge}** Years, R/o **{data.mAdd}** (MORTGAGOR).</p>
          
          <p><strong>WHEREAS</strong> the loan of Rs.**{data.loanAmt}**/- has been repaid in full. The Mortgagee acknowledges receipt and releases House No.**{data.hNo}** at **{data.situatedAt}** from the mortgage registered as **{data.mortDocNo}**/**{data.mortYear}**.</p>
          
          <div style={{ marginTop: '100px' }}>
            <p><strong>FOR {data.bankName.toUpperCase()}:</strong> ______________________ (MANAGER)</p>
            <p style={{ marginTop: '40px' }}><strong>WITNESSES:</strong></p>
            <p>1. ______________________</p>
            <p>2. ______________________</p>
          </div>
        </div>
      </div>
    </div>
  );
}