import {
  AlignItem,
  JustifyContent,
  LayoutInsetProps,
} from '@quiz-stream/layouts/types';
import { Color } from '@quiz-stream/themes/color';
import { ReactNode } from 'react';

export type RowProps = LayoutInsetProps & {
  children: ReactNode;
  className?: string;
  flex?: number;
  flexGrow?: number;
  justifyContent?: JustifyContent;
  alignItems?: AlignItem;
  backgroundColor?: Color; //TODO remove this if you configure colors in tailwind
};
