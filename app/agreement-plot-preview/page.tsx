"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT TRANSLATION & VOICE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Volume2 } from 'lucide-react';

export default function AgreementPlotPreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [content, setContent] = useState({ title: "", body: "" });
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 3. HARDCODED UNABRIDGED TEMPLATES (Registration Quality)
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "AGREEMENT OF SALE",
      body: `This Agreement of Sale is made and Executed on this the ____ day of ____________, _________, By and Between:- 

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter called as “VENDOR”) of the One Part.

      A N D

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter called as “VENDEE”) of the Other Part.

      Contd..2

      -2-
      WHEREAS the VENDOR is the absolute Owner of the Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________. and more fully described in the schedule hereto. Vide Regd. Sale deed Doct.No._________/__________, at S.R.O._________ and since then the Vendor is in the possession and absolute enjoyment thereof.

      And Whereas the VENDOR has offered to sell from the schedule motioned property, to the VENDEE and the VENDEE have agreed to purchase the above said property for a total sale consideration of Rs. ____________/- (Rs. ________________________________ ONLY) an area of ______ Sq.Yards., @ Rs._________/- Per Yard.,

      NOW THIS AGREEMENT OF SALE WITNESSETH AS UNDER:

      That in pursuance of the said agreement the VENDEE has paid the Total amount of Rs.________/- (Rs. __________________________ ONLY) On:_____________. and the receipt of which the VENDOR hereby accept, admit and acknowledge and the VENDOR hereby agree to sell convey and transfer the schedule mentioned property in peaceful manner in favour of VENDEE or his nominees together with all interest and right herein subject to following terms and conditions and also VENDOR hereby agree to register the schedule property to the VENDEE along with interested parties or at the desire of the VENDEE to the Nominees mentioned by the VENDEE.

      And the Balance amount of Rs._______/- (Rs. ___________________________ ONLY) will be paid Within (_____) ________ and gets registration as per physical measurement of the property.

      1. That the VENDOR has agreed to hand over all the previous documents, receipts etc., pertaining to the above mentioned property in original to the VENDEE at the time registration.
      2. That the VENDOR hereby agreed to hand over the vacant, peaceful and physical possession of the schedule mentioned property to the VENDEE at the time of registration.
      3. That the VENDOR further agree to pay all the taxes, i.e., property tax etc., levies and damages and changes etc., over the schedule mentioned property and also the taxes and Bank loans etc., have to be cleared by the VENDOR before registration.

      Contd..3

      -3-
      4. That the VENDOR further agree to sign and execute all papers documents, and applications necessary for effective mutation and transfer the schedule mentioned property in favour of VENDEE or their nominees on any concerned authorities.
      5. That the VENDOR hereby assure and covenant with the VENDEE that the schedule mentioned property is not sold or conveyed to anyone and the schedule mentioned property is free from all kinds of encumbrances, mortgages, whatsoever in favour of any one.
      6. That the VENDOR shall be bound to indemnify and keep harmless the VENDEE against any loss, damages or claim that the VENDEE may be put to be reason of any defect in the title or the possession of the VENDOR in schedule mentioned property.
      7. That the VENDOR hereby agree that the sale deed or any deeds to be executed in favour VENDEE or as per his choice.

      SCHEDULE OF THE PROPERTY:
      All that the Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________.
      BOUNDRIES AS FOLLOWS: NORTH: ________, SOUTH: ________, EAST: ________, WEST: ________.

      IN WITNESS WHERE OF the VENDOR AND THE VENDEE have set their hands to this AGREEMENT OF SALE in the presence of the following witnesses.

      (SIG.OF THE VENDOR) / (SIG OF THE VENDEE)

      RECEIPT:
      I, Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. Received an amount of Rs.__________/- (Rupees ___________________________________ Only), advance amount towards the sale Consideration of Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________. FROM: Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. On this the ____ day of ___________, _______, in the presence of witnessess.`
    },
    hi: {
      title: "विक्रय अनुबंध (AGREEMENT OF SALE)",
      body: `यह विक्रय अनुबंध आज दिनांक ____ ____________, _________ को निम्नलिखित पक्षों के बीच बनाया एवं निष्पादित किया गया:
      श्री/श्रीमती ______________________, आयु ___ वर्ष, निवासी ______________________, आधार संख्या ____________________। (विक्रेता - प्रथम पक्ष)
      और
      श्री/श्रीमती ______________________, आयु ___ वर्ष, निवासी ______________________, आधार संख्या ____________________। (क्रेता - द्वितीय पक्ष)

      -2-
      जहां विक्रेता खुला प्लॉट संख्या __, सर्वे नंबर , क्षेत्रफल _____ वर्ग गज, स्थित ____________________ का पूर्ण स्वामी है। विक्रेता ने उक्त संपत्ति को कुल विक्रय मूल्य रु. ___/- में बेचने का प्रस्ताव दिया है।

      शर्तें:
      1. क्रेता ने कुल राशि रु.________/- दिनांक _____________ को अदा की है।
      2. विक्रेता पंजीकरण के समय संपत्ति का शांतिपूर्ण कब्जा क्रेता को सौंपेगा।
      3. विक्रेता सभी कर, बैंक ऋण आदि पंजीकरण से पूर्व चुका देगा।
      4. विक्रेता आश्वासन देता है कि संपत्ति सभी बंधकों से मुक्त है।

      संपत्ति की अनुसूची:
      खुला प्लॉट संख्या ____, सर्वे नंबर _____, क्षेत्रफल _____ वर्ग गज, स्थित ________________________________________।
      सीमाएं: उत्तर: ________, दक्षिण: ________, पूर्व: ________, पश्चिम: ________

      रसीद:
      मैं श्री/श्रीमती ______________________ स्वीकार करता/करती हूं कि मुझे रु./- अग्रिम राशि प्राप्त हुई।`
    },
    te: {
      title: "విక్రయ ఒప్పందం (AGREEMENT OF SALE)",
      body: `ఈ విక్రయ ఒప్పందం ఈ ____ తేదీ ____________, _________ నాడు క్రింది పక్షుల మధ్య చేయబడినది:
      శ్రీ/శ్రీమతి ______________________, వయస్సు ___ సంవత్సరాలు, నివాసం ______________________, ఆధార్ నం._______________. (విక్రేత - మొదటి పక్షం)
      మరియు
      శ్రీ/శ్రీమతి ______________________, వయస్సు ___ సంవత్సరాలు, నివాసం ______________________, ఆధార్ నం._______________. (కొనుగోలుదారు - రెండవ పక్షం)

      -2-
      విక్రేత ఓపెన్ ప్లాట్ నం., సర్వే నం., విస్తీర్ణం _____ చదరపు గజాలు, ఉన్న ఆస్తికి పూర్తి యజమాని. విక్రేత పై ఆస్తిని మొత్తం రూ. ___/- కు విక్రయించడానికి అంగీకరించెను.

      షరతులు:
      1. కొనుగోలుదారు రూ.________/- తేదీ _____________ న చెల్లించెను.
      2. రిజిస్ట్రేషన్ సమయమున విక్రేత ప్రశాంత స్వాధీనం అప్పగించాలి.
      3. అన్ని పన్నులు, బ్యాంకు రుణాలు రిజిస్ట్రేషన్‌కు ముందే విక్రేత చెల్లించాలి.
      4. ఆస్తి ఎటువంటి బంధకం లేకుండా ఉండాలి.

      షెడ్యూల్ ఆఫ్ ప్రాపర్టీ:
      ఓపెన్ ప్లాట్ నం., సర్వే నం., విస్తీర్ణం _____ చదరపు గజాలు, ____________________ వద్ద ఉన్నది.
      సరిహద్దులు: ఉత్తరం: ________, దక్షిణం: ________, తూర్పు: ________, పడమర: ________

      రసీదు:
      నేను శ్రీ/శ్రీమతి ______________________ రూ.______/- ముందస్తు మొత్తంగా స్వీకరించాను.`
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
    <div style={{ minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      <div style={docSheetStyle}>
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

        <h1 style={headerStyle}>{content.title}</h1>
        
        <div style={legalTextStyle}>
          <div style={{ whiteSpace: 'pre-line' }}>
            {content.body}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', marginBottom: '40px' }}>
            <div><p>Witnesses:<br/>1.<br/>2.</p></div>
            <div style={{ textAlign: 'right' }}>
                <p><strong>(SIG.OF THE VENDOR)</strong><br/><br/><strong>(SIG OF THE VENDEE)</strong></p>
            </div>
          </div>
        </div>

        <button onClick={() => router.push('/agreement-plot-form')} style={proceedBtnStyle}>
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}

// STYLING
const docSheetStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.98)', padding: '60px', maxWidth: '900px', margin: '20px auto', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: "'Times New Roman', Times, serif" };
const headerStyle: React.CSSProperties = { textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '40px' };
const legalTextStyle: React.CSSProperties = { lineHeight: '2.0', color: '#1e293b', textAlign: 'justify', fontSize: '15px' };
const backBtnStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', fontWeight: 'bold', color: '#475569' };
const proceedBtnStyle: React.CSSProperties = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '40px', fontSize: '16px' };