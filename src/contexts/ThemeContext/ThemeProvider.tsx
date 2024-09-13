import { Container } from '@quiz-stream/layouts/container';
import { StorageKey } from '@quiz-stream/utils/storage/enums';
import {
  addLocalItem,
  fetchLocalItem,
} from '@quiz-stream/utils/storage/storage';
import { createContext, useEffect, useState } from 'react';

import { SystemTheme, ThemeContextProps, ThemeProviderProps } from './types';

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkColorTheme, setIsDarkColorTheme] = useState(true);

  const toggleAppColorTheme = () => {
    addLocalItem(StorageKey.IS_DARK_THEME, JSON.stringify(!isDarkColorTheme));
    setIsDarkColorTheme(!isDarkColorTheme);
  };

  const loadAppColorTheme = () => {
    const isDark = fetchLocalItem(StorageKey.IS_DARK_THEME);
    if (isDark && JSON.parse(isDark)) {
      setIsDarkColorTheme(JSON.parse(isDark));
    }
  };

  useEffect(() => {
    loadAppColorTheme();
  }, []);

  const themeClass = isDarkColorTheme ? SystemTheme.DARK : SystemTheme.LIGHT;

  return (
    <ThemeContext.Provider
      value={{ isDarkColorTheme, toggleTheme: toggleAppColorTheme }}
    >
      <Container className={`h-dvh w-dvw ${themeClass}`}>{children}</Container>
    </ThemeContext.Provider>
  );
};
