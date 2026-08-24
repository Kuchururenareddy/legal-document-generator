"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function SPAHouseDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Retrieval key matches your form's saving logic
    const saved = localStorage.getItem('spaDraftData');
    if (saved) {
      setData(JSON.parse(saved));
    }

    // Pre-load voices for TTS
    const loadVoices = () => { window.speechSynthesis.getVoices(); };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const getVal = (val: any) => (val ? val : "________________");

  // MASTER CONTENT GENERATOR: Fills Templates with Form Data
  const generateContent = (f: any, activeLang: string) => {
    if (!f) return "";

    if (activeLang === 'te') {
      return `స్పెషల్ పవర్ ఆఫ్ అటార్నీ (Special Power of Attorney)
ఈ పత్రం ద్వారా అందరికీ తెలియజేయునది ఏమనగా నేను,
శ్రీ/శ్రీమతి ${getVal(f.pName)} ${getVal(f.pRelation)} ${getVal(f.pRelativeName)}, వయస్సు ${getVal(f.pAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.pOcc)}, నివాసం హౌస్ నం. ${getVal(f.pAddress)}, ఆధార్ నం. ${getVal(f.pAadhar)}, ప్రస్తుతం నివసిస్తున్న స్థలం ${getVal(f.pPresentlyAt)}।

దీనివల్ల నేను శ్రీ/శ్రీమతి ${getVal(f.aName)} ${getVal(f.aRelation)} ${getVal(f.aRelativeName)}, వయస్సు ${getVal(f.aAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.aOcc)}, నివాసం హౌస్ నం. ${getVal(f.aAddress)}, ఆధార్ నం. ${getVal(f.aAadhar)} గారిని నా చట్టబద్ధ ప్రతినిధిగా నియమించుచున్నాను. వారు నా పేరుమీద మరియు నా తరఫున క్రింది చర్యలు చేయుటకు అధికారం కలిగియుంటారు. కొనసాగింపు… 2

-2-
ఎగ్జిక్యూటెంట్ అనగా ప్రిన్సిపల్ క్రింది ఆస్తికి సంపూర్ణ యజమాని:
హౌస్ నం. ${getVal(f.houseNo)}, ఇందులో ${getVal(f.consistingOf)}, మొత్తం విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ఆర్.సి.సి. పైకప్పు విస్తీర్ణం ${getVal(f.roofSft)} చదరపు అడుగులు, ఉన్న స్థలం ${getVal(f.situation)}, వివరాలు షెడ్యూల్‌లో ఇవ్వబడ్డాయి. ఈ ఆస్తిని రిజిస్టర్డ్ సేల్ డీడ్ డాక్యుమెంట్ నం. ${getVal(f.saleDeedNo)}/${getVal(f.regYear)}, ఎస్.ఆర్.ఓ. ${getVal(f.sroOffice)} వద్ద నమోదు చేసి కొనుగోలు చేయబడింది. అప్పటి నుండి ప్రిన్సిపల్ స్వాధీనంలో మరియు సంపూర్ణ అనుభవంలో ఉన్నారు.

నేను ప్రస్తుతం ${getVal(f.pPresentlyAt)} వద్ద నివసిస్తున్నాను. అందువల్ల భువనగిరి (Bhongir) రిజిస్ట్రేషన్ కార్యాలయానికి హాజరు కాలేకపోతున్నాను. ఎప్పుడైనా పత్రాల అంగీకారం కోసం పిలిచినప్పుడు హాజరు కావడం సాధ్యం కాదు. అందువల్ల పై పేర్కొన్న ప్రతినిధిని నా పేరుమీద మరియు నా తరఫున క్రింది విధంగా నియమించుచున్నాను:

ఆస్తి షెడ్యూల్: హౌస్ నం. ${getVal(f.houseNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు, ఉన్న స్థలం ${getVal(f.situation)}।
సరిహద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}

నేను నిర్వహించిన లేదా శ్రీ/శ్రీమతి ${getVal(f.tpName)} ${getVal(f.tpRelation)} ${getVal(f.tpRelativeName)}, వయస్సు ${getVal(f.tpAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.tpOcc)}, నివాసం హౌస్ నం. ${getVal(f.tpAddress)}, ఆధార్ నం. ${getVal(f.tpAadhar)} గారు నిర్వహించు సేల్ డీడ్‌ను అంగీకరించి, రిజిస్ట్రేషన్ అధికారుల ముందు సమర్పించి, నా తరఫున దాని అమలును అంగీకరించుటకు అధికారమును కలిగియుంటారు. కొనసాగింపు… 3

-3-
ఈ పవర్ ఆఫ్ అటార్నీ పత్రంపై నేను ${getVal(f.day)} తేదీ ${getVal(f.month)}, ${getVal(f.year)} నాడు క్రింది సాక్షుల సమక్షంలో సంతకం చేసియున్నాను.

సాక్షులు:
1.
2.
ఎగ్జిక్యూటెంట్ (EXECUTANT)`;
    }

    if (activeLang === 'hi') {
      return `विशेष पावर ऑफ अटॉर्नी (Special Power of Attorney)
इन दस्तावेजों द्वारा सर्वविदित हो कि मैं,
श्री/श्रीमती ${getVal(f.pName)} ${getVal(f.pRelation)} ${getVal(f.pRelativeName)}, आयु ${getVal(f.pAge)} वर्ष, व्यवसाय: ${getVal(f.pOcc)}, निवासी मकान संख्या ${getVal(f.pAddress)}, आधार संख्या ${getVal(f.pAadhar)}, वर्तमान में निवासी ${getVal(f.pPresentlyAt)}।

एतद्वारा मैं श्री/श्रीमती ${getVal(f.aName)} ${getVal(f.aRelation)} ${getVal(f.aRelativeName)}, आयु ${getVal(f.aAge)} वर्ष, व्यवसाय: ${getVal(f.aOcc)}, निवासी मकान संख्या ${getVal(f.aAddress)}, आधार संख्या ${getVal(f.aAadhar)} को अपना विधिवत एवं अधिकृत अभिकर्ता नियुक्त करता/करती हूँ। क्रमशः… 2

-2-
जहाँ निष्पादक अर्थात् प्रधान (Principal) निम्नलिखित संपत्ति का पूर्ण स्वामी है:
मकान संख्या ${getVal(f.houseNo)}, जिसमें ${getVal(f.consistingOf)} सम्मिलित है, कुल क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज या ${getVal(f.areaSqMtrs)} वर्ग मीटर, आर.सी.सी. छत क्षेत्र ${getVal(f.roofSft)} वर्ग फुट, स्थित ${getVal(f.situation)}, जिसका विस्तृत विवरण अनुसूची में वर्णित है। उक्त संपत्ति पंजीकृत विक्रय विलेख दस्तावेज संख्या ${getVal(f.saleDeedNo)}/${getVal(f.regYear)}, उप-पंजीयक कार्यालय ${getVal(f.sroOffice)} में पंजीकृत है।

जहाँ मैं वर्तमान में ${getVal(f.pPresentlyAt)} में निवास कर रहा/रही हूँ और रजिस्ट्रार कार्यालय भोंगीर में पंजीकरण हेतु उपस्थित होने में असमर्थ हूँ। अतः मैंने उपर्युक्त अभिकर्ता को अपने नाम से कार्य करने हेतु नियुक्त किया है:

संपत्ति का अनुसूची विवरण: मकान संख्या ${getVal(f.houseNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.situation)}।
सीमाएँ: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}

मेरे द्वारा निष्पादित या श्री/श्रीमती ${getVal(f.tpName)} ${getVal(f.tpRelation)} ${getVal(f.tpRelativeName)}, आयु ${getVal(f.tpAge)} वर्ष, व्यवसाय: ${getVal(f.tpOcc)}, निवासी मकान संख्या ${getVal(f.tpAddress)}, आधार संख्या ${getVal(f.tpAadhar)} द्वारा निष्पादित विक्रय विलेख को स्वीकार करना तथा उसे पंजीकरण प्राधिकारी के समक्ष प्रस्तुत करना। क्रमशः… 3

-3-
इसकी पुष्टि में मैंने इस पावर ऑफ अटॉर्नी पर दिनांक ${getVal(f.day)} ${getVal(f.month)}, ${getVal(f.year)} को साक्षियों की उपस्थिति में हस्ताक्षर किए।

साक्षी:
1.
2.
निष्पादक (EXECUTANT)`;
    }

    return `SPECIAL POWER OF ATTORNEY
Know all men by these presents that I,
Mr/Mrs ${getVal(f.pName)} ${getVal(f.pRelation)} ${getVal(f.pRelativeName)}, AGED ${getVal(f.pAge)} YEARS, OCCUPATION: ${getVal(f.pOcc)}, R/O H.NO. ${getVal(f.pAddress)}, AADHAR NO. ${getVal(f.pAadhar)}, PRESENTLY RESIDING AT ${getVal(f.pPresentlyAt)}.

Do hereby nominate, constitute and appoint: 
Mr/Mrs ${getVal(f.aName)} ${getVal(f.aRelation)} ${getVal(f.aRelativeName)}, AGED ${getVal(f.aAge)} YEARS, OCCUPATION: ${getVal(f.aOcc)}, R/O H.NO. ${getVal(f.aAddress)}, AADHAR NO. ${getVal(f.aAadhar)}.
                                 
As my true and lawful attorney on my name and on my behalf to do the following acts. Contd..2

-2-
WHEREAS the Executant i.e., the Principal is the absolute Owner of the House Bearing No.${getVal(f.houseNo)}, Consisting of ${getVal(f.consistingOf)}, in all admeasuring an area of ${getVal(f.areaSqYds)} Sq.Yards., or equivalent to ${getVal(f.areaSqMtrs)} Sq.Meters., With R.C.C.Roof area ${getVal(f.roofSft)} Sft., Situated at ${getVal(f.situation)}. Vide Regd. Sale Deed Doct.No. ${getVal(f.saleDeedNo)}/${getVal(f.regYear)}, Regd. at S.R.O. ${getVal(f.sroOffice)}.
	 
Whereas I am staying presently at ${getVal(f.pPresentlyAt)} and unable to come to Registration of transactions to the Registrar’s Office Bhongir. As such I have appointed the above said attorney to act in my name and on my behalf to admit execution of Sale Deed which is executed by me or to be executed by Mr/Mrs ${getVal(f.tpName)} ${getVal(f.tpRelation)} ${getVal(f.tpRelativeName)}, AGED ${getVal(f.tpAge)} YEARS, OCCUPATION: ${getVal(f.tpOcc)}, R/O H.NO. ${getVal(f.tpAddress)}, AADHAR NO. ${getVal(f.tpAadhar)} and to present the same for registration before the registering authority and to admit execution of the same on my behalf. Contd..3

-3-
In Witness Whereof I have signed this Power of Attorney on this the ${getVal(f.day)} day of ${getVal(f.month)}, ${getVal(f.year)} in the presence of following witnesses:

WITNESSES:
1.
2.
EXECUTANT`;
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    const textToRead = generateContent(data, lang);
    const utterance = new SpeechSynthesisUtterance(textToRead);
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.rate = 0.9;
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  if (!data) return <div style={{textAlign:'center', padding:'100px'}}>Loading...</div>;

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundImage: "url('/legal-bg.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed', 
      padding: '20px' 
    }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', padding: '40px', borderRadius: '24px', width: '95%', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← Edit Details</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1' }}>
              {isSpeaking ? '🛑 Stop' : '🔊 Listen Draft'}
            </button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#10b981' }}>🖨️ Print PDF</button>
          </div>
        </div>

        <div style={docSheet}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '17px', lineHeight: '2.3', color: '#1e293b', fontFamily: 'serif' }}>
            {generateContent(data, lang)}
          </div>
          
          <div style={{ marginTop: '60px', textAlign: 'right', paddingRight: '50px' }}>
              <div style={{ display: 'inline-block', textAlign: 'center' }}>
                <div style={{ borderBottom: '1.5px solid black', width: '250px', marginBottom: '10px' }}></div>
                <p><strong>EXECUTANT SIGNATURE</strong></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const docSheet = { backgroundColor: 'white', padding: '60px', border: '1px solid #e2e8f0', borderRadius: '8px' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const, color: 'white', backgroundColor: '#1e293b' };
const sigLine = { borderBottom: '1.5px solid black', width: '200px', marginBottom: '10px' };