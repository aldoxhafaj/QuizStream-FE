import { LayoutInsetProps } from '@quiz-stream/layouts/types';
import { ReactNode } from 'react';

export type ContainerProps = LayoutInsetProps & {
  children: ReactNode;
  className?: string;
  flex?: number;
  flexGrow?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
