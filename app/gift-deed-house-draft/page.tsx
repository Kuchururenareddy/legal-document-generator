"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function GiftDeedHouseDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Retrieval key matches your form's saving logic
    const saved = localStorage.getItem('giftDeedData');
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
      return `గిఫ్ట్ డీడ్ (ఇల్లు ఆస్తి)
ఈ గిఫ్ట్ డీడ్ ఈ ${getVal(f.day)} తేదీ ${getVal(f.month)}, ${getVal(f.year)} నాడు ${getVal(f.place)} వద్ద క్రింద పేర్కొన్న పక్షాల మధ్య చేయబడింది:

${getVal(f.donorName)} ${getVal(f.donorRelation)} ${getVal(f.donorFather)}, వయస్సు సుమారు ${getVal(f.donorAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.donorOcc)}, నివాసం ${getVal(f.donorAddress)}. ఆధార్ నం. ${getVal(f.donorAadhar)}. (ఇకపై “దాత” అని పిలువబడును) మొదటి పక్షం.

కు అనుకూలంగా

${getVal(f.doneeName)} ${getVal(f.doneeRelation)} ${getVal(f.doneeFather)}, వయస్సు సుమారు ${getVal(f.doneeAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.doneeOcc)}, నివాసం ${getVal(f.doneeAddress)}. ఆధార్ నం. ${getVal(f.doneeAadhar)}. (ఇకపై “గ్రహీత” అని పిలువబడును) రెండవ పక్షం.

దాత గృహ నం. ${getVal(f.houseNo)}, ఇందులో ${getVal(f.consistingOf)} కలిగి, మొత్తం విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ఆర్.సి.సి. పైకప్పు విస్తీర్ణం ${getVal(f.roofSft)} చదరపు అడుగులు, ఉన్న స్థలం ${getVal(f.situation)} యొక్క సంపూర్ణ యజమాని మరియు స్వాధీనం కలిగియున్నవాడు. రిజిస్టర్డ్ సేల్ డీడ్ డాక్యుమెంట్ నం. ${getVal(f.saleDeedNo)}/${getVal(f.regYear)}, ఎస్.ఆర్.ఓ ${getVal(f.sroOffice)} వద్ద నమోదు చేయబడింది.

దాత మరియు గ్రహీత మధ్య సంబంధం ${getVal(f.relationship)} కాగా, సహజమైన ప్రేమ మరియు మమకారంతో దాత తన స్వేచ్ఛా సంకల్పంతో పై ఆస్తిని గ్రహీతకు బహుమతిగా ఇవ్వాలని నిర్ణయించుకున్నాడు.

ఇది క్రింది షరతులతో గిఫ్ట్ డీడ్ సాక్ష్యమిస్తుంది:
1. దాత పై షెడ్యూల్ ఆస్తిని శాశ్వతంగా గ్రహీతకు బహుమతిగా బదిలీ చేస్తున్నాడు.
2. గ్రహీత ఈ బహుమతిని స్వీకరించి ఈ రోజు నుండి భౌతిక స్వాధీనం పొందాడు.
3. ఈ ఆస్తి పై ఎటువంటి అప్పులు, బాంధకాలు లేదా కోర్టు వివాదాలు లేవని దాత హామీ ఇస్తున్నాడు.
4. రిజిస్ట్రేషన్ తేదీ వరకు ఉన్న పన్నులు, విద్యుత్ బిల్లులను దాత చెల్లించును.
5. ఆస్తి మ్యూటేషన్ కోసం అవసరమైన అన్ని పత్రాలను దాత అమలు చేయును.
6. భవిష్యత్తులో అన్ని పన్నులు మరియు లెవీలు గ్రహీత చెల్లించును.
7. దాత అన్ని అసలు లింక్ డాక్యుమెంట్లు మరియు హక్కు పత్రాలను గ్రహీతకు అప్పగించెను.

అనెక్సర్ 1-A (ఆస్తి వివరణ): గృహ నం. ${getVal(f.houseNo)}, ఇందులో ${getVal(f.consistingOf)}, ఆర్.సి.సి. పైకప్పు విస్తీర్ణం ${getVal(f.roofSft)} చదరపు అడుగులు, ఉన్న స్థలం ${getVal(f.situation)}. ఆస్తి మార్కెట్ విలువ రూ. ${getVal(f.marketValue)}/-.

సరిహద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}.

దాత సంతకం`;
    }

    if (activeLang === 'hi') {
      return `गिफ्ट डीड (मकान संपत्ति)
यह गिफ्ट डीड इस ${getVal(f.day)} दिन ${getVal(f.month)}, ${getVal(f.year)} को ${getVal(f.place)} में निष्पादित की गई है:

${getVal(f.donorName)} पुत्र/पत्नी/पुत्री ${getVal(f.donorFather)}, आयु लगभग ${getVal(f.donorAge)} वर्ष, व्यवसाय: ${getVal(f.donorOcc)}, निवासी ${getVal(f.donorAddress)}. आधार संख्या: ${getVal(f.donorAadhar)}. (आगे “दाता” कहा जाएगा) प्रथम पक्ष।

के पक्ष में

${getVal(f.doneeName)} पुत्र/पत्नी/पुत्री ${getVal(f.doneeFather)}, आयु लगभग ${getVal(f.doneeAge)} वर्ष, व्यवसाय: ${getVal(f.doneeOcc)}, निवासी ${getVal(f.doneeAddress)}. आधार संख्या: ${getVal(f.doneeAadhar)}. (आगे “प्राप्तकर्ता” कहा जाएगा) द्वितीय पक्ष।

जहाँ दाता मकान संख्या ${getVal(f.houseNo)}, जिसमें ${getVal(f.consistingOf)} शामिल है, कुल क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, आर.सी.सी. छत क्षेत्र ${getVal(f.roofSft)} वर्ग फुट, स्थित ${getVal(f.situation)}, का पूर्ण स्वामी है। पंजीकृत विक्रय विलेख दस्तावेज संख्या ${getVal(f.saleDeedNo)}/${getVal(f.regYear)}, उप-पंजीयक कार्यालय ${getVal(f.sroOffice)} में पंजीकृत।

जहाँ दाता और प्राप्तकर्ता का संबंध ${getVal(f.relationship)} है, दाता ने प्राकृतिक प्रेम एवं स्नेह के कारण स्वेच्छा से उक्त संपत्ति उपहार स्वरूप देने का निर्णय लिया है।

अब यह गिफ्ट डीड निम्नलिखित शर्तों के साथ साक्षी है:
1. दाता द्वारा उक्त संपत्ति को स्थायी रूप से प्राप्तकर्ता को उपहारस्वरूप हस्तांतरित किया जाता है।
2. प्राप्तकर्ता ने इस उपहार को स्वीकार कर लिया है और भौतिक कब्जा प्राप्त कर लिया है।
3. दाता आश्वासन देता है कि संपत्ति किसी भी बंधक या विवाद से मुक्त है।
4. पंजीकरण की तिथि तक के सभी कर एवं बिजली बिल दाता द्वारा भुगतान किए जाएंगे।
5. संपत्ति के नामांतरण हेतु आवश्यक सभी दस्तावेज दाता द्वारा निष्पादित किए जाएंगे।
6. भविष्य में सभी कर एवं शुल्क प्राप्तकर्ता द्वारा भुगतान किए जाएंगे।
7. दाता ने सभी मूल दस्तावेज प्राप्तकर्ता को सौंप दिए हैं।

अनुबंध 1-A (संपत्ति का विवरण): मकान संख्या ${getVal(f.houseNo)}, छत क्षेत्र ${getVal(f.roofSft)} वर्ग फुट, स्थित ${getVal(f.situation)}. संपत्ति का बाजार मूल्य रु. ${getVal(f.marketValue)}/- है।

सीमाएँ: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}.

दाता के हस्ताक्षर`;
    }

    return `GIFT DEED (HOUSE PROPERTY)
THIS GIFT DEED is made and executed on this ${getVal(f.day)} day of ${getVal(f.month)}, ${getVal(f.year)} at ${getVal(f.place)}, BY AND BETWEEN:-

${getVal(f.donorName)} ${getVal(f.donorRelation)} ${getVal(f.donorFather)}, AGED ABOUT ${getVal(f.donorAge)} YEARS, R/O ${getVal(f.donorAddress)}. AADHAR NO.${getVal(f.donorAadhar)}. (DONOR)

IN FAVOUR OF

${getVal(f.doneeName)} ${getVal(f.doneeRelation)} ${getVal(f.doneeFather)}, AGED ABOUT ${getVal(f.doneeAge)} YEARS, R/O ${getVal(f.doneeAddress)}. AADHAR NO.${getVal(f.doneeAadhar)}. (DONEE)

WHEREAS the DONOR is the absolute Owner of House Bearing No.${getVal(f.houseNo)}, Consisting of ${getVal(f.consistingOf)}, admeasuring an area of ${getVal(f.areaSqYds)} Sq.Yards., Situated at ${getVal(f.situation)}. Vide Regd. Sale Deed Doct.No.${getVal(f.saleDeedNo)}/${getVal(f.regYear)}, Regd. at S.R.O.${getVal(f.sroOffice)}.

WHEREAS the DONOR and DONEE are related as ${getVal(f.relationship)}, and out of natural love and affection, the DONOR decides to gift the property.

NOW THIS GIFT DEED WITNESSETH:
1. DONOR transfers and conveys the property to the DONEE forever.
2. DONEE has accepted the gift and taken physical possession today.
3. DONOR assures the property is free from all encumbrances.
4. DONOR agrees to pay all taxes and dues up to the date of registration.
5. DONOR shall execute documents required for mutation.
6. DONEE shall pay all future taxes.
7. DONOR has handed over all original documents to the DONEE.

ANNEXURE 1-A: House Bearing No.${getVal(f.houseNo)}, Situated at ${getVal(f.situation)}. Market Value: Rs.${getVal(f.marketValue)}/-.

BOUNDARIES: NORTH: ${getVal(f.north)}, SOUTH: ${getVal(f.south)}, EAST: ${getVal(f.east)}, WEST: ${getVal(f.west)}.

SIGNATURE OF THE DONOR.`;
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
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '40px', borderRadius: '24px', width: '95%', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← Edit Details</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1' }}>
              {isSpeaking ? '🛑 Stop' : '🔊 Listen'}
            </button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#10b981' }}>🖨️ Print PDF</button>
          </div>
        </div>

        <div style={docSheet}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '18px', lineHeight: '2.2', color: '#1e293b', fontFamily: 'serif' }}>
            {generateContent(data, lang)}
          </div>
          
          <div style={{ marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={sigBlock}><div style={sigLine}></div><p><strong>DONOR SIGNATURE</strong></p></div>
                <div style={sigBlock}><div style={sigLine}></div><p><strong>DONEE SIGNATURE</strong></p></div>
             </div>
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