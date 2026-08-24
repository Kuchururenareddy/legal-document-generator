"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function DocumentPreview() {
  const { t } = useLanguage();

  return (
    <div className="ld-page min-h-screen p-8">
      <div className="ld-doc mx-auto max-w-[850px]">
        <LanguageSwitcher />
        <h1 className="mb-8 text-center font-bold underline">{t.agreementTitle}</h1>
      </div>
    </div>
  );
}
