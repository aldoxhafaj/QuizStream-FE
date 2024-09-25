import { Lottie } from '@quiz-stream/components/Lottie';
import { CarouselSlide } from '@quiz-stream/containers/Login/types';
import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { Column } from '@quiz-stream/layouts/column';
import { Container } from '@quiz-stream/layouts/container';
import { Text } from '@quiz-stream/layouts/typography';
import { FontSize, TextColor } from '@quiz-stream/layouts/typography/types';
import { VerticalSpacing } from '@quiz-stream/themes/spacing';
import { scale } from '@quiz-stream/utils/calculations';
import { useMemo } from 'react';

const LOTTIE_ANIMATION_SIZE = scale(500);
export const useLoginCarousel = () => {
  const { formatMessage } = useIntl();

  const carouselSlides: CarouselSlide[] = useMemo(
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
        animation: 'questionMarkTriplon',
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
        animation: 'job',
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
        animation: 'checklist',
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const renderItem = (
    slide: CarouselSlide,
    slideIndex: number,
    slidePage: number,
  ) => (
    <Column
      flexGrow={1}
      paddingBottom={VerticalSpacing.S}
      justifyContent="center"
      alignItems="center"
    >
      <Text className="font-montserrat" fontSize={FontSize.H3} bold>
        {slide.title}
      </Text>
      <Container paddingTop={VerticalSpacing.XS}>
        <Text
          className="font-poppins"
          fontSize={FontSize.H6}
          color={TextColor.LIGHT}
        >
          {slide.subtitle}
        </Text>
      </Container>

      <Lottie
        animation={slide.animation}
        size={LOTTIE_ANIMATION_SIZE}
        play={slideIndex === slidePage}
      />
    </Column>
  );

  return {
    slides: carouselSlides,
    renderItem,
  };
};
