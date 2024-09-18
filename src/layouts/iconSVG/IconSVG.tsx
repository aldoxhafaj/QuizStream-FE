import { SVGIcons } from '@quiz-stream/themes/svgIcons';

import { IconSVGProps, SVGColor } from './types';

export const IconSVG = ({
  name,
  width,
  height,
  color = SVGColor.WHITE,
}: IconSVGProps) => {
  const Icon = SVGIcons[name];

  return <Icon width={width} height={height} color={color} />;
};
