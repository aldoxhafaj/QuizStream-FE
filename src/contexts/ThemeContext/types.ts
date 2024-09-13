import { ReactNode } from 'react';

export enum SystemTheme {
  DARK = 'dark',
  LIGHT = 'light',
}
export type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeContextProps = {
  isDarkColorTheme?: boolean;
  toggleTheme: () => void;
};
