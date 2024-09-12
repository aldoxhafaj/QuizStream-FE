import { scale } from '@quiz-stream/utils/calculations/scale';

const Images = {};

export type ImageName = keyof typeof Images;

export const getImage = (imageName: ImageName) => Images[imageName];

enum ImageSizeEnum {
  /**
   * 8
   */
  X_S = 8,
  /**
   * 10
   */
  S = 10,
  /**
   * 14
   */
  S_M = 14,
  /**
   * 16
   */
  M = 16,
  /**
   * 24
   */
  L = 24,
  /**
   * 36
   */
  XL = 36,
  /**
   * 50
   */
  XL1 = 50,
  /**
   * 100
   */
  XL2 = 100,
  /**
   * 150
   */
  XL3 = 150,
  /**
   * 200
   */
  XL4 = 200,
  /**
   * 250
   */
  XL5 = 250,
  /**
   * 300
   */
  XL6 = 300,
  /**
   * 350
   */
  XL7 = 350,
  /**
   * 400
   */
  XL8 = 400,
}

export enum ImageSize {
  /**
   * 8
   */
  X_S = scale(ImageSizeEnum.X_S),
  /**
   * 10
   */
  S = scale(ImageSizeEnum.S),
  /**
   * 14
   */
  S_M = scale(ImageSizeEnum.S_M),
  /**
   * 16
   */
  M = scale(ImageSizeEnum.M),
  /**
   * 24
   */
  L = scale(ImageSizeEnum.L),
  /**
   * 36
   */
  XL = scale(ImageSizeEnum.XL),
  /**
   * 50
   */
  XL1 = scale(ImageSizeEnum.XL1),
  /**
   * 100
   */
  XL2 = scale(ImageSizeEnum.XL2),
  /**
   * 150
   */
  XL3 = scale(ImageSizeEnum.XL3),
  /**
   * 200
   */
  XL4 = scale(ImageSizeEnum.XL4),
  /**
   * 250
   */
  XL5 = scale(ImageSizeEnum.XL5),
  /**
   * 300
   */
  XL6 = scale(ImageSizeEnum.XL6),
  /**
   * 350
   */
  XL7 = scale(ImageSizeEnum.XL7),
  /**
   * 400
   */
  XL8 = scale(ImageSizeEnum.XL8),
}
