"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface PartitionData {
  day?: string; month?: string; year?: string; place?: string;
  partyAName?: string; partyAAge?: string; partyAAddress?: string;
  plotNo?: string; surveyNo?: string; totalArea?: string; sroOffice?: string;
  north?: string; south?: string; east?: string; west?: string;
}

export default function PartitionPlotDraft() {
  const router = useRouter();
  const [data, setData] = useState<PartitionData | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('partitionPlotData');
    if (saved) setData(JSON.parse(saved));
  }, []);

  if (!data) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading Final Partition Draft...</div>;

  return (
    <div style={{ minHeight: '100vh', padding: '40px', position: 'relative' }}>
      {/* RAW BACKGROUND */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover' }}></div>

      <div style={docSheetStyle}>
        <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>PARTITION DEED (PLOT)</h1>
        
        <div style={legalBodyStyle}>
          <p>
            THIS PARTITION DEED is executed on this <strong>{data.day}</strong> day of 
            <strong> {data.month}</strong>, <strong>{data.year}</strong>, at <strong>{data.place}</strong>, BY AND BETWEEN:-
          </p>
          
          <p>
            <strong>{data.partyAName}</strong>, AGED <strong>{data.partyAAge}</strong> YEARS, 
            residing at <strong>{data.partyAAddress}</strong> (The FIRST PARTY).
          </p>

          <p>
            <strong>WHEREAS:</strong> The parties are the absolute joint owners of Plot No. 
            <strong> {data.plotNo}</strong>, Survey No. <strong>{data.surveyNo}</strong>, 
            measuring <strong>{data.totalArea}</strong> Sq.Yards, situated at <strong>{data.sroOffice}</strong>.
          </p>

          <p>
            <strong>NOW THIS DEED WITNESSETH:</strong> That the parties have mutually agreed to partition the property 
            so as to avoid future disputes and hold their respective shares as absolute owners.
          </p>

          <p><strong>SCHEDULE OF PROPERTY:</strong> Plot No. <strong>{data.plotNo}</strong>, situated at <strong>{data.sroOffice}</strong>.</p>
          <p><strong>BOUNDARIES:</strong> NORTH: <strong>{data.north}</strong>, SOUTH: <strong>{data.south}</strong>, EAST: <strong>{data.east}</strong>, WEST: <strong>{data.west}</strong>.</p>
        </div>

        <button onClick={() => window.print()} style={printBtn}>Print Final Partition Deed</button>
      </div>
    </div>
  );
}

const docSheetStyle: React.CSSProperties = { backgroundColor: 'white', padding: '80px 60px', maxWidth: '850px', margin: '0 auto', fontFamily: "'Times New Roman', serif", boxShadow: '0 10px 40px rgba(0,0,0,0.2)' };
const legalBodyStyle = { lineHeight: '2.0', textAlign: 'justify' as const, color: '#000', fontSize: '16px' };
const printBtn = { marginTop: '40px', width: '100%', padding: '15px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' };