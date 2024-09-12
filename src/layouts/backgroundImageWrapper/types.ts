import { ResizeMode } from '@quiz-stream/layouts/types';
import { ImageName, ImageSize } from '@quiz-stream/themes/imageSize';
import { ReactNode } from 'react';

export type BackgroundImageWrapperProps = {
  name: ImageName;
  children: ReactNode;
  resizeMode?: ResizeMode;
  imageHeight?: ImageSize;
  imageWidth?: ImageSize;
};
