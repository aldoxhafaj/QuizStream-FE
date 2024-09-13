import {
  AlignItem,
  JustifyContent,
  LayoutInsetProps,
} from '@quiz-stream/layouts/types';
import { ReactNode } from 'react';

export type RowProps = LayoutInsetProps & {
  children: ReactNode;
  className?: string;
  flex?: number;
  flexGrow?: number;
  justifyContent?: JustifyContent;
  alignItems?: AlignItem;
};
