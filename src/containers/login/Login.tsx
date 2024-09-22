import { Checkbox } from '@quiz-stream/components/Checkbox';
import { DarkModeToggler } from '@quiz-stream/components/DarkModeToggler';
import { FormWrapper, InputField } from '@quiz-stream/components/Formik';
import { Lottie } from '@quiz-stream/components/Lottie';
import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { Container } from '@quiz-stream/layouts/container';
import { Row } from '@quiz-stream/layouts/row';
import { Text } from '@quiz-stream/layouts/typography';
import { FontSize, TextColor } from '@quiz-stream/layouts/typography/types';
import {
  HorizontalSpacing,
  VerticalSpacing,
} from '@quiz-stream/themes/spacing';
import { scale } from '@quiz-stream/utils/calculations';

import { useLogin } from './hooks';
import { FlexTextBlock } from '@quiz-stream/components/FlexTextBlock';

const LOTTIE_ANIMATION_SIZE = scale(600);
export const Login = () => {
  const { formatMessage } = useIntl();
  const { formik } = useLogin();

  return (
    <Row className="size-full bg-screen" padding={HorizontalSpacing.M}>
      <Row className="w-3/4 rounded-x2 bg-container shadow-x3 sm:w-11/12 md:w-11/12">
        <Row flexGrow={1} padding={HorizontalSpacing.M}>
          <Lottie animation="questionMark" size={LOTTIE_ANIMATION_SIZE} />
        </Row>
        <Row flexGrow={1} padding={HorizontalSpacing.XXL}>
          <Container flexGrow={1} padding={HorizontalSpacing.XL}>
            <Row
              justifyContent="space-between"
              paddingBottom={VerticalSpacing.XS}
            >
              <Text fontSize={FontSize.H2}>
                {formatMessage({
                  id: 'quizStreamApp.login.title',
                  defaultMessage: 'Login!',
                })}
              </Text>
              <DarkModeToggler />
            </Row>

            <FlexTextBlock
              paddingBottom={VerticalSpacing.M}
              primaryText={formatMessage({
                id: 'quizStreamApp.login.subtitle',
                defaultMessage: `Don't have an account?`,
              })}
              secondaryText={formatMessage({
                id: 'quizStreamApp.login.signup',
                defaultMessage: 'Sign up',
              })}
              primaryTextColor={TextColor.LIGHT}
              isSecondaryTextUnderlined
            />

            <FormWrapper
              formik={formik}
              buttonProps={{
                buttonTitle: formatMessage({
                  id: 'quizStreamApp.login.button',
                  defaultMessage: 'Login',
                }),
                color: 'secondary',
                radius: 'sm',
              }}
            >
              <InputField
                name="email"
                type="text"
                label="Email"
                size="sm"
                radius="sm"
              />

              <InputField
                name="password"
                type="password"
                label="Enter your password"
                size="sm"
                radius="sm"
              />
              <Container paddingTop={VerticalSpacing.XS}>
                <Checkbox radius="sm">
                  <FlexTextBlock
                    primaryText={formatMessage({
                      id: 'quizStreamApp.login.confirmation',
                      defaultMessage: 'I agree to the',
                    })}
                    secondaryText={formatMessage({
                      id: 'quizStreamApp.login.terms',
                      defaultMessage: 'Terms&Conditions',
                    })}
                    isSecondaryTextUnderlined
                  />
                </Checkbox>
              </Container>
            </FormWrapper>
          </Container>
        </Row>
      </Row>
    </Row>
  );
};
