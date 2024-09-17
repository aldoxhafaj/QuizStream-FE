import { LottieAnimations } from '@quiz-stream/themes/animations';
import LottieComponent from 'react-lottie-player';

import { LottieComponentProps } from './types';

const FULL_SCREEN = '100%';
const PRESERVE_RATIO = 'xMidYMid slice';
export const Lottie = ({
  animation,
  loop = false,
  play = true,
  size = FULL_SCREEN,
}: LottieComponentProps) => {
  return (
    <LottieComponent
      loop={loop}
      animationData={LottieAnimations[animation]}
      play={play}
      rendererSettings={{
        preserveAspectRatio: PRESERVE_RATIO,
      }}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
