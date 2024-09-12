import { Color } from '@quiz-stream/themes/color';
import { ReactNode } from 'react';

export enum FontSize {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
}

export type TextProps = {
  children: ReactNode;
  className?: string;
  color?: Color; //TODO remove prop it if you define color in tailwind.config.ts
  fontSize?: FontSize;
};
