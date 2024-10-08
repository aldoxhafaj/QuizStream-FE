import {
  ChevronLeftSVGIcon,
  ChevronRightSVGIcon,
  MoonSVGIcon,
  SunSVGIcon,
} from '@quiz-stream/shared/svg';

export const SVGIcons = {
  moon: MoonSVGIcon,
  sun: SunSVGIcon,
  chevronLeft: ChevronLeftSVGIcon,
  chevronRight: ChevronRightSVGIcon,
};

export type IconSVGName = keyof typeof SVGIcons;
