import { Container } from '@quiz-stream/layouts/container';

import { FormContent } from './FormContent';
import { FormLayoutProps } from './types';
import { useFormWrapper } from './useFormWrapper';

export const FormLayout = ({
  children,
  footer,
  submitTitle,
  inputsGap,
  isDisabled,
  isLoading,
  skipDirtyCheck,
}: FormLayoutProps) => {
  const { isSubmitDisabled, onSubmit } = useFormWrapper({
    isDisabled,
    isLoading,
    skipDirtyCheck,
  });

  return (
    <Container>
      <Container gap={inputsGap}>{children}</Container>

      <FormContent
        submitTitle={submitTitle}
        footer={footer}
        onSubmit={onSubmit}
        isDisabled={isSubmitDisabled}
        isLoading={isLoading}
      />
    </Container>
  );
};
