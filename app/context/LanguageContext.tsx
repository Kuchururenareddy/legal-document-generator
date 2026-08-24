"use client";
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { translations } from "../constants/translations";

type LanguageContextValue = {
  lang: string;
  t: Record<string, string>;
  changeLanguage: (newLang: string) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    const saved = localStorage.getItem("appLanguage") || "en";
    setLang(saved);
  }, []);

  const changeLanguage = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("appLanguage", newLang);
  };

  const t = (translations[lang as keyof typeof translations] || translations.en) as Record<string, string>;

  const value = useMemo(() => ({ lang, t, changeLanguage }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en",
      t: translations.en as Record<string, string>,
      changeLanguage: () => {},
    };
  }
  return ctx;
};
