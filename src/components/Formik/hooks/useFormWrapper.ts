import { useFormikContext } from 'formik';

import { UseFormWrapperProps } from './types';

export const useFormWrapper = ({
  isDisabled = false,
  isLoading = false,
  skipDirtyCheck = false,
}: UseFormWrapperProps) => {
  const formik = useFormikContext();

  if (!formik) {
    throw new Error('useFormWrapper must be used within a Formik context');
  }

  const isInProgress = isLoading || formik.isSubmitting;

  const isFormikValid =
    formik.isValid && (skipDirtyCheck ? true : formik.dirty);

  const isSubmitDisabled = !isFormikValid || isDisabled || isInProgress;

  return {
    isSubmitDisabled,
    onSubmit: formik.handleSubmit,
  };
};
