import { MoonSVGIcon, SunSVGIcon } from '@quiz-stream/shared/svg';

export const SVGIcons = {
  moon: MoonSVGIcon,
  sun: SunSVGIcon,
};

export type IconSVGName = keyof typeof SVGIcons;
