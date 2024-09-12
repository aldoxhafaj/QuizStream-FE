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
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};
