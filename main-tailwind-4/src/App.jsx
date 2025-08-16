// src/App.jsx
import React, { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import ThemeToggle from "./components/ui/ThemeToggle";
import Biligual from "./components/Biligual";
import { useTranslation } from "react-i18next";
import "./i18n";

const App = () => {
  const { t, i18n } = useTranslation();
  const { initializeTheme } = useTheme();

  // Inicializa el tema cuando la aplicación se monta
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  // Función para cambiar idioma
  const toggleLang = () => {
    const nextLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4 bg-primary-100  dark:bg-primary-300-dark">


<div className="absolute top-0 w-2/6  right-0 h-13 flex ">
  <div className=" h-13 w-full flex justify-end items-center ">
 
        <ThemeToggle variant="dropdown" />
  </div>

  <div className=" h-13 w-full flex justify-center items-center ">
 
 <button
          onClick={toggleLang}
          className="btn btn-sm btn-outline"
        >
          {t(i18n.language === "en" ? "changeToSpanish" : "changeToEnglish")}
        </button>
  </div>
</div>

      {/* 🎛️ Controles en la esquina superior */}
      <div className="absolute top-4 right-4 flex gap-4 items-center">
        
       
       
      </div>

      {/* 📝 Contenido principal */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold dark:text-white">
          {t("welcome")}
        </h1>
        <p className="text-lg dark:text-gray-300">
          {t("greeting")}
        </p>
        <Biligual/>
      </div>
    </div>
  );
};

export default App;
