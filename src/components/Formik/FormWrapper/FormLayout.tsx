import { Container } from '@quiz-stream/layouts/container';

import { FormContent } from './FormContent';
import { FormLayoutType } from './types';
import { useFormWrapper } from './useFormWrapper';

export const FormLayout = ({
  children,
  isDisabled = false,
  footer,
  isLoading,
  skipDirtyCheck,
  // shouldFlex,
  // scrollEnabled = true,
  // isCentered = false,
  // inputsGap = VerticalSpacing.M,
}: FormLayoutType) => {
  const { isSubmitDisabled, onSubmit } = useFormWrapper({
    isDisabled,
    isLoading,
    skipDirtyCheck,
  });

  return (
    <Container>
      <Container flex={1}>{children}</Container>

      <FormContent
        onSubmit={onSubmit}
        isDisabled={isSubmitDisabled}
        footer={footer}
        isLoading={isLoading}
      />
    </Container>
  );
};
