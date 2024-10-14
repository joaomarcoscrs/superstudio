import type { Meta, StoryObj } from '@storybook/react';
import { ColorSchemeToggle } from './ColorSchemeToggle';

const meta: Meta<typeof ColorSchemeToggle> = {
  title: 'Components/ColorSchemeToggle',
  component: ColorSchemeToggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColorSchemeToggle>;

export const Default: Story = {
  render: () => <ColorSchemeToggle />,
};

export const WithCustomStyles: Story = {
  render: () => (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <ColorSchemeToggle />
    </div>
  ),
};

export const InDarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => <ColorSchemeToggle />,
};
