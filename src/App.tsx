import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { Container } from '@quiz-stream/layouts/container';
import { Text } from '@quiz-stream/layouts/typography';

export const App = () => {
  const { formatMessage } = useIntl();

  return (
    <Container className="size-full bg-screen">
      <Text className="text-lg text-red-500">
        {formatMessage({
          id: 'quizStreamApp.title',
          defaultMessage: 'Hello Vite!',
        })}
      </Text>
    </Container>
  );
};
