import { Container } from '@quiz-stream/layouts/container';

import { Indicator } from './Indicator';
import { SlideIndicatorProps } from './types';

export const SlideIndicators = ({
  slidePage,
  slidesCount,
  customIndicator,
  onIndicatorClick,
}: SlideIndicatorProps) => {
  return (
    <Container className="absolute bottom-0 left-1/2 flex -translate-x-1/2 space-x-2">
      {Array.from({ length: slidesCount }).map((_, slideIndex) => (
        <Container
          key={slideIndex}
          onClick={() => onIndicatorClick(slideIndex)}
        >
          {!!customIndicator ? (
            customIndicator
          ) : (
            <Indicator isActive={slideIndex === slidePage} />
          )}
        </Container>
      ))}
    </Container>
  );
};
