import {
  Slide,
  UseCarouselProps,
} from '@quiz-stream/components/Carousel/types';
import { Lottie } from '@quiz-stream/components/Lottie';
import { Column } from '@quiz-stream/layouts/column';
import { Text } from '@quiz-stream/layouts/typography';
import { FontSize } from '@quiz-stream/layouts/typography/types';
import { scale } from '@quiz-stream/utils/calculations';
import { useEffect, useRef, useState } from 'react';

const LOTTIE_ANIMATION_SIZE = scale(550);
export const useCarousel = ({
  slides,
  duration,
  infiniteLoop,
  autoplay,
  onChange,
  onSlideClick,
}: UseCarouselProps) => {
  const [slidePage, setSlidePage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const onNextSlide = () => {
    setSlidePage((prevPage) =>
      infiniteLoop
        ? (prevPage + 1) % slides.length
        : Math.min(prevPage + 1, slides.length - 1),
    );
  };

  const onPreviousSlide = () => {
    setSlidePage((prevPage) =>
      infiniteLoop
        ? (prevPage - 1 + slides.length) % slides.length
        : Math.max(prevPage - 1, 0),
    );
  };

  const handleSlideClick = (item: Slide) => {
    onSlideClick?.(item);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        onNextSlide();
      }, duration);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, duration, slides.length]);

  useEffect(() => {
    if (onChange) {
      onChange(slides[slidePage]);
    }
  }, [slidePage, onChange, slides]);

  const renderSlide = (slide: Slide) => {
    return slide.animation ? (
      <Column className="w-4/5" justifyContent="center" alignItems="center">
        <Text className="font-montserrat" fontSize={FontSize.H3}>
          {slide.title}
        </Text>
        <Text className="font-poppins" fontSize={FontSize.H6}>
          {slide.subtitle}
        </Text>

        <Lottie animation={slide.animation} size={LOTTIE_ANIMATION_SIZE} />
      </Column>
    ) : (
      <img //TODO this should use Image layout
        src={slide.image}
        alt={`Slide ${slide.id}`}
        className="h-auto w-full"
      />
    );
  };

  return {
    slidePage,
    handleSlideClick,
    onNextSlide,
    onPreviousSlide,
    renderSlide,
  };
};
