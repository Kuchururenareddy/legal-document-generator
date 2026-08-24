"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function AgreementOfSaleHouseDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Retrieval key matches your form's saving logic
    const saved = localStorage.getItem('agreementDraft');
    if (saved) {
      setData(JSON.parse(saved));
    }

    // 1. CRITICAL: Pre-load voices for Hindi/Telugu support
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const getVal = (val: any) => (val ? val : "________________");

  const generateContent = (f: any, activeLang: string) => {
    if (!f) return "";

    if (activeLang === 'te') {
      return `విక్రయ ఒప్పందం (AGREEMENT OF SALE)
ఈ విక్రయ ఒప్పందం ఈ ${getVal(f.day)} తేదీ ${getVal(f.month)}, ${getVal(f.year)} నాడు ${getVal(f.place)} వద్ద క్రింది పక్షాల మధ్య చేయబడినది:
${getVal(f.vendorName)} ${getVal(f.vendorRelation)} ${getVal(f.vendorFather)}, వయస్సు సుమారు ${getVal(f.vendorAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.vendorOcc)}, నివాసం ${getVal(f.vendorAddress)}।
(ఇకపై “విక్రేత”గా పిలువబడును) మొదటి పక్షం
కు అనుకూలంగా
${getVal(f.vendeeName)} ${getVal(f.vendeeRelation)} ${getVal(f.vendeeFather)}, వయస్సు సుమారు ${getVal(f.vendeeAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.vendeeOcc)}, నివాసం ${getVal(f.vendeeAddress)}।
(ఇకపై “క్రేత”గా పిలువబడును) రెండవ పక్షం

పేజీ – 2
ఎందుకంటే: విక్రేత ఇంటి నంబర్ ${getVal(f.houseNo)}, ${getVal(f.consistingOf)} కలిగి, మొత్తం విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు, ఆర్.సి.సి. పైకప్పు విస్తీర్ణం ${getVal(f.roofSft)} చదరపు అడుగులు, ${getVal(f.place)} వద్ద ఉన్న ఆస్తికి సంపూర్ణ యజమాని. ఈ ఆస్తి డాక్యుమెంట్ నం. ${getVal(f.saleDeedNo)}/${getVal(f.regYear)} ద్వారా, ఎస్.ఆర్.ఓ. ${getVal(f.sroOffice)}లో నమోదు చేయబడింది.

మరియు విక్రేత ఈ షెడ్యూల్ ఆస్తిని క్రేతకు విక్రయించడానికి అంగీకరించగా, క్రేత మొత్తం విక్రయ ధర ₹${getVal(f.totalPrice)}/- (రూపాయలు ${getVal(f.priceWords)} మాత్రమే) కొనుగోలు చేయడానికి అంగీకరించాడు.

ఇప్పుడు ఈ విక్రయ ఒప్పందం క్రింది విధంగా సాక్ష్యమిస్తుంది (7 క్లాజులు):
1. విక్రయ ధర: ఈ ఒప్పందం ప్రకారం క్రేత ముందస్తు మొత్తం ₹${getVal(f.advanceAmount)}/- తేదీ ${getVal(f.advanceDate)}న చెల్లించాడు. మిగిలిన మొత్తం రిజిస్ట్రేషన్ సమయంలో చెల్లించాలి.
2. పత్రాలు & స్వాధీనం: విక్రేత అన్ని పూర్వపు పత్రాలను మరియు భౌతిక స్వాధీనాన్ని అప్పగించడానికి అంగీకరిస్తున్నాడు.
3. చట్టబద్ధ బాకీలు: రిజిస్ట్రేషన్‌కు ముందు అన్ని పన్నులు మరియు బ్యాంకు రుణాలను విక్రేత చెల్లించాలి.

పేజీ – 3
4. మ్యూటేషన్ (నామమార్పు): సరైన నామమార్పు కోసం అవసరమైన అన్ని పత్రాలపై విక్రేత సంతకం చేస్తాడు.
5. భారం లేనితనం: ఈ ఆస్తి అన్ని రకాల భారం లేనిదని విక్రేత హామీ ఇస్తున్నాడు.
6. నష్టపరిహారం: హక్కుల్లో లోపాలు వల్ల కలిగే నష్టాలకు విక్రేత క్రేతకు పరిహారం చెల్లిస్తాడు.
7. డిఫాల్ట్: విక్రేత విక్రయాన్ని పూర్తి చేయకపోతే, ముందస్తు మొత్తానికి రెట్టింపు తిరిగి చెల్లించాలి.

ఆస్తి షెడ్యూల్: ఇంటి నంబర్ ${getVal(f.houseNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} గజాలు, ${getVal(f.place)} వద్ద ఉన్న ఆస్తి.
హద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}।

పేజీ – 4
ఈ విక్రయ ఒప్పందానికి సాక్ష్యంగా, విక్రేత మరియు క్రేత తమ సంతకాలు చేశారు.`;
    }

    if (activeLang === 'hi') {
      return `विक्रय अनुबंध (AGREEMENT OF SALE)
यह विक्रय अनुबंध आज दिनांक ${getVal(f.day)} ${getVal(f.month)}, ${getVal(f.year)} को ${getVal(f.place)} में निम्नलिखित पक्षों के मध्य संपादित किया गया है:
${getVal(f.vendorName)} पुत्र/पुत्री/पत्नी ${getVal(f.vendorFather)}, आयु लगभग ${getVal(f.vendorAge)} वर्ष, व्यवसाय: ${getVal(f.vendorOcc)}, निवासी ${getVal(f.vendorAddress)}।
(विक्रेता) प्रथम पक्ष के पक्ष में ${getVal(f.vendeeName)} पुत्र/पुत्री/पत्नी ${getVal(f.vendeeFather)}, आयु लगभग ${getVal(f.vendeeAge)} वर्ष, निवासी ${getVal(f.vendeeAddress)} (क्रेता) द्वितीय पक्ष।

पृष्ठ – 2
जबकि: विक्रेता मकान संख्या ${getVal(f.houseNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.place)} में संपत्ति का पूर्ण स्वामी है। उक्त संपत्ति को दस्तावेज संख्या ${getVal(f.saleDeedNo)}/${getVal(f.regYear)}, उप-पंजीयक कार्यालय ${getVal(f.sroOffice)} में पंजीकृत किया गया था।

और जबकि, विक्रेता ने संपत्ति को ₹${getVal(f.totalPrice)}/- (रुपये ${getVal(f.priceWords)} मात्र) के विक्रय मूल्य पर बेचने का प्रस्ताव दिया है।

अब यह विक्रय अनुबंध निम्नानुसार साक्ष्य करता है:
1. विक्रय मूल्य: क्रेता ने अग्रिम राशि ₹${getVal(f.advanceAmount)}/- दिनांक ${getVal(f.advanceDate)} को अदा की है। शेष राशि पंजीकरण के समय अदा की जाएगी।
2. दस्तावेज एवं कब्जा: विक्रेता सभी पूर्व दस्तावेज एवं संपत्ति का भौतिक कब्जा सौंपने के लिए सहमत है।
3. वैधानिक देयताएँ: विक्रेता पंजीकरण से पूर्व सभी करों एवं बैंक ऋणों का भुगतान करेगा।
4. नामांतरण: विक्रेता प्रभावी नामांतरण हेतु आवश्यक दस्तावेजों पर हस्ताक्षर करेगा।
5. भार-मुक्तता: विक्रेता आश्वासन देता है कि संपत्ति भारों से मुक्त है।
6. क्षतिपूर्ति: स्वामित्व में दोष के लिए विक्रेता क्रेता को क्षतिपूर्ति प्रदान करेगा।
7. चूक: यदि विक्रेता विक्रय पूर्ण करने में असफल रहता है, तो वह अग्रिम की दुगुनी राशि लौटाएगा।

संपत्ति की अनुसूची: मकान संख्या ${getVal(f.houseNo)}, सीमाएँ: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}।

पृष्ठ – 4
गवाहों की उपस्थिति में हस्ताक्षर किए गए हैं।`;
    }

    return `AGREEMENT OF SALE
This AGREEMENT OF SALE is made on ${getVal(f.day)} of ${getVal(f.month)}, ${getVal(f.year)} at ${getVal(f.place)}:
${getVal(f.vendorName)} (VENDOR) IN FAVOUR OF ${getVal(f.vendeeName)} (VENDEE).

WHEREAS: The VENDOR is the absolute owner of House No.${getVal(f.houseNo)}, Area ${getVal(f.areaSqYds)} Sq.Yards, Situated at ${getVal(f.place)}. Registered Vide Sale Deed No.${getVal(f.saleDeedNo)}/${getVal(f.regYear)} at SRO ${getVal(f.sroOffice)}.

SALE TERMS:
1. CONSIDERATION: Total Rs.${getVal(f.totalPrice)}/-. Advance Rs.${getVal(f.advanceAmount)}/- paid on ${getVal(f.advanceDate)}.
2. POSSESSION: VENDOR agreed to hand over physical possession.
3. DUES: VENDOR to pay all taxes before registration.
4. MUTATION: VENDOR to sign all papers for mutation.
5. ENCUMBRANCE: Property is free from all charges.
6. INDEMNITY: VENDOR shall indemnify against title defects.
7. DEFAULT: Failure by VENDOR requires double advance return.

BOUNDARIES: NORTH: ${getVal(f.north)}, SOUTH: ${getVal(f.south)}, EAST: ${getVal(f.east)}, WEST: ${getVal(f.west)}.`;
  };

  // 2. ROBUST TTS ENGINE WITH VOICE INITIALIZATION
  const handleToggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = generateContent(data, lang);
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    const targetLang = voiceMap[lang] || 'en-IN';
    utterance.lang = targetLang;
    utterance.rate = 0.85; 

    // Find native voice
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]));
    
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(utterance);
  };

  if (!data) return <div style={{textAlign:'center', padding:'100px'}}>Loading...</div>;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '20px' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '40px', borderRadius: '24px', width: '95%', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← Edit Details</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1' }}>
              {isSpeaking ? '🛑 Stop' : '🔊 Listen Draft'}
            </button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#10b981' }}>🖨️ Print PDF</button>
          </div>
        </div>

        <div style={docSheet}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '18px', lineHeight: '2.2', color: '#1e293b', fontFamily: 'serif' }}>
            {generateContent(data, lang)}
          </div>
          
          <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between' }}>
             <div style={sigBlock}><div style={sigLine}></div><p><strong>{lang === 'te' ? 'విక్రేత సంతకం' : lang === 'hi' ? 'विक्रेता के हस्ताक्षर' : 'VENDOR'}</strong></p></div>
             <div style={sigBlock}><div style={sigLine}></div><p><strong>{lang === 'te' ? 'కొనుగోలుదారు సంతకం' : lang === 'hi' ? 'खरीदार के हस्ताक्षर' : 'VENDEE'}</strong></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const docSheet = { backgroundColor: 'white', padding: '60px', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.02)' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const, color: 'white', backgroundColor: '#1e293b' };
const sigBlock = { textAlign: 'center' as const };
const sigLine = { borderBottom: '1.5px solid black', width: '200px', marginBottom: '10px' };