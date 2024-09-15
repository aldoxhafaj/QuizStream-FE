import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    //if you install another component from next ui you declare it like (button|snippet|code|input).js
    './node_modules/@nextui-org/theme/dist/components/(button|spinner).js',
  ],
  theme: {
    extend: {
      colors: {
        screen: 'var(--color-background)',
        container: 'var(--color-container)',
        primaryButton: 'var(--color-primaryButton)',
        grass: 'var(--color-grass)',
        notify: 'var(--color-notify)',
        'sharp-container': 'var(--color-sharp-container)',
        active: 'var(--color-active)',
        pending: 'var(--color-pending)',
        base: 'var(--color-text)',
        light: 'var(--color-light-text)',
        danger: 'var(--color-danger)',
      },
      backgroundImage: {
        //if any linear-gradient color use it here
      },
    },
  },
  darkMode: 'selector',
  plugins: [nextui()],
};
