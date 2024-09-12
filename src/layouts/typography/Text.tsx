import { FontSize, TextProps } from './types';

const TextFontStyle = {
  [FontSize.H1]: '',
  [FontSize.H2]: '',
  [FontSize.H3]: '',
  [FontSize.H4]: '',
  [FontSize.H5]: '',
  [FontSize.H6]: '',
};

export const Text = ({
  children,
  className,
  color,
  fontSize = FontSize.H3,
}: TextProps) => {
  return (
    <p className={`${className} ${TextFontStyle[fontSize]}`} style={{ color }}>
      {children}
    </p>
  );
};
