import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, createEvent, fireEvent, screen, waitFor } from '../../../test-utils';
import { render } from '../../../test-utils/render';
import Dropzone from './Dropzone';

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
    },
    label: 'Drag and drop files here',
    onDrop: mockOnDrop,
  };

  beforeEach(() => {
    mockOnDrop.mockClear();
  });

  it('renders with default props', () => {
    render(<Dropzone {...defaultProps} />);
    expect(screen.getByText('Upload files')).toBeDefined();
    expect(screen.getByText('Drag and drop files here')).toBeDefined();
  });

  it('renders with custom button', () => {
    const buttonProps = {
      size: 'lg',
      radius: 'xl',
      label: 'Custom Upload',
    };
    render(<Dropzone {...defaultProps} button={buttonProps} />);
    expect(screen.getByText('Custom Upload')).toBeDefined();
  });

  it('calls onDrop when files are dropped', async () => {
    render(<Dropzone {...defaultProps} />);
    const dropzone = screen.getByText('Drag and drop files here').closest('div');
    expect(dropzone).toBeDefined();

    const file = new File(['dummy content'], 'test.png', { type: 'image/png' });

    await act(async () => {
      const dropEvent = createEvent.drop(dropzone!);
      Object.defineProperty(dropEvent, 'dataTransfer', {
        value: {
          files: [file],
          types: ['Files'],
        },
      });
      fireEvent(dropzone!, dropEvent);
    });

    await waitFor(
      () => {
        expect(mockOnDrop).toHaveBeenCalledTimes(1);
        const callArgs = mockOnDrop.mock.calls[0];
        expect(callArgs[0]).toEqual([file]);
        expect(callArgs[1]).toBeDefined();
        expect(callArgs[1].type).toBe('drop');
      },
      { timeout: 3000 }
    );
  });

  it('shows accept message when valid file is dragged over', async () => {
    render(<Dropzone {...defaultProps} />);
    const dropzone = screen.getByText('Drag and drop files here').closest('div');
    expect(dropzone).toBeDefined();

    await act(async () => {
      fireEvent.dragEnter(dropzone!, {
        dataTransfer: {
          types: ['Files'],
          files: [new File([''], 'test.png', { type: 'image/png' })],
        },
      });
    });

    await waitFor(() => {
      expect(screen.getByText('Drop the files here')).toBeDefined();
    });
  });

  it('shows reject message when invalid file is dragged over', async () => {
    render(<Dropzone {...defaultProps} />);
    const dropzone = screen.getByText('Drag and drop files here').closest('div');
    expect(dropzone).toBeDefined();

    await act(async () => {
      fireEvent.dragEnter(dropzone!, {
        dataTransfer: {
          types: ['Files'],
          files: [new File([''], 'test.pdf', { type: 'application/pdf' })],
        },
      });
    });

    await waitFor(() => {
      expect(screen.getByText('File type not accepted')).toBeDefined();
    });
  });
});
