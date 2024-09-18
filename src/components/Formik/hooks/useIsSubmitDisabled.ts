import { useFormikContext } from 'formik';

export const useIsSubmitDisabled = (config?: {
  isDisabled?: boolean;
  isLoading?: boolean;
  skipDirtyCheck?: boolean;
}) => {
  const formik = useFormikContext();

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!formik) {
    throw new Error('useIsSubmitDisabled must be used within a Formik context');
  }

  const isLoading = config?.isLoading || formik.isSubmitting;

  const isFormikValid =
    formik.isValid && (config?.skipDirtyCheck ? true : formik.dirty);

  const isSubmitDisabled = !isFormikValid || !!config?.isDisabled || isLoading;

  return isSubmitDisabled;
};
