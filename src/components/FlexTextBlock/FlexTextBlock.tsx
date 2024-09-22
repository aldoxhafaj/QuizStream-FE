import { Row } from '@quiz-stream/layouts/row';
import { Text } from '@quiz-stream/layouts/typography';
import { FlexTextBlockProps } from './types';
import { HorizontalSpacing } from '@quiz-stream/themes/spacing';
import { FontSize, TextColor } from '@quiz-stream/layouts/typography/types';

export const FlexTextBlock = ({
  primaryText,
  secondaryText,
  textsGap = HorizontalSpacing.S,
  primaryTextColor = TextColor.BASE,
  secondaryTextColor = TextColor.PURPLE,
  isSecondaryTextUnderlined = false,
  fontSize = FontSize.H6,
  isCentered = false,
  paddingTop,
  paddingBottom,
  onSecondaryTextClick,
}: FlexTextBlockProps) => {
  return (
    <Row
      justifyContent={isCentered ? 'center' : 'flex-start'}
      gap={textsGap}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Text fontSize={fontSize} color={primaryTextColor}>
        {primaryText}
      </Text>
      <Text
        className="cursor-pointer select-none hover:scale-105 active:opacity-85"
        fontSize={fontSize}
        color={secondaryTextColor}
        underline={isSecondaryTextUnderlined}
        onClick={onSecondaryTextClick}
      >
        {secondaryText}
      </Text>
    </Row>
  );
};
