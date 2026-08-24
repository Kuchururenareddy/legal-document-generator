"use client";
import React, { useState, useEffect } from "react";
import { Volume2, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translateText } from "../utils/translator";
import { translations } from "../constants/translations";

export default function DraftPage() {
  const { t, lang } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [translatedText, setTranslatedText] = useState(t);
  const [error, setError] = useState("");

  useEffect(() => {
    async function performTranslation() {
      const keys = ["agreementTitle", "legalBody", "vendorPart", "vendeePart", "theoryHeading", "theoryBody"] as const;
      const localCopy = { ...t } as typeof t;
      try {
        for (const key of keys) {
          const original = translations.en[key];
          localCopy[key] = await translateText(original, lang);
        }
        setTranslatedText(localCopy);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while processing your request. Please try again.");
      }
    }
    performTranslation();
  }, [lang, t]);

  const handleListen = () => {
    if (!window.speechSynthesis) {
      setError("Voice playback is not available in this browser.");
      return;
    }
    const synth = window.speechSynthesis;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }
    const content = document.getElementById("legal-doc")?.innerText;
    if (!content) return;
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = lang === "hi" ? "hi-IN" : lang === "te" ? "te-IN" : "en-US";
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    synth.speak(utterance);
  };

  return (
    <div className="ld-page p-6 md:p-8">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/form" className="ld-btn-text inline-flex items-center gap-2">
          <ArrowLeft size={18} /> {translatedText.backToSelection}
        </Link>
        <div className="flex gap-3">
          <button type="button" onClick={handleListen} className="ld-btn-outline">
            <Volume2 size={16} /> {isSpeaking ? "STOP" : translatedText.readAloud}
          </button>
          <button type="button" onClick={() => window.print()} className="ld-btn-primary">
            <Download size={16} /> {translatedText.printPDF}
          </button>
        </div>
      </div>
      {error && <p className="mb-4 text-sm text-[#8f2d2d]">{error}</p>}
      <div id="legal-doc" className="ld-doc mx-auto min-h-[1000px] max-w-[800px]">
        <h1 className="mb-12 text-center text-2xl font-bold underline">{translatedText.agreementTitle}</h1>
        <div className="space-y-6 text-justify leading-loose">
          <p>{translatedText.legalBody}</p>
          <p><strong>VENDOR:</strong> {translatedText.vendorPart}</p>
          <p><strong>VENDEE:</strong> {translatedText.vendeePart}</p>
        </div>
      </div>
    </div>
  );
}
