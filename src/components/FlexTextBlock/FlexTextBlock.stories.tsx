import { FontSize, TextColor } from '@quiz-stream/layouts/typography/types';
import { HorizontalSpacing } from '@quiz-stream/themes/spacing';
import type { Meta, StoryObj } from '@storybook/react';

import { FlexTextBlock } from './FlexTextBlock';

const meta: Meta<typeof FlexTextBlock> = {
  component: FlexTextBlock,
  argTypes: {
    fontSize: {
      options: [
        FontSize.H1,
        FontSize.H2,
        FontSize.H3,
        FontSize.H4,
        FontSize.H5,
        FontSize.H6,
      ],
      control: { type: 'select' },
    },
    primaryTextColor: {
      options: [TextColor.BASE, TextColor.LIGHT, TextColor.PURPLE],
      control: { type: 'select' },
    },
    secondaryTextColor: {
      options: [TextColor.BASE, TextColor.LIGHT, TextColor.PURPLE],
      control: { type: 'select' },
    },
    textsGap: {
      options: [HorizontalSpacing.L, HorizontalSpacing.M, HorizontalSpacing.S],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FlexTextBlock>;
export const FlexTextBlockComponent: Story = {
  render: (args) => <FlexTextBlock {...args} />,
  args: {
    primaryText: 'I agree to the',
    secondaryText: 'Terms&Conditions',
    primaryTextColor: TextColor.BASE,
    secondaryTextColor: TextColor.PURPLE,
    fontSize: FontSize.H6,
    textsGap: HorizontalSpacing.S,
    isSecondaryTextUnderlined: true,
  },
};
