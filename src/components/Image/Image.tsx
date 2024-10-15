import React from 'react';
import { Image as MantineImage, ImageProps as MantineImageProps } from '@mantine/core';

interface ImageProps extends MantineImageProps {
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ fit = 'scale-down', style, className, alt, ...props }) => {
  return (
    <MantineImage
      {...props}
      className={`object-${fit} max-w-full max-h-full ${className}`}
      style={{ ...style }}
      alt={alt}
    />
  );
};

export default Image;
