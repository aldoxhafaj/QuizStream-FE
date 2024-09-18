import { scale } from '@quiz-stream/utils/calculations';
import type { Meta, StoryObj } from '@storybook/react';

import { Lottie } from './Lottie';

const LOTTIE_ANIMATION_SIZE = scale(600);
const meta: Meta<typeof Lottie> = {
  component: Lottie,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    size: {
      options: [LOTTIE_ANIMATION_SIZE, 'full_screen'],
      control: { type: 'inline-radio' },
      mapping: {
        full_screen: '100vh',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Lottie>;
export const LottieComponent: Story = {
  render: (args) => <Lottie {...args} />,
  args: {
    size: LOTTIE_ANIMATION_SIZE,
    animation: 'questionMark',
    loop: false,
    play: true,
  },
};
