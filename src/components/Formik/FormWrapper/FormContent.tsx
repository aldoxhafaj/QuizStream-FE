import { Footer } from '@quiz-stream/layouts/footer';

import { FormWrapperContentProps } from './types';

export const FormContent = ({
  footer,
  // isDisabled,
  // onSubmit,
  // isLoading,
}: FormWrapperContentProps) => {
  return <Footer>{footer}</Footer>;
};
