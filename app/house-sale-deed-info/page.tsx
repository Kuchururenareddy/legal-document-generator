"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function HouseSaleDeedInfo() {
  const router = useRouter();
  const { t, lang } = useLanguage();
  const [content, setContent] = useState("");

  // 1. COMPLETE UNABRIDGED CONTENT FOR ALL LANGUAGES
  const templates: { [key: string]: string } = {
    en: `SALE DEED
    THIS SALE DEED is made and executed on this ___ day of _______, _______ by:-

    Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________.

    (Hereinafter called the “VENDOR”) of the first part.

    IN FAVOUR OF

    Mr/Mrs ______________________ S/O or D/O or W/O _______________________, AGED ___ YEARS, OCCUPATION: ________________, R/O H.NO.__________________________. AADHAR NO.__________________.

    (Hereinafter called the “VENDEE”) of the Second part.

    Contd..2

    The terms The Vendor and Vendee herein used shall wherever the context so admits mean and include their executors, successors, legal representatives, administrators and assignees etc., as the parties themselves.

    WHEREAS the VENDOR is the absolute Owner of the absolute Owner of House bearing No._____________, Assessment No. ______________, Consisting of ________________________________________, admeasuring an area of _______ Sq.Yards, or equivalent to ____________ Sq.Mtrs., With R.C.C/Non R.C.C.Roof area  of ______ Sft., Situated at _______________________________________, and more fully described schedule hereto. Having purchased the same Vide a Registered Sale Deed.Doct.No.______/______, Registered at S.R.O.Bhongir and since then the VENDOR is in the Possession and absolute enjoyment thereof. The Property stands in municipal records on the name of VENDOR.

    AND WHEREAS the Vendor has offered to sell the above said Schedule mentioned property, free from all encumbrances, for a total consideration of Rs.__________/- for his/her family necessities and Private affairs and the Purchaser agreed to purchase the same for the said consideration 

    WHEREAS the VENDOR has already received from the said VENDEE the said consideration of Rs.___________/- (Rupees. ___________________________________________ ONLY) the receipt of which the Vendor hereby admits and acknowledges the same.

    NOW THEREFORE this DEED OF SALE witnesses that in pursuance of the said agreement, and in consideration of the sum of Rs.____________/- already received by the Vendor from the VENDEE the said VENDOR as absolute owner of the said property described in the schedule hereto does hereby sell transfer, convey and assign free from encumbrances all the said property to hold the same to the said VENDEE as absolute owner together with appurtenances belonging hereto and all the estate, right, title, interest and claim whatsoever of the VENDOR in or to the said property hereby conveyed. The VENDEE shall hold and enjoy the same as absolute owner.

    THE VENDOR hereby covenants with the VENDEE as follows:

    1.  The said house shall be entered into and upon by the VENDEE who shall hold and enjoy the same as absolute owner without any interruption from the VENDOR or his/her legal heirs and any persons claiming through the VENDOR.

    2.  The VENDOR has already given vacant, physical possession of the said house to the VENDEE.

    3.  The VENDOR has paid all taxes etc., payable on the said property up to date and the VENDEE will have to pay such taxes etc., payable hereafter.                    
    4.  The Property is free from all encumbrances, charges, mortgages, prior agreements of sale or lease hold or court attachments and it is not subject to any other litigation.

    5.  The previous title deeds relating to the said property hereby handed over to the VENDEE.

    6.  The VENDOR hereby agrees to co-operate with the VENDEE to get the title of the said property changed in the name of the VENDEE in Revenue/Grampanchayath/Municipal Records.

    7.  The VENDOR does hereby further agree with the VENDEE at all times hereafter at the cost of the VENDEE to do and execute all such lawful acts deeds and things for further and more perfectly assuring the  said property to the VENDEE according to the true intent and meaning of this Deed.

    8.  The VENDOR does hereby agrees to keep indemnified the VENDEE from and against all losses, costs, damages and expenses which the  VENDEE may sustain by reason of anybody claiming to the said property or due to any defect in title of VENDOR.

    9.  The VENDOR further declares that the schedule Property is not attracted by the provisions of A.P.Plot Reforms (Ceiling on Agricultural Holdings) Act.No.1 of 1973.

    SCHEDULE OF THE PROPERTY

    All That The House bearing No._____________, Assessment No. ______________, Consisting of ________________________________________, admeasuring an area of _______ Sq.Yards, or equivalent to ____________ Sq.Mtrs., With R.C.C/Non R.C.C.Roof area of ______ Sft., Situated at _______________________________________. (And Plan Enclosed Herewith).

    BOUNDRIES AS FOLLOWS:

    NORTH   :  

    SOUTH   :  

    EAST      :  

    WEST     :  


    ANNEXURE-IA

    Description of the property: House bearing No._________________, Assessment No. ______________, Situated at ________________________________________.      
 
    a) Nature of Roof                       : R.C.C/Non Roof
    b) Type of Structure                  : Pillars/Walls only.
    c) Age of the Building               : (____ years) 
    d) Municipal Tax per Annum  :  Rs.____/-

    The Market Value of the property Under Rule (3) Main Statement 

    Sq.Yards/Sft  M.V.per Sq.yard/per Sft., 

    I do hereby declare that above sated is true to the best of my knowledge and belief.  

    IN WITNESS WHEREOF THE VENDOR and THE VENDEE hereunder unto has/have set his/her/their hand/s to this DEED OF SALE with free will and sound mind and after above contents having been the read over and explained in her language on the day, month and the year first above mentioned in the presence of the following witnesses:

    WITNESSES: 

    1.


    2.
                                  (SIGNATURE OF THE VENDOR)
 

                                  (SIGNATURE OF THE VENDEE)`,

    hi: `विक्रय विलेख (SALE DEED)
    यह विक्रय विलेख आज दिनांक ___ __________, ______ को निम्नलिखित के द्वारा निष्पादित किया गया हैः–
    श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी ______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान नं. __________________________, आधार नं. __________________।
    (जिसे आगे “विक्रेता” कहा गया है) प्रथम पक्ष।
    के पक्ष में
    श्री/श्रीमती ______________________ पुत्र/पुत्री/पत्नी ______________________, आयु ___ वर्ष, व्यवसाय: ________________, निवासी मकान नं. __________________________, आधार नं. __________________।
    (जिसे आगे “क्रेता” कहा गया है) द्वितीय पक्ष।
    पृष्ठ – 2
    यहां प्रयुक्त “विक्रेता” और “क्रेता” शब्द जहां भी संदर्भ अनुमति दे, उनके उत्तराधिकारी, विधिक प्रतिनिधि, प्रशासक और अभिकर्ताओं को भी सम्मिलित करेंगे।
    जबकि, विक्रेता मकान संख्या ____________, आकलन संख्या ______________, जिसमें __________________________ शामिल है, क्षेत्रफल ______ वर्ग गज अथवा ____________ वर्ग मीटर, आर.सी.सी./गैर आर.सी.सी. छत क्षेत्र ______ वर्ग फुट, स्थित ____________________________ में स्थित संपत्ति का पूर्ण एवं निरपेक्ष स्वामी है, जिसका विस्तृत विवरण अनुसूची में दिया गया है। विक्रेता ने उक्त संपत्ति को पंजीकृत विक्रय विलेख दस्तावेज संख्या /, उप-पंजीयक कार्यालय भोंगीर में पंजीकृत के माध्यम से खरीदा था और तब से निरंतर कब्जे एवं उपयोग में है। संपत्ति नगरपालिका अभिलेखों में विक्रेता के नाम पर दर्ज है।
    और जबकि, विक्रेता ने उक्त संपत्ति को सभी प्रकार के भारों से मुक्त ₹__________/- की कुल राशि में पारिवारिक आवश्यकताओं एवं निजी कार्यों हेतु बेचने की पेशकश की और क्रेता ने इसे उक्त मूल्य पर खरीदने के लिए सहमति दी।
    और जबकि, विक्रेता को क्रेता से ₹__________/- (रुपये ___________________________ मात्र) प्राप्त हो चुके हैं, जिसकी प्राप्ति को विक्रेता स्वीकार करता है।
    पृष्ठ – 3
    अतः यह विक्रय विलेख साक्षी है कि, उपरोक्त समझौते के अनुसरण में एवं ₹____________/- की राशि प्राप्त होने पर विक्रेता, उक्त अनुसूचित संपत्ति को सभी भारों से मुक्त क्रेता को विक्रय, हस्तांतरण, परिवहन एवं सुपुर्द करता है, ताकि क्रेता उसे पूर्ण स्वामी के रूप में उपभोग कर सके। विक्रेता के सभी अधिकार, स्वत्व, हित एवं दावे क्रेता को हस्तांतरित किए जाते हैं।
    विक्रेता निम्नलिखित प्रतिज्ञाएं करता हैः
    1. क्रेता संपत्ति पर बिना किसी हस्तक्षेप के पूर्ण स्वामी के रूप में अधिकार एवं उपभोग करेगा।
    2. विक्रेता द्वारा संपत्ति का रिक्त एवं भौतिक कब्जा क्रेता को सौंप दिया गया है।
    3. आज तक के सभी कर विक्रेता द्वारा अदा किए गए हैं; भविष्य के कर क्रेता द्वारा अदा किए जाएंगे।
    4. संपत्ति सभी प्रकार के भार, बंधक, वाद-विवाद एवं कानूनी अड़चनों से मुक्त है।
    5. पूर्व के सभी स्वामित्व दस्तावेज क्रेता को सौंप दिए गए हैं।
    6. विक्रेता नामांतरण हेतु सहयोग करेगा।
    7. विक्रेता भविष्य में आवश्यक सभी वैध कार्य करेगा।
    8. विक्रेता किसी भी स्वामित्व दोष के लिए क्रेता को क्षतिपूर्ति देगा।
    9. यह संपत्ति आंध्र प्रदेश भूमि सुधार अधिनियम, 1973 के अंतर्गत नहीं आती।
    संपत्ति की अनुसूची
    मकान संख्या ____________, आकलन संख्या ______________, स्थित ____________________, क्षेत्रफल ______ वर्ग गज/ वर्ग मीटर, आर.सी.सी./गैर आर.सी.सी. छत क्षेत्र ______ वर्ग फुट।
    सीमाएं:
    उत्तर :
    दक्षिण :
    पूर्व :
    पश्चिम :
    परिशिष्ट – IA
    संपत्ति विवरण:
    a) छत का प्रकार : आर.सी.सी./गैर आर.सी.सी.
    b) संरचना का प्रकार : स्तंभ/दीवारें
    c) भवन की आयु : ___ वर्ष
    d) वार्षिक नगरपालिका कर : ₹____/-
    मैं घोषणा करता/करती हूँ कि उपरोक्त विवरण सत्य है।
    (विक्रेता के हस्ताक्षर)
    (क्रेता के हस्ताक्षर)`,

    te: `విక్రయ పత్రం (SALE DEED)
    ఈ విక్రయ పత్రం ఈ ___ తేదీ __________, ______ నాడు క్రింద పేర్కొన్న వారిచే చేయబడినది:
    శ్రీ/శ్రీమతి ______________________ S/O లేదా D/O లేదా W/O ______________________, వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం: ఇంటి నం. __________________________, ఆధార్ నం. __________________.
    (ఇకపై “విక్రేత”గా పేర్కొనబడును) మొదటి పక్షం.
    కు అనుకూలంగా
    శ్రీ/శ్రీమతి ______________________ S/O లేదా D/O లేదా W/O ______________________, వయస్సు ___ సంవత్సరాలు, వృత్తి: ________________, నివాసం: ఇంటి నం. __________________________, ఆధార్ నం. __________________.
    (ఇకపై “క్రేత”గా పేర్కొనబడును) రెండవ పక్షం.
    పేజీ – 2
    ఇక్కడ ఉపయోగించిన విక్రేత మరియు క్రేత పదాలు సందర్భానుసారంగా వారి వారసులు, చట్టబద్ధ ప్రతినిధులు, నిర్వాహకులు మరియు అసైన్‌లను కూడా సూచిస్తాయి.
    ఎందుకంటే, విక్రేత ఇంటి నం. ____________, అసెస్‌మెంట్ నం. ______________, __________________________ కలిగి, విస్తీర్ణం ______ చదరపు గజాలు లేదా ____________ చదరపు మీటర్లు, ఆర్.సి.సి./నాన్ ఆర్.సి.సి. పైకప్పు ______ చదరపు అడుగులు కలిగిన, __________________________ వద్ద ఉన్న ఆస్తికి సంపూర్ణ యజమాని. ఈ ఆస్తిని డాక్యుమెంట్ నం. /, భోంగీర్ సబ్ రిజిస్ట్రార్ కార్యాలయంలో నమోదు చేయబడిన అమ్మకపు పత్రం ద్వారా పొందాడు/పొందింది. అప్పటి నుండి ఆస్తి విక్రేత ఆధీనంలో ఉంది.
    మరియు ఎందుకంటే, విక్రేత కుటుంబ అవసరాల నిమిత్తం ఈ ఆస్తిని అన్ని బాద్యతల నుంచి విముక్తంగా ₹__________/- కు అమ్మడానికి అంగీకరించాడు/చేసింది మరియు క్రేత కొనుగోలు చేయడానికి అంగీకరించాడు.
    మరియు ఎందుకంటే, విక్రేత ₹__________/- (రూపాయలు ___________________________ మాత్రమే) క్రేత నుండి స్వీకరించినట్లు అంగీకరిస్తున్నాడు/చేస్తోంది.
    పేజీ – 3
    కాబట్టి, ఈ విక్రయ పత్రం ప్రకారం విక్రేత ఆస్తిని క్రేతకు సంపూర్ణ హక్కులతో బదిలీ చేస్తున్నాడు/చేస్తోంది. విక్రేతకు ఉన్న అన్ని హక్కులు, ఆసక్తులు, స్వామ్యత క్రేతకు బదిలీ చేయబడినవి.
    విక్రేత కింది విధంగా అంగీకరిస్తున్నాడు/చేస్తోంది:
    1. క్రేత ఎలాంటి అడ్డంకులు లేకుండా ఆస్తిని సంపూర్ణ యజమానిగా వినియోగించుకోవచ్చు.
    2. ఆస్తి యొక్క ఖాళీ భౌతిక స్వాధీనం క్రేతకు అందజేయబడింది.
    3. ఇప్పటివరకు ఉన్న పన్నులు విక్రేత చెల్లించాడు/చేసింది; భవిష్యత్ పన్నులు క్రేత చెల్లించాలి.
    4. ఆస్తి అన్ని రకాల బంధకాలు, కేసులు లేనిది.
    5. పూర్వ హక్కు పత్రాలు క్రేతకు అందజేయబడ్డాయి.
    6. రికార్డుల మార్పిడికి విక్రేత సహకరిస్తాడు/చేస్తుంది.
    7. అవసరమైన అన్ని చట్టబద్ధ చర్యలు చేపడతాడు/చేస్తుంది.
    8. హక్కుల లోపాల వల్ల కలిగే నష్టాలకు విక్రేత పరిహారం చెల్లిస్తాడు/చేస్తుంది.
    9. ఈ ఆస్తి A.P. Land Reforms Act, 1973 కి వర్తించదు.
    ఆస్తి షెడ్యూల్
    ఇంటి నం. ____________, అసెస్‌మెంట్ నం. ______________, __________________________ వద్ద ఉన్న ఆస్తి, విస్తీర్ణం ______ చదరపు గజాలు / ____________ చదరపు మీటర్లు, ఆర్.సి.సి./నాన్ ఆర్.సి.సి. పైకప్పు ______ చదరపు అడుగులు.
    సరిహద్దులు:
    ఉత్తరం :
    దక్షిణం :
    తూర్పు :
    పడమర :
    అనుబంధం – IA
    ఆస్తి వివరణ:
    a) పైకప్పు స్వభావం : ఆర్.సి.సి./నాన్ ఆర్.సి.సి.
    b) నిర్మాణ రకం : స్థంభాలు/గోడలు
    c) భవనం వయస్సు : ___ సంవత్సరాలు
    d) వార్షిక మున్సిపల్ పన్ను : ₹____/-
    పై వివరాలు నా జ్ఞానం మేరకు నిజమని ప్రకటిస్తున్నాను.
    (విక్రేత సంతకం)
    (క్రేత సంతకం)`
  };

  useEffect(() => {
    setContent(templates[lang] || templates.en);
  }, [lang]);

  return (
    <div className="ld-page flex min-h-screen items-center justify-center p-5">
      <div className="ld-panel w-[min(1100px,95%)] p-8 md:p-10">
        <div className="mb-7 flex items-center justify-between gap-3">
          <button type="button" className="ld-btn-secondary" onClick={() => router.push('/house-details')}>
            ← {t.backToSelection || "Back"}
          </button>
          <LanguageSwitcher />
        </div>

        <h1 className="ld-title mb-8 text-center" style={{ fontSize: 28 }}>
          {lang === 'te' ? 'విక్రయ పత్రం (ఇల్లు) - ప్రివ్యూ' : lang === 'hi' ? 'बिक्री विलेख (घर) - पूर्वावलोकन' : 'SALE DEED (HOUSE) - PREVIEW'}
        </h1>

        <div className="ld-doc" style={{ height: 550, overflowY: 'auto' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            {content}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button type="button" className="ld-btn-primary" onClick={() => router.push('/house-sale-deed-form')}>
            {t.proceedToForm || "Continue to Fill Details"} →
          </button>
        </div>
      </div>
    </div>
  );
}