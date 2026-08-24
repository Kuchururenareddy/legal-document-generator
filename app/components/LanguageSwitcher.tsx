"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[#d5dbe6] px-3 py-1.5 rounded">
      <label htmlFor="language-select" className="sr-only">
        Language
      </label>
      <span aria-hidden="true" className="text-sm text-[#5c6776]">
        EN / हि / తె
      </span>
      <select
        id="language-select"
        value={lang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="border-0 bg-transparent text-sm font-semibold text-[#0b1f3a] cursor-pointer outline-none"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी (Hindi)</option>
        <option value="te">తెలుగు (Telugu)</option>
      </select>
    </div>
  );
}
