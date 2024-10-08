import { ReactNode } from 'react';

export enum FontSize {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
}

export enum TextColor {
  BASE = 'text-base',
  LIGHT = 'text-light',
  PURPLE = 'text-purple',
}

export type TextProps = {
  children: ReactNode;
  className?: string;
  fontSize?: FontSize;
  color?: TextColor;
  underline?: boolean;
  bold?: boolean;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
};
