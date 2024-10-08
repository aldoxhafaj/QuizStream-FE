import { ReactNode } from 'react';

export type CarouselProps<T> = {
  slides: T[];
  renderItem: (item: T, index: number, slidePage: number) => ReactNode;
  customRightControl?: ReactNode;
  customLeftControl?: ReactNode;
  customIndicator?: ReactNode;
  duration?: number;
  autoplay?: boolean;
  infiniteLoop?: boolean;
  swipeable?: boolean; //TODO try to implement this
  showIndicators?: boolean;
  disableControls?: boolean;
  onSlideChange?: (item: T) => void;
  onSlideClick?: (item: T) => void;
};

export type CarouselControlProps = {
  direction?: 'left' | 'right';
  customControl?: ReactNode;
  onPress?: () => void;
};

export type UseCarouselProps<T> = Pick<
  CarouselProps<T>,
  'slides' | 'infiniteLoop' | 'duration' | 'autoplay' | 'onSlideChange'
>;

export type SlideIndicatorProps = {
  slidePage: number;
  slidesCount: number;
  customIndicator?: ReactNode;
  onIndicatorClick: (index: number) => void;
};

export type IndicatorProps = {
  isActive: boolean;
};
