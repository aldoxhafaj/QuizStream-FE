import { getImage } from '@quiz-stream/themes/imageSize';
import { useMemo } from 'react';

import { BackgroundImageWrapperProps } from './types';

const FULL_SCREEN = '100%';
export const BackgroundImageWrapper = ({
  name,
  children,
  imageHeight,
  imageWidth,
  resizeMode = 'cover',
}: BackgroundImageWrapperProps) => {
  const memoizedImage = useMemo(() => getImage(name), [name]);

  return (
    <div
      style={{
        height: imageHeight || FULL_SCREEN,
        width: imageWidth || FULL_SCREEN,
      }}
    >
      <img
        className="relative size-full"
        src={memoizedImage}
        style={{
          objectFit: resizeMode,
        }}
      />
      <div className="absolute inset-0 z-10">{children}</div>
    </div>
  );
};
