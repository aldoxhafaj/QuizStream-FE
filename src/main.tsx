import './index.css';

import { NextUIProvider } from '@nextui-org/system';
import { IntlProvider } from '@quiz-stream/contexts/IntlContext/IntlProvider.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </IntlProvider>
  </StrictMode>,
);
