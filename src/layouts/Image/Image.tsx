import { getImage, ImageSize } from '@quiz-stream/themes/imageSize';
import { useMemo } from 'react';

import { ImageProps } from './types';

const APPLY_WHITE_FILTER = 'invert(100%)';
export const Image = ({
  name,
  resizeMode = 'cover',
  imageHeight = ImageSize.S,
  imageWidth = ImageSize.S,
  tintWhite,
}: ImageProps) => {
  const memoizedImage = useMemo(() => getImage(name), [name]);
  const convertToWhite = useMemo(
    () => ({
      filter: tintWhite ? APPLY_WHITE_FILTER : undefined,
    }),
    [tintWhite],
  );

  return (
    <img
      src={memoizedImage}
      style={{
        height: imageHeight,
        width: imageWidth,
        objectFit: resizeMode,
        ...convertToWhite,
      }}
    />
  );
};
