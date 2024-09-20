import { useFormWrapper } from '@quiz-stream/components/Formik/hooks';
import { Container } from '@quiz-stream/layouts/container';

import { FormFooter } from './FormFooter';
import { FormLayoutProps } from './types';

export const FormLayout = ({
  children,
  footer,
  buttonProps,
  inputsGap,
  isDisabled = false,
  isLoading = false,
  skipDirtyCheck = false,
  enableFooterBottomPadding = false,
}: FormLayoutProps) => {
  const { isSubmitDisabled, onSubmit } = useFormWrapper({
    isDisabled,
    isLoading,
    skipDirtyCheck,
  });

  return (
    <Container className="size-full">
      <form>
        <Container className="flex size-full flex-col" gap={inputsGap}>
          {children}
        </Container>
      </form>

      {(!!buttonProps || !!footer) && (
        <FormFooter
          buttonProps={buttonProps}
          footer={footer}
          onSubmit={onSubmit}
          isDisabled={isSubmitDisabled}
          isLoading={isLoading}
          enableFooterBottomPadding={enableFooterBottomPadding}
        />
      )}
    </Container>
  );
};
