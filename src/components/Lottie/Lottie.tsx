import { LottieAnimations } from '@quiz-stream/themes/animations';
import LottieComponent from 'react-lottie';

import { LottieComponentProps } from './types';

//TODO test all this props
const FULL_SCREEN = '100%';
const PRESERVE_RATIO = 'xMidYMid slice';
export const Lottie = ({
  animation,
  loop = false,
  autoplay = true,
  size = FULL_SCREEN,
  isStopped = false,
  isPaused = false,
  isClickToPauseDisabled = false,
}: LottieComponentProps) => {
  return (
    <LottieComponent
      height={size}
      width={size}
      isStopped={isStopped}
      isPaused={isPaused}
      isClickToPauseDisabled={isClickToPauseDisabled}
      options={{
        loop,
        autoplay,
        animationData: LottieAnimations[animation],
        rendererSettings: {
          preserveAspectRatio: PRESERVE_RATIO,
        },
      }}
    />
  );
};
