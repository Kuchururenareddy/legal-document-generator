"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { speakText } from '../utils/translator';

export default function HouseSaleDeedDraft() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [data, setData] = useState<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('houseDeedData');
    if (saved) setData(JSON.parse(saved));
    
    // Cleanup speech if user leaves the page
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const getVal = (val: any) => (val ? val : "________________");

  const generateContent = (f: any, activeLang: string) => {
    if (!f) return "";

    if (activeLang === 'te') {
      return `విక్రయ పత్రం (SALE DEED)
ఈ విక్రయ పత్రం ఈ ${getVal(f.execDay)} తేదీ ${getVal(f.execMonth)}, ${getVal(f.execYear)} నాడు క్రింద పేర్కొన్న వారిచే చేయబడినది:
శ్రీ/శ్రీమతి ${getVal(f.vName)} ${getVal(f.vRelation)} ${getVal(f.vRelationName)}, వయస్సు ${getVal(f.vAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.vOcc)}, నివాసం: ఇంటి నం. ${getVal(f.vAddress)}, ఆధార్ నం. ${getVal(f.vAadhar)}. (ఇకపై “విక్రేత”గా పేర్కొనబడును) మొదటి పక్షం.

కు అనుకూలంగా
శ్రీ/శ్రీమతి ${getVal(f.pName)} ${getVal(f.pRelation)} ${getVal(f.pRelationName)}, వయస్సు ${getVal(f.pAge)} సంవత్సరాలు, వృత్తి: ${getVal(f.pOcc)}, నివాసం: ఇంటి నం. ${getVal(f.pAddress)}, ఆధార్ నం. ${getVal(f.pAadhar)}. (ఇకపై “క్రేత”గా పేర్కొనబడును) రెండవ పక్షం.

పేజీ – 2
ఇక్కడ ఉపయోగించిన విక్రేత మరియు క్రేత పదాలు సందర్భానుసారంగా వారి వారసులు, చట్టబద్ధ ప్రతినిధులు, నిర్వాహకులు మరియు అసైన్‌లను కూడా సూచిస్తాయి.
ఎందుకంటే, విక్రేత ఇంటి నం. ${getVal(f.hNo)}, అసెస్‌మెంట్ నం. ${getVal(f.assessNo)}, ${getVal(f.consistOf)} కలిగి, విస్తీర్ణం ${getVal(f.sqYards)} చదరపు గజాలు లేదా ${getVal(f.sqMtrs)} చదరపు మీటర్లు, ఆర్.సి.సి./నాన్ ఆర్.సి.సి. పైకప్పు ${getVal(f.roofArea)} చదరపు అడుగులు కలిగిన, ${getVal(f.situatedAt)} వద్ద ఉన్న ఆస్తికి సంపూర్ణ యజమాని. ఈ ఆస్తిని డాక్యుమెంట్ నం. ${getVal(f.docNo)}/${getVal(f.regYear)}, నమోదు చేయబడిన అమ్మకపు పత్రం ద్వారా పొందాడు.
మరియు విక్రేత కుటుంబ అవసరాల నిమిత్తం ఈ ఆస్తిని అన్ని బాద్యతల నుంచి విముక్తంగా ₹${getVal(f.price)}/- కు అమ్మడానికి అంగీకరించాడు మరియు క్రేత కొనుగోలు చేయడానికి అంగీకరించాడు. విక్రేత ₹${getVal(f.price)}/- (${getVal(f.priceWords)} మాత్రమే) క్రేత నుండి స్వీకరించినట్లు అంగీకరిస్తున్నాడు.

పేజీ – 3
కాబట్టి, ఈ విక్రయ పత్రం ప్రకారం విక్రేత ఆస్తిని క్రేతకు సంపూర్ణ హక్కులతో బదిలీ చేస్తున్నాడు. విక్రేత కింది విధంగా అంగీకరిస్తున్నాడు:
1. క్రేత ఎలాంటి అడ్డంకులు లేకుండా ఆస్తిని సంపూర్ణ యజమానిగా వినియోగించుకోవచ్చు.
2. ఆస్తి యొక్క ఖాళీ భౌతిక స్వాధీనం క్రేతకు అందజేయబడింది.
3. ఇప్పటివరకు ఉన్న పన్నులు విక్రేత చెల్లించాడు; భవిష్యత్ పన్నులు క్రేత చెల్లించాలి.
4. ఆస్తి అన్ని రకాల బంధకాలు, కేసులు లేనిది.
5. పూర్వ హక్కు పత్రాలు క్రేతకు అందజేయబడ్డాయి.
6. రికార్డుల మార్పిడికి విక్రేత సహకరిస్తాడు.
7. అవసరమైన అన్ని చట్టబద్ధ చర్యలు చేపడతాడు.
8. హక్కుల లోపాల వల్ల కలిగే నష్టాలకు విక్రేత పరిహారం చెల్లిస్తాడు.
9. ఈ ఆస్తి A.P. Land Reforms Act, 1973 కి వర్తించదు.

ఆస్తి షెడ్యూల్:
ఇంటి నం. ${getVal(f.hNo)}, అసెస్‌మెంట్ నం. ${getVal(f.assessNo)}, విస్తీర్ణం ${getVal(f.sqYards)} గజములు.
హద్దులు: ఉత్తరం: ${getVal(f.north)}, దక్షిణం: ${getVal(f.south)}, తూర్పు: ${getVal(f.east)}, పడమర: ${getVal(f.west)}.

అనుబంధం – IA
ఆస్తి వివరణ:
a) పైకప్పు స్వభావం : ${getVal(f.roofType)}
b) భవనం వయస్సు : ${getVal(f.buildAge)} సంవత్సరాలు
c) వార్షిక మున్సిపల్ పన్ను : ₹${getVal(f.municipalTax)}/-

(విక్రేత సంతకం)        (క్రేత సంతకం)`;
    }

    if (activeLang === 'hi') {
      return `विक्रय विलेख (SALE DEED)
यह विक्रय विलेख आज दिनांक ${getVal(f.execDay)} ${getVal(f.execMonth)}, ${getVal(f.execYear)} को निम्नलिखित के द्वारा निष्पादित किया गया हैः–
श्री/श्रीमती ${getVal(f.vName)} ${getVal(f.vRelation)} ${getVal(f.vRelationName)}, आयु ${getVal(f.vAge)} वर्ष, निवासी मकान नं. ${getVal(f.vAddress)}, आधार नं. ${getVal(f.vAadhar)}। (विक्रेता) प्रथम पक्ष।

के पक्ष में
श्री/श्रीमती ${getVal(f.pName)} ${getVal(f.pRelation)} ${getVal(f.pRelationName)}, आयु ${getVal(f.pAge)} वर्ष, निवासी मकान नं. ${getVal(f.pAddress)}, आधार नं. ${getVal(f.pAadhar)}। (क्रेता) द्वितीय पक्ष।

पृष्ठ – 2
जबकि, विक्रेता मकान संख्या ${getVal(f.hNo)}, आकलन संख्या ${getVal(f.assessNo)}, जिसमें ${getVal(f.consistOf)} शामिल है, क्षेत्रफल ${getVal(f.sqYards)} वर्ग गज, छत क्षेत्र ${getVal(f.roofArea)} वर्ग फुट, स्थित ${getVal(f.situatedAt)} में स्थित संपत्ति का पूर्ण स्वामी है।

और जबकि, विक्रेता ने संपत्ति को सभी भारों से मुक्त ₹${getVal(f.price)}/- की कुल राशि में बेचने की पेशकश की। विक्रेता को क्रेता से ₹${getVal(f.price)}/- (रुपये ${getVal(f.priceWords)} मात्र) प्राप्त हो चुके हैं।

पृष्ठ – 3
विक्रेता निम्नलिखित प्रतिज्ञाएं करता हैः
1. क्रेता संपत्ति पर बिना किसी हस्तक्षेप के पूर्ण स्वामी के रूप में उपभोग करेगा।
2. विक्रेता द्वारा संपत्ति का भौतिक कब्जा क्रेता को सौंप दिया गया है।
3. आज तक के सभी कर विक्रेता द्वारा अदा किए गए हैं।
4. संपत्ति सभी प्रकार के भार और कानूनी अड़चनों से मुक्त है।
5. विक्रेता नामांतरण हेतु सहयोग करेगा।
8. विक्रेता स्वामित्व दोष के लिए क्रेता को क्षतिपूर्ति देगा।
9. यह संपत्ति आंध्र प्रदेश भूमि सुधार अधिनियम, 1973 के अंतर्गत नहीं आती।

संपत्ति की अनुसूची:
मकान संख्या ${getVal(f.hNo)}, आकलन संख्या ${getVal(f.assessNo)}, क्षेत्रफल ${getVal(f.sqYards)} वर्ग गज।
सीमाएं: उत्तर: ${getVal(f.north)}, दक्षिण: ${getVal(f.south)}, पूर्व: ${getVal(f.east)}, पश्चिम: ${getVal(f.west)}।

परिशिष्ट – IA
a) छत का प्रकार : ${getVal(f.roofType)}
b) भवन की आयु : ${getVal(f.buildAge)} वर्ष
c) वार्षिक नगरपालिका कर : ₹${getVal(f.municipalTax)}/-

(विक्रेता के हस्ताक्षर)    (क्रेता के हस्ताक्षर)`;
    }

    return `SALE DEED
THIS SALE DEED is made and executed on this ${getVal(f.execDay)} day of ${getVal(f.execMonth)}, ${getVal(f.execYear)} by:-

Mr/Mrs ${getVal(f.vName)} ${getVal(f.vRelation)} ${getVal(f.vRelationName)}, AGED ${getVal(f.vAge)} YEARS, OCCUPATION: ${getVal(f.vOcc)}, R/O H.NO.${getVal(f.vAddress)}. AADHAR NO.${getVal(f.vAadhar)}. (VENDOR).

IN FAVOUR OF

Mr/Mrs ${getVal(f.pName)} ${getVal(f.pRelation)} ${getVal(f.pRelationName)}, AGED ${getVal(f.pAge)} YEARS, OCCUPATION: ${getVal(f.pOcc)}, R/O H.NO.${getVal(f.pAddress)}. AADHAR NO.${getVal(f.pAadhar)}. (VENDEE).

The terms The Vendor and Vendee herein used shall mean and include their executors, successors, legal representatives, and assignees.

WHEREAS the VENDOR is the absolute Owner of House bearing No.${getVal(f.hNo)}, Assessment No. ${getVal(f.assessNo)}, Consisting of ${getVal(f.consistOf)}, admeasuring an area of ${getVal(f.sqYards)} Sq.Yards, With Roof area of ${getVal(f.roofArea)} Sft., Situated at ${getVal(f.situatedAt)}. Having purchased the same Vide a Registered Sale Deed. Doct.No.${getVal(f.docNo)}/${getVal(f.regYear)}, Registered at S.R.O.${getVal(f.sroOffice)}.

AND WHEREAS the Vendor has offered to sell the property for a total consideration of Rs.${getVal(f.price)}/- and the Purchaser agreed to purchase the same. VENDOR has already received the said consideration of Rs.${getVal(f.price)}/- (Rupees. ${getVal(f.priceWords)} ONLY).

THE VENDOR COVENANTS AS FOLLOWS:
1. The VENDEE shall hold and enjoy the house without any interruption.
2. The VENDOR has already given vacant, physical possession to the VENDEE.
3. The VENDOR has paid all taxes up to date.
4. The Property is free from all encumbrances, charges, and mortgages.
5. The previous title deeds are hereby handed over to the VENDEE.
6. The VENDOR will co-operate for title change in Records.
8. The VENDOR agrees to keep indemnified the VENDEE against all losses.
9. The Property is not attracted by A.P. Plot Reforms Act No.1 of 1973.

SCHEDULE OF THE PROPERTY:
House No.${getVal(f.hNo)}, Assessment No. ${getVal(f.assessNo)}, Situated at ${getVal(f.situatedAt)}.
BOUNDARIES: NORTH: ${getVal(f.north)}, SOUTH: ${getVal(f.south)}, EAST: ${getVal(f.east)}, WEST: ${getVal(f.west)}.

ANNEXURE-IA
a) Nature of Roof: ${getVal(f.roofType)}
b) Age of the Building: ${getVal(f.buildAge)} years
c) Municipal Tax: Rs.${getVal(f.municipalTax)}/-

(SIGNATURE OF VENDOR)    (SIGNATURE OF VENDEE)`;
  };

  const handleToggleSpeech = async () => {
    // Stop Logic
    if (isSpeaking) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Start Logic
    setIsSpeaking(true);
    const textToRead = generateContent(data, lang);

    // FIXED: Mapping specifically for hi-IN
    const voiceMap: { [key: string]: string } = { 
        te: 'te-IN', 
        hi: 'hi-IN', 
        en: 'en-IN' 
    };
    
    const targetLang = voiceMap[lang] || 'en-IN';

    try {
      // Use utility to trigger speech
      await speakText(textToRead, targetLang);

      // Listen for natural end of speech to reset button
      if (window.speechSynthesis) {
        const checkEnd = setInterval(() => {
          if (!window.speechSynthesis.speaking) {
            setIsSpeaking(false);
            clearInterval(checkEnd);
          }
        }, 500);
      }
    } catch (err) {
      console.error(err);
      setIsSpeaking(false);
    }
  };

  if (!data) return <div className="ld-page flex min-h-screen items-center justify-center">Loading document…</div>;

  return (
    <div className="ld-page flex min-h-screen items-center justify-center p-5">
      <div className="ld-panel w-[min(1000px,95%)] p-8">
        <div className="no-print mb-5 flex flex-wrap justify-between gap-3">
          <button type="button" className="ld-btn-secondary" onClick={() => router.back()}>← Back</button>
          <div className="flex gap-2">
            <button type="button" className={isSpeaking ? "ld-btn-danger" : "ld-btn-outline"} onClick={handleToggleSpeech}>
              {isSpeaking ? "Stop" : "Listen"}
            </button>
            <button type="button" className="ld-btn-primary" onClick={() => window.print()}>Print PDF</button>
          </div>
        </div>
        <div className="ld-doc">
          {generateContent(data, lang)}
        </div>
      </div>
    </div>
  );
}