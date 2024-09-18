import { Container } from '@quiz-stream/layouts/container';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const CHECKBOX_VALUE = 'Approve';
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
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
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;
export const CheckboxComponent: Story = {
  render: (args) => (
    <Container className="dark">
      <Checkbox {...args}>Agree</Checkbox>
    </Container>
  ),
  args: {
    value: CHECKBOX_VALUE,
    defaultSelected: true,
    isDisabled: false,
    isIndeterminate: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    lineThrough: false,
  },
};
