"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, Square } from 'lucide-react';

export default function AgreementPlotDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('agreementPlotDraftData');
    if (saved) {
      setData(JSON.parse(saved));
    }
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const getVal = (val: any) => (val ? val : "________________");

  const generateUnabridgedContent = (f: any, activeLang: string) => {
    if (!f) return "";

    if (activeLang === 'te') {
      return `విక్రయ ఒప్పందం (AGREEMENT OF SALE)
ఈ విక్రయ ఒప్పందం ఈ ${getVal(f.day)} తేదీ ${getVal(f.month)}, ${getVal(f.year)} నాడు క్రింది పక్షుల మధ్య చేయబడినది:

శ్రీ/శ్రీమతి ${getVal(f.vName)} ${getVal(f.vRelation)} ${getVal(f.vRelName)}, వయస్సు ${getVal(f.vAge)} సంవత్సరాలు, నివాసం ${getVal(f.vAddress)}, ఆధార్ నం.${getVal(f.vAadhar)}. (ఇకపై “విక్రేత” అని పిలువబడును) మొదటి పక్షం.

మరియు

శ్రీ/శ్రీమతి ${getVal(f.veName)} ${getVal(f.veRelation)} ${getVal(f.veRelName)}, వయస్సు ${getVal(f.veAge)} సంవత్సరాలు, నివాసం ${getVal(f.veAddress)}, ఆధార్ నం.${getVal(f.veAadhar)}. (ఇకపై “కొనుగోలుదారు (VENDEE)” అని పిలువబడును) రెండవ పక్షం.

కొనసాగింపు… 2

-2-
విక్రేత ఓపెన్ ప్లాట్ నం.${getVal(f.plotNo)}, సర్వే నం.${getVal(f.syNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు లేదా ${getVal(f.areaSqMtrs)} చదరపు మీటర్లు, ${getVal(f.situation)} వద్ద ఉన్న ఆస్తికి పూర్తి యజమాని. ఇది రిజిస్టర్ చేసిన సేల్ డీడ్ డాక్యుమెంట్ నం.${getVal(f.saleDeedNo)} ద్వారా S.R.O.${getVal(f.sroOffice)} లో నమోదు చేయబడినది.

విక్రేత పై ఆస్తిని మొత్తం రూ. ${getVal(f.totalConsideration)}/- (రూ. ${getVal(f.considerationWords)} మాత్రమే) కు, మొత్తం విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు @ రూ.${getVal(f.pricePerYard)}/- ప్రతి గజానికి, విక్రయించడానికి అంగీకరించెను.

ఈ విక్రయ ఒప్పందం క్రింది విధంగా సాక్ష్యమిస్తుంది:
కొనుగోలుదారు రూ.${getVal(f.paidAmount)}/- (రూ. ${getVal(f.paidAmountWords)} మాత్రమే) తేదీ ${getVal(f.paidDate)} న చెల్లించెను. విక్రేత ఈ మొత్తాన్ని స్వీకరించినట్లు అంగీకరించుచున్నాడు. మిగిలిన రూ.${getVal(f.balanceAmount)}/- (రూ. ${getVal(f.balanceAmountWords)} మాత్రమే) ${getVal(f.balanceTimeLimit)} లోపు చెల్లించి, భౌతిక కొలతల ప్రకారం రిజిస్ట్రేషన్ జరుపబడును.

షరతులు:
1. రిజిస్ట్రేషన్ సమయమున విక్రేత అన్ని పూర్వపు పత్రాలు కొనుగోలుదారునికి అప్పగించాలి.
2. విక్రేత ఖాళీ మరియు ప్రశాంత స్వాధీనం రిజిస్ట్రేషన్ సమయంలో అప్పగించాలి.
3. అన్ని పన్నులు, బ్యాంకు రుణాలు మొదలైనవి రిజిస్ట్రేషన్‌కు ముందే విక్రేత చెల్లించాలి.

కొనసాగింపు… 3

-3-
4. మ్యూటేషన్ మరియు బదిలీ కోసం అవసరమైన అన్ని పత్రాలపై విక్రేత సంతకం చేయాలి.
5. ఆస్తి ఎటువంటి బంధకం లేకుండా ఉండాలి.
6. యాజమాన్య లోపం వలన నష్టం కలిగితే విక్రేత పరిహారం చెల్లించాలి.
7. సేల్ డీడ్ కొనుగోలుదారు లేదా అతని నామినీ పేరున రిజిస్టర్ చేయబడును.

షెడ్యూల్ ఆఫ్ ప్రాపర్టీ: ఓపెన్ ప్లాట్ నం.${getVal(f.plotNo)}, సర్వే నం.${getVal(f.syNo)}, విస్తీర్ణం ${getVal(f.areaSqYds)} చదరపు గజాలు, ${getVal(f.situation)} వద్ద ఉన్నది.
హద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}.

రసీదు: నేను ${getVal(f.vName)} రూ.${getVal(f.paidAmount)}/- ముందస్తు మొత్తంగా ${getVal(f.veName)} నుండి స్వీకరించాను.`;
    }

    if (activeLang === 'hi') {
      return `विक्रय अनुबंध (AGREEMENT OF SALE)
यह विक्रय अनुबंध आज दिनांक ${getVal(f.day)} ${getVal(f.month)}, ${getVal(f.year)} को निम्नलिखित पक्षों के बीच बनाया एवं निष्पादित किया गया:

श्री/श्रीमती ${getVal(f.vName)} ${getVal(f.vRelation)} ${getVal(f.vRelName)}, आयु ${getVal(f.vAge)} वर्ष, व्यवसाय: ${getVal(f.vOcc)}, निवासी ${getVal(f.vAddress)}, आधार संख्या ${getVal(f.vAadhar)}। (जिसे आगे “विक्रेता” कहा जाएगा) प्रथम पक्ष।

और

श्री/श्रीमती ${getVal(f.veName)} ${getVal(f.veRelation)} ${getVal(f.veRelName)}, आयु ${getVal(f.veAge)} वर्ष, व्यवसाय: ${getVal(f.veOcc)}, निवासी ${getVal(f.veAddress)}, आधार संख्या ${getVal(f.veAadhar)}। (जिसे आगे “क्रेता” कहा जाएगा) द्वितीय पक्ष।

क्रमशः… 2

-2-
जहां विक्रेता खुला प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे नंबर ${getVal(f.syNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज अथवा ${getVal(f.areaSqMtrs)} वर्ग मीटर, स्थित ${getVal(f.situation)}, का पूर्ण स्वामी है, जो कि पंजीकृत विक्रय विलेख दस्तावेज संख्या ${getVal(f.saleDeedNo)} के रूप में उप-पंजीयक कार्यालय ${getVal(f.sroOffice)} में पंजीकृत है।

विक्रेता ने उक्त संपत्ति को कुल विक्रय मूल्य रु. ${getVal(f.totalConsideration)}/- (रुपये ${getVal(f.considerationWords)} मात्र) में बेचने का प्रस्ताव दिया है, कुल क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, दर रु.${getVal(f.pricePerYard)}/- प्रति वर्ग गज।

अब यह विक्रय अनुबंध निम्न प्रकार साक्ष्य देता है:
क्रेता ने कुल राशि रु.${getVal(f.paidAmount)}/- (रुपये ${getVal(f.paidAmountWords)} मात्र) दिनांक ${getVal(f.paidDate)} को अदा की है, जिसकी प्राप्ति विक्रेता स्वीकार करता है। शेष राशि रु.${getVal(f.balanceAmount)}/- (रुपये ${getVal(f.balanceAmountWords)} मात्र) (${getVal(f.balanceTimeLimit)}) के भीतर अदा की जाएगी।

शर्तें:
1. विक्रेता पंजीकरण के समय सभी पूर्व दस्तावेज मूल रूप में क्रेता को सौंपेगा।
2. विक्रेता पंजीकरण के समय संपत्ति का शांतिपूर्ण एवं वास्तविक कब्जा क्रेता को सौंपेगा।
3. विक्रेता संपत्ति से संबंधित सभी कर, बैंक ऋण आदि पंजीकरण से पूर्व चुका देगा।

क्रमशः… 3

-3-
4. विक्रेता संपत्ति के नामांतरण एवं हस्तांतरण हेतु आवश्यक सभी दस्तावेजों पर हस्ताक्षर करेगा।
5. विक्रेता आश्वासन देता है कि संपत्ति किसी अन्य को बेची या गिरवी नहीं रखी गई है।
6. यदि स्वामित्व या कब्जे में कोई दोष पाया जाता है तो विक्रेता क्रेता की भरपाई करेगा।
7. विक्रेता सहमत है कि विक्रय विलेख क्रेता या उसके नामित व्यक्ति के पक्ष में निष्पादित किया जाएगा।

संपत्ति की अनुसूची: खुला प्लॉट संख्या ${getVal(f.plotNo)}, सर्वे नंबर ${getVal(f.syNo)}, क्षेत्रफल ${getVal(f.areaSqYds)} वर्ग गज, स्थित ${getVal(f.situation)}।
सीमाएं: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}।

रसीद: मैं ${getVal(f.vName)} यह स्वीकार करता हूँ कि मुझे रु.${getVal(f.paidAmount)}/- अग्रिम राशि ${getVal(f.veName)} से प्राप्त हुई।`;
    }

    return `AGREEMENT OF SALE
This Agreement of Sale is made and Executed on this the ${getVal(f.day)} day of ${getVal(f.month)}, ${getVal(f.year)}, By and Between:- 

Mr/Mrs ${getVal(f.vName)} ${getVal(f.vRelation)} ${getVal(f.vRelName)}, AGED ${getVal(f.vAge)} YEARS, OCCUPATION: ${getVal(f.vOcc)}, R/O ${getVal(f.vAddress)}. AADHAR NO.${getVal(f.vAadhar)}. (Hereinafter called as “VENDOR”) of the One Part.

A N D

Mr/Mrs ${getVal(f.veName)} ${getVal(f.veRelation)} ${getVal(f.veRelName)}, AGED ${getVal(f.veAge)} YEARS, OCCUPATION: ${getVal(f.veOcc)}, R/O ${getVal(f.veAddress)}. AADHAR NO.${getVal(f.veAadhar)}. (Hereinafter called as “VENDEE”) of the Other Part.

Contd..2

-2-
WHEREAS the VENDOR is the absolute Owner of the Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.syNo)}, admeasuring an area of ${getVal(f.areaSqYds)} Sq.Yards or equivalent to ${getVal(f.areaSqMtrs)} Sq.meters, Situated at ${getVal(f.situation)}. Vide Regd. Sale deed Doct.No.${getVal(f.saleDeedNo)} at S.R.O. ${getVal(f.sroOffice)} and since then the Vendor is in the possession and absolute enjoyment thereof.

And Whereas the VENDOR has offered to sell to the VENDEE for total sale consideration of Rs. ${getVal(f.totalConsideration)}/- (Rs. ${getVal(f.considerationWords)} ONLY) an area of ${getVal(f.areaSqYds)} Sq.Yards., @ Rs.${getVal(f.pricePerYard)}/- Per Yard.,

NOW THIS AGREEMENT OF SALE WITNESSETH AS UNDER:

That in pursuance of the said agreement the VENDEE has paid the Total amount of Rs.${getVal(f.paidAmount)}/- (Rs. ${getVal(f.paidAmountWords)} ONLY) On:${getVal(f.paidDate)}. and the receipt of which the VENDOR hereby accept and agree to register the schedule property to the VENDEE or his Nominees.

And the Balance amount of Rs.${getVal(f.balanceAmount)}/- (Rs. ${getVal(f.balanceAmountWords)} ONLY) will be paid Within ${getVal(f.balanceTimeLimit)} and gets registration as per physical measurement of the property.

1. That the VENDOR agreed to hand over all previous documents in original to the VENDEE.
2. That the VENDOR agreed to hand over the vacant, peaceful and physical possession at time of registration.
3. That the VENDOR agree to pay all the taxes, Bank loans etc., cleared before registration.

Contd..3

-3-
4. That the VENDOR agree to sign and execute all documents necessary for effective mutation.
5. That the VENDOR assure that the property is free from all kinds of encumbrances.
6. That the VENDOR shall indemnify the VENDEE against any title defect.
7. That the VENDOR agree that the sale deed be executed in favour VENDEE or as per his choice.

SCHEDULE OF THE PROPERTY:
All that the Open Plot bearing No.${getVal(f.plotNo)}, in Sy.No.${getVal(f.syNo)}, admeasuring ${getVal(f.areaSqYds)} Sq.Yards, Situated at ${getVal(f.situation)}.
BOUNDARIES: NORTH: ${getVal(f.north)}, SOUTH: ${getVal(f.south)}, EAST: ${getVal(f.east)}, WEST: ${getVal(f.west)}.

IN WITNESS WHERE OF the VENDOR AND THE VENDEE have set their hands in the presence of witnesses.

(SIG.OF THE VENDOR)                                 (SIG OF THE VENDEE)

RECEIPT: I, Mr/Mrs ${getVal(f.vName)}, Received an amount of Rs.${getVal(f.paidAmount)}/- (Rupees ${getVal(f.paidAmountWords)} Only), advance amount from Mr/Mrs ${getVal(f.veName)} on this the ${getVal(f.day)} day of ${getVal(f.month)}, ${getVal(f.year)}.`;
  };

  const handleToggleSpeech = () => {
    const synth = window.speechSynthesis;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(generateUnabridgedContent(data, lang));
    const voiceMap: { [key: string]: string } = { te: 'te-IN', hi: 'hi-IN', en: 'en-IN' };
    utterance.lang = voiceMap[lang] || 'en-IN';
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    synth.speak(utterance);
  };

  if (!data) return <div style={{textAlign:'center', padding:'100px'}}>Loading...</div>;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: "url('/legal-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '20px' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', padding: '40px', borderRadius: '24px', width: '95%', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
        
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button onClick={() => router.back()} style={btnStyle}>← Edit Details</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleToggleSpeech} style={{ ...btnStyle, backgroundColor: isSpeaking ? '#ef4444' : '#6366f1', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
               {isSpeaking ? <Square size={16}/> : <Volume2 size={16}/>} {isSpeaking ? 'Stop' : 'Listen Draft'}
            </button>
            <button onClick={() => window.print()} style={{ ...btnStyle, backgroundColor: '#10b981', color: 'white' }}>🖨️ Print PDF</button>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '60px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
          <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontSize: '16px', lineHeight: '2.2', color: '#1e293b', fontFamily: 'serif' }}>
            {generateUnabridgedContent(data, lang)}
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle = { padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const, backgroundColor: '#cbd5e1' };