import { UseCarouselProps } from '@quiz-stream/components/Carousel/types';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useCarousel = <T,>({
  slides,
  duration,
  infiniteLoop,
  autoplay,
  onSlideChange,
}: UseCarouselProps<T>) => {
  const [slidePage, setSlidePage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const onNextSlide = useCallback(() => {
    if (infiniteLoop) {
      return setSlidePage((prevPage) => (prevPage + 1) % slides.length);
    }

    setSlidePage((prevPage) => Math.min(prevPage + 1, slides.length - 1));
  }, [infiniteLoop, slides]);

  const onPreviousSlide = useCallback(() => {
    setSlidePage((prevPage) => Math.max(prevPage - 1, 0));
  }, []);

  const onIndicatorClick = (slideIndex: number) => {
    setSlidePage(slideIndex);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(onNextSlide, duration);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, duration, slides.length, onNextSlide]);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(slides[slidePage]);
    }
  }, [slidePage, slides, onSlideChange]);

  return {
    slidePage,
    onIndicatorClick,
    onNextSlide,
    onPreviousSlide,
  };
};
