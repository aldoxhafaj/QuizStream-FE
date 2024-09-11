import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'bordered',
        'faded',
        'flat',
        'ghost',
        'light',
        'shadow',
        'solid',
      ],
      control: { type: 'select' },
    },
    radius: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    spinnerPlacement: {
      options: ['start', 'end'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const ButtonComponent: Story = {
  render: (args) => <Button {...args}>Continue</Button>,
  args: {
    color: 'default',
    size: 'lg',
    variant: 'flat',
    radius: 'sm',
    spinnerPlacement: 'start',
    isLoading: false,
    isDisabled: false,
    isIconOnly: false,
  },
};
