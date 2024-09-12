import { LayoutInsetProps } from '@quiz-stream/layouts/types';
import { Color } from '@quiz-stream/themes/color';
import { ReactNode } from 'react';

export type ContainerProps = LayoutInsetProps & {
  children: ReactNode;
  className?: string;
  flex?: number;
  flexGrow?: number;
  backgroundColor?: Color; //TODO needs to be removed if configured in tailwind
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
