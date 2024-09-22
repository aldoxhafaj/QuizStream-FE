import { ThemeProvider } from '@quiz-stream/contexts/ThemeContext/ThemeProvider';
import { Row } from '@quiz-stream/layouts/row';
import type { Meta, StoryObj } from '@storybook/react';

import { DarkModeToggler } from './DarkModeToggler';

const meta: Meta<typeof DarkModeToggler> = {
  component: DarkModeToggler,
};

export default meta;

type Story = StoryObj<typeof DarkModeToggler>;
export const DarkModeToggle: Story = {
  render: () => (
    <ThemeProvider>
      <Row>
        <DarkModeToggler />
      </Row>
    </ThemeProvider>
  ),
};
