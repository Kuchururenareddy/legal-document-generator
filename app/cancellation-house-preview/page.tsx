"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function CancellationHousePreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [content, setContent] = useState({ title: "", body: "" });

  // 3. HARDCODED UNABRIDGED TEMPLATES (Registration Quality)
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "DEED OF REVOCATION",
      body: `This deed of REVOCATION is made and executed this ____ day of __________, 2025, By and between:-

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter Called the ‘First Party’) of The First Part.

      IN FAVOUR OF

      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter Called the ‘Second Party’) of the Second Part.

      The terms ‘THE FIRST PARTY’ and SECOND PARTY’ herein used shall wherever the context so admits mean and include their respective heirs, executors, successors, legal representatives, administrators and assignees etc., as the parties themselves.

      WHEREAS by a deed of sale dated ___ day of __________, ________ executed between the same parties who are parties to this deed of REVOCATION and in the same order which was registered Doct.No.______/______ at S.R.O.Bhongir, (hereinafter called the Principal Deed) the FIRST PARTY purported have sold and conveyed to the VENDEE that the House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., or equivalent to ______ Sq.Meters., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________.

      WHEREAS the VENDEE did not actually pay the consideration amount the FIRST PARTY despite repeated request to pay the consideration from the FIRST PARTY and the VENDEE did not comply the request of the FIRST PARTY, hence as a lost resort the FIRST PARTY hereby decided to cancel the Doct.No.______/______________, forthwith and the possession of the said property was not given to the VENDEE.

      WHEREAS the property stands on the name of the FIRST PARTY in the Municipal records and it has been paying the taxes ever since. The original document as today in the custody of FIRST PARTY Only.

      WHEREAS Under the above mentioned circumstances it is found necessary to cancel the Principal deed since VENDEE did not comply with the provisions of Indian contract Act.

      NOW THEREFORE THIS DEED OF REVOCATION WITNESSES AS FOLLOWS:

      The FIRST PARTY hereby cancel and null and Void the Principal deed which is hereby declared as null and void and of no effect.

      The FIRST PARTY has not received any consideration for the registration of this deed of REVOCATION. Contd..3

      -3-
      The FIRST PARTY willingly agrees to cancel the sale deed.

      This deed of REVOCATION shall be deemed to have come into effect from the date of execution of the Principal deed.

      SCHEDULE OF THE PROPERTY: All that the House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., or equivalent to ______ Sq.Meters., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________.

      BOUNDRIES AS FOLLOWS: NORTH: ________, SOUTH: ________, EAST: ________, WEST: ________.

      In witness the FIRST PARTY AND SECOND PARTY has signed this deed of REVOCATION on the date first above mentioned in the presence of the following witnesses.

      WITNESSES: 1.________________ 2.________________. SIG. OF THE FIRST PARTY / SIG. OF THE SECOND PARTY`
    },
    hi: {
      title: "निरस्तीकरण विलेख (DEED OF REVOCATION)",
      body: `यह निरस्तीकरण विलेख आज दिनांक ____ __________, 2025 को निम्नलिखित पक्षों के बीच बनाया और निष्पादित किया गया:-

      श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी ______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या __________________________, आधार संख्या ____________________। (जिसे आगे ‘प्रथम पक्ष’ कहा जाएगा)

      के पक्ष में

      श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी ______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या __________________________, आधार संख्या ____________________। (जिसे आगे ‘द्वितीय पक्ष’ कहा जाएगा)

      जहां, एक विक्रय विलेख दिनांक ___ ________, ________ को इन्हीं पक्षों के बीच निष्पादित किया गया था, जो दस्तावेज संख्या / के रूप में उप-पंजीयक कार्यालय, भोंगिर में पंजीकृत हुआ (जिसे आगे ‘मूल विलेख’ कहा जाएगा), जिसके द्वारा प्रथम पक्ष ने मकान संख्या __________, जिसमें _________________________________ सम्मिलित है, द्वितीय पक्ष को विक्रय किया था।

      जहां, द्वितीय पक्ष ने प्रथम पक्ष को विक्रय मूल्य का भुगतान वास्तव में नहीं किया, अतः अंतिम उपाय के रूप में प्रथम पक्ष ने दस्तावेज संख्या /__________ को तत्काल प्रभाव से निरस्त करने का निर्णय लिया।

      जहां, उपर्युक्त परिस्थितियों में, चूंकि द्वितीय पक्ष ने भारतीय अनुबंध अधिनियम (Indian Contract Act) के प्रावधानों का पालन नहीं किया, अतः मूल विलेख को निरस्त करना आवश्यक पाया गया।

      अतः यह निरस्तीकरण विलेख निम्नलिखित साक्ष्य देता है:
      प्रथम पक्ष द्वारा मूल विलेख को निरस्त एवं शून्य घोषित किया जाता है। प्रथम पक्ष ने इस निरस्तीकरण विलेख के पंजीकरण हेतु कोई प्रतिफल प्राप्त नहीं किया है।

      संपत्ति का विवरण (SCHEDULE OF THE PROPERTY): मकान संख्या __________, जिसमें _________________________________ सम्मिलित है, कुल क्षेत्रफल ____ वर्ग गज, स्थित _____________________________________________।

      सीमाएं निम्नानुसार: उत्तर: ________, दक्षिण: ________, पूर्व: ________, पश्चिम: ________`
    },
    te: {
      title: "రద్దు పత్రం (DEED OF REVOCATION)",
      body: `ఈ రద్దు పత్రం ఈ రోజు ____ __________, 2025 న క్రింది పక్షాల మధ్య తయారు చేయబడింది:-

      శ్రీ/శ్రీమతి ______________________ గారి కుమారుడు/కుమార్తె/భార్య ______________________, వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________। (మొదటి పక్షం)

      అనుకూలంగా

      శ్రీ/శ్రీమతి ______________________ గారి కుమారుడు/కుమార్తె/భార్య ______________________, వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________। (రెండవ పక్షం)

      ఎందుకంటే ___ ________, ________ తేదీన ఈ పక్షాల మధ్య ఒక విక్రయ పత్రం డాక్యుమెంట్ నం. / గా ఎస్.ఆర్.ఓ. భువనగిరి (S.R.O. Bhongir) లో నమోదు చేయబడింది (ప్రధాన పత్రం).

      ఎందుకంటే రెండవ పక్షం విక్రయ ధరను మొదటి పక్షానికి చెల్లించలేదు, అందువల్ల చివరి మార్గంగా మొదటి పక్షం డాక్యుమెంట్ నం. /__________ ను తక్షణమే రద్దు చేయాలని నిర్ణయించుకుంది. ఆస్తి స్వాధీనం కూడా రెండవ పక్షానికి ఇవ్వబడలేదు.

      పై పరిస్థితుల దృష్ట్యా, రెండవ పక్షం భారత ఒప్పంద చట్టం (Indian Contract Act) నిబంధనలను పాటించకపోవడం వల్ల ప్రధాన పత్రాన్ని రద్దు చేయడం అవసరమని నిర్ణయించబడింది.

      అందువల్ల ఈ రద్దు పత్రం క్రింది విధంగా సాక్ష్యమిస్తుంది:
      మొదటి పక్షం ప్రధాన పత్రాన్ని రద్దు చేసి శూన్యంగా ప్రకటిస్తుంది. మొదటి పక్షం స్వచ్ఛందంగా విక్రయ పత్రాన్ని రద్దు చేయడానికి అంగీకరిస్తుంది.

      ఆస్తి వివరాలు (SCHEDULE OF THE PROPERTY): హౌస్ నం. __________, మొత్తం విస్తీర్ణం ____ చదరపు గజాలు, ఉన్నది _____________________________________________।

      సరిహద్దులు: ఉత్తరం: ________, దక్షిణం: ________, తూర్పు: ________, పడమర: ________`
    }
  };

  // 4. TRIGGER CONTENT UPDATE BASED ON LANGUAGE
  useEffect(() => {
    setContent(templates[lang] || templates.en);
  }, [lang]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.98)', 
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
          {content.title}
        </h1>
        
        <div style={{ lineHeight: '2.2', color: '#1e293b', textAlign: 'justify', fontSize: '16px', whiteSpace: 'pre-line' }}>
          {content.body}
        </div>

        <button onClick={() => router.push('/cancellation-house-form')} style={proceedBtnStyle}>
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}

const backBtnStyle = { marginBottom: '20px', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', fontWeight: 'bold', color: '#64748b' };
const proceedBtnStyle = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.5)' };