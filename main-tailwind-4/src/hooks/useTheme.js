// src/hooks/useTheme.js
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme, initializeTheme } from '../redux/slices/themeSlice';

export const useTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleSetTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
  };

  const handleInitializeTheme = () => {
    dispatch(initializeTheme());
  };

  const isDark = theme === 'dark';

  return {
    theme,
    isDark,
    toggleTheme: handleToggleTheme,
    setTheme: handleSetTheme,
    initializeTheme: handleInitializeTheme
  };
};