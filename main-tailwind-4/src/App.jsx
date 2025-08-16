// src/App.jsx
import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

import ThemeToggle from './components/ui/ThemeToggle';

const App = () => {
  const { initializeTheme } = useTheme();

  // 🚀 Inicializar tema al montar
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4 dark:bg-black">
      {/* 🎛️ Control en la esquina superior */}
      <div className="absolute top-4 right-4 flex gap-4 items-center">
        <ThemeToggle />
      </div>
      
      {/* 📝 Contenido principal */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold dark:text-white">
          Bienvenido a la App
        </h1>
        <p className="text-lg dark:text-gray-300 max-w-2xl">
          Esta es una landing page de ejemplo sin traducciones.
        </p>
        <button className="btn btn-primary">
          Continuar
        </button>
      </div>

      {/* 🔍 Info de debug (opcional) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 left-4 text-xs dark:text-gray-400 space-y-1">
          <div>Theme: {localStorage.getItem('theme') || 'system'}</div>
        </div>
      )}
    </div>
  );
};

export default App;

