import type { Meta, StoryObj } from '@storybook/react';
import Dropzone from './Dropzone';

const meta: Meta<typeof Dropzone> = {
  title: 'Components/Dropzone',
  component: Dropzone,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
  args: {
    text: {
      accept: 'Drop the files here',
      reject: 'File type or size not allowed',
      idle: 'Upload files',
    },
    label: 'Upload files',
    // eslint-disable-next-line no-console
    onDrop: (files) => console.log('Dropped files:', files),
  },
};

export const WithButton: Story = {
  args: {
    ...Default.args,
    button: {
      size: 'sm',
      radius: 'xl',
      label: 'Select files',
    },
  },
};

export const CustomStyle: Story = {
  args: {
    ...Default.args,
    style: {
      maxWidth: '400px',
      margin: '0 auto',
    },
  },
};
