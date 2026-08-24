"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Volume2 } from 'lucide-react';

export default function SPAHousePreview() {
  const router = useRouter();
  const { t, lang } = useLanguage();
  const [content, setContent] = useState({ title: "", body: "" });
  const [isSpeaking, setIsSpeaking] = useState(false);

  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "SPECIAL POWER OF ATTORNEY",
      body: `Know all men by these presents that I, Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. PRESENTLY RESIDING AT _______________________________.

      Do hereby nominate, constitute and appoint: Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________.
                                 
      As my true and lawful attorney on my name and on my behalf to do the following acts. Contd..2

      -2-
      WHEREAS the Executant i.e., the Principal is the absolute Owner of the House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of ____ Sq.Yards., or equivalent to ______ Sq.Meters., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________. and morefully described in the schedule hereto. Vide Regd. Sale Deed Doct.No._________/___________, Regd. at S.R.O._____________ and since then the Executant i.e., the Principal is in the possession and absolute enjoyment thereof.
        
      Whereas I am staying presently at_______________________________________________ and unable to come to Registration of transactions to the Registrar’s Office Bhongir. As such I am unable to go over to the Registration office Bhongir, whenever called for, for admission of any deed or deeds and as such I have appointed the above said attorney to act in my name and on my behalf as follows:- 

      SCHEDULE OF THE PROPERTY: All that the House Bearing No.____________, Consisting of _________________________________, in all admeasuring an area of____ Sq.Yards., or equivalent to ______ Sq.Meters., With R.C.C.Roof area ______ Sft., Situated at _____________________________________________________________.
	 
      BOUNDRIES AS FOLLOWS: NORTH: ________, SOUTH: ________, EAST: ________, WEST: ________.

      To admit execution of Sale Deed which is executed by me or to be executed by Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. and to present the same for registration before the registering authority and to admit execution of the same on my behalf. Contd..3

      -3-
      In Witness Whereof I have signed this Power of Attorney on this the ____ day of ___________, _________, in the presence of the following witnesses:

      WITNESSES: 
      1.________________ 
      2.________________. 
      EXECUTANT`
    },
    hi: {
      title: "विशेष पावर ऑफ अटॉर्नी (मकान संपत्ति)",
      body: `इन दस्तावेजों द्वारा सर्वविदित हो कि मैं, श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या __________________________, आधार संख्या ____________________, वर्तमान में निवासी ___________________________________।

      एतद्वारा मैं श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान संख्या __________________________, आधार संख्या ____________________ को अपना विधिवत एवं अधिकृत अभिकर्ता नियुक्त करता/करती हूँ। क्रमशः… 2

      -2-
      जहाँ निष्पादक अर्थात् प्रधान (Principal) निम्नलिखित संपत्ति का पूर्ण स्वामी है: मकान संख्या ____________, जिसमें _________________________________ सम्मिलित है, कुल क्षेत्रफल ____ वर्ग गज या ______ वर्ग मीटर, आर.सी.सी. छत क्षेत्र ______ वर्ग फुट, स्थित __________________________________________, जिसका विस्तृत विवरण अनुसूची में वर्णित है। उक्त संपत्ति पंजीकृत विक्रय विलेख दस्तावेज संख्या /, उप-पंजीयक कार्यालय _____________ में पंजीकृत है।

      जहाँ मैं वर्तमान में _______________________________________________ में निवास कर रहा/रही हूँ और रजिस्ट्रार कार्यालय भोंगीर में पंजीकरण हेतु उपस्थित होने में असमर्थ हूँ। अतः मैंने उपर्युक्त अभिकर्ता को नियुक्त किया है:

      संपत्ति का अनुसूची विवरण: मकान संख्या ____________, जिसमें _________________________________ सम्मिलित है, कुल क्षेत्रफल ____ वर्ग गज या ______ वर्ग मीटर, आर.सी.सी. छत क्षेत्र ______ वर्ग फुट, स्थित _____________________________________________।
      सीमाएँ: उत्तर: ________, दक्षिण: ________, पूर्व: ________, पश्चिम: ________

      मेरे द्वारा निष्पादित या श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________ द्वारा निष्पादित विक्रय विलेख को स्वीकार करना तथा उसे पंजीकरण प्राधिकारी के समक्ष प्रस्तुत करना। क्रमशः… 3

      -3-
      इसकी पुष्टि में मैंने इस पावर ऑफ अटॉर्नी पर दिनांक ____ ___________, _________ को निम्नलिखित साक्षियों की उपस्थिति में हस्ताक्षर किए।

      साक्षी: 
      1.________________ 
      2.________________. 
      निष्पादक (EXECUTANT)`
    },
    te: {
      title: "స్పెషల్ పవర్ ఆఫ్ అటార్నీ (ఇల్లు ఆస్తి)",
      body: `ఈ పత్రం ద్వారా అందరికీ తెలియజేయునది ఏమనగా నేను, శ్రీ/శ్రీమతి ______________________ S/O లేదా D/O లేదా W/O _______________________, వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________, ప్రస్తుతం నివసిస్తున్న స్థలం ___________________________________।

      దీనివల్ల నేను శ్రీ/శ్రీమతి ______________________ గారిని నా చట్టబద్ధ ప్రతినిధిగా నియమించుచున్నాను. కొనసాగింపు… 2

      -2-
      ఎగ్జిక్యూటెంట్ అనగా ప్రిన్సిపల్ క్రింది ఆస్తికి సంపూర్ణ యజమాని: హౌస్ నం. ____________, ఇందులో _________________________________, మొత్తం విస్తీర్ణం ____ చదరపు గజాలు లేదా ______ చదరపు మీటర్లు, ఆర్.सी.సి. పైకప్పు విస్తీర్ణం ______ చదరపు అడుగులు, ఉన్న స్థలం __________________________________________, వివరాలు షెడ్యూల్‌లో ఇవ్వబడ్డాయి. ఈ ఆస్తిని రిజిస్టర్డ్ సేల్ డీడ్ డాక్యుమెంట్ నం. /, ఎస్.ఆర్.ఓ. _____________ వద్ద నమోదు చేసి కొనుగోలు చేయబడింది.

      నేను ప్రస్తుతం _______________________________________________ వద్ద నివసిస్తున్నాను. అందువల్ల భువనగిరి (Bhongir) రిజిస్ట్రేషన్ కార్యాలయానికి హాజరు కాలేకపోతున్నాను. కాబట్టి పై పేర్కొన్న ప్రతినిధిని నా తరఫున నియమించుచున్నాను:

      ఆస్తి షెడ్యూల్: హౌస్ నం. ____________, విస్తీర్ణం ____ చదరపు గజాలు, ఉన్న స్థలం _____________________________________________।
      సరిహద్దులు: ఉత్తరం: ________, దక్షిణం: ________, తూర్పు: ________, పడమర: ________

      నేను నిర్వహించిన లేదా శ్రీ/శ్రీమతి ______________________ గారు నిర్వహించు సేల్ డీడ్‌ను అంగీకరించి, రిజిస్ట్రేషన్ అధికారుల ముందు సమర్పించి నా తరఫున దానిని అంగీకరించుటకు అధికారమును కలిగియుంటారు. కొనసాగింపు… 3

      -3-
      ఈ పవర్ ఆఫ్ అటార్నీ పత్రంపై నేను ____ తేదీ ___________, _________ నాడు సంతకం చేసియున్నాను.

      సాక్షులు: 
      1.________________ 
      2.________________. 
      ఎగ్జిక్యూటెంట్ (EXECUTANT)`
    }
  };

  useEffect(() => { setContent(templates[lang] || templates.en); }, [lang]);

  const handleListen = () => {
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(content.body);
    utterance.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', padding: '60px', maxWidth: '900px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontFamily: 'serif' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← {t.back || "Back"}</button>
          <div style={{ display: 'flex', gap: '10px' }}>
             <button onClick={handleListen} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#3b82f6', color: 'white' }}><Volume2 size={18}/> {isSpeaking ? "STOP" : "Listen"}</button>
             <LanguageSwitcher />
          </div>
        </div>
        <h1 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '24px', marginBottom: '30px' }}>{content.title}</h1>
        <div style={{ lineHeight: '2.2', textAlign: 'justify', fontSize: '17px', whiteSpace: 'pre-line' }}>{content.body}</div>
        <button onClick={() => router.push('/spa-house-form')} style={{ ...btnStyle, width: '100%', marginTop: '30px', backgroundColor: '#0b1f3a', color: 'white' }}>Proceed to Form →</button>
      </div>
    </div>
  );
}
const btnStyle = { padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' };