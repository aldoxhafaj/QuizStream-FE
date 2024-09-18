import { IconSize } from '@quiz-stream/themes/iconSize';
import { IconSVGName } from '@quiz-stream/themes/svgIcons';

export type IconSVGProps = {
  name: IconSVGName;
  width?: IconSize;
  height?: IconSize;
  color?: SVGColor;
};

export enum SVGColor {
  WHITE = 'text-white',
  PURPLE = 'text-purple',
  DANGER = 'text-danger',
  PENDING = 'text-pending',
  GRASS = 'text-grass',
}
