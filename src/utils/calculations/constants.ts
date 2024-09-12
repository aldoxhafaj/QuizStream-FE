const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

export const WIDTH = screenWidth;
export const HEIGHT = screenHeight;

export const [SHORT_DIMENSION, LONG_DIMENSION] =
  screenWidth < screenHeight ? [WIDTH, HEIGHT] : [HEIGHT, WIDTH];

export const GUIDELINE_BASE_WIDTH = 1920;
export const GUIDELINE_BASE_HEIGHT = 1080;

export const WIDTH_RATIO = SHORT_DIMENSION / GUIDELINE_BASE_WIDTH;
export const HEIGHT_RATIO = LONG_DIMENSION / GUIDELINE_BASE_HEIGHT;
