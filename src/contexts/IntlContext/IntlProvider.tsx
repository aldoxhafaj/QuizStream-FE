import { Language } from '@quiz-stream/intl/utils/enums';
import { getAppLanguage } from '@quiz-stream/intl/utils/getAppLanguage';
import { MESSAGES } from '@quiz-stream/intl/utils/messages';
import { addLocalItem } from '@quiz-stream/utils/index';
import { StorageKey } from '@quiz-stream/utils/storage/enums';
import { createContext, useCallback, useEffect, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { IntlContextProps, IntlProviderProps } from './types';

export const IntlContext = createContext<IntlContextProps | null>(null);

const DEFAULT_APP_LANGUAGE = Language.EN;
export const IntlProvider = ({ children }: IntlProviderProps) => {
  const [language, setLanguage] = useState(DEFAULT_APP_LANGUAGE);

  const changeLanguage = (nextLanguage: Language) => {
    addLocalItem(StorageKey.LANGUAGE, nextLanguage);
    setLanguage(nextLanguage);
  };

  const loadAppLanguage = useCallback(() => {
    const lang = getAppLanguage();
    if (lang) {
      changeLanguage(lang as Language);
    }
  }, []);

  useEffect(() => {
    loadAppLanguage();
  }, [loadAppLanguage]);

  return (
    <IntlContext.Provider value={{ language, changeLanguage }}>
      <ReactIntlProvider
        locale={language}
        messages={MESSAGES[language]}
        defaultLocale={DEFAULT_APP_LANGUAGE}
      >
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  );
};
