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
    //TODO check this undefined here.There must be another way!
    label: {
      options: ['Email', 'Password', undefined],
      control: { type: 'inline-radio' },
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
      options: ['bordered', 'faded', 'flat', 'underline'],
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
      control: { type: 'inline-check' },
    },
    placeholder: {
      options: ['your-email@example.com'],
      control: { type: 'boolean' },
    },
    defaultValue: {
      options: ['aldo@gmail.com'],
      control: { type: 'boolean' },
    },
    errorMessage: {
      options: ['This input is required!'],
      control: { type: 'boolean' },
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
