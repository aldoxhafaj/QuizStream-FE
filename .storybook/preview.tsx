import type { Preview } from '@storybook/react';
import '../src/index.css';
import { Container } from '../src/layouts/container';
import React from 'react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container className="dark">
        <Story />
      </Container>
    ),
  ],
};

export default preview;
