import { LayoutInsetProps } from '@quiz-stream/layouts/types';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { ReactNode } from 'react';

export type ContainerProps = LayoutInsetProps & {
  children: ReactNode;
  className?: string;
  flex?: number;
  flexGrow?: number;
  gap?: VerticalSpacing;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
