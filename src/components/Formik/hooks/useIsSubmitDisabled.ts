import { useFormikContext } from 'formik';

import { UseIsSubmitDisabledProps } from './types';

export const useIsSubmitDisabled = (
  configOptions?: UseIsSubmitDisabledProps,
) => {
  const formik = useFormikContext();

  if (!formik) {
    throw new Error('useIsSubmitDisabled must be used within a Formik context');
  }

  const isLoading = configOptions?.isLoading || formik.isSubmitting;

  const isFormikValid =
    formik.isValid && (configOptions?.skipDirtyCheck ? true : formik.dirty);

  const isSubmitDisabled =
    !isFormikValid || !!configOptions?.isDisabled || isLoading;

  return isSubmitDisabled;
};
