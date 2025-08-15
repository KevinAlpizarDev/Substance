// src/redux/slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Función helper para aplicar el tema según la lógica oficial de Tailwind
const applyTheme = () => {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }
};

// Función para obtener el tema inicial
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.theme === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      return "dark";
    }
    return "light";
  }
  return "light"; // Fallback para SSR
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialTheme(),
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      if (typeof window !== 'undefined') {
        if (newTheme === "dark") {
          localStorage.theme = "dark"; // Explicitly choose dark mode
        } else {
          localStorage.theme = "light"; // Explicitly choose light mode
        }
        applyTheme();
      }
      return newTheme;
    },
    setTheme: (state, action) => {
      const theme = action.payload;
      if (typeof window !== 'undefined') {
        if (theme === "system") {
          localStorage.removeItem("theme"); // Respect OS preference
        } else {
          localStorage.theme = theme; // Explicit choice
        }
        applyTheme();
      }
      return theme === "system" ? getInitialTheme() : theme;
    },
    initializeTheme: (state) => {
      if (typeof window !== 'undefined') {
        applyTheme();
      }
      return getInitialTheme();
    }
  },
});

export const { toggleTheme, setTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;