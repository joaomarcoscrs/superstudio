import type { Meta, StoryObj } from '@storybook/react';
import { Debug } from '../../actions-core';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click me',
  },
};

export const WithCustomAction: Story = {
  args: {
    label: 'Custom Action',
    action: new Debug(),
    actionArgs: ['Custom debug message'],
  },
};

export const Variants: Story = {
  args: {
    label: 'Button Variant',
  },
  render: (args) => (
    <>
      <Button {...args} variant="filled" />
      <Button {...args} variant="outline" />
      <Button {...args} variant="light" />
    </>
  ),
};

export const Sizes: Story = {
  args: {
    label: 'Button Size',
  },
  render: (args) => (
    <>
      <Button {...args} size="xs" />
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
      <Button {...args} size="xl" />
    </>
  ),
};
