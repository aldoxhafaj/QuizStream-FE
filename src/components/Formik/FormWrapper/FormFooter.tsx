import { Button } from '@quiz-stream/components/Button';
import { Container } from '@quiz-stream/layouts/container';
import { Footer } from '@quiz-stream/layouts/footer';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';

import { FormWrapperFooterProps } from './types';

export const FormFooter = ({
  buttonProps,
  footer,
  isDisabled = false,
  isLoading = false,
  enableFooterBottomPadding = false,
  onSubmit,
}: FormWrapperFooterProps) => {
  return (
    <Footer enableBottomPadding={enableFooterBottomPadding}>
      {!footer && (
        <Container paddingBottom={VerticalSpacing.S}>{footer}</Container>
      )}
      {!!buttonProps && (
        <Button
          onPress={onSubmit}
          isDisabled={isDisabled}
          isLoading={isLoading}
          {...buttonProps}
        >
          {buttonProps?.buttonTitle}
        </Button>
      )}
    </Footer>
  );
};
