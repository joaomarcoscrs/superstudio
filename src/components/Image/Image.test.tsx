import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '../../../test-utils';
import { render } from '../../../test-utils/render';
import Image from './Image';

describe('Image', () => {
  const defaultProps = {
    src: 'test-image.jpg',
    alt: 'Test image',
  };

  it('renders with default props', () => {
    render(<Image {...defaultProps} />);
    const imgElement = screen.getByRole('img', { name: 'Test image' });
    expect(imgElement).toBeInTheDocument();
  });

  it('passes additional props to MantineImage', () => {
    render(<Image {...defaultProps} style={{ width: 200, height: 100 }} />);
    const imgElement = screen.getByRole('img', { name: 'Test image' });
    // Check if the style attribute contains the correct values
    expect(imgElement.getAttribute('style')).toContain('width: 200px');
    expect(imgElement.getAttribute('style')).toContain('height: 100px');
  });

  it('renders with custom class name', () => {
    render(<Image {...defaultProps} className="custom-image" />);
    const imgElement = screen.getByRole('img', { name: 'Test image' });
    // Check if the custom class is included along with default classes
    expect(imgElement).toHaveClass('custom-image');
    expect(imgElement).toHaveClass('object-scale-down');
    expect(imgElement).toHaveClass('max-w-full');
    expect(imgElement).toHaveClass('max-h-full');
  });
});
