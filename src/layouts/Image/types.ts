import { ResizeMode } from '@quiz-stream/layouts/types';
import { ImageName, ImageSize } from '@quiz-stream/themes/imageSize';

export type ImageProps = {
  name: ImageName;
  resizeMode?: ResizeMode;
  imageHeight?: ImageSize;
  imageWidth?: ImageSize;
  tintWhite?: boolean;
};
