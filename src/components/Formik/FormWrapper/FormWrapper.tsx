import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { FormikProvider } from 'formik';

import { FormLayout } from './FormLayout';
import { FormWrapperProps } from './types';

export const FormWrapper = <T,>({
  children,
  formik,
  inputsGap = VerticalSpacing.S,
  buttonProps,
  footer,
  isDisabled = false,
  skipDirtyCheck = false,
  isLoading = formik.isSubmitting,
  enableFooterBottomPadding = false,
}: FormWrapperProps<T>) => {
  return (
    <FormikProvider value={formik}>
      <FormLayout
        inputsGap={inputsGap}
        footer={footer}
        buttonProps={buttonProps}
        isDisabled={isDisabled}
        isLoading={isLoading}
        skipDirtyCheck={skipDirtyCheck}
        enableFooterBottomPadding={enableFooterBottomPadding}
      >
        {children}
      </FormLayout>
    </FormikProvider>
  );
};
