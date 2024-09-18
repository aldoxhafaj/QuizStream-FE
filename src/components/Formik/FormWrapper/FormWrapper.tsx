import { FormikProvider } from 'formik';

import { FormLayout } from './FormLayout';
import { FormWrapperType } from './types';

export const FormWrapper = <T,>({
  children,
  formik,
  shouldFlex,
  isDisabled,
  scrollEnabled = true,
  isCentered = false,
  inputsGap,
  footer,
  skipDirtyCheck,
  isLoading = formik.isSubmitting,
}: FormWrapperType<T>) => {
  return (
    <FormikProvider value={formik}>
      <FormLayout
        isDisabled={isDisabled}
        footer={footer}
        isLoading={isLoading}
        shouldFlex={shouldFlex}
        inputsGap={inputsGap}
        scrollEnabled={scrollEnabled}
        isCentered={isCentered}
        skipDirtyCheck={skipDirtyCheck}
      >
        {children}
      </FormLayout>
    </FormikProvider>
  );
};
