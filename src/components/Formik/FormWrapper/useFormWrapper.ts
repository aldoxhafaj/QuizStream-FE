import { useIsSubmitDisabled } from '@quiz-stream/components/Formik/hooks';
import { useFormikContext } from 'formik';

import { UseFormWrapperProps } from './types';

export const useFormWrapper = ({
  isDisabled,
  isLoading,
  skipDirtyCheck,
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
