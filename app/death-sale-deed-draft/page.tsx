"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, Square } from 'lucide-react';

export default function DeathSaleDeedDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('deathSaleDeedData');
    if (saved) {
      setData(JSON.parse(saved));
    }
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const getVal = (val: any) => (val ? val : "________________");

  const generateContent = (f: any, activeLang: string) => {
    if (!f) return "";

    if (activeLang === 'te') {
      return `మరణానంతర విక్రయ పత్రం (DEATH SALE DEED)
ఈ విక్రయ పత్రం ఈ ${getVal(f.execDay)} తేదీ ${getVal(f.execMonth)}, ${getVal(f.execYear)} నాడు ${getVal(f.execPlace)} వద్ద చేయబడినది:

శ్రీ/శ్రీమతి ${getVal(f.vendorName)} ${getVal(f.vendorRelation)} ${getVal(f.vendorFather)}, వయస్సు ${getVal(f.vendorAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.vendorOcc)}, నివాసం ${getVal(f.vendorAddress)}, ఆధార్ నం.${getVal(f.vendorAadhar)}। (ఇకపై “విక్రేత” అని పిలువబడును) మొదటి పక్షం।

పక్షమున

శ్రీ/శ్రీమతి ${getVal(f.vendeeName)} ${getVal(f.vendeeRelation)} ${getVal(f.vendeeFather)}, వయస్సు ${getVal(f.vendeeAge)} సంవత్సరాలు, నివాసం ${getVal(f.vendeeAddress)}, ఆధార్ నం.${getVal(f.vendeeAadhar)}। (ఇకపై “కొనుగోలుదారు (VENDEE)” అని పిలువబడును) రెండవ పక్షం।

కాగా విక్రేత ఓపెన్ ప్లాట్ నం.${getVal(f.plotNo)}, సర్వే నం.${getVal(f.surveyNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ${getVal(f.situation)} వద్ద ఉన్న ఆస్తికి పూర్తి యజమాని। ఈ ఆస్తి డాక్యుమెంట్ నం.${getVal(f.saleDeedNo)}/${getVal(f.saleDeedYear)} ద్వారా S.R.O.${getVal(f.sroOffice)} లో నమోదు చేయబడింది.

${getVal(f.deathState)} ప్రభుత్వం లేట్ శ్రీ/శ్రీమతి ${getVal(f.deceasedName)} గారి పేరున మరణ ధృవపత్రం నమోదు నం.${getVal(f.deathRegNo)}, తేదీ:${getVal(f.deathDate)} న జారీ చేసింది. విక్రేతల పేరున చట్టబద్ధ వారసుల ధృవపత్రం తేదీ:${getVal(f.heirCertLetterDate)} న ${getVal(f.heirCertIssuer)} ద్వారా జారీ చేయబడింది.

విక్రేతలు కుటుంబ అవసరాలు మరియు వ్యక్తిగత విషయాల నిమిత్తం పై ఆస్తిని మొత్తం రూ.${getVal(f.totalConsideration)}/- (${getVal(f.considerationWords)}) కు విక్రయించేందుకు అంగీకరించారు.

షెడ్యూల్ ఆఫ్ ప్రాపర్టీ: ఓపెన్ ప్లాట్ నం.${getVal(f.plotNo)}, సర్వే నం.${getVal(f.surveyNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు, ${getVal(f.situation)} వద్ద ఉన్నది.
సరిహద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}।

రసీదు: నేను శ్రీ/శ్రీమతి ${getVal(f.vendorName)} తేదీ ${getVal(f.receiptDate)} నాడు మొత్తం రూ.${getVal(f.totalConsideration)}/- స్వీకరించాను.`;
    }

    if (activeLang === 'hi') {
      return `मृत्यु उपरांत विक्रय विलेख (DEATH SALE DEED)
यह विक्रय विलेख आज दिनांक ${getVal(f.execDay)} ${getVal(f.execMonth)}, ${getVal(f.execYear)} को ${getVal(f.execPlace)} पर निष्पादित किया गया:

श्री/श्रीमती ${getVal(f.vendorName)} ${getVal(f.vendorRelation)} ${getVal(f.vendorFather)}, आयु ${getVal(f.vendorAge)} वर्ष, निवासी ${getVal(f.vendorAddress)}, आधार संख्या ${getVal(f.vendorAadhar)}। (“विक्रेता”) प्रथम पक्ष।

के पक्ष में

श्री/श्रीमती ${getVal(f.vendeeName)} ${getVal(f.vendeeRelation)} ${getVal(f.vendeeFather)}, निवासी ${getVal(f.vendeeAddress)}, आधार संख्या ${getVal(f.vendeeAadhar)}। (“क्रेता”) द्वितीय पक्ष।

जबकि विक्रेता प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.surveyNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.situation)} का पूर्ण स्वामी है। यह दस्तावेज संख्या ${getVal(f.saleDeedNo)}/${getVal(f.saleDeedYear)} के माध्यम से S.R.O. ${getVal(f.sroOffice)} में पंजीकृत है।

जबकि ${getVal(f.deathState)} सरकार द्वारा ${getVal(f.deceasedName)} के नाम मृत्यु प्रमाण पत्र पंजीकरण संख्या ${getVal(f.deathRegNo)}, दिनांक ${getVal(f.deathDate)} को जारी किया गया है। विधिक उत्तराधिकारी प्रमाण पत्र दिनांक ${getVal(f.heirCertLetterDate)} को ${getVal(f.heirCertIssuer)} द्वारा जारी किया गया है।

विक्रेताओं ने उक्त संपत्ति को कुल मूल्य रु.${getVal(f.totalConsideration)}/- (${getVal(f.considerationWords)}) में बेचने का प्रस्ताव दिया है।

संपत्ति की अनुसूची: प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.surveyNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज।
सीमाएं: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}।

रसीद: मैंने श्री/श्रीमती ${getVal(f.vendorName)} ने आज रु.${getVal(f.totalConsideration)}/- प्राप्त किए।`;
    }

    return `DEATH SALE DEED
THIS SALE DEED is made and executed on this ${getVal(f.execDay)} day of ${getVal(f.execMonth)}, ${getVal(f.execYear)} at ${getVal(f.execPlace)} by:-

Mr/Mrs ${getVal(f.vendorName)} ${getVal(f.vendorRelation)} ${getVal(f.vendorFather)}, AGED ${getVal(f.vendorAge)} YEARS, R/O ${getVal(f.vendorAddress)}. AADHAR NO.${getVal(f.vendorAadhar)}. (Hereinafter called the VENDOR) of the first part.

IN FAVOUR OF

Mr/Mrs ${getVal(f.vendeeName)} ${getVal(f.vendeeRelation)} ${getVal(f.vendeeFather)}, AGED ${getVal(f.vendeeAge)} YEARS, R/O ${getVal(f.vendeeAddress)}. AADHAR NO.${getVal(f.vendeeAadhar)}. (Hereinafter called the VENDEE) of the Second part.

WHEREAS the VENDOR is the absolute Owner of the Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.surveyNo)}, admeasuring ${getVal(f.areaSqYds)} Sq.Yards, Situated at ${getVal(f.situation)}. Vide Regd. Sale deed Doct.No.${getVal(f.saleDeedNo)}/${getVal(f.saleDeedYear)} at S.R.O.${getVal(f.sroOffice)}.

WHEREAS GOVERNMENT OF ${getVal(f.deathState)}, has issued a Death Certificate in favour of Late ${getVal(f.deceasedName)}, Vide Reg. No.${getVal(f.deathRegNo)}, Dated:${getVal(f.deathDate)}, issued by ${getVal(f.deathCertIssuer)}. Legal Heir Certificate issued in favour of Vendors Dated:${getVal(f.heirCertLetterDate)} by ${getVal(f.heirCertIssuer)}.

AND WHEREAS the VENDORS have jointly offered to sell the property for a total consideration of Rs.${getVal(f.totalConsideration)}/- (${getVal(f.considerationWords)}) for family necessities.

SCHEDULE: Open Plot No.${getVal(f.plotNo)}, Sy.No.${getVal(f.surveyNo)}, Area ${getVal(f.areaSqYds)} Sq.Yds, Situated at ${getVal(f.situation)}.
BOUNDARIES: NORTH: ${getVal(f.north)}, SOUTH: ${getVal(f.south)}, EAST: ${getVal(f.east)}, WEST: ${getVal(f.west)}.

In witness whereof the parties have signed this Sale Deed.`;
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    const textToRead = generateContent(data, lang);
    const utterance = new SpeechSynthesisUtterance(textToRead);
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  if (!data) return <div style={{textAlign:'center', padding:'100px'}}>Loading...</div>;

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundImage: "url('/legal-bg.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed', 
      padding: '20px' 
    }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', padding: '40px', borderRadius: '24px', width: '95%', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← Edit Details</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isSpeaking ? <Square size={16}/> : <Volume2 size={16}/>} {isSpeaking ? 'Stop Reading' : 'Listen Draft'}
            </button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#10b981', color: 'white' }}>🖨️ Print PDF</button>
          </div>
        </div>

        <div style={docSheet}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '16px', lineHeight: '2.2', color: '#1e293b', fontFamily: 'serif' }}>
            {generateContent(data, lang)}
          </div>
          <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between' }}>
             <div><div style={sigLine}></div><p><strong>VENDOR(S) SIGNATURE</strong></p></div>
             <div><div style={sigLine}></div><p><strong>VENDEE SIGNATURE</strong></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const docSheet = { backgroundColor: 'white', padding: '60px', border: '1px solid #e2e8f0', borderRadius: '8px' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const, backgroundColor: '#cbd5e1' };
const sigLine = { borderBottom: '1.5px solid black', width: '200px', marginBottom: '10px' };