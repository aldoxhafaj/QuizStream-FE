import { Slide } from '@quiz-stream/components/Carousel/types';
import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { useMemo } from 'react';

export const useLogin = () => {
  const { formatMessage } = useIntl();
  const onLoginSubmit = () => {
    //TODO handle login
  };

  const carouselSlides: Slide[] = useMemo(
    () => [
      {
        id: 1,
        title: formatMessage({
          id: 'quizStreamApp.carousel.slideOneTitle',
          defaultMessage: 'Ready to test your limits?',
        }),
        subtitle: formatMessage({
          id: 'quizStreamApp.carousel.slideOnesubtitle',
          defaultMessage:
            'Challenge your mind with questions that will push your knowledge to the edge.',
        }),
        animation: 'questionMark',
      },
      {
        id: 2,
        title: formatMessage({
          id: 'quizStreamApp.carousel.slideTwoTitle',
          defaultMessage: 'Think Fast, Score Big!',
        }),
        subtitle: formatMessage({
          id: 'quizStreamApp.carousel.slideTwosubtitle',
          defaultMessage: `Time is ticking—prove you're the quickest quiz master and climb the leaderboard.`,
        }),
        animation: 'questionMark',
      },
      {
        id: 3,
        title: formatMessage({
          id: 'quizStreamApp.carousel.slideThreeTitle',
          defaultMessage: "Unlock Your Brain's Potential!",
        }),
        subtitle: formatMessage({
          id: 'quizStreamApp.carousel.slideThreesubtitle',
          defaultMessage:
            'Explore fun, challenging quizzes that sharpen your skills and ignite curiosity.',
        }),
        animation: 'questionMark',
      },
      {
        id: 4,
        title: formatMessage({
          id: 'quizStreamApp.carousel.slideThreeTitle',
          defaultMessage: 'Can You Beat the Best?',
        }),
        subtitle: formatMessage({
          id: 'quizStreamApp.carousel.slideThreesubtitle',
          defaultMessage:
            'Join a competitive quiz experience and see if you have what it takes to be a champion.',
        }),
        animation: 'questionMark',
      },
    ],
    [formatMessage],
  );

  return { slides: carouselSlides, onLoginSubmit };
};
