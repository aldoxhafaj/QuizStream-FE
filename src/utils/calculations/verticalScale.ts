import { isNumber } from '@quiz-stream/utils/helpers';

import { HEIGHT_RATIO } from './constants';

export const verticalScale = (size: number) => {
  if (!isNumber(size)) {
    return 0;
  }

  const scaledSize = HEIGHT_RATIO * size;
  return Number(scaledSize.toFixed(2));
};
