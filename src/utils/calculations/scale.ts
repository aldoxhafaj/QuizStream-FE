import { isNumber } from '@quiz-stream/utils/helpers';

import { GUIDELINE_BASE_WIDTH, SHORT_DIMENSION } from './constants';

export const scale = (size: number) => {
  if (!isNumber(size)) {
    return 0;
  }

  const scaledSize = (SHORT_DIMENSION / GUIDELINE_BASE_WIDTH) * size;
  return Number(scaledSize.toFixed(2));
};
