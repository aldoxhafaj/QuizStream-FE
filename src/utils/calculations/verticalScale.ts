import { isNumber } from '@quiz-stream/utils/helpers';

import { HEIGHT_RATIO } from './constants';

//TODO create tests for all of this
export const verticalScale = (size: number) => {
  if (!isNumber(size)) {
    return 0;
  }

  return HEIGHT_RATIO * size;
};
