import { Container } from '@quiz-stream/layouts/container';
import { Row } from '@quiz-stream/layouts/row';

import { CarouselControl } from './CarouselControl';
import { useCarousel } from './hooks';
import { CarouselProps } from './types';

export const Carousel = ({
  slides,
  duration = 5000,
  maxPageIndicators,
  customIndicators,
  customLeftControl,
  customRightControl,
  autoplay = false,
  infiniteLoop = false,
  showIndicators = true,
  disableControls = false,
  onChange,
  onSlideClick,
}: CarouselProps) => {
  const {
    slidePage,
    renderSlide,
    onNextSlide,
    onPreviousSlide,
    handleSlideClick,
  } = useCarousel({
    slides,
    duration,
    infiniteLoop,
    autoplay,
    onChange,
    onSlideClick,
  });

  return (
    <Container className="relative size-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slidePage * 100}%)` }}
      >
        {slides.map((slide) => (
          <Row
            key={slide.id}
            className="flex w-full shrink-0"
            onClick={() => handleSlideClick(slide)}
          >
            {renderSlide(slide)}
          </Row>
        ))}
      </div>

      {!disableControls && (
        <>
          <CarouselControl
            direction="left"
            onPress={onPreviousSlide}
            customControl={customLeftControl}
          />
          <CarouselControl
            direction="right"
            onPress={onNextSlide}
            customControl={customRightControl}
          />
        </>
      )}

      {showIndicators && (
        <Container className="absolute bottom-0 left-1/2 flex -translate-x-1/2 space-x-2">
          {slides.slice(0, maxPageIndicators).map((_, index) => (
            <div
              key={index}
              className={`h-1 min-w-10 cursor-pointer select-none ${index === slidePage ? 'scale-x-110 bg-white' : 'bg-gray-400 opacity-65'} rounded-sm transition-all duration-300`}
            />
          ))}
        </Container>
      )}

      {customIndicators}
    </Container>
  );
};
