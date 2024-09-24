import { Animation } from '@quiz-stream/themes/animations';
import { ImageName } from '@quiz-stream/themes/imageSize';
import { ReactNode } from 'react';

export type Slide = {
  id: number;
  title?: string;
  subtitle?: string;
  animation?: Animation;
  image?: ImageName;
};

//TODO render item function so i can render whatever i want
export type CarouselProps = {
  slides: Slide[];
  customRightControl?: ReactNode;
  customLeftControl?: ReactNode;
  customIndicators?: ReactNode;
  duration?: number;
  maxPageIndicators?: number;
  autoplay?: boolean;
  infiniteLoop?: boolean;
  swipeable?: boolean; //TODO try to implement this
  showIndicators?: boolean;
  disableControls?: boolean;
  onChange?: (item: Slide) => void;
  onSlideClick?: (item: Slide) => void;
};

export type CarouselControlProps = {
  direction?: 'left' | 'right';
  customControl?: ReactNode;
  onPress?: () => void;
};

export type UseCarouselProps = Pick<
  CarouselProps,
  | 'slides'
  | 'infiniteLoop'
  | 'duration'
  | 'autoplay'
  | 'onSlideClick'
  | 'onChange'
>;
