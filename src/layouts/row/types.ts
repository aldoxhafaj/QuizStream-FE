import {
  AlignItem,
  JustifyContent,
  LayoutInsetProps,
} from '@quiz-stream/layouts/types';
import { HorizontalSpacing } from '@quiz-stream/themes/spacing';
import { ReactNode } from 'react';

export type RowProps = LayoutInsetProps & {
  children: ReactNode;
  className?: string;
  flex?: number;
  flexGrow?: number;
  justifyContent?: JustifyContent;
  alignItems?: AlignItem;
  gap?: HorizontalSpacing;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
