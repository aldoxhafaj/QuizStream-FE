import { FormikContextType } from 'formik';
import { ReactNode } from 'react';

export type FormWrapperType<T> = {
  formik: FormikContextType<T>;
} & Omit<FormLayoutType, 'onSubmit'>;

export type FormLayoutType = {
  children: ReactNode;
  shouldFlex?: boolean;
  scrollEnabled?: boolean;
  inputsGap?: number | false;
  isCentered?: boolean;
  skipDirtyCheck?: boolean;
} & Omit<FormWrapperContentProps, 'onSubmit'>;

export type FormWrapperContentProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  footer?: ReactNode;
  onSubmit: () => void;
};

export type UseFormWrapperProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  skipDirtyCheck?: boolean;
};
