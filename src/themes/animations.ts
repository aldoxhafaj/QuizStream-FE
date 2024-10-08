import {
  checklist,
  job,
  questionMark,
  questionMarkTriplon,
} from '@quiz-stream/shared/lottie-animations';

export const LottieAnimations = {
  questionMark,
  questionMarkTriplon,
  job,
  checklist,
};

export type Animation = keyof typeof LottieAnimations;
