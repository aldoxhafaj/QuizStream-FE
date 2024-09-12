import { ButtonProps as ButtonComponentProps } from '@nextui-org/button';
import { ReactNode } from 'react';

export type ButtonProps = { customSpinner?: ReactNode } & Pick<
  ButtonComponentProps,
  | 'children'
  | 'className'
  | 'variant'
  | 'color'
  | 'size'
  | 'radius'
  | 'startContent'
  | 'endContent'
  | 'spinnerPlacement'
  | 'isIconOnly'
  | 'isLoading'
  | 'isDisabled'
  | 'fullWidth'
  | 'onPress'
>;
