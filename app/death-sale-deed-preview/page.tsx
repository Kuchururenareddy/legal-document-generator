"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT LANGUAGE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function DeathSaleDeedPreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [content, setContent] = useState({ title: "", body: "" });

  // 3. UNABRIDGED HARDCODED TEMPLATES
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "DEATH SALE DEED",
      body: `THIS SALE DEED is made and executed on this ___ day of _______, _______ by:-
      
      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter called the VENDOR) of the first part.
      
      IN FAVOUR OF
      
      Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. (Hereinafter called the VENDEE) of the Second part.
      
      The terms the VENDORS and THE VENDEE herein used shall wherever the context so admits mean and include their executors, successors, legal representatives, administrators and assignees etc.
      
      WHEREAS the VENDOR is the absolute Owner of the Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________ and more fully described in the schedule hereto. Vide Regd. Sale deed Doct.No._________/__________, at S.R.O._________ and since then the Vendor is in the possession and absolute enjoyment thereof.
      
      WHEREAS GOVERNMENT OF ______________, has issued a Death Certificate in favour of __________________, Vide Registration No.______, Dated:___________, issued by ________________________. Legal Heir Certificate issued in favour of Vendors Vide Letter Bearing Dated:___________, issued by ____________________.
      
      AND WHEREAS the VENDORS have jointly offered to sell the above said property, free from all encumbrances, for a total consideration of Rs.______________/- for his/her family necessities and private affairs and the VENDEE agreed to purchase the same for the said consideration.
      
      SCHEDULE OF THE PROPERTY
      All that the Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________.
      
      BOUNDED AS FOLLOWS: NORTH: ________, SOUTH: ________, EAST: ________, WEST: ________.
      
      IN WITNESS WHERE OF the VENDOR AND THE VENDEE have set their hands on this Sale Deed in the presence of following witnesses.`
    },
    hi: {
      title: "मृत्यु उपरांत विक्रय विलेख (DEATH SALE DEED)",
      body: `यह विक्रय विलेख आज दिनांक ___ _______ _______ को निम्नलिखित द्वारा बनाया एवं निष्पादित किया गया:
      श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या ____________________________, आधार संख्या ____________________।
      
      (जिसे आगे “विक्रेता” कहा जाएगा) प्रथम पक्ष।
      के पक्ष में
      श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या ____________________________, आधार संख्या ____________________।
      
      (जिसे आगे “क्रेता” कहा जाएगा) द्वितीय पक्ष।

      इस विलेख में प्रयुक्त “विक्रेता” तथा “क्रेता” शब्द, जहां संदर्भ अनुमति देता है, उनके निष्पादक, उत्तराधिकारी, विधिक प्रतिनिधि, प्रशासक एवं नामित व्यक्तियों को भी सम्मिलित करेंगे।

      जबकि विक्रेता खुला प्लॉट संख्या __, सर्वे संख्या , क्षेत्रफल _____ वर्ग गज अथवा ________ वर्ग मीटर, स्थित ________________________________________, का पूर्ण स्वामी है, जिसका विस्तृत विवरण अनुसूची में दिया गया है। यह संपत्ति पंजीकृत विक्रय विलेख दस्तावेज संख्या _______/_, उप-पंजीयक कार्यालय _________ में पंजीकृत है तथा तब से विक्रेता इसके कब्जे एवं पूर्ण भोग में है।

      जबकि ____________ सरकार द्वारा __________________ के नाम मृत्यु प्रमाण पत्र जारी किया गया है, पंजीकरण संख्या ________, दिनांक ___________, जारीकर्ता ______________________। विक्रेताओं के पक्ष में विधिक उत्तराधिकारी प्रमाण पत्र दिनांक ___________, पत्र संख्या ________, जारीकर्ता ____________________ द्वारा जारी किया गया है।

      और जबकि विक्रेताओं ने संयुक्त रूप से उक्त संपत्ति को सभी प्रकार के बंधनों से मुक्त रूप में कुल मूल्य रु.______________/- में अपनी पारिवारिक आवश्यकताओं एवं निजी कार्यों हेतु बेचने का प्रस्ताव दिया है तथा क्रेता ने उक्त मूल्य पर खरीदने की सहमति दी है।

      संपत्ति की अनुसूची: खुला प्लॉट संख्या ____, सर्वे संख्या _____, क्षेत्रफल _____ वर्ग गज, स्थित ________________________________________।
      
      सीमाएं इस प्रकार हैं: उत्तर: ________, दक्षिण: ________, पूर्व: ________, पश्चिम: ________`
    },
    te: {
      title: "మరణానంతర విక్రయ పత్రం (DEATH SALE DEED)",
      body: `ఈ విక్రయ పత్రం ఈ ___ తేదీ _______ _______ నాడు క్రింది వ్యక్తిచే చేయబడినది:
      శ్రీ/శ్రీమతి ______________________ తండ్రి/భర్త , వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం H.No., ఆధార్ నం._______________।
      
      (ఇకపై “విక్రేత” అని పిలువబడును) మొదటి పక్షం।
      పక్షమున
      శ్రీ/శ్రీమతి ______________________ తండ్రి/భర్త , వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం H.No., ఆధార్ నం._______________।
      
      (ఇకపై “కొనుగోలుదారు (VENDEE)” అని పిలువబడును) రెండవ పక్షం।

      ఈ పత్రంలో ఉపయోగించిన “విక్రేత” మరియు “కొనుగోలుదారు” అనే పదాలు, సందర్భానుసారం వారి వారసులు, చట్టబద్ధ ప్రతినిధులు, నిర్వాహకులు మరియు హక్కుదారులను కూడా సూచిస్తాయి।

      కాగా విక్రేత ఓపెన్ ప్లాట్ నం., సర్వే నం., విస్తీర్ణం _____ చదరపు గజాలు లేదా ________ చదరపు మీటర్లు, ________________________________________ వద్ద ఉన్న ఆస్తికి పూర్తి యజమాని। ఈ ఆస్తి రిజిస్టర్ చేయబడిన సేల్ డీడ్ డాక్యుమెంట్ నం._______/____, S.R.ఓ._____ లో నమోదు చేయబడింది మరియు అప్పటి నుండి విక్రేత స్వాధీనం మరియు ఆనంద భోగంలో ఉన్నారు।

      ____________ ప్రభుత్వం __________________ గారి పేరున మరణ ధృవపత్రం జారీ చేసింది, నమోదు నం., తేదీ:_______, జారీ చేసిన వారు ______________________। విక్రేతల పేరున చట్టబద్ధ వారసుల ధృవపత్రం తేదీ:___, లేఖ నం., జారీ చేసిన వారు ____________________।

      విక్రేతలు కుటుంబ అవసరాలు మరియు వ్యక్తిగత విషయాల నిమిత్తం పై ఆస్తిని అన్ని రకాల బంధకాల నుండి విముక్తిగా మొత్తం రూ.______________/- కు విక్రయించేందుకు అంగీకరించారు మరియు కొనుగోలుదారు అదే మొత్తానికి కొనుగోలు చేయుటకు అంగీకరించారు।

      షెడ్యూల్ ఆఫ్ ప్రాపర్టీ: ఓపెన్ ప్లాట్ నం.____, సర్వే నం._____, విస్తీర్ణం _____ చదరపు గజాలు, ఉన్నది ________________________________________।

      సరిహద్దులు: ఉత్తరం: ________, దక్షిణం: ________, తూర్పు: ________, పడమర: ________`
    }
  };

  // 4. TRIGGER CONTENT UPDATE
  useEffect(() => {
    setContent(templates[lang] || templates.en);
  }, [lang]);

  return (
    <div style={{ minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div style={{ 
        position: 'fixed', inset: 0, zIndex: -1, 
        backgroundImage: "url('/legal-bg.jpg')", 
        backgroundSize: 'cover', backgroundPosition: 'center' 
      }}></div>

      <div style={docSheetStyle}>
        <LanguageSwitcher />

        <button 
          onClick={() => router.push('/plot-details')} 
          style={backBtnStyle}
        >
          ← {t.backToSelection || "Back to Selection"}
        </button>

        <h1 style={headerStyle}>{content.title}</h1>
        
        <div style={legalTextStyle}>
          <div style={{ whiteSpace: 'pre-line' }}>
            {content.body}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
            <div>
              <p><strong>WITNESSES:</strong></p>
              <p>1. __________________</p>
              <p>2. __________________</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ marginBottom: '50px' }}><strong>(SIGNATURE OF THE VENDORS)</strong></p>
              <p><strong>(SIGNATURE OF THE VENDEE)</strong></p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => router.push('/death-sale-deed-form')} 
          style={proceedBtnStyle}
        >
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}

const docSheetStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.98)', padding: '60px', maxWidth: '900px', margin: '20px auto', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: "'Times New Roman', Times, serif" };
const headerStyle: React.CSSProperties = { textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '20px' };
const legalTextStyle: React.CSSProperties = { lineHeight: '1.8', color: '#000', textAlign: 'justify', fontSize: '15px' };
const backBtnStyle: React.CSSProperties = { marginBottom: '20px', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', fontWeight: 'bold', color: '#64748b' };
const proceedBtnStyle: React.CSSProperties = { width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '40px' };