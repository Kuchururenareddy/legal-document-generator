"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function ExplorePage() {
  const router = useRouter();
  const { lang, t } = useLanguage();

  return (
    <div className="ld-page">
      <nav className="ld-topbar">
        <div className="flex items-center gap-4">
          <button type="button" className="ld-btn-outline" onClick={() => router.push("/welcome")}>
            ← {t.back || "Back"}
          </button>
          <div className="text-lg font-semibold text-[#0b1f3a]">
            {lang === "te" ? "పత్రం రకాన్ని ఎంచుకోండి" : lang === "hi" ? "दस्तावेज़ प्रकार चुनें" : "Select Category"}
          </div>
        </div>
        <LanguageSwitcher />
      </nav>

      <main className="flex flex-col items-center px-5 pt-12">
        <h1 className="ld-title" style={{ fontSize: 34 }}>
          {lang === "te" ? "మీరు ఏమి రిజిస్టర్ చేస్తున్నారు?" : lang === "hi" ? "आप क्या पंजीकृत कर रहे हैं?" : "What are you registering?"}
        </h1>
        <p className="ld-subtitle">
          {lang === "te" ? "మీ అవసరానికి సరిపోయే వర్గాన్ని ఎంచుకోండి." : lang === "hi" ? "वह श्रेणी चुनें जो आपके लिए उपयुक्त है।" : "Choose the category that fits your requirements."}
        </p>

        <div className="flex w-[min(1050px,90%)] flex-wrap justify-center gap-5">
          <button type="button" className="ld-card w-[280px]" onClick={() => router.push("/house-details")}>
            <h2 className="m-0 text-xl font-semibold">{lang === "te" ? "ఇల్లు" : lang === "hi" ? "घर" : "House"}</h2>
            <p className="mt-2 text-sm text-[#5c6776]">{lang === "te" ? "నివాస భవనాలు & విల్లాలు" : lang === "hi" ? "आवासीय भवन और विला" : "Residential buildings & villas"}</p>
          </button>
          <button type="button" className="ld-card w-[280px]" onClick={() => router.push("/plot-details")}>
            <h2 className="m-0 text-xl font-semibold">{lang === "te" ? "ప్లాట్" : lang === "hi" ? "ప్లాట్" : "Plot"}</h2>
            <p className="mt-2 text-sm text-[#5c6776]">{lang === "te" ? "ఓపెన్ ల్యాండ్ & వ్యవసాయ భూములు" : lang === "hi" ? "खुली भूमि और कृषि भूखंड" : "Open land & agricultural plots"}</p>
          </button>
          <button type="button" className="ld-card w-[280px]" onClick={() => router.push("/employment-details")}>
            <h2 className="m-0 text-xl font-semibold">{lang === "te" ? "ఉద్యోగం" : lang === "hi" ? "रोज़गार" : "Employment"}</h2>
            <p className="mt-2 text-sm text-[#5c6776]">{lang === "te" ? "కాంట్రాక్టులు & ఆఫర్ లెటర్స్" : lang === "hi" ? "अनुबंध और प्रस्ताव पत्र" : "Contracts, Offer Letters & Agreements"}</p>
          </button>
        </div>
      </main>
    </div>
  );
}
