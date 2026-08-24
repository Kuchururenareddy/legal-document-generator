"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function CancellationHouseDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Retrieval key matches your form's saving logic
    const saved = localStorage.getItem('cancellationDraftData');
    if (saved) {
      setData(JSON.parse(saved));
    }

    // Pre-load voices for TTS
    const loadVoices = () => { window.speechSynthesis.getVoices(); };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const getVal = (val: any) => (val ? val : "________________");

  // MASTER CONTENT GENERATOR: Fills Templates with Form Data
  const generateContent = (f: any, activeLang: string) => {
    if (!f) return "";

    if (activeLang === 'te') {
      return `రద్దు పత్రం (DEED OF REVOCATION)
ఈ రద్దు పత్రం ఈ రోజు ${getVal(f.day)} ${getVal(f.month)}, ${getVal(f.year)} న క్రింది పక్షాల మధ్య తయారు చేయబడింది:-

శ్రీ/శ్రీమతి ${getVal(f.fName)} ${getVal(f.fRelation)} ${getVal(f.fRelName)}, వయస్సు ${getVal(f.fAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.fOcc)}, నివాసం ${getVal(f.fAddress)}, ఆధార్ నం. ${getVal(f.fAadhar)}। (ఇక్కడినుంచి ‘మొదటి పక్షం’ అని పిలువబడును).

అనుకూలంగా

శ్రీ/శ్రీమతి ${getVal(f.sName)} ${getVal(f.sRel)} ${getVal(f.sRelName)}, వయస్సు ${getVal(f.sAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.sOcc)}, నివాసం ${getVal(f.sAddress)}, ఆధార్ నం. ${getVal(f.sAadhar)}। (ఇక్కడినుంచి ‘రెండవ పక్షం’ అని పిలువబడును).

ఎందుకంటే ${getVal(f.origDay)} ${getVal(f.origMonth)}, ${getVal(f.origYear)} తేదీన ఈ పక్షాల మధ్య ఒక విక్రయ పత్రం అమలులోకి వచ్చింది, ఇది డాక్యుమెంట్ నం. ${getVal(f.origDoctNo)}/${getVal(f.origRegYear)} గా ఎస్.ఆర్.ఓ. ${getVal(f.sroOffice)} లో నమోదు చేయబడింది (ప్రధాన పత్రం), దాని ప్రకారం హౌస్ నం. ${getVal(f.houseNo)}, ${getVal(f.consistingOf)} కలిగి, మొత్తం విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు, ఉన్నది ${getVal(f.situation)}, రెండవ పక్షానికి విక్రయించబడినది.

ఎందుకంటే రెండవ పక్షం విక్రయ ధరను మొదటి పక్షానికి చెల్లించలేదు. అందువల్ల చివరి మార్గంగా మొదటి పక్షం డాక్యుమెంట్ నం. ${getVal(f.origDoctNo)} ను తక్షణమే రద్దు చేయాలని నిర్ణయించుకుంది.

పై పరిస్థితుల దృష్ట్యా, రెండవ పక్షం భారత ఒప్పంద చట్టం నిబంధనలను పాటించకపోవడం వల్ల ప్రధాన పత్రాన్ని రద్దు చేయడం అవసరమని నిర్ణయించబడింది.

అందువల్ల ఈ రద్దు పత్రం క్రింది విధంగా సాక్ష్యమిస్తుంది:
1. మొదటి పక్షం ప్రధాన పత్రాన్ని రద్దు చేసి శూన్యంగా మరియు అమాన్యంగా ప్రకటిస్తుంది.
2. ఈ రద్దు పత్రం నమోదు కోసం మొదటి పక్షం ఎటువంటి ప్రతిఫలం స్వీకరించలేదు.
3. మొదటి పక్షం స్వచ్ఛందంగా విక్రయ పత్రాన్ని రద్దు చేయడానికి అంగీకరిస్తుంది.

ఆస్తి వివరాలు: హౌస్ నం. ${getVal(f.houseNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు, ఉన్నది ${getVal(f.situation)}।
సరిహద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}।

మొదటి పక్షం సంతకం / రెండవ పక్షం సంతకం`;
    }

    if (activeLang === 'hi') {
      return `निरस्तीकरण विलेख (DEED OF REVOCATION)
यह निरस्तीकरण विलेख आज दिनांक ${getVal(f.day)} ${getVal(f.month)}, ${getVal(f.year)} को निम्नलिखित पक्षों के बीच निष्पादित किया गया:-

श्री/श्रीमती ${getVal(f.fName)} ${getVal(f.fRelation)} ${getVal(f.fRelName)}, आयु ${getVal(f.fAge)} वर्ष, निवासी ${getVal(f.fAddress)}, आधार संख्या ${getVal(f.fAadhar)}। (‘प्रथम पक्ष’)

के पक्ष में

श्री/श्रीमती ${getVal(f.sName)} ${getVal(f.sRel)} ${getVal(f.sRelName)}, आयु ${getVal(f.sAge)} वर्ष, निवासी ${getVal(f.sAddress)}, आधार संख्या ${getVal(f.sAadhar)}। (‘द्वितीय पक्ष’)

जहाँ, एक विक्रय विलेख दिनांक ${getVal(f.origDay)} ${getVal(f.origMonth)}, ${getVal(f.origYear)} को इन्हीं पक्षों के बीच निष्पादित किया गया था, जो दस्तावेज संख्या ${getVal(f.origDoctNo)}/${getVal(f.origRegYear)} के रूप में उप-पंजीयक कार्यालय ${getVal(f.sroOffice)} में पंजीकृत हुआ (मूल विलेख), जिसके द्वारा प्रथम पक्ष ने मकान संख्या ${getVal(f.houseNo)}, द्वितीय पक्ष को विक्रय किया था।

जहाँ, द्वितीय पक्ष ने वास्तव में विक्रय मूल्य का भुगतान नहीं किया, अतः प्रथम पक्ष ने दस्तावेज संख्या ${getVal(f.origDoctNo)} को तत्काल प्रभाव से निरस्त करने का निर्णय लिया। चूँकि द्वितीय पक्ष ने भारतीय अनुबंध अधिनियम (Indian Contract Act) का पालन नहीं किया।

अतः यह विलेख साक्ष्य देता है:
1. प्रथम पक्ष द्वारा मूल विलेख को निरस्त एवं शून्य घोषित किया जाता है।
2. प्रथम पक्ष ने इस पंजीकरण हेतु कोई प्रतिफल प्राप्त नहीं किया है।
3. यह विलेख मूल विलेख के निष्पादन की तिथि से प्रभावी माना जाएगा।

संपत्ति का विवरण: मकान संख्या ${getVal(f.houseNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.situation)}।
सीमाएं: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}।

प्रथम पक्ष के हस्ताक्षर / द्वितीय पक्ष के हस्ताक्षर`;
    }

    return `DEED OF REVOCATION
This deed of REVOCATION is made and executed this ${getVal(f.day)} day of ${getVal(f.month)}, ${getVal(f.year)}, By and between:-

Mr/Mrs ${getVal(f.fName)} ${getVal(f.fRelation)} ${getVal(f.fRelName)}, AGED ${getVal(f.fAge)} YEARS, R/O ${getVal(f.fAddress)}. AADHAR NO.${getVal(f.fAadhar)}. (FIRST PARTY)

IN FAVOUR OF

Mr/Mrs ${getVal(f.sName)} ${getVal(f.sRel)} ${getVal(f.sRelName)}, AGED ${getVal(f.sAge)} YEARS, R/O ${getVal(f.sAddress)}. AADHAR NO.${getVal(f.sAadhar)}. (SECOND PARTY)

WHEREAS by a deed of sale dated ${getVal(f.origDay)} of ${getVal(f.origMonth)}, ${getVal(f.origYear)} registered as Doct.No.${getVal(f.origDoctNo)}/${getVal(f.origRegYear)} at S.R.O. ${getVal(f.sroOffice)} (Principal Deed), FIRST PARTY sold House Bearing No.${getVal(f.houseNo)}, Consisting of ${getVal(f.consistingOf)}, area of ${getVal(f.areaSqYds)} Sq.Yards., Situated at ${getVal(f.situation)}.

WHEREAS the VENDEE did not actually pay the consideration despite requests. As a last resort, the FIRST PARTY hereby cancels the Doct.No.${getVal(f.origDoctNo)} forthwith.

WHEREAS Under the above circumstances it is necessary to cancel the Principal deed since VENDEE did not comply with the provisions of Indian Contract Act.

NOW THEREFORE THIS DEED WITNESSETH:
1. The FIRST PARTY hereby cancels and declares null and void the Principal deed.
2. The FIRST PARTY has not received any consideration for this REVOCATION.
3. This deed shall be deemed to have come into effect from the date of the Principal deed.

SCHEDULE: House No.${getVal(f.houseNo)}, Area ${getVal(f.areaSqYds)} Sq.Yards, Situated at ${getVal(f.situation)}.
BOUNDARIES: NORTH: ${getVal(f.north)}, SOUTH: ${getVal(f.south)}, EAST: ${getVal(f.east)}, WEST: ${getVal(f.west)}.

SIG. OF THE FIRST PARTY / SIG. OF THE SECOND PARTY`;
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
    utterance.onerror = () => setIsSpeaking(false);
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
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1' }}>
              {isSpeaking ? '🛑 Stop' : '🔊 Listen Draft'}
            </button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#ef4444' }}>🖨️ Print Revocation</button>
          </div>
        </div>

        <div style={docSheet}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '17px', lineHeight: '2.3', color: '#1e293b', fontFamily: 'serif' }}>
            {generateContent(data, lang)}
          </div>
          
          <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between' }}>
             <div style={sigBlock}><div style={sigLine}></div><p><strong>FIRST PARTY SIGNATURE</strong></p></div>
             <div style={sigBlock}><div style={sigLine}></div><p><strong>SECOND PARTY SIGNATURE</strong></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const docSheet = { backgroundColor: 'white', padding: '60px', border: '1px solid #e2e8f0', borderRadius: '8px' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const, color: 'white', backgroundColor: '#1e293b' };
const sigBlock = { textAlign: 'center' as const };
const sigLine = { borderBottom: '1.5px solid black', width: '200px', marginBottom: '10px' };