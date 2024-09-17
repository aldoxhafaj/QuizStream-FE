import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    //if you install another component from next ui you declare it like (button|snippet|code|input).js
    './node_modules/@nextui-org/theme/dist/components/(button|spinner|input).js',
  ],
  theme: {
    screens: {
      xs: { min: '250px', max: '639px' },
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      '2xl': { min: '1536px' },
    },
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
        danger: 'var(--color-danger)',
        purple: 'var(--color-purple)',
      },
      backgroundImage: {
        //if any linear-gradient color use it here
      },
      textColor: {
        base: 'var(--color-text)',
        light: 'var(--color-light-text)',
      },
      fontSize: {
        headline_1: '44px',
        headline_2: '32px',
        headline_3: '24px',
        headline_4: '18px',
        headline_5: '16px',
        headline_6: '14px',
        /* responsive behaviour */
        scale_1: '40px',
        scale_2: '36px',
        scale_3: '32px',
        scale_4: '28px',
        scale_5: '24px',
        scale_6: '20px',
        scale_7: '16px',
        scale_8: '14px',
        scale_9: '12px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        x1: '4px',
        x2: '6px',
        x3: '8px',
        x4: '12px',
        x5: '16px',
        x6: '20px',
        x7: '24px',
        x8: '32px',
      },
      boxShadow: {
        x1: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        x2: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        x3: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
        x4: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
        x5: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        x6: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
      },
    },
  },
  darkMode: 'selector',
  plugins: [nextui()],
};
