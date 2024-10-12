import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './Dropzone';

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
      main: 'Drag and drop files here or click to select files',
    },
    onDrop: (files) => console.log('Dropped files:', files),
  },
};

export const WithButton: Story = {
  args: {
    ...Default.args,
    button: {
      size: 'sm',
      radius: 'xl',
      text: 'Select files',
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
