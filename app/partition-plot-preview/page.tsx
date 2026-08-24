"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT TRANSLATION & VOICE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Volume2 } from 'lucide-react';

export default function PartitionPlotPreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [content, setContent] = useState({ title: "", body: "" });
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 3. HARDCODED UNABRIDGED TEMPLATES (Registration Quality)
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "PARTITION DEED",
      body: `THIS DEED OF PARTITION is made and executed on this the ____ day of OCTOBER, 2025 at _________ by and between:

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (hereinafter called as the “FIRST PARTY”) of the First Part.

      AND

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. {Hereinafter called the “SECOND PARTY”} of the Second Part.

      AND

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. {Hereinafter called the “THIRD PARTY”} of the Third Part.

      The terms “FIRST PARTY” “SECOND PARTY” and “THIRD PARTY” unless the context otherwise provide shall mean and include their heirs and successors.

      AND WHEREAS the said Parties No.1, 2 and 3 had jointly purchased Open Plot bearing No._____, in Sy.No.____, admeasuring an extent of ____ Sq.yards., or equivalent to _______ Sq.Mtrs., Situated at ________________________________, Vide a Registered Sale Deed Doct.No._____/________, registered at S.R.O. Bhongir and since then the Parties are in the possession and absolute enjoyment thereof.

      Whereas above said First party and Second Party are the Undivided Share Holders. And whereas the above said Parties now partitioned the said Plot mentioned in Schedule A, B and C hereunder. That the Schedule A, B and C Properties Situated at __________________________________.

      And whereas differences and disputes have arisen between above said Parties and the Parties to this deed have mutually settled their disputes and differences and agreed to partition their jointly property into the schedule mentioned partition into the schedule mentioned A, B and C Properties in Three shares and allotted them to the respective parties on the following terms and conditions.

      NOW THIS DEED WITNESSETH AS FOLLOWS:
      That in pursuance of the said agreement and the above said parties have made schedule mentioned properties into Three shares and measured them and fixed the boundaries as per the measurements and shares.

      That the Present Market Value of the Properties mentioned in this deed are of the value of Rs.__________/- and the each separated 1st share of Rs.___________/- and 2nd share of Rs._____________/-, value of the separated share is Rs._______________/- for the purpose of Stamp duty and Registration.

      That the Schedule mentioned A and B Properties are allotted to the First Party shown in __________ and Second Party shown in ______________ in the sketch map respectively. That the Value of the each share shown in the Schedule A and B are in view of their Market value, fertility and convenience. Hence none of the parties are at liberty to question the partition and also shall not ask for the reopening of the partition at any time.

      That the FIRST PARTY and SECOND PARTY mutually agreed that they shall cause and execute all such acts and deeds necessary for getting perfect right, title over their respective shares in case of any claimer litigation from Third parties.

      That the FIRST PARTY and SECOND PARTY have taken possession of their respective schedule mentioned properties i.e. A Schedule Property by: Sri _________________, and B Schedule Property by: _______________________.

      SCHEDULES:
      “A” schedule Property belongs to FIRST PARTY: Open Plot bearing No._____, in Sy.No._____, admeasuring an extent of ________ Sq.yards., Situated at __________________________________________.
      “B” schedule Property (SECOND PARTY – MEESALA BASWAIAH): Open Plot bearing No._____, in Sy.No._____, admeasuring an extent of ________ Sq.yards., Situated at __________________________________________.
      “C” schedule Property (THIRD PARTY – GOLANUKONDA MUTHYALU): Open Plot bearing No._____, in Sy.No._____, admeasuring an extent of ________ Sq.yards., Situated at __________________________________________.

      The Plot mentioned in the document is not assigned lands. The Property does not belong to Mortgage to Govt.

      IN WITNESS WHEREOF the parties after having understood the contents Understood them well and signed this deed.

      WITNESSESS: 1.________________ 2.________________. EXECUTANTS`
    },
    hi: {
      title: "विभाजन विलेख (PARTITION DEED)",
      body: `यह विभाजन विलेख आज दिनांक ____ अक्टूबर, 2025 को ___________ स्थान पर निम्नलिखित पक्षों के बीच निष्पादित किया गया:

      श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या __________________________, आधार संख्या ____________________। (प्रथम पक्ष)
      और
      श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या __________________________, आधार संख्या ____________________। (द्वितीय पक्ष)
      और
      श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या __________________________, आधार संख्या ____________________। (तृतीय पक्ष)

      जहां, उपरोक्त पक्ष संख्या 1, 2 एवं 3 ने संयुक्त रूप से खुला प्लॉट संख्या _____, सर्वे संख्या _____, कुल क्षेत्रफल ____ वर्ग गज, स्थित _____________________________, पंजीकृत विक्रय विलेख दस्तावेज संख्या / के माध्यम से भोंगिर (Bhongir) में पंजीकृत कर क्रय किया था।

      अब पक्षों के बीच मतभेद उत्पन्न हुए थे, जिन्हें आपसी सहमति से सुलझा लिया गया है और संपत्ति को तीन भागों (A, B एवं C) में विभाजित कर संबंधित पक्षों को आवंटित किया गया है।

      अब यह विलेख निम्नलिखित साक्ष्य देता है:
      संपत्ति को तीन भागों में विभाजित कर माप लेकर सीमाएं निर्धारित की गई हैं। इस विलेख में वर्णित संपत्तियों का वर्तमान बाजार मूल्य रु./- है। अनुसूची A एवं B की संपत्तियां क्रमशः प्रथम पक्ष एवं द्वितीय पक्ष को आवंटित की गई हैं।

      प्रत्येक भाग का मूल्य बाजार मूल्य और सुविधा को ध्यान में रखते हुए निर्धारित किया गया है। अतः कोई भी पक्ष भविष्य में पुनः विभाजन की मांग नहीं करेगा।

      अनुसूचियां (SCHEDULES)
      “A” अनुसूची संपत्ति (प्रथम पक्ष): खुला प्लॉट संख्या _____, सर्वे संख्या _____, क्षेत्रफल ________ वर्ग गज, स्थित __________________________________________।
      “B” अनुसूची संपत्ति (द्वितीय पक्ष – MEESALA BASWAIAH): खुला प्लॉट संख्या _____, सर्वे संख्या _____, क्षेत्रफल ________ वर्ग गज, स्थित __________________________________________।
      “C” अनुसूची संपत्ति (तृतीय पक्ष – GOLANUKONDA MUTHYALU): खुला प्लॉट संख्या _____, सर्वे संख्या _____, क्षेत्रफल ________ वर्ग गज, स्थित __________________________________________।

      उक्त प्लॉट असाइन भूमि नहीं है तथा किसी सरकारी बंधक के अधीन नहीं है।

      साक्षी: 1.________________ 2.________________. निष्पादक के हस्ताक्षर`
    },
    te: {
      title: "విభజన పత్రం (PARTITION DEED)",
      body: `ఈ విభజన పత్రం ఈ రోజు ____ అక్టోబర్, 2025 న ___________ వద్ద క్రింది పక్షాల మధ్య చేయబడింది:

      శ్రీ/శ్రీమతి ______________________ గారి కుమారుడు/కుమార్తె/భార్య _______________________, వయస్సు ___ సంవత్సరాలు, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________। (మొదటి పక్షం)
      శ్రీ/శ్రీమతి ______________________ గారి కుమారుడు/కుమార్తె/భార్య _______________________, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________। (రెండవ పక్షం)
      శ్రీ/శ్రీమతి ______________________ గారి కుమారుడు/కుమార్తె/భార్య _______________________, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________। (మూడవ పక్షం)

      పక్షాలు 1, 2 మరియు 3 సంయుక్తంగా ఓపెన్ ప్లాట్ నం., సర్వే నం., విస్తీర్ణం ____ చదరపు గజాలు, ఉన్నది ___________________, డాక్యుమెంట్ నం./ ద్వారా S.R.O. భువనగిరి (Bhongir) వద్ద నమోదు చేసుకొని కొనుగోలు చేశారు.

      ప్రస్తుతం పక్షాల మధ్య వచ్చిన వివాదాలను పరస్పర ఒప్పందంతో పరిష్కరించి ఆస్తిని మూడు భాగాలుగా (Schedule A, B & C) విభజించారు.

      ఈ విభజన పత్రం క్రింది విధంగా సాక్ష్యమిస్తుంది:
      ఆస్తిని మూడు భాగాలుగా కొలిచి సరిహద్దులు నిర్ణయించారు. మొత్తం మార్కెట్ విలువ రూ./- కాగా, రిజిస్ట్రేషన్ కొరకు విభజించబడింది. “A” షెడ్యూల్ ఆస్తి మొదటి పక్షానికి, “B” షెడ్యూల్ ఆస్తి రెండవ పక్షానికి కేటాయించబడింది. మార్కెట్ విలువ, సౌలభ్యం దృష్ట్యా ఈ విభజన చేయబడింది. ఎవరూ భవిష్యత్తులో ఈ విభజనను ప్రశ్నించరాదు.

      షెడ్యూల్స్ (SCHEDULES)
      “A” షెడ్యూల్ (మొదటి పక్షం): ఓపెన్ ప్లాట్ నం., సర్వే నం., విస్తీర్ణం ________ చదరపు గజాలు, ఉన్నది __________________________________________।
      “B” షెడ్యూల్ (రెండవ పక్షం – MEESALA BASWAIAH): ఓపెన్ ప్లాట్ నం., సర్వే నం., విస్తీర్ణం ________ చదరపు గజాలు, ఉన్నది __________________________________________।
      “C” షెడ్యూల్ (మూడవ పక్షం – GOLANUKONDA MUTHYALU): ఓపెన్ ప్లాట్ నం., సర్వే నం., విస్తీర్ణం ________ చదరపు గజాలు, ఉన్నది __________________________________________।

      ఈ ప్లాట్ అసైన్ భూమి కాదు మరియు ఎటువంటి ప్రభుత్వ బంధకం లేదు. సాక్షుల సమక్షంలో పక్షాలు సంతకాలు చేశారు.

      సాక్షులు: 1.________________ 2.________________. సంతకాలు`
    }
  };

  // 4. TRIGGER CONTENT UPDATE BASED ON LANGUAGE
  useEffect(() => {
    setContent(templates[lang] || templates.en);
  }, [lang]);

  // 5. TEXT TO SPEECH LOGIC
  const handleListen = () => {
    const synth = window.speechSynthesis;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(content.body);
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    synth.speak(utterance);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.98)', 
        padding: '60px', 
        maxWidth: '950px', 
        width: '100%',
        margin: '0 auto', 
        borderRadius: '15px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)', 
        fontFamily: "'Times New Roman', Times, serif" 
      }}>
        
        {/* Navigation & Tools Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.push('/plot-details')} style={backBtnStyle}>
            ← {t.backToSelection || "Back"}
          </button>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button 
              onClick={handleListen}
              style={{ ...backBtnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#f8fafc', color: isSpeaking ? 'white' : '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Volume2 size={18} /> {isSpeaking ? "STOP" : (t.readAloud || "Listen")}
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        <h1 style={headerStyle}>{content.title}</h1>
        
        <div style={{ ...legalTextStyle, whiteSpace: 'pre-line' }}>
          {content.body}
        </div>

        <button onClick={() => router.push('/partition-plot-form')} style={proceedBtnStyle}>
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}

// Styling Constants
const headerStyle: React.CSSProperties = { textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '40px', color: '#1e293b' };
const legalTextStyle: React.CSSProperties = { lineHeight: '2.3', color: '#1e293b', textAlign: 'justify', fontSize: '16px' };
const backBtnStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', fontWeight: 'bold', color: '#475569' };
const proceedBtnStyle: React.CSSProperties = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '40px', fontSize: '16px', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.5)' };