import React from 'react';
import { Image as MantineImage, ImageProps as MantineImageProps } from '@mantine/core';

interface ImageProps extends MantineImageProps {
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ fit = 'scale-down', style, className, alt, ...props }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MantineImage
        {...props}
        className={`object-${fit} max-w-full max-h-full ${className}`}
        style={{ width: 'auto', height: 'auto', ...style }}
        alt={alt}
      />
    </div>
  );
};

export default Image;
