import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem("appLanguage", newLang); // guarda preferencia
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage");
    if (savedLang && savedLang !== lang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, []);

  return (
    <div className="language-switcher">
      <button onClick={toggleLanguage}>{lang === "en" ? "ES" : "EN"}</button>
    </div>
  );
}

export default LanguageSwitcher;
