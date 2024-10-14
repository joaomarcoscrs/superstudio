import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://example.com/image.jpg',
    style: { width: 300, height: 200 },
  },
};

export const WithFit: Story = {
  args: {
    ...Default.args,
    fit: 'contain',
  },
};

export const WithCustomStyle: Story = {
  args: {
    ...Default.args,
    style: {
      ...(Default.args?.style || {}),
      border: '2px solid red',
      borderRadius: '8px',
    },
  },
};

export const Variants: Story = {
  args: {
    src: 'https://example.com/image.jpg',
    style: { width: 200, height: 150 },
  },
  render: (args) => (
    <>
      <div>
        <Image {...args} fit="contain" />
        <p>Contain</p>
      </div>
      <div>
        <Image {...args} fit="cover" />
        <p>Cover</p>
      </div>
      <div>
        <Image {...args} fit="fill" />
        <p>Fill</p>
      </div>
      <div>
        <Image {...args} fit="none" />
        <p>None</p>
      </div>
      <div>
        <Image {...args} fit="scale-down" />
        <p>Scale Down</p>
      </div>
    </>
  ),
};
