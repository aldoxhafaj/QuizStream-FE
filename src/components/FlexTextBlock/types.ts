import { HorizontalSpacing } from '@quiz-stream/themes/spacing';
import { FontSize, TextColor } from '@quiz-stream/layouts/typography/types';
import { LayoutInsetProps } from '@quiz-stream/layouts/types';

export type FlexTextBlockProps = {
  primaryText: string;
  secondaryText: string;
  textsGap?: HorizontalSpacing;
  primaryTextColor?: TextColor;
  secondaryTextColor?: TextColor;
  isSecondaryTextUnderlined?: boolean;
  isCentered?: boolean;
  fontSize?: FontSize;
  onSecondaryTextClick?: () => void; //TODO remove optional questionMark this later
} & Pick<LayoutInsetProps, 'paddingTop' | 'paddingBottom'>;
