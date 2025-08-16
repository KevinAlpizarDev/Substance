
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import languageReducer from "./LanguageSlice"; // Importa el reducer que crearás a continuación

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer, // Agrega el reducer
    l
  },
  devTools: process.env.NODE_ENV !== "production", // DevTools solo en desarrollo
});