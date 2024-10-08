import { Container } from '@quiz-stream/layouts/container';
import { Row } from '@quiz-stream/layouts/row';

import { CarouselControl } from './CarouselControl';
import { useCarousel } from './hooks';
import { SlideIndicators } from './SlideIndicators';
import { CarouselProps } from './types';

const SLIDE_AUTOPLAY_DURATION = 5000;
export const Carousel = <T,>({
  slides,
  renderItem,
  customIndicator,
  customLeftControl,
  customRightControl,
  duration = SLIDE_AUTOPLAY_DURATION,
  autoplay = false,
  infiniteLoop = false,
  showIndicators = true,
  disableControls = false,
  onSlideClick,
  onSlideChange,
}: CarouselProps<T>) => {
  const { slidePage, onNextSlide, onPreviousSlide, onIndicatorClick } =
    useCarousel({
      slides,
      duration,
      infiniteLoop,
      autoplay,
      onSlideChange,
    });

  return (
    <Container className="relative size-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slidePage * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Row
            key={index}
            className="flex w-full shrink-0"
            onClick={() => onSlideClick?.(slide)}
          >
            {renderItem(slide, index, slidePage)}
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
        <SlideIndicators
          slidePage={slidePage}
          slidesCount={slides.length}
          customIndicator={customIndicator}
          onIndicatorClick={onIndicatorClick}
        />
      )}
    </Container>
  );
};
