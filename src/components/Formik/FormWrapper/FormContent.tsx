import { Button } from '@quiz-stream/components/Button';
import { Container } from '@quiz-stream/layouts/container';
import { Footer } from '@quiz-stream/layouts/footer';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';

import { FormWrapperContentProps } from './types';

export const FormContent = ({
  submitTitle,
  footer,
  isDisabled,
  onSubmit,
  isLoading,
}: FormWrapperContentProps) => {
  return (
    <Footer>
      {!footer && (
        <Container paddingBottom={VerticalSpacing.S}>{footer}</Container>
      )}
      <Button onPress={onSubmit} isDisabled={isDisabled} isLoading={isLoading}>
        {submitTitle}
      </Button>
    </Footer>
  );
};
