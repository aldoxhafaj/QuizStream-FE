import { Lottie } from '@quiz-stream/components/Lottie';
import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { Container } from '@quiz-stream/layouts/container';
import { Row } from '@quiz-stream/layouts/row';
import { Text } from '@quiz-stream/layouts/typography';
import { HorizontalSpacing } from '@quiz-stream/themes/spacing';
import { scale } from '@quiz-stream/utils/calculations';

const LOTTIE_ANIMATION_SIZE = scale(400);
export const Login = () => {
  const { formatMessage } = useIntl();
  return (
    <Row className="size-full bg-screen" padding={HorizontalSpacing.M}>
      <Row className="w-3/4 bg-container">
        <Row flexGrow={1} padding={HorizontalSpacing.M}>
          <Lottie animation="questionMark" size={LOTTIE_ANIMATION_SIZE} />
        </Row>
        <Container flexGrow={1} padding={HorizontalSpacing.XL}>
          <Text>
            {formatMessage({
              id: 'quizStreamApp.login.title',
              defaultMessage: 'Hello Vite!',
            })}
          </Text>
        </Container>
      </Row>
    </Row>
  );
};
