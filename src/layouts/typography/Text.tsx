import { FontSize, TextColor, TextProps } from './types';

const TextFontStyle = {
  [FontSize.H1]:
    'text-headline_1 md:text-scale_1 sm:text-scale_2 xs:text-scale_4',
  [FontSize.H2]:
    'text-headline_2 md:text-scale_4 sm:text-scale_5 xs:text-scale_6',
  [FontSize.H3]:
    'text-headline_3 md:text-scale_6 sm:text-scale_7 xs:text-scale_7',
  [FontSize.H4]:
    'text-headline_4 md:text-scale_7 sm:text-scale_7 xs:text-scale_8',
  [FontSize.H5]: 'text-headline_5 sm:text-scale_8 xs:text-scale_9',
  [FontSize.H6]: 'text-headline_6 xs:text-scale_9',
};

export const Text = ({
  children,
  className,
  fontSize = FontSize.H4,
  color = TextColor.BASE,
  underline = false,
  bold = false,
  onClick,
}: TextProps) => {
  return (
    <p
      className={`font-inter ${className} ${TextFontStyle[fontSize]} ${color} ${underline && 'underline'} ${bold && 'font-bold'}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
};
