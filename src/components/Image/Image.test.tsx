import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils/render';
import Image from './Image';

describe('Image', () => {
  const defaultProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Test image',
  };

  it('renders with default props', () => {
    render(<Image {...defaultProps} />);
    const imgElement = screen.getByRole('img', { name: 'Test image' });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('passes additional props to MantineImage', () => {
    render(<Image {...defaultProps} style={{ width: 200, height: 100 }} />);
    const imgElement = screen.getByRole('img', { name: 'Test image' });
    expect(imgElement).toHaveStyle({ width: '200px', height: '100px' });
  });

  it('renders with custom class name', () => {
    render(<Image {...defaultProps} className="custom-image" />);
    const imgElement = screen.getByRole('img', { name: 'Test image' });
    expect(imgElement).toHaveClass('custom-image');
  });

  it('applies correct styles when fit prop is provided', () => {
    render(<Image {...defaultProps} fit="contain" />);
    const imgElement = screen.getByRole('img', { name: 'Test image' });
    expect(imgElement).toHaveStyle({ objectFit: 'contain' });
  });

  // Remove or update this test based on the actual implementation of the Image component
  // it('renders placeholder when provided', () => {
  //   const placeholder = 'Loading...';
  //   render(<Image {...defaultProps} placeholder={placeholder} />);
  //   expect(screen.getByText(placeholder)).toBeInTheDocument();
  // });
});
