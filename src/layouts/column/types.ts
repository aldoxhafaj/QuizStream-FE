import {
  AlignItem,
  JustifyContent,
  LayoutInsetProps,
} from '@quiz-stream/layouts/types';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { ReactNode } from 'react';

export type ColumnProps = LayoutInsetProps & {
  children: ReactNode;
  className?: string;
  flex?: number;
  flexGrow?: number;
  justifyContent?: JustifyContent;
  alignItems?: AlignItem;
  gap?: VerticalSpacing;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
