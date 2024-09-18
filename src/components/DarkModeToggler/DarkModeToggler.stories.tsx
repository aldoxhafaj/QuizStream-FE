import { IconSVG } from '@quiz-stream/layouts/iconSVG';
import { Row } from '@quiz-stream/layouts/row';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

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
//TODO this is wrong.find a better way.storybook should have knowledge of your theme context
const DarkThemeToggler = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Row
      className="size-8 cursor-pointer select-none rounded-x1 bg-slate-900 hover:opacity-85 active:opacity-60"
      onClick={() => setIsSelected((prevSelected) => !prevSelected)}
    >
      <IconSVG name={isSelected ? 'sun' : 'moon'} />
    </Row>
  );
};

export default meta;

type Story = StoryObj<typeof DarkModeToggler>;
export const DarkModeToggle: Story = {
  render: () => <DarkThemeToggler />,
};
