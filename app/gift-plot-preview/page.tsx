"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT TRANSLATION & VOICE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Volume2 } from 'lucide-react';

export default function GiftPlotPreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [content, setContent] = useState({ title: "", body: "" });
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 3. HARDCODED UNABRIDGED TEMPLATES (Registration Quality)
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "GIFT DEED",
      body: `THIS DEED of GIFT is made and executed on this ____ day of _______, ______, by and between:-

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter called the “DONOR”) of the first party.

      IN FAVOUR OF

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter called the “DONEE”) of the Second part.
      
      Contd..2

      -2-
      WHEREAS the DONOR are the absolute Owner of the Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________. and more fully described in the schedule hereto. Vide Regd. Sale deed Doct.No._________/__________, at S.R.O._________, and since then the DONOR is in the possession and absolute enjoyment thereof.

      AND Whereas the DONEE is DONOR’ ___________ The DONOR have got great natural love and affection for the said DONEE and the Donor desirous of making a Deed of gift in favour of Donee.

      NOW THIS DEED OF GIFT WITNESSETH AS FOLLOWS:
      1. That is consideration of natural love and affection for the said DONEE the DONOR conveys unto the DONEE, the schedule mentioned property absolutely forever.
      2. That the DONOR further conveys and assigns unto the DONEE the schedule mentioned property with all rights, Title, Interest, Privileges, appurtenances, easements, ways and all other rights whatsoever there to have and to hold the same absolutely forever.
      3. That the DONOR have delivered physical possession of the schedule mentioned property to the DONEE who shall enjoy the property peacefully without interruption or disturbance.
      4. That the DONOR hereby declares that the schedule mentioned property is free from all encumbrances, charges, liens and equities etc.
      5. That the DONEE shall has full power to sell, Mortgage, lease or otherwise dispose all or any part of the property in any manner he may deem fit.

      Contd..3

      -3-
      6. That the DONEE shall has a right to get the property mutated in the municipal/ Revenue records by virtue of this GIFT of Deed.
      7. That the DONEE has accepted this Deed of GIFT and has entered into the possession of the Schedule mentioned property.

      SCHEDULE OF THE PROPERTY: ALL THAT THE Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________. (Plan Enclosed)

      BOUNDRIES AS FOLLOWS: NORTH:________, SOUTH:________, EAST:________, WEST:________.

      STATEMENT REGARDING MARKET VALUE: (Under Rule 3 of A.P. Prevention of Under-valuation Rules, 1975).
      Area (Sq.Yds) | Value per Sq. Yard | Total Value
      ____________ | __________________ | ___________

      Contd..4

      -4-
      In witness whereof THE DONOR AND THE DONEE here unto have set their hands to this Deed of GIFT free will and sound mind in presence of the following witnesses.
      
      WITNESSES: 1.________________ 2.________________.
      (SIGNATURE OF DONOR) / (SIGNATURE OF DONEE)`
    },
    hi: {
      title: "उपहार विलेख (GIFT DEED)",
      body: `यह उपहार विलेख आज दिनांक ____ __________, ______ को निम्नलिखित पक्षों के बीच बनाया और निष्पादित किया गया:-
      श्री/श्रीमती ______________________, आयु ___ वर्ष, निवासी ______________________, आधार संख्या ____________________। (दाता - प्रथम पक्ष)
      के पक्ष में
      श्री/श्रीमती ______________________, आयु ___ वर्ष, निवासी ______________________, आधार संख्या ____________________। (प्राप्तकर्ता - द्वितीय पक्ष)

      -2-
      जहां दाता खुला प्लॉट संख्या __, सर्वे संख्या __, क्षेत्रफल _____ वर्ग गज, स्थित ____________________ का पूर्ण स्वामी है। प्राप्तकर्ता, दाता का ___________ है। दाता को प्राप्तकर्ता के प्रति स्वाभाविक प्रेम एवं स्नेह है।

      अब यह उपहार विलेख निम्नलिखित साक्ष्य देता है:
      1. दाता अनुसूची में वर्णित संपत्ति को प्राप्तकर्ता के नाम सदा के लिए हस्तांतरित करता है।
      2. दाता ने भौतिक कब्जा प्राप्तकर्ता को सौंप दिया है।
      3. दाता घोषित करता है कि संपत्ति सभी प्रकार के ऋण या कानूनी विवाद से मुक्त है।
      4. प्राप्तकर्ता को संपत्ति बेचने, गिरवी रखने या पट्टे पर देने का पूर्ण अधिकार होगा।

      -3-
      संपत्ति का विवरण (SCHEDULE OF THE PROPERTY): खुला प्लॉट संख्या ____, सर्वे संख्या _____, क्षेत्रफल _____ वर्ग गज, स्थित ________________________________________।
      सीमाएं: उत्तर: ________, दक्षिण: ________, पूर्व: ________, पश्चिम: ________

      बाजार मूल्य विवरण:
      क्षेत्रफल (वर्ग गज) | प्रति वर्ग गज मूल्य | कुल मूल्य

      -4-
      अतः दाता एवं प्राप्तकर्ता ने स्वस्थ मस्तिष्क से निम्नलिखित साक्षियों की उपस्थिति में हस्ताक्षर किए।`
    },
    te: {
      title: "బహుమతి పత్రం (GIFT DEED)",
      body: `ఈ బహుమతి పత్రం ఈ రోజు ____ __________, ______ న క్రింది పక్షాల మధ్య చేయబడింది:-
      శ్రీ/శ్రీమతి ______________________, వయస్సు ___ సంవత్సరాలు, నివాసం ______________________, ఆధార్ నం. ____________________। (దాత)
      అనుకూలంగా
      శ్రీ/శ్రీమతి ______________________, వయస్సు ___ సంవత్సరాలు, నివాసం ______________________, ఆధార్ నం. ____________________। (గ్రహీత)

      -2-
      దాత ఓపెన్ ప్లాట్ నం., సర్వే నం._____, విస్తీర్ణం _____ చదరపు గజాలు, ఉన్నది ____________________ యొక్క సంపూర్ణ యజమాని. గ్రహీత, దాత యొక్క ___________.

      ఈ బహుమతి పత్రం క్రింది విధంగా సాక్ష్యమిస్తుంది:
      1. దాత, షెడ్యూల్‌లో పేర్కొన్న ఆస్తిని గ్రహీతకు శాశ్వతంగా బదిలీ చేస్తున్నారు.
      2. దాత భౌతిక స్వాధీనాన్ని గ్రహీతకు అప్పగించారు.
      3. షెడ్యూల్ ఆస్తి ఎటువంటి బంధకాలు లేదా కోర్టు జప్తులు లేకుండా స్వచ్ఛమైనదని దాత ప్రకటిస్తున్నారు.
      4. గ్రహీతకు ఆస్తిని అమ్ముట లేదా గిరవం పెట్టుటకు సంపూర్ణ హక్కు కలదు.

      -3-
      షెడ్యూల్ ఆఫ్ ప్రాపర్టీ: ఓపెన్ ప్లాట్ నం.____, సర్వే నం._____, విస్తీర్ణం _____ చదరపు గజాలు, ఉన్నది ________________________________________।
      సరిహద్దులు: ఉత్తరం: ________, దక్షిణం: ________, తూర్పు: ________, పడమర: ________

      మార్కెట్ విలువ ప్రకటన:
      విస్తీర్ణం | గజం విలువ | మొత్తం విలువ

      -4-
      దాత మరియు గ్రహీత తమ స్వచ్ఛంద చిత్తంతో సాక్షుల సమక్షంలో సంతకాలు చేశారు.`
    }
  };

  useEffect(() => {
    setContent(templates[lang] || templates.en);
  }, [lang]);

  // TEXT TO SPEECH LOGIC
  const handleListen = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(content.body);
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      padding: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.98)', 
        padding: '60px', 
        maxWidth: '900px', 
        width: '100%',
        margin: '0 auto', 
        borderRadius: '15px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)', 
        fontFamily: 'serif', 
        position: 'relative' 
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
           <button onClick={() => router.push('/plot-details')} style={backBtnStyle}>
            ← {t.backToSelection || "Back"}
          </button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handleListen} 
              style={{ ...backBtnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#f8fafc', color: isSpeaking ? 'white' : '#1e293b', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Volume2 size={18} /> {isSpeaking ? "STOP" : "Listen"}
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '22px', marginBottom: '30px', color: '#1e293b' }}>
          {content.title}
        </h1>
        
        <div style={{ lineHeight: '2.0', color: '#1e293b', textAlign: 'justify', fontSize: '15px', whiteSpace: 'pre-line' }}>
          {content.body}
        </div>

        <button onClick={() => router.push('/gift-plot-form')} style={proceedBtnStyle}>
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}

const backBtnStyle = { padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', fontWeight: 'bold' };
const proceedBtnStyle = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.5)' };