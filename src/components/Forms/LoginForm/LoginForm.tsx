import { Checkbox } from '@quiz-stream/components/Checkbox';
import { FlexTextBlock } from '@quiz-stream/components/FlexTextBlock';
import { FormWrapper, InputField } from '@quiz-stream/components/Formik';
import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { Container } from '@quiz-stream/layouts/container';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';

import { useLoginForm } from './hooks';
import { LoginFormProps } from './types';

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { formatMessage } = useIntl();
  const { formik } = useLoginForm({ onSubmit });

  return (
    <FormWrapper
      formik={formik}
      buttonProps={{
        buttonTitle: formatMessage({
          id: 'quizStreamApp.loginForm.button',
          defaultMessage: 'Login',
        }),
        color: 'secondary',
        radius: 'sm',
      }}
    >
      <InputField
        name="email"
        type="text"
        label={formatMessage({
          id: 'quizStreamApp.loginForm.email',
          defaultMessage: 'Email',
        })}
        size="sm"
        radius="sm"
      />

      <InputField
        name="password"
        type="password"
        label={formatMessage({
          id: 'quizStreamApp.loginForm.password',
          defaultMessage: 'Enter your password',
        })}
        size="sm"
        radius="sm"
      />
      <Container paddingTop={VerticalSpacing.XS}>
        <Checkbox radius="sm">
          <FlexTextBlock
            primaryText={formatMessage({
              id: 'quizStreamApp.loginForm.confirmation',
              defaultMessage: 'I agree to the',
            })}
            secondaryText={formatMessage({
              id: 'quizStreamApp.loginForm.terms',
              defaultMessage: 'Terms&Conditions',
            })}
            isSecondaryTextUnderlined
          />
        </Checkbox>
      </Container>
    </FormWrapper>
  );
};
