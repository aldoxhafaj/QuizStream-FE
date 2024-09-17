import { Button } from '@quiz-stream/components/Button';
import { Input } from '@quiz-stream/components/Input';
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

const LOTTIE_ANIMATION_SIZE = scale(600);
export const Login = () => {
  const { formatMessage } = useIntl();
  return (
    <Row className="size-full bg-screen" padding={HorizontalSpacing.M}>
      <Row className="w-3/4 rounded-x2 bg-container shadow-x3">
        <Row flexGrow={1} padding={HorizontalSpacing.M}>
          <Lottie animation="questionMark" size={LOTTIE_ANIMATION_SIZE} />
        </Row>
        <Row flexGrow={1} padding={HorizontalSpacing.XXL}>
          <Container flexGrow={1} padding={HorizontalSpacing.XL}>
            <Container paddingBottom={VerticalSpacing.XS}>
              <Text fontSize={FontSize.H2}>
                {formatMessage({
                  id: 'quizStreamApp.login.title',
                  defaultMessage: 'Login!',
                })}
              </Text>
            </Container>
            <Row
              justifyContent="flex-start"
              gap={HorizontalSpacing.S}
              paddingBottom={VerticalSpacing.L}
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
            {/* TODO create form wrapper with formik to validate input*/}
            <form>
              <Container paddingBottom={VerticalSpacing.M}>
                <Input type="text" label="Email" size="sm" radius="sm" />
              </Container>

              <Container paddingBottom={VerticalSpacing.M}>
                <Input
                  type="password"
                  label="Enter your password"
                  size="sm"
                  radius="sm"
                />
              </Container>
            </form>
            <Container paddingTop={VerticalSpacing.L}>
              <Button color="secondary" radius="sm" fullWidth>
                Login
              </Button>
            </Container>
          </Container>
        </Row>
      </Row>
    </Row>
  );
};
