import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    label: {
      options: ['Email', 'Password', 'none'],
      control: { type: 'inline-radio' },
      mapping: {
        none: undefined,
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
    variant: {
      options: ['bordered', 'faded', 'flat', 'underlined'],
      control: { type: 'select' },
    },
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
    type: {
      options: ['text', 'password', 'file'],
      control: { type: 'radio' },
    },
    labelPlacement: {
      options: ['inside', 'outside-left', 'outside'],
      control: { type: 'inline-radio' },
    },
    placeholder: {
      options: ['your-email@example.com', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    value: {
      options: ['aldo@gmail.com', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    errorMessage: {
      options: ['This input is required!', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;
export const InputComponent: Story = {
  render: (args) => <Input {...args} />,
  args: {
    label: 'Email',
    size: 'md',
    variant: 'flat',
    color: 'default',
    type: 'text',
    labelPlacement: 'inside',
    isClearable: false,
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    isInvalid: false,
  },
};
