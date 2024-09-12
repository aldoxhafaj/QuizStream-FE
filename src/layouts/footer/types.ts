import { AlignItem } from '@quiz-stream/layouts/types';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { ReactNode } from 'react';

export type FooterProps = {
  children: ReactNode;
  flexGrow?: number;
  alignItems?: AlignItem;
  paddingBottom?: VerticalSpacing;
  marginBottom?: VerticalSpacing;
};
