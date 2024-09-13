import { isNumber } from '@quiz-stream/utils/helpers';

import { WIDTH_RATIO } from './constants';

export const horizontalScale = (size: number) => {
  if (!isNumber(size)) {
    return 0;
  }

  const scaledSize = WIDTH_RATIO * size;
  return Number(scaledSize.toFixed(2));
};
