import { Animation } from '@quiz-stream/themes/animations';
import { LottieProps } from 'react-lottie';

export type LottieComponentProps = Pick<
  LottieProps,
  'isStopped' | 'isPaused' | 'isClickToPauseDisabled'
> & {
  loop?: number | boolean;
  autoplay?: boolean;
  animation: Animation;
  size?: string | number;
};
