// src/App.jsx
import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

import ThemeToggle from './components/ui/ThemeToggle';

const App = () => {
  const { initializeTheme } = useTheme();

  // Inicializa el tema cuando la aplicación se monta
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
 <div className='h-screen w-full flex justify-center items-center dark:bg-black'>

<ThemeToggle variant="dropdown" className="absolute top-4 right-4" />
 </div>
   
  );
};

export default App;