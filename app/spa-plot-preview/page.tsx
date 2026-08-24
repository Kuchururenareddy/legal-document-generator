"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// 1. IMPORT TRANSLATION & VOICE LOGIC
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Volume2 } from 'lucide-react';

export default function SPAHousePreview() {
  const router = useRouter();
  // 2. INITIALIZE HOOKS
  const { t, lang } = useLanguage();
  const [translatedBody, setTranslatedBody] = useState("");
  const [translatedTitle, setTranslatedTitle] = useState("SPECIAL POWER OF ATTORNEY");
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 3. HARDCODED UNABRIDGED TEMPLATES (Registration Quality)
  const templates: { [key: string]: { title: string, body: string } } = {
    en: {
      title: "SPECIAL POWER OF ATTORNEY",
      body: `Know all men by these presents that I, Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. PRESENTLY RESIDING AT _______________________________.

      Do hereby nominate, constitute and appoint: Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________.
                                 
      As my true and lawful attorney on my name and on my behalf to do the following acts. Contd..2

      -2-
      WHEREAS the Executant i.e., the Principal is the absolute Owner of the ALL THAT THE Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________. and morefully described in the schedule hereto. Having Purchased the Same Vide a Regd.Sale Deed Doct.No.________/________, Regd.at..S.R.O. _______ and since then the Executant i.e., the Principal is in the possession and absolute enjoyment thereof.
        
      Whereas I am staying presently at_______________________________________________ and unable to come to Registration of transactions to the Registrar’s Office Bhongir. As such I am unable to go over to the Registration office Bhongir, whenever called for, for admission of any deed or deeds and as such I have appointed the above said attorney to act in my name and on my behalf as follows:- 

      SCHEDULE OF THE PROPERTY
      ALL THAT THE Open Plot bearing No.____, in Sy.No._____, admeasuring an area of _____ Sq.Yards or equivalent to ________ Sq.meters, Situated at ________________________________________. 

      BOUNDRIES AS FOLLOWS:
      NORTH : 
      SOUTH : 
      EAST  : 
      WEST  : 

      To admit execution of Sale Deed which is executed by me or to be executed by Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________. and to present the same for registration before the registering authority and to admit execution of the same on my behalf. Contd..3

      -3-
      In Witness Whereof I have signed this Power of Attorney on this the ____ day of ___________, _________, in the presence of the following witnesses:

      WITNESSES:
      1.
      2.
      EXECUTANT`
    },
    hi: {
      title: "विशेष पावर ऑफ अटॉर्नी (Special Power of Attorney)",
      body: `इन दस्तावेजों द्वारा सर्वविदित हो कि मैं, श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान नं. __________________________, आधार संख्या ____________________. वर्तमान में निवासी ___________________________________।

      एतद्वारा श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान नं. __________________________, आधार संख्या ____________________ को अपना विधिसम्मत एवं अधिकृत अभिकर्ता (अटॉर्नी) नियुक्त करता/करती हूँ। क्रमशः… 2

      -2-
      जहाँ निष्पादक अर्थात् प्रधान (Principal) उक्त संपत्ति का पूर्ण स्वामी है: संपूर्ण वह खुला प्लॉट संख्या ____, सर्वे संख्या ____, कुल क्षेत्रफल _____ वर्ग गज या ________ वर्ग मीटर, स्थित ________________________________________, जिसका विवरण अनुसूची में वर्णित है। उक्त संपत्ति पंजीकृत विक्रय विलेख दस्तावेज संख्या /, उप-पंजीयक कार्यालय _______ में पंजीकृत है।

      जहाँ मैं वर्तमान में _______________________________________________ में निवास कर रहा/रही हूँ और रजिस्ट्रार कार्यालय भोंगीर में पंजीकरण हेतु उपस्थित होने में असमर्थ हूँ। अतः मैंने उपर्युक्त अभिकर्ता को अपने नाम से तथा मेरी ओर से निम्नलिखित कार्य करने हेतु नियुक्त किया है:

      संपत्ति का अनुसूची विवरण
      संपूर्ण वह खुला प्लॉट संख्या ____, सर्वे संख्या ____, कुल क्षेत्रफल _____ वर्ग गज या ________ वर्ग मीटर, स्थित ________________________________________।

      सीमाएँ: उत्तर: , दक्षिण: , पूर्व: , पश्चिम: 

      मेरे द्वारा निष्पादित या श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी _______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान नं. __________________________, आधार संख्या ____________________ द्वारा निष्पादित विक्रय विलेख को स्वीकार करना तथा उसे पंजीकरण प्राधिकारी के समक्ष प्रस्तुत करना। क्रमशः… 3

      -3-
      इसकी पुष्टि में मैंने इस पावर ऑफ अटॉर्नी पर दिनांक ____ ___________, _________ को निम्नलिखित साक्षियों की उपस्थिति में हस्ताक्षर किए।

      साक्षी:
      1.
      2.
      निष्पादक (EXECUTANT)`
    },
    te: {
      title: "స్పెషల్ పవర్ ఆఫ్ అటార్నీ (Special Power of Attorney)",
      body: `ఈ పత్రం ద్వారా అందరికీ తెలియజేయునది ఏమనగా నేను, శ్రీ/శ్రీమతి ______________________ S/O లేదా D/O లేదా W/O _______________________, వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________. ప్రస్తుతం నివసిస్తున్న స్థలం ___________________________________.

      దీనివల్ల నేను శ్రీ/శ్రీమతి ______________________ S/O లేదా D/O లేదా W/O _______________________, వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం హౌస్ నం. __________________________, ఆధార్ నం. ____________________ గారిని నా నిజమైన మరియు చట్టబద్ధ ప్రతినిధిగా నియమించుచున్నాను. కొనసాగింపు… 2

      -2-
      ఎగ్జిక్యూటెంట్ అనగా ప్రిన్సిపల్ క్రింది ఆస్తికి సంపూర్ణ యజమాని: సర్వం ఆ ఓపెన్ ప్లాట్ నం. ____, సర్వే నం. ____, మొత్తం విస్తీర్ణం _____ చదరపు గజాలు లేదా ________ చదరపు మీటర్లు, ఉన్న స్థలం ________________________________________. ఈ ఆస్తి రిజిస్టర్డ్ సేల్ డీడ్ డాక్యుమెంట్ నం. /, ఎస్.ఆర్.ఓ. _______ వద్ద నమోదు చేయబడినది.

      నేను ప్రస్తుతం _______________________________________________ వద్ద నివసిస్తున్నాను. అందువల్ల రిజిస్ట్రార్ కార్యాలయం భువనగిరి (Bhongir) లో నమోదు ప్రక్రియలకు హాజరు కాలేకపోతున్నాను. కాబట్టి పై పేర్కొన్న ప్రతినిధిని నా పేరుమీద మరియు నా తరఫున నియమించుచున్నాను:

      ఆస్తి షెడ్యూల్
      సర్వం ఆ ఓపెన్ ప్లాట్ నం. ____, సర్వే నం. ____, మొత్తం విస్తీర్ణం _____ చదరపు గజాలు లేదా ________ చదరపు మీటర్లు, ఉన్న స్థలం ________________________________________.

      సరిహద్దులు: ఉత్తరం: , దక్షిణం: , తూర్పు: , పడమర: 

      నేను నిర్వహించిన లేదా శ్రీ/శ్రీమతి ______________________ గారి సేల్ డీడ్‌ను అంగీకరించి, రిజిస్ట్రేషన్ అధికారుల ముందు సమర్పించి, నా తరఫున దాని అమలును అంగీకరించుటకు అధికారమును కలిగియుంటారు. కొనసాగింపు… 3

      -3-
      ఈ పవర్ ఆఫ్ అటార్నీ పత్రంపై నేను ____ తేదీ ___________, _________ నాడు క్రింది సాక్షుల సమక్షంలో సంతకం చేసియున్నాను.

      సాక్షులు:
      1.
      2.
      ఎగ్జిక్యూటెంట్ (EXECUTANT)`
    }
  };

  // 4. TRIGGER CONTENT UPDATE BASED ON LANGUAGE
  useEffect(() => {
    const selected = templates[lang] || templates.en;
    setTranslatedTitle(selected.title);
    setTranslatedBody(selected.body);
  }, [lang]);

  // 5. TEXT TO SPEECH LOGIC
  const handleListen = () => {
    const synth = window.speechSynthesis;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(translatedBody);
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    synth.speak(utterance);
  };

  const buttonStyle = { 
    width: '100%', padding: '18px', backgroundColor: '#0b1f3a', color: 'white', 
    border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', 
    cursor: 'pointer', marginTop: '30px' 
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: "url('/legal-bg.jpg')", // Background Image
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
        borderRadius: '20px', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)', 
        fontFamily: 'serif' 
      }}>
        
        {/* Navigation & Tools Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <button onClick={() => router.push('/house-details')} style={{ padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', color: '#64748b', fontWeight: 'bold' }}>
            ← {t.backToSelection || "Back"}
          </button>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button 
              onClick={handleListen}
              style={{ padding: '8px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', cursor: 'pointer', backgroundColor: isSpeaking ? '#ef4444' : '#f8fafc', color: isSpeaking ? 'white' : '#64748b', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}
            >
              <Volume2 size={18} /> {isSpeaking ? "STOP" : (t.readAloud || "Listen")}
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', marginBottom: '30px', color: '#1e293b' }}>
          {translatedTitle}
        </h1>
        
        <div style={{ lineHeight: '2.4', color: '#1e293b', textAlign: 'justify', fontSize: '16px', whiteSpace: 'pre-line' }}>
          {translatedBody}
        </div>

        <button onClick={() => router.push('/spa-house-form')} style={buttonStyle}>
          {t.proceedToForm || "Proceed to Fill All Blanks"} →
        </button>
      </div>
    </div>
  );
}