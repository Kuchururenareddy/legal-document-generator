"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT TRANSLATION LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { translateText } from '../utils/translator';

export default function GiftDeedHousePreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [translatedBody, setTranslatedBody] = useState("");
  const [translatedTitle, setTranslatedTitle] = useState("GIFT DEED (HOUSE PROPERTY)");

  // 3. HARDCODED UNABRIDGED TEMPLATES (English, Hindi, Telugu)
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "GIFT DEED (HOUSE PROPERTY)",
      body: `THIS GIFT DEED is made and executed on this ___ day of ____________, ____________, BY AND BETWEEN:-

      ___________________________ S/O, W/O, D/O __________________________, AGED ABOUT ____ YEARS, OCCUPATION: ________________, R/O ____________________________________________. AADHAR NO.__________________. (Hereinafter called the DONOR) of the one part.

      IN FAVOUR OF

      ___________________________ S/O, W/O, D/O __________________________, AGED ABOUT ____ YEARS, OCCUPATION: ________________, R/O ____________________________________________. AADHAR NO.__________________. (Hereinafter called the DONEE) of the other part.

      WHEREAS the DONOR is the absolute Owner and in possession of the House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., or equivalent to ______ Sq.Meters., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________.

      and morefully described in the schedule hereto. Vide Regd. Sale Deed Doct.No._________/___________, Regd. at S.R.O._____________.

      WHEREAS the DONOR and DONEE are related to each other as ____________________, and out of natural love and affection which the DONOR bears towards the DONEE, the DONOR has out of his own free will and pleasure decided to gift the schedule mentioned property to the DONEE.

      NOW THIS GIFT DEED WITNESSETH AS FOLLOWS:
      1. That the DONOR hereby gifts, transfers and conveys the schedule mentioned property to the DONEE to hold and enjoy the same forever.
      2. The DONEE has accepted the gift and taken physical possession of the property this day.
      3. The DONOR assures the property is free from all encumbrances, charges, or court litigations.
      4. The DONOR agrees to pay all taxes, cesses, and electricity dues up to the date of registration.
      5. The DONOR shall execute any further documents required for the effective mutation of the property.
      6. The DONEE shall henceforth pay all future taxes and levies to the concerned authorities.
      7. The DONOR has handed over all original link documents and title deeds to the DONEE.

      ANNEXURE 1-A (DESCRIPTION OF PROPERTY): All that the House Bearing No.____________, Consisting of _________________________________, With R.C.C.Roof area ______ Sft., situated at ____________________________________. The Market Value of the property for the purpose of Stamp Duty is Rs.___________/-.

      BOUNDARIES AS FOLLOWS: NORTH:________, SOUTH:________, EAST:________, WEST:________.

      WITNESSES: 
      1.________________ 
      2.________________. 
      SIGNATURE OF THE DONOR.`
    },
    hi: {
      title: "गिफ्ट डीड (मकान संपत्ति)",
      body: `यह गिफ्ट डीड इस ___ दिन ____________, ____________ को बनाई और निष्पादित की गई है, जिसके पक्षकार निम्नलिखित हैं:

      ___________________________ पुत्र/पत्नी/पुत्री __________________________, आयु लगभग ____ वर्ष, व्यवसाय: ________________, निवासी ____________________________________________. आधार संख्या: __________________. (आगे “दाता” कहा जाएगा) प्रथम पक्ष।

      के पक्ष में

      ___________________________ पुत्र/पत्नी/पुत्री __________________________, आयु लगभग ____ वर्ष, व्यवसाय: ________________, निवासी ____________________________________________. आधार संख्या: __________________. (आगे “प्राप्तकर्ता” कहा जाएगा) द्वितीय पक्ष।

      जहाँ दाता मकान संख्या ____________, जिसमें _________________________________ शामिल है, कुल क्षेत्रफल ____ वर्ग गज या ______ वर्ग मीटर तथा आर.सी.सी. छत क्षेत्र ______ वर्ग फुट, स्थित _____________________________________________, का पूर्ण स्वामी एवं कब्जाधारी है। जिसका विवरण अनुसूची में दिया गया है। पंजीकृत विक्रय विलेख दस्तावेज संख्या ____/_____, उप-पंजीयक कार्यालय ___________ में पंजीकृत।

      जहाँ दाता और प्राप्तकर्ता का संबंध ____________________ है, और दाता को प्राप्तकर्ता के प्रति प्राकृतिक प्रेम एवं स्नेह है, इसलिए दाता ने अपनी स्वेच्छा से उक्त संपत्ति उपहार स्वरूप देने का निर्णय लिया है।

      अब यह गिफ्ट डीड निम्नलिखित शर्तों के साथ साक्षी है:
      1. दाता द्वारा उक्त अनुसूची संपत्ति को स्थायी रूप से प्राप्तकर्ता को उपहारस्वरूप हस्तांतरित किया जाता है।
      2. प्राप्तकर्ता ने इस उपहार को स्वीकार कर लिया है और आज से भौतिक कब्जा प्राप्त कर लिया है।
      3. दाता आश्वासन देता है कि संपत्ति किसी भी बंधक, ऋण, विवाद या न्यायालयीन मामले से मुक्त है।
      4. पंजीकरण की तिथि तक के सभी कर, उपकर एवं बिजली बिल दाता द्वारा भुगतान किए जाएंगे।
      5. संपत्ति के नामांतरण हेतु आवश्यक सभी दस्तावेज दाता द्वारा निष्पादित किए जाएंगे।
      6. भविष्य में सभी कर एवं शुल्क प्राप्तकर्ता द्वारा संबंधित विभाग को भुगतान किए जाएंगे।
      7. दाता ने सभी मूल दस्तावेज एवं स्वामित्व पत्र प्राप्तकर्ता को सौंप दिए हैं।

      अनुबंध 1-A (संपत्ति का विवरण): मकान संख्या ____________, जिसमें _________________________________, आर.सी.सी. छत क्षेत्र ______ वर्ग फुट, स्थित ____________________________________. स्टांप शुल्क के उद्देश्य से संपत्ति का बाजार मूल्य रु. ___________/- है।

      सीमाएँ इस प्रकार हैं: उत्तर: ________, दक्षिण: ________, पूर्व: ________, पश्चिम: ________

      गवाह: 1.________________ 2.________________.
      दाता के हस्ताक्षर`
    },
    te: {
      title: "గిఫ్ట్ డీడ్ (ఇల్లు ఆస్తి)",
      body: `ఈ గిఫ్ట్ డీడ్ ఈ ___ తేదీ ____________, ____________ నాడు క్రింద పేర్కొన్న పక్షాల మధ్య చేయబడింది:

      ___________________________ S/O, W/O, D/O __________________________, వయస్సు సుమారు ____ సంవత్సరాలు, వృత్తి: ________________, నివాసం ____________________________________________. ఆధార్ నం. __________________. (ఇకపై “దాత” అని పిలువబడును) మొదటి పక్షం.

      కు అనుకూలంగా

      ___________________________ S/O, W/O, D/O __________________________, వయస్సు సుమారు ____ సంవత్సరాలు, వృత్తి: ________________, నివాసం ____________________________________________. ఆధార్ నం. __________________. (ఇకపై “గ్రహీత” అని పిలువబడును) రెండవ పక్షం.

      దాత గృహ నం. ____________, ఇందులో _________________________________, మొత్తం విస్తీర్ణం ____ చదరపు గజాలు లేదా ______ చదరపు మీటర్లు, ఆర్.సి.సి. పైకప్పు విస్తీర్ణం ______ చదరపు అడుగులు, ఉన్న స్థలం _____________________________________________ యొక్క సంపూర్ణ యజమాని మరియు స్వాధీనం కలిగియున్నవాడు. వివరాలు షెడ్యూల్‌లో పూర్తిగా ఇవ్వబడ్డాయి. రిజిస్టర్డ్ సేల్ డీడ్ డాక్యుమెంట్ నం. ____/_____, ఎస్.ఆర్.ఓ ___________ వద్ద నమోదు చేయబడింది.

      దాత మరియు గ్రహీత మధ్య సంబంధం ____________________ కాగా, సహజమైన ప్రేమ మరియు మమకారంతో దాత తన స్వేచ్ఛా సంకల్పంతో పై షెడ్యూల్‌లో పేర్కొన్న ఆస్తిని గ్రహీతకు బహుమతిగా ఇవ్వాలని నిర్ణయించుకున్నాడు.

      ఇది క్రింది షరతులతో గిఫ్ట్ డీడ్ సాక్ష్యమిస్తుంది:
      1. దాత పై షెడ్యూల్ ఆస్తిని శాశ్వతంగా గ్రహీతకు బహుమతిగా బదిలీ చేస్తున్నాడు.
      2. గ్రహీత ఈ బహుమతిని స్వీకరించి ఈ రోజు నుండి భౌతిక స్వాధీనం పొందాడు.
      3. ఈ ఆస్తి పై ఎటువంటి అప్పులు, బాంధకాలు లేదా కోర్టు వివాదాలు లేవని దాత హామీ ఇస్తున్నాడు.
      4. రిజిస్ట్రేషన్ తేదీ వరకు ఉన్న పన్నులు, విద్యుత్ బిల్లులు మరియు ఇతర బకాయిలను దాత చెల్లించును.
      5. ఆస్తి మ్యూటేషన్ కోసం అవసరమైన అన్ని పత్రాలను దాత అమలు చేయును.
      6. భవిష్యత్తులో అన్ని పన్నులు మరియు లెవీలు గ్రహీత చెల్లించును.
      7. దాత అన్ని అసలు లింక్ డాక్యుమెంట్లు మరియు హక్కు పత్రాలను గ్రహీతకు అప్పగించెను.

      అనెక్సర్ 1-A (ఆస్తి వివరణ): గృహ నం. ____________, ఇందులో _________________________________, ఆర్.సి.సి. పైకప్పు విస్తీర్ణం ______ చదరపు అడుగులు, ఉన్న స్థలం ____________________________________. స్టాంప్ డ్యూటీ కోసం ఆస్తి మార్కెట్ విలువ రూ. ___________/-.

      సరిహద్దులు: ఉత్తరం: ________, దక్షిణం: ________, తూర్పు: ________, పడమర: ________

      సాక్షులు: 1.________________ 2.________________.
      దాత సంతకం`
    }
  };

  // 4. TRIGGER TRANSLATION (HARDCODED FOR HI/TE, API FOR OTHERS)
  useEffect(() => {
    async function handleContentUpdate() {
      if (templates[lang]) {
        setTranslatedTitle(templates[lang].title);
        setTranslatedBody(templates[lang].body);
      } else {
        const title = await translateText("GIFT DEED (HOUSE PROPERTY)", lang);
        const body = await translateText(templates.en.body, lang);
        setTranslatedTitle(title);
        setTranslatedBody(body);
      }
    }
    handleContentUpdate();
  }, [lang]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '40px', 
      backgroundImage: "url('/legal-bg.jpg')", // Background Added
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.98)', // Added transparency for glass effect
        padding: '60px', 
        maxWidth: '900px', 
        width: '100%',
        margin: '0 auto', 
        borderRadius: '15px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)', 
        fontFamily: 'serif' 
      }}>
        
        <LanguageSwitcher />

        <button onClick={() => router.push('/house-details')} style={backBtnStyle}>
          ← {t.backToSelection || "Back to Selection"}
        </button>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '30px', color: '#1e293b' }}>
          {translatedTitle}
        </h1>
        
        <div style={{ lineHeight: '2.2', color: '#1e293b', textAlign: 'justify', fontSize: '16px', whiteSpace: 'pre-line' }}>
          {translatedBody}
        </div>

        <button onClick={() => router.push('/gift-deed-house-form')} style={proceedBtnStyle}>
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}

const backBtnStyle = { marginBottom: '20px', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', fontWeight: 'bold', color: '#64748b' };
const proceedBtnStyle = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.5)' };