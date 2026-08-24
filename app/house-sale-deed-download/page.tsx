"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HouseSaleDeedDownload() {
  const [d, setData] = useState<any>(null);
  const [lang, setLang] = useState('English');

  useEffect(() => {
    const savedData = localStorage.getItem('fullSaleDeedData');
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedData) setData(JSON.parse(savedData));
    if (savedLang) setLang(savedLang);
  }, []);

  if (!d) return <div className="ld-page flex min-h-screen items-center justify-center">Loading document…</div>;

  // Translation mapping for Telugu and Hindi
  const content: any = {
    Telugu: {
      title: "విక్రయ ఒప్పంద పత్రం (SALE DEED)",
      intro: `ఈ విక్రయ ఒప్పందం ${d.vName}, ${d.vRel} ${d.vRelName} గారి ద్వారా వ్రాయబడినది. ఆధార్ నంబర్: XXXX XXXX ${d.vAadhar}.`,
      favour: "ఎవరికి అనుకూలంగా అంటే",
      vendee: `${d.eName}, ${d.eRel} ${d.eRelName} గారికి. ఆధార్ నంబర్: XXXX XXXX ${d.eAadhar}.`,
      body: `విక్రయదారుడు తన ఇంటి నంబర్ ${d.hNo} మరియు అసెస్మెంట్ నంబర్ ${d.assessNo} గల ఆస్తిని మొత్తం రూ. ${d.price}/- లకు విక్రయించారు.`
    },
    Hindi: {
      title: "विक्रय विलेख (SALE DEED)",
      intro: `यह विक्रय विलेख ${d.vName}, ${d.vRel} ${d.vRelName} द्वारा निष्पादित किया गया है। आधार नंबर: XXXX XXXX ${d.vAadhar}.`,
      favour: "किसके पक्ष में",
      vendee: `${d.eName}, ${d.eRel} ${d.eRelName} के पक्ष में। आधार नंबर: XXXX XXXX ${d.eAadhar}.`,
      body: `विक्रेता ने अपनी संपत्ति घर नंबर ${d.hNo} और मूल्यांकन नंबर ${d.assessNo} को कुल रु. ${d.price}/- में बेच दिया है।`
    },
    English: {
      title: "SALE DEED (FINAL DOCUMENT)",
      intro: `THIS SALE DEED is executed by ${d.vName}, ${d.vRel} ${d.vRelName}. Aadhar: XXXX XXXX ${d.vAadhar}.`,
      favour: "IN FAVOUR OF",
      vendee: `${d.eName}, ${d.eRel} ${d.eRelName}. Aadhar: XXXX XXXX ${d.eAadhar}.`,
      body: `The Vendor has sold property House No ${d.hNo} with Assessment No ${d.assessNo} for Rs. ${d.price}/-.`
    }
  };

  const current = content[lang] || content['English'];

  return (
    <div className="ld-page flex min-h-screen items-center justify-center py-10">
      <div className="ld-panel w-[min(850px,92%)] p-10 md:p-16">
        <Link href="/house-sale-deed-draft" className="ld-btn-text">← Change Language</Link>
        
        <h2 className="ld-title my-10 text-center">{current.title}</h2>
        
        <div className="ld-doc" style={{ whiteSpace: "normal" }}>
          <p>{current.intro}</p>
          <p style={{ textAlign: "center", fontWeight: 700 }}>{current.favour}</p>
          <p>{current.vendee}</p>
          <p>{current.body}</p>
        </div>

        <button type="button" onClick={() => window.print()} className="ld-btn-primary mt-10 w-full">
          Download as {lang} PDF
        </button>
      </div>
    </div>
  );
}