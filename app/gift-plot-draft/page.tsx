"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function GiftPlotDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('giftPlotDraftData');
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
      return `బహుమతి పత్రం (GIFT DEED)
ఈ బహుమతి పత్రం ఈ రోజు ${getVal(f.day)} ${getVal(f.month)}, ${getVal(f.year)} న క్రింది పక్షాల మధ్య చేయబడింది:-

శ్రీ/శ్రీమతి ${getVal(f.donorName)} ${getVal(f.donorRelation)} ${getVal(f.donorRelName)}, వయస్సు ${getVal(f.donorAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.donorOcc)}, నివాసం ${getVal(f.donorAddress)}, ఆధార్ నం. ${getVal(f.donorAadhar)}। (ఇక్కడినుంచి “దాత” అని పిలువబడును) మొదటి పక్షం।

అనుకూలంగా

శ్రీ/శ్రీమతి ${getVal(f.doneeName)} ${getVal(f.doneeRelation)} ${getVal(f.doneeRelName)}, వయస్సు ${getVal(f.doneeAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.doneeOcc)}, నివాసం ${getVal(f.doneeAddress)}, ఆధార్ నం. ${getVal(f.doneeAadhar)}। (ఇక్కడినుంచి “గ్రహీత” అని పిలువబడును) రెండవ పక్షం।

కొనసాగింపు… 2

-2-
దాత ఓపెన్ ప్లాట్ నం. ${getVal(f.plotNo)}, సర్వే నం. ${getVal(f.syNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ఉన్నది ${getVal(f.situation)} యొక్క సంపూర్ణ యజమాని। ఇది డాక్యుమెంట్ నం. ${getVal(f.saleDeedNo)}/${getVal(f.saleDeedYear)} ద్వారా S.R.O. ${getVal(f.sroOffice)} వద్ద నమోదు చేయబడింది.

గ్రహీత, దాత యొక్క ${getVal(f.doneeIsDonor)}. దాతకు గ్రహీత పట్ల సహజమైన ప్రేమ మరియు మమకారం ఉండుట వలన ఈ బహుమతి పత్రం చేయబడుచున్నది।

ఈ బహుమతి పత్రం క్రింది విధంగా సాక్ష్యమిస్తుంది:
1. సహజమైన ప్రేమ మరియు మమకారం దృష్ట్యా దాత, షెడ్యూల్‌లో పేర్కొన్న ఆస్తిని గ్రహీతకు శాశ్వతంగా బదిలీ చేస్తున్నాడు.
2. దాత ఆస్తికి సంబంధించిన అన్ని హక్కులు, హోదా మరియు ఇతర హక్కులను పూర్తిగా గ్రహీతకు బదిలీ చేస్తున్నాడు.
3. దాత భౌతిక స్వాధీనాన్ని గ్రహీతకు అప్పగించారు మరియు గ్రహీత ఆస్తిని ప్రశాంతంగా అనుభవించును.
4. షెడ్యూల్ ఆస్తి ఎటువంటి బంధకాలు లేదా కోర్టు జప్తులు లేకుండా స్వచ్ఛమైనదని దాత ప్రకటిస్తున్నారు.
5. గ్రహీతకు ఆస్తిని అమ్ముట, గిరవం పెట్టుట లేదా ఇతర విధంగా వినియోగించుటకు సంపూర్ణ హక్కు కలదు.

కొనసాగింపు… 3

-3-
6. ఈ బహుమతి పత్రం ఆధారంగా గ్రహీత మున్సిపల్/రెవెన్యూ రికార్డుల్లో పేరు మార్పు చేయించుకొనవచ్చు.
7. గ్రహీత ఈ బహుమతి పత్రాన్ని అంగీకరించి స్వాధీనంలోకి తీసుకున్నారు.

షెడ్యూల్ ఆఫ్ ప్రాపర్టీ (SCHEDULE OF THE PROPERTY):
ఓపెన్ ప్లాట్ నం. ${getVal(f.plotNo)}, సర్వే నం. ${getVal(f.syNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు, ఉన్నది ${getVal(f.situation)}।
సరిహద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}।

మార్కెట్ విలువ ప్రకటన:
విస్తీర్ణం: ${getVal(f.areaSqYds)} | గజం విలువ: ${getVal(f.valPerSqYd)} | మొత్తం విలువ: ${getVal(f.totalMarketValue)}

కొనసాగింపు… 4

-4-
దాత మరియు గ్రహీత తమ స్వచ్ఛంద చిత్తంతో సాక్షుల సమక్షంలో సంతకాలు చేశారు.

సాక్షులు:
1.
2.

దాత సంతకం / గ్రహీత సంతకం`;
    }

    if (activeLang === 'hi') {
      return `उपहार विलेख (GIFT DEED)
यह उपहार विलेख आज दिनांक ${getVal(f.day)} ${getVal(f.month)}, ${getVal(f.year)} को निम्नलिखित पक्षों के बीच निष्पादित किया गया:-

श्री/श्रीमती ${getVal(f.donorName)} ${getVal(f.donorRelation)} ${getVal(f.donorRelName)}, आयु ${getVal(f.donorAge)} वर्ष, निवासी ${getVal(f.donorAddress)}, आधार संख्या ${getVal(f.donorAadhar)}। (दाता - प्रथम पक्ष)

के पक्ष में

श्री/श्रीमती ${getVal(f.doneeName)} ${getVal(f.doneeRelation)} ${getVal(f.doneeRelName)}, आयु ${getVal(f.doneeAge)} वर्ष, निवासी ${getVal(f.doneeAddress)}, आधार संख्या ${getVal(f.doneeAadhar)}। (प्राप्तकर्ता - द्वितीय पक्ष)

-2-
जहां दाता खुला प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.syNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.situation)} का पूर्ण स्वामी है। यह दस्तावेज संख्या ${getVal(f.saleDeedNo)}/${getVal(f.saleDeedYear)} के माध्यम से S.R.O. ${getVal(f.sroOffice)} में पंजीकृत है।

प्राप्तकर्ता, दाता का ${getVal(f.doneeIsDonor)} है। दाता को प्राप्तकर्ता के प्रति स्वाभाविक प्रेम एवं स्नेह है।

अब यह उपहार विलेख निम्नलिखित साक्ष्य देता है:
1. दाता अनुसूची में वर्णित संपत्ति को प्राप्तकर्ता के नाम सदा के लिए हस्तांतरित करता है।
2. दाता ने भौतिक कब्जा प्राप्तकर्ता को सौंप दिया है।
3. दाता घोषित करता है कि संपत्ति सभी प्रकार के ऋण या कानूनी विवाद से मुक्त है।
4. प्राप्तकर्ता को संपत्ति बेचने, गिरवी रखने या पट्टे पर देने का पूर्ण अधिकार होगा।

-3-
संपत्ति का विवरण (SCHEDULE OF THE PROPERTY):
खुला प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.syNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.situation)}।
सीमाएं: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}।

बाजार मूल्य विवरण:
क्षेत्रफल: ${getVal(f.areaSqYds)} | प्रति वर्ग गज मूल्य: ${getVal(f.valPerSqYd)} | कुल मूल्य: ${getVal(f.totalMarketValue)}

-4-
अतः दाता एवं प्राप्तकर्ता ने स्वस्थ मस्तिष्क से निम्नलिखित साक्षियों की उपस्थिति में हस्ताक्षर किए।

साक्षी:
1.
2.

दाता के हस्ताक्षर / प्राप्तकर्ता के हस्ताक्षर`;
    }

    return `GIFT DEED
THIS DEED of GIFT is made and executed on this ${getVal(f.day)} day of ${getVal(f.month)}, ${getVal(f.year)}, by and between:-

Mr/Mrs ${getVal(f.donorName)} ${getVal(f.donorRelation)} ${getVal(f.donorRelName)}, AGED ${getVal(f.donorAge)} YEARS, OCCUPATION: ${getVal(f.donorOcc)}, R/O ${getVal(f.donorAddress)}. AADHAR NO.${getVal(f.donorAadhar)}. (Hereinafter called the “DONOR”) of the first party.

IN FAVOUR OF

Mr/Mrs ${getVal(f.doneeName)} ${getVal(f.doneeRelation)} ${getVal(f.doneeRelName)}, AGED ${getVal(f.doneeAge)} YEARS, OCCUPATION: ${getVal(f.doneeOcc)}, R/O ${getVal(f.doneeAddress)}. AADHAR NO.${getVal(f.doneeAadhar)}. (Hereinafter called the “DONEE”) of the Second part.
      
Contd..2

-2-
WHEREAS the DONOR are the absolute Owner of the Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.syNo)}, admeasuring an area of ${getVal(f.areaSqYds)} Sq.Yards or equivalent to ${getVal(f.areaSqMtrs)} Sq.meters, Situated at ${getVal(f.situation)}. and more fully described in the schedule hereto. Vide Regd. Sale deed Doct.No.${getVal(f.saleDeedNo)}/${getVal(f.saleDeedYear)}, at S.R.O.${getVal(f.sroOffice)}, and since then the DONOR is in the possession and absolute enjoyment thereof.

AND Whereas the DONEE is DONOR’S ${getVal(f.doneeIsDonor)}. The DONOR have got great natural love and affection for the said DONEE and the Donor desirous of making a Deed of gift in favour of Donee.

NOW THIS DEED OF GIFT WITNESSETH AS FOLLOWS:
1. That is consideration of natural love and affection for the said DONEE the DONOR conveys unto the DONEE, the schedule mentioned property absolutely forever.
2. That the DONOR further conveys and assigns unto the DONEE the schedule mentioned property with all rights, Title, Interest, and all other rights whatsoever there to have and to hold the same absolutely forever.
3. That the DONOR have delivered physical possession of the schedule mentioned property to the DONEE who shall enjoy the property peacefully.
4. That the DONOR hereby declares that the schedule mentioned property is free from all encumbrances, charges, and liens.
5. That the DONEE shall has full power to sell, Mortgage, lease or otherwise dispose all or any part of the property in any manner he may deem fit.

Contd..3

-3-
6. That the DONEE shall has a right to get the property mutated in the records by virtue of this GIFT of Deed.
7. That the DONEE has accepted this Deed of GIFT and has entered into the possession of the Schedule mentioned property.

SCHEDULE OF THE PROPERTY:
ALL THAT THE Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.syNo)}, admeasuring an area of ${getVal(f.areaSqYds)} Sq.Yards, Situated at ${getVal(f.situation)}.

BOUNDARIES AS FOLLOWS:
NORTH: ${getVal(f.north)}, SOUTH: ${getVal(f.south)}, EAST: ${getVal(f.east)}, WEST: ${getVal(f.west)}.

STATEMENT REGARDING MARKET VALUE: (Under Rule 3 of A.P. Prevention of Under-valuation Rules, 1975).
Area: ${getVal(f.areaSqYds)} Sq.Yds | Value per Sq. Yard: Rs.${getVal(f.valPerSqYd)} | Total Value: Rs.${getVal(f.totalMarketValue)}

Contd..4

-4-
In witness whereof THE DONOR AND THE DONEE here unto have set their hands to this Deed of GIFT free will and sound mind in presence of the following witnesses.

WITNESSES:
1.
2.

SIGNATURE OF DONOR / SIGNATURE OF DONEE`;
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return; }
    setIsSpeaking(true);
    const textToRead = generateContent(data, lang);
    const utterance = new SpeechSynthesisUtterance(textToRead);
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  if (!data) return <div style={{textAlign:'center', padding:'100px'}}>Loading Data...</div>;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '20px' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', padding: '40px', borderRadius: '24px', width: '95%', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← Edit Details</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1', color: 'white' }}>{isSpeaking ? '🛑 Stop' : '🔊 Listen Draft'}</button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#10b981', color: 'white' }}>🖨️ Print PDF</button>
          </div>
        </div>

        <div style={docSheet}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '16px', lineHeight: '2.2', color: '#1e293b', fontFamily: 'serif' }}>
            {generateContent(data, lang)}
          </div>
          <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between' }}>
             <div><div style={sigLine}></div><p><strong>DONOR</strong></p></div>
             <div><div style={sigLine}></div><p><strong>DONEE</strong></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const docSheet = { backgroundColor: 'white', padding: '60px', border: '1px solid #e2e8f0', borderRadius: '8px' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const, backgroundColor: '#cbd5e1' };
const sigLine = { borderBottom: '1.5px solid black', width: '200px', marginBottom: '10px' };