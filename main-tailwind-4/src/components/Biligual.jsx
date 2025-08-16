import React from 'react'
import { useTranslation } from "react-i18next";
import "../i18n";

const Biligual = () => {

  const { t, i18n } = useTranslation();

 const toggleLang = () => {
    const nextLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
  <h1 className="text-4xl font-bold dark:text-white">
          {t("bilingual")}
        </h1>
  )
}

export default Biligual