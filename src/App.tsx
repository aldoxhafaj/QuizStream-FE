import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { Text } from '@quiz-stream/layouts/typography';

export const App = () => {
  const { formatMessage } = useIntl();

  return (
    <Text className="text-lg text-red-500">
      {formatMessage({
        id: 'quizStreamApp.title',
        defaultMessage: 'Hello Vite!',
      })}
    </Text>
  );
};
