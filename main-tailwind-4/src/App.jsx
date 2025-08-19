import React, { useEffect, useState } from "react";
import { useTheme } from "./hooks/useTheme";
import ThemeToggle from "./components/ui/ThemeToggle";
import Biligual from "./components/Biligual";
import { useTranslation } from "react-i18next";
import "./i18n";
import MultiSkeletonLoader from "./components/MultiSkeletonLoader";

const App = () => {
  const { t, i18n } = useTranslation();
  const { initializeTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Inicializa el tema y simula carga de datos
  useEffect(() => {
    initializeTheme();
    
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [initializeTheme]);

  // Función para cambiar idioma
  const toggleLang = () => {
    const nextLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full p-8 bg-primary-100 dark:bg-primary-300-dark">
        {/* Skeleton para la barra superior */}
        <div className="absolute top-0 right-0 w-2/6 h-13 flex">
          <div className="h-13 w-full flex justify-end items-center">
            <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse"></div>
          </div>
          <div className="h-13 w-full flex justify-center items-center">
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse"></div>
          </div>
        </div>
        
        {/* Skeleton para el contenido principal */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="w-full max-w-md space-y-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-full animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-5/6 mx-auto animate-pulse"></div>
          </div>
          
          <MultiSkeletonLoader cols={1} items={3} />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4 bg-primary-100 dark:bg-primary-300-dark">
      {/* Barra superior con controles */}
      <div className="absolute top-0 w-2/6 right-0 h-13 flex">
        <div className="h-13 w-full flex justify-end items-center">
          <ThemeToggle variant="dropdown" />
        </div>
        <div className="h-13 w-full flex justify-center items-center">
          <button
            onClick={toggleLang}
            className="btn btn-sm btn-outline"
          >
            {t(i18n.language === "en" ? "changeToSpanish" : "changeToEnglish")}
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="text-center space-y-4 px-4">
        <h1 className="text-4xl font-bold dark:text-white">
          {t("welcome")}
        </h1>
        <p className="text-lg dark:text-gray-300">
          {t("greeting")}
        </p>
        <Biligual />
      </div>

      {/* Contenido adicional (opcional) */}
      <div className="w-full p-8 mt-8 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
          {t("featuredContent")}
        </h2>
        <MultiSkeletonLoader 
          cols={3} 
          items={3}
          config={[
            { variant: 'withAvatar', color: 'blue' },
            { variant: 'withActions', color: 'purple' },
            { variant: 'horizontal', color: 'emerald' }
          ]}
        />
      </div>
    </div>
  );
};

export default App;