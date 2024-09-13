import './index.css';

import { NextUIProvider } from '@nextui-org/system';
import { IntlProvider } from '@quiz-stream/contexts/IntlContext/IntlProvider.tsx';
import { ThemeProvider } from '@quiz-stream/contexts/ThemeContext/ThemeProvider.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider>
      <NextUIProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </NextUIProvider>
    </IntlProvider>
  </StrictMode>,
);
