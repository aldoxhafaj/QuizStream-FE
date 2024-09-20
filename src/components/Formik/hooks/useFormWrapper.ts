import { useFormikContext } from 'formik';

import { UseFormWrapperProps } from './types';
import { useIsSubmitDisabled } from './useIsSubmitDisabled';

export const useFormWrapper = ({
  isDisabled = false,
  isLoading = false,
  skipDirtyCheck = false,
}: UseFormWrapperProps) => {
  const formik = useFormikContext();

  const isSubmitDisabled = useIsSubmitDisabled({
    isDisabled,
    isLoading,
    skipDirtyCheck,
  });

  return {
    isSubmitDisabled,
    onSubmit: formik.handleSubmit,
  };
};
