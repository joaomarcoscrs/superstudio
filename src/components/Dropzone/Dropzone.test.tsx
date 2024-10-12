import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, screen } from '../../../test-utils';
import { render } from '../../../test-utils/render';
import { Dropzone } from './Dropzone';

// Mock the FontAwesomeIcon component
vi.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div data-testid="mock-icon" />,
}));

describe('Dropzone', () => {
  const mockOnDrop = vi.fn();
  const defaultProps = {
    text: {
      accept: 'Drop the files here',
      reject: 'File type not accepted',
      idle: 'Upload files',
      main: "Drag'n'drop files here to upload",
    },
    onDrop: mockOnDrop,
  };

  beforeEach(() => {
    mockOnDrop.mockClear();
  });

  it('renders with default props', () => {
    render(<Dropzone {...defaultProps} />);
    expect(screen.getByText('Upload files')).toBeDefined();
    expect(screen.getByText("Drag'n'drop files here to upload")).toBeDefined();
  });

  it('renders with custom button', () => {
    const buttonProps = {
      size: 'lg',
      radius: 'xl',
      text: 'Custom Upload',
    };
    render(<Dropzone {...defaultProps} button={buttonProps} />);
    expect(screen.getByText('Custom Upload')).toBeDefined();
  });

  it('calls onDrop when files are dropped', async () => {
    render(<Dropzone {...defaultProps} />);
    const dropzone = screen.getByText("Drag'n'drop files here to upload");

    const file = new File(['dummy content'], 'test.png', { type: 'image/png' });
    fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

    expect(mockOnDrop).toHaveBeenCalledWith([file]);
  });

  it('shows accept message when valid file is dragged over', () => {
    render(<Dropzone {...defaultProps} />);
    const dropzone = screen.getByText("Drag'n'drop files here to upload");

    fireEvent.dragEnter(dropzone, {
      dataTransfer: {
        types: ['Files'],
        files: [new File([''], 'test.png', { type: 'image/png' })],
      },
    });

    expect(screen.getByText('Drop the files here')).toBeDefined();
  });

  it('shows reject message when invalid file is dragged over', () => {
    render(<Dropzone {...defaultProps} />);
    const dropzone = screen.getByText("Drag'n'drop files here to upload");

    fireEvent.dragEnter(dropzone, {
      dataTransfer: {
        types: ['Files'],
        files: [new File([''], 'test.jpg', { type: 'image/jpeg' })],
      },
    });

    expect(screen.getByText('File type not accepted')).toBeDefined();
  });
});
