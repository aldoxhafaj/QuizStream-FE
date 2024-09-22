import { LayoutInsetProps } from '@quiz-stream/layouts/types';
import { FontSize, TextColor } from '@quiz-stream/layouts/typography/types';
import { HorizontalSpacing } from '@quiz-stream/themes/spacing';

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
