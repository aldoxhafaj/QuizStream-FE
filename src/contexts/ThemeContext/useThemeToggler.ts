import { useContext } from 'react';

import { ThemeContext } from './ThemeProvider';

export const useThemeToggler = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useThemeToggler must be used within theme context!');
  }

  return themeContext;
};
