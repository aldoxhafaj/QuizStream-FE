import { ButtonProps } from '@quiz-stream/components/Button/types';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { FormikContextType } from 'formik';
import { ReactNode } from 'react';

type FormButtonProps = { buttonTitle?: string } & Pick<
  ButtonProps,
  | 'color'
  | 'radius'
  | 'size'
  | 'customSpinner'
  | 'spinnerPlacement'
  | 'startContent'
  | 'endContent'
  | 'fullWidth'
>;

export type FormWrapperProps<T> = {
  formik: FormikContextType<T>;
} & FormLayoutProps &
  Omit<FormWrapperFooterProps, 'onSubmit'>;

export type FormLayoutProps = {
  children: ReactNode;
  inputsGap?: VerticalSpacing;
  skipDirtyCheck?: boolean;
} & Omit<FormWrapperFooterProps, 'onSubmit'>;

export type FormWrapperFooterProps = {
  footer?: ReactNode;
  enableFooterBottomPadding?: boolean;
  buttonProps?: FormButtonProps;
  isDisabled?: boolean;
  isLoading?: boolean;
  onSubmit: () => void;
};
