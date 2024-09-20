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
            <Row
              justifyContent="flex-start"
              gap={HorizontalSpacing.S}
              paddingBottom={VerticalSpacing.M}
            >
              <Text fontSize={FontSize.H6} color={TextColor.LIGHT}>
                {formatMessage({
                  id: 'quizStreamApp.login.subtitle',
                  defaultMessage: `Don't have an account?`,
                })}
              </Text>
              <Text
                className="cursor-pointer select-none text-purple hover:scale-105 active:opacity-85"
                fontSize={FontSize.H6}
                underline
              >
                {formatMessage({
                  id: 'quizStreamApp.login.signup',
                  defaultMessage: 'Sign up',
                })}
              </Text>
            </Row>

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
                  <Row gap={HorizontalSpacing.S}>
                    <Text fontSize={FontSize.H6}>
                      {formatMessage({
                        id: 'quizStreamApp.login.confirmation',
                        defaultMessage: 'I agree to the',
                      })}
                    </Text>
                    <Text
                      className="select-none text-purple"
                      fontSize={FontSize.H6}
                      underline
                    >
                      {formatMessage({
                        id: 'quizStreamApp.login.terms',
                        defaultMessage: 'Terms&Conditions',
                      })}
                    </Text>
                  </Row>
                </Checkbox>
              </Container>
            </FormWrapper>
          </Container>
        </Row>
      </Row>
    </Row>
  );
};
