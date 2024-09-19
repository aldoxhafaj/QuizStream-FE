import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { FormikProvider } from 'formik';

import { FormLayout } from './FormLayout';
import { FormWrapperProps } from './types';

export const FormWrapper = <T,>({
  children,
  formik,
  submitTitle,
  inputsGap = VerticalSpacing.M,
  footer,
  isDisabled = false,
  skipDirtyCheck = false,
  isLoading = formik.isSubmitting,
}: FormWrapperProps<T>) => {
  return (
    <FormikProvider value={formik}>
      <FormLayout
        submitTitle={submitTitle}
        inputsGap={inputsGap}
        footer={footer}
        isDisabled={isDisabled}
        isLoading={isLoading}
        skipDirtyCheck={skipDirtyCheck}
      >
        {children}
      </FormLayout>
    </FormikProvider>
  );
};
