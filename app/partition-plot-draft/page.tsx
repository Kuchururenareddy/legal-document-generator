"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function PartitionPlotDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('partitionPlotData');
    if (saved) {
      setData(JSON.parse(saved));
    }
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const getVal = (val: any) => (val ? val : "________________");

  const generateContent = (f: any, activeLang: string) => {
    if (!f) return "";

    if (activeLang === 'te') {
      return `విభజన పత్రం (PARTITION DEED)
ఈ విభజన పత్రం ఈ రోజు ${getVal(f.execDay)} అక్టోబర్, 2025 న ${getVal(f.execPlace)} వద్ద క్రింది పక్షాల మధ్య చేయబడింది:

శ్రీ/శ్రీమతి ${getVal(f.p1Name)} గారి కుమారుడు/కుమార్తె/భార్య ${getVal(f.p1Father)}, వయస్సు ${getVal(f.p1Age)} సంవత్సరాలు, వృత్తి: ${getVal(f.p1Occ)}, నివాసం ${getVal(f.p1Address)}, ఆధార్ నం. ${getVal(f.p1Aadhar)}। (ఇక్కడినుంచి “మొదటి పక్షం” అని పిలువబడును)
మరియు
శ్రీ/శ్రీమతి ${getVal(f.p2Name)} గారి కుమారుడు/కుమార్తె/భార్య ${getVal(f.p2Father)}, వయస్సు ${getVal(f.p2Age)} సంవత్సరాలు, వృత్తి: ${getVal(f.p2Occ)}, నివాసం ${getVal(f.p2Address)}, ఆధార్ నం. ${getVal(f.p2Aadhar)}। (“రెండవ పక్షం”)
మరియు
శ్రీ/శ్రీమతి ${getVal(f.p3Name)} గారి కుమారుడు/కుమార్తె/భార్య ${getVal(f.p3Father)}, వయస్సు ${getVal(f.p3Age)} సంవత్సరాలు, వృత్తి: ${getVal(f.p3Occ)}, నివాసం ${getVal(f.p3Address)}, ఆధార్ నం. ${getVal(f.p3Aadhar)}। (“మూడవ పక్షం”)

ఈ పత్రంలో “మొదటి పక్షం”, “రెండవ పక్షం” మరియు “మూడవ పక్షం” అనే పదాలు వారి వారసులు మరియు ఉత్తరాధికారులను కూడా సూచిస్తాయి.
పక్షాలు 1, 2 మరియు 3 సంయుక్తంగా ఓపెన్ ప్లాట్ నం. ${getVal(f.plotNo)}, సర్వే నం. ${getVal(f.surveyNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ఉన్నది ${getVal(f.situation)}, డాక్యుమెంట్ నం. ${getVal(f.docNo)}/${getVal(f.docYear)} ద్వారా S.R.O. భువనగిరి వద్ద నమోదు చేసుకొని కొనుగోలు చేశారు మరియు అప్పటి నుండి స్వాధీనంలో ఉన్నారు.
ప్రస్తుతం పక్షాల మధ్య వచ్చిన వివాదాలను పరస్పర ఒప్పందంతో పరిష్కరించి ఆస్తిని మూడు భాగాలుగా విభజించారు.

ఈ విభజన పత్రం క్రింది విధంగా సాక్ష్యమిస్తుంది:
ఆస్తిని మూడు భాగాలుగా కొలిచి సరిహద్దులు నిర్ణయించారు. మొత్తం మార్కెట్ విలువ రూ. ${getVal(f.totalMarketValue)}/- కాగా, మొదటి భాగం రూ. ${getVal(f.share1Value)}/-, రెండవ భాగం రూ. ${getVal(f.share2Value)}/- మరియు మూడవ భాగం రూ. ${getVal(f.share3Value)}/- గా స్టాంప్ డ్యూటీ మరియు రిజిస్ట్రేషన్ కొరకు నిర్ణయించబడింది.
“A” షెడ్యూల్ ఆస్తి మొదటి పక్షానికి, “B” షెడ్యూల్ ఆస్తి రెండవ పక్షానికి కేటాయించబడింది. ఆస్తులు ఇకపై సంబంధిత పక్షాలకు సంపూర్ణ హక్కుతో చెందును. మార్కెట్ విలువ, సౌలభ్యం దృష్ట్యా ఈ విభజన చేయబడింది. ఎవరూ భవిష్యత్తులో ఈ విభజనను ప్రశ్నించరాదు.

షెడ్యూల్స్:
“A” షెడ్యూల్ (మొదటి పక్షం - ${getVal(f.p1Name)}):
ఓపెన్ ప్లాట్ నం. ${getVal(f.plotNo)}, సర్వే నం. ${getVal(f.surveyNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ఉన్నది ${getVal(f.situation)}। హద్దులు: ఉత్తరం: ${getVal(f.aNorth)}, దక్షిణం: ${getVal(f.aSouth)}, తూర్పు: ${getVal(f.aEast)}, పడమర: ${getVal(f.aWest)}. మార్కెట్ విలువ రూ. ${getVal(f.valuePerSqYd)}/- ప్రతి చదరపు గజానికి, మొత్తం విలువ రూ. ${getVal(f.share1Value)}/-.

“B” షెడ్యూల్ (రెండవ పక్షం – ${getVal(f.p2Name)}):
ఓపెన్ ప్లాట్ నం. ${getVal(f.plotNo)}, సర్వే నం. ${getVal(f.surveyNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ఉన్నది ${getVal(f.situation)}। హద్దులు: ఉత్తరం: ${getVal(f.bNorth)}, దక్షిణం: ${getVal(f.bSouth)}, తూర్పు: ${getVal(f.bEast)}, పడమర: ${getVal(f.bWest)}. మొత్తం విలువ రూ. ${getVal(f.share2Value)}/-.

“C” షెడ్యూల్ (మూడవ పక్షం – ${getVal(f.p3Name)}):
ఓపెన్ ప్లాట్ నం. ${getVal(f.plotNo)}, సర్వే నం. ${getVal(f.surveyNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ఉన్నది ${getVal(f.situation)}। హద్దులు: ఉత్తరం: ${getVal(f.cNorth)}, దక్షిణం: ${getVal(f.cSouth)}, తూర్పు: ${getVal(f.cEast)}, పడమర: ${getVal(f.cWest)}. మొత్తం విలువ రూ. ${getVal(f.share3Value)}/-.

ఈ ప్లాట్ అసైన్ భూమి కాదు మరియు ఎటువంటి ప్రభుత్వ బంధకం లేదు. సాక్షుల సమక్షంలో పక్షాలు ఈ విభజన పత్రాన్ని చదివి, అర్థం చేసుకొని సంతకాలు చేశారు.`;
    }

    if (activeLang === 'hi') {
      return `विभाजन विलेख (PARTITION DEED)
यह विभाजन विलेख आज दिनांक ${getVal(f.execDay)} अक्टूबर, 2025 को ${getVal(f.execPlace)} स्थान पर निम्नलिखित पक्षों के बीच बनाया और निष्पादित किया गया:
1. श्री/श्रीमती ${getVal(f.p1Name)} पुत्र/पुत्री/पत्नी ${getVal(f.p1Father)}, आयु ${getVal(f.p1Age)} वर्ष, व्यवसाय: ${getVal(f.p1Occ)}, निवासी ${getVal(f.p1Address)}, आधार संख्या ${getVal(f.p1Aadhar)}। (प्रथम पक्ष)
2. श्री/श्रीमती ${getVal(f.p2Name)} पुत्र/पुत्री/पत्नी ${getVal(f.p2Father)}, आयु ${getVal(f.p2Age)} वर्ष, व्यवसाय: ${getVal(f.p2Occ)}, निवासी ${getVal(f.p2Address)}, आधार संख्या ${getVal(f.p2Aadhar)}। (द्वितीय पक्ष)
3. श्री/श्रीमती ${getVal(f.p3Name)} पुत्र/पुत्री/पत्नी ${getVal(f.p3Father)}, आयु ${getVal(f.p3Age)} वर्ष, व्यवसाय: ${getVal(f.p3Occ)}, निवासी ${getVal(f.p3Address)}, आधार संख्या ${getVal(f.p3Aadhar)}। (तृतीय पक्ष)

जहां, उपरोक्त पक्षों ने संयुक्त रूप से खुला प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.surveyNo)}, कुल क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज अथवा ${getVal(f.areaSqMtrs)} वर्ग मीटर, स्थित ${getVal(f.situation)}, पंजीकृत विक्रय विलेख दस्तावेज संख्या ${getVal(f.docNo)}/${getVal(f.docYear)} के माध्यम से भोंगिर (Bhongir) में पंजीकृत कर क्रय किया था। अब पक्षों ने आपसी सहमति से संपत्ति को तीन भागों (A, B एवं C) में विभाजित कर आवंटित किया है।

अब यह विलेख निम्नलिखित साक्ष्य देता है:
संपत्ति को तीन भागों में विभाजित कर माप लेकर सीमाएं निर्धारित की गई हैं। इस विलेख में वर्णित संपत्तियों का वर्तमान बाजार मूल्य रु. ${getVal(f.totalMarketValue)}/- है। अनुसूची A एवं B की संपत्तियां क्रमशः प्रथम पक्ष एवं द्वितीय पक्ष को आवंटित की गई हैं। प्रत्येक भाग का मूल्य बाजार मूल्य और सुविधा को ध्यान में रखते हुए निर्धारित किया गया है।

अनुसूचियां (SCHEDULES):
“A” अनुसूची (प्रथम पक्ष): प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.surveyNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.situation)}। सीमाएं: उत्तर: ${getVal(f.aNorth)}, दक्षिण: ${getVal(f.aSouth)}, पूर्व: ${getVal(f.aEast)}, पश्चिम: ${getVal(f.aWest)}।
“B” अनुसूची (द्वितीय पक्ष): प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.surveyNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज। सीमाएं: उत्तर: ${getVal(f.bNorth)}, दक्षिण: ${getVal(f.bSouth)}, पूर्व: ${getVal(f.bEast)}, पश्चिम: ${getVal(f.bWest)}।
“C” अनुसूची (तृतीय पक्ष): प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे संख्या ${getVal(f.surveyNo)}। सीमाएं: उत्तर: ${getVal(f.cNorth)}, दक्षिण: ${getVal(f.cSouth)}, पूर्व: ${getVal(f.cEast)}, पश्चिम: ${getVal(f.cWest)}।

उक्त प्लॉट असाइन भूमि नहीं है। पक्षों ने इसे समझकर हस्ताक्षर किए हैं।`;
    }

    return `PARTITION DEED
THIS DEED OF PARTITION is made and executed on this the ${getVal(f.execDay)} day of OCTOBER, 2025 at ${getVal(f.execPlace)} by and between:

Mr/Mrs ${getVal(f.p1Name)} S/O or D/O or W/O ${getVal(f.p1Father)}, AGED ${getVal(f.p1Age)} YEARS, OCCUPATION: ${getVal(f.p1Occ)}, R/O ${getVal(f.p1Address)}. AADHAR NO.${getVal(f.p1Aadhar)}. (hereinafter called as the “FIRST PARTY”) of the First Part.

AND

Mr/Mrs ${getVal(f.p2Name)} S/O or D/O or W/O ${getVal(f.p2Father)}, AGED ${getVal(f.p2Age)} YEARS, OCCUPATION: ${getVal(f.p2Occ)}, R/O ${getVal(f.p2Address)}. AADHAR NO.${getVal(f.p2Aadhar)}. {Hereinafter called the “SECOND PARTY”} of the Second Part.

AND

Mr/Mrs ${getVal(f.p3Name)} S/O or D/O or W/O ${getVal(f.p3Father)}, AGED ${getVal(f.p3Age)} YEARS, OCCUPATION: ${getVal(f.p3Occ)}, R/O ${getVal(f.p3Address)}. AADHAR NO.${getVal(f.p3Aadhar)}. {Hereinafter called the “THIRD PARTY”} of the Third Part.

The terms “FIRST PARTY” “SECOND PARTY” and “THIRD PARTY” unless the context otherwise provide shall mean and include their heirs and successors.

AND WHEREAS the said Parties No.1, 2 and 3 had jointly purchased Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.surveyNo)}, admeasuring an extent of ${getVal(f.areaSqYds)} Sq.yards., or equivalent to ${getVal(f.areaSqMtrs)} Sq.Mtrs., Situated at ${getVal(f.situation)}, Vide a Registered Sale Deed Doct.No.${getVal(f.docNo)}/${getVal(f.docYear)}, registered at S.R.O. Bhongir and since then the Parties are in the possession and absolute enjoyment thereof.

Whereas above said First party and Second Party are the Undivided Share Holders. And whereas the above said Parties now partitioned the said Plot mentioned in Schedule A, B and C hereunder. That the Schedule A, B and C Properties Situated at ${getVal(f.situation)}.

And whereas differences and disputes have arisen between above said Parties and the Parties to this deed have mutually settled their disputes and differences and agreed to partition their jointly property into the schedule mentioned A, B and C Properties in Three shares and allotted them to the respective parties on the following terms and conditions.

NOW THIS DEED WITNESSETH AS FOLLOWS: 
That in pursuance of the said agreement and the above said parties have made schedule mentioned properties into Three shares and measured them and fixed the boundaries as per the measurements and shares.

That the Present Market Value of the Properties mentioned in this deed are of the value of Rs.${getVal(f.totalMarketValue)}/- and the each separated 1st share of Rs.${getVal(f.share1Value)}/- and 2nd share of Rs.${getVal(f.share2Value)}/-, value of the separated share is Rs.${getVal(f.share3Value)}/- for the purpose of Stamp duty and Registration.

That the Schedule mentioned A and B Properties are allotted to the First Party shown in Red Color and Second Party shown in Red Color in the sketch map respectively. That the Properties shall heretofore belong absolutely to the respective parties. That the Value of the each share shown in the Schedule A and B are in view of their Market value, fertility and convenience.

Hence none of the parties are at liberty to question the partition and also shall not ask for the reopening of the partition at any time. That the FIRST PARTY and SECOND PARTY mutually agreed that they shall cause and execute all such acts and deeds necessary for getting perfect right, title over their respective shares in case of any claimer litigation from Third parties.

That the FIRST PARTY and SECOND PARTY have taken possession of their respective schedule mentioned properties i.e. A Schedule Property by: Sri ${getVal(f.p1Name)}, and B Schedule Property by: ${getVal(f.p2Name)}.

SCHEDULES:
“A” schedule Property belongs to FIRST PARTY (${getVal(f.p1Name)}):
All that the Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.surveyNo)}, admeasuring an extent of ${getVal(f.areaSqYds)} Sq.yards., or equivalent to ${getVal(f.areaSqMtrs)} Sq.Mtrs., Situated at ${getVal(f.situation)}. BOUNDARIES: NORTH: ${getVal(f.aNorth)}, SOUTH: ${getVal(f.aSouth)}, EAST: ${getVal(f.aEast)}, WEST: ${getVal(f.aWest)}. (which is shown in Red Color). Market Value is Rs.${getVal(f.valuePerSqYd)}/- per Sq.yard.

“B” schedule Property belongs to SECOND PARTY (${getVal(f.p2Name)}):
All that the Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.surveyNo)}, admeasuring an extent of ${getVal(f.areaSqYds)} Sq.yards., Situated at ${getVal(f.situation)}. BOUNDARIES: NORTH: ${getVal(f.bNorth)}, SOUTH: ${getVal(f.bSouth)}, EAST: ${getVal(f.bEast)}, WEST: ${getVal(f.bWest)}.

“C” schedule Property belongs to THIRD PARTY (${getVal(f.p3Name)}):
All that the Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.surveyNo)}, admeasuring an extent of ${getVal(f.areaSqYds)} Sq.yards., Situated at ${getVal(f.situation)}. BOUNDARIES: NORTH: ${getVal(f.cNorth)}, SOUTH: ${getVal(f.cSouth)}, EAST: ${getVal(f.cEast)}, WEST: ${getVal(f.cWest)}.

The Plot mentioned in the document is not assigned lands. The Property does not belongs to Mortgage to Govt. or Govt. Under taking/ agencies.

IN WITNESS WHEREOF the parties 1, 2 and 3 of this PARTITION DEED after having understood the contents of this Partition deed on being read over and explained to them in Telugu and Understood them well and signed this deed.`;
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return; }
    setIsSpeaking(true);
    const textToRead = generateContent(data, lang);
    const utterance = new SpeechSynthesisUtterance(textToRead);
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  if (!data) return <div style={{textAlign:'center', padding:'100px'}}>Loading...</div>;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '20px' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', padding: '40px', borderRadius: '24px', width: '95%', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← Edit Details</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1', color: 'white' }}>{isSpeaking ? '🛑 Stop' : '🔊 Listen Draft'}</button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#10b981', color: 'white' }}>🖨️ Print PDF</button>
          </div>
        </div>

        <div style={docSheet}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '15px', lineHeight: '2.2', color: '#1e293b', fontFamily: 'serif' }}>
            {generateContent(data, lang)}
          </div>
          <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between' }}>
             <div><div style={sigLine}></div><p><strong>PARTY 1</strong></p></div>
             <div><div style={sigLine}></div><p><strong>PARTY 2</strong></p></div>
             <div><div style={sigLine}></div><p><strong>PARTY 3</strong></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const docSheet = { backgroundColor: 'white', padding: '60px', border: '1px solid #e2e8f0', borderRadius: '8px' };
const btnStyle = { padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const, backgroundColor: '#f1f5f9' };
const sigLine = { borderBottom: '1.5px solid black', width: '150px', marginBottom: '10px' };