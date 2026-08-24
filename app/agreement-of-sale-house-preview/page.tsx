"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function AgreementOfSaleHousePreview() {
  const router = useRouter();
  const { t, lang } = useLanguage();
  
  const [content, setContent] = useState({
    title: "",
    body: ""
  });

  // 1. COMPLETE UNABRIDGED CONTENT FOR ALL LANGUAGES
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "AGREEMENT OF SALE",
      body: `This AGREEMENT OF SALE is made and executed on this ___ day of ____________, ____________, BY AND BETWEEN:-
      ___________________________ S/O, W/O, D/O __________________________, AGED ABOUT ____ YEARS, OCCUPATION: ________________, R/O ____________________________________________.
      (Hereinafter called the VENDOR) of the first part IN FAVOUR OF
      ___________________________ S/O, W/O, D/O __________________________, AGED ABOUT ____ YEARS, OCCUPATION: ________________, R/O ____________________________________________.
      (Hereinafter called the VENDEE) of the Second part. Contd..2-2

      WHEREAS (THEORY PART): The VENDOR is the absolute owner and possessor of House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., or equivalent to ______ Sq.Meters., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________ and morefully described in the schedule hereto. Vide Regd. Sale Deed Doct.No._________/___________, Regd. at S.R.O._____________ and since then the VENDOR is in the possession and absolute enjoyment thereof.

      And Whereas the VENDOR has offered to sell the schedule mentioned property to the VENDEE and the VENDEE have agreed to purchase the above said property for a total sale consideration of Rs. ___________/- (Rs. ___________________________________ ONLY) an area of _______ Sq.Yards.

      NOW THIS AGREEMENT OF SALE WITNESSETH AS UNDER (7 CLAUSES):
      1. SALE CONSIDERATION: That in pursuance of the said agreement the VENDEE has paid the advance amount of Rs.______________/- (Rs. _____________________________________ ONLY) Dt:___________, and the receipt of which the VENDOR hereby accept, admit and acknowledge. And the Balance amount of Rs.____________/- (Rs. _________________________________________ ONLY) will be paid Within (____) Days gets registration as per physical measurement of the property.

      2. DOCUMENTS & POSSESSION: That the VENDOR has agreed to hand over all the previous documents, receipts etc.. That the VENDOR hereby agreed to hand over the vacant, peaceful and physical possession.

      3. STATUTORY DUES: VENDOR further agree to pay all the taxes, levies and Bank loans before registration. Contd..3-3

      4. MUTATION: That the VENDOR further agree to sign and execute all papers documents for effective mutation.

      5. ENCUMBRANCE: That the VENDOR hereby assure and covenant with the VENDEE that the property is free from all kinds of encumbrances.

      6. INDEMNITY: The VENDOR shall indemnify the VENDEE against any loss arising from defects in title or any third-party claims found thereafter.

      7. DEFAULT: If the VENDOR fails to complete the sale, they shall return double the advance; if the VENDEE fails, the advance shall be forfeited.

      SCHEDULE OF THE PROPERTY: All that the House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., or equivalent to ______ Sq.Meters., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________.

      BOUNDARIES AS FOLLOWS: NORTH:________, SOUTH:________, EAST:________, WEST:________. Contd..4-4

      IN WITNESS WHERE OF the VENDOR AND THE VENDEE have set their hands on this Agreement of Sale in the presence of following witnesses:`
    },
    hi: {
      title: "विक्रय अनुबंध (AGREEMENT OF SALE)",
      body: `यह विक्रय अनुबंध आज दिनांक ___ ____________, ____________ को निम्नलिखित पक्षों के मध्य संपादित किया गया है:
      ___________________________ पुत्र/पुत्री/पत्नी __________________________, आयु लगभग ____ वर्ष, व्यवसाय: ________________, निवासी ____________________________________________।
      (जिसे आगे “विक्रेता” कहा गया है) प्रथम पक्ष
      के पक्ष में
      ___________________________ पुत्र/पुत्री/पत्नी __________________________, आयु लगभग ____ वर्ष, व्यवसाय: ________________, निवासी ____________________________________________।
      (जिसे आगे “क्रेता” कहा गया है) द्वितीय पक्ष।

      पृष्ठ – 2
      जबकि (विवरणात्मक भाग):
      विक्रेता मकान संख्या __________, जिसमें _________________________________ सम्मिलित है, कुल क्षेत्रफल ____ वर्ग गज अथवा ______ वर्ग मीटर, आर.सी.सी. छत क्षेत्र ______ वर्ग फुट, स्थित _____________________________________________________________ में स्थित संपत्ति का पूर्ण एवं वास्तविक स्वामी एवं धारक है। उक्त संपत्ति को पंजीकृत विक्रय विलेख दस्तावेज संख्या _____/_____, उप-पंजीयक कार्यालय _____________ में पंजीकृत के माध्यम से प्राप्त किया गया था।

      और जबकि, विक्रेता ने अनुसूचित संपत्ति को क्रेता को बेचने का प्रस्ताव दिया है और क्रेता ने उक्त संपत्ति को ₹___________/- (रुपये ___________________________________ मात्र) के कुल विक्रय मूल्य पर खरीदने के लिए सहमति प्रदान की है।

      अब यह विक्रय अनुबंध निम्नानुसार साक्ष्य करता है (7 धाराएँ):
      1. विक्रय मूल्य: इस अनुबंध के अनुसार क्रेता ने अग्रिम राशि ₹______/- (रुपये _____________________________________ मात्र) दिनांक ___________ को अदा की है। शेष राशि पंजीकरण के समय अदा की जाएगी।
      2. दस्तावेज एवं कब्जा: विक्रेता सभी पूर्व दस्तावेज एवं संपत्ति का शांतिपूर्ण, रिक्त एवं भौतिक कब्जा सौंपने के लिए सहमत है।
      3. वैधानिक देयताएँ: विक्रेता पंजीकरण से पूर्व सभी करों एवं बैंक ऋणों का भुगतान करेगा।

      पृष्ठ – 3
      4. नामांतरण: विक्रेता प्रभावी नामांतरण हेतु सभी आवश्यक दस्तावेजों पर हस्ताक्षर करेगा।
      5. भार-मुक्तता: विक्रेता आश्वासन देता है कि संपत्ति सभी प्रकार के भारों से मुक्त है।
      6. क्षतिपूर्ति: स्वामित्व में किसी भी दोष से होने वाली हानि के लिए विक्रेता क्रेता को क्षतिपूर्ति प्रदान करेगा।
      7. चूक: यदि विक्रेता विक्रय पूर्ण करने में असफल रहता है, तो वह अग्रिम की दुगुनी राशि लौटाएगा। यदि क्रेता असफल रहता है, तो अग्रिम राशि जब्त कर ली जाएगी।

      संपत्ति की अनुसूची: मकान संख्या ____________, कुल क्षेत्रफल ____ वर्ग गज, स्थित _____________________________________________________________।
      सीमाएँ: उत्तर: __________, दक्षिण: __________, पूर्व: __________, पश्चिम: __________।

      पृष्ठ – 4
      इस बात के साक्ष्य में विक्रेता एवं क्रेता ने नीचे उल्लिखित गवाहों की उपस्थिति में इस विक्रय अनुबंध पर अपने हस्ताक्षर किए हैं।`
    },
    te: {
      title: "విక్రయ ఒప్పందం (AGREEMENT OF SALE)",
      body: `ఈ విక్రయ ఒప్పందం ఈ ___ తేదీ ____________, ____________ నాడు క్రింది పక్షాల మధ్య చేయబడినది:
      ___________________________ S/O, D/O, W/O __________________________, వయస్సు సుమారు ____ సంవత్సరాలు, వృత్తి: ________________, నివాసం ____________________________________________।
      (ఇకపై “విక్రేత”గా పిలువబడును) మొదటి పక్షం
      కు అనుకూలంగా
      ___________________________ S/O, D/O, W/O __________________________, వయస్సు సుమారు ____ సంవత్సరాలు, వృత్తి: ________________, నివాసం ____________________________________________।
      (ఇకపై “క్రేత”గా పిలువబడును) రెండవ పక్షం

      పేజీ – 2
      ఎందుకంటే (వివరణ భాగ భాగం):
      విక్రేత ఇంటి నంబర్ __________, _________________________________ కలిగి, మొత్తం విస్తీర్ణం ____ చదరపు గజాలు లేదా ______ చదరపు మీటర్లు, ఆర్.సి.సి. పైకప్పు విస్తీర్ణం ______ చదరపు అడుగులు, _____________________________________________________________ వద్ద ఉన్న ఆస్తికి సంపూర్ణ యజమాని. ఈ ఆస్తి డాక్యుమెంట్ నం. / ద్వారా నమోదు చేయబడింది.

      మరియు ఎందుకంటే, విక్రేత ఈ షెడ్యూల్ ఆస్తిని క్రేతకు విక్రయించడానికి అంగీకరించగా, క్రేత మొత్తం విక్రయ ధర ₹___________/- (రూపాయలు ___________________________________ మాత్రమే) కొనుగోలు చేయడానికి అంగీకరించాడు.

      ఇప్పుడు ఈ విక్రయ ఒప్పందం క్రింది విధంగా సాక్ష్యమిస్తుంది (7 క్లాజులు):
      1. విక్రయ ధర: ఈ ఒప్పందం ప్రకారం క్రేత ముందస్తు మొత్తం ₹____/- (రూపాయలు _____________________________________ మాత్రమే) తేదీ _______న చెల్లించాడు. మిగిలిన మొత్తం రిజిస్ట్రేషన్ సమయంలో చెల్లించాలి.
      2. పత్రాలు & స్వాధీనం: విక్రేత అన్ని పూర్వపు పత్రాలను మరియు భౌతిక స్వాధీనాన్ని అప్పగించడానికి అంగీకరిస్తున్నాడు.
      3. చట్టబద్ధ బాకీలు: రిజిస్ట్రేషన్‌కు ముందు అన్ని పన్నులు మరియు బ్యాంకు రుణాలను విక్రేత చెల్లించాలి.

      పేజీ – 3
      4. మ్యూటేషన్ (నామమార్పు): సరైన నామమార్పు కోసం అవసరమైన అన్ని పత్రాలపై విక్రేత సంతకం చేస్తాడు.
      5. భారం లేనితనం: ఈ ఆస్తి అన్ని రకాల భారం లేనిదని విక్రేత హామీ ఇస్తున్నాడు.
      6. నష్టపరిహారం: హక్కుల్లో లోపాలు వల్ల కలిగే నష్టాలకు విక్రేత క్రేతకు పరిహారం చెల్లిస్తాడు.
      7. డిఫాల్ట్: విక్రేత విక్రయాన్ని పూర్తి చేయకపోతే, ముందస్తు మొత్తానికి రెట్టింపు తిరిగి చెల్లించాలి.

      ఆస్తి షెడ్యూల్: ఇంటి నంబర్ ____________, విస్తీర్ణం ____ చదరపు గజాలు, _____________________________________________________________ వద్ద ఉన్న ఆస్తి.
      సరిహద్దులు: ఉత్తరం: __________, దక్షిణం: __________, తూర్పు: __________, పడమర: __________।

      పేజీ – 4
      ఈ విక్రయ ఒప్పందానికి సాక్ష్యంగా, విక్రేత మరియు క్రేత తమ సంతకాలు చేశారు.`
    }
  };

  useEffect(() => {
    // Pick the template based on selected language
    const selectedTemplate = templates[lang] || templates.en;
    setContent(selectedTemplate);
  }, [lang]);

  const buttonStyle = { 
    width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', 
    border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', 
    cursor: 'pointer', marginTop: '30px' 
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>

      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', padding: '60px', maxWidth: '900px', margin: '0 auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: "'Times New Roman', serif" }}>
        
        <LanguageSwitcher />

        <button onClick={() => router.push('/house-details')} style={{ marginBottom: '20px', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', color: '#64748b', fontWeight: 'bold' }}>
          ← {t.backToSelection || "Back"}
        </button>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '30px' }}>
          {content.title}
        </h1>
        
        <div style={{ lineHeight: '2.2', color: '#1e293b', textAlign: 'justify', fontSize: '16px', whiteSpace: 'pre-line' }}>
          {content.body}
        </div>

        <div style={{ marginTop: '80px', borderTop: '1px solid #e2e8f0', paddingTop: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ borderBottom: '1.5px solid black', width: '200px', marginBottom: '10px' }}></div>
              <p><strong>{lang === 'te' ? 'విక్రేత సంతకం' : lang === 'hi' ? 'विक्रेता के हस्ताक्षर' : 'SIGNATURE OF VENDOR'}</strong><br/>(The Seller)</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ borderBottom: '1.5px solid black', width: '200px', marginBottom: '10px' }}></div>
              <p><strong>{lang === 'te' ? 'కొనుగోలుదారు సంతకం' : lang === 'hi' ? 'खरीदार के हस्ताक्षर' : 'SIGNATURE OF VENDEE'}</strong><br/>(The Buyer)</p>
            </div>
          </div>
        </div>

        <button onClick={() => router.push('/agreement-of-sale-house-form')} style={buttonStyle}>
          {t.proceedToForm || "Proceed to Form"} →
        </button>
      </div>
    </div>
  );
}