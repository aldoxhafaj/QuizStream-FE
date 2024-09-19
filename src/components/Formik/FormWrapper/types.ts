import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { FormikContextType } from 'formik';
import { ReactNode } from 'react';

export type FormWrapperProps<T> = {
  formik: FormikContextType<T>;
  submitTitle?: string;
} & FormLayoutProps &
  Omit<FormWrapperContentProps, 'onSubmit'>;

export type FormLayoutProps = {
  children: ReactNode;
  inputsGap?: VerticalSpacing;
  skipDirtyCheck?: boolean;
  submitTitle?: string;
} & Omit<FormWrapperContentProps, 'onSubmit'>;

export type FormWrapperContentProps = {
  footer?: ReactNode;
  submitTitle?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onSubmit: () => void;
};

export type UseFormWrapperProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  skipDirtyCheck?: boolean;
};
