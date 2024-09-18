import type { Meta, StoryObj } from '@storybook/react';

import { DarkModeToggler } from './DarkModeToggler';

const meta: Meta<typeof DarkModeToggler> = {
  component: DarkModeToggler,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DarkModeToggler>;
export const DarkModeToggle: Story = {
  render: () => <DarkModeToggler />,
};
